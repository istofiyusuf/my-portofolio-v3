import { useEffect, useRef } from 'react';
import styles from './CursorFollower.module.css';

export default function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    // Deteksi apakah device punya mouse (pointer halus)
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasFinePointer) {
      // Sembunyikan di mobile/touch device
      cursor.style.display = 'none';
      follower.style.display = 'none';
      return;
    }

    let mouseX = 0,
      mouseY = 0;
    let curX = 0,
      curY = 0;
    let folX = 0,
      folY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      curX += (mouseX - curX) * 0.25;
      curY += (mouseY - curY) * 0.25;
      folX += (mouseX - folX) * 0.08;
      folY += (mouseY - folY) * 0.08;

      if (cursor) {
        cursor.style.transform = `translate(${curX}px, ${curY}px) translate(-50%, -50%)`;
      }
      if (follower) {
        follower.style.transform = `translate(${folX}px, ${folY}px) translate(-50%, -50%)`;
      }
      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMouseMove);
    animate();

    // Hover effect
    const onEnter = () => {
      if (follower) follower.style.borderColor = '#ffffff';
      if (cursor) cursor.style.backgroundColor = '#000000';
    };
    const onLeave = () => {
      if (follower) follower.style.borderColor = 'rgba(255,255,255,0.3)';
      if (cursor) cursor.style.backgroundColor = '#ffffff';
    };

    const els = document.querySelectorAll('a, button, [data-cursor]');
    els.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      els.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={followerRef} className={styles.follower} />
      <div ref={cursorRef} className={styles.cursor} />
    </>
  );
}
