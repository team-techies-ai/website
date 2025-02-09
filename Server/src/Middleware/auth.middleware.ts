import type { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import dotenv from "dotenv";
dotenv.config();

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.header("Authorization")?.split(" ")[1]

  if (!token) {
    res.status(401).json({ message: "No token, authorization denied" })
    return
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { userId: string }
    ;(req as any).userId = decoded.userId
    next()
  } catch (error) {
    res.status(401).json({ message: "Token is not valid" })
  }
}

