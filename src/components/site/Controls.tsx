import { Monitor, Moon, Sun } from "lucide-react";
import { usePrefs, type ThemeMode } from "@/lib/prefs";
import { content } from "@/lib/content";

export function LangSwitch() {
  const { lang, setLang } = usePrefs();
  return (
    <div className="flex items-center rounded-full border border-border bg-surface p-0.5 font-mono text-[0.7rem] uppercase tracking-widest">
      {(["en", "pl"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-2.5 py-1 transition-all duration-300 ${
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

const MODES: { key: ThemeMode; Icon: typeof Sun }[] = [
  { key: "system", Icon: Monitor },
  { key: "light", Icon: Sun },
  { key: "dark", Icon: Moon },
];

export function ThemeSwitch() {
  const { themeMode, setThemeMode, lang } = usePrefs();
  const labels = content[lang].theme;
  return (
    <div className="flex items-center rounded-full border border-border bg-surface p-0.5">
      {MODES.map(({ key, Icon }) => (
        <button
          key={key}
          onClick={() => setThemeMode(key)}
          aria-pressed={themeMode === key}
          aria-label={labels[key]}
          title={labels[key]}
          className={`flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 ${
            themeMode === key
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Icon className="h-3.5 w-3.5" />
        </button>
      ))}
    </div>
  );
}
