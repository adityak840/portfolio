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
  awards: AwardProps[];
  education: EducationProps[];
}

export interface AwardProps {
  title: string;
  issuer: string;
  date: string;
  description: string;
  image?: string;
}

export interface EducationProps {
  degree: string;
  institution: string;
  location: string;
  date: string;
  gpa?: string;
  bullets?: string[];
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
  tags?: string[];
}

export interface ProjectProps {
  name: string;
  summary: string;
  image: string;
  linkPreview?: string;
  linkSource?: { label: string; url: string }[];
  tags?: string[];
}

export interface AboutProps {
  description: string;
  image: string;
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}
