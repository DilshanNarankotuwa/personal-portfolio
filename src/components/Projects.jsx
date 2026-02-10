import React from "react";
import Section from "./Section.jsx";
import { site } from "../data/siteData.js";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Case studies, not screenshots"
      subtitle="Each project highlights system design, real logic, and deploy-ready structure."
    >
      <div className="grid gap-6">
        {site.projects.map((p, idx) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
            className="card rounded-3xl p-6"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
                  {p.badge && (
                    <span className="rounded-full px-3 py-1 text-xs border border-[rgb(var(--border))] bg-[rgb(var(--card2))] text-[rgb(var(--muted))]">
                      {p.badge}
                    </span>
                  )}
                </div>
                <p className="mt-2 max-w-3xl text-sm text-[rgb(var(--muted))]">
                  {p.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {p.links?.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] px-3 py-2 text-sm hover:translate-y-[-1px] transition"
                  >
                    {l.label} <ArrowUpRight className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--card2))] px-3 py-1 text-xs"
                >
                  {s}
                </span>
              ))}
            </div>

            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {p.points.map((pt) => (
                <li
                  key={pt}
                  className="card2 rounded-2xl p-4 text-sm text-[rgb(var(--muted))]"
                >
                  {pt}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
