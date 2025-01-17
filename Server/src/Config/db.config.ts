import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI || "mongodb+srv://kpavan892002:kpa1234v6789an@dways.fvlyu.mongodb.net/";
        await mongoose.connect(uri); // No need for useNewUrlParser and useUnifiedTopology anymore
        console.log("MongoDB connected successfully!");
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1);
    }
};

export default connectDB;
