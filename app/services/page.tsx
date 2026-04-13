import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
  return (
    <main>
      <PageHero
        label="Services"
        title={
          <>
            Strategy, engineering, and delivery services built to make cloud work easier to run.
          </>
        }
        description="The redesigned services page is cleaner, more outcome-focused, and much easier to scan for non-technical buyers and technical leads alike."
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

      <section className="section">
        <div className="container">
          <SectionIntro
            label="Core Capabilities"
            title="A tighter services architecture across cloud, product, AI, and security."
            description="Each card is organized around a plain-language offer and practical bullets so buyers can understand the lane quickly."
            centered
          />

          <div className="card-grid card-grid--three">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article key={service.slug} className="service-card">
                  <div className="service-card__header">
                    <div className="feature-card__icon">
                      <Icon size={22} />
                    </div>
                    <h3>{service.title}</h3>
                  </div>
                  <p>{service.description}</p>
                  <ul className="bullet-list">
                    {service.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container split-panel">
          <div className="surface-card surface-card--light">
            <SectionIntro
              label="Engagement Model"
              title="How CloudDogg usually helps teams move."
              description="The site now explains the delivery rhythm directly, which reduces ambiguity around what happens after contact."
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

          <div className="surface-card">
            <p className="eyebrow">Tech Familiarity</p>
            <h2>Modern tooling, presented without the buzzword fog.</h2>
            <p>
              Buyers often need proof of technical depth. This refreshed section surfaces the
              stack without overwhelming the page.
            </p>
            <div className="tag-row tag-row--wide">
              {platformStack.map((item) => (
                <span key={item} className="tag tag--soft">
                  {item}
                </span>
              ))}
            </div>
            <Link href="/contact" className="text-link">
              Ask about your stack
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        label="Work With CloudDogg"
        title="Need senior support for platform decisions, automation, or product cleanup?"
        description="Use the contact page to describe the current bottleneck, the timeline, and what the team has already tried."
        primaryHref="/contact"
        primaryLabel="Start a project"
        secondaryHref="/about"
        secondaryLabel="Learn about CloudDogg"
      />
    </main>
  );
}
