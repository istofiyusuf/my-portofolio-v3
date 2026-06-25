import { NavigationItem, Profile, TimelineItem } from '@/types';

export const profile: Profile = {
  name: 'ISTOFI YUSUF',
  title: 'FULLSTACK DEVELOPER & CREATIVE ENGINEER',
  description:
    'Fullstack developer with expertise in modern web technologies, UI/UX design, AI automation, and digital content creation. Building seamless digital experiences from frontend to backend, with a creative edge in video editing, motion graphics, and social media strategy.',
  location: 'Wonosobo, Indonesia',
  email: 'istofiyusuf@email.com',
  resumeUrl: '/resume.pdf',
};

export const navigationItems: NavigationItem[] = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'EXPERTISE', href: '#expertise' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'CONTACT', href: '#contact' },
];

export const timeline: TimelineItem[] = [
  {
    year: '2024 - Present',
    title: 'Fullstack Developer & Creative Engineer',
    company: 'FREELANCE / REMOTE',
    description:
      'Building fullstack web applications, AI-powered tools, and creative digital content for clients worldwide.',
  },
  {
    year: '2022 - 2024',
    title: 'Frontend Developer & UI Designer',
    company: 'DIGITAL AGENCY',
    description:
      'Designed and developed responsive web applications with React, TypeScript, and modern CSS frameworks. Created UI/UX prototypes in Figma.',
  },
  {
    year: '2020 - 2022',
    title: 'Web Developer & Content Creator',
    company: 'FREELANCE',
    description:
      'Developed websites and managed social media content strategy. Produced video content and motion graphics for brand campaigns.',
  },
];
