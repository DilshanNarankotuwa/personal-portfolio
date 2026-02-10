import React from "react";
import ThemeToggle from "./ThemeToggle.jsx";
import { site } from "../data/siteData.js";

const items = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgb(var(--border))] bg-[rgb(var(--bg))]/70 backdrop-blur">
      <div className="container-pad flex h-16 items-center justify-between">
        <a href="#top" className="group flex items-center gap-2">
          <div className="h-9 w-9 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] grid place-items-center shadow-sm">
            <img src="/dilshan.jpeg" alt="site.name" className="h-9 w-9 rounded-full" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold">{site.name}</div>
            <div className="text-xs text-[rgb(var(--muted))]">{site.role}</div>
          </div>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {items.map((it) => (
            <a
              key={it.href}
              href={it.href}
              className="rounded-2xl px-3 py-2 text-sm text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))] hover:bg-[rgb(var(--card))] transition"
            >
              {it.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            className="hidden sm:inline-flex rounded-2xl px-3 py-2 text-sm border border-[rgb(var(--border))] bg-[rgb(var(--card))] hover:translate-y-[-1px] transition"
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
