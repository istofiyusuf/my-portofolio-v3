import { profile } from '@/data/profile';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './HeroMobile.module.css';

// Typing effect component
function TypingText({ text, startDelay = 0 }: { text: string; startDelay?: number }) {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= text.length) {
          setDisplayedText(text.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 80);

      return () => clearInterval(interval);
    }, startDelay * 1000);

    return () => clearTimeout(startTimeout);
  }, [text, startDelay]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <span className={styles.typingText}>
      {'{'}
      {displayedText}
      <span className={`${styles.cursor} ${showCursor ? styles.cursorVisible : ''}`}>|</span>
      {'}'}
    </span>
  );
}

export default function HeroMobile() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        {/* Foto Profil - BERSIH tanpa teks */}
        <motion.div
          className={styles.photoSection}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className={styles.imageWrapper}>
            <div className={styles.imageFrame}>
              <div className={styles.imagePlaceholder}>
                <img
                  src="/profile/profile.webp"
                  alt={profile.name}
                  className={styles.profileImage}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              <div className={styles.frameBorder} />
            </div>
            {/* Status badge */}
            <motion.div
              className={styles.status}
              animate={{
                boxShadow: ['0 0 0px #ffffff00', '0 0 15px #ffffff15', '0 0 0px #ffffff00'],
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <span className={styles.statusDot} />
              AVAILABLE FOR WORK
            </motion.div>
          </div>
        </motion.div>

        {/* Teks */}
        <div className={styles.textSection}>
          <motion.p
            className={styles.tag}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {'//'} {profile.title}
          </motion.p>

          {/* NAMA DENGAN TYPING EFFECT DI SINI */}
          <h1 className={styles.title}>
            <TypingText text={profile.name} startDelay={0.8} />
          </h1>

          <motion.p
            className={styles.desc}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            {profile.description}
          </motion.p>

          <motion.div
            className={styles.cta}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.5 }}
          >
            <a href="#projects" className={styles.btn}>
              {'>'} PROJECTS
            </a>
            <a href="#contact" className={styles.btnOutline}>
              {'>'} CONTACT
            </a>
          </motion.div>

          <motion.pre
            className={styles.code}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.1, duration: 0.5 }}
          >
            {`status: "available"
location: "${profile.location}"
email: "${profile.email}"`}
          </motion.pre>
        </div>

        {/* Swipe Up Indicator */}
        <motion.div
          className={styles.swipeIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <span className={styles.swipeText}>SWIPE UP</span>
          <motion.div
            className={styles.swipeLine}
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
}
