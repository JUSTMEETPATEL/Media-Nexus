'use client';

import { useEffect, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

interface InfiniteScrollCardsProps {
  children: React.ReactNode;
}

export function InfiniteScrollCards({ children }: InfiniteScrollCardsProps) {
  const controls = useAnimationControls();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) {
      controls.stop();
    } else {
      controls.start({
        x: '-50%',
        transition: {
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        },
      });
    }
  }, [isHovered, controls]);

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex gap-6"
        initial={{ x: '0%' }}
        animate={controls}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </motion.div>
    </div>
  );
}
