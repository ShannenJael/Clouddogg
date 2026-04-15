import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MoveRight } from "lucide-react";
import NewsletterForm from "@/components/NewsletterForm";
import PageHero from "@/components/PageHero";
import SectionIntro from "@/components/SectionIntro";
import { articles } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Read CloudDogg insights on cloud strategy, security, AI workflows, DevOps, and veteran career growth in tech.",
};

const [featuredArticle, ...remainingArticles] = articles;

const topicCards = [
  {
    href: "#featured-story",
    label: "Featured Story",
    title: "Start with the lead article if you want the clearest expression of the editorial voice.",
    description:
      "This path highlights the article with the strongest framing and the clearest reading invitation.",
  },
  {
    href: "#reading-collections",
    label: "Reading Collections",
    title: "Browse by topic if you already know the kind of problem or idea you care about.",
    description:
      "This path helps readers move faster through cloud strategy, security, AI, delivery, and career content.",
  },
  {
    href: "#subscribe",
    label: "Stay Updated",
    title: "Subscribe if you want future writing without hunting around the site.",
    description:
      "This path is for readers who want occasional practical updates on cloud, AI, UX, and career growth.",
  },
];

const editorialStats = [
  { value: `${articles.length}`, label: "Published articles" },
  { value: `${new Set(articles.map((article) => article.category)).size}`, label: "Editorial themes" },
  { value: "Cloud + AI", label: "Primary coverage areas" },
  { value: "Practical", label: "Writing style" },
];

const collections = [
  {
    title: "Cloud strategy and operations",
    description:
      "Architecture, cost control, platform maturity, and the operating decisions that shape long-term cloud health.",
  },
  {
    title: "Security and delivery practice",
    description:
      "Security posture, DevOps habits, and the reliability patterns that keep technical systems usable under pressure.",
  },
  {
    title: "AI and career transition",
    description:
      "Enterprise AI adoption, workflow automation, and veteran-centered guidance for moving into cloud work.",
  },
];

export default function InsightsPage() {
  return (
    <main>
      <PageHero
        label="Insights"
        title={
          <>
            Writing built to be scanned quickly and read all the way through.
          </>
        }
        description="The insights page now behaves more like an editorial hub: clearer reading paths, a stronger featured story, and better orientation for readers who arrive with a specific topic in mind."
        stats={editorialStats}
      />

      <section className="section section--flush">
        <div className="container">
          <SectionIntro
            label="Start Here"
            title="Use the reading path that matches your intent."
            description="The page now helps readers decide whether to start with the lead story, browse by topic, or subscribe for future updates."
            centered
          />

          <div className="path-card-grid">
            {topicCards.map((topic) => (
              <Link key={topic.href} href={topic.href} className="path-card">
                <span className="path-card__label">{topic.label}</span>
                <strong>{topic.title}</strong>
                <p>{topic.description}</p>
                <span className="text-link">
                  Go to this section
                  <MoveRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="featured-story">
        <div className="container">
          <SectionIntro
            label="Featured"
            title={featuredArticle.title}
            description={featuredArticle.excerpt}
          />

          <div className="editorial-spotlight">
            <article className="featured-article">
              <div className="featured-article__meta">
                <span>{featuredArticle.category}</span>
                <span>{featuredArticle.date}</span>
                <span>{featuredArticle.readTime}</span>
              </div>
              <p>{featuredArticle.intro}</p>
              <Link href={`/insights/${featuredArticle.slug}`} className="button button--primary">
                Read the full article
              </Link>
            </article>

            <aside className="surface-card surface-card--light editorial-spotlight__aside">
              <p className="eyebrow">Why Start Here</p>
              <h2>One strong article is better than a wall of equal-weight cards.</h2>
              <p>
                The featured area now gives the lead story room to breathe while still keeping the
                larger archive close at hand.
              </p>
              <div className="tag-row tag-row--wide">
                {featuredArticle.takeaways.map((item) => (
                  <span key={item} className="tag tag--soft">
                    {item}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section--soft" id="reading-collections">
        <div className="container">
          <SectionIntro
            label="Reading Collections"
            title="The archive is easier to browse when it is framed by intent."
            description="These collection prompts help readers move through the archive without having to decode the content strategy on their own."
          />

          <div className="card-grid card-grid--three">
            {collections.map((collection) => (
              <article key={collection.title} className="mini-card">
                <h3>{collection.title}</h3>
                <p>{collection.description}</p>
              </article>
            ))}
          </div>

          <div className="card-grid card-grid--three insights-grid-spacious">
            {remainingArticles.map((article) => (
              <article key={article.slug} className="insight-card insight-card--expanded">
                <div className="insight-card__meta">
                  <span>{article.category}</span>
                  <span>{article.readTime}</span>
                </div>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <div className="tag-row">
                  {article.takeaways.slice(0, 2).map((takeaway) => (
                    <span key={takeaway} className="tag">
                      {takeaway}
                    </span>
                  ))}
                </div>
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

      <section className="section" id="subscribe">
        <div className="container newsletter-panel">
          <div>
            <p className="eyebrow">Subscribe</p>
            <h2>Get new CloudDogg writing in your inbox.</h2>
            <p>
              Subscribe for updates on cloud delivery, platform UX, AI operations, and career
              growth for veterans entering tech.
            </p>
            <Link href={`/insights/${featuredArticle.slug}`} className="text-link">
              Start with the featured article
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="surface-card surface-card--light">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </main>
  );
}
