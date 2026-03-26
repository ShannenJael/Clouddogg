import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";
import HeroSection from "@/components/HeroSection";

export default function HomePage() {
  return (
    <main>
      {/* ── Hero ── */}
      <HeroSection />

      {/* ── Why Choose CloudDogg ── */}
      <section className="section section-alt">
        <div className="container">
          <p className="section-label text-center">Why CloudDogg</p>
          <h2 className="section-title text-center">Why Choose CloudDogg?</h2>
          <p className="section-subtitle">
            With over a decade of experience, we combine military precision with cutting-edge
            technical expertise.
          </p>

          <div className="two-col" style={{ marginTop: "3rem" }}>
            <div>
              <h3 style={{ color: "var(--text-primary)", marginBottom: "1rem" }}>
                Our Expertise
              </h3>
              <p>
                With over a decade of experience, CloudDogg has been at the forefront of cloud
                technology innovation. Our veteran-founded team combines military precision with
                cutting-edge technical expertise to deliver exceptional results.
              </p>
              <div className="feature-list" style={{ marginTop: "1.5rem" }}>
                {[
                  ["Cloud Infrastructure & DevOps", "AWS, Azure, GCP migration and optimization"],
                  ["AI & Machine Learning", "Custom AI solutions, LLM integration, and intelligent automation"],
                  ["Security & Compliance", "Zero-trust architecture and regulatory compliance"],
                  ["Data Analytics & Insights", "Real-time analytics and business intelligence platforms"],
                  ["Full-Stack Development", "Modern web applications with React, Next.js, and cloud-native architecture"],
                ].map(([title, desc]) => (
                  <div key={title} className="feature-item">
                    <div className="feature-dot" />
                    <div>
                      <strong style={{ color: "var(--text-primary)" }}>{title}</strong>
                      <p>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 style={{ color: "var(--text-primary)", marginBottom: "1rem" }}>
                Why We&apos;re Different
              </h3>
              <div className="grid-auto" style={{ gap: "1rem" }}>
                {[
                  ["🎖️", "Veteran-Founded Excellence", "Military discipline meets innovative technology for mission-critical results"],
                  ["🤖", "AI-First Approach", "Leveraging artificial intelligence to solve complex business challenges"],
                  ["📊", "Proven Track Record", "Successfully delivered 100+ cloud transformations across industries"],
                  ["🕐", "24/7 Mission Support", "Round-the-clock monitoring and support for business continuity"],
                ].map(([icon, title, desc]) => (
                  <div key={title} className="card">
                    <div className="card-icon">{icon}</div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center" style={{ marginTop: "3rem" }}>
            <Link href="/about" className="btn-outline">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* ── Cloud Solutions ── */}
      <section className="section">
        <div className="container">
          <p className="section-label text-center">What We Offer</p>
          <h2 className="section-title text-center">Our Cloud Solutions</h2>
          <p className="section-subtitle">
            From cloud infrastructure to cutting-edge AI solutions, we deliver comprehensive
            technology services that drive innovation and accelerate business growth.
          </p>

          <div className="solutions-grid">
            {[
              { icon: "☁️", title: "Cloud Infrastructure", desc: "Enterprise-grade cloud architecture with auto-scaling, disaster recovery, and multi-cloud strategies", tags: ["AWS/Azure/GCP", "DevOps Automation", "Cost Optimization"] },
              { icon: "🤖", title: "AI & Machine Learning", desc: "Custom AI solutions including LLM integration, predictive analytics, and intelligent automation", tags: ["Custom AI Models", "LLM Integration", "Process Automation"] },
              { icon: "🔒", title: "Cybersecurity", desc: "Zero-trust security architecture with advanced threat detection and compliance management", tags: ["Zero-Trust Security", "Threat Detection", "Compliance"] },
              { icon: "💻", title: "Front-End Development", desc: "Modern, responsive web applications with cutting-edge frameworks and exceptional user experiences", tags: ["React/Next.js", "TypeScript", "Mobile-First Design"] },
              { icon: "⚙️", title: "Full-Stack Development", desc: "End-to-end application development from database design to user interface with scalable architecture", tags: ["API Development", "Database Design", "Cloud Integration"] },
            ].map((s) => (
              <div key={s.title} className="solution-card">
                <div className="solution-card-header">
                  <div className="solution-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                </div>
                <div className="solution-card-body">
                  <p>{s.desc}</p>
                  <div className="tag-list">
                    {s.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: "3rem" }}>
            <Link href="/services" className="btn-primary">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── About Snippet ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="two-col">
            <div>
              <p className="section-label">About Us</p>
              <h2 className="section-title">About CloudDogg</h2>
              <p>
                CloudDogg is a veteran-founded cloud solutions provider, dedicated to empowering
                businesses with innovative, secure, and scalable cloud technologies. Our mission
                is to bridge the gap between potential and opportunity, delivering transformative
                solutions that drive growth and efficiency.
              </p>
              <ul className="check-list" style={{ marginTop: "1.5rem" }}>
                {[
                  "Expert cloud engineering team",
                  "Tailored solutions for businesses of all sizes",
                  "Commitment to security and reliability",
                  "Veteran-led with a focus on excellence",
                  "Continuous innovation in cloud technologies",
                  "Dedicated customer support",
                ].map((item) => <li key={item}>{item}</li>)}
              </ul>
              <div style={{ marginTop: "2rem" }}>
                <Link href="/about" className="btn-outline">
                  Discover Our Story
                </Link>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1.5rem",
                alignContent: "start",
              }}
            >
              {[
                ["2022", "Founded"],
                ["100+", "Deployments"],
                ["3", "Cloud Platforms"],
                ["24/7", "Support"],
              ].map(([num, label]) => (
                <div key={label} className="hero-stat">
                  <div className="stat-number">{num}</div>
                  <div className="stat-label">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Training ── */}
      <section className="section">
        <div className="container">
          <p className="section-label text-center">Training Program</p>
          <h2 className="section-title text-center">CloudDogg Training &amp; Mentorship</h2>
          <p className="section-subtitle">
            Bridging the gap between potential and opportunity for veterans and their immediate
            family members.
          </p>
          <div className="grid-4" style={{ marginTop: "2.5rem" }}>
            {[
              ["📚", "Cloud Fundamentals", "Master the basics of cloud computing"],
              ["🎯", "Career Transition", "Tailored guidance for veterans entering tech"],
              ["🛠️", "Training Workshops", "Explore cloud technology in-depth"],
              ["🤝", "Mentorship", "One-on-one guidance from industry experts"],
            ].map(([icon, title, desc]) => (
              <div key={title} className="program-card">
                <div className="program-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: "3rem" }}>
            <Link href="/training" className="btn-primary">
              Learn More About Our Program
            </Link>
          </div>
        </div>
      </section>

      {/* ── Latest Insights ── */}
      <section className="section section-alt">
        <div className="container">
          <p className="section-label text-center">Blog</p>
          <h2 className="section-title text-center">Latest Insights</h2>
          <div className="grid-3" style={{ marginTop: "2.5rem" }}>
            {[
              { category: "Cloud Computing", title: "The Future of Cloud Computing", excerpt: "Explore the emerging trends that will shape the future of cloud technology...", date: "July 1, 2023", slug: "future-of-cloud-computing" },
              { category: "Cost Management", title: "5 Ways to Optimize Your Cloud Costs", excerpt: "Learn how to make the most of your cloud budget with these cost-saving strategies...", date: "June 15, 2023", slug: "optimize-cloud-costs" },
              { category: "Security", title: "Cloud Security Best Practices", excerpt: "Discover the essential security measures to protect your cloud infrastructure...", date: "June 1, 2023", slug: "cloud-security-best-practices" },
            ].map((a) => (
              <div key={a.slug} className="insight-card">
                <div className="insight-card-meta">
                  <span className="insight-category">{a.category}</span>
                </div>
                <div className="insight-card-body">
                  <h3>{a.title}</h3>
                  <p>{a.excerpt}</p>
                  <div className="insight-date">{a.date}</div>
                  <Link
                    href={`/insights/${a.slug}`}
                    className="btn-ghost"
                    style={{ marginTop: "1rem" }}
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: "3rem" }}>
            <Link href="/insights" className="btn-outline">
              View All Insights
            </Link>
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="section newsletter-section">
        <div className="container">
          <div className="newsletter-inner">
            <div>
              <p className="section-label">Stay Connected</p>
              <h2 className="section-title">Stay Connected with CloudDogg</h2>
              <p>
                Get the latest insights on cloud technologies, training opportunities, and
                industry trends delivered straight to your inbox.
              </p>
            </div>
            <div>
              <div className="card" style={{ padding: "2rem" }}>
                <h3 style={{ color: "var(--text-primary)", marginBottom: "0.5rem" }}>
                  Stay in the Loop
                </h3>
                <p style={{ marginBottom: "1.5rem", fontSize: "0.9rem" }}>
                  Get updates on cloud services, training programs, and industry insights.
                </p>
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-box">
            <p className="section-label">Let&apos;s Work Together</p>
            <h2 className="section-title">Ready to Get Started?</h2>
            <p>
              Whether you&apos;re looking to migrate to the cloud, optimize existing infrastructure,
              build cloud-native applications, or start your journey in cloud computing,
              CloudDogg is here to help. Let&apos;s discuss how we can elevate your business or career.
            </p>
            <div className="btn-group" style={{ justifyContent: "center", marginTop: "2rem" }}>
              <Link href="/contact" className="btn-primary btn-lg">
                Contact Us Today
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
