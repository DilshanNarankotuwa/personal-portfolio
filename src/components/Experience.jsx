import React from "react";
import Section from "./Section.jsx";
import { site } from "../data/siteData.js";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Story + proof of growth"
      subtitle="Your path is a strength. This timeline makes it obvious."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {site.experience.map((e) => (
          <div key={e.title} className="card rounded-3xl p-6">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-lg font-semibold tracking-tight">{e.title}</h3>
              <div className="text-xs text-[rgb(var(--muted))]">{e.meta}</div>
            </div>
            <ul className="mt-4 grid gap-2">
              {e.details.map((d) => (
                <li key={d} className="card2 rounded-2xl p-4 text-sm text-[rgb(var(--muted))]">
                  {d}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
