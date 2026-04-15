import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, MoveRight } from "lucide-react";
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

const entryPaths = [
  {
    href: "#program-fit",
    label: "Starting Point",
    title: "You have cloud interest or certification, but not enough real delivery repetition yet.",
    description:
      "Use this path if you need a clearer bridge between studying cloud concepts and applying them under guidance.",
  },
  {
    href: "#program-structure",
    label: "Program Shape",
    title: "You want a structured mentorship rhythm instead of trying to learn everything alone.",
    description:
      "Use this path if accountability, feedback, and realistic scenarios would help you retain what you learn.",
  },
  {
    href: "#next-step",
    label: "Next Step",
    title: "You want to understand how to apply and whether the program is the right fit.",
    description:
      "Use this path if you need clarity on who the program serves and what to bring to the first conversation.",
  },
];

const fitSignals = [
  {
    title: "Veterans and immediate family members",
    description:
      "The program is designed around the transition path for veterans and their families moving toward cloud work.",
  },
  {
    title: "People who want guided practice, not passive coursework",
    description:
      "This is a stronger fit when you want mentorship, repetition, and project-style learning instead of another isolated course.",
  },
  {
    title: "Learners who need confidence through application",
    description:
      "The program focuses on turning study into usable habits, clearer communication, and more confidence in real scenarios.",
  },
];

const programPillars = [
  {
    title: "From concept to repetition",
    description:
      "Training is designed to reinforce understanding through reuse, troubleshooting, and guided iteration instead of one-time exposure.",
  },
  {
    title: "Mentorship with accountability",
    description:
      "Participants get feedback and direction that keep momentum going when self-study usually starts to drift.",
  },
  {
    title: "Practice shaped like delivery",
    description:
      "The learning environment aims to feel closer to real cloud work so knowledge holds up better outside the classroom.",
  },
];

const firstConversation = [
  {
    title: "Your current cloud baseline",
    description: "Any certifications, hands-on work, labs, or self-study that already shape your starting point.",
  },
  {
    title: "Where you feel stuck",
    description: "The specific gap between what you know today and the kind of practical confidence you want next.",
  },
  {
    title: "Your transition goals",
    description: "What kind of role, learning outcome, or readiness milestone you are working toward.",
  },
  {
    title: "Your availability and pace",
    description: "Scheduling, life constraints, and the level of commitment you can realistically sustain.",
  },
];

export default function TrainingPage() {
  return (
    <main>
      <PageHero
        label="Training and Mentorship"
        title={
          <>
            A stronger bridge from cloud study into guided, repeatable practice.
          </>
        }
        description="CloudDogg training is designed for veterans and immediate family members who need more than certification alone. The page now explains who the program serves, how the learning path works, and what the first step looks like."
        actions={
          <div className="button-row button-row--center">
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="button button--primary"
            >
              Apply now
            </a>
            <Link href="/contact" className="button button--secondary">
              Ask a question
            </Link>
          </div>
        }
      />

      <section className="section section--flush">
        <div className="container">
          <SectionIntro
            label="Start Here"
            title="Use the path that matches where you are right now."
            description="The training page now leads with orientation first, so prospective applicants can understand fit before digging through program details."
            centered
          />

          <div className="path-card-grid">
            {entryPaths.map((path) => (
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

      <section className="section">
        <div className="container split-panel">
          <div className="surface-card surface-card--accent" id="program-fit">
            <SectionIntro
              label="Program Fit"
              title="Built for people who need cloud learning to become usable in the real world."
              description="The strongest fit is someone who already sees the opportunity in cloud work but needs structure, repetition, and feedback to make progress stick."
            />

            <div className="detail-list">
              {fitSignals.map((item) => (
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
            <p className="eyebrow">What You Get</p>
            <h2>A program shaped around confidence, repetition, and career momentum.</h2>
            <p>
              The training offer is not just about helping someone pass an exam. It is about
              helping them retain the material, practice under guidance, and move closer to real
              delivery readiness.
            </p>

            <div className="detail-list">
              {programPillars.map((item) => (
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

      <section className="section section--soft" id="program-structure">
        <div className="container">
          <SectionIntro
            label="Program Structure"
            title="The learning path now reads like a real progression instead of a generic training pitch."
            description="Applicants can see the sequence, the support model, and the kinds of outcomes the program is trying to create."
          />

          <div className="program-shell">
            <div className="program-shell__intro">
              <p className="eyebrow">Learning Flow</p>
              <h2>Move from foundation into applied confidence.</h2>
              <p>
                The program is designed to establish a baseline, add mentorship and repetition,
                then move participants through more realistic scenarios so the learning holds up
                under pressure.
              </p>
              <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="text-link">
                Review the application
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="surface-card surface-card--light">
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
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            label="Program Components"
            title="The offer is easier to scan when the core components are given room to breathe."
            description="These sections explain what CloudDogg is actually trying to build into the experience for each participant."
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

      <section className="section section--soft" id="next-step">
        <div className="container split-panel">
          <div className="surface-card">
            <p className="eyebrow">First Conversation</p>
            <h2>Come with your current situation, not a polished answer.</h2>
            <p>
              A useful conversation starts with where you are now, what you have already learned,
              and what kind of support would make the next stage more realistic.
            </p>

            <div className="detail-list">
              {firstConversation.map((item) => (
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

          <div className="surface-card surface-card--accent">
            <p className="eyebrow">Next Step</p>
            <h2>Apply if the program sounds aligned, or reach out if you need clarity first.</h2>
            <p>
              The page now makes the action path simpler: apply directly if you are ready, or use
              the contact page if you want to talk through fit, timing, or questions before
              committing.
            </p>
            <div className="button-row">
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="button button--primary"
              >
                Apply to the program
              </a>
              <Link href="/contact" className="button button--secondary">
                Contact CloudDogg
              </Link>
            </div>
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
