import React from "react";

export default function Section({ id, eyebrow, title, subtitle, children }) {
  return (
    <section id={id} className="container-pad py-16 sm:py-20">
      <div className="mb-8">
        {eyebrow && (
          <div className="text-xs tracking-[0.22em] uppercase text-[rgb(var(--muted))]">
            {eyebrow}
          </div>
        )}
        <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-[rgb(var(--muted))]">
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}
