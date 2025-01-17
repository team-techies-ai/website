import { Request, Response } from 'express';

export const addClient = async (req: Request, res: Response): Promise<void> => {
  try {
    // Client data processing
    const client = req.body;
    // Logic to add client
    res.status(201).json({ message: "Client added successfully", data: client });
  } catch (error) {
    res.status(500).json({ message: "Error adding client", error });
  }
};
