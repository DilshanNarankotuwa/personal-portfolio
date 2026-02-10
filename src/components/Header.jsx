import React from "react";
import ThemeToggle from "./ThemeToggle.jsx";
import { site } from "../data/siteData.js";
import { motion } from "framer-motion";


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
        

        <nav className="hidden items-center gap-2 md:flex">
          {items.map((it) => (
            <motion.a
              key={it.href}
              href={it.href}
              className="relative px-3 py-2 text-base text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))]"
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              {it.label}

              <motion.span
                variants={{
                  rest: { width: 0, opacity: 0 },
                  hover: { width: 24, opacity: 1 },
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute left-1/2 bottom-1 h-[2px]
                          -translate-x-1/2 rounded-full
                          bg-[rgb(var(--brand))]"
              />
            </motion.a>


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
