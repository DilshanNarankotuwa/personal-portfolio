import { useEffect, useState } from "react";

const KEY = "dilshan_theme";

export function useTheme() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(KEY);
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;

    const shouldDark = saved ? saved === "dark" : !!prefersDark;
    document.documentElement.classList.toggle("dark", shouldDark);
    setReady(true);
  }, []);

  const setTheme = (mode) => {
    document.documentElement.classList.toggle("dark", mode === "dark");
    localStorage.setItem(KEY, mode);
  };

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "light" : "dark");
  };

  return { ready, setTheme, toggleTheme };
}
