// import { Request, Response } from "express";
// import { addSubscribe } from "../Services/subscribe.service";


// export const Subscribe = async (req: Request, res: Response) => {
    
//     const subscribeData = req.body;
//     console.log(subscribeData);
    
//     const subscribed = await addSubscribe(subscribeData);
//     try {
//         res.status(201).json({ message: "Subscribed successfully", subscribed });
//     } catch (error) {
//         res.status(500).json({ error: "Failed Subscribe" });
//     }
// };
import type { Request, Response } from "express"
import { addSubscribe } from "../Services/subscribe.service"
import { sendSubscriptionEmail } from "../../utils/subscribe.emailService"

export const Subscribe = async (req: Request, res: Response) => {
  try {
    const subscribeData = req.body
    console.log(subscribeData)

    const subscribed = await addSubscribe(subscribeData)

    // Send subscription confirmation email
    try {
      await sendSubscriptionEmail(subscribeData.email)
    } catch (emailError) {
      console.error("Error sending subscription email:", emailError)
      // Note: We're not stopping the process if email fails, just logging the error
    }

    res.status(201).json({ message: "Subscribed successfully", subscribed })
  } catch (error) {
    console.error("Error in subscription process:", error)
    res.status(500).json({ error: "Failed to subscribe" })
  }
}

