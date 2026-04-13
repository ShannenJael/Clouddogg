import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "CloudDogg cookie policy information.",
};

const sections = [
  {
    title: "What cookies are used for",
    body:
      "CloudDogg may use cookies or similar technologies to remember basic preferences, improve page performance, understand site traffic, and evaluate which sections of the site are most useful to visitors.",
  },
  {
    title: "Types of cookies",
    body:
      "Cookies may include essential site cookies, preference cookies, or analytics-related cookies. CloudDogg aims to keep usage limited to what supports site function and improvement.",
  },
  {
    title: "Managing preferences",
    body:
      "You can manage or remove cookies through your browser settings. If you decline non-essential cookies, some convenience features may behave differently.",
  },
  {
    title: "Questions",
    body:
      "For questions about cookie usage, contact joshua.dixon@clouddogg.com.",
  },
];

export default function CookiesPage() {
  return (
    <main>
      <PageHero
        label="Cookie Policy"
        title={
          <>
            Information about how CloudDogg uses cookies and basic tracking technologies.
          </>
        }
        description="This page supports the redesigned cookie banner and gives visitors a real policy destination."
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
