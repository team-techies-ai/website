import mongoose, { type Document, Schema } from "mongoose"

export interface IUser extends Document {
  _id: string;
  name: string;
  email: string;
  googleId: string;
  accessToken: string;
  refreshToken: string;
  profilePic: string;
  username: string;
  profession: 'Student' | 'Employee' | 'Business Owner';
  bio: string;
  contactNumber: string;
  location: string;
  skills: string[];
  role?: string;
  companyName?: string;
  studyingYear?: string;
  degree?: string;
}

const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    googleId: { type: String, required: true, unique: true },
    accessToken: { type: String, required: true },
    refreshToken: { type: String, required: true },
    profilePic: { type: String, default: '' },
    username: { type: String, unique: true, sparse: true },
    profession: { 
      type: String, 
      enum: ['Student', 'Employee', 'Business Owner'],
      default: 'Student'
    },
    bio: { type: String, default: '' },
    contactNumber: { type: String, default: '' },
    location: { type: String, default: '' },
    skills: [{ type: String }],
    role: { type: String, default: '' },
    companyName: { type: String, default: '' },
    studyingYear: { type: String, default: '1' },
    degree: { type: String, default: 'BTech' }
  },
  { timestamps: true },
)

export default mongoose.model<IUser>("User", UserSchema)

