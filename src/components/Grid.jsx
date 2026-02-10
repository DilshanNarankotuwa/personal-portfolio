import React from "react";

export default function Grid() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
      <div
        className="absolute inset-0 opacity-[0.06] dark:opacity-[0.1]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(120,130,160,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(120,130,160,0.25) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(circle at 20% 10%, black 0%, transparent 55%)",
        }}
      />
      <div
        className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.25), rgba(62,124,255,0.18), transparent 65%)",
        }}
      />
    </div>
  );
}
