'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

let interval: NodeJS.Timeout;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);
  const [isFlipping, setIsFlipping] = useState(true);

  useEffect(() => {
    if (isFlipping) {
      startFlipping();
    }
    return () => clearInterval(interval);
  }, [isFlipping]);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 5000);
  };

  const handleMouseEnter = () => {
    setIsFlipping(false);
    clearInterval(interval);
  };

  const handleMouseLeave = () => {
    setIsFlipping(true);
  };

  return (
    <div className="relative h-60 w-60 md:h-60 md:w-96">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute bg-black h-60 w-60 md:h-60 md:w-96 rounded-3xl p-4 shadow-xl border border-white/[0.1] shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: 'top center',
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="font-normal text-sm text-neutral-200">
              {card.content}
            </div>
            <div>
              <p className="font-medium text-white">{card.name}</p>
              <p className="font-normal text-neutral-200">{card.designation}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
