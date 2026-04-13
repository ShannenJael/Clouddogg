type SectionIntroProps = {
  label: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export default function SectionIntro({
  label,
  title,
  description,
  centered = false,
}: SectionIntroProps) {
  return (
    <div className={`section-intro${centered ? " section-intro--centered" : ""}`}>
      <p className="eyebrow">{label}</p>
      <h2>{title}</h2>
      {description ? <p className="section-intro__copy">{description}</p> : null}
    </div>
  );
}
