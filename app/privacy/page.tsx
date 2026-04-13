import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "CloudDogg privacy policy information.",
};

const sections = [
  {
    title: "Information we collect",
    body:
      "CloudDogg may collect the information you submit through contact forms, newsletter signups, and basic site analytics. That may include your name, email address, phone number, organization, and the message you choose to send.",
  },
  {
    title: "How we use it",
    body:
      "We use submitted information to respond to inquiries, evaluate project fit, send requested updates, improve site performance, and understand which parts of the site are helping visitors find the right path.",
  },
  {
    title: "How we protect it",
    body:
      "CloudDogg takes reasonable administrative and technical measures to protect personal information. No transmission method or storage system is guaranteed to be perfectly secure, but access is limited to business needs and operational support.",
  },
  {
    title: "Third-party services",
    body:
      "The site may rely on third-party tools for hosting, analytics, forms, or email delivery. Those providers process data under their own terms and privacy practices. CloudDogg does not sell your personal information.",
  },
  {
    title: "Contact",
    body:
      "For privacy questions or deletion requests, contact joshua.dixon@clouddogg.com.",
  },
];

export default function PrivacyPage() {
  return (
    <main>
      <PageHero
        label="Privacy Policy"
        title={
          <>
            Privacy information for visitors, subscribers, and people who contact CloudDogg.
          </>
        }
        description="This page exists so the redesigned footer and cookie paths lead somewhere real and readable."
      />

      <section className="section">
        <div className="container legal-layout">
          {sections.map((section) => (
            <section key={section.title} className="surface-card legal-card">
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
