import mongoose, { type Document, Schema } from "mongoose"

export interface IUser extends Document {
  name: string
  email: string
  googleId: string
  accessToken: string
  refreshToken: string
}

const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    googleId: { type: String, required: true, unique: true },
    accessToken: { type: String, required: true },
    refreshToken: { type: String, required: true },
  },
  { timestamps: true },
)

export default mongoose.model<IUser>("User", UserSchema)

