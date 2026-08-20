import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Lang } from "./content";

type Theme = "light" | "dark";

type Prefs = {
  lang: Lang;
  setLang: (l: Lang) => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
  hydrated: boolean;
};

const PrefsContext = createContext<Prefs | null>(null);

export function PrefsProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [theme, setThemeState] = useState<Theme>("light");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const storedLang = localStorage.getItem("lang") as Lang | null;
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    const prefersDark =
      typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const browserPl = navigator.language?.toLowerCase().startsWith("pl");
    setLangState(storedLang ?? (browserPl ? "pl" : "en"));
    setThemeState(storedTheme ?? (prefersDark ? "dark" : "light"));
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.lang = lang;
    localStorage.setItem("theme", theme);
    localStorage.setItem("lang", lang);
  }, [theme, lang, hydrated]);

  return (
    <PrefsContext.Provider
      value={{ lang, theme, hydrated, setLang: setLangState, setTheme: setThemeState }}
    >
      {children}
    </PrefsContext.Provider>
  );
}

export function usePrefs() {
  const ctx = useContext(PrefsContext);
  if (!ctx) throw new Error("usePrefs must be used inside PrefsProvider");
  return ctx;
}
