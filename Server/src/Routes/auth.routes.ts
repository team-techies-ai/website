import express from "express"
import { 
  googleAuth, 
  refreshToken,
  getUserProfile,
  updateUserProfile,
} from "../Controllers/auth.controller"
import { authMiddleware } from "../Middleware/auth.middleware"

const router = express.Router()

// Authentication routes
router.post("/google", googleAuth)
router.post("/refresh-token", refreshToken)

// Protected profile routes (require authentication)
router.get("/user/profile", authMiddleware, getUserProfile)
router.put("/user/profile", authMiddleware, updateUserProfile)


export default router

