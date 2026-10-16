import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import styles from './PageTransition.module.css';
import { useLanguage } from '@/hooks/LanguageContext';
import { navigationItems } from '@/data/profile';

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetSection, setTargetSection] = useState<string | null>(null);
  const { t } = useLanguage();

  // Fungsi untuk handle klik navigasi dengan animasi
  const navigateTo = useCallback(
    (href: string, e: Event) => {
      e.preventDefault();

      if (isTransitioning) return;

      setIsTransitioning(true);
      setTargetSection(href);

      // Tunggu animasi selesai, lalu scroll
      setTimeout(() => {
        const section = document.querySelector(href);
        if (section) {
          section.scrollIntoView({ behavior: 'instant' });
        }

        // Tutup animasi
        setTimeout(() => {
          setIsTransitioning(false);
          setTargetSection(null);
        }, 500);
      }, 600);
    },
    [isTransitioning]
  );

  // Attach event listener ke semua link navigasi
  useEffect(() => {
    const handleClick = (e: Event) => {
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
      if (href && href !== '#') {
        navigateTo(href, e);
      }
    };

    const attachListeners = () => {
      const navLinks = document.querySelectorAll('a[href^="#"]');
      navLinks.forEach((link) => {
        link.removeEventListener('click', handleClick);
        link.addEventListener('click', handleClick);
      });
    };

    // Initial attach
    attachListeners();

    // Observe changes for lazy loaded components
    const observer = new MutationObserver(() => {
      attachListeners();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      const navLinks = document.querySelectorAll('a[href^="#"]');
      navLinks.forEach((link) => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, [navigateTo]);

  return (
    <>
      {children}

      <AnimatePresence>
        {isTransitioning && (
          <div className={styles.overlay}>
            {/* Panel kiri */}
            <motion.div
              className={styles.panelLeft}
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.5, ease: [0.7, 0, 0.3, 1] }}
            >
              <div className={styles.panelContent}>
                <span className={styles.panelBracket}>{'{'}</span>
              </div>
            </motion.div>

            {/* Panel kanan */}
            <motion.div
              className={styles.panelRight}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.5, ease: [0.7, 0, 0.3, 1] }}
            >
              <div className={styles.panelContent}>
                <span className={styles.panelBracket}>{'}'}</span>
              </div>
            </motion.div>

            {/* Teks tengah */}
            <motion.div
              className={styles.centerText}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: 0.15 }}
            >
              <span className={styles.navLabel}>
                {(() => {
                  const item = navigationItems.find((i) => i.href === targetSection);
                  return item
                    ? t(item.label).toUpperCase()
                    : targetSection?.replace('#', '').toUpperCase();
                })()}
              </span>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
