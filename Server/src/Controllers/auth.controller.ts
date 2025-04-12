// import type { Request, Response } from "express"
// import { googleAuthService, refreshTokenService } from "../Services/auth.service"

// // Extend the Express Request interface
// declare module "express-serve-static-core" {
//   interface Request {
//     userId?: string
//   }
// }

// export const googleAuth = async (req: Request, res: Response) => {
//   try {
//     const { idToken } = req.body
//     console.log(idToken,"------------------------------------")
//     const result = await googleAuthService(idToken)
//     res.status(200).json(result)
//   } catch (error: unknown) {
//     if (error instanceof Error) {
//       res.status(500).json({ message: "Server error", error: error.message })
//     } else {
//       res.status(500).json({ message: "An unknown error occurred" })
//     }
//   }
// }

// export const refreshToken = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const { refreshToken } = req.body
//     const userId = (req as any).userId
//     if (!userId) {
//       res.status(401).json({ message: "User not authenticated" })
//       return
//     }
//     const result = await refreshTokenService(refreshToken, userId)
//     res.status(200).json(result)
//   } catch (error: unknown) {
//     if (error instanceof Error) {
//       res.status(500).json({ message: "Server error", error: error.message })
//     } else {
//       res.status(500).json({ message: "An unknown error occurred" })
//     }
//   }
// }

import type { Request, Response, NextFunction } from "express"
import { 
  googleAuthService, 
  refreshTokenService, 
  validateUserData, 
  formatUserResponse 
} from "../Services/auth.service"
import User from "../Models/user.model"

// Extend the Express Request interface
declare module "express-serve-static-core" {
  interface Request {
    userId?: string
  }
}

export const googleAuth = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { credential } = req.body
    console.log("Received credential:------------------------------------", credential)
    if (!credential) {
      res.status(400).json({ message: "No credential provided" })
      return
    }
    const result = await googleAuthService(credential)
    res.status(200).json(result)
  } catch (error: unknown) {
    console.error("Google Auth Error:", error)
    next(error)
  }
}

export const refreshToken = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { refreshToken, userId } = req.body;
    
    if (!refreshToken || !userId) {
      res.status(400).json({ message: "Refresh token and userId are required" });
      return;
    }

    const result = await refreshTokenService(refreshToken, userId);
    res.status(200).json(result);
  } catch (error: unknown) {
    next(error);
  }
}

export const getUserProfile = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const userId = req.userId
    console.log(userId,"------------------------------------11-apr")
    if (!userId) {
      res.status(401).json({ message: "User not authenticated" })
      return
    }

    const user = await User.findById(userId).select('-accessToken -refreshToken -googleId')
    if (!user) {
      res.status(404).json({ message: "User not found" })
      return
    }

    res.status(200).json(user)
  } catch (error: unknown) {
    next(error)
  }
}

export const updateUserProfile = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const userId = req.userId
    if (!userId) {
      res.status(401).json({ message: "User not authenticated" })
      return
    }

    // Validate the input data first
    const { errors } = validateUserData(req.body)
    if (errors.length > 0) {
      res.status(400).json({ errors })
      return
    }

    const {
      username,
      profession,
      bio,
      contactNumber,
      location,
      skills,
      role,
      companyName,
      studyingYear,
      degree
    } = req.body

    // Validate profession enum
    if (profession && !['Student', 'Employee', 'Business Owner'].includes(profession)) {
      res.status(400).json({ message: "Invalid profession type" })
      return
    }

    // Check username uniqueness
    if (username) {
      const existingUser = await User.findOne({ username, _id: { $ne: userId } })
      if (existingUser) {
        res.status(400).json({ message: "Username already taken" })
        return
      }
    }

    // Only allow updating specific fields (not profilePic)
    const updateData = {
      ...(username && { username }),
      ...(profession && { profession }),
      ...(bio && { bio }),
      ...(contactNumber && { contactNumber }),
      ...(location && { location }),
      ...(skills && { skills }),
      ...(profession === 'Student' ? {
        studyingYear,
        degree,
        role: null,
        companyName: null
      } : {
        role,
        companyName,
        studyingYear: null,
        degree: null
      })
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      updateData,
      { 
        new: true, 
        runValidators: true,
        select: '-accessToken -refreshToken -googleId' // Exclude sensitive data
      }
    )

    if (!updatedUser) {
      res.status(404).json({ message: "User not found" })
      return
    }

    const formattedUser = formatUserResponse(updatedUser)
    res.status(200).json(formattedUser)
  } catch (error: unknown) {
    next(error)
  }
}


