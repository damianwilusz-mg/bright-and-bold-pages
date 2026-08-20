import { Moon, Sun } from "lucide-react";
import { usePrefs } from "@/lib/prefs";

export function LangSwitch() {
  const { lang, setLang } = usePrefs();
  return (
    <div className="flex items-center rounded-full border border-border bg-surface p-0.5 font-mono text-[0.7rem] uppercase tracking-widest">
      {(["en", "pl"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            lang === l
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

export function ThemeSwitch() {
  const { theme, setTheme } = usePrefs();
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface text-muted-foreground transition-colors hover:text-foreground"
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
