import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row">
        <a href="#home" className="flex items-center gap-2 font-display font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
            A
          </span>
          Amrutha Ajish Achuthan
        </a>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} · Built with data &amp; intent.
        </p>
        <div className="flex gap-2">
          <a
            href="https://www.linkedin.com/in/amrutha-ajish-achuthan"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-lg border border-border transition-colors hover:bg-secondary hover:text-primary"
          >
            <Linkedin size={17} />
          </a>
          <a
            href="https://github.com/amruthaajish17"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-lg border border-border transition-colors hover:bg-secondary hover:text-primary"
          >
            <Github size={17} />
          </a>
          <a
            href="mailto:amruthaajishachuthan@gmail.com"
            aria-label="Email"
            className="grid h-9 w-9 place-items-center rounded-lg border border-border transition-colors hover:bg-secondary hover:text-primary"
          >
            <Mail size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
