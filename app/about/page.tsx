import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About CloudDogg",
  description:
    "Learn about CloudDogg's story, founder Joshua Dixon, our mission, values, and strategic partners.",
};

export default function AboutPage() {
  return (
    <main>
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="container">
          <p className="section-label">Our Story</p>
          <h1>
            About <span className="text-gradient">CloudDogg</span>
          </h1>
          <p>Our journey from vision to innovation</p>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <p className="section-label">Founded 2022</p>
              <h2 className="section-title">Our Story</h2>
              <p style={{ marginBottom: "1rem" }}>
                In 2022, CloudDogg was founded by Joshua Dixon, a military veteran who recognized
                a critical gap in the digital transformation landscape. After serving his country,
                he witnessed firsthand how businesses struggled to navigate the complex world of
                cloud technologies.
              </p>
              <p style={{ marginBottom: "1rem" }}>
                Joshua, a seasoned DevOps engineer with deep expertise in cloud infrastructure and
                system architecture, envisioned a company that would deliver both technical
                excellence and user-centered design.
              </p>
              <p style={{ marginBottom: "1rem" }}>
                What began as a vision quickly transformed into a mission-driven company. Armed
                with military discipline and deep technical expertise, CloudDogg started taking on
                projects that others deemed too complex.
              </p>
              <p>
                Today, CloudDogg has evolved into a comprehensive technology partner, serving
                clients across industries with everything from custom AI implementations to
                full-stack development, all while maintaining the military values of precision,
                integrity, and unwavering commitment to mission success.
              </p>
            </div>

            <div>
              <div
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-light)",
                  borderRadius: "var(--radius-lg)",
                  padding: "2.5rem",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🐕‍🦺</div>
                <h3 style={{ color: "var(--text-primary)", marginBottom: "0.5rem" }}>
                  CloudDogg
                </h3>
                <p
                  style={{
                    color: "var(--accent-teal)",
                    fontWeight: 600,
                    marginBottom: "1.5rem",
                  }}
                >
                  Veteran-Founded · Mission-Driven
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1.25rem",
                  }}
                >
                  {[
                    ["2022", "Founded"],
                    ["100+", "Deployments"],
                    ["1", "Founder"],
                    ["3", "Cloud Partners"],
                  ].map(([num, label]) => (
                    <div key={label} className="hero-stat">
                      <div className="stat-number">{num}</div>
                      <div className="stat-label">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Leadership ── */}
      <section className="section section-alt">
        <div className="container">
          <p className="section-label text-center">Leadership</p>
          <h2 className="section-title text-center">Meet Our Founder</h2>
          <div style={{ maxWidth: "560px", margin: "3rem auto 0" }}>
            <div className="founder-card">
              <Image
                src="/joshua-dixon.jpg"
                alt="Joshua Dixon"
                width={120}
                height={120}
                style={{ width: 120, height: 120, borderRadius: "50%", objectFit: "cover", border: "3px solid var(--accent-blue)", marginBottom: "1rem" }}
              />
              <h3 style={{ color: "var(--text-primary)", marginBottom: "0.25rem" }}>
                Joshua Dixon
              </h3>
              <p className="founder-title">Founder &amp; Chief Operations Officer</p>
              <p>
                Joshua is the operational backbone of CloudDogg, bringing extensive DevOps
                engineering expertise and military-grade operational discipline. He ensures that
                every system we build is scalable, secure, and mission-ready.
              </p>
              <div className="founder-skills">
                {[
                  "DevOps Engineering",
                  "Cloud Infrastructure",
                  "System Architecture",
                  "Security & Compliance",
                ].map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>
              <blockquote className="founder-quote">
                &ldquo;Excellence in operations isn&apos;t just about technology—it&apos;s about building
                systems that teams can rely on when it matters most. Every deployment should be
                as precise as a military operation.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="section">
        <div
          className="container text-center"
          style={{ maxWidth: "760px", margin: "0 auto" }}
        >
          <p className="section-label">Our Purpose</p>
          <h2 className="section-title">Our Mission</h2>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8 }}>
            At CloudDogg, our mission is to empower businesses and organizations with
            innovative, secure, and scalable cloud solutions that drive growth, efficiency, and
            resilience. As a veteran-founded company, we bring unwavering dedication, integrity,
            and expertise to every partnership, delivering tailored strategies that simplify
            complexity and unlock new possibilities.
          </p>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section section-alt">
        <div className="container">
          <p className="section-label text-center">What We Stand For</p>
          <h2 className="section-title text-center">Our Values</h2>
          <div className="values-grid" style={{ marginTop: "3rem" }}>
            {[
              ["💡", "Innovation", "We stay ahead of the curve with cutting-edge cloud technologies."],
              ["🤝", "Customer-Centric", "We tailor our solutions to meet the unique needs of each client."],
              ["🛡️", "Reliability", "We prioritize the safety and stability of your cloud infrastructure."],
              ["📈", "Continuous Improvement", "We're always learning and evolving to serve you better."],
              ["⚖️", "Integrity", "We uphold the highest standards of honesty and ethical conduct in all our dealings."],
              ["🤝", "Collaboration", "We believe in the power of teamwork, both within our company and with our clients."],
            ].map(([icon, title, desc]) => (
              <div key={title} className="value-card">
                <div className="value-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partners ── */}
      <section className="section">
        <div className="container">
          <p className="section-label text-center">Our Network</p>
          <h2 className="section-title text-center">Our Strategic Partners</h2>
          <div className="grid-3" style={{ marginTop: "3rem" }}>
            <div className="partner-card">
              <div className="partner-logo-area">
                <div style={{ fontSize: "2rem" }}>🪟</div>
                <div>
                  <h3>Microsoft for Startups</h3>
                  <span className="partner-tag">Founders Hub</span>
                </div>
              </div>
              <p>
                As a member of the Microsoft for Startups Founders Hub, CloudDogg leverages
                Microsoft&apos;s cutting-edge technologies and resources to deliver innovative cloud
                solutions to our clients.
              </p>
              <a
                href="https://foundershub.startups.microsoft.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{ marginTop: "1rem" }}
              >
                Learn more →
              </a>
            </div>

            <div className="partner-card">
              <div className="partner-logo-area">
                <div style={{ fontSize: "2rem" }}>🌐</div>
                <div>
                  <h3>AWS for Startups</h3>
                  <span className="partner-tag">Amazon Web Services</span>
                </div>
              </div>
              <p>
                Through our partnership with AWS for Startups, CloudDogg has access to Amazon
                Web Services&apos; extensive cloud infrastructure and expertise, enabling us to build
                scalable and reliable solutions.
              </p>
              <a
                href="https://aws.amazon.com/startups/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{ marginTop: "1rem" }}
              >
                Learn more →
              </a>
            </div>

            <div className="partner-card">
              <div className="partner-logo-area">
                <div style={{ fontSize: "2rem" }}>🎨</div>
                <div>
                  <h3>Cazdin Creative</h3>
                  <span className="partner-tag">Soul-Led Branding</span>
                </div>
              </div>
              <p>
                Cazdin Creative is a soul-led branding service agency that helps businesses
                discover and express their authentic brand identity. Their purpose-driven
                approach perfectly complements CloudDogg&apos;s technical expertise.
              </p>
              <ul className="check-list" style={{ margin: "1rem 0", fontSize: "0.875rem" }}>
                <li>Authentic brand identity development</li>
                <li>Purpose-driven design strategies</li>
                <li>Holistic brand experience design</li>
              </ul>
              <a
                href="https://cazdin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Visit Cazdin Creative →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section cta-section section-alt">
        <div className="container">
          <div className="cta-box">
            <p className="section-label">Work With Us</p>
            <h2 className="section-title">Ready to Transform Your Business?</h2>
            <p>
              Let&apos;s discuss how CloudDogg can help you leverage the power of the cloud to drive
              growth, enhance efficiency, and build resilience in your organization.
            </p>
            <div className="btn-group" style={{ justifyContent: "center", marginTop: "2rem" }}>
              <Link href="/contact" className="btn-primary btn-lg">
                Get Started Today
              </Link>
              <Link href="/services" className="btn-outline btn-lg">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
