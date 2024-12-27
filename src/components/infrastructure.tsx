'use client';
import React from 'react';
import { StickyScroll } from './ui/sticky-scroll-reveal';
import Image from 'next/image';

const content = [
  {
    title: 'VISUAL STUDIO',
    description:
      'The green screen studio enables students to create dynamic content, explore visual effects, and master storytelling.',
    content: (
      <div className="h-full w-full flex items-center justify-center text-black">
        <Image
          src="/visualstudio.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-lg"
          alt="visual studio demo"
        />
      </div>
    ),
  },
  {
    title: 'DIGITAL STUDIO',
    description:
      'The photography studio provides professional equipment and lighting for hands-on learning in various photography projects.',
    content: (
      <div className="h-full w-full flex items-center justify-center text-black">
        <Image
          src="/digitalstudio.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-lg"
          alt="Digital Studio demo"
        />
      </div>
    ),
  },
  {
    title: 'ANIMATION LAB',
    description:
      'The animation lab offers advanced tools for 2D/3D creation, fostering storytelling, design, and visual effects.',
    content: (
      <div className="h-full w-full flex items-center justify-center text-black">
        <Image
          src="/animationlab.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-lg"
          alt="Animation Lab demo"
        />
      </div>
    ),
  },
];

export function Infrastructure() {
  return (
    <div className="p-4 sm:p-10">
      <h1 className='mb-8 sm:mb-14 text-center font-bold text-3xl sm:text-5xl'>Infrastructure</h1>
      <StickyScroll content={content} />
    </div>
  );
}

