import { OAuth2Client } from "google-auth-library"
import jwt from "jsonwebtoken"
import User from "../Models/user.model"

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

export const googleAuthService = async (idToken: string) => {
  const ticket = await client.verifyIdToken({
    idToken,
    audience: process.env.GOOGLE_CLIENT_ID,
  })

  const payload = ticket.getPayload()
  if (!payload) throw new Error("Invalid Google token")

  const { name, email, sub: googleId } = payload

  let user = await User.findOne({ googleId })

  if (!user) {
    user = new User({
      name,
      email,
      googleId,
      accessToken: "",
      refreshToken: "",
    })
  }

  const accessToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET as string, { expiresIn: "1h" })
  const refreshToken = jwt.sign({ userId: user._id }, process.env.JWT_REFRESH_SECRET as string, { expiresIn: "7d" })

  user.accessToken = accessToken
  user.refreshToken = refreshToken
  await user.save()

  return { user, accessToken, refreshToken }
}

export const refreshTokenService = async (refreshToken: string, userId: string) => {
  const user = await User.findById(userId)
  if (!user || user.refreshToken !== refreshToken) {
    throw new Error("Invalid refresh token")
  }

  const accessToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET as string, { expiresIn: "1h" })

  return { accessToken }
}

