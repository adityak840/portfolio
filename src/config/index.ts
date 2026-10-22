import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Aditya Khandelwal - Software Engineer",
  author: "Aditya Khandelwal",
  description:
    "Software engineer at Calfus building AI agents in Python and production-grade applications for mvue.ai, an agentic AI platform for healthcare. I built its frontend from the ground up and lead its frontend engineering. Author of Grepwise, an MCP server that gives coding assistants the real source of a project's libraries.",
  lang: "en",
  siteLogo: "/aditya-small.png",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "Leadership", href: "#technical" },
    { text: "Awards", href: "#awards" },
    { text: "Education", href: "#education" },
    { text: "About", href: "#about" },
    { text: "Skills", href: "#skills" },
  ],
  socialImage: "/og.png",
  canonicalURL: "https://adityakhandelwal.me",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Aditya Khandelwal",
    specialty: "Software Engineer · AI Agents & Full Stack",
    location: "Pune, MH",
    summary:
      "SDE 2 at Calfus, promoted twice since joining as an intern in 2023. I build AI agents in Python and develop production-grade applications for mvue.ai, an agentic AI platform for healthcare revenue cycle management (RCM). I built its frontend from the ground up and now lead its frontend engineering. I also work directly with clients, from discovery calls and demos to onboarding.",
    email: "khandelwal.aditya840@gmail.com",
    linkedin: "https://www.linkedin.com/in/khandelwaladitya-/",
    github: "https://github.com/adityak840",
  },
  experience: [
    {
      company: "Calfus Inc.",
      position: "SDE 2",
      startDate: "May 2026",
      endDate: "Present",
      tags: [
        "Python",
        "FastAPI",
        "Playwright",
        "OpenAI API",
        "Temporal",
        "PostgreSQL",
        "Redis",
        "Docker",
        "Next.js",
        "Client Onboarding",
      ],
      summary: [
        "Built a general-purpose AI browser automation service (Python, FastAPI, Playwright) that turns any authenticated portal into schema-validated JSON for agents to use. New portals need no code changes.",
        "Recipes for each portal are generated with OpenAI structured outputs and cached, so repeat runs need far fewer LLM calls and stay consistent. Over 95% of runs extract cleanly, and most failures are fixed by updating the recipe.",
        "Handles TOTP, SMS and email OTP logins. Runs on Temporal and PostgreSQL with a Redis cache, deployed with Docker.",
        "Used this service to build an insurance eligibility agent, replacing staff's manual portal-by-portal checks.",
        "Work directly with client teams: discovery calls, demos and onboarding, turning their workflow problems into requirements.",
        "Lead mvue.ai's frontend architecture. Shipped the frontend for 10 new AI agents while mentoring new engineers.",
        "Built admin tools for prompt, template and scheduler management, and implemented MFA, password policies and other security controls for SOC 2 compliance.",
      ],
    },
    {
      company: "Calfus Inc.",
      position: "Associate Software Engineer",
      startDate: "Jan 2025",
      endDate: "May 2026",
      tags: [
        "Next.js (App Router)",
        "TypeScript",
        "Keycloak SSO",
        "PostgreSQL",
        "Server-Sent Events",
        "Redux Toolkit",
        "AG Grid Enterprise",
        "Radix UI",
        "Vitest + RTL",
      ],
      summary: [
        {
          label:
            "mvue.ai: agentic AI platform for healthcare RCM (founding frontend engineer)",
          bullets: [
            "Joined as the only frontend engineer on mvue.ai and built the production frontend from scratch with Next.js (App Router) and TypeScript. It now runs in production for enterprise clients.",
            "Shipped the core product areas: AI agent audit trails, denial management, appeals, eligibility and analytics.",
            "Built multi-tenant Keycloak login with a realm per tenant, Vault-stored credentials, JWT refresh and federated logout. Designed the RBAC schema in PostgreSQL, covering roles, permissions and features.",
            "Streamed AI agent output over Server-Sent Events using a custom ReadableStream parser that feeds Redux.",
            "Cut critical-route JavaScript by 53% (1.15 MB to 0.54 MB gzipped) by lazy-loading AG Grid Enterprise and splitting code by route. LCP dropped from 1.8 s to 1.1 s and Lighthouse performance went from 91 to 97.",
            "Built a shared library of 40+ components on Radix UI, plus AG Grid Enterprise tables for large financial datasets.",
            "Kept test coverage above 80% with Vitest and React Testing Library, and set up Pino logging and Husky hooks enforced in CI.",
            "Also contributed to mvue.ai's microservices.",
          ],
        },
        {
          label: "Background verification platform (enterprise client)",
          bullets: [
            "Built candidate adjudication for a background verification platform.",
          ],
        },
      ],
    },
    {
      company: "Calfus Inc.",
      position: "Software Development Intern",
      startDate: "Aug 2023",
      endDate: "Dec 2023",
      tags: ["React.js", "Golang", "MongoDB", "REST APIs"],
      summary: [
        "Built an applicant tracking system with React, Go and MongoDB that became HR's single source of truth for hiring.",
        "Worked on SQL Connect, an internal tool for building SQL queries through a GUI, which led to cleaner queries.",
        "Ended with a full-time offer.",
      ],
    },
  ],
  technical: [
    {
      company: "Computer Society of India, VIT Student Chapter",
      position: "Projects Head",
      startDate: "Nov 2023",
      endDate: "Nov 2024",
      tags: ["Project Management", "Mentorship", "Git Workflows", "Open Source"],
      summary: [
        "Co-ran the chapter's Git workshop, which drew 300+ attendees, and mentored 40+ students on open-source workflows.",
        "Led the chapter's project teams and their development practices.",
      ],
    },
    {
      company: "Computer Society of India, VIT Student Chapter",
      position: "Core Member",
      startDate: "Mar 2022",
      endDate: "Nov 2023",
      tags: ["React.js", "Next.js", "Tailwind CSS", "Socket.IO", "Discord API"],
      summary: [
        "Built a Discord bot with 1,000+ users and a laser-tag event platform used by 2,000+ people, with CSI Accounts sign-in.",
        "Built event websites for Discover.JS and Hackstory with React, Next.js and Tailwind CSS.",
      ],
    },
  ],
  awards: [
    {
      title: "Calfus Drive Dynamo Award",
      issuer: "Calfus Inc.",
      date: "April 2026",
      description:
        "For performance, ownership and impact on the mvue.ai platform. Promoted to SDE 2 about 16 months after joining full time.",
      image: "mdi:trophy-outline",
    },
  ],
  education: [
    {
      degree: "B.Tech. Computer Science and Engineering (Specialization: IoT)",
      institution: "Vellore Institute of Technology",
      location: "Vellore, Tamil Nadu",
      date: "July 2025",
      gpa: "CGPA: 8.47 / 10",
      bullets: [],
    },
  ],
  projects: [
    {
      name: "Grepwise",
      summary:
        "An MCP server that gives coding assistants like Claude Code the real source and docs of a project's dependencies, at the exact versions in its lockfile, for Python and JavaScript/TypeScript. It resolves each package to its exact Git tag (a single package inside a monorepo, too), indexes it on first use, and answers with hybrid search (SQLite FTS5, local embeddings, symbol matches) and line-level citations. In a 56-question Claude Code benchmark it cited the right file 96% of the time vs 73% with web search, and a 45-package real-world suite checks it end to end.",
      linkSource: [
        {
          label: "Source Code",
          url: "https://github.com/adityak840/grepwise",
        },
      ],
      image: "/grepwise.svg",
      tags: [
        "Python",
        "MCP",
        "SQLite FTS5",
        "Local Embeddings",
        "tree-sitter",
        "Hybrid Search",
      ],
    },
    {
      name: "Multi-Device File Transfer App",
      summary:
        "Drag-and-drop file sharing between devices over WebSockets. The Node.js and Socket.IO backend handles device discovery and sends 256 KB binary chunks once the receiver accepts. The React and shadcn/ui frontend shows devices, transfer requests and live progress.",
      linkPreview: "https://filetransfer.adityakhandelwal.me",
      linkSource: [
        {
          label: "Frontend Code",
          url: "https://github.com/adityak840/file-transfer-frontend",
        },
        {
          label: "Backend Code",
          url: "https://github.com/adityak840/file-transfer-backend",
        },
      ],
      image: "/filetransfer.png",
      tags: [
        "React.js",
        "Node.js",
        "Socket.IO",
        "WebSockets",
        "shadcn/ui",
        "Binary Chunking",
      ],
    },
  ],
  about: {
    description: `I'm Aditya, an SDE 2 at Calfus. I joined mvue.ai as its only frontend engineer and built the product's frontend from scratch. It now runs in production for enterprise clients in healthcare revenue cycle management.

Today I build the AI side too: a Python service that lets agents log into authenticated portals and pull out structured data, the insurance eligibility agent built on it, and the client conversations that decide what gets built next. Outside work I build tools I use every day, like Grepwise, which gives coding assistants the real source code of the libraries a project depends on.`,
    image: "/aditya-big.png",
  },
  certifications: [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "June 2025",
      image: "/awsccp.png",
    },
  ],
  skills: [
    {
      category: "Languages",
      items: [
        { name: "TypeScript", icon: "mdi:language-typescript" },
        { name: "JavaScript", icon: "mdi:language-javascript" },
        { name: "Python", icon: "mdi:language-python" },
        { name: "Go (Golang)", icon: "simple-icons:go" },
        { name: "SQL", icon: "mdi:database" },
      ],
    },
    {
      category: "Backend and AI",
      items: [
        { name: "FastAPI", icon: "simple-icons:fastapi" },
        { name: "Playwright", icon: "simple-icons:playwright" },
        { name: "OpenAI API (structured outputs)", icon: "simple-icons:openai" },
        { name: "MCP", icon: "simple-icons:modelcontextprotocol" },
        { name: "Temporal", icon: "simple-icons:temporal" },
        { name: "Redis", icon: "simple-icons:redis" },
        { name: "Node.js", icon: "mdi:nodejs" },
        { name: "Express", icon: "simple-icons:express" },
        { name: "Socket.IO", icon: "socketIo" },
      ],
    },
    {
      category: "Frontend",
      items: [
        { name: "React 19", icon: "mdi:react" },
        { name: "Next.js 16", icon: "simple-icons:nextdotjs" },
        { name: "Redux Toolkit", icon: "simple-icons:redux" },
        { name: "RTK Query", icon: "simple-icons:redux" },
        { name: "Tailwind CSS 4", icon: "simple-icons:tailwindcss" },
        { name: "Radix UI", icon: "simple-icons:radixui" },
        { name: "shadcn/ui", icon: "shadcn" },
        { name: "AG Grid Enterprise", icon: "mdi:table-large" },
        { name: "Recharts", icon: "mdi:chart-line" },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "PostgreSQL", icon: "simple-icons:postgresql" },
        { name: "MongoDB", icon: "simple-icons:mongodb" },
        { name: "SQLite", icon: "simple-icons:sqlite" },
      ],
    },
    {
      category: "Architecture and Auth",
      items: [
        { name: "Multi-tenant SaaS", icon: "mdi:account-group" },
        { name: "Microservices", icon: "mdi:cloud-braces" },
        { name: "Keycloak SSO", icon: "simple-icons:keycloak" },
        { name: "RBAC", icon: "mdi:shield-account" },
        { name: "Server-Sent Events", icon: "mdi:transmission-tower" },
        { name: "WebSockets", icon: "mdi:lan-connect" },
      ],
    },
    {
      category: "Testing and Tooling",
      items: [
        { name: "Vitest", icon: "simple-icons:vitest" },
        { name: "React Testing Library", icon: "simple-icons:testinglibrary" },
        { name: "pytest", icon: "simple-icons:pytest" },
        { name: "Ruff", icon: "simple-icons:ruff" },
        { name: "mypy", icon: "mdi:language-python" },
        { name: "ESLint", icon: "simple-icons:eslint" },
        { name: "Husky", icon: "mdi:shield-check" },
        { name: "Pino", icon: "mdi:math-log" },
        { name: "Docker", icon: "mdi:docker" },
        { name: "HashiCorp Vault", icon: "simple-icons:vault" },
        { name: "CI/CD", icon: "mdi:infinity" },
        { name: "Git", icon: "mdi:git" },
      ],
    },
  ],
};
