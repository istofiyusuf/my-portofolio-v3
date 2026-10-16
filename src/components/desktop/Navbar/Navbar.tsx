import HeaderAudio from '@/components/shared/HeaderAudio/HeaderAudio';
import { navigationItems } from '@/data/profile';
import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import { useLanguage } from '@/hooks/LanguageContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navigationItems.map((item) => document.querySelector(item.href));
      const scrollPos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement;
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navigationItems[i].href);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} role="navigation">
      <div className={styles.container}>
        <a href="#home" className={styles.logo} aria-label="Home">
          {/* Logo Image */}
          <img src="/logo/logo.png" alt="Logo" className={styles.logoImage} />
          <span className={styles.logoText}>{'>'} ISTOFI_YUSUF</span>
        </a>
        <div className={styles.audioSection}>
          <HeaderAudio />
        </div>
        <div className={styles.navLinks}>
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`${styles.navLink} ${activeSection === item.href ? styles.active : ''}`}
              aria-current={activeSection === item.href ? 'page' : undefined}
            >
              {t(item.label)}
            </a>
          ))}
          <div className={styles.langSwitch}>
            <button
              onClick={() => setLanguage('id')}
              className={`${styles.langBtn} ${language === 'id' ? styles.activeLang : ''}`}
            >
              ID
            </button>
            <span className={styles.langDivider}>/</span>
            <button
              onClick={() => setLanguage('en')}
              className={`${styles.langBtn} ${language === 'en' ? styles.activeLang : ''}`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
