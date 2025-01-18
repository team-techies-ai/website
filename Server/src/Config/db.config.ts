import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        const uri ="mongodb+srv://team-techies:9iXs8iKKpFry5X12@cluster0.ws77r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        if (!uri) {
            throw new Error("MongoDB URI is not defined in the environment variables.");
        }
        await mongoose.connect(uri);
        console.log("MongoDB connected successfully!");
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1);
    }
};

export default connectDB;
