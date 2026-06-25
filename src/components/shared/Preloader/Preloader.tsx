import { useEffect, useRef, useState } from 'react';
import styles from './Preloader.module.css';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [showEnter, setShowEnter] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const audioPlayedRef = useRef(false);
  const progressRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Gunakan ref untuk menghindari race condition
      const currentProgress = progressRef.current;

      if (currentProgress >= 100) {
        clearInterval(interval);
        setProgress(100);
        setShowEnter(true);
        return;
      }

      // Increment progress dengan nilai random yang aman
      const increment = Math.min(Math.floor(Math.random() * 20) + 5, 100 - currentProgress);
      const newProgress = Math.min(currentProgress + increment, 100);

      progressRef.current = newProgress;
      setProgress(newProgress);

      if (newProgress >= 100) {
        clearInterval(interval);
        setShowEnter(true);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  // Fungsi aman untuk progress bar
  const getProgressBar = (value: number): string => {
    const safeValue = Math.max(0, Math.min(100, Math.round(value)));
    const filled = Math.floor(safeValue / 5);
    const empty = 20 - filled;
    return `[${'='.repeat(Math.max(0, filled))}${' '.repeat(Math.max(0, empty))}]`;
  };

  const handleEnter = () => {
    if (!audioPlayedRef.current) {
      audioPlayedRef.current = true;
      const audio = new Audio('/audio/background-music.mp3');
      audio.loop = true;
      audio.volume = 0.25;
      audio
        .play()
        .then(() => console.log('[PRELOADER] Audio started'))
        .catch((err) => console.error('[PRELOADER] Audio failed:', err));
    }

    if (containerRef.current) {
      containerRef.current.style.opacity = '0';
      containerRef.current.style.transition = 'opacity 0.5s ease';
    }
    setTimeout(onComplete, 500);
  };

  // Pastikan progress yang ditampilkan aman
  const safeProgress = Math.max(0, Math.min(100, Math.round(progress)));

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.content}>
        {/* Terminal header */}
        <div className={styles.terminal}>
          <div className={styles.terminalDots}>
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
          </div>
          <span className={styles.terminalTitle}>INITIALIZING...</span>
        </div>

        {/* Progress */}
        <div className={styles.progressLine}>
          <span className={styles.prompt}>{'>'}</span>
          <span> LOADING </span>
          <span className={styles.progressBar}>{getProgressBar(safeProgress)}</span>
          <span> {safeProgress}%</span>
        </div>

        {/* Enter button */}
        {showEnter && (
          <button className={styles.enterButton} onClick={handleEnter}>
            <span className={styles.prompt}>{'>'}</span>
            <span> PRESS ENTER TO CONTINUE</span>
            <span className={styles.cursor}>_</span>
          </button>
        )}
      </div>
    </div>
  );
}
