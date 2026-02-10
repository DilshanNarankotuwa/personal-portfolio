import React from "react";
import Section from "./Section.jsx";
import { site } from "../data/siteData.js";

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="Profile"
      title="A builder with a science backbone"
      subtitle="I combine research-grade thinking with full-stack execution—UI polish + backend logic + deploy-ready structure."
    >
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-7 card rounded-3xl p-6">
          <h3 className="text-lg font-semibold tracking-tight">How I work</h3>
          <p className="mt-3 text-sm text-[rgb(var(--muted))] leading-relaxed">
            I don’t just “make pages”. I design systems: data models, APIs, UI components,
            and the logic that connects everything. My background in chemistry and simulations
            trained me to be precise, analytical, and consistent—those habits carry directly into
            software engineering.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="card2 rounded-2xl p-4">
              <div className="text-sm font-medium">Strength</div>
              <div className="mt-1 text-sm text-[rgb(var(--muted))]">
                Turning messy requirements into clean systems.
              </div>
            </div>
            <div className="card2 rounded-2xl p-4">
              <div className="text-sm font-medium">Focus</div>
              <div className="mt-1 text-sm text-[rgb(var(--muted))]">
                Full-stack projects with real constraints and deployability.
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 card rounded-3xl p-6">
          <h3 className="text-lg font-semibold tracking-tight">Quick Links</h3>
          <div className="mt-4 grid gap-3">
            <a className="card2 rounded-2xl p-4 hover:translate-y-[-1px] transition" href={site.links.github} target="_blank" rel="noreferrer">
              <div className="text-sm font-medium">GitHub</div>
              <div className="text-xs text-[rgb(var(--muted))]">Selected real projects</div>
            </a>
            <a className="card2 rounded-2xl p-4 hover:translate-y-[-1px] transition" href={site.links.linkedin} target="_blank" rel="noreferrer">
              <div className="text-sm font-medium">LinkedIn</div>
              <div className="text-xs text-[rgb(var(--muted))]">Work + story</div>
            </a>
            <a className="card2 rounded-2xl p-4 hover:translate-y-[-1px] transition" href={site.links.email}>
              <div className="text-sm font-medium">Email</div>
              <div className="text-xs text-[rgb(var(--muted))]">Let’s build something real</div>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
