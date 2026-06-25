import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'zenmovie',
    title: 'ZENMOVIE',
    category: 'STREAMING PLATFORM',
    description:
      'Platform streaming anime dan donghua dengan subtitle Indonesia. Mendukung multiple server, fitur bookmark, dan riwayat tontonan.',
    longDescription:
      'Full-stack streaming platform built with Next.js and Express. Features include multi-server video sources, user authentication, watchlist, watch history, and responsive design optimized for all devices.',
    technologies: ['NEXT.JS', 'TYPESCRIPT', 'EXPRESS', 'MONGODB'],
    liveUrl: 'https://zenmovie.dpdns.org',
    githubUrl: 'https://github.com/istofiyusuf/zenmovie',
    featured: true,
    year: 2025,
    status: 'live',
    imageUrl: '/projects/zenmovie.jpg',
  },
  {
    id: 'shopverse',
    title: 'SHOPVERSE',
    category: 'E-COMMERCE',
    description:
      'Digital shop modern dengan dukungan semua metode pembayaran. Cepat, responsif, dan user-friendly seperti Shopee.',
    longDescription:
      'Full-featured e-commerce platform with multi-payment gateway integration. Features include product catalog, cart system, order tracking, and admin dashboard. Optimized for performance and conversion.',
    technologies: ['NEXT.JS', 'POSTGRESQL', 'PRISMA', 'STRIPE'],
    liveUrl: 'https://shopverse.dpdns.org',
    githubUrl: 'https://github.com/istofiyusuf/shopverse',
    featured: true,
    year: 2025,
    status: 'live',
    imageUrl: '/projects/shopverse.jpg',
  },
  {
    id: 'zenverse',
    title: 'ZENVERSE',
    category: 'WEB APPLICATION',
    description:
      'Platform download aplikasi Android gratis. Koleksi lengkap APK mod, game, dan tools dengan update berkala.',
    longDescription:
      'Application distribution platform with categorized downloads, search functionality, version tracking, and user reviews. Built for speed and easy navigation.',
    technologies: ['REACT', 'TYPESCRIPT', 'NODE.JS', 'SUPABASE'],
    liveUrl: 'https://zenversehub.vercel.app',
    githubUrl: 'https://github.com/istofiyusuf/zenverse',
    featured: true,
    year: 2025,
    status: 'live',
    imageUrl: '/projects/zenverse.jpg',
  },
  {
    id: 'ai-flow',
    title: 'AI FLOW STUDIO',
    category: 'AI AUTOMATION',
    description:
      'AI-powered workflow automation platform. Create custom AI agents, automate tasks, and integrate with popular tools.',
    longDescription:
      'No-code AI automation platform with visual workflow builder. Features include custom AI agents, task scheduling, multi-step automations, and integrations with Slack, Discord, Gmail, and more.',
    technologies: ['PYTHON', 'FASTAPI', 'REACT', 'OPENAI', 'LANGCHAIN'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    year: 2025,
    status: 'coming_soon',
    imageUrl: '/projects/aiflow.jpg',
  },
  {
    id: 'pixel-forge',
    title: 'PIXEL FORGE',
    category: 'DESIGN TOOL',
    description:
      'Browser-based design tool for creating stunning graphics. Features AI-powered background removal, templates, and collaboration.',
    longDescription:
      'Online design platform combining traditional editing tools with AI capabilities. Features include smart background removal, template library, team collaboration, and export to multiple formats.',
    technologies: ['THREE.JS', 'WEBGL', 'REACT', 'FABRIC.JS'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    year: 2025,
    status: 'coming_soon',
    imageUrl: '/projects/pixelforge.jpg',
  },
  {
    id: 'devhub',
    title: 'DEVHUB DASHBOARD',
    category: 'DEVELOPER TOOLS',
    description:
      'All-in-one developer dashboard for project management, API testing, code snippets, and deployment monitoring.',
    longDescription:
      'Comprehensive developer toolkit with project management, API client, code snippet manager, environment variable vault, deployment logs, and team collaboration features.',
    technologies: ['REACT', 'GRAPHQL', 'POSTGRESQL', 'DOCKER'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    year: 2025,
    status: 'coming_soon',
    imageUrl: '/projects/devhub.jpg',
  },
];
