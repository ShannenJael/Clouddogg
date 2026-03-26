import type { Metadata } from "next";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Cloud Insights",
  description:
    "Expert perspectives on cloud technology, security, AI, DevOps, and veteran career growth from CloudDogg.",
};

const articles = [
  {
    slug: "future-of-cloud-computing",
    category: "Cloud Computing",
    title: "The Future of Cloud Computing",
    date: "July 1, 2023",
    excerpt:
      "Explore the emerging trends that will shape the future of cloud technology, from edge computing and serverless architectures to AI-integrated platforms.",
  },
  {
    slug: "optimize-cloud-costs",
    category: "Cost Management",
    title: "5 Ways to Optimize Your Cloud Costs",
    date: "June 15, 2023",
    excerpt:
      "Learn how to make the most of your cloud budget with these cost-saving strategies — from right-sizing resources to leveraging reserved instances.",
  },
  {
    slug: "cloud-security-best-practices",
    category: "Security",
    title: "Cloud Security Best Practices",
    date: "June 1, 2023",
    excerpt:
      "Discover the essential security measures to protect your cloud infrastructure, from zero-trust architecture to IAM policies and encryption strategies.",
  },
  {
    slug: "veterans-in-cloud-tech",
    category: "Veterans & Tech",
    title: "Why Veterans Excel in Cloud Technology",
    date: "May 15, 2023",
    excerpt:
      "Military service instills discipline, attention to detail, and problem-solving skills that translate directly into success in cloud computing careers.",
  },
  {
    slug: "ai-in-the-enterprise",
    category: "AI & ML",
    title: "Integrating AI Into Your Enterprise Cloud Strategy",
    date: "May 1, 2023",
    excerpt:
      "Learn how businesses are leveraging large language models, predictive analytics, and AI-driven automation to gain competitive advantages.",
  },
  {
    slug: "devops-best-practices",
    category: "DevOps",
    title: "DevOps Best Practices for Cloud-Native Teams",
    date: "April 20, 2023",
    excerpt:
      "From CI/CD pipelines to infrastructure-as-code and monitoring, discover what separates high-performing DevOps teams from the rest.",
  },
];

export default function InsightsPage() {
  return (
    <main>
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="container">
          <p className="section-label">Knowledge Hub</p>
          <h1>
            Cloud <span className="text-gradient">Insights</span>
          </h1>
          <p>Expert perspectives on cloud technology, security, AI, and career growth</p>
        </div>
      </section>

      {/* ── Articles Grid ── */}
      <section className="section">
        <div className="container">
          <div className="grid-3" style={{ marginTop: "1rem" }}>
            {articles.map((a) => (
              <div key={a.slug} className="insight-card">
                <div className="insight-card-meta">
                  <span className="insight-category">{a.category}</span>
                </div>
                <div className="insight-card-body">
                  <h3>{a.title}</h3>
                  <p>{a.excerpt}</p>
                  <div className="insight-date">{a.date}</div>
                  <a
                    href={`/insights/${a.slug}`}
                    className="btn-ghost"
                    style={{ marginTop: "1rem" }}
                  >
                    Read more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="section newsletter-section">
        <div className="container">
          <div className="newsletter-inner">
            <div>
              <p className="section-label">Stay Informed</p>
              <h2 className="section-title">Never Miss an Insight</h2>
              <p>
                Get the latest cloud technology articles, training opportunities, and industry
                trends delivered straight to your inbox.
              </p>
            </div>
            <div>
              <div className="card" style={{ padding: "2rem" }}>
                <h3 style={{ color: "var(--text-primary)", marginBottom: "0.5rem" }}>
                  Subscribe to Our Newsletter
                </h3>
                <div style={{ marginTop: "1rem" }}>
                  <NewsletterForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
