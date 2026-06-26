import { ShieldCheck, ScanEye, BarChart3, Leaf, Recycle, ClipboardList, Github, ArrowUpRight, Cpu, Eye, Network } from "lucide-react";
import { SectionLabel } from "./About";

const projects = [
  {
    icon: Leaf,
    name: "EcoLogical",
    tag: "Sustainability / Web",
    desc: "Built a platform calculating real-time CO2 emissions using standardized factors, featuring a gamified eco-action tracking module and carbon credit marketplace.",
    stack: ["React", "Django", "PostgreSQL", "REST API"],
    github: "https://github.com/amruthaajish17/Mini-Project-A-Smart-System-for-Household-Carbon-Accountability-and-Sustainability",
  },
  {
    icon: ClipboardList,
    name: "Digital Leave & Food Management",
    tag: "Web Portal",
    desc: "Developed a full-stack portal with a demand-forecasting 'Food Opt-In/Out' feature that significantly minimized administrative overhead and food wastage.",
    stack: ["Python", "MySQL", "JavaScript", "HTML/CSS"],
    github: "https://github.com/amruthaajish17/DBMS-TESTING1",
  },
  {
    icon: BarChart3,
    name: "UMAC — Unified Military Analytics",
    tag: "Dashboard Design",
    desc: "Engineered a full-stack analytics pipeline to scrape, clean, and extract KPIs from live defense data spanning 140+ countries. Designed interactive Power BI dashboards to enable country-level capability comparison.",
    stack: ["Power BI", "Python", "BeautifulSoup", "Pandas"],
    github: "https://github.com/amruthaajish17/Unified-Military-Analytics-and-Comparison--Group-1",
  },
  {
    icon: ScanEye,
    name: "RakshakCV",
    tag: "Computer Vision",
    desc: "Developed a real-time computer vision pipeline utilizing YOLO Nano and YOLOv8 to accurately detect helmet compliance. Curated targeted training data to solve edge cases like turbans, abayas, and masks, improving model inclusivity.",
    stack: ["YOLO Nano", "YOLOv8", "OpenCV", "Python"],
    github: "https://github.com/amruthaajish17/RakshakCV",
  },
  {
    icon: Recycle,
    name: "E-Waste Data Security Simulation",
    tag: "Simulation Software",
    desc: "Developed a software simulation website that models operational security checks and automated cryptographic integrity checks for data destruction in e-waste recycling (UST SIGHT 2.0 National Finalist).",
    stack: ["React", "Flask", "Simulation Software"],
    github: "https://github.com/amruthaajish17/E-Waste_Recycler",
  },
  {
    icon: Cpu,
    name: "Micro-mHC-Transformer",
    tag: "Deep Learning",
    desc: "A from-scratch PyTorch implementation of Manifold-Constrained Hyper-Connections (mHC). Uses the Sinkhorn-Knopp algorithm to project connection matrices onto the Birkhoff polytope (double stochasticity), ensuring structural stability and preventing gradient explosions in multi-stream architectures.",
    stack: ["PyTorch", "Python", "Mathematical Modeling", "Deep Learning"],
    github: "https://github.com/amruthaajish17/Micro-mHC-Transformer",
  },
  {
    icon: ShieldCheck,
    name: "Verity (The Truth)",
    tag: "AI Security",
    desc: "OSC Hackathon 3rd Place Winner. Architected a sandboxed AI gateway using Microsoft Presidio and local LLMs for policy-based logic and regex-driven PII redaction, conducting rigorous EDA to model sensitive data leakage probabilities.",
    stack: ["Microsoft Presidio", "Local LLMs", "PII Redaction", "EDA"],
    github: "https://github.com/amruthaajish17/Verity-AI-gateway",
  },
  {
    icon: Eye,
    name: "RetroScan AI",
    tag: "Computer Vision / PWA",
    desc: "AI-powered highway sign retroreflectivity scanner built for the NHAI 6th Innovation Hackathon. Uses on-device deep learning (MobileNetV3-Small via TensorFlow.js) to classify sign reflectivity, assess conditions, and verify IRC compliance offline.",
    stack: ["React", "TensorFlow.js", "Tailwind CSS", "Vite PWA", "Python"],
    github: "https://github.com/amruthaajish17/RetroScan_AI",
  },
  {
    icon: Network,
    name: "Insider Threat Detection",
    tag: "Cybersecurity / ML",
    desc: "An unsupervised machine learning project developed during my internship at IIIT Kottayam to detect anomalous network patterns using Isolation Forest, DBSCAN, and KMeans clustering.",
    stack: ["Python", "Isolation Forest", "DBSCAN", "KMeans", "Machine Learning"],
    github: "https://github.com/amruthaajish17/IIITK_Internship",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-20 md:py-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-full grid-bg opacity-40" />
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <SectionLabel>Portfolio</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Notable Projects</h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Concise, action-driven builds spanning AI security, computer vision, data analytics, and web engineering.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.name}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-glow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-soft transition-transform group-hover:scale-110">
                    <p.icon size={22} />
                  </span>
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">
                    {p.tag}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-lg font-bold">{p.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>

              <div className="mt-6">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-lg border border-border bg-secondary/50 px-2 py-0.5 text-[10px] font-medium text-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-border/60 pt-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Github size={14} />
                    <span>View Repository</span>
                  </a>
                  <ArrowUpRight
                    size={16}
                    className="text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
