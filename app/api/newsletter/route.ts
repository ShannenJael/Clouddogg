import { NextRequest, NextResponse } from "next/server";

// TODO: Connect to a newsletter service (e.g. Mailchimp, ConvertKit, Resend Audiences)
// to actually store subscribers. For now this endpoint validates and acknowledges.
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Log subscription server-side for now
    console.log("Newsletter subscription:", email);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, message: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
