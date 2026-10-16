import HeaderAudio from '@/components/shared/HeaderAudio/HeaderAudio';
import { navigationItems } from '@/data/profile';
import { useClickSound } from '@/hooks/useClickSound';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './NavbarMobile.module.css';
import { useLanguage } from '@/hooks/LanguageContext';

export default function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [transitionTarget, setTransitionTarget] = useState<string | null>(null);
  const { playClick } = useClickSound();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();

    // PLAY CLICK SOUND
    playClick();

    setIsOpen(false);
    setTransitionTarget(href);

    setTimeout(() => {
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: 'instant' });
      }
    }, 500);

    setTimeout(() => {
      setTransitionTarget(null);
    }, 900);
  };

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} role="navigation">
        <div className={styles.container}>
          <a href="#home" className={styles.logo} aria-label="Home">
            <img src="/logo/logo.png" alt="Logo" className={styles.logoImage} />
          </a>
          <div className={styles.audioSection}>
            <HeaderAudio showDot={false} />
          </div>
          <button
            className={styles.menuBtn}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            [{isOpen ? 'X' : '='}]
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.menu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className={styles.menuContent}>
              <motion.div
                className={styles.menuLogo}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
              >
                <img src="/logo/logo.png" alt="Logo" className={styles.menuLogoImage} />
              </motion.div>

              <div className={styles.menuDivider} />

              {navigationItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className={styles.menuLink}
                  onClick={(e) => handleNavClick(e, item.href)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                >
                  <span className={styles.menuNumber}>0{i + 1}.</span>
                  {t(item.label)}
                </motion.a>
              ))}

              <motion.div
                className={styles.mobileLangSwitch}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 + navigationItems.length * 0.08 }}
              >
                <button
                  onClick={() => {
                    playClick();
                    setLanguage('id');
                  }}
                  className={`${styles.langBtn} ${language === 'id' ? styles.activeLang : ''}`}
                >
                  ID
                </button>
                <span className={styles.langDivider}>/</span>
                <button
                  onClick={() => {
                    playClick();
                    setLanguage('en');
                  }}
                  className={`${styles.langBtn} ${language === 'en' ? styles.activeLang : ''}`}
                >
                  EN
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {transitionTarget && (
          <div className={styles.transitionOverlay}>
            <motion.div
              className={styles.panelLeft}
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.4, ease: [0.7, 0, 0.3, 1] }}
            >
              <span className={styles.panelBracket} aria-hidden="true">{'{'}</span>
            </motion.div>

            <motion.div
              className={styles.panelRight}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.7, 0, 0.3, 1] }}
            >
              <span className={styles.panelBracket} aria-hidden="true">{'}'}</span>
            </motion.div>

            <motion.div
              className={styles.centerText}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.25, delay: 0.1 }}
            >
              <span className={styles.navLabel}>
                {transitionTarget?.replace('#', '').toUpperCase()}
              </span>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
