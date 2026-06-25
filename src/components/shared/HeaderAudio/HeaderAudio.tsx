import { useEffect, useRef, useState } from 'react';
import styles from './HeaderAudio.module.css';

export default function HeaderAudio() {
  const [bars, setBars] = useState<number[]>(Array(20).fill(3));
  const animRef = useRef<number>(0);

  useEffect(() => {
    const animate = () => {
      setBars(Array.from({ length: 20 }, () => Math.max(3, Math.random() * 25)));
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <div className={styles.container}>
      <span className={styles.label}>NOW PLAYING</span>
      <div className={styles.bars}>
        {bars.map((h, i) => (
          <div key={i} className={styles.bar} style={{ height: `${h}px` }} />
        ))}
      </div>
    </div>
  );
}
