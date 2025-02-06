import express from "express"
import { googleAuth, refreshToken } from "../Controllers/auth.controller"
import { authMiddleware } from "../Middleware/auth.middleware"

const router = express.Router()

router.post("/google", googleAuth)
router.post("/refresh-token", authMiddleware, refreshToken)

export default router

