export interface Profile {
  name: string;
  title: string;
  description: string;
  location: string;
  email: string;
  resumeUrl: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: number;
  status: 'live' | 'coming_soon';
  imageUrl?: string; // <-- Tambah ini
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  username?: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export type DeviceType = 'desktop' | 'mobile';
