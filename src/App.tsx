import { useDeviceDetect } from '@/hooks/useDeviceDetect';
import { useGlobalClickSound } from '@/hooks/useGlobalClickSound'; // <-- TAMBAH INI
import React, { useState, Suspense } from 'react';

// Shared Components
import CursorFollower from '@/components/shared/CursorFollower/CursorFollower';
import ErrorBoundary from '@/components/shared/ErrorBoundary/ErrorBoundary'; // Import ErrorBoundary
import PageTransition from '@/components/shared/PageTransition/PageTransition';
import Preloader from '@/components/shared/Preloader/Preloader';
import ScrollProgress from '@/components/shared/ScrollProgress/ScrollProgress';
import ThreeBackground from '@/components/shared/ThreeBackground/ThreeBackground';

// Static Imports for Navigation (A11y & PageTransition stability)
import Navbar from '@/components/desktop/Navbar/Navbar';
import NavbarMobile from '@/components/mobile/NavbarMobile/NavbarMobile';

// Desktop Components (Lazy Loaded)
const About = React.lazy(() => import('@/components/desktop/About/About'));
const Contact = React.lazy(() => import('@/components/desktop/Contact/Contact'));
const Expertise = React.lazy(() => import('@/components/desktop/Expertise/Expertise'));
const Footer = React.lazy(() => import('@/components/desktop/Footer/Footer'));
const Hero = React.lazy(() => import('@/components/desktop/Hero/Hero'));
const Projects = React.lazy(() => import('@/components/desktop/Projects/Projects'));

// Mobile Components (Lazy Loaded)
const AboutMobile = React.lazy(() => import('@/components/mobile/AboutMobile/AboutMobile'));
const ContactMobile = React.lazy(() => import('@/components/mobile/ContactMobile/ContactMobile'));
const ExpertiseMobile = React.lazy(() => import('@/components/mobile/ExpertiseMobile/ExpertiseMobile'));
const FooterMobile = React.lazy(() => import('@/components/mobile/FooterMobile/FooterMobile'));
const HeroMobile = React.lazy(() => import('@/components/mobile/HeroMobile/HeroMobile'));
const ProjectsMobile = React.lazy(() => import('@/components/mobile/ProjectsMobile/ProjectsMobile'));

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const deviceType = useDeviceDetect();

  // GLOBAL CLICK SOUND - satu baris untuk semua klik
  useGlobalClickSound();

  if (isLoading) {
    return <Preloader onComplete={() => setIsLoading(false)} />;
  }

  return (
    <PageTransition>
      <CursorFollower />
      <ScrollProgress />
      <ThreeBackground />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <ErrorBoundary>
          <Suspense fallback={null}>
            {deviceType === 'desktop' ? (
              <>
                <Navbar />
                <Hero />
                <About />
                <Expertise />
                <Projects />
                <Contact />
                <Footer />
              </>
            ) : (
              <>
                <NavbarMobile />
                <HeroMobile />
                <AboutMobile />
                <ExpertiseMobile />
                <ProjectsMobile />
                <ContactMobile />
                <FooterMobile />
              </>
            )}
          </Suspense>
        </ErrorBoundary>
      </main>
    </PageTransition>
  );
}
