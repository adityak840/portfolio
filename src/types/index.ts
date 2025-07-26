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
  github:string;
  location: string;
  specialty: string;
  summary: string;
  email: string;
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
}

export interface ProjectProps {
  name: string;
  summary: string;
  image: string;
  linkPreview?: string;
  linkSource?: string;
}

export interface AboutProps {
  description: string;
  image: string;
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}
