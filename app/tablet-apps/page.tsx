import type { Metadata } from "next";
import Link from "next/link";
import {
  AppWindow,
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  LayoutTemplate,
  MonitorSmartphone,
  PanelsTopLeft,
  Rows3,
  TabletSmartphone,
  Touchpad,
  Workflow,
} from "lucide-react";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import SectionIntro from "@/components/SectionIntro";

export const metadata: Metadata = {
  title: "Tablet Apps",
  description:
    "CloudDogg designs tablet-first applications and optimizes mobile apps for larger tablet screens, touch workflows, dashboards, and field use.",
};

const tabletStats = [
  { value: "Tablet-first", label: "UX strategy and application design" },
  { value: "Mobile-to-tablet", label: "Existing app optimization" },
  { value: "Touch-ready", label: "Controls, forms, and workflows" },
  { value: "iPad + Android", label: "Large-screen delivery paths" },
];

const fitSignals = [
  "Your mobile app works, but feels stretched, sparse, or cramped on tablets",
  "Users need dashboards, lists, forms, maps, or documents visible together",
  "Field, classroom, healthcare, or operations teams rely on tablets every day",
];

const tabletUseCases = [
  {
    icon: PanelsTopLeft,
    title: "Operational dashboards",
    description:
      "Give tablet users more context at once with side panels, status views, task queues, and decision-ready data.",
  },
  {
    icon: Touchpad,
    title: "Touch-first workflows",
    description:
      "Redesign controls, spacing, and gestures around hands-on tablet use instead of tiny phone tap targets.",
  },
  {
    icon: LayoutTemplate,
    title: "Large-screen layouts",
    description:
      "Replace one-column mobile screens with split panes, persistent navigation, and layouts that use tablet width well.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive app systems",
    description:
      "Create a shared application system that still feels intentional across phone, tablet, and desktop-sized views.",
  },
];

const optimizationAreas = [
  "Landscape and portrait tablet layouts",
  "Touch target sizing, spacing, and reach zones",
  "Split views for lists, details, forms, and previews",
  "Tablet-friendly navigation and task switching",
  "Performance cleanup for heavier tablet screens",
  "Testing across common iPad and Android tablet breakpoints",
];

const buildModes = [
  {
    icon: AppWindow,
    title: "Optimize an existing mobile app",
    description:
      "Audit the current phone experience, identify tablet friction, and rebuild the screens that should become richer on a larger display.",
  },
  {
    icon: TabletSmartphone,
    title: "Build a tablet-first product",
    description:
      "Start with tablet workflows from day one for teams using devices in the field, at counters, in classrooms, or in clinical settings.",
  },
  {
    icon: Workflow,
    title: "Connect the app to real operations",
    description:
      "Tie the interface to cloud APIs, authentication, reporting, and back-office systems so the tablet app is useful beyond the screen.",
  },
];

const tabletProcess = [
  {
    step: "01",
    title: "Map the tablet workflow",
    description:
      "We identify where the larger screen should reduce taps, expose context, and make the user's work feel faster.",
  },
  {
    step: "02",
    title: "Redesign the key screens",
    description:
      "Mobile layouts become tablet-ready views with better hierarchy, split panes, larger controls, and clearer navigation.",
  },
  {
    step: "03",
    title: "Build, integrate, and test",
    description:
      "CloudDogg implements the updated experience, connects the app to the right systems, and validates it across tablet breakpoints.",
  },
];

