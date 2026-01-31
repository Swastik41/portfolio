import nodemailer from "nodemailer";

// Create transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_PASSWORD,
  },
});

export async function sendContactEmail(
  name: string,
  email: string,
  message: string
) {
  try {
    // Email to you (portfolio owner)
    await transporter.sendMail({
      from: process.env.GMAIL_EMAIL,
      to: process.env.GMAIL_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    // Confirmation email to the client
    await transporter.sendMail({
      from: process.env.GMAIL_EMAIL,
      to: email,
      subject: "We received your message",
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${name},</p>
        <p>I've received your message and will get back to you as soon as possible, usually within 24 hours.</p>
        <p>Best regards,<br>Swastik Pathak</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Email sending error:", error);
    throw error;
  }
}
