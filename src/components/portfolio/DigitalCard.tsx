import { useState, useEffect } from "react";
import { QrCode, FileText } from "lucide-react";
import { SectionLabel } from "./About";

export function DigitalCard() {
  const [resumeUrl, setResumeUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setResumeUrl(window.location.origin + "/Amrutha_Ajish_Achuthan_Resume.pdf");
    }
  }, []);

  const qrCodeApiUrl = resumeUrl
    ? `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(resumeUrl)}`
    : "";

  return (
    <section id="digital-card" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center mb-12">
          <SectionLabel>Digital ID</SectionLabel>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Developer Quick-Card</h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
            A scannable, high-level summary card of my academic qualifications and project metrics.
          </p>
        </div>

        {/* Outer container for centering & hover effect */}
        <div className="flex justify-center">
          {/* Card container matching the user design */}
          <div className="relative w-full max-w-4xl overflow-hidden rounded-[2.5rem] bg-[#2ca5ff] p-8 md:p-12 text-white shadow-card transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_50px_rgba(44,165,255,0.45)] select-none">
            {/* White rounded corner accent decorations */}
            <div className="absolute top-0 right-0 h-12 w-12 rounded-bl-3xl bg-background pointer-events-none hidden md:block" />
            <div className="absolute bottom-0 right-0 h-12 w-12 rounded-tl-3xl bg-background pointer-events-none hidden md:block" />
            
            <div className="grid gap-8 md:grid-cols-5 items-center">
              {/* Left Column (Span 3 on Desktop) */}
              <div className="md:col-span-3 flex flex-col justify-between h-full space-y-8 md:space-y-12">
                {/* Header Row */}
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Open to opportunities
                  </div>
                  <div className="rounded-full border border-white/40 bg-transparent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                    AI/ML Engineer
                  </div>
                </div>

                {/* Name */}
                <div className="space-y-1">
                  <h3 className="font-display text-5xl font-black tracking-tight leading-none uppercase md:text-6xl lg:text-7xl">
                    Amrutha
                  </h3>
                  <h3 className="font-display text-5xl font-black tracking-tight leading-none uppercase md:text-6xl lg:text-7xl text-[#8b0053]">
                    Achuthan
                  </h3>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/20">
                  <div>
                    <p className="font-display text-3xl md:text-4xl font-extrabold tracking-tight leading-none">3+</p>
                    <p className="mt-1.5 text-[10px] sm:text-xs text-white/95 font-medium leading-tight">yrs in Computer Science</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl md:text-4xl font-extrabold tracking-tight leading-none">8+</p>
                    <p className="mt-1.5 text-[10px] sm:text-xs text-white/95 font-medium leading-tight">Projects Completed</p>
                  </div>
                  <div>
                    <p className="font-display text-3xl md:text-4xl font-extrabold tracking-tight leading-none">3+</p>
                    <p className="mt-1.5 text-[10px] sm:text-xs text-white/95 font-medium leading-tight">Leadership Roles</p>
                  </div>
                </div>
              </div>

              {/* Right Column (Span 2 on Desktop) */}
              <div className="md:col-span-2 flex flex-col items-center md:items-end justify-between h-full space-y-6 md:space-y-8">
                {/* Pills list */}
                <div className="flex flex-col gap-2 w-full items-center md:items-end">
                  {[
                    "B.Tech Computer Science and Engineering",
                    "Minor in Computational Mathematics",
                    "Honors in Machine Learning",
                    "GATE 2026 Qualified"
                  ].map((text) => (
                    <span
                      key={text}
                      className="inline-block rounded-full border border-white/60 bg-white/5 px-4.5 py-1.5 text-xs font-semibold text-right leading-tight tracking-wide backdrop-blur-sm"
                    >
                      {text}
                    </span>
                  ))}
                </div>

                {/* QR Code section */}
                <div className="flex flex-col items-center">
                  <div className="relative p-2.5 bg-white rounded-2xl shadow-card overflow-hidden w-36 h-36 flex items-center justify-center">
                    {qrCodeApiUrl ? (
                      <img
                        src={qrCodeApiUrl}
                        alt="QR Code pointing to Amrutha's Resume"
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <QrCode size={48} className="text-slate-400" />
                    )}
                  </div>
                  <div className="mt-3.5 rounded bg-[#8b0053] px-5 py-1 text-[10px] font-bold uppercase tracking-widest text-white/95 shadow-soft">
                    scan for resume
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
