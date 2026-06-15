import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Aditya Khandelwal - Full Stack Engineer",
  author: "Aditya Khandelwal",
  description:
    "Full Stack Engineer specializing in multi-tenant SaaS platforms, real-time systems, and enterprise-scale React/Next.js/Node.js/Golang applications.",
  lang: "en",
  siteLogo: "/aditya-small.png",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Leadership", href: "#technical" },
    { text: "Awards", href: "#awards" },
    { text: "Education", href: "#education" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
    { text: "Skills", href: "#skills" },
  ],
  socialImage: "/aditya-small.png",
  canonicalURL: "https://adityakhandelwal.me",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Aditya Khandelwal",
    specialty: "Full Stack Engineer",
    location: "Pune, MH",
    summary:
      "Full Stack Engineer specializing in multi-tenant SaaS platforms, real-time systems, and enterprise-scale applications. Founding and sole frontend engineer on mvue.ai — an agentic-AI cash-flow optimization platform in production across 5 enterprise clients. Recently promoted to SDE 2 and leading a team of 3 frontend engineers at Calfus.",
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
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS 4",
        "Design Systems",
        "Architecture",
        "Team Leadership",
        "Mentorship",
      ],
      summary: [
        "Lead frontend architecture, design system, and product delivery across all 5 enterprise clients on the mvue.ai platform.",
        "Tech lead for a team of 3 frontend engineers — own sprint planning, architecture decisions, code review, and mentorship; unblock the team on auth, state, and design-system patterns established during the platform’s solo build.",
      ],
    },
    {
      company: "Calfus Inc.",
      position: "Associate Software Engineer",
      startDate: "Jan 2025",
      endDate: "Apr 2026",
      tags: [
        "Next.js (App Router)",
        "TypeScript",
        "Keycloak SSO",
        "Server-Sent Events",
        "Redux Toolkit",
        "RTK Query",
        "AG Grid Enterprise",
        "Tailwind CSS 4",
        "Radix UI Primitives",
        "Vitest + RTL",
        "Pino Logging",
        "Husky Gates",
      ],
      summary: [
        {
          label:
            "mvue.ai – Cash Flow Optimization Platform (Founding & Sole Frontend Engineer)",
          bullets: [
            "Sole frontend engineer for 1+ year — architected and built the frontend from scratch on a multi-tenant, multiapplication platform now running in production across 5 enterprise clients.",
            "Designed and shipped 31 production routes across 12+ feature modules spanning the cash-flow workflow — including AI-agent audit trails, denial management, and analytics — on Next.js (App Router) with TypeScript strict mode.",
            "Built multi-tenant Keycloak SSO with per-tenant realm resolution, vault-based credential lookup, JWT session refresh, and federated logout — isolating identity and data across all tenants.",
            "Engineered a real-time streaming UI for AI agent calls using Server-Sent Events — custom ReadableStream parser, event-driven Redux sync, and full stream lifecycle handling.",
            "Implemented role-based access control with dynamic feature flags and category-level permission assignment across 13 tenant-scoped application areas.",
            "Built 15+ enterprise data grids on AG Grid Enterprise with virtual scrolling, server-side pagination, multi-column filtering, and XLSX export — handling tens of thousands of financial records per view.",
            "Designed and shipped a custom design system of 40+ shared components and 20+ Radix-based UI primitives on Tailwind CSS 4 — the foundation every module is built on.",
            "Owned the frontend state and quality stack: 54 Redux Toolkit / RTK Query slices, structured Pino logging, Vitest + RTL with >80% test coverage, and Husky pre-commit gates.",
            "Collaborated on core system design including database schema modeling, microservices architecture, and integration patterns for agentic-AI workflows.",
            "Drove frontend performance: reduced heavy-route bundle size from ~6MB to ~2MB uncompressed (~65%) by lazy-loading AG Grid and other heavy dependencies behind route-level code splits.",
          ],
        },
        {
          label: "Background Check Platform (Enterprise Client)",
          bullets: [
            "Maintained and enhanced an enterprise background-check platform; designed, developed, and shipped a candidate adjudication module that streamlined background-verification workflows.",
          ],
        },
      ],
    },
    {
      company: "Calfus Inc.",
      position: "Software Development Intern",
      startDate: "Aug 2023",
      endDate: "Dec 2023",
      tags: [
        "React.js",
        "Golang",
        "MongoDB",
        "SQL Connect",
        "Bootstrap",
        "Git",
        "REST APIs",
      ],
      summary: [
        "Developed an Applicant Tracking System using React.js, Golang, and MongoDB that expedited HR candidate processing.",
        "Contributed to an SQL Connect Tool in React.js, improving query efficiency across multiple internal applications.",
        "Delivered front-end solutions for several in-house projects.",
      ],
    },
  ],
  technical: [
    {
      company: "Computer Society of India – VIT Student Chapter",
      position: "Projects Head",
      startDate: "Nov 2023",
      endDate: "Nov 2024",
      tags: [
        "Project Management",
        "Team Mentorship",
        "Git Workflows",
        "Open Source",
      ],
      summary: [
        "Mentored 40+ students and led flagship chapter initiatives using project management & collaboration tools, ensuring best development practices.",
        "Promoted open-source contribution through the “Fork This” workshop, mentoring participants on Git fundamentals and open-source workflows.",
      ],
    },
    {
      company: "Computer Society of India – VIT Student Chapter",
      position: "Core Member",
      startDate: "Mar 2022",
      endDate: "Nov 2023",
      tags: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "Socket.IO",
        "Discord API",
      ],
      summary: [
        "Built and deployed Discord bot “Spacey” (1,000+ users) and a laser-tag event platform (2,000+ users) with CSI Accounts authentication.",
        "Created event web pages for Discover.JS and Hackstory using React.js, Next.js, Tailwind CSS, and Framer Motion.",
      ],
    },
  ],
  awards: [
    {
      title: "Calfus Drive Dynamo Award",
      issuer: "Calfus Inc.",
      date: "April 2026",
      description:
        "Awarded for exceptional performance, ownership, and impact on the mvue.ai platform; promoted to Software Engineer II within ~16 months of joining.",
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
      name: "Multi-Device File Transfer App",
      summary:
        "Built a real-time, drag-and-drop file transfer app for cross-device sharing over WebSockets. Developed a Node.js + Socket.IO backend with device discovery, 256 KB binary chunking, and explicit transfer acceptance. Created a React + Shadcn UI frontend with device selection, progress tracking, transfer dialogs, and toast notifications.",
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
        "Shadcn UI",
        "Binary Chunking",
      ],
    },
    {
      name: "Grievances Portal",
      summary:
        "Designed and shipped a responsive grievance portal serving 10,000+ students and faculty. Implemented secure authentication with role-based access control and real-time submission/tracking workflows. Improved response times by ~50% through UX iteration; achieved 90% positive user feedback.",
      image: "/grievance.png",
      tags: ["React.js", "Authentication", "RBAC", "Workflows", "UX Iteration"],
    },
  ],
  about: {
    description: `Hi, I’m Aditya Khandelwal—a Full Stack Engineer (SDE 2) passionate about delivering scalable, high-performing web applications, robust backends, and real-time systems. I specialize in both frontend frameworks like React/Next.js and backend engineering with Node.js/Golang, with a proven track record of architecting solutions for business-critical SaaS products.

As the founding frontend engineer for mvue.ai (an agentic-AI cash-flow optimization platform), I led the frontend architecture from scratch to production across 5 enterprise clients, and now lead a team of 3 frontend engineers. I thrive on solving complex technical challenges, establishing robust quality stacks, and optimizing performance to deliver premium user experiences.`,
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
      category: "Programming Languages",
      items: [
        { name: "JavaScript", icon: "mdi:language-javascript" },
        { name: "TypeScript", icon: "mdi:language-typescript" },
        { name: "Golang", icon: "simple-icons:go" },
        { name: "Python", icon: "mdi:language-python" },
        { name: "Java", icon: "mdi:language-java" },
        { name: "C++", icon: "mdi:language-cpp" },
      ],
    },
    {
      category: "Frontend",
      items: [
        { name: "React.js", icon: "mdi:react" },
        { name: "Next.js (App Router)", icon: "simple-icons:nextdotjs" },
        { name: "Redux Toolkit", icon: "simple-icons:redux" },
        { name: "RTK Query", icon: "simple-icons:redux" },
        { name: "React Native", icon: "mdi:react" },
        { name: "Tailwind CSS", icon: "simple-icons:tailwindcss" },
        { name: "Shadcn", icon: "shadcn" },
        { name: "Radix UI", icon: "simple-icons:radixui" },
        { name: "AG Grid Enterprise", icon: "mdi:table-large" },
        { name: "Recharts", icon: "mdi:chart-line" },
        { name: "TipTap", icon: "mdi:format-text" },
        { name: "Framer Motion", icon: "simple-icons:framer" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: "mdi:nodejs" },
        { name: "Golang", icon: "simple-icons:go" },
        { name: "Express", icon: "simple-icons:express" },
        { name: "Socket.IO", icon: "socketIo" },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "MongoDB", icon: "simple-icons:mongodb" },
        { name: "SQL (PostgreSQL / MySQL)", icon: "mdi:database" },
      ],
    },
    {
      category: "Architecture",
      items: [
        { name: "RESTful APIs", icon: "mdi:api" },
        { name: "Server-Sent Events", icon: "mdi:transmission-tower" },
        { name: "WebSockets", icon: "mdi:lan-connect" },
        { name: "Microservices", icon: "mdi:cloud-braces" },
        { name: "Multi-tenant SaaS", icon: "mdi:account-group" },
        { name: "Agentic-AI integration", icon: "mdi:robot" },
        { name: "Keycloak SSO", icon: "simple-icons:keycloak" },
        { name: "RBAC", icon: "mdi:shield-account" },
      ],
    },
    {
      category: "Testing & Tooling",
      items: [
        { name: "Vitest", icon: "simple-icons:vitest" },
        { name: "React Testing Library", icon: "simple-icons:testinglibrary" },
        { name: "ESLint", icon: "simple-icons:eslint" },
        { name: "Husky", icon: "mdi:shield-check" },
        { name: "Pino", icon: "mdi:math-log" },
        { name: "Git", icon: "mdi:git" },
        { name: "Linux", icon: "mdi:linux" },
        { name: "Docker", icon: "mdi:docker" },
        { name: "AWS", icon: "simple-icons:amazonwebservices" },
        { name: "CI/CD", icon: "mdi:infinity" },
      ],
    },
  ],
};
