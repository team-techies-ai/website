// src/models/team.model.ts
import mongoose, { Schema, Document } from "mongoose";
import { ISubscribe } from "../Interfaces/subscribe.interface";

const subscribeSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

const Team = mongoose.model<ISubscribe & Document>("Subscribe", subscribeSchema);

export default Team;
