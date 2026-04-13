import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import SectionIntro from "@/components/SectionIntro";
import { trainingOfferings, trainingTimeline } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Training",
  description:
    "CloudDogg training and mentorship helps veterans and military families move from cloud certification into applied project work.",
};

const APPLY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeTQhptcqe8RJUKGXx3tLX_b6EymQm2GbEkOne_qHQI8EiRZg/viewform?usp=sharing";

const programBenefits = [
  "Designed for veterans and immediate family members",
  "Moves beyond certification into practical project work",
  "Pairs participants with mentorship and applied feedback",
  "Supports career transition and confidence building",
];

export default function TrainingPage() {
  return (
    <main>
      <PageHero
        label="Training and Mentorship"
        title={
          <>
            A clearer bridge from cloud certification to real delivery experience.
          </>
        }
        description="This page now reads more like a program someone can confidently join, with a stronger explanation of who it serves and how it works."
        actions={
          <div className="button-row button-row--center">
            <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="button button--primary">
              Apply now
            </a>
            <Link href="/contact" className="button button--secondary">
              Ask a question
            </Link>
          </div>
        }
      />

      <section className="section">
        <div className="container">
          <SectionIntro
            label="Program Focus"
            title="Built to help people retain what they learn."
            description="The redesign makes the training offer feel more credible by framing it around outcomes, structure, and support instead of broad promises."
            centered
          />

          <div className="card-grid card-grid--four">
            {trainingOfferings.map((offering) => {
              const Icon = offering.icon;

              return (
                <article key={offering.title} className="feature-card feature-card--tight">
                  <div className="feature-card__icon">
                    <Icon size={22} />
                  </div>
                  <h3>{offering.title}</h3>
                  <p>{offering.description}</p>
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
              label="Program Path"
              title="A sequence designed to move from fundamentals into confidence."
              description="The timeline below turns the program into a readable journey instead of a wall of text."
            />

            <div className="timeline">
              {trainingTimeline.map((step) => (
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
            <p className="eyebrow">Why It Works</p>
            <h2>Real repetition beats passive learning.</h2>
            <p>
              CloudDogg&apos;s training philosophy centers on mentorship, repetition, and exposure to
              realistic delivery scenarios so participants do not lose what they worked to learn.
            </p>
            <ul className="bullet-list bullet-list--spacious">
              {programBenefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection
        label="Apply to the Program"
        title="Ready to move from cloud study into guided practice?"
        description="If you are a veteran or immediate family member looking for structured mentorship, CloudDogg can help you take the next step."
        primaryHref="/contact"
        primaryLabel="Talk with CloudDogg"
        secondaryHref="/about"
        secondaryLabel="Learn about the company"
      />
    </main>
  );
}
