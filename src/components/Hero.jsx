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
    <section id="top" className="container-pad pt-12 sm:pt-16 lg:pt-20 pb-10">
      {/* ✅ Better responsive grid + consistent gaps */}
      <div className="grid items-start gap-8 md:gap-10 lg:grid-cols-12">
        {/* LEFT: image + text */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start min-w-0">
          {/* ✅ Responsive circular image (clamp-based) */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full blur-3xl opacity-40 bg-[rgb(var(--brand))]" />

            <img
              src="/images/dilshan.jpeg"
              alt={site.name}
              className="relative z-10 rounded-full object-cover border-4 border-[rgb(var(--border))] shadow-2xl"
              style={{
                width: "clamp(180px, 45vw, 340px)",
                height: "clamp(180px, 45vw, 340px)",
              }}
            />
          </motion.div>

          {/* ✅ Text block scales + centers on small screens */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-7 sm:mt-8 w-full max-w-xl text-center lg:text-left"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
              Science-grade thinking.
              <br />
              <span className="text-[rgb(var(--muted))]">Production-style software.</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[rgb(var(--muted))]">
              {site.tagline}
            </p>

            {/* ✅ Buttons: full width on mobile, inline on bigger screens */}
            <div className="mt-7 grid w-full gap-3 sm:flex sm:flex-wrap sm:justify-center lg:justify-start">
              <a
                href="#projects"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl
                          bg-[rgb(var(--brand))] px-5 py-3 text-sm font-medium
                          text-white hover:-translate-y-px transition"
              >
                View Projects
                <ArrowRight className="h-4 w-4 opacity-90 group-hover:translate-x-0.5 transition" />
              </a>

              <a
                href="#contact"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl
                          border border-[rgb(var(--border))]
                          bg-[rgb(var(--card))] px-5 py-3 text-sm
                          hover:-translate-y-[-1px] transition"
              >
                Contact
              </a>

              <a
                href={site.links.resume}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl
                          border border-[rgb(var(--border))]
                          bg-[rgb(var(--card))] px-5 py-3 text-sm
                          hover:-translate-y-[-1px] transition"
              >
                Resume
              </a>
            </div>
          </motion.div>
        </div>

        {/* RIGHT: console card */}
        <div className="lg:col-span-5 min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08 }}
            className="card rounded-3xl p-4 sm:p-5 shadow-sm"
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

            {/* ✅ Make console content wrap safely */}
            <div className="mt-4 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card2))] p-4">
              <div className="font-mono text-xs sm:text-sm min-w-0">
                <div className="text-[rgb(var(--muted))] break-words">$ boot --profile dilshan</div>

                <div className="mt-3 space-y-2">
                  {lines.map((l, i) => (
                    <motion.div
                      key={l.k}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.15 + i * 0.08 }}
                      className="flex gap-3 min-w-0"
                    >
                      <span className="w-20 sm:w-24 shrink-0 text-[rgb(var(--muted))]">
                        {l.k}:
                      </span>
                      <span className="text-[rgb(var(--fg))] break-words min-w-0">
                        {l.v}
                      </span>
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

            {/* ✅ Modules section: better spacing + wrapping */}
            <div className="mt-5 sm:mt-6 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card2))] p-4">
              <div className="mb-3 text-xs tracking-[0.2em] uppercase text-[rgb(var(--muted))]">
                Modules
              </div>

              <ul className="space-y-3 font-mono text-xs sm:text-sm min-w-0">
                <li className="flex items-start gap-3 min-w-0">
                  <span className="text-[rgb(var(--brand))] shrink-0">▸</span>
                  <span className="text-[rgb(var(--muted))] shrink-0">MODULE_LOADED</span>
                  <span className="text-[rgb(var(--fg))] break-words min-w-0">
                    GigaHz — Build-Your-Own-PC system with compatibility logic
                  </span>
                </li>

                <li className="flex items-start gap-3 min-w-0">
                  <span className="text-[rgb(var(--brand))] shrink-0">▸</span>
                  <span className="text-[rgb(var(--muted))] shrink-0">MODULE_LOADED</span>
                  <span className="text-[rgb(var(--fg))] break-words min-w-0">
                    Backend APIs • PostgreSQL • Prisma workflows
                  </span>
                </li>

                <li className="flex items-start gap-3 min-w-0">
                  <span className="text-[rgb(var(--brand))] shrink-0">▸</span>
                  <span className="text-[rgb(var(--muted))] shrink-0">MODULE_LOADED</span>
                  <span className="text-[rgb(var(--fg))] break-words min-w-0">
                    Linux / Ubuntu • HPC simulation experience (science → tech edge)
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
