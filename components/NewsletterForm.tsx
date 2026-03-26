"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const json = await res.json();
      setStatus(json.success ? "ok" : "err");
      if (json.success) setEmail("");
    } catch {
      setStatus("err");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-row">
        <input
          type="email"
          placeholder="Enter your email address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="btn-primary" disabled={status === "loading"}>
          {status === "loading" ? "Subscribing…" : "Subscribe"}
        </button>
      </div>
      {status === "ok" && (
        <p className="form-message success" style={{ marginTop: "0.75rem" }}>
          ✓ Subscribed! Thank you.
        </p>
      )}
      {status === "err" && (
        <p className="form-message error" style={{ marginTop: "0.75rem" }}>
          Something went wrong. Please try again.
        </p>
      )}
      <p style={{ fontSize: "0.8rem", marginTop: "0.75rem", color: "var(--text-muted)" }}>
        We respect your privacy. Unsubscribe at any time.
      </p>
    </form>
  );
}
