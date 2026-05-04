import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MoveLeft, MoveRight } from "lucide-react";
import CTASection from "@/components/CTASection";
import { articles } from "@/lib/site-data";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((entry) => entry.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((entry) => entry.slug === slug);

  if (!article) notFound();

  const relatedArticles = articles.filter((entry) => entry.slug !== article.slug).slice(0, 3);

  return (
    <main>
      <section className="page-hero article-hero">
        <div className="container">
          <div className="page-hero__inner article-hero__content">
            <Link href="/insights" className="text-link text-link--back">
              <MoveLeft size={16} />
              Back to insights
            </Link>
            <p className="eyebrow">{article.category}</p>
            <h1>{article.title}</h1>
            <p className="page-hero__copy">{article.excerpt}</p>
            <div className="article-hero__meta">
              <span>{article.date}</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container article-layout">
          <aside className="surface-card surface-card--light article-aside">
            <p className="eyebrow">Key Takeaways</p>
            <ul className="bullet-list bullet-list--spacious">
              {article.takeaways.map((takeaway) => (
                <li key={takeaway}>{takeaway}</li>
              ))}
            </ul>
          </aside>

          <article className="surface-card article-body">
            <p className="article-body__intro">{article.intro}</p>
            {article.sections.map((section) => (
              <section key={section.title} className="article-body__section">
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </section>
            ))}
          </article>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="section-intro section-intro--centered">
            <p className="eyebrow">Related Reading</p>
            <h2>More CloudDogg insights</h2>
          </div>
          <div className="card-grid card-grid--three">
            {relatedArticles.map((entry) => (
              <article key={entry.slug} className="insight-card">
                <div className="insight-card__meta">
                  <span>{entry.category}</span>
                  <span>{entry.readTime}</span>
                </div>
                <h3>{entry.title}</h3>
                <p>{entry.excerpt}</p>
                <div className="insight-card__footer">
                  <small>{entry.date}</small>
                  <Link href={`/insights/${entry.slug}`} className="text-link">
                    Read article
                    <MoveRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        label="Need Help Applying This"
        title="Want CloudDogg to turn these ideas into an actual delivery plan?"
        description="Use the contact page if your team needs support translating cloud, AI, blockchain, or DevOps strategy into work that can ship."
        primaryHref="/contact"
        primaryLabel="Start a conversation"
        secondaryHref="/services"
        secondaryLabel="See the services page"
      />
    </main>
  );
}
