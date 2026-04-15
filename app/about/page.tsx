import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, MoveRight } from "lucide-react";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import SectionIntro from "@/components/SectionIntro";
import { founderQuote, partners, values } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about CloudDogg, founder Joshua Dixon, the company's mission, values, and partner network.",
};

const storyPoints = [
  "CloudDogg was founded in 2022 by Joshua Dixon after seeing how often cloud transformation was framed in ways that were technically dense but operationally unclear.",
  "The company combines DevOps and cloud engineering depth with stronger UX thinking, because technical value is easier to trust when the experience around it is also clear.",
  "That same mindset shapes the brand: cleaner navigation, better pacing, sharper service structure, and clearer conversion paths throughout the site.",
];

const aboutPaths = [
  {
    href: "#company-story",
    label: "Company Story",
    title: "Understand what CloudDogg is built to fix in the way technology work is presented and delivered.",
    description:
      "Start here if you want the context behind the company, its positioning, and the kind of problems it is designed to help solve.",
  },
  {
    href: "#leadership",
    label: "Leadership",
    title: "See the founder, the operating mindset, and the discipline behind the work.",
    description:
      "Start here if credibility, accountability, and operator-led delivery matter to your decision-making.",
  },
  {
    href: "#values-and-partners",
    label: "Values + Network",
    title: "Review the principles and partner ecosystem that support the work.",
    description:
      "Start here if you want to understand the company beyond service copy and technical language.",
  },
];

const companySignals = [
  {
    title: "Veteran-founded operating discipline",
    description:
      "CloudDogg is built around reliability, communication, and follow-through when the work has real operational consequences.",
  },
  {
    title: "Cloud depth with product and UX awareness",
    description:
      "The work is not limited to infrastructure decisions. It also pays attention to usability, handoff quality, and how systems are experienced by real teams.",
  },
  {
    title: "Practical delivery over abstract consulting",
    description:
      "The company is designed for teams that need traction, clarity, and usable outcomes rather than polished ambiguity.",
  },
];

const founderFacts = [
  "Founded in 2022",
  "Veteran-led delivery mindset",
  "Cloud, DevOps, and UX-aware execution",
  "Focused on systems teams can actually operate",
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        label="About CloudDogg"
        title={
          <>
            A veteran-founded company built around disciplined delivery and clearer user
            experience.
          </>
        }
        description="The about page now works more like a trust-building front door: it explains the company story, the leadership mindset, and the values behind the work with stronger hierarchy and less generic cloud language."
        actions={
          <div className="button-row button-row--center">
            <Link href="/services" className="button button--primary">
              Review services
            </Link>
            <Link href="/contact" className="button button--secondary">
              Start a conversation
            </Link>
          </div>
        }
      />

      <section className="section section--flush">
        <div className="container">
          <SectionIntro
            label="Start Here"
            title="Use the path that matches what you need to verify."
            description="This page now gives visitors clearer orientation so they can move from curiosity to trust without digging through evenly weighted sections."
            centered
          />

          <div className="path-card-grid">
            {aboutPaths.map((path) => (
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

      <section className="section" id="company-story">
        <div className="container split-panel">
          <div className="surface-card surface-card--light">
            <SectionIntro
              label="Our Story"
              title="Technical depth matters more when the delivery feels coherent."
              description="CloudDogg was built to close the gap between capable engineering and the kind of clarity businesses actually need from a technology partner."
            />

            <div className="story-stack">
              {storyPoints.map((point) => (
                <p key={point}>{point}</p>
              ))}
            </div>
          </div>

          <div className="surface-card surface-card--accent">
            <p className="eyebrow">What That Means</p>
            <h2>CloudDogg is designed to make modern technical work easier to trust.</h2>
            <p>
              The company sits at the overlap of cloud engineering, operational rigor, and better
              UX. That combination matters because strong systems only create value when the people
              around them can actually understand, use, and support them.
            </p>

            <div className="detail-list">
              {companySignals.map((item) => (
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
        </div>
      </section>

      <section className="section section--soft" id="leadership">
        <div className="container">
          <div className="profile-shell">
            <div className="surface-card profile-shell__media">
              <Image
                src="/joshua-dixon.jpg"
                alt="Joshua Dixon"
                width={220}
                height={220}
                className="profile-shell__image"
              />
              <div className="profile-facts">
                {founderFacts.map((fact) => (
                  <span key={fact} className="tag tag--soft">
                    {fact}
                  </span>
                ))}
              </div>
            </div>

            <div className="surface-card surface-card--light profile-shell__copy">
              <p className="eyebrow">Leadership</p>
              <h2>Joshua Dixon</h2>
              <p className="founder-card__role">Founder and Chief Operations Officer</p>
              <p>
                Joshua brings cloud, DevOps, and operational discipline to CloudDogg with a strong
                focus on making systems more reliable and more understandable for the people using
                them.
              </p>
              <blockquote>{founderQuote}</blockquote>
              <Link href="/services" className="text-link">
                See how this shows up in the service model
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="values-and-partners">
        <div className="container">
          <SectionIntro
            label="Values"
            title="The principles behind the work."
            description="The page now ties the brand voice, founder story, and delivery posture together so the values section feels earned instead of decorative."
            centered
          />

          <div className="card-grid card-grid--four">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article key={value.title} className="feature-card feature-card--tight">
                  <div className="feature-card__icon">
                    <Icon size={22} />
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionIntro
            label="Partners"
            title="Programs and partners that support the work."
            description="This area is now framed as part of the broader CloudDogg ecosystem, not an afterthought added at the end of the page."
            centered
          />

          <div className="card-grid card-grid--three">
            {partners.map((partner) => {
              const Icon = partner.icon;

              return (
                <article key={partner.title} className="feature-card">
                  <div className="feature-card__icon">
                    <Icon size={22} />
                  </div>
                  <span className="feature-card__label">{partner.label}</span>
                  <h3>{partner.title}</h3>
                  <p>{partner.description}</p>
                  <a
                    href={partner.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link"
                  >
                    {partner.cta}
                    <ArrowRight size={16} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        label="Ready to Work Together"
        title="Need a partner that can combine engineering rigor with sharper UX and communication?"
        description="CloudDogg is built for organizations that need more than generic cloud consulting language."
        primaryHref="/contact"
        primaryLabel="Start a conversation"
        secondaryHref="/services"
        secondaryLabel="Review services"
      />
    </main>
  );
}
