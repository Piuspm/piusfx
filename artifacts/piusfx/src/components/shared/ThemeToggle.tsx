import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const stored = localStorage.getItem("piusfx-theme") as Theme | null;
  if (stored === "light" || stored === "dark") return stored;
  return "dark";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("piusfx-theme", theme);
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-border bg-card text-foreground shadow-sm hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-colors"
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}
