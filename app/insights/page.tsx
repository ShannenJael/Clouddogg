import type { Metadata } from "next";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import NewsletterForm from "@/components/NewsletterForm";
import PageHero from "@/components/PageHero";
import SectionIntro from "@/components/SectionIntro";
import { articles } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Read CloudDogg insights on cloud strategy, security, AI workflows, DevOps, and veteran career growth in tech.",
};

export default function InsightsPage() {
  const [featuredArticle, ...remainingArticles] = articles;

  return (
    <main>
      <PageHero
        label="Insights"
        title={
          <>
            A real content section with readable articles and working article pages.
          </>
        }
        description="The redesign turns Insights from placeholder cards into a more complete editorial area with better hierarchy and stronger reading paths."
      />

      <section className="section">
        <div className="container">
          <SectionIntro
            label="Featured"
            title={featuredArticle.title}
            description={featuredArticle.excerpt}
          />

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
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionIntro
            label="More Articles"
            title="Further reading across cloud, AI, security, and delivery."
            centered
          />

          <div className="card-grid card-grid--three">
            {remainingArticles.map((article) => (
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
            <p className="eyebrow">Subscribe</p>
            <h2>Get new CloudDogg writing in your inbox.</h2>
            <p>
              Subscribe for updates on cloud delivery, platform UX, AI operations, and career
              growth for veterans entering tech.
            </p>
          </div>
          <div className="surface-card surface-card--light">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </main>
  );
}
