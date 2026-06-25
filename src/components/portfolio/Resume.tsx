import { Download, GraduationCap, Briefcase, Award, Wrench, Users, FileText, Target } from "lucide-react";
import { SectionLabel } from "./About";

export function Resume() {
  const skills = {
    languages: ["Python (NumPy, Pandas, Scikit-Learn)", "SQL", "Java", "C", "HTML/CSS", "JavaScript"],
    tools: ["Git", "Matplotlib", "Kali Linux", "Seaborn", "Wireshark", "CICFlowMeter", "Vercel"],
    concepts: ["Probability Theory", "Statistical Inference", "Linear Algebra", "Optimization", "Regression Modeling", "Hypothesis Testing", "Machine Learning", "Data Modeling", "Anomaly Detection", "DSA"],
    softSkills: ["Leadership", "Quantitative Problem-solving", "Adaptability", "Public Speaking", "Team Management"]
  };

  const experience = [
    {
      role: "Research Intern, Cybersecurity",
      org: "IIIT Kottayam",
      period: "May 2025 – June 2025",
      location: "Kottayam, Kerala",
      bullets: [
        "Developed a Behavioral Fingerprinting system using statistical feature extraction to model network traffic patterns from high-dimensional datasets.",
        "Implemented unsupervised statistical learning models including Isolation Forest (97% detection accuracy) and K-Means clustering; analyzed bias-variance trade-offs and anomaly score distributions.",
        "Validated model thresholds using hypothesis-driven evaluation with confusion matrix, precision-recall metrics, and statistical performance comparison."
      ]
    },
    {
      role: "Google Gemini Student Ambassador",
      org: "Google",
      period: "May 2026 – Sept. 2026",
      location: "Remote",
      bullets: [
        "Selected among 4,500 students from all over India to serve as a campus ambassador and drive awareness of Google Gemini tools."
      ]
    },
    {
      role: "Data Analytics Intern",
      org: "Infosys Springboard",
      period: "Feb 2026 – Present",
      location: "Remote",
      bullets: [
        "Selected for the specialized Data Analytics track; undergoing advanced training in EDA, dynamic visualization, and statistical predictive modeling techniques."
      ]
    },
    {
      role: "Intern, Cyber Security",
      org: "QNAYDS LLP",
      period: "July 2024",
      location: "Remote",
      bullets: [
        "Assisted in identifying network vulnerabilities and mapping security frameworks through structured, data-driven auditing methodologies."
      ]
    }
  ];

  const education = {
    inst: "Saintgits College of Engineering",
    period: "Aug. 2023 – May 2027 (Expected)",
    degree: "B.Tech in Computer Science and Engineering",
    gpa: "CGPA: 9.33 / 10",
    location: "Kottayam, Kerala",
    specialization: "Honors in Machine Learning | Minor in Computational Mathematics",
    coursework: ["Probability Theory", "Linear Algebra", "Statistical Inference", "Optimization Techniques", "Data Structures & Algorithms", "Machine Learning"]
  };

  const leadership = [
    {
      role: "Treasurer",
      org: "ACM Student Chapter",
      period: "Oct. 2024 – Present",
      bullets: [
        "Spearheaded financial planning and budget allocation for chapter activities; coordinated 'ACM Week' logistics for 200+ participants."
      ]
    },
    {
      role: "Execom Member",
      org: "College Math Club (Infinity)",
      period: "Sept. 2024 – Present",
      bullets: [
        "Organized competitive mathematics quizzes and mentored junior students in Calculus, Probability Theory, and advanced statistical problem-solving techniques."
      ]
    }
  ];

  const certifications = [
    "McKinsey Forward Program (2026)",
    "GATE 2026 Qualified",
    "IELTS Academic (Band 8.0)",
    "Deloitte Data Analytics Job Simulation",
    "NPTEL Elite+Silver (Deep Learning - 81%, IoT & ML)"
  ];

  return (
    <section id="resume" className="relative py-20 md:py-28">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-secondary/10" />
      <div className="absolute top-0 left-1/4 -z-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <SectionLabel>Resume</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Curriculum Vitae</h2>
          </div>
          <a
            href="/Amrutha_Ajish_Achuthan_Resume.pdf"
            download="Amrutha_Ajish_Achuthan_Resume.pdf"
            className="group inline-flex items-center gap-2.5 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:scale-105"
          >
            <Download size={16} className="transition-transform group-hover:translate-y-0.5" />
            Download PDF Resume
          </a>
        </div>

        {/* Printable/Readable Resume Sheet */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-card shadow-card">
          {/* Header Area */}
          <div className="border-b border-border/80 bg-secondary/30 p-8 md:p-10 text-center sm:text-left flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div>
              <h3 className="text-3xl font-bold tracking-tight">Amrutha Ajish Achuthan</h3>
              <p className="mt-1.5 text-sm font-semibold text-primary">Computer Science Engineer · ML & Decision Science Specialist</p>
              <p className="mt-3 text-xs text-muted-foreground flex flex-wrap gap-x-4 gap-y-1 justify-center sm:justify-start">
                <span>📍 Pathanamthitta, Kerala</span>
                <span>📧 amruthaajishachuthan@gmail.com</span>
                <span>📞 +91 9496306909</span>
              </p>
            </div>
            <div className="flex flex-col gap-2 w-full sm:w-auto">
              <span className="inline-flex justify-center items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-3.5 py-1 text-xs font-semibold text-primary">
                <Target size={12} /> GATE 2026 Qualified
              </span>
              <span className="inline-flex justify-center items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-3.5 py-1 text-xs font-semibold text-primary">
                <Users size={12} /> Google Gemini Ambassador
              </span>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-border divide-x divide-y md:divide-y-0 divide-border text-center">
            <div className="p-5">
              <p className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Education</p>
              <p className="mt-1 font-display font-bold text-sm">B.Tech CSE (Saintgits)</p>
            </div>
            <div className="p-5">
              <p className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Academic CGPA</p>
              <p className="mt-1 font-display font-bold text-sm">9.33 / 10</p>
            </div>
            <div className="p-5">
              <p className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">ML Spec</p>
              <p className="mt-1 font-display font-bold text-sm">Honors in Machine Learning</p>
            </div>
            <div className="p-5">
              <p className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">Math Spec</p>
              <p className="mt-1 font-display font-bold text-sm">Minor in Comp. Maths</p>
            </div>
          </div>

          {/* Main Content Layout */}
          <div className="grid gap-px bg-border/60 lg:grid-cols-5">
            {/* Left Main Pane: Experience & Projects */}
            <div className="lg:col-span-3 bg-card p-8 space-y-10">
              {/* Experience */}
              <div>
                <h4 className="flex items-center gap-2 font-display text-base font-bold text-foreground border-b border-border pb-3">
                  <Briefcase size={18} className="text-primary" /> Professional Experience
                </h4>
                <div className="mt-6 space-y-6">
                  {experience.map((exp, idx) => (
                    <div key={idx} className="relative pl-4 border-l border-border hover:border-primary/60 transition-colors">
                      <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-border group-hover:bg-primary" />
                      <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                        <h5 className="font-semibold text-sm leading-snug">{exp.role}</h5>
                        <span className="text-[10px] font-bold text-primary tracking-wider uppercase">{exp.period}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">{exp.org} · {exp.location}</p>
                      <ul className="mt-2.5 space-y-1 text-xs text-muted-foreground leading-relaxed">
                        {exp.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="list-disc list-outside ml-4 pl-0.5">{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Leadership */}
              <div>
                <h4 className="flex items-center gap-2 font-display text-base font-bold text-foreground border-b border-border pb-3">
                  <Users size={18} className="text-primary" /> Leadership & Initiatives
                </h4>
                <div className="mt-6 space-y-5">
                  {leadership.map((lead, idx) => (
                    <div key={idx} className="pl-4 border-l border-border">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                        <h5 className="font-semibold text-sm leading-snug">{lead.role}</h5>
                        <span className="text-[10px] font-bold text-primary tracking-wider uppercase">{lead.period}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">{lead.org}</p>
                      <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                        {lead.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="list-disc list-outside ml-4 pl-0.5">{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Pane: Education, Skills, Achievements */}
            <div className="lg:col-span-2 bg-secondary/10 p-8 space-y-10">
              {/* Education */}
              <div>
                <h4 className="flex items-center gap-2 font-display text-sm font-bold text-foreground border-b border-border/80 pb-3 uppercase tracking-wider">
                  <GraduationCap size={16} className="text-primary" /> Education
                </h4>
                <div className="mt-5">
                  <h5 className="font-bold text-sm leading-snug">{education.degree}</h5>
                  <p className="text-xs text-muted-foreground mt-0.5">{education.inst}</p>
                  <p className="text-[10px] font-bold text-primary mt-1">{education.period} | {education.location}</p>
                  <div className="mt-3.5 space-y-2 rounded-2xl bg-card border border-border/40 p-4">
                    <p className="text-xs font-bold text-primary">{education.gpa}</p>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">Spec:</span> {education.specialization}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1.5">
                      {education.coursework.map((course) => (
                        <span key={course} className="rounded bg-secondary/80 border border-border/40 px-1.5 py-0.5 text-[9px] font-semibold text-foreground">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h4 className="flex items-center gap-2 font-display text-sm font-bold text-foreground border-b border-border/80 pb-3 uppercase tracking-wider">
                  <Wrench size={16} className="text-primary" /> Technical Skills
                </h4>
                <div className="mt-5 space-y-4">
                  <div>
                    <h5 className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground mb-1.5">Languages</h5>
                    <div className="flex flex-wrap gap-1.5">
                      {skills.languages.map((s) => (
                        <span key={s} className="rounded-lg bg-card border border-border px-2 py-0.5 text-[11px] font-medium text-foreground">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground mb-1.5">Tools</h5>
                    <div className="flex flex-wrap gap-1.5">
                      {skills.tools.map((s) => (
                        <span key={s} className="rounded-lg bg-card border border-border px-2 py-0.5 text-[11px] font-medium text-foreground">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground mb-1.5">Concepts</h5>
                    <div className="flex flex-wrap gap-1.5">
                      {skills.concepts.map((s) => (
                        <span key={s} className="rounded-lg bg-card border border-border px-2 py-0.5 text-[11px] font-medium text-foreground">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Certifications */}
              <div>
                <h4 className="flex items-center gap-2 font-display text-sm font-bold text-foreground border-b border-border/80 pb-3 uppercase tracking-wider">
                  <Award size={16} className="text-primary" /> Certifications & Tests
                </h4>
                <ul className="mt-5 space-y-2">
                  {certifications.map((cert, idx) => (
                    <li key={idx} className="flex gap-2 items-start text-xs text-muted-foreground">
                      <Award size={13} className="shrink-0 text-primary mt-0.5" />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
