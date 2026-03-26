"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const COOKIE_KEY = "cd_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      const t = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(t);
    }
  }, []);

  function accept() {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(COOKIE_KEY, "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        <p>
          We use cookies to enhance your browsing experience, serve personalized content, and
          analyze our traffic. By clicking &quot;Accept All&quot;, you consent to our use of cookies.
        </p>
        <div className="cookie-actions">
          <button className="btn-outline" onClick={decline}>
            Decline
          </button>
          <button className="btn-primary" onClick={accept}>
            Accept All
          </button>
        </div>
        <div className="cookie-policy-links">
          <Link href="/privacy">Privacy Policy</Link> |{" "}
          <Link href="/cookies">Cookie Policy</Link>
        </div>
      </div>
    </div>
  );
}
