"use client";

import { useState } from "react";

export default function NewsletterForm() {
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
    <form onSubmit={handleSubmit} className="newsletter-form">
      <div className="newsletter-form__row">
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email address"
          aria-label="Email address"
        />
        <button type="submit" className="button button--primary" disabled={status === "loading"}>
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </button>
      </div>

      {status === "ok" ? <p className="form-note form-note--success">Subscribed successfully.</p> : null}
      {status === "err" ? <p className="form-note form-note--error">Something went wrong. Please try again.</p> : null}

      <p className="newsletter-form__caption">
        Occasional product, cloud, and training updates. No spam.
      </p>
    </form>
  );
}
