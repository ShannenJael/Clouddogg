import type { ReactNode } from "react";
import type { Stat } from "@/lib/site-data";

type PageHeroProps = {
  label: string;
  title: ReactNode;
  description: string;
  stats?: Stat[];
  actions?: ReactNode;
};

export default function PageHero({
  label,
  title,
  description,
  stats,
  actions,
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="page-hero__inner">
          <p className="eyebrow">{label}</p>
          <h1 className="home-hero__h1">{title}</h1>
          <p className="page-hero__copy">{description}</p>
          {actions ? <div className="page-hero__actions">{actions}</div> : null}
          {stats?.length ? (
            <div className="hero-stats hero-stats--compact">
              {stats.map((stat) => (
                <div key={stat.label} className="hero-stat-card">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
