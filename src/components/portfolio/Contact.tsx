import { useState } from "react";
import { Mail, Github, Linkedin, Send, MapPin } from "lucide-react";
import { toast } from "sonner";
import { SectionLabel } from "./About";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:amruthaajishachuthan@gmail.com?subject=${subject}&body=${body}`;
    toast.success("Opening your email client…");
  };

  const inputClass =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-card">
          <div className="grid lg:grid-cols-2">
            <div
              className="relative p-8 text-primary-foreground sm:p-10"
              style={{ background: "var(--gradient-primary)" }}
            >
              <div className="absolute inset-0 grid-bg opacity-20" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest">
                  Contact
                </span>
                <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
                  Let&apos;s build something.
                </h2>
                <p className="mt-3 max-w-sm text-sm opacity-90">
                  Open to collaborations, internships, and conversations on data, ML, and strategy.
                </p>

                <div className="mt-8 space-y-3">
                  <a
                    href="mailto:amruthaajishachuthan@gmail.com"
                    className="flex items-center gap-3 rounded-xl bg-white/12 px-4 py-3 text-sm font-medium backdrop-blur transition-colors hover:bg-white/20"
                  >
                    <Mail size={18} /> amruthaajishachuthan@gmail.com
                  </a>
                  <div className="flex items-center gap-3 rounded-xl bg-white/12 px-4 py-3 text-sm font-medium backdrop-blur">
                    <MapPin size={18} /> Kerala, India
                  </div>
                </div>

                <div className="mt-8 flex gap-3">
                  <a
                    href="mailto:amruthaajishachuthan@gmail.com"
                    aria-label="Email"
                    className="grid h-11 w-11 place-items-center rounded-xl bg-white/15 backdrop-blur transition-transform hover:scale-110"
                  >
                    <Mail size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/amrutha-ajish-achuthan"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="grid h-11 w-11 place-items-center rounded-xl bg-white/15 backdrop-blur transition-transform hover:scale-110"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://github.com/amruthaajish17"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="grid h-11 w-11 place-items-center rounded-xl bg-white/15 backdrop-blur transition-transform hover:scale-110"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 p-8 sm:p-10">
              <div className="flex justify-start">
                <SectionLabel>Send a message</SectionLabel>
              </div>
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  className={inputClass}
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className={inputClass}
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className={`${inputClass} resize-none`}
                  placeholder="How can I help?"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
