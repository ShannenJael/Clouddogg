"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { footerLinks } from "@/lib/site-data";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const payload = await response.json();
      setStatus(payload.success ? "ok" : "err");

      if (payload.success) setEmail("");
    } catch {
      setStatus("err");
    }
  }

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="footer-brand__logo" aria-label="CloudDogg Home">
              <Image src="/logo.png" alt="CloudDogg" width={48} height={48} />
              <div>
                <span>CloudDogg</span>
                <small>Veteran-founded cloud strategy, delivery, and training.</small>
              </div>
            </Link>

            <p>
              CloudDogg helps teams modernize infrastructure, launch practical AI systems, and
              build select blockchain cloud applications with stronger UX and operational clarity.
            </p>

            <div className="footer-contact-list">
              <a href="mailto:joshua.dixon@clouddogg.com">
                <Mail size={16} />
                joshua.dixon@clouddogg.com
              </a>
              <a href="tel:+18503765811">
                <Phone size={16} />
                +1 (850) 376-5811
              </a>
              <span>
                <MapPin size={16} />
                Mary Esther, Florida
              </span>
            </div>
          </div>

          <div>
            <h3>Company</h3>
            <ul className="footer-links">
              {footerLinks.company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Resources</h3>
            <ul className="footer-links">
              {footerLinks.resources.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Stay Updated</h3>
            <p className="footer-signup-copy">
              Get cloud, AI, blockchain, training, and product thinking delivered to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="footer-form">
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email address"
                aria-label="Email address"
              />
              <button type="submit" className="button button--primary" disabled={status === "loading"}>
                {status === "loading" ? "Sending..." : "Subscribe"}
              </button>
            </form>
            {status === "ok" ? <p className="form-note form-note--success">Subscribed successfully.</p> : null}
            {status === "err" ? <p className="form-note form-note--error">Please try again.</p> : null}

            <div className="footer-socials">
              {footerLinks.socials.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                  <ArrowUpRight size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom__brand">
            <a href="https://www.tablet-masters.com" target="_blank" rel="noopener noreferrer">
              <Image
                src="/tabletmasters-logo.png"
                alt="Tablet Masters"
                width={188}
                height={60}
              />
            </a>
            <p>
              CloudDogg operates under Tabletmasters LLC and shares the same focus on cleaner
              customer paths and service clarity.
            </p>
          </div>
          <p>&copy; {new Date().getFullYear()} CloudDogg. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
