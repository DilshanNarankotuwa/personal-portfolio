export const site = {
  name: "Dilshan Narankotuwa",
  role: "Full-Stack Developer • Systems Builder",
  location: "Sri Lanka",
  tagline:
    "Science → Software. I build real systems with clean UI, solid backend logic, and strong engineering thinking.",

  links: {
    github: "https://github.com/YOUR_USERNAME",
    linkedin: "https://linkedin.com/in/YOUR_USERNAME",
    email: "mailto:YOUR_EMAIL@gmail.com",
    resume: "/resume.pdf" // put resume.pdf in /public
  },

  highlights: [
    "Built GigaHz: Build-Your-Own-PC system with compatibility logic",
    "Backend APIs + PostgreSQL + Prisma workflows",
    "Strong Linux/Ubuntu and HPC simulation experience (science → tech edge)",
  ],

  skills: [
    { group: "Frontend", items: ["React", "Vite", "Tailwind v4", "UI Systems", "Framer Motion"] },
    { group: "Backend", items: ["Node.js", "Express", "REST APIs", "Prisma", "Auth basics"] },
    { group: "Data", items: ["PostgreSQL", "Schema design", "Query thinking", "Validation"] },
    { group: "Dev", items: ["Git/GitHub", "Linux", "Deployment", "Debugging"] },
    { group: "Science Edge", items: ["Computational chemistry", "MD/DFT familiarity", "HPC environments"] },
  ],

  projects: [
    {
      title: "GigaHz — Build Your Own PC System",
      badge: "Flagship",
      description:
        "A PC-building platform with compatibility checks (socket, RAM type, power budget) and a clean shopping-flow UI.",
      stack: ["React", "Node.js", "PostgreSQL", "Prisma", "Vercel/Render"],
      points: [
        "Compatibility logic that prevents invalid builds",
        "Structured API routes and product filtering",
        "Designed as both a shop and a portfolio-grade system",
      ],
      links: [
        { label: "GitHub", href: "https://github.com/YOUR_USERNAME/gigahz" },
        { label: "Live", href: "https://YOUR_DEPLOYED_URL" },
      ],
    },
    {
      title: "Galaxy BRIDGE — Undergraduate Final Project",
      badge: "Research",
      description:
        "A pipeline-based project that connects tools and datasets to streamline scientific workflows and automation.",
      stack: ["Python", "Automation", "Scientific computing"],
      points: [
        "Focused on reusable tooling and automation mindset",
        "Showcases engineering + science crossover strength",
      ],
      links: [{ label: "GitHub", href: "https://github.com/YOUR_USERNAME/galaxy-bridge" }],
    },
  ],

  experience: [
    {
      title: "Full-Stack Projects (Self-Directed)",
      meta: "2025 → Present",
      details: [
        "Built full-stack systems with real constraints (data models, APIs, UI).",
        "Focused on production-style structure: clean code, reusable components, deployability.",
      ],
    },
    {
      title: "Science Background (Chemistry Honours)",
      meta: "2021 → 2025",
      details: [
        "Strong analytical thinking and research discipline.",
        "Comfortable with Linux environments and technical workflows.",
      ],
    },
  ],
};
