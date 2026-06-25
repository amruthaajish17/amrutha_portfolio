import { ArrowRight, Mail, Sparkles, GraduationCap, MapPin, FileText } from "lucide-react";
import portrait from "@/assets/amrutha-portrait.jpg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="absolute inset-0 -z-10 grid-bg opacity-60" />
      <div
        className="absolute -z-10 right-[-10%] top-[-10%] h-[480px] w-[480px] rounded-full blur-3xl"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div
        className="absolute -z-10 left-[-12%] bottom-[-15%] h-[420px] w-[420px] rounded-full blur-3xl opacity-50"
        style={{ background: "var(--gradient-primary)" }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-xs font-semibold text-primary shadow-soft backdrop-blur">
            <Sparkles size={14} /> Data Science · Decision Science · AI
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            Amrutha Ajish Achuthan
            <span className="mt-2 block text-2xl font-semibold sm:text-3xl lg:text-4xl">
              Bridging <span className="gradient-text">Data Science</span> &amp; Business Strategy.
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-base text-muted-foreground sm:text-lg">
            Computer Science Engineer specializing in Machine Learning, Decision Science, and
            AI-driven problem-solving.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <GraduationCap size={16} className="text-primary" /> Saintgits College of Engineering
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={16} className="text-primary" /> Kerala, India
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              View My Work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <Mail size={16} /> Get in Touch
            </a>
            <a
              href="/Amrutha_Ajish_Achuthan_Resume.pdf"
              download="Amrutha_Ajish_Achuthan_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <FileText size={16} /> Download Resume
            </a>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4">
            {[
              { k: "GATE 2026", v: "Qualified" },
              { k: "Google GSA", v: "Student Ambassador" },
              { k: "Honors", v: "in ML" },
            ].map((s) => (
              <div
                key={s.k}
                className="rounded-2xl border border-border bg-card/70 p-4 shadow-soft backdrop-blur"
              >
                <dt className="font-display text-xl font-bold text-primary">{s.k}</dt>
                <dd className="text-xs text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="order-1 flex justify-center md:order-2">
          <div className="relative">
            <div className="absolute inset-0 -z-10 animate-spin-slow rounded-[2.5rem] border-2 border-dashed border-primary/30" />
            <div
              className="absolute -inset-3 -z-10 rounded-[2.5rem] blur-2xl"
              style={{ background: "var(--gradient-primary)", opacity: 0.3 }}
            />

            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-2 shadow-card">
              <img
                src={portrait}
                width={645}
                height={526}
                alt="Amrutha Ajish Achuthan"
                className="h-[360px] w-[280px] rounded-[1.6rem] object-cover object-top sm:h-[440px] sm:w-[340px]"
              />
              <div className="pointer-events-none absolute inset-2 rounded-[1.6rem] ring-1 ring-inset ring-white/20" />
            </div>

            <div className="animate-float absolute -bottom-4 -left-4 rounded-2xl border border-border bg-card/90 px-4 py-3 shadow-card backdrop-blur">
              <p className="font-display text-sm font-bold">ML · AI Security</p>
              <p className="text-xs text-muted-foreground">Building with intent</p>
            </div>

            <div className="absolute -right-4 top-8 rounded-2xl border border-border bg-card/90 px-4 py-3 shadow-card backdrop-blur">
              <p className="font-display text-sm font-bold text-primary">Google GSA</p>
              <p className="text-xs text-muted-foreground">Student Ambassador</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
