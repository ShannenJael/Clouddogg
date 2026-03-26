import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with CloudDogg's cloud experts. We're here to help.",
};

export default function ContactPage() {
  return (
    <main>
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="container">
          <p className="section-label">Reach Out</p>
          <h1>
            Contact <span className="text-gradient">Us</span>
          </h1>
          <p>Get in touch with our cloud experts</p>
        </div>
      </section>

      {/* ── Contact Grid ── */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Info */}
            <div>
              <p className="section-label">How to Reach Us</p>
              <h2 className="section-title">We&apos;re Here to Help</h2>
              <p style={{ marginBottom: "2rem" }}>
                Whether you have questions about our services, need technical support, or want
                to explore how CloudDogg can transform your business, our team is ready to
                assist you.
              </p>

              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="contact-info-icon">📧</div>
                  <div>
                    <h4>Email Us</h4>
                    <p>
                      <a href="mailto:joshua.dixon@clouddogg.com" style={{ color: "var(--accent-blue)" }}>
                        joshua.dixon@clouddogg.com
                      </a>
                    </p>
                    <p>
                      <a href="mailto:thedixonmissions@gmail.com" style={{ color: "var(--accent-blue)" }}>
                        thedixonmissions@gmail.com
                      </a>
                    </p>
                    <p>For general inquiries and support</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">📞</div>
                  <div>
                    <h4>Call Us</h4>
                    <p>
                      <a
                        href="tel:+18503765811"
                        style={{ color: "var(--accent-blue)" }}
                      >
                        +1 (850) 376-5811
                      </a>
                    </p>
                    <p>Monday to Friday, 9am – 5pm EST</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">📍</div>
                  <div>
                    <h4>Visit Us</h4>
                    <p>1024 Freeport Ct</p>
                    <p>Mary Esther, FL 32569, United States</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">🕐</div>
                  <div>
                    <h4>Business Hours</h4>
                    <p>Monday – Friday: 9am – 5pm EST</p>
                    <p>Saturday: 10am – 2pm EST</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <h3 style={{ color: "var(--text-primary)", margin: "2rem 0 1rem" }}>
                Connect With Us
              </h3>
              <div className="social-links-contact">
                <a
                  href="https://linkedin.com/company/clouddogg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-btn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://facebook.com/clouddogg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-btn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </a>
              </div>
            </div>

            {/* Form */}
            <div>
              <div className="card" style={{ padding: "2.5rem" }}>
                <h3 style={{ color: "var(--text-primary)", marginBottom: "0.25rem" }}>
                  Send Us a Message
                </h3>
                <p style={{ marginBottom: "2rem", fontSize: "0.9rem" }}>
                  Fill out the form and we&apos;ll get back to you within 1 business day.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
