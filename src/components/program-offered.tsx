'use client';

import { CardStack } from './ui/card-stack';
import { cn } from '@/lib/utils';
import { Film, Camera, Pencil, BookOpen, CuboidIcon as Cube } from 'lucide-react';

const mediaNexus = {
  courses: [
    {
      title: "Short Film Making",
      description: "This course introduces students to the art of crafting compelling narratives and mastering visual storytelling. From scripting to filming and post-production, participants will gain a holistic understanding of short film creation."
    },
    {
      title: "Photography",
      description: "Designed for those passionate about capturing moments, this course delves into both the technical and artistic aspects of photography. Students will learn to use cameras effectively, understand lighting, and develop their unique creative vision."
    },
    {
      title: "Editing Techniques",
      description: "This course focuses on video editing, teaching students how to assemble footage, apply effects, and create seamless transitions to produce professional-quality videos."
    },
    {
      title: "Social Media Design",
      description: "In today's digital age, the ability to create engaging content for social platforms is invaluable. This course covers the essentials of graphic design, content strategy, and platform-specific techniques to help students excel in the realm of social media."
    },
    {
      title: "3D Animation",
      description: "For those interested in bringing ideas to life, this course introduces the fundamentals of 3D animation, including modeling, texturing, and rendering."
    }
  ],
};

export function ProgramOffered() {
  return (
    <span className="h-[40rem] flex flex-col items-center justify-center w-full">
      <span className="mb-32 text-center text-black text-5xl font-semibold ">
        <span className="text-cyan-600">PROGRAM</span> OFFERED
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
        'font-bold bg-emerald-700/[0.2] text-emerald-500 px-1 py-0.5',
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = mediaNexus.courses.map((course, index) => ({
  id: index,
  name: '',
  designation: '',
  content: (
    <p className="flex flex-col items-center">
      <span>
        <Highlight>{course.title.toUpperCase()}</Highlight>
      </span>
      <span className="mt-2 text-center">{course.description}</span>
      <span className="mt-5 flex items-center justify-center">
        {getCourseIcon(course.title)}
      </span>
    </p>
  ),
}));

function getCourseIcon(title: string) {
  const iconProps = { className: "w-16 h-16 text-cyan-600" };
  switch (title) {
    case "Short Film Making":
      return <Film {...iconProps} />;
    case "Photography":
      return <Camera {...iconProps} />;
    case "Editing Techniques":
      return <Pencil {...iconProps} />;
    case "Social Media Design":
      return <BookOpen {...iconProps} />;
    case "3D Animation":
      return <Cube {...iconProps} />;
    default:
      return null;
  }
}

