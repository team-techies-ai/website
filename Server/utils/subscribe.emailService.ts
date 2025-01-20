import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config()

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
})

export const sendSubscriptionEmail = async (email: string) => {
  const mailOptions = {
    from: {
      name: "Team Techies Newsletter",
      address: process.env.EMAIL_USER as string,
    },
    to: email,
    subject: "Welcome to Team Techies Newsletter!",
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Team Techies Newsletter</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #4a90e2; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; }
          .footer { background-color: #f4f4f4; padding: 10px; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Welcome to Team Techies Newsletter!</h1>
          </div>
          <div class="content">
            <p>Dear Subscriber,</p>
            <p>Thank you for subscribing to the Team Techies Newsletter! We're excited to have you join our community of tech enthusiasts.</p>
            <p>Here's what you can expect from our newsletter:</p>
            <ul>
              <li>Latest tech news and trends</li>
              <li>Exclusive insights from our team of experts</li>
              <li>Upcoming events and webinars</li>
              <li>Special offers and discounts on our products and services</li>
            </ul>
            <p>Stay tuned for our next newsletter, coming soon to your inbox!</p>
            <p>If you have any questions or feedback, feel free to reply to this email. We'd love to hear from you!</p>
            <p>Best regards,<br>The Team Techies Newsletter Team</p>
          </div>
          <div class="footer">
            <p>&copy; 2025 Team Techies. All rights reserved.</p>
            <p>You're receiving this email because you subscribed to our newsletter. If you'd like to unsubscribe, please click <a href="#">here</a>.</p>
          </div>
        </div>
      </body>
      </html>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return { success: true, message: "Subscription confirmation email sent" }
  } catch (error) {
    console.error("Error sending subscription email:", error)
    throw new Error("Error sending subscription email")
  }
}

