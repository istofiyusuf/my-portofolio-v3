# { ISTOFI YUSUF } — Portfolio

<div align="center">

<img src="public/profile/profile.webp" alt="Portfolio" width="120" height="120" style="border-radius: 50%; object-fit: cover; border: 2px solid #333;" />

**Fullstack Developer & Creative Engineer Portfolio**

[![Live Demo](https://img.shields.io/badge/LIVE-DEMO-black?style=for-the-badge)](https://istofiyusuf.dpdns.org)
[![GitHub](https://img.shields.io/badge/GITHUB-REPO-black?style=for-the-badge)](https://github.com/istofiyusuf/portfolio)

</div>

---

## STACK

```typescript
const stack = {
  frontend:  ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS'],
  animation: ['Framer Motion', 'GSAP', 'Three.js', 'React Three Fiber'],
  icons:     ['React Icons'],
  audio:     ['Web Audio API', 'GainNode Boost'],
  deploy:    ['Vercel'],
};
```

## FEATURES
| Feature | Description |
|---------|-------------|
| Terminal Preloader | Loading screen with terminal aesthetic and progress bar |
| Custom Cursor | Custom cursor follower with hover effects (desktop only) |
| Three.js Background | 3-layer animated background: particle grid, cyber floor, scan lines |
| Audio Visualizer | Real-time audio bars in navbar with Web Audio API boost |
| Stagger Text Reveal | Letter-by-letter text animation in Hero section |
| Flip Cards | 3D flip animation on project cards |
| Split Screen Transition | Page navigation with animated split screen effect |
| Global Click Sound | Subtle click feedback on all interactive elements |
| Scroll Progress Bar | Top bar indicating page scroll progress |
| Typing Animation | Dynamic tech stack typing animation in footer |
| WhatsApp Integration | Direct WhatsApp contact form without backend |
| Fully Responsive | Separate Desktop and Mobile layouts for every section |
| Dark Theme | Minimalist black & white monochrome design |
| Scroll Snap | Smooth scroll snapping between sections |

## SECTIONS

01. HERO        — Stagger text reveal, parallax, profile photo with frame
02. ABOUT       — Biography, info cards, experience timeline, quote
03. EXPERTISE   — 5 categories, 45+ skills with animated progress bars
04. PROJECTS    — 6 projects (3 live, 3 coming soon) with flip cards
05. CONTACT     — WhatsApp direct message form, social links, email copy
06. FOOTER      — Navigation, social links, typing tech animation

## FOLDER STRUCTURE

```bash
portfolio-cy/
├── public/
│   ├── audio/
│   │   └── background-music.mp3
│   ├── logo/
│   │   └── logo.png
│   ├── profile/
│   │   └── profile.webp
│   ├── projects/
│   │   ├── zenmovie.jpg
│   │   ├── shopverse.jpg
│   │   ├── zenverse.jpg
│   │   ├── aiflow.jpg
│   │   ├── pixelforge.jpg
│   │   └── devhub.jpg
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── desktop/        # Desktop-specific components
│   │   ├── mobile/         # Mobile-specific components
│   │   └── shared/         # Shared components
│   ├── data/               # TypeScript data files
│   ├── hooks/              # Custom React hooks
│   ├── styles/             # Global styles & variables
│   └── types/              # TypeScript type definitions
├── vercel.json
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## GETTING STARTED

```bash
# Clone repository
git clone https://github.com/istofiyusuf/portfolio.git
cd portfolio-cy

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## ENVIRONMENT

| Variable	| Description |
|-----------|-------------|
| None required |	This project runs without environment variables |

## DEPLOYMENT
Deployed on Vercel with zero configuration:

```bash
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```
[https://vercel.com/button](https://vercel.com/button)

## PERFORMANCE

| Metric | Score |
|--------|-------|
| Lighthouse Performance | 95+ |
| First Contentful Paint | < 1s |
| Time to Interactive | < 2s |
| Bundle Size (JS) | ~370 kB gzipped |
| Bundle Size (CSS) | ~9 kB gzipped |

## LICENSE

MIT © [Istofi Yusuf](https://github.com/istofiyusuf)

<div align="center">
Built with passion. Deployed with precision.

{ IY }

</div>

