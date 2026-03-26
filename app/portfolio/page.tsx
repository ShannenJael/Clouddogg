import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "CloudDogg portfolio — real cloud transformation results across healthcare, retail, finance, and more.",
};

const projects = [
  {
    icon: "☁️",
    category: "Cloud Infrastructure",
    title: "Multi-Cloud Migration for Healthcare Provider",
    desc: "Migrated a regional healthcare provider from on-premise infrastructure to a secure, HIPAA-compliant multi-cloud environment across AWS and Azure, achieving 40% cost reduction.",
    tags: ["AWS", "Azure", "HIPAA", "Terraform"],
  },
  {
    icon: "🤖",
    category: "AI & Machine Learning",
    title: "AI-Powered Customer Service Platform",
    desc: "Built a custom LLM-integrated customer service platform for a retail company, reducing support ticket volume by 65% through intelligent automation and natural language processing.",
    tags: ["LLM", "Python", "AWS Lambda", "NLP"],
  },
  {
    icon: "🔒",
    category: "Cybersecurity",
    title: "Zero-Trust Security Architecture Overhaul",
    desc: "Redesigned the security architecture of a financial services firm with zero-trust principles, achieving SOC2 Type II compliance and eliminating critical vulnerability exposures.",
    tags: ["Zero-Trust", "SOC2", "IAM", "SIEM"],
  },
  {
    icon: "⚙️",
    category: "DevOps",
    title: "CI/CD Pipeline Modernization",
    desc: "Transformed a legacy deployment process into a fully automated CI/CD pipeline, cutting deployment frequency from monthly to multiple times per day with 99.9% success rates.",
    tags: ["GitHub Actions", "Kubernetes", "Docker", "ArgoCD"],
  },
  {
    icon: "💻",
    category: "Full-Stack Development",
    title: "Cloud-Native SaaS Platform",
    desc: "Architected and built a cloud-native SaaS platform from scratch for a logistics startup, supporting 10,000+ concurrent users with auto-scaling and sub-200ms response times.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS ECS"],
  },
  {
    icon: "📊",
    category: "Data Analytics",
    title: "Real-Time Business Intelligence Dashboard",
    desc: "Developed a real-time analytics platform ingesting 50M+ events daily, providing executive dashboards and operational insights that reduced decision-making time by 70%.",
    tags: ["Apache Kafka", "Snowflake", "Tableau", "Python"],
  },
];

export default function PortfolioPage() {
  return (
    <main>
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="container">
          <p className="section-label">Our Work</p>
          <h1>
            Our <span className="text-gradient">Portfolio</span>
          </h1>
          <p>Real results for real businesses — explore our cloud transformation projects</p>
        </div>
      </section>

      {/* ── Projects Grid ── */}
      <section className="section">
        <div className="container">
          <div className="solutions-grid" style={{ marginTop: "1rem" }}>
            {projects.map((p) => (
              <div key={p.title} className="solution-card">
                <div className="solution-card-header">
                  <div className="solution-icon">{p.icon}</div>
                  <div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "var(--accent-teal)",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {p.category}
                    </div>
                    <h3 style={{ fontSize: "0.95rem" }}>{p.title}</h3>
                  </div>
                </div>
                <div className="solution-card-body">
                  <p>{p.desc}</p>
                  <div className="tag-list">
                    {p.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="section section-alt">
        <div className="container">
          <p className="section-label text-center">By the Numbers</p>
          <h2 className="section-title text-center">Our Impact</h2>
          <div className="stats-bar" style={{ marginTop: "3rem", border: "none" }}>
            {[
              ["100+", "Cloud Deployments"],
              ["99.9%", "Uptime Delivered"],
              ["40%", "Avg. Cost Reduction"],
              ["3", "Cloud Platforms"],
            ].map(([num, label]) => (
              <div key={label} className="stat-item">
                <div className="stat-number">{num}</div>
                <div className="stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-box">
            <p className="section-label">Start Your Project</p>
            <h2 className="section-title">Ready to Be Our Next Success Story?</h2>
            <p>
              Let&apos;s discuss how CloudDogg can help you achieve transformative results with cloud
              technology.
            </p>
            <div className="btn-group" style={{ justifyContent: "center", marginTop: "2rem" }}>
              <Link href="/contact" className="btn-primary btn-lg">
                Start a Conversation
              </Link>
              <Link href="/services" className="btn-outline btn-lg">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
