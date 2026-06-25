import { useRef, useState } from "react";
import {
  Award,
  Trophy,
  Cpu,
  Sigma,
  ShieldCheck,
  TrendingUp,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Briefcase,
  Code2,
  Network,
  Binary,
  BrainCircuit,
  Globe,
  Rocket,
  Activity,
} from "lucide-react";
import { SectionLabel } from "./About";

interface Achievement {
  id: string;
  title: string;
  desc: string;
  tag: string;
  date: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  image?: string; // User can upload image later
  gradient: string; // Fallback graphic if image is missing
  rotation: string; // Polaroid style tilt
}

const achievementsData: Achievement[] = [
  {
    id: "mckinsey",
    title: "McKinsey Forward",
    desc: "Forward Learner - Leadership & Business Strategy accelerator",
    tag: "Professional Development",
    date: "April 2026",
    icon: Award,
    image: "/assets/achievements/mckinsey.png",
    gradient: "linear-gradient(135deg, oklch(0.45 0.15 240), oklch(0.3 0.1 260))", // McKinsey Deep Blue
    rotation: "rotate-3 hover:rotate-0",
  },
  {
    id: "osc_hackathon",
    title: "OSC Hackathon & Quiz",
    desc: "Secured 2nd Place in the Quiz & 3rd Place in Hackathon at Saintgits Open Source Club with Project 'Verity' (sandboxed AI gateway for security).",
    tag: "Hackathon & Quiz",
    date: "Feb 2026",
    icon: Code2,
    image: "/assets/achievements/osc_hackathon.png",
    gradient: "linear-gradient(135deg, oklch(0.48 0.18 200), oklch(0.35 0.12 225))", // Tech Blue
    rotation: "-rotate-2 hover:rotate-0",
  },
  {
    id: "gate",
    title: "GATE 2026 Qualified",
    desc: "Qualified Graduate Aptitude Test in Engineering in Computer Science & IT",
    tag: "Academic",
    date: "Feb 2026",
    icon: Cpu,
    image: "/assets/achievements/gate.png",
    gradient: "linear-gradient(135deg, oklch(0.6 0.18 140), oklch(0.45 0.15 160))", // Technical Green
    rotation: "rotate-1 hover:rotate-0",
  },
  {
    id: "scms_ctf",
    title: "SCMS CTF - 3rd Place",
    desc: "Secured 3rd Place in SCMS CTF Competition in association with Hexinox, solving Web Exploitation, Cryptography, Digital Forensics, and OSINT challenges.",
    tag: "Cybersecurity",
    date: "Jan 2026",
    icon: Trophy,
    image: "/assets/achievements/scms_ctf.png",
    gradient: "linear-gradient(135deg, oklch(0.55 0.12 250), oklch(0.4 0.08 270))", // Deep Royal Indigo
    rotation: "-rotate-3 hover:rotate-0",
  },
  {
    id: "weekly_ctf",
    title: "Weekly CTF - 1st Place",
    desc: "Secured 1st Place in the semester-long Weekly Capture The Flag (CTF) challenges at Saintgits College of Engineering. 🩷",
    tag: "Cybersecurity",
    date: "2025",
    icon: ShieldCheck,
    image: "/assets/achievements/weekly_ctf.png",
    gradient: "linear-gradient(135deg, oklch(0.48 0.16 25), oklch(0.35 0.12 35))", // Charcoal Crimson
    rotation: "rotate-2 hover:rotate-0",
  },
  {
    id: "ieee_recognition",
    title: "IEEE Special Recognition",
    desc: "Special Recognition by IEEE Student Branch for project 'RakshakCV' (AI-Based Helmet Detection System), resolving edge cases like turbans, abayas, and masks.",
    tag: "Special Recognition",
    date: "2025",
    icon: Award,
    image: "/assets/achievements/rakshak_cv_award.png",
    gradient: "linear-gradient(135deg, oklch(0.65 0.22 180), oklch(0.5 0.18 200))", // Emerald/Mint Blue
    rotation: "-rotate-1 hover:rotate-0",
  },
  {
    id: "ust_sight",
    title: "UST SIGHT 2.0 Finalist",
    desc: "National Finalist in UST SIGHT 2.0. Built a hardware/software prototype addressing 'The Impact of Data Security Concerns on E-Waste Recycling'.",
    tag: "Competition",
    date: "2025",
    icon: ShieldCheck,
    image: "/assets/achievements/ust_sight.png",
    gradient: "linear-gradient(135deg, oklch(0.55 0.15 120), oklch(0.42 0.1 145))", // Emerald Green
    rotation: "rotate-3 hover:rotate-0",
  },
  {
    id: "datavis",
    title: "1st Prize Data Vis Challenge",
    desc: "Champion in the Data Visualization Challenge hosted by XIM University",
    tag: "Competition",
    date: "2025",
    icon: Trophy,
    image: "/assets/achievements/datavis.png",
    gradient: "linear-gradient(135deg, oklch(0.75 0.18 70), oklch(0.6 0.15 90))", // Golden Yellow
    rotation: "-rotate-2 hover:rotate-0",
  },
  {
    id: "deloitte",
    title: "Deloitte Data Analytics",
    desc: "Deloitte Australia Job Simulation — Data exploration & insight generation",
    tag: "Simulation",
    date: "2025",
    icon: TrendingUp,
    image: "/assets/achievements/deloitte.png",
    gradient: "linear-gradient(135deg, oklch(0.55 0.15 190), oklch(0.4 0.12 210))", // Deloitte teal/blue
    rotation: "rotate-1 hover:rotate-0",
  },
  {
    id: "nptel_dl",
    title: "NPTEL Deep Learning",
    desc: "Elite + Silver Certification in Deep Learning (Score: 81%)",
    tag: "Certification",
    date: "2025",
    icon: BrainCircuit,
    image: "/assets/achievements/nptel_dl.png",
    gradient: "linear-gradient(135deg, oklch(0.65 0.2 30), oklch(0.5 0.15 50))", // Rusty Orange
    rotation: "-rotate-3 hover:rotate-0",
  },
  {
    id: "nptel_iot",
    title: "NPTEL Intro to IoT",
    desc: "Elite + Silver Medal Certification in Introduction to Internet of Things (Score: 83%)",
    tag: "Certification",
    date: "2025",
    icon: Network,
    image: "/assets/achievements/nptel_iot.png",
    gradient: "linear-gradient(135deg, oklch(0.58 0.16 160), oklch(0.44 0.12 185))", // Turquoise
    rotation: "rotate-2 hover:rotate-0",
  },
  {
    id: "nptel_ml",
    title: "NPTEL Intro to ML",
    desc: "Elite Certification in Introduction to Machine Learning (Score: 65%)",
    tag: "Certification",
    date: "2025",
    icon: Binary,
    image: "/assets/achievements/nptel_ml.png",
    gradient: "linear-gradient(135deg, oklch(0.62 0.15 220), oklch(0.48 0.12 245))", // Steel Blue
    rotation: "-rotate-1 hover:rotate-0",
  },
  {
    id: "acm_quiz",
    title: "2nd Prize ACM Quiz",
    desc: "Second Prize in the college-level ACM Student Chapter Quiz Competition.",
    tag: "Competition",
    date: "2025",
    icon: Trophy,
    image: "/assets/achievements/acm_quiz.png",
    gradient: "linear-gradient(135deg, oklch(0.68 0.12 180), oklch(0.54 0.08 200))", // Purple
    rotation: "rotate-3 hover:rotate-0",
  },
  {
    id: "coding",
    title: "Saintgits Coding Finalist",
    desc: "Finalist in the Saintgits Coding Championship",
    tag: "Competition",
    date: "2025",
    icon: Trophy,
    image: "/assets/achievements/coding.png",
    gradient: "linear-gradient(135deg, oklch(0.62 0.23 354), oklch(0.48 0.18 5))", // Crimson
    rotation: "-rotate-2 hover:rotate-0",
  },
  {
    id: "maths",
    title: "2nd Prize Exponentia Maths",
    desc: "Runner Up in the Exponentia College Mathematics Quiz",
    tag: "Competition",
    date: "2025",
    icon: Sigma,
    image: "/assets/achievements/maths.png",
    gradient: "linear-gradient(135deg, oklch(0.58 0.12 280), oklch(0.42 0.1 300))", // Violet
    rotation: "rotate-1 hover:rotate-0",
  },
  {
    id: "nasa_spaceapps",
    title: "NASA Space Apps Solver",
    desc: "Recognized as a 'Galactic Problem Solver' at the 2024 NASA International Space Apps Challenge for efforts to address complex challenges on Earth and in space.",
    tag: "Global Hackathon",
    date: "Oct 2024",
    icon: Rocket,
    image: "/assets/achievements/nasa_spaceapps.png",
    gradient: "linear-gradient(135deg, oklch(0.3 0.08 240), oklch(0.18 0.05 260))", // Dark starry space blue/black
    rotation: "-rotate-3 hover:rotate-0",
  },
  {
    id: "nptel_sp",
    title: "NPTEL+ AI for Signal Processing",
    desc: "Successfully completed the online workshop on 'AI for Signal Processing' conducted by MathWorks Senior Developers in collaboration with NPTEL+ and IIT Madras.",
    tag: "Workshop",
    date: "July 2024",
    icon: Activity,
    image: "/assets/achievements/nptel_sp.png",
    gradient: "linear-gradient(135deg, oklch(0.6 0.15 10), oklch(0.45 0.1 30))", // Dark red MathWorks accent theme
    rotation: "rotate-2 hover:rotate-0",
  },
  {
    id: "academic_topper",
    title: "Academic Topper (Year 1)",
    desc: "First Year BTech Computer Engineering Academic Topper with an exceptional CGPA of 9.975/10 (10/10 in Sem 1, 9.95/10 in Sem 2) at Saintgits College of Engineering.",
    tag: "Academic Excellence",
    date: "May 2024",
    icon: Award,
    image: "/assets/achievements/award.jpg",
    gradient: "linear-gradient(135deg, oklch(0.82 0.18 80), oklch(0.68 0.16 95))", // Gold/Amber
    rotation: "-rotate-1 hover:rotate-0",
  },
  {
    id: "suits_hr",
    title: "1st Place SCAS HR Game",
    desc: "Won 1st place in SCAS Comprehensive HR Game ('Suits: The Third Act'), testing key MBA skills like stress interviews, management scenarios, and communications.",
    tag: "Management & Strategy",
    date: "2024",
    icon: Briefcase,
    image: "/assets/achievements/suits_hr.png",
    gradient: "linear-gradient(135deg, oklch(0.65 0.15 350), oklch(0.48 0.12 10))", // Business Rose-crimson
    rotation: "rotate-3 hover:rotate-0",
  },
  {
    id: "intellecta23",
    title: "Intellecta'23 - 1st Prize",
    desc: "Clinched 1st Prize with Team 'AA Battery' at Intellecta'23 AI & Cybersecurity Hackathon by Saintgits AI Club & CSI.",
    tag: "Hackathon",
    date: "Dec 2023",
    icon: Trophy,
    image: "/assets/achievements/intellecta.png",
    gradient: "linear-gradient(135deg, oklch(0.52 0.22 280), oklch(0.38 0.18 300))", // Royal Violet/Indigo
    rotation: "-rotate-2 hover:rotate-0",
  },
];

