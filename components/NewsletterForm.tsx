"use client";

import { useState } from "react";
import { useHydrated } from "@/lib/use-hydrated";

export default function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const hydrated = useHydrated();
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;
    const form = event.currentTarget;
    const email = new FormData(form).get("email");
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const payload = await response.json();
      const success = response.ok && payload.success;
      setStatus(success ? "ok" : "err");
      setMessage(success ? "Subscription request received." : payload.message || "Something went wrong. Please try again.");
      if (success) form.reset();
    } catch {
      setStatus("err");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <form method="post" onSubmit={handleSubmit} className={compact ? "footer-newsletter" : "newsletter-form"}>
      <div className={compact ? "footer-form" : "newsletter-form__row"}>
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          maxLength={254}
          placeholder="Enter your email address"
          aria-label="Email address"
        />
        <button type="submit" className="button button--primary" disabled={!hydrated || status === "loading"}>
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </button>
      </div>

      {message ? <p role="status" className={`form-note ${status === "ok" ? "form-note--success" : "form-note--error"}`}>{message}</p> : null}

      {!compact ? <p className="newsletter-form__caption">
        Occasional product, cloud, AI, blockchain, and training updates. No spam.
      </p> : null}
    </form>
  );
}
