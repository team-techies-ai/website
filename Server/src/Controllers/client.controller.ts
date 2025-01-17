import { Request, Response } from "express";
import { createClient } from "../Services/client.service";
import { clientSchema } from "../Validator/client.validator";

export const addClient = async (req: Request, res: Response) => {
    
    const clientData = req.body;
    const client = await createClient(clientData);
    console.log(client,"------------------------")
    try {
        res.status(201).json({ message: "Client added successfully", client });
    } catch (error) {
        res.status(500).json({ error: "Failed to add client" });
    }
};
