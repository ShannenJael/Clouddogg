import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import SectionIntro from "@/components/SectionIntro";
import { portfolioProjects } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Review CloudDogg project outcomes across healthcare, AI automation, security, analytics, and product delivery.",
};

const impactStats = [
  { value: "Cloud + AI", label: "Delivery and transformation work" },
  { value: "65%", label: "Support load reduction on AI workflow work" },
  { value: "40%", label: "Cost reduction on a healthcare migration" },
  { value: "99.9%", label: "Reliability target across managed environments" },
];

export default function PortfolioPage() {
  return (
    <main>
      <PageHero
        label="Portfolio"
        title={
          <>
            Outcome-led project work across cloud, AI, product, and security.
          </>
        }
        description="The new portfolio design emphasizes the result, the context, and the operating change instead of dumping generic project summaries onto the page."
        stats={impactStats}
      />

      <section className="section">
        <div className="container">
          <SectionIntro
            label="Case Highlights"
            title="Proof that reads like delivery work, not filler."
            description="Each case card now makes the category, summary, outcome, and technical signals easier to evaluate."
            centered
          />

          <div className="card-grid card-grid--three">
            {portfolioProjects.map((project) => {
              const Icon = project.icon;

              return (
                <article key={project.title} className="case-card">
                  <div className="case-card__meta">
                    <div className="feature-card__icon">
                      <Icon size={22} />
                    </div>
                    <span>{project.category}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <strong className="case-card__outcome">{project.outcome}</strong>
                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        label="Your Project"
        title="Need CloudDogg to help shape your next migration, automation push, or product rebuild?"
        description="Share the business goal and the current bottleneck. The new contact flow makes it easier to explain the work clearly."
        primaryHref="/contact"
        primaryLabel="Start a conversation"
        secondaryHref="/services"
        secondaryLabel="Review the service lineup"
      />
    </main>
  );
}
