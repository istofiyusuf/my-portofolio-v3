import { useCallback, useEffect, useRef, useState } from 'react';

interface AudioPlayerData {
  isPlaying: boolean;
  play: () => void;
}

export function useAudioPlayer(): AudioPlayerData {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    const audio = new Audio('/audio/background-music.mp3');
    audio.loop = true;
    audio.preload = 'auto';

    // Setup Web Audio API untuk boost volume
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;

    if (AudioContextClass) {
      const ctx = new AudioContextClass();
      const gainNode = ctx.createGain();

      // BOOST VOLUME - nilai > 1 untuk amplify
      gainNode.gain.value = 2.5; // 250% volume (atur sesuai kebutuhan: 1.5, 2.0, 2.5, 3.0)

      const source = ctx.createMediaElementSource(audio);
      source.connect(gainNode);
      gainNode.connect(ctx.destination);

      audioContextRef.current = ctx;
      gainNodeRef.current = gainNode;
    }

    audio.addEventListener('canplaythrough', () => {
      console.log('[AUDIO] File loaded successfully');
    });

    audio.addEventListener('error', (e) => {
      console.error('[AUDIO] Error loading file:', e);
    });

    audio.addEventListener('play', () => {
      console.log('[AUDIO] Playing');
      setIsPlaying(true);
    });

    audio.addEventListener('pause', () => {
      setIsPlaying(false);
    });

    audio.load();
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
      audioRef.current = null;
      if (audioContextRef.current?.state !== 'closed') {
        audioContextRef.current?.close().catch(() => {});
      }
    };
  }, []);

  const play = useCallback(() => {
    const audio = audioRef.current;
    const ctx = audioContextRef.current;
    if (!audio || hasStartedRef.current) return;

    hasStartedRef.current = true;
    console.log('[AUDIO] Attempting to play...');

    // Resume AudioContext jika suspended
    const startPlay = () => {
      audio
        .play()
        .then(() => console.log('[AUDIO] Play succeeded with boosted volume'))
        .catch((err) => {
          console.error('[AUDIO] Play failed:', err.message);
          hasStartedRef.current = false;
        });
    };

    if (ctx && ctx.state === 'suspended') {
      ctx.resume().then(startPlay);
    } else {
      startPlay();
    }
  }, []);

  return { isPlaying, play };
}
