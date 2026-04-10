import Link from "next/link";
import { ArrowRight, BadgeCheck, CheckCircle2, MoveRight } from "lucide-react";
import CTASection from "@/components/CTASection";
import NewsletterForm from "@/components/NewsletterForm";
import SectionIntro from "@/components/SectionIntro";
import {
  articles,
  capabilityHighlights,
  differentiators,
  heroStats,
  homeEntryPoints,
  homeProofPoints,
  industries,
  platformStack,
  portfolioProjects,
  processSteps,
  services,
} from "@/lib/site-data";

export default function HomePage() {
  const featuredProjects = portfolioProjects.slice(0, 3);
  const featuredArticles = articles.slice(0, 3);

  return (
    <main>
      <section className="home-hero">
        <div className="home-hero__media" aria-hidden="true">
          <video
            className="home-hero__video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
            <source src="/hero-bg.mov" type="video/quicktime" />
            <source src="/Clouddogg_Video.mp4" type="video/mp4" />
          </video>
          <div className="home-hero__veil" />
        </div>

        <div className="container home-hero__layout">
          <div className="home-hero__content">
            <img
              src="/clouddogg-logo-hero.png"
              alt="CloudDogg"
              className="home-hero__logo"
            />
            <p className="eyebrow">Veteran-founded cloud strategy and delivery</p>
            <h1 className="home-hero__h1">
              Cloud work should feel <span className="text-accent">clear, usable, and ready</span>
              {" "}for the teams that depend on it.
            </h1>
            <p className="home-hero__copy">
              CloudDogg helps businesses modernize infrastructure, ship better digital experiences,
              and build AI workflows that make operations faster instead of more confusing.
            </p>

            <div className="button-row">
              <Link href="/contact" className="button button--primary">
                Start a Project
                <ArrowRight size={16} />
              </Link>
              <Link href="/services" className="button button--secondary">
                Explore Services
              </Link>
            </div>

            <ul className="hero-proof-list">
              {homeProofPoints.map((point) => (
                <li key={point}>
                  <CheckCircle2 size={18} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="container">
          <div className="hero-stats">
            {heroStats.map((stat) => (
              <div key={stat.label} className="hero-stat-card">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-hero-panel-band">
        <div className="container">
          <div className="hero-panel hero-panel--band">
            <div className="hero-panel__intro">
              <span>Built like a better front door</span>
              <h2>Three ways people usually arrive at CloudDogg</h2>
              <p>
                The redesigned homepage makes the entry path obvious: platform work, AI delivery,
                or training and mentorship.
              </p>
            </div>

            <div className="hero-route-list hero-route-list--band">
              {capabilityHighlights.map((item) => (
                <div key={item.title} className="hero-route-card">
                  <strong>{item.title}</strong>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            label="Start Here"
            title="Use the path that matches what you need now."
            description="Borrowing the strongest idea from Tablet Masters, the redesigned experience pushes visitors into a clear lane instead of making them decode the business first."
            centered
          />

          <div className="card-grid card-grid--three">
            {homeEntryPoints.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="feature-card">
                  <div className="feature-card__icon">
                    <Icon size={22} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <Link href={item.href} className="text-link">
                    {item.cta}
                    <MoveRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionIntro
            label="Services"
            title="Cloud, AI, security, and product work under one sharper system."
            description="The site now presents the offer with stronger hierarchy, cleaner cards, and more useful scannability for decision-makers."
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

      <section className="section">
        <div className="container split-panel">
          <div>
            <SectionIntro
              label="How We Work"
              title="A tighter delivery rhythm for cloud and product decisions."
              description="The new UX stays closer to how buyers think: understand the problem, clarify the path, then move forward confidently."
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

          <div className="surface-card surface-card--accent">
            <p className="eyebrow">Why This Redesign Works Better</p>
            <h2>More confidence, less wandering.</h2>
            <div className="check-list">
              {differentiators.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="check-list__item">
                    <div className="check-list__icon">
                      <Icon size={18} />
                    </div>
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionIntro
            label="Portfolio"
            title="Selected project work and transformation outcomes."
            description="The strongest proof is still delivered results. The new layout turns the portfolio into a tighter set of outcome-led case cards."
            centered
          />

          <div className="card-grid card-grid--three">
            {featuredProjects.map((project) => {
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

      <section className="section">
        <div className="container split-panel">
          <div className="surface-card surface-card--light">
            <SectionIntro
              label="Industries"
              title="Where CloudDogg tends to create the most leverage."
              description="The site now explains the business in use-case language instead of generic cloud wording."
            />

            <div className="stack-grid">
              {industries.map((industry) => {
                const Icon = industry.icon;

                return (
                  <article key={industry.title} className="mini-card">
                    <div className="feature-card__icon">
                      <Icon size={20} />
                    </div>
                    <h3>{industry.title}</h3>
                    <p>{industry.description}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="surface-card">
            <p className="eyebrow">Platform Stack</p>
            <h2>Technologies and patterns we build with.</h2>
            <p>
              The refreshed visual system also makes technical depth easier to scan without
              overwhelming first-time visitors.
            </p>
            <div className="tag-row tag-row--wide">
              {platformStack.map((item) => (
                <span key={item} className="tag tag--soft">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionIntro
            label="Insights"
            title="Content areas now support real reading paths, not dead-end cards."
            description="Insight articles are now backed by working detail pages so the knowledge section feels finished instead of placeholder."
          />

          <div className="card-grid card-grid--three">
            {featuredArticles.map((article) => (
              <article key={article.slug} className="insight-card">
                <div className="insight-card__meta">
                  <span>{article.category}</span>
                  <span>{article.readTime}</span>
                </div>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <div className="insight-card__footer">
                  <small>{article.date}</small>
                  <Link href={`/insights/${article.slug}`} className="text-link">
                    Read article
                    <MoveRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container newsletter-panel">
          <div>
            <p className="eyebrow">Stay Connected</p>
            <h2>Get CloudDogg updates without the clutter.</h2>
            <p>
              Subscribe for practical cloud, AI, UX, and training updates as the business
              continues to evolve.
            </p>
          </div>
          <div className="surface-card surface-card--light">
            <div className="newsletter-panel__card-head">
              <BadgeCheck size={20} />
              <span>Occasional updates. Useful signal only.</span>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </section>

      <CTASection
        label="Next Step"
        title="Need a stronger cloud presence, better product UX, or delivery support?"
        description="Use the redesigned contact path to outline what you are building and where the current friction is. CloudDogg can take it from there."
        primaryHref="/contact"
        primaryLabel="Start the conversation"
        secondaryHref="/portfolio"
        secondaryLabel="Review recent work"
      />
    </main>
  );
}
