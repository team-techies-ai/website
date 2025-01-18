import express from "express";
import dotenv from "dotenv";
import connectDB from "./Config/db.config";
import routes from "./Routes";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.json());
app.use("/api", routes);
app.use('/uploads', express.static('uploads'));

connectDB();

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
