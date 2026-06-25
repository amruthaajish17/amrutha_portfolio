import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Portfolio } from "@/components/portfolio/Portfolio";
import { Experience } from "@/components/portfolio/Experience";
import { Achievements } from "@/components/portfolio/Achievements";
import { Services } from "@/components/portfolio/Services";
import { Resume } from "@/components/portfolio/Resume";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Amrutha Ajish Achuthan | Data Science & Business Strategy" },
      {
        name: "description",
        content:
          "Computer Science Engineer specializing in Machine Learning, Decision Science, and AI-driven problem-solving. Portfolio, projects, and contact.",
      },
      {
        property: "og:title",
        content: "Amrutha Ajish Achuthan | Data Science & Business Strategy",
      },
      {
        property: "og:description",
        content:
          "Bridging Data Science & Business Strategy — ML, Decision Science, and AI-driven problem-solving.",
      },
    ],
  }),
  component: Index,
});

const backgroundSymbols = [
  // Near Hero / About boundary
  { symbol: "01010011", top: "12%", left: "5%", delay: "0s", size: "text-xl", anim: "float-gentle-animation" },
  { symbol: "f(x) = σ", top: "18%", right: "5%", delay: "2s", size: "text-lg", anim: "float-reverse-animation" },
  
  // Near About / Portfolio boundary
  { symbol: "{ code }", top: "32%", left: "4%", delay: "1s", size: "text-base", anim: "float-reverse-animation" },
  { symbol: "</>", top: "38%", right: "5%", delay: "3s", size: "text-xl", anim: "float-gentle-animation" },
  
  // Near Portfolio / Experience boundary
  { symbol: "λ", top: "48%", left: "5%", delay: "2s", size: "text-2xl", anim: "float-gentle-animation" },
  { symbol: "dy/dx", top: "54%", right: "4%", delay: "0s", size: "text-base", anim: "float-reverse-animation" },
  
  // Near Experience / Services boundary
  { symbol: "∑ xi", top: "66%", left: "4%", delay: "3s", size: "text-xl", anim: "float-reverse-animation" },
  { symbol: "∫ f(x)dx", top: "72%", right: "5%", delay: "1s", size: "text-lg", anim: "float-gentle-animation" },
  
  // Near Services / Contact boundary
  { symbol: "1+1=10", top: "82%", left: "5%", delay: "0s", size: "text-base", anim: "float-gentle-animation" },
  { symbol: "π ≃ 3.14", top: "88%", right: "4%", delay: "2s", size: "text-lg", anim: "float-reverse-animation" },
];

function SectionDivider({ symbol }: { symbol: string }) {
  return (
    <div className="relative flex items-center justify-center py-6 select-none opacity-20 max-w-6xl mx-auto px-5">
      <div className="w-full border-t border-border/30" />
      <span className="absolute px-4 bg-background font-mono text-[10px] tracking-widest text-primary/70 font-semibold uppercase">
        {symbol}
      </span>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <style>{`
        @keyframes floatGentle {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-24px) rotate(6deg);
          }
        }
        @keyframes floatReverse {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(24px) rotate(-6deg);
          }
        }
        .float-gentle-animation {
          animation: floatGentle 14s ease-in-out infinite;
        }
        .float-reverse-animation {
          animation: floatReverse 16s ease-in-out infinite;
        }
      `}</style>
      
      {/* Background Floating Elements */}
      <div className="hidden md:block pointer-events-none select-none absolute inset-y-0 inset-x-0 overflow-hidden z-0">
        {backgroundSymbols.map((item, idx) => (
          <div
            key={idx}
            className={`absolute font-mono opacity-15 text-primary/60 font-bold ${item.size} ${item.anim}`}
            style={{
              top: item.top,
              ...(item.left ? { left: item.left } : {}),
              ...(item.right ? { right: item.right } : {}),
              animationDelay: item.delay,
            }}
          >
            {item.symbol}
          </div>
        ))}
      </div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <SectionDivider symbol="< hello world />" />
        <About />
        <SectionDivider symbol="[ 01100101 ]" />
        <Portfolio />
        <SectionDivider symbol="f(x) = y" />
        <Experience />
        <SectionDivider symbol="[ milestones ]" />
        <Achievements />
        <SectionDivider symbol="∑(xi - x̄)²" />
        <Services />
        <SectionDivider symbol="[ curriculum vitae ]" />
        <Resume />
        <SectionDivider symbol="1 + 1 = 10" />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}
