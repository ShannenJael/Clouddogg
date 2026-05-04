import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, MoveRight } from "lucide-react";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import SectionIntro from "@/components/SectionIntro";
import { portfolioProjects } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Review CloudDogg project outcomes across healthcare, AI automation, blockchain applications, security, analytics, and product delivery.",
};

const impactStats = [
  { value: "Cloud + AI + Web3", label: "Delivery and transformation work" },
  { value: "65%", label: "Support load reduction on AI workflow work" },
  { value: "40%", label: "Cost reduction on a healthcare migration" },
  { value: "99.9%", label: "Reliability target across managed environments" },
];

const portfolioPaths = [
  {
    href: "#proof-patterns",
    label: "What The Work Shows",
    title: "Start here if you want the highest-level pattern behind the case studies.",
    description:
      "This path frames what the project work tends to improve before you read each individual case.",
  },
  {
    href: "#featured-work",
    label: "Featured Work",
    title: "Start here if you want the strongest individual examples first.",
    description:
      "This path surfaces a few larger case highlights before dropping into the full portfolio grid.",
  },
  {
    href: "#case-library",
    label: "Case Library",
    title: "Start here if you want to scan the broader spread of outcomes and technical domains.",
    description:
      "This path keeps the full set of projects visible without making them all compete equally at the top of the page.",
  },
];

const proofPatterns = [
  {
    title: "Operational cleanup with measurable payoff",
    description:
      "The work usually reduces friction, cost, risk, or time-to-delivery in ways decision-makers can actually recognize.",
  },
  {
    title: "Architecture tied to day-to-day use",
    description:
      "These projects are not framed as abstract technical wins. They are tied to how teams release, support, and run systems after launch.",
  },
  {
    title: "Modernization without platform theater",
    description:
      "CloudDogg work tends to focus on practical leverage, not transformation language that sounds better than it operates.",
  },
];

const [leadCase, secondaryCase, ...remainingCases] = portfolioProjects;

export default function PortfolioPage() {
  return (
    <main>
      <PageHero
        label="Portfolio"
        title={
          <>
            Outcome-led project work across cloud, AI, blockchain, product, and security.
          </>
        }
        description="The portfolio now places the proof in a clearer order: first the delivery patterns, then featured examples, then the broader library of case work."
        stats={impactStats}
        actions={
          <div className="button-row button-row--center">
            <Link href="/contact" className="button button--primary">
              Start a conversation
            </Link>
            <Link href="/services" className="button button--secondary">
              Review the service lineup
            </Link>
          </div>
        }
      />

      <section className="section section--flush">
        <div className="container">
          <SectionIntro
            label="Start Here"
            title="Choose the way you want to evaluate the proof."
            description="The page now helps visitors decide whether they want to understand the pattern, inspect featured examples, or scan the full case library."
            centered
          />

          <div className="path-card-grid">
            {portfolioPaths.map((path) => (
              <Link key={path.href} href={path.href} className="path-card">
                <span className="path-card__label">{path.label}</span>
                <strong>{path.title}</strong>
                <p>{path.description}</p>
                <span className="text-link">
                  Go to this section
                  <MoveRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="proof-patterns">
        <div className="container split-panel">
          <div className="surface-card surface-card--accent">
            <SectionIntro
              label="Proof Patterns"
              title="The portfolio works best when the outcomes are framed before the case details."
              description="These projects collectively show how CloudDogg tends to create value across migrations, automation, blockchain application work, security, and product delivery."
            />

            <div className="detail-list">
              {proofPatterns.map((item) => (
                <div key={item.title} className="detail-item">
                  <BadgeCheck size={18} />
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-card surface-card--light">
            <p className="eyebrow">What The Cases Tend To Change</p>
            <h2>Less drag, clearer systems, and better delivery rhythm.</h2>
            <p>
              The work usually targets one or more recurring constraints: brittle infrastructure,
              repetitive support load, weak guardrails, fragmented reporting, or product
              experiences that have become harder to ship and maintain.
            </p>
            <div className="tag-row tag-row--wide">
              <span className="tag tag--soft">Migration</span>
              <span className="tag tag--soft">Automation</span>
              <span className="tag tag--soft">Blockchain</span>
              <span className="tag tag--soft">Security</span>
              <span className="tag tag--soft">Analytics</span>
              <span className="tag tag--soft">Product Delivery</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft" id="featured-work">
        <div className="container">
          <SectionIntro
            label="Featured Work"
            title="A few larger examples deserve more room than a uniform card grid."
            description="These spotlight cases pull the strongest proof points forward before the rest of the portfolio appears below."
          />

          <div className="case-spotlight-grid">
            {[leadCase, secondaryCase].map((project) => {
              const Icon = project.icon;

              return (
                <article key={project.title} className="case-spotlight">
                  <div className="case-card__meta">
                    <div className="feature-card__icon">
                      <Icon size={22} />
                    </div>
                    <span>{project.category}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <strong className="case-spotlight__outcome">{project.outcome}</strong>
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

      <section className="section" id="case-library">
        <div className="container">
          <SectionIntro
            label="Case Library"
            title="The broader project library is still here, just organized with better pacing."
            description="Each case stays outcome-led, but the page now gives the stronger examples more visual weight before the grid expands."
            centered
          />

          <div className="card-grid card-grid--three">
            {remainingCases.map((project) => {
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
        title="Need CloudDogg to help shape your next migration, automation push, blockchain app, or product rebuild?"
        description="Share the business goal and the current bottleneck. The contact flow is built to make the work easier to explain clearly."
        primaryHref="/contact"
        primaryLabel="Start a conversation"
        secondaryHref="/services"
        secondaryLabel="Review the service lineup"
      />
    </main>
  );
}
