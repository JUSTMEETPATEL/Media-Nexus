'use client';
import Image from 'next/image';
import { CardStack } from './ui/card-stack';
import { cn } from '@/lib/utils';
export function ProgramOffered() {
  return (
    <div className="h-[40rem] flex flex-col items-center justify-center w-full">
      <h1 className="mb-20 text-center text-white text-4xl">
        <span className="text-cyan-400">PROGRAM</span> OFFERED
      </h1>
      <CardStack items={CARDS} />
    </div>
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
        <h1>
          <Highlight>SHORT FILM MAKING</Highlight>
        </h1>
        This course will train the students practically in the art of
        storytelling, cinematography, directing and basic editing from a concept
        to the final cut.
        <div className="flex items-center mt-5 justify-center">
          <Image
            src="/short-film.png"
            alt="Short Film Making"
            width={100}
            height={100}
          />
        </div>
      </p>
    ),
  },
  {
    id: 1,
    name: '',
    designation: '',
    content: (
      <p>
        <h1>
          <Highlight>DIGITAL PHOTOGRAPHY</Highlight>
        </h1>
        Through real-world applications and expert guidance, they will sharpen
        their skills in film editing. Gaining practical insights into the
        creative process.
        <div className="flex items-center justify-center">
          <Image
            src="/photography.jpeg"
            alt="Digital Photography"
            width={100}
            height={100}
          />
        </div>
      </p>
    ),
  },
  {
    id: 2,
    name: '',
    designation: '',
    content: (
      <p>
        <h1>
          <Highlight>3D ANIMATION</Highlight>
        </h1>
        Master 3D animation, modeling, and motion graphics to create
        professional quality content for film and gaming.
        <div className="flex items-center mt-5 justify-center">
          <Image
            src="/3danimation.png"
            alt="3d Animation"
            width={100}
            height={100}
          />
        </div>
      </p>
    ),
  },
];
