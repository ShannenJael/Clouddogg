import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "CloudDogg terms of service information.",
};

const sections = [
  {
    title: "Use of this site",
    body:
      "By using the CloudDogg site, you agree to use it for lawful purposes and not to interfere with site operations, attempt unauthorized access, or submit misleading information through forms.",
  },
  {
    title: "Service discussions",
    body:
      "Information on the site describes CloudDogg offerings at a high level and does not create a binding services agreement. Specific project scope, pricing, timelines, and deliverables are defined separately in written agreements.",
  },
  {
    title: "Intellectual property",
    body:
      "Site content, branding, and materials are owned by CloudDogg or used with permission. You may not reproduce, republish, or commercially distribute site content without written approval.",
  },
  {
    title: "No guarantees",
    body:
      "The site is provided on an as-is basis. CloudDogg does not guarantee uninterrupted availability, complete accuracy, or that all content will remain current at all times.",
  },
  {
    title: "Contact",
    body:
      "Questions about these terms can be directed to joshua.dixon@clouddogg.com.",
  },
];

export default function TermsPage() {
  return (
    <main>
      <PageHero
        label="Terms of Service"
        title={
          <>
            Basic terms that apply to using the CloudDogg website and contacting the business.
          </>
        }
        description="The redesign closes the gap between navigation and policy content by giving legal links proper destination pages."
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
