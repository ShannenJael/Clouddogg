"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/training", label: "Training" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: "/portfolio", label: "Portfolio" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`} id="site-header">
      <nav className="navbar">
        <div className="nav-container">
          <Link href="/" className="nav-logo" aria-label="CloudDogg Home">
            <Image
              src="/logo.png"
              alt="CloudDogg Logo"
              width={40}
              height={40}
              priority
            />
            <span className="logo-text">
              Cloud<span className="logo-accent">Dogg</span>
            </span>
          </Link>

          <button
            className={`hamburger${open ? " open" : ""}`}
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>

          <ul className={`nav-links${open ? " open" : ""}`} id="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`nav-link${pathname === link.href ? " active" : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className={`nav-cta${pathname === "/contact" ? " active" : ""}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
