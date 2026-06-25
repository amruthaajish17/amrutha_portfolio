import { useState } from "react";
import { 
  LineChart, 
  BrainCircuit, 
  ShieldCheck, 
  MessagesSquare,
  GitBranch, 
  Github, 
  Terminal, 
  Code2, 
  BarChart3, 
  Play, 
  Book,
  Palette,
  FileText
} from "lucide-react";
import { SectionLabel } from "./About";

const services = [
  {
    icon: LineChart,
    title: "Data Visualization",
    desc: "Interactive dashboards and reports that make complex data instantly decision-ready.",
  },
  {
    icon: BrainCircuit,
    title: "Statistical Modeling",
    desc: "Application of probability theory, regression, and predictive modeling for business insights.",
  },
  {
    icon: ShieldCheck,
    title: "Security Auditing",
    desc: "Anomaly detection, PII protection, and secure-by-design AI system reviews.",
  },
  {
    icon: MessagesSquare,
    title: "Strategic Communications",
    desc: "Translating technical results into clear business strategy and narrative.",
  },
];

const skillCategories = [
  {
    title: "Languages",
    items: ["Python", "C", "SQL", "PL/SQL"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["scikit-learn", "PyTorch", "OpenCV", "Flask", "Streamlit", "LangChain", "NumPy"],
  },
  {
    title: "Databases",
    items: ["MySQL"],
  },
  {
    title: "Data & Visualization",
    items: ["Power BI", "Excel", "Chart.js", "pandas"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "Jupyter Notebook", "MySQL Workbench", "VS Code"],
  },
  {
    title: "Core Methodologies",
    items: [
      "Machine Learning",
      "Statistical Inference",
      "Data Modeling",
      "High-Dimensional Analysis",
      "Decision Science",
      "Computer Vision",
    ],
  },
];

const tools = [
  { key: "colab", name: "Google Colab", icon: Play, color: "text-amber-500 bg-amber-500/10 border-amber-500/20" },
  { key: "notion", name: "Notion", icon: FileText, color: "text-foreground bg-foreground/10 border-foreground/20" },
  { key: "git", name: "Git", icon: GitBranch, color: "text-orange-500 bg-orange-500/10 border-orange-500/20" },
  { key: "vscode", name: "VS Code", icon: Code2, color: "text-blue-500 bg-blue-500/10 border-blue-500/20" },
  { key: "canva", name: "Canva", icon: Palette, color: "text-purple-500 bg-purple-500/10 border-purple-500/20" },
  { key: "powerbi", name: "Power BI", icon: BarChart3, color: "text-yellow-600 bg-yellow-500/10 border-yellow-500/20" },
  { key: "jupyter", name: "Jupyter", icon: Book, color: "text-orange-600 bg-orange-600/10 border-orange-600/20" },
  { key: "github", name: "GitHub", icon: Github, color: "text-foreground bg-foreground/10 border-foreground/20" },
  { key: "terminal", name: "Command Line", icon: Terminal, color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20" },
];

const toolCommands = {
  colab: [
    "amrutha@terminal:~ $ colab run --gpu=\"L4\" train.py",
    "[INFO] Training YOLOv8 compliance model...",
    "[EPOCH 10/10] Loss: 0.034, mAP50-95: 0.972",
    "[SUCCESS] Helmet detection weights saved to rakshakCV.pt."
  ],
  notion: [
    "amrutha@terminal:~ $ notion sync --chapter=\"ACM\"",
    "[INFO] Fetching budget ledger for Aug 2025 - May 2026...",
    "[SUCCESS] Ledgers verified. 100% chapter fund accountability."
  ],
  git: [
    "amrutha@terminal:~ $ git commit -am \"Security: sandbox gateway\"",
    "[main 4f82d1c] feat: redact PII using Microsoft Presidio",
    "14 files changed, 256 insertions(+), 12 deletions(-)"
  ],
  vscode: [
    "amrutha@terminal:~ $ code .",
    "[VS CODE] Loading workspace: amruthaajishachuthan-portfolio",
    "[STATUS] ESLint: OK | Prettier: OK | TypeScript: Strict Mode Active."
  ],
  canva: [
    "amrutha@terminal:~ $ canva export --deck=\"MBA-Strategy\"",
    "[INFO] Formatting slides for Suits SCAS HR Game...",
    "[SUCCESS] Exported presentation deck. 1st Place achieved!"
  ],
  powerbi: [
    "amrutha@terminal:~ $ powerbi --compile \"UMAC\"",
    "[INFO] Connecting datasets from Power Query...",
    "[SUCCESS] Unified Military Analytics Dashboard updated in real-time."
  ],
  jupyter: [
    "amrutha@terminal:~ $ jupyter run data_preprocessing.ipynb",
    "[CELL 1] Loading pandas & numpy... OK",
    "[CELL 2] Standardizing feature scales... OK",
    "[CELL 3] Outliers handled via Isolation Forest (97% detection)."
  ],
  github: [
    "amrutha@terminal:~ $ git push origin main",
    "Enumerating objects: 23, done.",
    "Delta compression using up to 8 threads",
    "To github.com/amruthaajish17/portfolio.git | main -> main"
  ],
  terminal: [
    "amrutha@terminal:~ $ whoami",
    "amruthaajishachuthan",
    "[INFO] Selected Google GSA Ambassador | Honors ML | GATE '26."
  ]
};

const initialTerminal = [
  "amrutha@terminal:~ $ neofetch",
  "Amrutha Ajish Achuthan",
  "----------------------",
  "OS: Saintgits CE B.Tech CE",
  "Host: Data Science & Strategy",
  "Kernel: Machine Learning Honors & Math Minor",
  "Shell: bash 5.1 | Uptime: 3 years, 10 months",
  "",
  "Hover over a tool on the left to run developer commands..."
];

export function Services() {
  const [terminalLines, setTerminalLines] = useState<string[]>(initialTerminal);
  const [activeTool, setActiveTool] = useState<string | null>(null);

  const handleToolHover = (toolKey: string) => {
    setActiveTool(toolKey);
    setTerminalLines(toolCommands[toolKey as keyof typeof toolCommands]);
  };

  const handleToolLeave = () => {
    setActiveTool(null);
    setTerminalLines(initialTerminal);
  };

  return (
    <section id="services" className="relative py-20 md:py-28">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-soft)" }} />
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <div className="flex justify-center">
            <SectionLabel>Services &amp; Skills</SectionLabel>
          </div>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">What I bring to the table</h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-3xl border border-border bg-card p-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow"
            >
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon size={24} />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Technical Skills Categorized Grid */}
        <div className="mt-12 rounded-3xl border border-border bg-card p-8 shadow-soft">
          <h3 className="font-display text-lg font-bold">Technical Skills</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((cat) => (
              <div key={cat.title} className="rounded-2xl border border-border/40 bg-secondary/20 p-5">
                <h4 className="font-display font-bold text-xs text-primary mb-3.5 uppercase tracking-wider">{cat.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-border bg-card px-2.5 py-1 text-xs font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Tools Sandbox */}
        <div className="mt-12 rounded-3xl border border-border bg-card p-8 shadow-soft">
          <div className="text-center mb-8">
            <h3 className="font-display text-lg font-bold">Interactive Tools Sandbox</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Hover over my core tools to execute mock developer commands and inspect execution logs.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-5 items-stretch">
            {/* Tools Grid - Left Panel */}
            <div className="lg:col-span-3 grid gap-3 grid-cols-2 sm:grid-cols-3">
              {tools.map((t) => {
                const isHovered = activeTool === t.key;
                return (
                  <div
                    key={t.name}
                    onMouseEnter={() => handleToolHover(t.key)}
                    onMouseLeave={handleToolLeave}
                    className={`flex flex-col items-center justify-center p-4 rounded-2xl border text-center cursor-pointer transition-all duration-300 select-none ${
                      isHovered 
                        ? "border-primary bg-primary/5 scale-[1.03] shadow-soft" 
                        : "border-border bg-secondary/20 hover:border-border/80 hover:bg-secondary/40"
                    }`}
                  >
                    <span className={`grid h-12 w-12 place-items-center rounded-xl border mb-3 transition-transform ${t.color} ${isHovered ? 'scale-110' : ''}`}>
                      <t.icon size={22} />
                    </span>
                    <span className="font-display text-sm font-semibold text-foreground leading-tight">{t.name}</span>
                  </div>
                );
              })}
            </div>

            {/* Terminal Window - Right Panel */}
            <div className="lg:col-span-2 flex flex-col rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden shadow-card min-h-[300px] text-left">
              {/* Terminal Top Bar */}
              <div className="flex items-center justify-between bg-slate-900 px-4 py-2.5 border-b border-slate-800/60 select-none">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[10px] text-slate-500 font-mono tracking-wider font-semibold">amrutha@developer-console:~</span>
                <span className="w-10" />
              </div>

              {/* Terminal Screen area */}
              <div className="p-5 font-mono text-xs text-slate-300 space-y-1.5 flex-1 flex flex-col justify-start overflow-y-auto leading-relaxed select-text">
                {terminalLines.map((line, idx) => {
                  const isCommand = line.startsWith("amrutha@terminal");
                  let colorClass = "text-slate-300";
                  if (isCommand) colorClass = "text-emerald-400 font-bold";
                  else if (line.startsWith("[SUCCESS]")) colorClass = "text-cyan-400 font-semibold";
                  else if (line.startsWith("[INFO]")) colorClass = "text-amber-300/90";
                  else if (line.startsWith("[STATUS]") || line.startsWith("[VS CODE]")) colorClass = "text-blue-400";
                  
                  return (
                    <p key={idx} className={colorClass}>
                      {line}
                    </p>
                  );
                })}
                <p className="text-emerald-400 font-bold flex items-center gap-0.5">
                  <span>amrutha@terminal:~ $</span>
                  <span className="h-4 w-2 bg-emerald-400 animate-pulse inline-block align-middle ml-1" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
