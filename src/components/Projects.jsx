import React, { useEffect, useMemo, useRef, useState } from "react";
import Section from "./Section.jsx";
import { site } from "../data/siteData.js";
import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";

function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n));
}

const MAX_ROW = 6;

/** ---------- heights per weight (tuned for media visibility) ---------- */
function heightByWeight(w) {
  const weight = clamp(Number(w ?? 3), 1, 6);
  if (weight === 6) return 790;
  if (weight === 5) return 620;
  if (weight === 4) return 650;
  if (weight === 3) return 540;
  if (weight === 2) return 600;
  return 470;
}

/** ---------- ProjectMedia (padding-top ratio box, hover-to-play) ---------- */
function ProjectMedia({ media, active }) {
  const hostRef = useRef(null);
  const vidRef = useRef(null);
  const [load, setLoad] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [ratio, setRatio] = useState(16 / 9);

  useEffect(() => {
    if (!media) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setLoad(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    if (hostRef.current) io.observe(hostRef.current);
    return () => io.disconnect();
  }, [media]);

  useEffect(() => {
    if (!media) return;
    if (typeof media.ratio === "number" && media.ratio > 0) setRatio(media.ratio);
    else if (typeof media.aspect === "string") {
      const m = media.aspect.split("/").map((x) => Number(x.trim()));
      if (m.length === 2 && m[0] && m[1]) setRatio(m[0] / m[1]);
      else setRatio(16 / 9);
    } else setRatio(16 / 9);
  }, [media]);

  useEffect(() => {
    if (!media || media.kind !== "video") return;
    const v = vidRef.current;
    if (!v) return;

    if (active && load) {
      const p = v.play();
      if (p && typeof p.then === "function") p.catch(() => {});
      setPlaying(true);
    } else {
      v.pause();
      v.currentTime = 0;
      setPlaying(false);
    }
  }, [active, load, media]);

  if (!media) return null;

  const padTop = `${(1 / ratio) * 100}%`;

  return (
    <div
      ref={hostRef}
      className="mt-4 overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card2))] relative"
    >
      <div className="relative w-full" style={{ paddingTop: padTop }}>
        {!load ? (
          <div className="absolute inset-0 h-full w-full animate-pulse" />
        ) : media.kind === "image" ? (
          <img
            src={media.src}
            alt={media.alt ?? ""}
            className="absolute inset-0 h-full w-full object-contain"
            loading="lazy"
            decoding="async"
            onLoad={(e) => {
              const img = e.currentTarget;
              if (img.naturalWidth && img.naturalHeight) setRatio(img.naturalWidth / img.naturalHeight);
            }}
          />
        ) : media.kind === "video" ? (
          <>
            <video
              ref={vidRef}
              className="absolute inset-0 h-full w-full object-contain"
              poster={media.poster}
              muted
              loop
              playsInline
              preload="metadata"
              onLoadedMetadata={(e) => {
                const v = e.currentTarget;
                if (v.videoWidth && v.videoHeight) setRatio(v.videoWidth / v.videoHeight);
              }}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
            >
              {(media.sources ?? []).map((s) => (
                <source key={s.src} src={s.src} type={s.type} />
              ))}
            </video>

            <div
              className={[
                "pointer-events-none absolute inset-0 grid place-items-center transition duration-200",
                playing ? "opacity-0" : "opacity-100",
              ].join(" ")}
            >
              <div className="flex items-center gap-2 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))]/80 px-4 py-2 backdrop-blur">
                <Play className="h-4 w-4" />
                <span className="text-sm md:text-base text-[rgb(var(--text))]">Hover to preview</span>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

/** ---------- row packer: make rows sum to 6 ----------
 * prefers complements: 6, 5+1, 4+2, 3+3
 */
function packIntoRows(items) {
  const pool = (items ?? []).map((p, i) => ({
    ...p,
    __w: clamp(Number(p.weight ?? 3), 1, 6),
    __i: i,
  }));

  // big first
  pool.sort((a, b) => b.__w - a.__w || a.__i - b.__i);

  const used = new Set();
  const rows = [];

  function takeFirst(matchFn) {
    const idx = pool.findIndex((x) => !used.has(x.__i) && matchFn(x));
    if (idx === -1) return null;
    const it = pool[idx];
    used.add(it.__i);
    return it;
  }

  function takeExact(w) {
    return takeFirst((x) => x.__w === w);
  }

  while (used.size < pool.length) {
    const row = [];
    let remaining = MAX_ROW;

    const first = takeFirst(() => true);
    if (!first) break;
    row.push(first);
    remaining -= first.__w;

    if (remaining > 0) {
      // exact complement first
      const exact = takeExact(remaining);
      if (exact) {
        row.push(exact);
        remaining -= exact.__w;
      } else {
        // best-fit
        while (remaining > 0) {
          const best = takeFirst((x) => x.__w <= remaining);
          if (!best) break;
          row.push(best);
          remaining -= best.__w;

          const exact2 = remaining > 0 ? takeExact(remaining) : null;
          if (exact2) {
            row.push(exact2);
            remaining -= exact2.__w;
            break;
          }
        }
      }
    }

    rows.push(row);
  }

  return rows;
}

export default function Projects() {
  const projects = useMemo(() => site.projects ?? [], []);
  const rows = useMemo(() => packIntoRows(projects), [projects]);

  const [hoveredId, setHoveredId] = useState(null);

  // ✅ responsive span logic (this is the key fix)
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)"); // lg
    const onChange = () => setIsDesktop(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  return (
    <Section id="projects" eyebrow="Projects">
      <div className="relative card rounded-3xl p-5 md:p-7 overflow-hidden">
        {/* background */}
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl bg-[rgb(var(--card2))]" />
          <div className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full blur-3xl bg-[rgb(var(--card2))]" />
          <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_center,black,transparent_70%)] opacity-40" />
        </div>

        {/* rows */}
        <div className="relative grid gap-7">
          {rows.map((row, ri) => (
            <div
              key={ri}
              className="grid gap-7"
              style={{ gridTemplateColumns: "repeat(12, minmax(0, 1fr))" }}
            >
              {row.map((p, idx) => {
                const w = clamp(Number(p.weight ?? 3), 1, 6);
                const spanDesktop = w * 2; // 6->12, 5->10, 4->8, 3->6, 2->4, 1->2
                const span = isDesktop ? spanDesktop : 12;

                return (
                  <motion.article
                    key={`${p.title}-${idx}`}
                    className={[
                      "rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--card))]",
                      "p-6 md:p-7 overflow-hidden shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur",
                    ].join(" ")}
                    style={{
                      gridColumn: `span ${span} / span ${span}`,
                      height: heightByWeight(w),
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: 0.45 }}
                    onMouseEnter={() => setHoveredId(p.title)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <div className="h-full flex flex-col">
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
                            {p.title}
                          </h3>
                          <p className="mt-2 text-base md:text-sm leading-relaxed text-[rgb(var(--muted))] line-clamp-3">
                            {p.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2 justify-end">
                          {p.links?.slice(0, 2)?.map((l) => (
                            <a
                              key={l.href}
                              href={l.href}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card2))] px-3.5 py-2.5 text-sm md:text-base hover:translate-y-[-1px] transition"
                            >
                              {l.label} <ArrowUpRight className="h-4 w-4" />
                            </a>
                          ))}
                        </div>
                      </div>

                      <ProjectMedia media={p.media} active={hoveredId === p.title} />

                      <div className="mt-auto pt-4 flex flex-wrap gap-2.5">
                        {p.stack?.slice(0, 10)?.map((s) => (
                          <span
                            key={s}
                            className="rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--card2))] px-3.5 py-1.5 text-sm"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
