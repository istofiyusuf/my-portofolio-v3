import { navigationItems } from '@/data/profile';
import { socialLinks } from '@/data/social';
import { useEffect, useState } from 'react';
import {
  FiArrowUp,
  FiDribbble,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMessageCircle,
  FiTwitter,
} from 'react-icons/fi';
import { SiDocker, SiLinux, SiNodedotjs, SiPython, SiReact, SiTypescript } from 'react-icons/si';
import styles from './Footer.module.css';

const iconMap: Record<string, React.ComponentType> = {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiDribbble,
  FiMail,
  FiMessageCircle,
};

// Tech stack untuk animasi typing
const techStack = [
  { icon: SiReact, text: 'React' },
  { icon: SiTypescript, text: 'TypeScript' },
  { icon: SiPython, text: 'Python' },
  { icon: SiNodedotjs, text: 'Node.js' },
  { icon: SiLinux, text: 'Linux' },
  { icon: SiDocker, text: 'Docker' },
];

function TypingTech() {
  const [techIndex, setTechIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentTech = techStack[techIndex];

    if (!isDeleting) {
      if (displayedText.length < currentTech.text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentTech.text.slice(0, displayedText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1500);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 60);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setTechIndex((prev) => (prev + 1) % techStack.length);
      }
    }
  }, [displayedText, isDeleting, techIndex]);

  useEffect(() => {
    const blink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 400);
    return () => clearInterval(blink);
  }, []);

  const CurrentIcon = techStack[techIndex].icon;

  return (
    <div className={styles.typingTech}>
      <CurrentIcon className={styles.techIcon} />
      <span className={styles.typingText}>
        {displayedText}
        <span className={`${styles.cursor} ${showCursor ? styles.cursorVisible : ''}`}>|</span>
      </span>
    </div>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top Section */}
        <div className={styles.top}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <a href="#home" className={styles.logo}>
              <span className={styles.bracket}>{'{'}</span>
              <span className={styles.logoText}>IY</span>
              <span className={styles.bracket}>{'}'}</span>
            </a>
            <p className={styles.tagline}>
              Fullstack Developer & Creative Engineer based in{' '}
              <span className={styles.highlight}>Indonesia</span>. Building digital experiences that
              matter.
            </p>
            <div className={styles.location}>
              <span className={styles.locationDot} />
              <span>Wonosobo, Indonesia</span>
            </div>
          </div>

          {/* Navigation Column */}
          <div className={styles.navCol}>
            <h4 className={styles.colTitle}>
              <span className={styles.colNumber}>01.</span>
              NAVIGATION
            </h4>
            <div className={styles.navList}>
              {navigationItems.map((item) => (
                <a key={item.href} href={item.href} className={styles.navLink}>
                  <span className={styles.navArrow}>{'->'}</span>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Column */}
          <div className={styles.socialCol}>
            <h4 className={styles.colTitle}>
              <span className={styles.colNumber}>02.</span>
              CONNECT
            </h4>
            <div className={styles.socialList}>
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon] || FiGithub;
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    <span className={styles.socialIcon}>
                      <Icon />
                    </span>
                    <div>
                      <span className={styles.socialPlatform}>{link.platform}</span>
                      <span className={styles.socialUsername}>{link.username}</span>
                    </div>
                    <span className={styles.socialArrow}>{'->'}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quote Column */}
          <div className={styles.quoteCol}>
            <div className={styles.quoteBox}>
              <span className={styles.quoteMark}>"</span>
              <p className={styles.quoteText}>
                Every great digital experience starts with a single line of code and a bold vision.
              </p>
              <div className={styles.quoteLine} />
            </div>
            <button className={styles.scrollTop} onClick={scrollToTop}>
              <FiArrowUp />
              <span>BACK TO TOP</span>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider}>
          <div className={styles.dividerLine} />
          <div className={styles.dividerDot} />
          <div className={styles.dividerLine} />
        </div>

        {/* Bottom Section */}
        <div className={styles.bottom}>
          <div className={styles.bottomLeft}>
            <span className={styles.copyright}>
              &copy; {currentYear} Istofi Yusuf. All rights reserved.
            </span>
          </div>
          <div className={styles.bottomCenter}>
            {/* GANTI: Typing tech animasi */}
            <TypingTech />
          </div>
          <div className={styles.bottomRight}>
            <span className={styles.basedIn}>
              BASED IN <span className={styles.highlight}>INDONESIA</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
