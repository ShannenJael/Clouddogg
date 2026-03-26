"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "6rem 0 4rem",
      }}
    >
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src="/hero-bg.mov" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(10,22,40,0.82) 0%, rgba(15,31,61,0.72) 100%)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        className="container"
        style={{ position: "relative", zIndex: 2, textAlign: "center" }}
      >
        {/* Logo */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
          <Image
            src="/logo-hero.png"
            alt="CloudDogg"
            width={180}
            height={180}
            priority
            style={{
              width: "auto",
              height: "auto",
              maxWidth: "180px",
              filter: "drop-shadow(0 0 40px rgba(59,130,246,0.45))",
            }}
          />
        </div>

        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "rgba(59,130,246,0.1)",
            border: "1px solid rgba(59,130,246,0.3)",
            borderRadius: "100px",
            padding: "0.4rem 1rem",
            fontSize: "0.8rem",
            fontWeight: 600,
            color: "var(--accent-teal)",
            letterSpacing: "0.05em",
            marginBottom: "1.5rem",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "var(--accent-teal)",
              display: "inline-block",
            }}
          />
          Veteran-Founded Cloud Solutions
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: "1.25rem",
            color: "var(--text-primary)",
          }}
        >
          Elevate Your Business with{" "}
          <span className="text-gradient">CloudDogg</span>
        </h1>

        {/* Subheading */}
        <p
          style={{
            fontSize: "1.15rem",
            color: "var(--text-secondary)",
            maxWidth: "620px",
            margin: "0 auto 2.5rem",
            lineHeight: 1.75,
          }}
        >
          Cloud Infrastructure · AI &amp; Machine Learning · Cybersecurity ·
          Full-Stack Development
        </p>

        {/* Stats grid — mirrors tablet-masters.com layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1rem",
            maxWidth: "720px",
            margin: "0 auto 2.5rem",
          }}
        >
          {[
            ["3", "Cloud Platforms"],
            ["100+", "Deployments"],
            ["24/7", "Support"],
            ["2022", "Founded"],
          ].map(([num, label]) => (
            <div
              key={label}
              style={{
                background: "rgba(17,31,58,0.75)",
                border: "1px solid rgba(59,130,246,0.25)",
                borderRadius: 12,
                padding: "1rem 0.75rem",
                backdropFilter: "blur(8px)",
              }}
            >
              <div
                style={{
                  fontSize: "1.75rem",
                  fontWeight: 800,
                  color: "var(--accent-blue)",
                  lineHeight: 1,
                }}
              >
                {num}
              </div>
              <div
                style={{
                  fontSize: "0.78rem",
                  color: "var(--text-muted)",
                  marginTop: "0.3rem",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div
          className="btn-group"
          style={{ justifyContent: "center" }}
        >
          <Link href="/services" className="btn-primary btn-lg">
            Explore Services
          </Link>
          <Link href="/contact" className="btn-outline btn-lg">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
