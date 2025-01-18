import { Request, Response } from "express";
import { addSubscribe } from "../Services/subscribe.service";


export const Subscribe = async (req: Request, res: Response) => {
    
    const subscribeData = req.body;
    console.log(subscribeData);
    
    const subscribed = await addSubscribe(subscribeData);
    try {
        res.status(201).json({ message: "Subscribed successfully", subscribed });
    } catch (error) {
        res.status(500).json({ error: "Failed Subscribe" });
    }
};
