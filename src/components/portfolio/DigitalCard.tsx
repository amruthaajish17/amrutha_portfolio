import { useState, useEffect } from "react";
import { QrCode, Sparkles, GraduationCap, Award, BrainCircuit, Target, ShieldAlert, Fingerprint } from "lucide-react";
import { SectionLabel } from "./About";

export function DigitalCard() {
  const [resumeUrl, setResumeUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setResumeUrl(window.location.origin + "/Amrutha_Ajish_Achuthan_Resume.pdf");
    }
  }, []);

  const qrCodeApiUrl = resumeUrl
    ? `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(resumeUrl)}`
    : "";

  return (
    <section id="digital-card" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Neon Blurs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-pink-500/10 blur-[100px]" />
      <div className="absolute bottom-10 left-1/4 -z-10 h-72 w-72 rounded-full bg-purple-500/5 blur-3xl" />

      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center mb-16">
          <SectionLabel>Admission Pass</SectionLabel>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            My <span className="gradient-text">Developer VIP Ticket</span>
          </h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
            A futuristic, vertical pass representing my skills, stats, and scannable credentials.
          </p>
        </div>

        {/* Custom keyframe styles for ticket scan line and barcode */}
        <style>{`
          @keyframes laserVertical {
            0%, 100% { top: 6%; opacity: 0.3; }
            50% { top: 94%; opacity: 1; }
          }
          .ticket-laser {
            position: absolute;
            left: 6%;
            right: 6%;
            height: 2px;
            background-color: #ff007f;
            box-shadow: 0 0 10px #ff007f, 0 0 20px #ff007f;
            animation: laserVertical 3s infinite linear;
            pointer-events: none;
            z-index: 10;
          }
          .barcode-line {
            display: inline-block;
            height: 28px;
            background-color: #ff007f;
            opacity: 0.85;
          }
        `}</style>

        {/* Center alignment wrapper */}
        <div className="flex justify-center">
          {/* Vertical Event Pass Container */}
          <div className="relative w-full max-w-[400px] overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#1c0217] via-[#2f0028] to-[#0e0013] text-white shadow-[0_0_60px_rgba(255,0,127,0.18)] border border-pink-500/20 select-none transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_80px_rgba(255,0,127,0.35)]">
            
            {/* HUD/Perimeter grid styling */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,0,127,0.15),transparent_60%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,0,127,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,0,127,0.03)_1px,transparent_1px)] bg-[size:14px_14px] opacity-60 pointer-events-none" />

            {/* --- UPPER TICKET MAIN BODY --- */}
            <div className="p-7 space-y-7">
              {/* Barcode & Pass Serial */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-end gap-[2px]">
                  <span className="barcode-line w-[4px]" />
                  <span className="barcode-line w-[1px]" />
                  <span className="barcode-line w-[6px]" />
                  <span className="barcode-line w-[2px]" />
                  <span className="barcode-line w-[3px]" />
                  <span className="barcode-line w-[1px]" />
                  <span className="barcode-line w-[5px]" />
                  <span className="barcode-line w-[2px]" />
                  <span className="barcode-line w-[7px]" />
                  <span className="barcode-line w-[1px]" />
                  <span className="barcode-line w-[3px]" />
                </div>
                <div className="text-right">
                  <p className="text-[9px] uppercase font-bold tracking-widest text-pink-400">BOARDING PASS</p>
                  <p className="font-mono text-[10px] text-white/60">NO. AAA-2026-GATE</p>
                </div>
              </div>

              {/* Status Header */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-[#ff007f]/10 border border-[#ff007f]/30 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-pink-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-pink-500 animate-pulse" />
                  ACCESS GRANTED
                </span>
                <span className="text-[9px] font-bold tracking-widest text-white/50 flex items-center gap-1">
                  <Fingerprint size={12} className="text-pink-400" /> SECURE PROFILE
                </span>
              </div>

              {/* Name Display */}
              <div className="space-y-1 py-2">
                <p className="text-[10px] font-bold uppercase tracking-widest text-pink-400">CANDIDATE</p>
                <h3 className="font-display text-3xl font-black tracking-tight leading-none uppercase text-white drop-shadow-[0_2px_8px_rgba(255,0,127,0.35)]">
                  Amrutha
                </h3>
                <h3 className="font-display text-3xl font-black tracking-tight leading-none uppercase bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Achuthan
                </h3>
                <p className="text-xs font-semibold text-white/80 mt-1">AI/ML &amp; Decision Science Engineer</p>
              </div>

              {/* Academic Highlights Checklist */}
              <div className="rounded-2xl border border-white/5 bg-white/5 p-4.5 space-y-2.5 backdrop-blur-md">
                {[
                  { icon: GraduationCap, text: "B.Tech Computer Science" },
                  { icon: BrainCircuit, text: "Honors in Machine Learning" },
                  { icon: Award, text: "Minor in Computational Math" },
                  { icon: Target, text: "GATE 2026 Qualified" }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-white/90 font-medium">
                      <span className="grid h-5 w-5 place-items-center rounded bg-pink-500/20 text-pink-400">
                        <Icon size={12} />
                      </span>
                      <span>{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* --- PERFORATED TEAR DIVIDER --- */}
            <div className="relative h-6 flex items-center justify-between">
              {/* Ticket Notches */}
              <div className="absolute -left-3.5 h-7 w-7 rounded-full bg-background border border-pink-500/20" />
              <div className="absolute -right-3.5 h-7 w-7 rounded-full bg-background border border-pink-500/20" />
              
              {/* Dashed line */}
              <div className="w-full border-t border-dashed border-pink-500/30 px-6" />
            </div>

            {/* --- LOWER TICKET STUB (QR CODE) --- */}
            <div className="p-7 pt-4 space-y-6 flex flex-col items-center">
              
              {/* Stats Panel */}
              <div className="grid grid-cols-3 gap-2 w-full text-center divide-x divide-white/10 bg-white/5 rounded-xl border border-white/5 py-3">
                <div>
                  <p className="font-display text-xl font-black text-pink-400 leading-none">3+</p>
                  <p className="mt-1 text-[8px] uppercase font-bold tracking-wider text-white/60">Yrs CS</p>
                </div>
                <div>
                  <p className="font-display text-xl font-black text-pink-400 leading-none">8+</p>
                  <p className="mt-1 text-[8px] uppercase font-bold tracking-wider text-white/60">Projects</p>
                </div>
                <div>
                  <p className="font-display text-xl font-black text-pink-400 leading-none">3+</p>
                  <p className="mt-1 text-[8px] uppercase font-bold tracking-wider text-white/60">Leads</p>
                </div>
              </div>

              {/* QR scanner block */}
              <div className="relative flex flex-col items-center">
                <div className="relative p-3 bg-white rounded-2xl overflow-hidden w-36 h-36 border border-pink-500/30 flex items-center justify-center">
                  
                  {/* Laser scan line overlay */}
                  <div className="ticket-laser" />

                  {/* Corner bracket sights */}
                  <div className="absolute top-2.5 left-2.5 w-2 h-2 border-t-2 border-l-2 border-[#ff007f]" />
                  <div className="absolute top-2.5 right-2.5 w-2 h-2 border-t-2 border-r-2 border-[#ff007f]" />
                  <div className="absolute bottom-2.5 left-2.5 w-2 h-2 border-b-2 border-l-2 border-[#ff007f]" />
                  <div className="absolute bottom-2.5 right-2.5 w-2 h-2 border-b-2 border-r-2 border-[#ff007f]" />

                  {qrCodeApiUrl ? (
                    <img
                      src={qrCodeApiUrl}
                      alt="Pass validation code"
                      className="w-[110px] h-[110px] object-contain relative z-0"
                      loading="lazy"
                    />
                  ) : (
                    <QrCode size={36} className="text-slate-300" />
                  )}
                </div>
                
                <span className="mt-3.5 inline-flex items-center gap-1 rounded bg-[#ff007f] px-3.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white shadow-soft">
                  scan for resume
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}


