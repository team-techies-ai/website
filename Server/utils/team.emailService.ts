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

export const sendWelcomeEmail = async (name: string, email: string) => {
  const mailOptions = {
    from: {
      name: "Team Techies",
      address: process.env.EMAIL_USER as string,
    },
    to: email,
    subject: "Welcome to Team Techies!",
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
          .team-member { display: inline-block; margin: 10px; text-align: center; }
          .team-member img { width: 100px; height: 100px; border-radius: 50%; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Welcome to Team Techies!</h1>
          </div>
          <div class="content">
            <p>Dear ${name},</p>
            <p>We are thrilled to welcome you to Team Techies! Your application has been successfully processed, and we're excited to have you on board.</p>
            <p>At Team Techies, we're passionate about innovation, collaboration, and pushing the boundaries of technology. We believe your skills and enthusiasm will be a great addition to our team.</p>
            <h2>Meet some of our team members:</h2>
            <div class="team-members">
              <div class="team-member">
                <img src="https://via.placeholder.com/100" alt="Team Member 1">
                <p>John Doe<br>Lead Developer</p>
              </div>
              <div class="team-member">
                <img src="https://via.placeholder.com/100" alt="Team Member 2">
                <p>Jane Smith<br>UX Designer</p>
              </div>
              <div class="team-member">
                <img src="https://via.placeholder.com/100" alt="Team Member 3">
                <p>Mike Johnson<br>Project Manager</p>
              </div>
            </div>
            <p>We'll be in touch shortly with more information about your onboarding process and next steps.</p>
            <p>If you have any questions in the meantime, feel free to reach out to us at support@teamtechies.com.</p>
            <p>Once again, welcome to the team!</p>
            <p>Best regards,<br>The Team Techies Family</p>
          </div>
          <div class="footer">
            <p>&copy; 2025 Team Techies. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return { success: true, message: "Welcome email sent" }
  } catch (error) {
    console.error("Error sending welcome email:", error)
    throw new Error("Error sending email")
  }
}

