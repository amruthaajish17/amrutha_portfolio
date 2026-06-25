import { GraduationCap, Award, Sigma, Target, Sparkles } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionLabel>About Me</SectionLabel>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">
          Turning data into{" "}
          <span className="gradient-text">decisions that move business forward.</span>
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-border bg-card p-7 shadow-soft">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I&apos;m a Computer Science Engineer driven to leverage data for{" "}
                <span className="font-semibold text-foreground">
                  business strategy and decision-making
                </span>
                . I work at the intersection of technical excellence and strategic leadership —
                translating machine learning, statistical inference, and analytics into clear,
                actionable business value.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Target, title: "Decision Science", desc: "Data-backed strategy & KPIs" },
                  {
                    icon: Sigma,
                    title: "Computational Math",
                    desc: "Rigorous, model-driven thinking",
                  },
                ].map((f) => (
                  <div
                    key={f.title}
                    className="flex items-start gap-3 rounded-2xl bg-secondary/60 p-4"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                      <f.icon size={18} />
                    </span>
                    <div>
                      <p className="font-display font-semibold">{f.title}</p>
                      <p className="text-sm text-muted-foreground">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-border/60 pt-6">
                <h4 className="font-display font-bold text-base flex items-center gap-2">
                  <Sparkles size={16} className="text-primary" /> Beyond Engineering
                </h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Outside of research and coding, I am passionate about writing. I used to publish articles in the UAE-based <span className="font-semibold text-foreground">Friday Magazine</span>, and I am currently co-authoring a book. I also find creative balance in cooking and reading.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-soft">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <GraduationCap size={22} />
              </span>
              <h3 className="mt-4 font-display text-xl font-bold">Education</h3>
              
              <div className="mt-6 relative border-l border-border pl-4 space-y-6">
                <div className="relative">
                  <span className="absolute -left-[22.5px] top-1.5 h-3 w-3 rounded-full bg-primary" />
                  <p className="font-semibold text-sm leading-snug">B.Tech, Computer Engineering</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Saintgits College of Engineering (Autonomous)</p>
                  <p className="text-[10px] text-primary font-bold mt-0.5">Aug 2023 – May 2027</p>
                  <ul className="mt-2 space-y-1">
                    {[
                      "Honors in Machine Learning",
                      "Minor in Computational Mathematics",
                      "GATE 2026 Qualified",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                        <Award size={12} className="shrink-0 text-primary" />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <span className="absolute -left-[22.5px] top-1.5 h-3 w-3 rounded-full bg-muted-foreground/30" />
                  <p className="font-semibold text-sm leading-snug">High School (Class XII)</p>
                  <p className="text-xs text-muted-foreground mt-0.5">St Antony&apos;s Public School</p>
                  <p className="text-[10px] text-muted-foreground/80 font-semibold mt-0.5">2021 – 2023</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[22.5px] top-1.5 h-3 w-3 rounded-full bg-muted-foreground/30" />
                  <p className="font-semibold text-sm leading-snug">Primary &amp; Secondary Education</p>
                  <p className="text-xs text-muted-foreground mt-0.5">GEMS Education (UAE)</p>
                  <p className="text-[10px] text-muted-foreground/80 font-semibold mt-0.5">2009 – 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      {children}
    </span>
  );
}
