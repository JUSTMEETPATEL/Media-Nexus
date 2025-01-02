'use client';
import React, { useState, JSX } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
  title: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = (card: Card) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSelected(selected?.id === card.id ? null : card);
    document.body.style.overflow = selected?.id === card.id ? 'auto' : 'hidden';
  };

  const handleOutsideClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSelected(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="w-full min-h-screen  p-4 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 md:gap-6">
        {cards.map((card, i) => (
          <div
            key={i}
            className={cn(card.className, 'h-64 md:h-96 relative group')}
          >
            <motion.div
              onClick={() => handleClick(card)}
              className={cn(
                'relative overflow-hidden rounded-xl',
                selected?.id === card.id
                  ? 'fixed inset-0 m-auto z-50 h-[55vh] w-[80vw] md:w-[60vw]'
                  : 'h-full w-full'
              )}
              layoutId={`card-${card.id}`}
              onLayoutAnimationComplete={() => setIsAnimating(false)}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
              {!selected && (
                <div className="absolute inset-0 flex flex-col justify-end p-4 z-20">
                  <p className="font-bold md:text-4xl text-xl text-white">
                    {card.title}
                  </p>
                </div>
              )}

              {selected?.id === card.id && <SelectedCard selected={selected} />}
              <ImageComponent card={card} />
            </motion.div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleOutsideClick}
            className="fixed inset-0 bg-black/60 z-40"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <motion.img
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      height="500"
      width="500"
      className={cn(
        'object-cover absolute inset-0 h-full w-full transition duration-200'
      )}
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div 
      className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]"
      onClick={(e) => e.stopPropagation()}
    >
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 100,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
        className="relative px-8 pb-4 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};

