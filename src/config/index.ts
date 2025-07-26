import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Aditya Khandelwal - Full Stack Developer",
  author: "Aditya Khandelwal",
  description:
    "Versatile full-stack developer skilled in building scalable web applications.",
  lang: "en",
  siteLogo: "/aditya-small.png",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Certifications", href: "#certifications" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
    { text: "Technical Skills", href: "#skills" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Aditya Khandelwal",
    specialty: "Full Stack Developer",
    location: "Pune, Maharashtra",
    summary:
      "Versatile full-stack developer skilled in building scalable web applications using React.js, Next.js, Node.js, and Golang. Passionate about creating user-focused solutions, integrating modern APIs, and continuously pushing the boundaries of technical innovation.",
    email: "khandelwal.aditya840@gmail.com",
    linkedin: "https://www.linkedin.com/in/khandelwaladitya-/",
    github: "https://github.com/adityak840",
  },
  experience: [
    {
      company: "Calfus Inc.",
      position: "Associate Software Engineer",
      startDate: "Jan 2025",
      endDate: "Present",
      summary: [
        "Contributed across the full stack to two major products, focusing on both product functionality and system architecture.",
        "Enhanced and maintained a background check platform, improving the efficiency of candidate adjudication workflows.",
        "Sole UI developer for Mvue.ai, Agentic-AI Cash Flow Optimization Tool: led UI design, database schema planning, and microservices integration.",
        "Created Agentic AI-based features for automated financial insights.",
      ],
    },
    {
      company: "Calfus Inc.",
      position: "Software Development Intern",
      startDate: "Aug 2023",
      endDate: "Dec 2023",
      summary: [
        "Developed an Applicant Tracking System using React.js, Golang, and MongoDB, which expedited the processing of HR candidates.",
        "Built an SQL Connect Tool in React.js, enhancing the efficiency of SQL queries for multiple applications.",
        "Delivered front-end solutions for several in-house projects.",
      ],
    },
    {
      company: "Computer Society of India – VIT Student Chapter",
      position: "Projects Head",
      startDate: "Nov 2023",
      endDate: "Nov 2024",
      summary: [
        "Mentored 40+ students and led flagship chapter projects leveraging project management tools.",
        "Designed 'FFCS Planner' for course simulation and implemented the Laser Tag event slot selection system.",
        "Promoted open source through the 'Fork This' event and enabled single sign-on (SSO) for CSI web platforms.",
      ],
    },
    {
      company: "Computer Society of India – VIT Student Chapter",
      position: "Core Member",
      startDate: "Mar 2022",
      endDate: "Nov 2023",
      summary: [
        "Built and deployed Discord bot 'Spacey' (1,000+ users) and event web apps for chapter events.",
        "Developed laser tag event platform (2,000+ users) and managed authentication with CSI Accounts.",
        "Created event web pages for Discover.JS and Hackstory using React.js, Next.js, Tailwind CSS, Framer Motion.",
        "Supported end-to-end event organization, registration, and communication.",
      ],
    },
  ],
  projects: [
    {
      name: "Spotifu Music",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
    Hi, I’m Aditya Khandelwal—a versatile Full-Stack Developer passionate about delivering scalable, high-performing web applications. I specialize in both front-end frameworks like React.js and Next.js and robust back-end systems using Node.js and Golang, with a proven track record of architecting solutions for business-critical products.

    My experience spans building intuitive, user-friendly interfaces with Material UI and Tailwind CSS, integrating third-party APIs, and optimizing databases with MongoDB and SQL. I thrive on solving complex problems, collaborating on impactful projects, and continuously exploring new technologies to drive innovation and excellence in every project I undertake.
  `,
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
        { name: "Golang", icon: "simple-icons:go" },
        { name: "Python", icon: "mdi:language-python" },
        { name: "Java", icon: "mdi:language-java" },
        { name: "C++", icon: "mdi:language-cpp" },
        { name: "JavaScript", icon: "mdi:language-javascript" },
        { name: "TypeScript", icon: "mdi:language-typescript" },
      ],
    },
    {
      category: "Frontend",
      items: [
        { name: "React.js", icon: "mdi:react" },
        { name: "Redux", icon: "simple-icons:redux" },
        { name: "Next.js", icon: "simple-icons:nextdotjs" },
        { name: "React Native", icon: "mdi:react" },
        { name: "Material UI", icon: "mdi:palette" },
        { name: "Tailwind CSS", icon: "simple-icons:tailwindcss" },
        { name: "Shadcn", icon: "mdi:code-tags" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: "mdi:nodejs" },
        { name: "Golang", icon: "simple-icons:go" },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "MongoDB", icon: "simple-icons:mongodb" },
        { name: "SQL", icon: "mdi:database" },
      ],
    },
    {
      category: "Tools & Platforms",
      items: [
        { name: "Git", icon: "mdi:git" },
        { name: "Linux", icon: "mdi:linux" },
        { name: "Docker", icon: "mdi:docker" },
      ],
    },
    {
      category: "Other",
      items: [
        { name: "RESTful APIs", icon: "mdi:api" },
        { name: "Microservices", icon: "mdi:cloud-braces" },
      ],
    },
  ],
};
