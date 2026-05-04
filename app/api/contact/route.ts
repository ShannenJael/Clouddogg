import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,       // e.g. mail.clouddogg.com
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,                      // true for port 465, false for 587
  auth: {
    user: process.env.SMTP_USER,     // your Bluehost email address
    pass: process.env.SMTP_PASS,     // your Bluehost email password
  },
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { first_name, last_name, email, phone, service, message } = body;

    if (!first_name || !last_name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    await transporter.sendMail({
      from: `"CloudDogg Contact Form" <${process.env.SMTP_USER}>`,
      to: "service@clouddogg.com",
      replyTo: email,
      subject: `New project inquiry from ${first_name} ${last_name}`,
      text: [
        `Name: ${first_name} ${last_name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Service Interest: ${service || "Not specified"}`,
        ``,
        `Message:`,
        message,
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { success: false, message: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
