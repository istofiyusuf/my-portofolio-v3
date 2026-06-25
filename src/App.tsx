import { useDeviceDetect } from '@/hooks/useDeviceDetect';
import { useGlobalClickSound } from '@/hooks/useGlobalClickSound'; // <-- TAMBAH INI
import { useState } from 'react';

// Shared Components
import CursorFollower from '@/components/shared/CursorFollower/CursorFollower';
import PageTransition from '@/components/shared/PageTransition/PageTransition';
import Preloader from '@/components/shared/Preloader/Preloader';
import ScrollProgress from '@/components/shared/ScrollProgress/ScrollProgress';
import ThreeBackground from '@/components/shared/ThreeBackground/ThreeBackground';

// Desktop Components
import About from '@/components/desktop/About/About';
import Contact from '@/components/desktop/Contact/Contact';
import Expertise from '@/components/desktop/Expertise/Expertise';
import Footer from '@/components/desktop/Footer/Footer';
import Hero from '@/components/desktop/Hero/Hero';
import Navbar from '@/components/desktop/Navbar/Navbar';
import Projects from '@/components/desktop/Projects/Projects';

// Mobile Components
import AboutMobile from '@/components/mobile/AboutMobile/AboutMobile';
import ContactMobile from '@/components/mobile/ContactMobile/ContactMobile';
import ExpertiseMobile from '@/components/mobile/ExpertiseMobile/ExpertiseMobile';
import FooterMobile from '@/components/mobile/FooterMobile/FooterMobile';
import HeroMobile from '@/components/mobile/HeroMobile/HeroMobile';
import NavbarMobile from '@/components/mobile/NavbarMobile/NavbarMobile';
import ProjectsMobile from '@/components/mobile/ProjectsMobile/ProjectsMobile';

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
      </main>
    </PageTransition>
  );
}