export function Achievements() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Check scroll position to toggle navigation arrows
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 380; // approximate width of one card + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="achievements" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-x-0 top-0 -z-10 h-full grid-bg opacity-40" />
      <div className="absolute top-1/3 -right-24 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-10 -left-24 -z-10 h-80 w-80 rounded-full bg-secondary/30 blur-3xl" />

      <div className="mx-auto max-w-6xl px-5">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <SectionLabel>Achievements</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Certifications &amp; <span className="gradient-text">Milestones</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            A visual shelf of qualifications, competitive achievements, and professional development programs from my resume.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative mt-16 group/carousel">
          {/* Navigation Arrows */}
          {showLeftArrow && (
            <button
              onClick={() => scroll("left")}
              className="absolute -left-4 top-1/2 z-20 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-card hover:bg-secondary transition-all hover:scale-105 active:scale-95"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
          )}

          {showRightArrow && (
            <button
              onClick={() => scroll("right")}
              className="absolute -right-4 top-1/2 z-20 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-card hover:bg-secondary transition-all hover:scale-105 active:scale-95"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          )}

          {/* Polaroid Scrollable Row */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-8 overflow-x-auto pb-12 pt-4 px-4 scrollbar-none snap-x snap-mandatory"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {achievementsData.map((item) => (
              <div
                key={item.id}
                className={`snap-center shrink-0 w-[300px] sm:w-[320px] transition-all duration-500 ease-out origin-center ${item.rotation} hover:scale-[1.04] hover:-translate-y-3 hover:z-10`}
              >
                {/* Polaroid Frame */}
                <div className="rounded-xl border border-border/40 bg-white p-4 pb-7 shadow-card hover:shadow-glow transition-all duration-300">
                  {/* Polaroid Photo area */}
                  <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg bg-slate-900 border border-slate-100 flex items-center justify-center">
                    <FallbackCard item={item} />
                  </div>

                  {/* Polaroid Caption Area */}
                  <div className="mt-5 text-center px-1">
                    <span className="inline-block rounded-full bg-[#f4f4f5] px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase text-slate-500">
                      {item.tag}
                    </span>
                    <h3 className="mt-3 font-handwritten text-xl font-bold leading-tight text-slate-800 tracking-wide">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-center text-[11px] leading-relaxed text-slate-500/90 font-medium px-2">
                      {item.desc}
                    </p>
                    <div className="mt-4 flex items-center justify-center gap-1.5 text-[9px] font-semibold tracking-wider uppercase text-slate-400">
                      <Sparkles size={8} className="text-amber-400" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// Fallback graphic component when actual image is missing
function FallbackCard({ item }: { item: Achievement }) {
  const [imgError, setImgError] = useState(false);

  const fallbackBackground = {
    background: item.gradient,
  };

  if (item.image && !imgError) {
    return (
      <img
        src={item.image}
        alt={item.title}
        onError={() => setImgError(true)}
        className="h-full w-full object-cover transition-transform duration-500 group-hover/carousel:scale-105"
      />
    );
  }

  const Icon = item.icon;

  return (
    <div
      style={fallbackBackground}
      className="relative flex h-full w-full flex-col items-center justify-center p-6 text-white text-center select-none overflow-hidden"
    >
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:14px_24px] opacity-30" />
      <div className="absolute -right-6 -bottom-6 opacity-10">
        <Icon size={120} />
      </div>

      <div className="z-10 rounded-2xl bg-white/10 p-4 backdrop-blur-md border border-white/15 shadow-soft">
        <Icon className="text-white drop-shadow-md animate-pulse" size={32} />
      </div>
      <p className="z-10 mt-3 font-display text-sm font-bold tracking-wide uppercase drop-shadow-sm px-2">
        {item.title}
      </p>
    </div>
  );
}
