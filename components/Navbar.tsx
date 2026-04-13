"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { navLinks } from "@/lib/site-data";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header className={`site-header${isScrolled ? " site-header--scrolled" : ""}`}>
      <nav className="container navbar" aria-label="Main navigation">
        <div className="navbar__shell">
          <Link href="/" className="navbar__brand" aria-label="CloudDogg Home">
            <Image src="/logo.png" alt="CloudDogg" width={40} height={40} priority />
            <div>
              <span className="navbar__name">CloudDogg</span>
              <span className="navbar__tag">Cloud strategy and delivery</span>
            </div>
          </Link>

          <button
            type="button"
            className={`navbar__toggle${isOpen ? " is-open" : ""}`}
            aria-expanded={isOpen}
            aria-controls="site-menu"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>

          <div className={`navbar__panel${isOpen ? " is-open" : ""}`} id="site-menu">
            <ul className="navbar__links">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`navbar__link${isActive ? " is-active" : ""}`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link
              href="/contact"
              className={`button button--primary navbar__cta${
                pathname === "/contact" ? " is-active" : ""
              }`}
            >
              Start a Project
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
