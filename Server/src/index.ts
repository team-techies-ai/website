import express from "express";
import dotenv from "dotenv";
import connectDB from "./Config/db.config";
import routes from "./Routes";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: "https://teamtechies.onrender.com/", 
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use("/api", routes);
app.use('/uploads', express.static('uploads'));

connectDB();

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
