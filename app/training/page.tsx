import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Training & Mentorship Program",
  description:
    "CloudDogg Training & Mentorship Program — bridging the gap between potential and opportunity for veterans and their immediate family members.",
};

const APPLY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeTQhptcqe8RJUKGXx3tLX_b6EymQm2GbEkOne_qHQI8EiRZg/viewform?usp=sharing";

const programSteps = [
  ["01", "AWS CCP Certification", "Earn your AWS Certified Cloud Practitioner certification as the foundation."],
  ["02", "Join the Program", "Get welcomed into our mentorship-driven learning environment."],
  ["03", "Live Projects", "Work on real-world cloud projects with your team."],
  ["04", "Career Launch", "Leverage career support and job placement assistance."],
];

export default function TrainingPage() {
  return (
    <main>
      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="container">
          <p className="section-label">Veterans &amp; Families</p>
          <h1>
            CloudDogg <span className="text-gradient">Training &amp; Mentorship</span>
          </h1>
          <p>
            Bridging the gap between potential and opportunity for veterans and their immediate
            family members
          </p>
        </div>
      </section>

      {/* ── Program Offerings ── */}
      <section className="section section-alt">
        <div className="container">
          <p className="section-label text-center">What We Offer</p>
          <h2 className="section-title text-center">Our Program Offerings</h2>
          <div className="grid-4" style={{ marginTop: "3rem" }}>
            {[
              ["📚", "Cloud Fundamentals", "Master the basics of cloud computing and kickstart your journey in the tech industry."],
              ["🎯", "Career Transition", "Tailored guidance to help veterans transition seamlessly into cloud computing careers."],
              ["🛠️", "Training Workshops", "Engaging sessions for individuals and groups to explore cloud technology in depth."],
              ["🤝", "Mentorship", "One-on-one guidance from industry experts to accelerate your cloud career."],
            ].map(([icon, title, desc]) => (
              <div key={title} className="program-card">
                <div className="program-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Program ── */}
      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <p className="section-label">The Program</p>
              <h2 className="section-title">Building the Future of Cloud Professionals</h2>
              <p style={{ marginBottom: "1rem" }}>
                In today&apos;s rapidly evolving cloud industry, hands-on experience and mentorship
                are critical for success. At CloudDogg, we understand the challenges aspiring
                cloud professionals face in bridging the gap between certification and real-world
                application.
              </p>
              <p style={{ marginBottom: "1rem" }}>
                That&apos;s why we&apos;ve designed the CloudDogg Training and Mentorship Program — a
                unique initiative that not only equips students with the knowledge they need but
                also ensures their retention through real-world projects, teamwork, and the
                principles of ultralearning.
              </p>

              <h3 style={{ color: "var(--text-primary)", margin: "2rem 0 1rem" }}>
                A Seamless Transition from Certification to Practice
              </h3>
              <p style={{ marginBottom: "1rem" }}>
                The journey into cloud computing begins with earning the{" "}
                <strong style={{ color: "var(--accent-blue)" }}>
                  AWS Certified Cloud Practitioner
                </strong>{" "}
                certification. This entry-level certification establishes a fundamental
                understanding of AWS services, cloud concepts, and best practices.
              </p>
              <p>
                As soon as students obtain their certification, they are welcomed into our
                mentorship-driven, hands-on learning environment — gaining direct exposure to
                real projects and a structured path to apply their knowledge using ultralearning
                strategies.
              </p>
            </div>

            <div>
              <h3 style={{ color: "var(--text-primary)", marginBottom: "1.25rem" }}>
                Retention Through Real-World Projects
              </h3>
              <p style={{ marginBottom: "1.25rem" }}>
                One of the standout features of the program is the opportunity to work on{" "}
                <strong style={{ color: "var(--accent-teal)" }}>live projects</strong>. Our goal
                is to foster skill retention by immersing students in team-based projects that
                simulate real-world cloud environments.
              </p>
              <ul className="check-list">
                <li>
                  <strong>Practical Experience:</strong> Participants apply AWS services to real
                  business use cases — cloud architecture, automation, security, and cost
                  optimization.
                </li>
                <li>
                  <strong>Team Collaboration:</strong> Students develop essential teamwork skills
                  by collaborating with peers, mentors, and industry professionals.
                </li>
                <li>
                  <strong>Expert Mentorship:</strong> Each participant is paired with experienced
                  mentors who provide guidance and best practices.
                </li>
                <li>
                  <strong>Problem-Solving:</strong> Tackling real-world scenarios prepares
                  students for future job roles.
                </li>
                <li>
                  <strong>Ultralearning:</strong> A structured, flexible approach — deeply
                  engaging with cloud computing through self-directed, rapid skill acquisition
                  and deliberate practice.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Our Program ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="two-col">
            <div>
              <p className="section-label">Why Choose Us</p>
              <h2 className="section-title">Why Choose Our Program?</h2>
              <ul className="check-list" style={{ marginTop: "1.5rem" }}>
                <li>Curriculum tailored for veterans and their immediate family members</li>
                <li>Hands-on experience with real-world cloud projects</li>
                <li>One-on-one mentorship from industry professionals</li>
                <li>Flexible learning options: online, in-person, and hybrid</li>
                <li>Career support and job placement assistance</li>
                <li>Community of like-minded learners and supporters</li>
                <li>Special focus on the unique needs of military families</li>
              </ul>
              <div style={{ marginTop: "2.5rem" }}>
                <a
                  href={APPLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary btn-lg"
                >
                  Apply Now
                </a>
              </div>
            </div>

            <div className="card" style={{ alignSelf: "start" }}>
              <div className="card-icon">🎓</div>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "0.75rem" }}>Program Path</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginTop: "1rem" }}>
                {programSteps.map(([num, title, desc]) => (
                  <div key={num} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div
                      style={{
                        minWidth: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        background: "var(--accent-blue)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        color: "#fff",
                        flexShrink: 0,
                      }}
                    >
                      {num}
                    </div>
                    <div>
                      <h4 style={{ color: "var(--text-primary)", marginBottom: "0.2rem" }}>
                        {title}
                      </h4>
                      <p style={{ fontSize: "0.875rem", margin: 0 }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-box">
            <p className="section-label">Join Us</p>
            <h2 className="section-title">Ready to Start Your Cloud Journey?</h2>
            <p>
              Join the ranks of veterans and their immediate family members who have successfully
              transitioned into rewarding cloud computing careers through our Training and
              Mentorship Program.
            </p>
            <div className="btn-group" style={{ justifyContent: "center", marginTop: "2rem" }}>
              <a href={APPLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary btn-lg">
                Apply Now
              </a>
              <Link href="/contact" className="btn-outline btn-lg">
                Ask a Question
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
