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
import { googleAuthService, refreshTokenService } from "../Services/auth.service"

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
    const { refreshToken } = req.body
    const userId = req.userId
    if (!userId) {
      res.status(401).json({ message: "User not authenticated" })
      return
    }
    const result = await refreshTokenService(refreshToken, userId)
    res.status(200).json(result)
  } catch (error: unknown) {
    next(error)
  }
}

