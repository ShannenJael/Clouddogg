import { NextRequest, NextResponse } from "next/server";
import { isEmail, isObject, textField } from "@/lib/form-validation";
import { MailUnavailableError, sendSiteMail } from "@/lib/mail";

export async function POST(req: NextRequest) {
  const body: unknown = await req.json().catch(() => null);
  if (!isObject(body)) {
    return NextResponse.json({ success: false, message: "Please provide a valid form submission." }, { status: 400 });
  }

  const firstName = textField(body.first_name, 100);
  const lastName = textField(body.last_name, 100);
  const email = textField(body.email, 254);
  const message = textField(body.message, 5000);
  const phone = body.phone === undefined ? "" : textField(body.phone, 50);
  const service = body.service === undefined ? "" : textField(body.service, 100);

  if (!firstName || !lastName || !email || !isEmail(email) || !message || phone === undefined || service === undefined) {
    return NextResponse.json(
      { success: false, message: "Please fill in all required fields and provide a valid email address. Keep your message under 5,000 characters." },
      { status: 400 }
    );
  }

  try {
    await sendSiteMail({
      replyTo: email,
      subject: `New project inquiry from ${firstName} ${lastName}`,
      text: [
        `Name: ${firstName} ${lastName}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Service Interest: ${service || "Not specified"}`,
        "", "Message:", message,
      ].join("\n"),
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    const unavailable = error instanceof MailUnavailableError;
    console.error("Contact delivery failed:", unavailable ? "not configured" : "mail delivery error");
    return NextResponse.json(
      { success: false, message: "We couldn't send your message. Please try again or email service@clouddogg.com." },
      { status: unavailable ? 503 : 502 }
    );
  }
}
