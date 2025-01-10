import { useEffect, useState, useRef, ReactNode } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

const InfiniteScrollCards = ({ children }: { children: ReactNode }) => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimationControls();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;

    if (!isHovered) {
      controls.start({
        x: [-clientWidth, -scrollWidth],
        transition: {
          x: {
            repeat: 1000000,
            repeatType: 'loop',
            duration: 100,
            ease: 'linear',
          },
        },
      });
    } else {
      controls.stop();
    }
  }, [isHovered, controls]);

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        ref={containerRef}
        className="flex gap-6"
        animate={controls}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};

export default InfiniteScrollCards;
