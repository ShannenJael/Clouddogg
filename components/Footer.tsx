"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { footerLinks } from "@/lib/site-data";
import NewsletterForm from "@/components/NewsletterForm";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="footer-brand__logo" aria-label="CloudDogg Home">
              <img src="/logo.png" alt="CloudDogg" width={48} height={48} />
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
              <a href="mailto:service@clouddogg.com">
                <Mail size={16} />
                service@clouddogg.com
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
            <NewsletterForm compact />

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
