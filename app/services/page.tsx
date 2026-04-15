import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MoveRight } from "lucide-react";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import SectionIntro from "@/components/SectionIntro";
import { heroStats, platformStack, processSteps, services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "CloudDogg services include platform engineering, AI automation, security, analytics, product delivery, and fractional cloud leadership.",
};

export default function ServicesPage() {
  const prioritySignals = [
    "Need senior guidance before you hire full-time platform leadership",
    "Want AI or automation tied to a real workflow instead of a demo",
    "Have delivery friction across cloud, product, security, or reporting",
  ];

  const engagementNotes = [
    "Discovery starts with constraints, team capacity, and delivery blockers",
    "Scope is shaped into a practical plan, not a giant transformation deck",
    "Hands-on support can cover architecture, implementation, cleanup, or coaching",
  ];

  return (
    <main>
      <PageHero
        label="Services"
        title={
          <>
            Strategy, engineering, and execution support for teams that need
            <span className="text-accent"> cleaner systems and faster momentum</span>.
          </>
        }
        description="This page now leads with outcomes, engagement clarity, and plain-language offers so both technical and non-technical buyers can find the right lane quickly."
        stats={heroStats}
        actions={
          <div className="button-row button-row--center">
            <Link href="/contact" className="button button--primary">
              Discuss your project
            </Link>
            <Link href="/portfolio" className="button button--secondary">
              View project outcomes
            </Link>
          </div>
        }
      />

      <section className="section section--flush services-spotlight">
        <div className="container">
          <div className="services-spotlight__panel">
            <div className="services-spotlight__intro">
              <p className="eyebrow">Best Fit</p>
              <h2>Built for teams that know something needs to improve, but need a clearer path forward.</h2>
              <p>
                The new opening section reduces scanning fatigue by translating CloudDogg&apos;s work
                into recognizable buying signals instead of leading with a wall of capabilities.
              </p>
            </div>

            <div className="services-spotlight__grid">
              <div className="services-spotlight__card">
                <span>Typical triggers</span>
                <ul className="services-signal-list">
                  {prioritySignals.map((signal) => (
                    <li key={signal}>
                      <CheckCircle2 size={18} />
                      <p>{signal}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="services-spotlight__card services-spotlight__card--accent">
                <span>How engagement usually starts</span>
                <div className="services-note-stack">
                  {engagementNotes.map((note, index) => (
                    <div key={note} className="services-note">
                      <strong>0{index + 1}</strong>
                      <p>{note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            label="Core Capabilities"
            title="Choose the lane that matches the current bottleneck."
            description="Each offer is framed around the problem it solves, the kind of work involved, and where CloudDogg typically adds leverage."
            centered
          />

          <div className="card-grid card-grid--three">
            {services.map((service, index) => {
              const Icon = service.icon;
              const serviceNumber = String(index + 1).padStart(2, "0");

              return (
                <article key={service.slug} className="service-card service-card--reworked">
                  <div className="service-card__badge-row">
                    <span className="service-card__number">{serviceNumber}</span>
                    <span className="service-card__pill">Advisory + Delivery</span>
                  </div>
                  <div className="service-card__header">
                    <div className="feature-card__icon">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3>{service.title}</h3>
                      <p className="service-card__summary">{service.description}</p>
                    </div>
                  </div>
                  <div className="service-card__divider" />
                  <p className="service-card__label">What this usually includes</p>
                  <ul className="bullet-list">
                    {service.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <Link href="/contact" className="text-link">
                    Ask about {service.title.toLowerCase()}
                    <MoveRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container services-flow">
          <div className="surface-card surface-card--light">
            <SectionIntro
              label="Engagement Model"
              title="A delivery rhythm that keeps strategy connected to execution."
              description="This section is more visual and sequential so visitors can understand what happens after the first conversation."
            />

            <div className="timeline">
              {processSteps.map((step) => (
                <div key={step.step} className="timeline__item">
                  <span>{step.step}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="services-aside">
            <div className="surface-card surface-card--accent services-proof-card">
              <p className="eyebrow">What Buyers Usually Need</p>
              <h2>Enough technical depth to trust the work, without making the page feel like a stack dump.</h2>
              <p>
                The refreshed right rail balances proof and readability, which helps decision-makers
                stay oriented while still giving technical teams signal.
              </p>
              <div className="tag-row tag-row--wide">
                {platformStack.map((item) => (
                  <span key={item} className="tag tag--soft">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="surface-card services-proof-card">
              <p className="eyebrow">Conversation Starter</p>
              <h2>Bring the bottleneck, the timeline, and the handoff reality.</h2>
              <p>
                Whether the issue is platform drift, AI adoption, security cleanup, or product
                friction, the first step is usually making the problem concrete enough to solve.
              </p>
              <Link href="/contact" className="text-link">
                Ask about your stack
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-bottom-panel">
            <div className="services-bottom-panel__copy">
              <p className="eyebrow">Working Style</p>
              <h2>CloudDogg can plug in as advisor, builder, or steadying senior presence.</h2>
              <p>
                The page now closes with a clearer positioning statement so visitors understand
                CloudDogg is not limited to one engagement shape or one narrow implementation lane.
              </p>
            </div>

            <div className="services-mode-grid">
              <article className="mini-card">
                <h3>Advisory</h3>
                <p>Architecture reviews, direction setting, prioritization, and vendor or platform decisions.</p>
              </article>
              <article className="mini-card">
                <h3>Embedded delivery</h3>
                <p>Hands-on work across infrastructure, automation, UX refinement, product cleanup, and integration.</p>
              </article>
              <article className="mini-card">
                <h3>Enablement</h3>
                <p>Documentation, team coaching, and practical handoff patterns that keep the outcome usable.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        label="Work With CloudDogg"
        title="Need senior support for platform decisions, automation, security, or product cleanup?"
        description="Use the contact page to describe the current bottleneck, the timeline, and what the team has already tried."
        primaryHref="/contact"
        primaryLabel="Start a project"
        secondaryHref="/about"
        secondaryLabel="Learn about CloudDogg"
      />
    </main>
  );
}
