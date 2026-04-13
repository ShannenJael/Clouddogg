import type { Metadata } from "next";
import Image from "next/image";
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
  "That same mindset shaped this redesign: cleaner navigation, better pacing, warmer branding, and clearer conversion paths throughout the site.",
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        label="About CloudDogg"
        title={
          <>
            A veteran-founded company built around disciplined delivery and better user experience.
          </>
        }
        description="The redesigned about page gives the brand more credibility by explaining the mission, leadership, and values with stronger structure and less generic cloud language."
      />

      <section className="section">
        <div className="container split-panel">
          <div>
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
            <p className="eyebrow">Mission</p>
            <h2>Build secure, scalable systems teams can confidently use and operate.</h2>
            <p>
              CloudDogg helps organizations simplify cloud delivery, make product experiences more
              usable, and create stronger handoffs between strategy, engineering, and day-to-day
              operations.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container founder-panel">
          <div className="surface-card founder-card">
            <Image
              src="/joshua-dixon.jpg"
              alt="Joshua Dixon"
              width={160}
              height={160}
              className="founder-card__image"
            />
            <div>
              <p className="eyebrow">Leadership</p>
              <h2>Joshua Dixon</h2>
              <p className="founder-card__role">Founder and Chief Operations Officer</p>
              <p>
                Joshua brings cloud, DevOps, and operational discipline to CloudDogg with a strong
                focus on making systems more reliable and more understandable for the people using
                them.
              </p>
              <blockquote>{founderQuote}</blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            label="Values"
            title="The principles behind the work."
            description="The new design gives CloudDogg a clearer brand voice by tying visuals to values instead of relying on generic enterprise styling."
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
            description="This section now reads like a real ecosystem instead of an afterthought."
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
