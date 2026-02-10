import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { site } from "../data/siteData.js";

function useSystemLines() {
  return useMemo(() => {
    const now = new Date();
    const stamp = now.toLocaleString();

    return [
      { k: "SYSTEM", v: "ONLINE" },
      { k: "IDENTITY", v: site.name },
      { k: "ROLE", v: site.role },
      { k: "LOCATION", v: site.location },
      { k: "TIMESTAMP", v: stamp },
      { k: "MODE", v: "BUILDING REAL SYSTEMS" },
    ];
  }, []);
}

export default function Hero() {
  const lines = useSystemLines();

  return (
    <section id="top" className="container-pad pt-14 sm:pt-20 pb-10">
      <div className="grid items-start gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--card))] px-4 py-2 text-xs text-[rgb(var(--muted))]"
          >
            <span className="h-2 w-2 rounded-full bg-[rgb(var(--brand))]" />
            Lab Console Portfolio • Unique + Recruiter-Friendly
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.05 }}
            className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight"
          >
            Science-grade thinking.
            <br />
            <span className="text-[rgb(var(--muted))]">Production-style software.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-4 max-w-xl text-sm sm:text-base text-[rgb(var(--muted))]"
          >
            {site.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-2xl bg-[rgb(var(--fg))] px-4 py-3 text-sm font-medium text-[rgb(var(--bg))] hover:translate-y-[-1px] transition"
            >
              View Projects
              <ArrowRight className="h-4 w-4 opacity-80 group-hover:translate-x-0.5 transition" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] px-4 py-3 text-sm hover:translate-y-[-1px] transition"
            >
              Contact
            </a>

            <a
              href={site.links.resume}
              className="inline-flex items-center gap-2 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] px-4 py-3 text-sm hover:translate-y-[-1px] transition"
            >
              Resume
            </a>
          </motion.div>
        </div>

        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08 }}
            className="card rounded-3xl p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div className="text-xs tracking-[0.2em] uppercase text-[rgb(var(--muted))]">
                Console
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-red-400/80" />
                <span className="h-2 w-2 rounded-full bg-yellow-400/80" />
                <span className="h-2 w-2 rounded-full bg-green-400/80" />
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card2))] p-4">
              <div className="font-mono text-xs sm:text-sm">
                <div className="text-[rgb(var(--muted))]">$ boot --profile dilshan</div>
                <div className="mt-3 space-y-2">
                  {lines.map((l, i) => (
                    <motion.div
                      key={l.k}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.15 + i * 0.08 }}
                      className="flex gap-3"
                    >
                      <span className="w-24 text-[rgb(var(--muted))]">{l.k}:</span>
                      <span className="text-[rgb(var(--fg))]">{l.v}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.85 }}
                  className="mt-4 text-[rgb(var(--muted))]"
                >
                  <span className="text-[rgb(var(--brand))]">READY</span> — scroll to explore ↓
                </motion.div>
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {site.highlights.map((h) => (
                <div
                  key={h}
                  className="card2 rounded-2xl p-3 text-xs text-[rgb(var(--muted))]"
                >
                  {h}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
