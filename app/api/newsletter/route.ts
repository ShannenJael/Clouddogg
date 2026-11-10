import { NextRequest, NextResponse } from "next/server";
import { isEmail, isObject, textField } from "@/lib/form-validation";
import { MailUnavailableError, sendSiteMail } from "@/lib/mail";

export async function POST(req: NextRequest) {
  const body: unknown = await req.json().catch(() => null);
  const email = isObject(body) ? textField(body.email, 254) : undefined;
  if (!email || !isEmail(email)) {
    return NextResponse.json(
      { success: false, message: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  try {
    // Deliver the request to the existing inbox for subscription management.
    // Only acknowledge it once SMTP confirms receipt; never log subscriber data.
    await sendSiteMail({
      replyTo: email,
      subject: "New CloudDogg newsletter subscription request",
      text: `Newsletter subscription requested by: ${email}\n\nPlease add this address to the CloudDogg newsletter through your subscription management process.`,
    });
    return NextResponse.json({ success: true, message: "Subscription request received." });
  } catch (error) {
    const unavailable = error instanceof MailUnavailableError;
    console.error("Newsletter delivery failed:", unavailable ? "not configured" : "mail delivery error");
    return NextResponse.json(
      { success: false, message: "We couldn't save your subscription request. Please try again or email service@clouddogg.com." },
      { status: unavailable ? 503 : 502 }
    );
  }
}
