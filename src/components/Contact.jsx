import React, { useState } from "react";
import Section from "./Section.jsx";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { site } from "../data/siteData.js";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: "", msg: "" }); // type: "ok" | "err"

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ type: "", msg: "" });

    // simple validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ type: "err", msg: "Please fill in all fields." });
      return;
    }

    setSending(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          // optional: where it goes / extra data
          to_name: site.name,
        },
        publicKey
      );

      setStatus({ type: "ok", msg: "Transmission delivered. I’ll reply soon." });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({
        type: "err",
        msg: "Transmission failed. Please try again in a moment.",
      });
    } finally {
      setSending(false);
    }
  }

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
            {status.msg ? (
              <div
                className={
                  status.type === "ok"
                    ? "text-green-400"
                    : "text-red-400"
                }
              >
                &gt; {status.msg}
              </div>
            ) : null}
          </div>
        </div>

        {/* Layout */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
          {/* Left Side - Message Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl bg-[rgb(var(--card2))] p-3 text-sm outline-none border border-[rgb(var(--border))] focus:border-[rgb(var(--brand))]"
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="Your Email"
              className="w-full rounded-xl bg-[rgb(var(--card2))] p-3 text-sm outline-none border border-[rgb(var(--border))] focus:border-[rgb(var(--brand))]"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Your Message"
              className="w-full resize-none rounded-xl bg-[rgb(var(--card2))] p-3 text-sm outline-none border border-[rgb(var(--border))] focus:border-[rgb(var(--brand))]"
            />

            <button
              type="submit"
              disabled={sending}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[rgb(var(--brand))] px-6 py-3 text-sm font-medium text-white transition hover:scale-[1.02] active:scale-[0.99] disabled:opacity-60 disabled:hover:scale-100"
            >
              {sending ? "Sending..." : "Send Transmission"}
              <Send className="h-4 w-4" />
            </button>
          </form>

          {/* Right Side - Contact Nodes */}
          <div className="flex flex-col gap-4 lg:justify-center">
            <Node
              href={site.links.email}
              icon={<Mail className="h-5 w-5 text-[rgb(var(--brand))]" />}
              title="Email"
              desc="Fastest response channel"
            />

            <Node
              href={site.links.github}
              icon={<Github className="h-5 w-5 text-[rgb(var(--brand))]" />}
              title="GitHub"
              desc="Explore my systems & code"
            />

            <Node
              href={site.links.linkedin}
              icon={<Linkedin className="h-5 w-5 text-[rgb(var(--brand))]" />}
              title="LinkedIn"
              desc="Professional network"
            />
          </div>
        </div>

        {/* Footer */}
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
  const isExternal =
    href?.startsWith("http://") || href?.startsWith("https://");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
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
