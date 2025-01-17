// src/models/team.model.ts
import mongoose, { Schema, Document } from "mongoose";
import { ITeam } from "../Interfaces/team.interface";

const teamSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contact: { type: String, required: true },
    resume: { type: String, required: true },
    coverLetter: { type: String, required: true },
  },
  { timestamps: true }
);

const Team = mongoose.model<ITeam & Document>("Team", teamSchema);

export default Team;
