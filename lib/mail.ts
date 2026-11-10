import nodemailer from "nodemailer";
import type Mail from "nodemailer/lib/mailer";

export class MailUnavailableError extends Error {}

export async function sendSiteMail(message: Pick<Mail.Options, "subject" | "text" | "replyTo">) {
  const { SMTP_HOST, SMTP_USER, SMTP_PASS } = process.env;
  const port = Number(process.env.SMTP_PORT || 587);
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !Number.isInteger(port) || port < 1 || port > 65535) {
    throw new MailUnavailableError("Mail is not configured.");
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });

  await transporter.sendMail({
    from: { name: "CloudDogg Website", address: SMTP_USER },
    to: "service@clouddogg.com",
    ...message,
  });
}
