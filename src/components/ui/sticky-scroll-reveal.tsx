/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ['start start', 'end start'],
  });
  const cardLength = content.length + 1;

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  // Light gradients (Darker Indigo, Purple, Blue variations, left to right, light to dark)
  const lightGradients = React.useMemo(
    () => [
      'linear-gradient(to right, #6d28d9, #a1a1aa)', // Indigo 600 to Gray 400
      'linear-gradient(to right, #6b21a8, #a3a3a3)', // Purple 600 to Gray 500
      'linear-gradient(to right, #2563eb, #93c5fd)', // Blue 500 to Light Blue 200
      'linear-gradient(to right, #4c1d95, #9f7aea)', // Indigo 800 to Purple 400
      'linear-gradient(to right, #7e22ce, #d4d4ff)', // Purple 700 to Light Purple 200
    ],
    []
  );

  const [backgroundGradient, setBackgroundGradient] = useState(
    lightGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(lightGradients[activeCard % lightGradients.length]);
  }, [activeCard, lightGradients]);

  return (
    <motion.div
      animate={{
        background: backgroundGradient, // Apply gradient here
      }}
      className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10"
      ref={ref}
    >
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-black"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-slate-900 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          'hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden',
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
