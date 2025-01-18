import express from "express";
import multer from "multer";
import { joinTeam } from "../Controllers/team.controller";
import path from 'path';

const router = express.Router();

// Configure multer
const upload = multer({ dest: 'uploads/' });

// Route for joining Team Techies
router.post("/team", upload.fields([
  { name: "resume", maxCount: 1 },
  { name: "coverLetter", maxCount: 1 }
]), joinTeam);


router.get('/files/:filename', (req, res) => {
    const fileName = req.params.filename;
    const filePath = path.join(__dirname, '../../uploads', fileName);

    // Check if the file exists
    res.download(filePath, (err) => {
        if (err) {
            console.error(err);
            res.status(404).send({ error: "File not found!" });
        }
    });
});
export default router;

