import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-[rgb(var(--border))] bg-[rgb(var(--card))]">
      
      

      <div className="relative mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">

          {/* Left — Identity */}
          <div>
            <h3 className="text-lg font-semibold tracking-tight">
              Dilshan Narankotuwa
            </h3>
            <p className="mt-3 text-sm text-[rgb(var(--muted))] leading-relaxed">
              Full-Stack Developer • Systems Builder  
              <br />
              I build structured, scalable software with clean architecture and strong engineering thinking.
            </p>
          </div>

          {/* Center — Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-[rgb(var(--muted))]">
              Navigation
            </h4>

            <div className="mt-4 flex flex-col gap-2 text-sm">
              <a href="#projects" className="hover:text-[rgb(var(--brand))] transition">
                Projects
              </a>
              <a href="#skills" className="hover:text-[rgb(var(--brand))] transition">
                Skills
              </a>
              <a href="#experience" className="hover:text-[rgb(var(--brand))] transition">
                Experience
              </a>
              <a href="#contact" className="hover:text-[rgb(var(--brand))] transition">
                Contact
              </a>
            </div>
          </div>

          {/* Right — Status + Social */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-[rgb(var(--muted))]">
              System Status
            </h4>

            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[rgb(var(--muted))]">
                  Available for opportunities
                </span>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <a
                  href="mailto:YOUR_EMAIL@gmail.com"
                  className="hover:text-[rgb(var(--brand))] transition"
                >
                  <Mail className="h-5 w-5" />
                </a>

                <a
                  href="https://github.com/YOUR_USERNAME"
                  className="hover:text-[rgb(var(--brand))] transition"
                >
                  <Github className="h-5 w-5" />
                </a>

                <a
                  href="https://linkedin.com/in/YOUR_USERNAME"
                  className="hover:text-[rgb(var(--brand))] transition"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-[rgb(var(--border))] pt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-[rgb(var(--muted))]">
          <div>
            © {new Date().getFullYear()} Dilshan Narankotuwa. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
