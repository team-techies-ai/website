// import { Request, Response } from "express";
// import { createClient } from "../Services/client.service";
// import { clientSchema } from "../Validator/client.validator";

// export const addClient = async (req: Request, res: Response) => {
    
//     const clientData = req.body;
//     const client = await createClient(clientData);
//     console.log(client,"------------------------")
//     try {
//         res.status(201).json({ message: "Client added successfully", client });
//     } catch (error) {
//         res.status(500).json({ error: "Failed to add client" });
//     }
// };

import type { Request, Response } from "express"
import { createClient } from "../Services/client.service"
import { clientSchema } from "../Validator/client.validator"
import { sendClientWelcomeEmail } from "../../utils/client.emailService"

export const addClient = async (req: Request, res: Response) => {
  try {
    const clientData = req.body

    const client = await createClient(clientData)
    console.log(client, "------------------------")

    // Send welcome email to the new client
    try {
      await sendClientWelcomeEmail(client.companyName, client.email)
    } catch (emailError) {
      console.error("Error sending welcome email to client:", emailError)
      // Note: We're not stopping the process if email fails, just logging the error
    }

    res.status(201).json({ message: "Client added successfully", client })
  } catch (error) {
    console.error("Error adding client:", error)
    res.status(500).json({ error: "Failed to add client" })
  }
}

