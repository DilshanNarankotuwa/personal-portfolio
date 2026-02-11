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
    {
      group: "Full-Stack",
      items: [
        { name: "React", img: "https://cdn.simpleicons.org/react/61DAFB" },
        { name: "Vite", img: "https://cdn.simpleicons.org/vite/646CFF" },
        { name: "Node.js", img: "https://cdn.simpleicons.org/nodedotjs/339933" },
        { name: "Tailwind CSS", img: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
        { name: "Framer Motion", img: "https://cdn.simpleicons.org/framer/0055FF" },
        "Component Architecture",
        "State Handling (useState, useContext)",
        "Responsive UI Design",
        "REST API Integration",
        "Dynamic UI Systems",
        "Portfolio Architecture Design"
      ]
    },
    {
      group: "Automation & Embedded",
      items: [
        { name: "Python", img: "https://cdn.simpleicons.org/python/3776AB" },
        "Python Automation",
        "Scientific Data Processing",
        "XML Tool Development",
        "Hardware–Software Integration",
        "Raspberry Pi Systems",
        "Logic-Based Automation",
        "Embedded System Experimentation",
        "Shell Scripting"
      ]
    },
    {
      group: "Data & Statistics",
      items: [
        { name: "NumPy", img: "https://cdn.simpleicons.org/numpy/013243" },
        { name: "Pandas", img: "https://cdn.simpleicons.org/pandas/150458" },
        "Exploratory Data Analysis",
        "Statistical Testing",
        "Regression Analysis",
        "RMSD Statistical Interpretation",
        "Scientific Visualization"
      ]
    },
    {
      group: "HPC & Linux",
      items: [
        { name: "Linux", img: "https://cdn.simpleicons.org/linux/FCC624" },
        { name: "Git", img: "https://cdn.simpleicons.org/git/F05032" },
        "Ubuntu",
        "HPC Cluster Usage",
        "Remote Supercomputing Environments",
        "Git Version Control"
      ]
    },
    {
      group: "CompChem & MD",
      items: [
        { name: "LAMMPS", img: "https://upload.wikimedia.org/wikipedia/commons/5/5b/LAMMPS_logo.png" },
        { name: "Quantum ESPRESSO", img: "https://www.quantum-espresso.org/wp-content/uploads/2016/02/QE-logo.png" },
        { name: "PLUMED", img: "https://www.plumed.org/wp-content/uploads/2022/11/plumed-logo.png" },
        "Molecular Docking Pipelines",
        "Ligand Optimization",
        "Molecular Dynamics Simulations",
        "Free Energy Profiling",
        "Lithium-Ion Transport Simulations",
        "ASE Workflows",
        "Structure Preparation & SDF Processing",
        "Natural Product Database Handling"
      ]
    }
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
