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
        { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"},
        { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"},
        { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"},
        { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"},
        { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},
        { name: "Vite", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
        { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" },
        { name: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"},
        { name: "Tailwind CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Prisma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg"},
        { name: "PostgreSQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"},
        { name: "Express.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"},
        { name: "Framer Motion", img: "https://cdn.simpleicons.org/framer/0055FF" },
        { name: "Jasmine", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jasmine/jasmine-original.svg"},
        { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"},
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
        { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "XML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xml/xml-original.svg" },
        { name: "Raspberry Pi", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/raspberrypi/raspberrypi-original.svg"},
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
        { name: "Ubuntu", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original.svg"},
        "HPC Cluster Usage",
        "Remote Supercomputing Environments",
        "Git Version Control"
      ]
    },
    {
      group: "CompChem & MD",
      items: [
        "Python",
         "LAMMPS", 
        "Quantum ESPRESSO",
         "PLUMED", 
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
