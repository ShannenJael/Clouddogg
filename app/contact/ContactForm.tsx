"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "ok" | "err";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("ok");
        setMessage("Thank you! We'll be in touch within 1 business day.");
        form.reset();
      } else {
        setStatus("err");
        setMessage(json.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("err");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <form id="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="first_name">First Name *</label>
          <input type="text" id="first_name" name="first_name" required placeholder="John" />
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Last Name *</label>
          <input type="text" id="last_name" name="last_name" required placeholder="Doe" />
        </div>
        <div className="form-group full">
          <label htmlFor="email">Email Address *</label>
          <input type="email" id="email" name="email" required placeholder="john@company.com" />
        </div>
        <div className="form-group full">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="+1 (555) 000-0000" />
        </div>
        <div className="form-group full">
          <label htmlFor="service">Service Interest</label>
          <select id="service" name="service">
            <option value="">Select a service...</option>
            <option value="cloud-infrastructure">Cloud Infrastructure</option>
            <option value="ai-ml">AI &amp; Machine Learning</option>
            <option value="cybersecurity">Cybersecurity</option>
            <option value="devops">DevOps &amp; Automation</option>
            <option value="cloud-migration">Cloud Migration</option>
            <option value="full-stack">Full-Stack Development</option>
            <option value="training">Training Program</option>
            <option value="consulting">Consulting</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group full">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Tell us about your project or question..."
          />
        </div>
      </div>

      {status !== "idle" && (
        <div className={`form-message ${status === "ok" ? "success" : status === "err" ? "error" : ""}`}>
          {message}
        </div>
      )}

      <button
        type="submit"
        className="btn-primary"
        style={{ marginTop: "1.25rem", width: "100%", justifyContent: "center" }}
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
