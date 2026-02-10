import React from "react";
import Section from "./Section.jsx";
import { site } from "../data/siteData.js";
import Spotlight from "./Spotlight.jsx";


export default function About() {
  return (
    <Section
      id="about"
      eyebrow="Profile"
      title="A builder with a science backbone"
      subtitle="Research-grade thinking applied to real-world software systems."
    >
      <div className="grid gap-8 lg:grid-cols-12">
        {/* LEFT */}
        <div className="lg:col-span-7">
          <div className="card rounded-3xl p-6">
            <p className="text-sm sm:text-base text-[rgb(var(--muted))] leading-relaxed">
              I design and build systems — not just pages. My background in science
              trained me to think in terms of structure, constraints, and correctness,
              and I apply that mindset directly to full-stack software development.
            </p>

            {/* principles */}
            <ul className="mt-6 space-y-4">
              {[
                "Think in systems, not features",
                "Clarity before complexity",
                "Ship clean, deploy-ready work",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[rgb(var(--brand))]" />
                  <span className="text-sm text-[rgb(var(--fg))]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-5">
          <Spotlight className="group card rounded-3xl p-6">
            <p className="text-sm sm:text-base text-[rgb(var(--muted))] leading-relaxed">
              I design and build systems — not just pages. My background in science
              trained me to think in terms of structure, constraints, and correctness,
              and I apply that mindset directly to full-stack software development.
            </p>

            <ul className="mt-6 space-y-4">
              {[
                "Think in systems, not features",
                "Clarity before complexity",
                "Ship clean, deploy-ready work",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[rgb(var(--brand))]" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </Spotlight>

        </div>
      </div>
    </Section>
  );
}
