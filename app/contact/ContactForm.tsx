"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "ok" | "err";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const payload = await response.json();

      if (payload.success) {
        setStatus("ok");
        setMessage("Thanks. CloudDogg will reply within one business day.");
        form.reset();
        return;
      }

      setStatus("err");
      setMessage(payload.message || "Something went wrong. Please try again.");
    } catch {
      setStatus("err");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="first_name">First Name *</label>
          <input id="first_name" name="first_name" type="text" placeholder="John" required />
        </div>
        <div className="form-field">
          <label htmlFor="last_name">Last Name *</label>
          <input id="last_name" name="last_name" type="text" placeholder="Doe" required />
        </div>
        <div className="form-field form-field--full">
          <label htmlFor="email">Email Address *</label>
          <input id="email" name="email" type="email" placeholder="john@company.com" required />
        </div>
        <div className="form-field form-field--full">
          <label htmlFor="phone">Phone Number</label>
          <input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" />
        </div>
        <div className="form-field form-field--full">
          <label htmlFor="service">Service Interest</label>
          <select id="service" name="service" defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            <option value="cloud-platform-engineering">Cloud platform engineering</option>
            <option value="ai-automation">AI and workflow automation</option>
            <option value="security-compliance">Security and compliance</option>
            <option value="data-analytics">Data and analytics foundations</option>
            <option value="product-development">Product and application delivery</option>
            <option value="fractional-leadership">Fractional cloud leadership</option>
            <option value="training">Training program</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-field form-field--full">
          <label htmlFor="message">How can CloudDogg help? *</label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Tell us about your project, challenge, or the kind of support you need."
          />
        </div>
      </div>

      {status !== "idle" ? (
        <p className={`form-note ${status === "ok" ? "form-note--success" : "form-note--error"}`}>
          {message}
        </p>
      ) : null}

      <button
        type="submit"
        className="button button--primary contact-form__submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
