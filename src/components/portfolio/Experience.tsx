import { SectionLabel } from "./About";

const timeline = [
  {
    role: "Google Gemini Student Ambassador",
    org: "Google",
    period: "May 2026 – Sept 2026",
    desc: "Selected among 4,500 students from all over India to serve as a campus ambassador and drive awareness of Google Gemini tools.",
  },
  {
    role: "Data Analytics Intern",
    org: "Infosys Springboard",
    period: "Feb 2026 – Present",
    desc: "Selected for the specialized Data Analytics track; undergoing advanced training in EDA, dynamic visualization, and statistical predictive modeling.",
  },
  {
    role: "Research Intern",
    org: "IIIT Kottayam",
    period: "May 2025 – June 2025",
    desc: "Developed a Behavioral Fingerprinting system using statistical feature extraction. Implemented unsupervised statistical learning models (Isolation Forest, K-Means clustering) with 97% detection accuracy.",
  },
  {
    role: "Intern, Cyber Security",
    org: "QNAYDS LLP",
    period: "July 2024",
    desc: "Assisted in identifying network vulnerabilities and mapping security frameworks through structured, data-driven auditing methodologies.",
  },
];

const leadership = [
  {
    role: "Campus Finance Lead",
    org: "MuLearn MGP",
    period: "Feb 2026 – Present",
    bullets: [
      "Tracking expenses and collaborating on budget allocation for community events.",
    ],
    skills: ["Accounting", "Program Management"],
  },
  {
    role: "Treasurer",
    org: "Saintgits College of Engineering ACM Student Chapter",
    period: "Aug 2025 – May 2026",
    location: "Kottayam, Kerala · On-site",
    bullets: [
      "Managing end-to-end financial operations for the ACM chapter, overseeing budgeting and fund allocation for technical events and workshops.",
      "Streamlined expense tracking processes, ensuring 100% fund accountability across all chapter activities.",
    ],
    skills: ["Accounting", "Program Management"],
  },
  {
    role: "Treasurer",
    org: "Infinity - Saintgits Mathematics Club",
    period: "Jul 2024 – Jul 2025",
    bullets: [
      "Overseeing budget allocation, club accounting, and financial management for mathematical events.",
    ],
    skills: ["Accounting"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionLabel>Experience &amp; Leadership</SectionLabel>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Where I&apos;ve made an impact</h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ol className="relative space-y-6 border-l-2 border-border pl-6">
              {timeline.map((t) => (
                <li key={t.role} className="relative">
                  <span className="absolute -left-[31px] top-1.5 grid h-4 w-4 place-items-center rounded-full border-2 border-background bg-primary shadow-soft" />
                  <div className="rounded-2xl border border-border bg-card p-5 shadow-soft transition-transform hover:-translate-y-0.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-display text-lg font-bold">{t.role}</h3>
                      <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">
                        {t.period}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-primary">{t.org}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <h3 className="font-display text-lg font-bold">Leadership Roles</h3>
              <div className="mt-4 space-y-3">
                {leadership.map((l) => (
                  <div key={l.role + l.org} className="rounded-2xl bg-secondary/60 p-4">
                    <div className="flex items-center justify-between gap-1">
                      <p className="font-display font-semibold text-xs leading-snug">{l.role}</p>
                      <span className="text-[9px] text-primary font-bold whitespace-nowrap">{l.period}</span>
                    </div>
                    <p className="text-[10px] text-muted-foreground/80 font-medium mt-0.5">
                      {l.org}
                      {l.location && ` · ${l.location}`}
                    </p>
                    <ul className="mt-1.5 space-y-1 text-[11px] text-muted-foreground leading-normal">
                      {l.bullets.map((bullet, idx) => (
                        <li key={idx} className="relative pl-3 text-left">
                          <span className="absolute left-0 top-[6px] h-1 w-1 rounded-full bg-primary/65" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    {l.skills && l.skills.length > 0 && (
                      <div className="mt-2.5 flex flex-wrap gap-1">
                        {l.skills.map((s) => (
                          <span key={s} className="rounded bg-primary/10 border border-primary/20 px-1.5 py-0.5 text-[9px] font-semibold text-primary">
                            {s}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div
                className="mt-5 rounded-2xl p-5 text-primary-foreground shadow-soft"
                style={{ background: "var(--gradient-primary)" }}
              >
                <p className="font-display text-2xl font-bold">Strategy + Code</p>
                <p className="mt-1 text-sm opacity-90">
                  Leading at the intersection of technical depth and business clarity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
