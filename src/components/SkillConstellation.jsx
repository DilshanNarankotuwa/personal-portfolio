import React, { useMemo, useState } from "react";
import Section from "./Section.jsx";
import { site } from "../data/siteData.js";
import { motion } from "framer-motion";

function polarToXY(cx, cy, r, angleDeg) {
  const a = (Math.PI / 180) * angleDeg;
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}

export default function SkillConstellation() {
  const [active, setActive] = useState(site.skills[0].group);

  const nodes = useMemo(() => {
    const cx = 200, cy = 200;
    const ring = 140;
    const step = 360 / site.skills.length;

    return site.skills.map((s, i) => {
      const p = polarToXY(cx, cy, ring, -90 + i * step);
      return { ...s, x: p.x, y: p.y };
    });
  }, []);

  const selected = site.skills.find((s) => s.group === active) || site.skills[0];

  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Skill constellation"
      subtitle="No boring progress bars. Click a node to reveal the stack behind it."
    >
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-7 card rounded-3xl p-6">
          <div className="text-xs tracking-[0.2em] uppercase text-[rgb(var(--muted))]">
            Interactive Map
          </div>

          <div className="mt-5 flex justify-center">
            <svg
              viewBox="0 0 400 400"
              className="w-full max-w-[520px]"
              role="img"
              aria-label="Skill constellation map"
            >
              <defs>
                <radialGradient id="g" cx="50%" cy="50%" r="60%">
                  <stop offset="0%" stopColor={`rgba(${getComputedStyle(document.documentElement).getPropertyValue("--brand") || "112 168 255"},0.18)`} />
                  <stop offset="100%" stopColor="rgba(0,0,0,0)" />
                </radialGradient>
              </defs>

              {/* center glow */}
              <circle cx="200" cy="200" r="160" fill="url(#g)" />

              {/* links */}
              {nodes.map((n) => (
                <line
                  key={`l-${n.group}`}
                  x1="200"
                  y1="200"
                  x2={n.x}
                  y2={n.y}
                  stroke={`rgba(${getComputedStyle(document.documentElement).getPropertyValue("--border") || "38 44 66"}, 0.9)`}
                  strokeWidth="2"
                />
              ))}

              {/* center */}
              <circle
                cx="200"
                cy="200"
                r="26"
                fill={`rgb(${getComputedStyle(document.documentElement).getPropertyValue("--card") || "12 14 26"})`}
                stroke={`rgb(${getComputedStyle(document.documentElement).getPropertyValue("--border") || "38 44 66"})`}
                strokeWidth="2"
              />
              <text x="200" y="206" textAnchor="middle" fontSize="10" fill={`rgb(${getComputedStyle(document.documentElement).getPropertyValue("--muted") || "148 156 176"})`}>
                CORE
              </text>

              {/* nodes */}
              {nodes.map((n) => {
                const isOn = n.group === active;
                return (
                  <g key={n.group}>
                    <circle
                      cx={n.x}
                      cy={n.y}
                      r={isOn ? 18 : 16}
                      fill={isOn ? `rgb(${getComputedStyle(document.documentElement).getPropertyValue("--brand") || "112 168 255"})` : `rgb(${getComputedStyle(document.documentElement).getPropertyValue("--card") || "12 14 26"})`}
                      stroke={`rgb(${getComputedStyle(document.documentElement).getPropertyValue("--border") || "38 44 66"})`}
                      strokeWidth="2"
                      style={{ cursor: "pointer" }}
                      onClick={() => setActive(n.group)}
                    />
                    <text
                      x={n.x}
                      y={n.y + 34}
                      textAnchor="middle"
                      fontSize="11"
                      fill={`rgb(${getComputedStyle(document.documentElement).getPropertyValue("--muted") || "148 156 176"})`}
                    >
                      {n.group}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        <div className="lg:col-span-5 card rounded-3xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs tracking-[0.2em] uppercase text-[rgb(var(--muted))]">
                Selected Node
              </div>
              <div className="mt-1 text-lg font-semibold tracking-tight">{selected.group}</div>
            </div>

            <motion.div
              key={selected.group}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-full px-3 py-1 text-xs border border-[rgb(var(--border))] bg-[rgb(var(--card2))] text-[rgb(var(--muted))]"
            >
              {selected.items.length} tools
            </motion.div>
          </div>

          <motion.div
            key={`list-${selected.group}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mt-4 flex flex-wrap gap-2"
          >
            {selected.items.map((it) => (
              <span
                key={it}
                className="rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--card2))] px-3 py-1 text-xs"
              >
                {it}
              </span>
            ))}
          </motion.div>

          <div className="mt-6 text-sm text-[rgb(var(--muted))]">
            Tip: This section is intentionally “systems-themed” — it communicates how you think,
            not just what you know.
          </div>
        </div>
      </div>
    </Section>
  );
}
