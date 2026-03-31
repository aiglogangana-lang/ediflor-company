import React, { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Coin {
  id: number;
  x: number;
  y: number;
  symbol: string;
  rotation: number;
  scale: number;
  duration: number;
  delay: number;
}

const CURRENCIES = ['$', '€', '£', '¥', '₣', '₹', '₩', '₪', '₫', '฿'];

const CoinBurst = () => {
  const [bursts, setBursts] = useState<{ id: number; x: number; y: number; coins: Coin[] }[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('https://assets.mixkit.co/active_storage/sfx/2019/2019-preview.mp3'); // Snappy coin sound
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, []);

  const trigger = useCallback((x: number, y: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.volume = 0.15;
      audioRef.current.play().catch(() => {});
      
      // Stop the sound after 100ms to make it even snappier
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }
      }, 100);
    }

    const id = Date.now();
    const newCoins: Coin[] = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * 300,
      y: (Math.random() - 0.5) * 300 - 100,
      symbol: CURRENCIES[Math.floor(Math.random() * CURRENCIES.length)],
      rotation: Math.random() * 360,
      scale: 0.5 + Math.random() * 1,
      duration: 0.8 + Math.random() * 0.6,
      delay: Math.random() * 0.1,
    }));

    setBursts(prev => [...prev, { id, x, y, coins: newCoins }]);

    setTimeout(() => {
      setBursts(prev => prev.filter(b => b.id !== id));
    }, 2000);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button') || target.closest('a')) {
        trigger(e.clientX, e.clientY);
      }
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [trigger]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      <AnimatePresence>
        {bursts.map(burst => (
          <div key={burst.id} style={{ position: 'absolute', left: burst.x, top: burst.y }}>
            {burst.coins.map(coin => (
              <motion.div
                key={coin.id}
                initial={{ opacity: 0, scale: 0, x: 0, y: 0, rotate: 0 }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  scale: [0, coin.scale, coin.scale, 0],
                  x: coin.x,
                  y: coin.y,
                  rotate: coin.rotation,
                }}
                transition={{
                  duration: coin.duration,
                  delay: coin.delay,
                  ease: "easeOut",
                }}
                className="absolute text-yellow-500 font-bold text-xl select-none drop-shadow-md"
                style={{ textShadow: '0 0 10px rgba(234, 179, 8, 0.5)' }}
              >
                {coin.symbol}
              </motion.div>
            ))}
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default CoinBurst;
