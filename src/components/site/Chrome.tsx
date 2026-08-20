import { Coffee } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { content } from "@/lib/content";
import { usePrefs } from "@/lib/prefs";
import { LangSwitch, ThemeSwitch } from "@/components/site/Controls";

const NAV = ["about", "experience", "projects", "stack", "blog", "contact"] as const;

export function SiteHeader({ variant = "home" }: { variant?: "home" | "page" }) {
  const { lang } = usePrefs();
  const t = content[lang];

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-3">
        <Link to="/" hash="top" className="font-mono text-sm font-medium">
          dw<span className="text-primary">.</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
          {NAV.map((k) =>
            k === "blog" ? (
              <Link
                key={k}
                to="/blog"
                className="link-underline transition-colors hover:text-foreground"
              >
                {t.nav[k]}
              </Link>
            ) : variant === "home" ? (
              <a
                key={k}
                href={`#${k}`}
                className="link-underline transition-colors hover:text-foreground"
              >
                {t.nav[k]}
              </a>
            ) : (
              <Link
                key={k}
                to="/"
                hash={k}
                className="link-underline transition-colors hover:text-foreground"
              >
                {t.nav[k]}
              </Link>
            ),
          )}
        </nav>
        <div className="flex items-center gap-2">
          <LangSwitch />
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const { lang } = usePrefs();
  const t = content[lang];
  return (
    <footer className="flex flex-wrap items-center justify-between gap-2 border-t border-border py-8 font-mono text-xs text-muted-foreground">
      <span>© {new Date().getFullYear()} Damian Wilusz</span>
      <span className="inline-flex items-center gap-1.5">
        {t.footer.built}
        <Coffee className="h-3.5 w-3.5 text-primary" aria-label="coffee" />
        {t.footer.place}
      </span>
    </footer>
  );
}
