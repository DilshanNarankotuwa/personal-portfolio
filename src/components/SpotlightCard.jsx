import { useEffect, useRef } from "react";

export default function SpotlightCard({ className = "", children }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const finePointer = window.matchMedia?.("(pointer: fine)")?.matches;
    if (!finePointer) return;

    function onMove(e) {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--x", `${e.clientX - r.left}px`);
      el.style.setProperty("--y", `${e.clientY - r.top}px`);
    }

    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden ${className}`}
    >
      {/* glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--x) var(--y), rgba(112,168,255,0.18), transparent 62%)",
        }}
      />
      {/* subtle border highlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          boxShadow: "0 0 0 1px rgba(112,168,255,0.25) inset",
        }}
      />

      {children}
    </div>
  );
}