export default function TabletAppsPage() {
  return (
    <main>
      <PageHero
        label="Tablet Apps"
        title={
          <>
            Applications built specifically for tablets,
            <span className="text-accent"> not stretched from a phone screen</span>.
          </>
        }
        description="Many mobile applications technically run on tablets, but they do not always visualize well. CloudDogg can take your mobile app and optimize it for tablet use, or build a tablet-first application from the beginning."
        stats={tabletStats}
        actions={
          <div className="button-row button-row--center">
            <Link href="/contact" className="button button--primary">
              Start a tablet project
              <ArrowRight size={16} />
            </Link>
            <Link href="/services" className="button button--secondary">
              Review services
            </Link>
          </div>
        }
      />

      <section className="section section--flush tablet-showcase">
        <div className="container tablet-showcase__layout">
          <div className="tablet-showcase__copy">
            <p className="eyebrow">Mobile App Optimization</p>
            <h2>Tablet users should get more clarity from the larger screen, not a blown-up phone UI.</h2>
            <p>
              A strong tablet application makes use of space, touch, orientation, and task flow.
              That means dashboards can breathe, forms can show supporting context, and users can
              move through work without bouncing through too many small screens.
            </p>

            <ul className="services-signal-list tablet-signal-list">
              {fitSignals.map((signal) => (
                <li key={signal}>
                  <CheckCircle2 size={18} />
                  <p>{signal}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="tablet-device" role="img" aria-label="Tablet application dashboard preview">
            <div className="tablet-device__bezel">
              <div className="tablet-device__camera" />
              <div className="tablet-screen">
                <div className="tablet-screen__toolbar">
                  <span className="tablet-screen__brand">CloudDogg Tablet App</span>
                  <span className="tablet-screen__status">Live workflow</span>
                </div>
                <div className="tablet-screen__body">
                  <div className="tablet-screen__rail">
                    <span className="is-active" />
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="tablet-screen__main">
                    <div className="tablet-screen__summary">
                      <span>Today</span>
                      <strong>42 tasks</strong>
                    </div>
                    <div className="tablet-screen__summary tablet-screen__summary--blue">
                      <span>Review</span>
                      <strong>12 items</strong>
                    </div>
                    <div className="tablet-screen__pane tablet-screen__pane--wide">
                      <span>Task queue</span>
                      <div />
                      <div />
                      <div />
                    </div>
                    <div className="tablet-screen__pane">
                      <span>Detail view</span>
                      <div />
                      <div />
                      <div />
                    </div>
                    <div className="tablet-screen__pane tablet-screen__pane--accent">
                      <span>Action panel</span>
                      <div />
                      <span className="tablet-screen__button">Approve</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            label="Tablet-First Design"
            title="Build the experience around how people actually hold, scan, and complete work on tablets."
            description="Tablet applications are especially useful when teams need richer screens without the weight of a full desktop workflow."
            centered
          />

          <div className="card-grid card-grid--four">
            {tabletUseCases.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="feature-card tablet-feature-card">
                  <div className="feature-card__icon">
                    <Icon size={22} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container tablet-conversion">
          <div className="surface-card surface-card--light">
            <SectionIntro
              label="Conversion Path"
              title="Take the mobile app you already have and make it tablet-ready."
              description="CloudDogg can work from the current product, customer feedback, analytics, or a screen-by-screen audit to decide what should change first."
            />

            <div className="timeline">
              {tabletProcess.map((step) => (
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

          <div className="surface-card surface-card--accent tablet-optimization-card">
            <div className="tablet-optimization-card__head">
              <BadgeCheck size={20} />
              <span>What gets optimized</span>
            </div>
            <h2>Better use of space, clearer context, and smoother tablet interaction.</h2>
            <div className="tablet-check-grid">
              {optimizationAreas.map((item) => (
                <div key={item} className="tablet-check-item">
                  <CheckCircle2 size={17} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            label="Build Options"
            title="Start from your existing mobile app, or design a new tablet application from the workflow up."
            description="The goal is not just to make things bigger. It is to make the tablet version more useful, more readable, and easier to operate."
          />

          <div className="card-grid card-grid--three">
            {buildModes.map((mode) => {
              const Icon = mode.icon;

              return (
                <article key={mode.title} className="service-card service-card--reworked">
                  <div className="service-card__header">
                    <div className="feature-card__icon">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3>{mode.title}</h3>
                      <p className="service-card__summary">{mode.description}</p>
                    </div>
                  </div>
                  <Link href="/contact" className="text-link">
                    Discuss this path
                    <ArrowRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container split-panel">
          <div>
            <SectionIntro
              label="Why Tablet UX Matters"
              title="A tablet is not just a larger phone."
              description="The larger canvas changes how people scan, compare, approve, enter data, and move between tasks. A tablet app should respect that."
            />
          </div>

          <div className="surface-card tablet-table">
            <div className="tablet-table__row tablet-table__row--head">
              <span>Phone-first app</span>
              <span>Tablet-ready app</span>
            </div>
            <div className="tablet-table__row">
              <span>One screen at a time</span>
              <span>List, detail, and actions can live together</span>
            </div>
            <div className="tablet-table__row">
              <span>Dense controls made for thumbs</span>
              <span>Roomier touch controls for two-handed use</span>
            </div>
            <div className="tablet-table__row">
              <span>Hidden context behind extra taps</span>
              <span>Persistent context for faster decisions</span>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        label="Tablet Apps"
        title="Need your mobile app to look and work better on tablets?"
        description="Share the current app, the users who depend on it, and the workflows that feel awkward on a larger screen. CloudDogg can help turn it into a tablet-ready experience."
        primaryHref="/contact"
        primaryLabel="Start a tablet app project"
        secondaryHref="/portfolio"
        secondaryLabel="View project work"
      />
    </main>
  );
}
