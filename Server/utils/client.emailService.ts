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

export const sendClientWelcomeEmail = async (name: string, email: string) => {
  const mailOptions = {
    from: {
      name: "Team Techies Client Relations",
      address: process.env.EMAIL_USER as string,
    },
    to: email,
    subject: "Welcome to Team Techies - We're Excited to Work with You!",
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Team Techies</title>
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
            <h1>Welcome to Team Techies!</h1>
          </div>
          <div class="content">
            <p>Dear ${name},</p>
            <p>On behalf of everyone at Team Techies, I would like to extend a warm welcome and thank you for choosing to partner with us. We are truly excited about the opportunity to work with you and contribute to your success.</p>
            <p>At Team Techies, we pride ourselves on delivering innovative solutions and exceptional service. Our team of dedicated professionals is committed to understanding your unique needs and providing tailored solutions that drive your business forward.</p>
            <p>Here's what you can expect from our partnership:</p>
            <ul>
              <li>A dedicated account manager to oversee your projects and ensure smooth communication</li>
              <li>Regular updates on project progress and milestones</li>
              <li>Access to our cutting-edge technologies and industry expertise</li>
              <li>Prompt and professional support whenever you need it</li>
            </ul>
            <p>We believe that open communication is key to a successful partnership. Please don't hesitate to reach out if you have any questions, concerns, or ideas. We're here to listen and collaborate.</p>
            <p>Once again, welcome aboard! We look forward to a long and fruitful relationship.</p>
            <p>Best regards,<br>The Team Techies Family</p>
          </div>
          <div class="footer">
            <p>&copy; 2025 Team Techies. All rights reserved.</p>
            <p>This email was sent to you as a new client of Team Techies. If you believe this is an error, please contact us at support@teamtechies.com.</p>
          </div>
        </div>
      </body>
      </html>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return { success: true, message: "Welcome email sent to client" }
  } catch (error) {
    console.error("Error sending client welcome email:", error)
    throw new Error("Error sending client welcome email")
  }
}

