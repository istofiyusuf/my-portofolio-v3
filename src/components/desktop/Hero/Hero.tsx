import { profile } from '@/data/profile';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styles from './Hero.module.css';

const staggerText = (text: string) => {
  return text.split('').map((char, i) => (
    <motion.span
      key={i}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: 1 + i * 0.03,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
    >
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  ));
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section id="home" ref={ref} className={styles.hero}>
      <div className={styles.container}>
        {/* Scroll indicator */}
        <motion.div
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <span className={styles.scrollText}>SCROLL</span>
          <motion.div
            className={styles.scrollLine}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>

        <div className={styles.grid}>
          {/* Kiri: Teks */}
          <motion.div className={styles.textCol} style={{ y }}>
            <p className={styles.tag}>
              {'//'} {profile.title}
            </p>
            <h1 className={styles.title}>
              <span className={styles.bracket}>{'{'}</span>
              <br />
              {staggerText(profile.name.split(' ')[0])}
              <br />
              {staggerText(profile.name.split(' ')[1])}
              <br />
              <span className={styles.bracket}>{'}'}</span>
            </h1>
            <motion.p
              className={styles.desc}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.6 }}
            >
              {profile.description}
            </motion.p>
            <motion.div
              className={styles.cta}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.3, duration: 0.6 }}
            >
              <a href="#projects" className={styles.btn}>
                {'>'} VIEW_PROJECTS()
              </a>
              <a href="#contact" className={styles.btnOutline}>
                {'>'} GET_IN_TOUCH()
              </a>
            </motion.div>
            <motion.pre
              className={styles.code}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2.6, duration: 0.6 }}
            >
              {`const dev = {
  name: "${profile.name}",
  role: "${profile.title}",
  status: "available",
  location: "${profile.location}"
};`}
            </motion.pre>
          </motion.div>

          {/* Kanan: Foto */}
          <motion.div
            className={styles.imageCol}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
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
                  <span className={styles.fallbackInitials}>
                    {profile.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                </div>
                <div className={styles.frameBorder} />
              </div>
              <motion.div
                className={styles.status}
                animate={{
                  boxShadow: ['0 0 0px #ffffff00', '0 0 20px #ffffff10', '0 0 0px #ffffff00'],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className={styles.statusDot} />
                AVAILABLE FOR WORK
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
