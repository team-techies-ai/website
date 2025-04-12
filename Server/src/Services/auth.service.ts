import dotenv from "dotenv";
dotenv.config();
import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";
import User, { IUser } from "../Models/user.model";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

interface GooglePayload {
  name?: string;
  email?: string;
  sub?: string;
  picture?: string;
}

interface UserResponse {
  user: Partial<IUser>;
  accessToken: string;
  refreshToken: string;
}

export const googleAuthService = async (idToken: string): Promise<UserResponse> => {
  const ticket = await client.verifyIdToken({
    idToken,
    audience: process.env.GOOGLE_CLIENT_ID,
  });

  const payload: GooglePayload | undefined = ticket.getPayload();
  if (!payload || !payload.name || !payload.email || !payload.sub) {
    throw new Error("Invalid Google token");
  }

  const { name, email, sub: googleId, picture } = payload;

  let user = await User.findOne({ googleId });

  if (!user) {
    // Create new user with default values for new fields
    user = new User({
      name,
      email,
      googleId,
      profilePic: picture || "",
      username: `user_${Date.now()}`,
      profession: 'Student',
      bio: '',
      contactNumber: '',
      location: '',
      skills: [],
      studyingYear: '1',
      degree: 'BTech',
      role: '',
      companyName: '',
      accessToken: "",
      refreshToken: ""
    });
  } else {
    // Update existing user's profile picture
    if (picture) {
      user.profilePic = picture;
    }
  }

  // Generate new tokens
  const accessToken = jwt.sign(
    { userId: user._id }, 
    process.env.JWT_SECRET || "",
    { expiresIn: "1h" }
  );
  
  const refreshToken = jwt.sign(
    { userId: user._id }, 
    process.env.JWT_REFRESH_SECRET || "",
    { expiresIn: "7d" }
  );

  // Update tokens
  user.accessToken = accessToken;
  user.refreshToken = refreshToken;
  await user.save();

  // Create a safe user object without sensitive data
  const userResponse = user.toObject();
  const safeUser: Partial<IUser> = {
    _id: userResponse._id,
    name: userResponse.name,
    email: userResponse.email,
    profilePic: userResponse.profilePic,
    username: userResponse.username,
    profession: userResponse.profession,
    bio: userResponse.bio,
    contactNumber: userResponse.contactNumber,
    location: userResponse.location,
    skills: userResponse.skills,
    studyingYear: userResponse.studyingYear,
    degree: userResponse.degree,
    role: userResponse.role,
    companyName: userResponse.companyName
  };

  return { 
    user: safeUser,
    accessToken, 
    refreshToken 
  };
};

interface RefreshTokenResponse {
  accessToken: string;
}

export const refreshTokenService = async (
  refreshToken: string, 
  userId: string
): Promise<RefreshTokenResponse> => {
  const user = await User.findById(userId);
  if (!user || user.refreshToken !== refreshToken) {
    throw new Error("Invalid refresh token");
  }

  const accessToken = jwt.sign(
    { userId: user._id }, 
    process.env.JWT_SECRET || "",
    { expiresIn: "1h" }
  );

  user.accessToken = accessToken;
  await user.save();

  return { accessToken };
};

async function generateUniqueUsername(baseName: string): Promise<string> {
  const sanitizedName = baseName.toLowerCase().replace(/[^a-z0-9]/g, '');
  let username = sanitizedName;
  let counter = 1;

  while (await User.findOne({ username })) {
    username = `${sanitizedName}${counter}`;
    counter++;
  }

  return username;
}

interface ValidationErrors {
  errors: string[];
}

export const validateUserData = (data: Partial<IUser>): ValidationErrors => {
  const errors: string[] = [];

  if (data.profession && !['Student', 'Employee', 'Business Owner'].includes(data.profession)) {
    errors.push('Invalid profession type');
  }

  if (data.skills && !Array.isArray(data.skills)) {
    errors.push('Skills must be an array');
  }

  return { errors };
};

export const formatUserResponse = (user: IUser): Partial<IUser> => {
  const userObj = user.toObject();
  
  // Create a new object with only the safe fields
  const safeUser: Partial<IUser> = {
    _id: userObj._id,
    name: userObj.name,
    email: userObj.email,
    profilePic: userObj.profilePic,
    username: userObj.username,
    profession: userObj.profession,
    bio: userObj.bio,
    contactNumber: userObj.contactNumber,
    location: userObj.location,
    skills: userObj.skills,
    studyingYear: userObj.studyingYear,
    degree: userObj.degree,
    role: userObj.role || null,
    companyName: userObj.companyName || null
  };
  
  return safeUser;
};

