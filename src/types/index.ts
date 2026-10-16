export type LocalizedText = string | { id: string; en: string };

export interface Profile {
  name: string;
  title: LocalizedText;
  description: LocalizedText;
  location: string;
  email: string;
  resumeUrl: string;
}

export interface Project {
  id: string;
  title: string;
  category: LocalizedText;
  description: LocalizedText;
  longDescription?: LocalizedText;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: number;
  status: 'live' | 'coming_soon';
  imageUrl?: string;
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
  title: LocalizedText;
  company: string;
  description: LocalizedText;
}

export interface NavigationItem {
  label: LocalizedText;
  href: string;
}

export type DeviceType = 'desktop' | 'mobile';
export type Language = 'id' | 'en';
