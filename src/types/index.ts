export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialImage: string;
  canonicalURL?: string;
}

export interface SiteContent {
  hero: HeroProps;
  experience: ExperienceProps[];
  technical: ExperienceProps[];
  projects: ProjectProps[];
  about: AboutProps;
  certifications: CertificationProps[];
  skills: SkillProps[];
}

export interface SkillProps {
  category: string;
  items: {
    name: string;
    icon: string;
  }[];
}

export interface CertificationProps {
  title: string;
  issuer: string;
  date: string;
  image: string;
}

export interface HeroProps {
  name: string;
  linkedin: string;
  github: string;
  location: string;
  specialty: string;
  summary: string;
  email: string;
}

export interface ExperienceNestedSummary {
  label: string;
  bullets: string[];
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | (string | ExperienceNestedSummary)[];
}

export interface ProjectProps {
  name: string;
  summary: string;
  image: string;
  linkPreview?: string;
  linkSource?: { label: string; url: string }[];
}

export interface AboutProps {
  description: string;
  image: string;
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}
