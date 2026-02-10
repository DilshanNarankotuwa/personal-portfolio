import React from "react";
import Section from "./Section.jsx";
import { site } from "../data/siteData.js";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let’s build something real"
      subtitle="If you want a developer who thinks in systems and ships clean work, message me."
    >
      <div className="card rounded-3xl p-6">
        <div className="grid gap-4 md:grid-cols-3">
          <a className="card2 rounded-2xl p-5 hover:translate-y-[-1px] transition" href={site.links.email}>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <div className="font-medium">Email</div>
            </div>
            <div className="mt-1 text-sm text-[rgb(var(--muted))]">Fastest way to reach me</div>
          </a>

          <a className="card2 rounded-2xl p-5 hover:translate-y-[-1px] transition" href={site.links.github} target="_blank" rel="noreferrer">
            <div className="flex items-center gap-2">
              <Github className="h-4 w-4" />
              <div className="font-medium">GitHub</div>
            </div>
            <div className="mt-1 text-sm text-[rgb(var(--muted))]">Projects + commits</div>
          </a>

          <a className="card2 rounded-2xl p-5 hover:translate-y-[-1px] transition" href={site.links.linkedin} target="_blank" rel="noreferrer">
            <div className="flex items-center gap-2">
              <Linkedin className="h-4 w-4" />
              <div className="font-medium">LinkedIn</div>
            </div>
            <div className="mt-1 text-sm text-[rgb(var(--muted))]">Professional profile</div>
          </a>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <div className="text-sm text-[rgb(var(--muted))]">
            Prefer email? Click above — it opens a prefilled compose window.
          </div>
          <a
            href="#top"
            className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] px-4 py-2 text-sm hover:translate-y-[-1px] transition"
          >
            Back to top
          </a>
        </div>
      </div>
    </Section>
  );
}
