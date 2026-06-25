import { useCallback, useRef } from 'react';

export function useClickSound() {
  const audioContextRef = useRef<AudioContext | null>(null);

  const playClick = useCallback(() => {
    try {
      // Buat AudioContext sekali
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

      // Resume jika suspended
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const now = ctx.currentTime;

      // Oscillator untuk suara "tik" pendek
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(1200, now); // Frekuensi tinggi
      osc.frequency.exponentialRampToValueAtTime(600, now + 0.05); // Turun cepat

      gain.gain.setValueAtTime(0.15, now); // Volume
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08); // Fade out

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.08);
    } catch (e) {
      // Silent fail - jangan ganggu UX
    }
  }, []);

  return { playClick };
}
