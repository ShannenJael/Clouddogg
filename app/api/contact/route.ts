import { NextRequest, NextResponse } from "next/server";

// TODO: Connect to an email service (e.g. Resend, SendGrid, nodemailer via SMTP)
// to actually deliver messages. For now this endpoint validates and acknowledges.
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { first_name, last_name, email, message } = body;

    if (!first_name || !last_name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Log submission server-side for now
    console.log("Contact form submission:", { first_name, last_name, email });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, message: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
