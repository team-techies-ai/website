import mongoose, { Schema, Document } from "mongoose";
import { Client } from "../Interfaces/client.interface"

interface ClientDocument extends Client, Document {}

const ClientSchema = new Schema<ClientDocument>({
    companyName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contactNumber: { type: String, required: true },
    schedule: {
        date: { type: String, required: true },
        time: { type: String, required: true },
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
});

export default mongoose.model<ClientDocument>("Client", ClientSchema);
