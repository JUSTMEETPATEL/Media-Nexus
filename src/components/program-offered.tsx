'use client';
import Image from 'next/image';
import { CardStack } from './ui/card-stack';
import { cn } from '@/lib/utils';
export function ProgramOffered() {
  return (
    <span className="h-[40rem] flex flex-col items-center justify-center w-full">
      <span className="mb-20 text-center text-white text-4xl">
        <span className="text-cyan-400">PROGRAM</span> OFFERED
      </span>
      <CardStack items={CARDS} />
    </span>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        'font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5',
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: '',
    designation: '',
    content: (
      <p>
        <span>
          <Highlight>SHORT FILM MAKING</Highlight>
        </span>
        This course will train the students practically in the art of
        storytelling, cinematography, directing and basic editing from a concept
        to the final cut.
        <span className="md:flex md:items-center md:mt-5 md:justify-center hidden">
          <Image
            src="/short-film.png"
            alt="Short Film Making"
            width={100}
            height={100}
          />
        </span>
      </p>
    ),
  },
  {
    id: 1,
    name: '',
    designation: '',
    content: (
      <p>
        <span>
          <Highlight>DIGITAL PHOTOGRAPHY</Highlight>
        </span>
        Through real-world applications and expert guidance, they will sharpen
        their skills in film editing. Gaining practical insights into the
        creative process.
        <span className="md:flex md:items-center md:justify-center hidden">
          <Image
            src="/photography.jpeg"
            alt="Digital Photography"
            width={100}
            height={100}
          />
        </span>
      </p>
    ),
  },
  {
    id: 2,
    name: '',
    designation: '',
    content: (
      <p>
        <span>
          <Highlight>3D ANIMATION</Highlight>
        </span>
        Master 3D animation, modeling, and motion graphics to create
        professional quality content for film and gaming.
        <span className="md:flex md:items-center md:mt-5 md:justify-center hidden">
          <Image
            src="/3danimation.png"
            alt="3d Animation"
            width={100}
            height={100}
          />
        </span>
      </p>
    ),
  },
];
