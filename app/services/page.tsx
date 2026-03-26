import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "CloudDogg cloud solutions: infrastructure, AI/ML, security, migration, DevOps, and full-stack development.",
};

const services = [
  {
    icon: "☁️",
    title: "Cloud & AI Infrastructure",
    desc: "Scalable and flexible cloud and AI infrastructure solutions tailored to your business needs. We architect, deploy, and manage enterprise-grade environments across all major platforms.",
    tags: ["AWS", "Azure", "GCP", "Multi-Cloud", "Auto-Scaling"],
  },
  {
    icon: "🔒",
    title: "Security & Compliance",
    desc: "Robust security measures and compliance strategies to protect your assets and data. Zero-trust architecture with advanced threat detection and regulatory compliance management.",
    tags: ["Zero-Trust", "SOC2", "HIPAA", "Threat Detection"],
  },
  {
    icon: "🚀",
    title: "Cloud Migration",
    desc: "Seamless transition of your existing systems and data to the cloud. We handle assessment, planning, execution, and post-migration optimization with minimal disruption.",
    tags: ["Assessment", "Lift & Shift", "Re-Architecture", "Data Migration"],
  },
  {
    icon: "📈",
    title: "Performance Optimization",
    desc: "Enhance your cloud performance for maximum efficiency and cost-effectiveness. We analyze usage patterns, right-size resources, and implement intelligent auto-scaling strategies.",
    tags: ["Cost Optimization", "Right-Sizing", "Monitoring", "FinOps"],
  },
  {
    icon: "⚙️",
    title: "DevOps & Automation",
    desc: "Streamline your development and operations with cutting-edge DevOps practices. CI/CD pipelines, infrastructure-as-code, and automated testing for faster, reliable deployments.",
    tags: ["CI/CD", "Terraform", "Kubernetes", "Docker"],
  },
  {
    icon: "🎓",
    title: "Consulting & Training",
    desc: "Expert guidance and training to empower your team in cloud technologies. From architectural reviews to hands-on workshops, we build your team's cloud capabilities.",
    tags: ["Architecture Review", "Workshops", "Certification Prep"],
  },
];

const differentiators = [
  ["🎖️", "Veteran-Founded Excellence", "As a veteran-founded company, we bring military-grade discipline, integrity, and problem-solving skills to every project."],
  ["🔧", "Tailored Solutions", "We understand every business is unique. Our team develops customized cloud strategies that align perfectly with your goals."],
  ["💡", "Cutting-Edge Expertise", "Our team stays at the forefront of cloud technology, ensuring you benefit from the latest innovations and best practices."],
  ["🛡️", "Commitment to Security", "We prioritize the safety and integrity of your data with robust security measures and compliance strategies."],
];

export default function ServicesPage() {
  return (
    <main>
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="container">
          <p className="section-label">What We Do</p>
          <h1>
            Our <span className="text-gradient">Services</span>
          </h1>
          <p>Innovative, secure, and scalable cloud solutions for your business</p>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="cta-box" style={{ maxWidth: "800px" }}>
            <p className="section-label">Our Mission</p>
            <h2 className="section-title">Empowering Business Through Cloud</h2>
            <p>
              At CloudDogg, our mission is to empower businesses and organizations with
              innovative, secure, and scalable cloud solutions that drive growth, efficiency, and
              resilience. As a veteran-founded company, we bring unwavering dedication, integrity,
              and expertise to every partnership, delivering tailored strategies that simplify
              complexity and unlock new possibilities.
            </p>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="section">
        <div className="container">
          <p className="section-label text-center">Core Offerings</p>
          <h2 className="section-title text-center">Our Cloud Solutions</h2>
          <p className="section-subtitle">
            End-to-end technology services built to scale with your business.
          </p>
          <div className="solutions-grid" style={{ marginTop: "3rem" }}>
            {services.map((s) => (
              <div key={s.title} className="solution-card">
                <div className="solution-card-header">
                  <div className="solution-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                </div>
                <div className="solution-card-body">
                  <p>{s.desc}</p>
                  <div className="tag-list">
                    {s.tags.map((t) => (
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

      {/* ── Why Choose Us ── */}
      <section className="section section-alt">
        <div className="container">
          <p className="section-label text-center">Our Difference</p>
          <h2 className="section-title text-center">Why Choose CloudDogg?</h2>
          <div className="values-grid" style={{ marginTop: "3rem" }}>
            {differentiators.map(([icon, title, desc]) => (
              <div key={title} className="value-card">
                <div className="value-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-box">
            <p className="section-label">Get Started</p>
            <h2 className="section-title">Ready to Transform Your Business?</h2>
            <p>
              Let&apos;s discuss how CloudDogg can help you leverage the power of the cloud to drive
              growth, enhance efficiency, and build resilience in your organization.
            </p>
            <div className="btn-group" style={{ justifyContent: "center", marginTop: "2rem" }}>
              <Link href="/contact" className="btn-primary btn-lg">
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
