import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../lib/useTheme.js";

export default function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] px-3 py-2 text-sm hover:translate-y-[-1px] transition"
      aria-label="Toggle theme"
      type="button"
    >
      <Sun className="h-4 w-4 dark:hidden" />
      <Moon className="hidden h-4 w-4 dark:block" />
      <span className="hidden sm:inline">Theme</span>
    </button>
  );
}
