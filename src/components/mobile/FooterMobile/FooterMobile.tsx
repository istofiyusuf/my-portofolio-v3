import { useEffect, useState } from 'react';
import {
  FiArrowUp,
  FiDribbble,
  FiGithub,
  FiLinkedin,
  FiMessageCircle,
  FiTwitter,
} from 'react-icons/fi';
import { SiDocker, SiJavascript, SiLinux, SiPython, SiReact, SiTypescript } from 'react-icons/si';
import styles from './FooterMobile.module.css';

const socials = [
  { icon: FiGithub, url: 'https://github.com/istofiyusuf', label: 'GitHub' },
  { icon: FiLinkedin, url: 'https://linkedin.com/in/istofiyusuf', label: 'LinkedIn' },
  { icon: FiTwitter, url: 'https://x.com/yusufiscr', label: 'Twitter' },
  { icon: FiDribbble, url: 'https://dribbble.com/istofiyusuf', label: 'Dribbble' },
  { icon: FiMessageCircle, url: 'https://wa.me/6281212649519', label: 'WhatsApp' },
];

// Data tech yang akan di-typing
const techStack = [
  { icon: SiReact, text: 'React' },
  { icon: SiTypescript, text: 'TypeScript' },
  { icon: SiPython, text: 'Python' },
  { icon: SiJavascript, text: 'Java' },
  { icon: SiLinux, text: 'Linux' },
  { icon: SiDocker, text: 'Docker' },
];

function TypingTech() {
  const [techIndex, setTechIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // Animasi typing + deleting + ganti tech
  useEffect(() => {
    const currentTech = techStack[techIndex];

    if (!isDeleting) {
      // Sedang mengetik
      if (displayedText.length < currentTech.text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentTech.text.slice(0, displayedText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        // Selesai mengetik, tunggu sebentar lalu hapus
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1500);
        return () => clearTimeout(timeout);
      }
    } else {
      // Sedang menghapus
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 60);
        return () => clearTimeout(timeout);
      } else {
        // Selesai menghapus, ganti tech berikutnya
        setIsDeleting(false);
        setTechIndex((prev) => (prev + 1) % techStack.length);
      }
    }
  }, [displayedText, isDeleting, techIndex]);

  // Kursor berkedip
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

export default function FooterMobile() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Brand */}
        <div className={styles.brand}>
          <span className={styles.logo}>{'{ IY }'}</span>
          <p className={styles.tagline}>Fullstack Developer & Creative Engineer</p>
        </div>

        {/* Social Icons */}
        <div className={styles.socials}>
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label={social.label}
              >
                <Icon />
              </a>
            );
          })}
        </div>

        {/* Location & Copyright */}
        <div className={styles.info}>
          <span className={styles.location}>
            <span className={styles.dot} />
            Wonosobo, Indonesia
          </span>
          <span className={styles.copyright}>&copy; {currentYear} Istofi Yusuf</span>
        </div>

        {/* Bottom Row */}
        <div className={styles.bottomRow}>
          {/* Typing Tech - menggantikan Built with passion */}
          <TypingTech />

          {/* Back to top */}
          <button className={styles.backTop} onClick={scrollToTop}>
            <FiArrowUp />
            <span>TOP</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
