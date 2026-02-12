import React from "react";
import { site } from "../data/siteData.js";

export default function Footer() {
  return (
    <footer className="border-t border-[rgb(var(--border))] py-10">
      <div className="container-pad flex flex-wrap items-center justify-between gap-3">
        <div className="text-sm text-[rgb(var(--muted))]">
          © {new Date().getFullYear()} {site.name}. 
        </div>
        <div className="text-sm text-[rgb(var(--muted))]">
          Designed as a <span className="text-[rgb(var(--fg))]">system</span>, not a template.
        </div>
      </div>
    </footer>
  );
}
