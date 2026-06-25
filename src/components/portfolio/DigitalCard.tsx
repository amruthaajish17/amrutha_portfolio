import { useState, useEffect } from "react";
import { QrCode, Sparkles, GraduationCap, Award, BrainCircuit, Target, CheckCircle2 } from "lucide-react";
import { SectionLabel } from "./About";

export function DigitalCard() {
  const [resumeUrl, setResumeUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setResumeUrl(window.location.origin + "/Amrutha_Ajish_Achuthan_Resume.pdf");
    }
  }, []);

  const qrCodeApiUrl = resumeUrl
    ? `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(resumeUrl)}`
    : "";

  return (
    <section id="digital-card" className="relative py-20 md:py-28 overflow-hidden">
      {/* Dynamic Background Blurs */}
      <div className="absolute top-1/4 left-1/3 -z-10 h-96 w-96 rounded-full bg-pink-500/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-[450px] w-[450px] rounded-full bg-purple-500/10 blur-3xl" />

      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center mb-16">
          <SectionLabel>Digital ID</SectionLabel>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            My <span className="gradient-text">Interactive Quick-Card</span>
          </h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
            A creative, pocket-sized snapshot of my key statistics and credentials.
          </p>
        </div>

        {/* Custom Laser Scan Animation Injector */}
        <style>{`
          @keyframes laserScan {
            0% { top: 0%; opacity: 0.2; }
            50% { top: 100%; opacity: 1; }
            100% { top: 0%; opacity: 0.2; }
          }
          .laser-scanner-line {
            position: absolute;
            left: 0;
            right: 0;
            height: 2px;
            background-color: #ff2a85;
            box-shadow: 0 0 8px #ff2a85, 0 0 15px #ff2a85;
            animation: laserScan 4s infinite linear;
            pointer-events: none;
            z-index: 10;
          }
        `}</style>

        {/* Outer Container */}
        <div className="flex justify-center">
          {/* Creative Pink Card */}
          <div className="relative w-full max-w-4xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#ff1b76] via-[#cf007d] to-[#60005a] p-8 md:p-12 text-white shadow-[0_20px_50px_rgba(207,0,125,0.25)] transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_20px_60px_rgba(207,0,125,0.45)] select-none border border-white/10">
            
            {/* Tech grid overlays inside the card */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-40" />
            <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-white/5 blur-2xl pointer-events-none" />
            
            {/* Asymmetric layout */}
            <div className="relative z-10 grid gap-10 md:grid-cols-12 items-stretch">
              
              {/* Left Column (Span 7) */}
              <div className="md:col-span-7 flex flex-col justify-between space-y-10">
                {/* Upper row: Badges */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold backdrop-blur-md border border-white/20">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-300"></span>
                    </span>
                    Open to opportunities
                  </span>
                  <span className="rounded-full bg-white/20 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest border border-white/10">
                    AI/ML &amp; Decision Science
                  </span>
                </div>

                {/* Typography: Styled Name */}
                <div>
                  <span className="text-xs uppercase font-extrabold tracking-widest text-pink-200/80 flex items-center gap-1.5 mb-1">
                    <Sparkles size={12} className="text-pink-300" /> Personal Identity
                  </span>
                  <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-none">
                    Amrutha Ajish
                  </h3>
                  <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-none text-pink-200 mt-1">
                    Achuthan
                  </h3>
                </div>

                {/* Custom stats grid with glassmorphic cards */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { val: "3+", desc: "Yrs CompSci" },
                    { val: "8+", desc: "Projects" },
                    { val: "3+", desc: "Leadership" }
                  ].map((stat, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-white/15 bg-white/10 p-3.5 text-center backdrop-blur-md transition-all duration-300 hover:bg-white/15 hover:border-white/35"
                    >
                      <p className="font-display text-2xl md:text-3xl font-black tracking-tight">{stat.val}</p>
                      <p className="mt-1 text-[9px] uppercase font-bold tracking-wider text-pink-100/90 leading-tight">
                        {stat.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column (Span 5) */}
              <div className="md:col-span-5 flex flex-col justify-between items-center md:items-end space-y-8">
                {/* Academic Pills List */}
                <div className="flex flex-col gap-2.5 w-full items-center md:items-end">
                  {[
                    { icon: GraduationCap, text: "B.Tech Computer Science" },
                    { icon: BrainCircuit, text: "Honors in Machine Learning" },
                    { icon: Award, text: "Minor in Computational Math" },
                    { icon: Target, text: "GATE 2026 Qualified" }
                  ].map((pill, idx) => {
                    const Icon = pill.icon;
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-semibold tracking-wide backdrop-blur-md w-full md:w-auto shadow-sm"
                      >
                        <Icon size={14} className="text-pink-300 shrink-0" />
                        <span>{pill.text}</span>
                      </div>
                    );
                  })}
                </div>

                {/* HUD Scanner QR Code Container */}
                <div className="relative group/qr flex flex-col items-center">
                  <div className="relative p-3 bg-white rounded-3xl shadow-card overflow-hidden w-36 h-36 flex items-center justify-center border-2 border-white/20">
                    
                    {/* Viewfinder brackets */}
                    <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#ff1b76]" />
                    <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#ff1b76]" />
                    <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#ff1b76]" />
                    <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#ff1b76]" />

                    {/* Scanning Laser Line */}
                    <div className="laser-scanner-line" />

                    {qrCodeApiUrl ? (
                      <img
                        src={qrCodeApiUrl}
                        alt="Scannable QR Code target"
                        className="w-[110px] h-[110px] object-contain relative z-0 transition-transform duration-300 group-hover/qr:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <QrCode size={40} className="text-slate-300 relative z-0" />
                    )}
                  </div>
                  
                  {/* Scan target label */}
                  <div className="mt-3.5 flex items-center gap-1.5 rounded-full bg-white/25 px-4.5 py-1 text-[9px] font-bold uppercase tracking-widest text-white/95 border border-white/10 backdrop-blur-md shadow-soft hover:bg-white/35 transition-colors">
                    <CheckCircle2 size={10} className="text-pink-200" />
                    <span>scan for resume</span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

