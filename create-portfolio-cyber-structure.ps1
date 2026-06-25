$folders = @(
  "public/fonts",
  "src/assets/images",
  "src/components/desktop/Navbar",
  "src/components/desktop/Hero",
  "src/components/desktop/Projects",
  "src/components/desktop/About",
  "src/components/desktop/Contact",
  "src/components/desktop/Footer",
  "src/components/mobile/NavbarMobile",
  "src/components/mobile/HeroMobile",
  "src/components/mobile/ProjectsMobile",
  "src/components/mobile/AboutMobile",
  "src/components/mobile/ContactMobile",
  "src/components/mobile/FooterMobile",
  "src/components/shared/ThreeBackground",
  "src/components/shared/CursorFollower",
  "src/components/shared/SectionTransition",
  "src/components/shared/Preloader",
  "src/data",
  "src/hooks",
  "src/types",
  "src/styles"
)

$files = @(
  "src/data/profile.ts",
  "src/data/projects.ts",
  "src/data/skills.ts",
  "src/data/social.ts",
  "src/hooks/useDeviceDetect.ts",
  "src/hooks/useScrollProgress.ts",
  "src/hooks/useMediaQuery.ts",
  "src/types/index.ts",
  "src/styles/globals.css",
  "src/styles/variables.css",
  "src/App.tsx",
  "src/App.module.css",
  "src/main.tsx",
  "index.html",
  "package.json",
  "tsconfig.json",
  "tsconfig.node.json",
  "vite.config.ts",
  "README.md",
  "src/components/desktop/Navbar/Navbar.tsx",
  "src/components/desktop/Navbar/Navbar.module.css",
  "src/components/desktop/Hero/Hero.tsx",
  "src/components/desktop/Hero/Hero.module.css",
  "src/components/desktop/Projects/Projects.tsx",
  "src/components/desktop/Projects/Projects.module.css",
  "src/components/desktop/About/About.tsx",
  "src/components/desktop/About/About.module.css",
  "src/components/desktop/Contact/Contact.tsx",
  "src/components/desktop/Contact/Contact.module.css",
  "src/components/desktop/Footer/Footer.tsx",
  "src/components/desktop/Footer/Footer.module.css",
  "src/components/mobile/NavbarMobile/NavbarMobile.tsx",
  "src/components/mobile/NavbarMobile/NavbarMobile.module.css",
  "src/components/mobile/HeroMobile/HeroMobile.tsx",
  "src/components/mobile/HeroMobile/HeroMobile.module.css",
  "src/components/mobile/ProjectsMobile/ProjectsMobile.tsx",
  "src/components/mobile/ProjectsMobile/ProjectsMobile.module.css",
  "src/components/mobile/AboutMobile/AboutMobile.tsx",
  "src/components/mobile/AboutMobile/AboutMobile.module.css",
  "src/components/mobile/ContactMobile/ContactMobile.tsx",
  "src/components/mobile/ContactMobile/ContactMobile.module.css",
  "src/components/mobile/FooterMobile/FooterMobile.tsx",
  "src/components/mobile/FooterMobile/FooterMobile.module.css",
  "src/components/shared/ThreeBackground/ThreeBackground.tsx",
  "src/components/shared/ThreeBackground/ThreeBackground.module.css",
  "src/components/shared/CursorFollower/CursorFollower.tsx",
  "src/components/shared/CursorFollower/CursorFollower.module.css",
  "src/components/shared/SectionTransition/SectionTransition.tsx",
  "src/components/shared/SectionTransition/SectionTransition.module.css",
  "src/components/shared/Preloader/Preloader.tsx",
  "src/components/shared/Preloader/Preloader.module.css"
)

foreach ($folder in $folders) {
  New-Item -ItemType Directory -Force -Path $folder | Out-Null
}

foreach ($file in $files) {
  $dir = Split-Path $file -Parent
  if ($dir -and -not (Test-Path $dir)) {
    New-Item -ItemType Directory -Force -Path $dir | Out-Null
  }
  if (-not (Test-Path $file)) {
    New-Item -ItemType File -Force -Path $file | Out-Null
  }
}
