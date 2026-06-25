import { useEffect, useRef } from 'react';

export function useGlobalClickSound() {
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    const playClick = () => {
      try {
        if (!audioContextRef.current) {
          const AudioContextClass =
            window.AudioContext ||
            (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
          if (AudioContextClass) {
            audioContextRef.current = new AudioContextClass();
          }
        }

        const ctx = audioContextRef.current;
        if (!ctx) return;
        if (ctx.state === 'suspended') ctx.resume();

        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(1200, now);
        osc.frequency.exponentialRampToValueAtTime(600, now + 0.05);

        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.08);
      } catch (e) {
        // Silent fail
      }
    };

    // Dengarkan SEMUA klik di document
    document.addEventListener('click', playClick);

    return () => {
      document.removeEventListener('click', playClick);
    };
  }, []);
}
