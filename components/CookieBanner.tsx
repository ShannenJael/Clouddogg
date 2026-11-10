"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const COOKIE_KEY = "cd_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let existingValue: string | null = null;
    try {
      existingValue = localStorage.getItem(COOKIE_KEY);
    } catch {
      // The banner still works when browser storage is unavailable.
    }

    if (!existingValue) {
      const timer = window.setTimeout(() => setVisible(true), 1200);
      return () => window.clearTimeout(timer);
    }
  }, []);

  function dismiss(value: "accepted" | "declined") {
    try {
      localStorage.setItem(COOKIE_KEY, value);
    } catch {
      // The visitor can dismiss the banner for this page without persistence.
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie consent">
      <div className="cookie-banner__copy">
        <strong>Cookie preferences</strong>
        <p>
          CloudDogg uses cookies for basic site analytics and experience improvements. You can
          review the details before choosing what to allow.
        </p>
      </div>

      <div className="cookie-banner__actions">
        <button type="button" className="button button--ghost" onClick={() => dismiss("declined")}>
          Decline
        </button>
        <button type="button" className="button button--primary" onClick={() => dismiss("accepted")}>
          Accept cookies
        </button>
      </div>

      <div className="cookie-banner__links">
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/cookies">Cookie Policy</Link>
      </div>
    </div>
  );
}
