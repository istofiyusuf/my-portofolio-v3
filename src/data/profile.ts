import { NavigationItem, Profile, TimelineItem } from '@/types';

export const profile: Profile = {
  name: 'ISTOFI YUSUF',
  title: {
    id: 'FULLSTACK DEVELOPER & CREATIVE ENGINEER',
    en: 'FULLSTACK DEVELOPER & CREATIVE ENGINEER',
  },
  description: {
    id: 'Fullstack developer dengan keahlian dalam teknologi web modern, desain UI/UX, otomatisasi AI, dan pembuatan konten digital. Membangun pengalaman digital yang mulus dari frontend hingga backend, dengan sentuhan kreatif dalam pengeditan video, motion graphics, dan strategi media sosial.',
    en: 'Fullstack developer with expertise in modern web technologies, UI/UX design, AI automation, and digital content creation. Building seamless digital experiences from frontend to backend, with a creative edge in video editing, motion graphics, and social media strategy.',
  },
  location: 'Wonosobo, Indonesia',
  email: 'istofiyusuf@email.com',
  resumeUrl: '/resume.pdf',
};

export const navigationItems: NavigationItem[] = [
  { label: { id: 'BERANDA', en: 'HOME' }, href: '#home' },
  { label: { id: 'TENTANG', en: 'ABOUT' }, href: '#about' },
  { label: { id: 'KEAHLIAN', en: 'EXPERTISE' }, href: '#expertise' },
  { label: { id: 'PROYEK', en: 'PROJECTS' }, href: '#projects' },
  { label: { id: 'KONTAK', en: 'CONTACT' }, href: '#contact' },
];

export const timeline: TimelineItem[] = [
  {
    year: '2024 - Present',
    title: {
      id: 'Fullstack Developer & Creative Engineer',
      en: 'Fullstack Developer & Creative Engineer',
    },
    company: 'FREELANCE / REMOTE',
    description: {
      id: 'Membangun aplikasi web fullstack, alat bantu berbasis AI, dan konten digital kreatif untuk klien di seluruh dunia.',
      en: 'Building fullstack web applications, AI-powered tools, and creative digital content for clients worldwide.',
    },
  },
  {
    year: '2022 - 2024',
    title: {
      id: 'Frontend Developer & UI Designer',
      en: 'Frontend Developer & UI Designer',
    },
    company: 'DIGITAL AGENCY',
    description: {
      id: 'Merancang dan mengembangkan aplikasi web responsif dengan React, TypeScript, dan kerangka kerja CSS modern. Membuat prototipe UI/UX di Figma.',
      en: 'Designed and developed responsive web applications with React, TypeScript, and modern CSS frameworks. Created UI/UX prototypes in Figma.',
    },
  },
  {
    year: '2020 - 2022',
    title: {
      id: 'Web Developer & Content Creator',
      en: 'Web Developer & Content Creator',
    },
    company: 'FREELANCE',
    description: {
      id: 'Mengembangkan situs web dan mengelola strategi konten media sosial. Memproduksi konten video dan motion graphics untuk kampanye merek.',
      en: 'Developed websites and managed social media content strategy. Produced video content and motion graphics for brand campaigns.',
    },
  },
];
