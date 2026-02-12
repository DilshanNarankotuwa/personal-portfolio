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
    resume: "/resume.pdf", // put resume.pdf in /public
  },

  skills: [
    {
      group: "Full-Stack",
      items: [
        {
          name: "HTML",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
        },
        {
          name: "CSS",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        },
        {
          name: "JavaScript",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        },
        {
          name: "Figma",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
        },
        {
          name: "React",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        },
        {
          name: "Vite",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
        },
        {
          name: "Node.js",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg",
        },
        {
          name: "Next.js",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "Tailwind CSS",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
          name: "Prisma",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
        },
        {
          name: "PostgreSQL",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "Express.js",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
        },
        {
          name: "Framer Motion",
          img: "https://cdn.simpleicons.org/framer/0055FF",
        },
        {
          name: "Jasmine",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jasmine/jasmine-original.svg",
        },
        {
          name: "Git",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        },
        "Component Architecture",
        "State Handling (useState, useContext)",
        "Responsive UI Design",
        "REST API Integration",
        "Dynamic UI Systems",
        "Portfolio Architecture Design",
      ],
    },
    {
      group: "Automation & Embedded",
      items: [
        {
          name: "Python",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
        },
        {
          name: "XML",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xml/xml-original.svg",
        },
        {
          name: "Raspberry Pi",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/raspberrypi/raspberrypi-original.svg",
        },
        "Python Automation",
        "Scientific Data Processing",
        "XML Tool Development",
        "Hardware–Software Integration",
        "Raspberry Pi Systems",
        "Logic-Based Automation",
        "Embedded System Experimentation",
        "Shell Scripting",
      ],
    },
    {
      group: "Data & Statistics",
      items: [
        {
          name: "NumPy",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
        },
        {
          name: "Pandas",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
        },
        {
          name: "R",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg",
        },
        "Exploratory Data Analysis",
        "Statistical Testing",
        "Regression Analysis",
        "RMSD Statistical Interpretation",
        "Scientific Visualization",
      ],
    },
    {
      group: "HPC & Linux",
      items: [
        { name: "Linux", img: "https://cdn.simpleicons.org/linux/FCC624" },
        { name: "Git", img: "https://cdn.simpleicons.org/git/F05032" },
        {
          name: "Ubuntu",
          img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original.svg",
        },
        "HPC Cluster Usage",
        "Remote Supercomputing Environments",
        "Git Version Control",
      ],
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
        "Natural Product Database Handling",
      ],
    },
  ],

  projects: [
    {
      title: "GigaHz Build Your Own PC System",
      badge: "Flagship",
      description:
        "A PC-building platform with compatibility checks (socket, RAM type, power budget) and a clean shopping-flow UI.",
      weight: 6,
      // ✅ NEW: media between description and stack
      media: {
        kind: "video",
        sources: [{ src: "/media/gigahz.mp4", type: "video/mp4" }],
        alt: "GigaHz build flow demo",
      },

      stack: ["React", "Node.js", "PostgreSQL", "Prisma"],
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
      title: "Galaxy BRIDGE Scientific Software Undergraduate Final Project",
      badge: "Research",
      description:
        "A pipeline-based project that connects tools and datasets to streamline scientific workflows and automation.",
      weight: 4,
      media: {
        kind: "video",
        sources: [{ src: "/media/galaxybridge.mp4", type: "video/mp4" }],
        alt: "Galaxy BRIDGE pipeline preview",
      },

      stack: ["Python", "Automation", "XML", "Scientific computing"],
      points: [
        "Focused on reusable tooling and automation mindset",
        "Showcases engineering + science crossover strength",
      ],
      links: [
        {
          label: "Live",
          href: "https://galaxy-compchem.ilifu.ac.za/root?tool_id=docking_tool",
        },
        {
          label: "Thesis",
          href: "/thesis/AS2020326.pdf",
          type: "paper",
          target: "_blank",
        },
      ],
    },

    {
      title: "Galaxy Pi  Portable Docker-Based Scientific Workstation",
      badge: "System Engineering",
      description:
        "A modular Raspberry Pi 5 based portable computing system designed to run the Galaxy BRIDGE Docker image for molecular docking and molecular dynamics simulations. Transforms from a standalone touchscreen tablet into a dockable laptop system.",
      weight: 5,
      media: {
        kind: "image",
        src: "/images/projects/galaxypi.png",
        alt: "Galaxy Pi portable workstation demonstration",
      },

      stack: [
        "Raspberry Pi 5",
        "Docker",
        "Linux (Raspberry Pi OS)",
        "Battery Management System",
        "Hardware Integration",
        "Containerized Workflows",
      ],

      points: [
        "Designed a portable compute system to run Dockerized Galaxy BRIDGE for docking and MD simulations",
        "Implemented 2S3P and 4S3P lithium-ion battery configurations with 3S BMS for safe power delivery",
        "Engineered 12V to 5V (5A) buck conversion for stable performance under compute load",
        "Integrated SSD HAT + 512GB SSD for improved I/O performance over SD storage",
        "Built modular dock system with 15.6” display and keyboard for laptop-style productivity",
        "Demonstrates system-level thinking across hardware, Linux, and containerized runtime environments",
      ],

      links: [
        {
          label: "Overview",
          href: "/docs/galaxypi-architecture.pdf",
          target: "_blank",
        },
        { label: "GitHub", href: "https://github.com/yourusername/galaxypi" },
      ],
    },

    {
      title: "Halox  UI/UX Design System (Figma Project)",
      badge: "UI/UX Design",
      description:
        "A modern UI/UX design project created in Figma focusing on clean layout structure, component consistency, typography hierarchy, and responsive design principles for a futuristic digital product concept.",
      weight: 2,
      media: {
        kind: "image",
        src: "/images/projects/halox.png",
        type: "image/png",
        alt: "Halox Figma design system preview",
      },

      stack: [
        "Figma",
        "UI Design",
        "Design System",
        "Wireframing",
        "Prototyping",
      ],

      points: [
        "Designed reusable component system with consistent spacing and typography hierarchy",
        "Developed color palette aligned with futuristic brand identity",
        "Created responsive layout variations for desktop and mobile",
        "Built interactive prototype to simulate real user flow",
        "Focused on clarity, minimalism, and usability-driven interface decisions",
      ],

      links: [
        {
          label: "Prototype",
          href: "https://www.figma.com/proto/5NJgnFG7TND5JWDl3En4Q6/Halox?node-id=0-1&t=FI5MSBGlSY5YtSt8-1",
          target: "_blank",
        },
      ],
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
