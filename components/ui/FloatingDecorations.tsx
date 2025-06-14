'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FloatingDecorations = () => {
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const arr = Array.from({ length: 20 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    }));
    setPositions(arr);
  }, []);

  return (
    <motion.div className="fixed inset-0 pointer-events-none z-0">
      {positions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-pink-300/30"
          style={{ left: pos.x, top: pos.y }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </motion.div>
  );
};

export default FloatingDecorations;