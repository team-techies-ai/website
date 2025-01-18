import { Request, Response } from "express";
import TeamService from "../Services/team.service";

// Define a type for the expected structure of req.files
interface MulterFiles {
  [fieldname: string]: Express.Multer.File[];
}

export const joinTeam = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, contact } = req.body;

    // Type assertion for req.files
    const files = req.files as MulterFiles | undefined;

    if (!files || !files.resume || !files.coverLetter) {
      res.status(400).json({ error: "Missing required files" });
      return;
    }

    const resume = files.resume[0].path;
    const coverLetter = files.coverLetter[0].path;

    // Check for missing fields
    const missingFields = [];
    if (!name) missingFields.push("name");
    if (!email) missingFields.push("email");
    if (!contact) missingFields.push("contact");
    if (!resume) missingFields.push("resume");
    if (!coverLetter) missingFields.push("coverLetter");

    if (missingFields.length > 0) {
      res.status(400).json({ 
        error: "Missing required fields", 
        missingFields 
      });
      return;
    }

    const newTeamMember = await TeamService.createTeamMember({
      name,
      email,
      contact,
      resume,
      coverLetter,
    });

    res.status(201).json({
      message: "Successfully joined Team Techies!",
      teamMember: newTeamMember,
    });
  } catch (error) {
    console.error("Error joining team:", error);
    res.status(500).json({ error: "Server error" });
  }
};

