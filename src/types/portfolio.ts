export interface Social {
  github: string;
  linkedin: string;
  email: string;
}

export interface Profile {
  name: string;
  shortName: string;
  tagline: string;
  role: string;
  specialization: string;
  location: string;
  yearsOfExperience: string;
  bio: string;
  social: Social;
}

export interface Certification {
  name: string;
  code: string;
  issuer: string;
  year: string;
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface Skills {
  categories: SkillCategory[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  stack: string[];
  role: string;
  year: string;
  link: string;
  image: string;
  highlight: boolean;
  status?: 'in-development' | 'live' | 'archived';
}

export interface PortfolioData {
  profile: Profile;
  certifications: Certification[];
  skills: Skills;
  experience: Experience[];
  projects: Project[];
  testimonials: unknown[];
}
