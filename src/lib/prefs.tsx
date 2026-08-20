import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Lang } from "./content";

export type ThemeMode = "system" | "light" | "dark";
type Theme = "light" | "dark";

type Prefs = {
  lang: Lang;
  setLang: (l: Lang) => void;
  themeMode: ThemeMode;
  setThemeMode: (t: ThemeMode) => void;
  theme: Theme;
  hydrated: boolean;
};

const PrefsContext = createContext<Prefs | null>(null);

const QUERY = "(prefers-color-scheme: dark)";

export function PrefsProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [themeMode, setThemeModeState] = useState<ThemeMode>("system");
  const [systemTheme, setSystemTheme] = useState<Theme>("light");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const storedLang = localStorage.getItem("lang") as Lang | null;
    const storedMode = localStorage.getItem("theme-mode") as ThemeMode | null;
    const browserPl = navigator.language?.toLowerCase().startsWith("pl");
    setLangState(storedLang ?? (browserPl ? "pl" : "en"));
    setThemeModeState(
      storedMode === "light" || storedMode === "dark" || storedMode === "system"
        ? storedMode
        : "system",
    );

    const mql = window.matchMedia(QUERY);
    const sync = () => setSystemTheme(mql.matches ? "dark" : "light");
    sync();
    mql.addEventListener("change", sync);
    setHydrated(true);
    return () => mql.removeEventListener("change", sync);
  }, []);

  const theme: Theme = themeMode === "system" ? systemTheme : themeMode;

  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.lang = lang;
    localStorage.setItem("theme-mode", themeMode);
    localStorage.setItem("lang", lang);
  }, [theme, themeMode, lang, hydrated]);

  return (
    <PrefsContext.Provider
      value={{
        lang,
        theme,
        themeMode,
        hydrated,
        setLang: setLangState,
        setThemeMode: setThemeModeState,
      }}
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
