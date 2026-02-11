import React, { useEffect, useMemo, useRef, useState } from "react";
import Section from "./Section.jsx";
import { site } from "../data/siteData.js";
import { motion, useReducedMotion } from "framer-motion";

function polarToXY(cx, cy, r, angleDeg) {
  const a = (Math.PI / 180) * angleDeg;
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}

function normalizeItems(items) {
  return (items ?? []).map((it) => {
    if (typeof it === "string") return { name: it, icon: null, note: null };
    const name = it.name ?? it.label ?? it.title ?? String(it);
    const icon = it.icon ?? it.src ?? it.image ?? it.img ?? null;
    const note = it.note ?? it.tag ?? it.level ?? null;
    return { name, icon, note };
  });
}

function initials(label) {
  return String(label)
    .split(/[\s/.-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

function toRgbTriplet(value) {
  const v = String(value || "").trim();
  if (!v) return "0 0 0";

  // already "r g b"
  if (/^\d+\s+\d+\s+\d+$/.test(v)) return v;

  // rgb(...) or rgba(...)
  const rgbMatch = v.match(/rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/i);
  if (rgbMatch) return `${rgbMatch[1]} ${rgbMatch[2]} ${rgbMatch[3]}`;

  // hex
  const hex = v.replace("#", "");
  if (/^[0-9a-f]{3}$/i.test(hex)) {
    const r = parseInt(hex[0] + hex[0], 16);
    const g = parseInt(hex[1] + hex[1], 16);
    const b = parseInt(hex[2] + hex[2], 16);
    return `${r} ${g} ${b}`;
  }
  if (/^[0-9a-f]{6}$/i.test(hex)) {
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return `${r} ${g} ${b}`;
  }

  // fallback
  return "0 0 0";
}

export default function SkillConstellation() {
  const prefersReduced = useReducedMotion();
  const [active, setActive] = useState(site.skills?.[0]?.group ?? "");
  const [hovered, setHovered] = useState(false);

  const wrapRef = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  // ✅ this is the KEY: real computed theme colors for SVG
  const [themeRgb, setThemeRgb] = useState({
    text: "0 0 0",
    muted: "0 0 0",
    brand: "0 0 0",
    border: "0 0 0",
    card: "255 255 255",
  });

  useEffect(() => {
    const root = document.documentElement;

    const readVars = () => {
      // read computed vars from the actual element that holds them
      const target = wrapRef.current || root;
      const st = getComputedStyle(target);

      const text = toRgbTriplet(st.getPropertyValue("--text"));
      const muted = toRgbTriplet(st.getPropertyValue("--muted"));
      const brand = toRgbTriplet(st.getPropertyValue("--brand"));
      const border = toRgbTriplet(st.getPropertyValue("--border"));
      const card = toRgbTriplet(st.getPropertyValue("--card"));

      setThemeRgb({ text, muted, brand, border, card });
    };

    readVars();

    // watch theme toggles that change class/style/data-theme on html
    const obs = new MutationObserver(() => readVars());
    obs.observe(root, { attributes: true, attributeFilter: ["class", "style", "data-theme"] });

    // also re-read on resize (some setups swap variables via media queries)
    window.addEventListener("resize", readVars);

    return () => {
      obs.disconnect();
      window.removeEventListener("resize", readVars);
    };
  }, []);

  // Theme-safe css strings (still used for circles/borders outside svg fills)
  const css = useMemo(
    () => ({
      brand: "rgb(var(--brand))",
      border: "rgb(var(--border))",
      muted: "rgb(var(--muted))",
      card: "rgb(var(--card))",
      card2: "rgb(var(--card2))",
      text: "rgb(var(--text))",
    }),
    []
  );

  const selected =
    site.skills?.find((s) => s.group === active) || site.skills?.[0] || { group: "", items: [] };

  const toolItems = useMemo(() => normalizeItems(selected.items), [selected]);

  const stars = useMemo(() => {
    const rng = (seed) => {
      let t = seed + 0x6d2b79f5;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };

    const out = [];
    for (let i = 0; i < 56; i++) {
      const u = rng(i * 17 + 3);
      const v = rng(i * 29 + 11);
      out.push({
        x: 30 + u * 340,
        y: 30 + v * 340,
        r: 0.7 + rng(i * 31 + 7) * 1.8,
        o: 0.12 + rng(i * 41 + 19) * 0.55,
        tw: 2.6 + (i % 9) * 0.55,
        i,
      });
    }
    return out;
  }, []);

  const nodes = useMemo(() => {
    const cx = 200,
      cy = 200;

    const orbits = [
      { rx: 160, ry: 116, rot: 18 },
      { rx: 134, ry: 168, rot: -22 },
      { rx: 188, ry: 142, rot: 35 },
    ];

    const step = 360 / Math.max(1, site.skills.length);

    return site.skills.map((s, i) => {
      const orbit = orbits[i % orbits.length];
      const baseAngle = -90 + i * step;

      const p = polarToXY(cx, cy, 1, baseAngle);
      const x = cx + orbit.rx * (p.x - cx);
      const y = cy + orbit.ry * (p.y - cy);

      const z = ((i % 5) - 2) * 0.12;
      const scale = 1 + z * 0.55;

      return { ...s, i, cx, cy, orbit, baseAngle, x, y, z, scale };
    });
  }, []);

  const onMove = (e) => {
    if (prefersReduced) return;
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    setTilt({ ry: (px - 0.5) * 10, rx: -(py - 0.5) * 8 });
  };

  const onLeave = () => {
    setTilt({ rx: 0, ry: 0 });
    setHovered(false);
  };

  // ✅ theme reactive fills for SVG text (NO shadow / NO stroke)
  const tIdle = `rgba(${themeRgb.text} / 0.86)`;
  const tActive = `rgba(${themeRgb.text} / 0.98)`;
  const tSub = `rgba(${themeRgb.muted} / 0.92)`;

  return (
    <Section
      id="skills"
      eyebrow="Skills"
      
    >
      <div className="grid gap-6 lg:grid-cols-12">
        {/* LEFT */}
        <div className="lg:col-span-7 card rounded-3xl p-6 relative overflow-hidden">
          
          {/* background */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div
              className="absolute -inset-24 blur-3xl opacity-90"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(var(--brand),0.26), rgba(0,0,0,0))",
              }}
            />
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.32) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.32) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
                maskImage: "radial-gradient(circle at 50% 46%, black 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 50% 45%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 72%, rgba(0,0,0,0.55) 100%)",
                opacity: 0.35,
              }}
            />
          </div>

          <div
            ref={wrapRef}
            onMouseMove={onMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={onLeave}
            className="mt-6 flex justify-center"
          >
            <motion.div
              className="atomWrap w-full max-w-[580px]"
              style={{ perspective: 900 }}
              animate={prefersReduced ? {} : { rotateX: tilt.rx, rotateY: tilt.ry }}
              transition={{ type: "spring", stiffness: 130, damping: 18, mass: 0.9 }}
            >
              <svg viewBox="0 0 400 400" className="w-full" role="img" aria-label="Atom skill map">
                <defs>
                  <style>{`
                    :root{
                      --orbitA: rgba(255,255,255,0.62);
                      --orbitB: rgba(var(--brand),0.42);
                      --orbitGlow: rgba(255,255,255,0.20);
                      --coreRing: rgba(var(--brand),0.34);
                      --star: rgba(255,255,255,0.72);
                    }

                    .orbitAnimA { animation: orbitSpinA 22s linear infinite; transform-origin: 200px 200px; }
                    .orbitAnimB { animation: orbitSpinB 28s linear infinite; transform-origin: 200px 200px; }
                    .orbitAnimC { animation: orbitSpinC 34s linear infinite; transform-origin: 200px 200px; }

                    @keyframes orbitSpinA { from { transform: rotate(0deg);} to { transform: rotate(360deg);} }
                    @keyframes orbitSpinB { from { transform: rotate(0deg);} to { transform: rotate(-360deg);} }
                    @keyframes orbitSpinC { from { transform: rotate(0deg);} to { transform: rotate(360deg);} }

                    .electronBob { animation: bob 6.8s ease-in-out infinite; }
                    .electronBob2 { animation: bob2 7.8s ease-in-out infinite; }
                    .electronBob3 { animation: bob3 9.2s ease-in-out infinite; }

                    @keyframes bob  { 0%,100%{ transform: translate(0,0);} 50%{ transform: translate(10px,-8px);} }
                    @keyframes bob2 { 0%,100%{ transform: translate(0,0);} 50%{ transform: translate(-12px,9px);} }
                    @keyframes bob3 { 0%,100%{ transform: translate(0,0);} 50%{ transform: translate(8px,11px);} }

                    .atomWrap:hover .orbitAnimA,
                    .atomWrap:hover .orbitAnimB,
                    .atomWrap:hover .orbitAnimC,
                    .atomWrap:hover .electronBob,
                    .atomWrap:hover .electronBob2,
                    .atomWrap:hover .electronBob3{
                      animation-play-state: paused;
                    }
                  `}</style>

                  <linearGradient id="orbitStroke" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="var(--orbitA)" />
                    <stop offset="80%" stopColor="var(--orbitB)" />
                  </linearGradient>

                  <radialGradient id="coreGlow" cx="50%" cy="50%" r="62%">
                    <stop offset="0.001%" stopColor="rgba(var(--brand),0.26)" />
                    <stop offset="35%" stopColor="rgba(0,0,0,0)" />
                  </radialGradient>

                  <filter id="orbitGlowFilter" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="1.55" result="b" />
                    <feMerge>
                      <feMergeNode in="b" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* stars */}
                <g opacity="0.9">
                  {stars.map((s) => (
                    <motion.circle
                      key={`star-${s.i}`}
                      cx={s.x}
                      cy={s.y}
                      r={s.r}
                      fill="var(--star)"
                      animate={prefersReduced ? {} : { opacity: [s.o * 0.7, s.o * 1.2, s.o * 0.7] }}
                      transition={
                        prefersReduced ? {} : { duration: s.tw, repeat: Infinity, ease: "easeInOut" }
                      }
                    />
                  ))}
                </g>

                {/* core glow */}
                <circle cx="200" cy="200" r="176" fill="url(#coreGlow)" />

                {/* orbits */}
                <g className="orbitAnimA" filter="url(#orbitGlowFilter)" opacity="0.98">
                  <ellipse
                    cx="200"
                    cy="200"
                    rx="164"
                    ry="118"
                    transform="rotate(18 200 200)"
                    fill="none"
                    stroke="var(--orbitGlow)"
                    strokeWidth="3.6"
                    opacity="0.22"
                  />
                  <ellipse
                    cx="200"
                    cy="200"
                    rx="164"
                    ry="118"
                    transform="rotate(18 200 200)"
                    fill="none"
                    stroke="url(#orbitStroke)"
                    strokeWidth="1.9"
                  />
                </g>

                <g className="orbitAnimB" filter="url(#orbitGlowFilter)" opacity="0.98">
                  <ellipse
                    cx="200"
                    cy="200"
                    rx="136"
                    ry="170"
                    transform="rotate(-22 200 200)"
                    fill="none"
                    stroke="var(--orbitGlow)"
                    strokeWidth="3.6"
                    opacity="0.22"
                  />
                  <ellipse
                    cx="200"
                    cy="200"
                    rx="136"
                    ry="170"
                    transform="rotate(-22 200 200)"
                    fill="none"
                    stroke="url(#orbitStroke)"
                    strokeWidth="1.9"
                  />
                </g>

                <g className="orbitAnimC" filter="url(#orbitGlowFilter)" opacity="0.98">
                  <ellipse
                    cx="200"
                    cy="200"
                    rx="190"
                    ry="144"
                    transform="rotate(35 200 200)"
                    fill="none"
                    stroke="var(--orbitGlow)"
                    strokeWidth="3.6"
                    opacity="0.22"
                  />
                  <ellipse
                    cx="200"
                    cy="200"
                    rx="190"
                    ry="144"
                    transform="rotate(35 200 200)"
                    fill="none"
                    stroke="url(#orbitStroke)"
                    strokeWidth="1.9"
                  />
                </g>

                {/* nucleus */}
                <g filter="url(#softGlow)">
                  <motion.circle
                    cx="200"
                    cy="200"
                    r="28"
                    fill={css.card}
                    stroke={css.border}
                    strokeWidth="2"
                    animate={
                      prefersReduced || hovered
                        ? {}
                        : { r: [27.5, 29.2, 27.5], opacity: [1, 0.96, 1] }
                    }
                    transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.circle
                    cx="200"
                    cy="200"
                    r="44"
                    fill="none"
                    stroke="var(--coreRing)"
                    strokeWidth="2"
                    animate={
                      prefersReduced || hovered
                        ? {}
                        : { r: [38, 50, 38], opacity: [0.38, 0.11, 0.38] }
                    }
                    transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
                  />

                  <text
                    x="200"
                    y="205"
                    textAnchor="middle"
                    fontSize="10"
                    fill={tSub}
                    style={{ letterSpacing: "0.24em", fontWeight: 800 }}
                  >
                    CORE
                  </text>
                </g>

                {/* electrons */}
                {nodes.map((n) => {
                  const isOn = n.group === active;
                  const r = isOn ? 18 : 16;
                  const labelY = n.y + 38;

                  const bobClass =
                    n.i % 3 === 0 ? "electronBob" : n.i % 3 === 1 ? "electronBob2" : "electronBob3";

                  return (
                    <g
                      key={n.group}
                      className={prefersReduced ? "" : bobClass}
                      style={{
                        cursor: "pointer",
                        transform: `translate(0px,0px) scale(${n.scale})`,
                      }}
                      onClick={() => setActive(n.group)}
                    >
                      {isOn && (
                        <>
                          <circle cx={n.x} cy={n.y} r={r + 1} fill="rgba(var(--brand),0.18)" />
                          <circle
                            cx={n.x}
                            cy={n.y}
                            r={r + 24}
                            fill="none"
                            stroke="rgba(var(--brand),0.22)"
                            strokeWidth="2"
                            opacity="0.8"
                          />
                        </>
                      )}

                      <circle
                        cx={n.x}
                        cy={n.y}
                        r={r}
                        fill={isOn ? css.brand : css.card}
                        stroke={isOn ? "rgba(255,255,255,0.28)" : css.border}
                        strokeWidth="2"
                      />
                      <circle
                        cx={n.x - 5}
                        cy={n.y - 6}
                        r={3}
                        fill={isOn ? "rgba(255,255,255,0.46)" : "rgba(255,255,255,0.20)"}
                      />

                      {/* ✅ THIS text now reacts to theme for sure */}
                      <text
                        x={n.x}
                        y={labelY}
                        textAnchor="middle"
                        fontSize="11.5"
                        fill={tSub}
                        style={{ fontWeight: 600 }}
                      >
                        {n.group}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </motion.div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-5 card rounded-3xl p-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="mt-1 text-lg font-semibold tracking-tight">{selected.group}</div>
            </div>

            <motion.div
              key={selected.group}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="shrink-0 rounded-full px-3 py-1 text-xs border border-[rgb(var(--border))] bg-[rgb(var(--card2))] text-[rgb(var(--muted))]"
            >
              {toolItems.length} tools
            </motion.div>
          </div>

          <motion.div
            key={`tools-${selected.group}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mt-5 grid grid-cols-2 gap-3"
          >
            {toolItems.map((t) => (
              <div
                key={t.name}
                className="group relative overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card2))] p-3 transition hover:-translate-y-[1px] hover:shadow-sm"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-12 opacity-0 blur-2xl transition group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(closest-side, rgba(var(--brand),0.22), rgba(0,0,0,0))",
                  }}
                />

                <div className="relative">
                  <div className="grid place-items-center rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-3">
                    {t.icon ? (
                      <img src={t.icon} alt={t.name} className="h-10 w-10 object-contain" />
                    ) : (
                      <div className="grid h-10 w-10 place-items-center rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card2))] text-xs font-semibold text-[rgb(var(--muted))]">
                        {initials(t.name)}
                      </div>
                    )}
                  </div>

                  <div className="mt-3">
                    <div className="truncate text-sm font-semibold">{t.name}</div>
                    <div className="mt-0.5 text-xs text-[rgb(var(--muted))]">
                      {t.note ? String(t.note) : `in ${selected.group}`}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
