import React from "react";
import Section from "./Section.jsx";
import { Mail, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Transmission"
      title="Open Channel"
      subtitle="If you're building something serious, let's connect."
    >
      <div className="relative overflow-hidden rounded-3xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-5 sm:p-7 lg:p-8 shadow-lg">

        {/* Terminal Header */}
        <div className="mb-6">
          <div className="text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[rgb(var(--muted))]">
            TRANSMISSION TERMINAL
          </div>

          <div className="mt-2 space-y-1 font-mono text-[12px] sm:text-sm text-green-400">
            <div>&gt; status: online</div>
            <div>&gt; system: ready</div>
          </div>
        </div>

        {/* Layout */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
          {/* Left Side - Message Form */}
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl bg-[rgb(var(--card2))] p-3 text-sm outline-none border border-[rgb(var(--border))] focus:border-[rgb(var(--brand))]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-xl bg-[rgb(var(--card2))] p-3 text-sm outline-none border border-[rgb(var(--border))] focus:border-[rgb(var(--brand))]"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full resize-none rounded-xl bg-[rgb(var(--card2))] p-3 text-sm outline-none border border-[rgb(var(--border))] focus:border-[rgb(var(--brand))]"
            />

            {/* Button: full width on mobile, auto on larger screens */}
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[rgb(var(--brand))] px-6 py-3 text-sm font-medium text-white transition hover:scale-[1.02] active:scale-[0.99]">
              Send Transmission
              <Send className="h-4 w-4" />
            </button>
          </div>

          {/* Right Side - Contact Nodes */}
          <div className="flex flex-col gap-4 lg:justify-center">
            <Node
              href="mailto:YOUR_EMAIL@gmail.com"
              icon={<Mail className="h-5 w-5 text-[rgb(var(--brand))]" />}
              title="Email"
              desc="Fastest response channel"
            />

            <Node
              href="https://github.com/YOUR_USERNAME"
              icon={<Github className="h-5 w-5 text-[rgb(var(--brand))]" />}
              title="GitHub"
              desc="Explore my systems & code"
            />

            <Node
              href="https://linkedin.com/in/YOUR_USERNAME"
              icon={<Linkedin className="h-5 w-5 text-[rgb(var(--brand))]" />}
              title="LinkedIn"
              desc="Professional network"
            />
            
          </div>
        </div>

        {/* Footer: stacks nicely */}
        <div className="mt-7 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-t border-[rgb(var(--border))] pt-4 text-xs text-[rgb(var(--muted))]">
          
          <div className="font-mono text-[11px] sm:text-xs text-green-400">
            &gt; channel: stable
          </div>
        </div>
      </div>
    </Section>
  );
}

function Node({ href, icon, title, desc }) {
  return (
    <a
      href={href}
      className="group rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card2))] p-4 sm:p-5 transition hover:border-[rgb(var(--brand))] hover:translate-y-[-3px]"
    >
      <div className="flex items-center gap-3">
        <div className="shrink-0">{icon}</div>
        <div className="min-w-0">
          <div className="font-medium truncate">{title}</div>
          <div className="text-xs text-[rgb(var(--muted))] truncate">
            {desc}
          </div>
        </div>
      </div>
    </a>
  );
}
