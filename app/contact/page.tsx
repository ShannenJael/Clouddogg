import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "./ContactForm";
import PageHero from "@/components/PageHero";
import { contactDetails } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact CloudDogg to discuss cloud strategy, AI automation, product delivery, or training and mentorship.",
};

const detailIcons = [Mail, Phone, MapPin];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        label="Contact"
        title={
          <>
            A cleaner intake path for projects, partnerships, and program questions.
          </>
        }
        description="The contact page now balances trust-building details with a stronger form layout, so visitors can decide quickly and send better inquiries."
      />

      <section className="section">
        <div className="container split-panel">
          <div className="surface-card surface-card--light">
            <p className="eyebrow">Reach CloudDogg</p>
            <h2>Start with the channel that fits your question.</h2>
            <p>
              Whether you are planning a migration, cleaning up delivery operations, or asking
              about the training program, CloudDogg can route the conversation quickly.
            </p>

            <div className="contact-detail-list">
              {contactDetails.map((detail, index) => {
                const Icon = detailIcons[index];

                return (
                  <article key={detail.title} className="contact-detail-card">
                    <div className="feature-card__icon">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3>{detail.title}</h3>
                      <p>{detail.description}</p>
                      <div className="contact-detail-card__lines">
                        {detail.lines.map((line) => (
                          <span key={line}>{line}</span>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="surface-card contact-form-shell">
            <p className="eyebrow">Project Intake</p>
            <h2>Tell CloudDogg what you are trying to improve.</h2>
            <p>
              A short summary of the problem, timeline, and service area is enough to start the
              conversation.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
