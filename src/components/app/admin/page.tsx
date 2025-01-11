'use client';

import React, { useState, useEffect } from 'react';
import { authClient, useSession } from '@/lib/auth-client';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Film,
  Camera,
  Video,
  Share2,
  CuboidIcon as Cube,
  Mail,
} from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Loader } from '@/components/ui/loader';
import { Button } from '@/components/ui/button';
import { redirect } from 'next/navigation';

const programs = [
  {
    id: 1,
    icon: Cube,
    title: '3D ANIMATION',
    description:
      'Master 3D animation, modeling, and motion graphics to create professional-quality content for film and gaming.',
    backgroundImage: '/3d-animation.jpeg?height=400&width=600',
  },
  {
    id: 2,
    icon: Film,
    title: 'SHORT FILM MAKING',
    description:
      'This course will train the students practically in the art of storytelling, cinematography, directing and basic editing from a concept to the final cut.',
    backgroundImage: '/film.jpeg?height=400&width=600',
  },
  {
    id: 3,
    icon: Camera,
    title: 'DIGITAL PHOTOGRAPHY',
    description:
      'Through real-world applications and expert guidance, they will sharpen their skills in film editing, gaining practical insights into the creative process.',
    backgroundImage: '/digital-photography.jpeg?height=400&width=600',
  },
  {
    id: 4,
    icon: Video,
    title: 'EDITING TECHNIQUES',
    description:
      "The certificate course will explore film director's editing techniques and their collaboration with Industry trained experts, offering insights into the creative process.",
    backgroundImage: '/editing.jpg?height=400&width=600',
  },
  {
    id: 5,
    icon: Share2,
    title: 'SOCIAL MEDIA DESIGN',
    description:
      'Learn to create impactful, visually appealing content through graphic design, branding, and hands-on projects.',
    backgroundImage: '/social-media.png?height=400&width=600',
  },
];

const MotionCard = motion(Card);

export default function FacultyPage() {
  const session = useSession();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (session.isPending !== false) {
      setIsLoading(false);
    }
  }, [session.isPending]);

  if (isLoading) {
    return <Loader />;
  }

  const email = session.data?.user?.email;

  const handleClick = () => {
    authClient.signOut();
    console.log('Sign out');
    redirect('/sign-in');
  };

  return (
    <motion.div
      key="faculty-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center pt-24"
    >
      <div className="container mx-auto px-4 md:px-6 py-4 md:py-8">
        <div className="flex justify-between items-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 ml-4 md:ml-8 mt-6 md:mt-12"
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-left mb-4 relative z-10"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 15,
                delay: 0.4,
              }}
            >
              <motion.div
                className="text-cyan-400 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-cyan-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                CHOOSE A
              </motion.div>
              <motion.div
                className="text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                COURSE
              </motion.div>
            </motion.h1>
          </motion.div>
          <div className="flex items-center space-x-2">
            <Mail className="w-6 h-6 text-cyan-500" />
            <span className="text-base md:text-lg font-medium text-gray-600 dark:text-gray-300">
              Welcome, {email}
            </span>
            <Button
              size="sm"
              className="bg-cyan-400 hover:bg-cyan-600"
              onClick={handleClick}
            >
              Sign Out
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <ProgramCard key={program.id} program={program} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ProgramCard({
  program,
  index,
}: {
  program: (typeof programs)[0];
  index: number;
}) {
  return (
    <Link href={`/admin/course/${program.id}`} className="block">
      <MotionCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.8 + index * 0.1,
          ease: 'easeOut',
        }}
        whileHover={{
          y: -4,
          transition: { duration: 0.2 },
        }}
        className="group relative overflow-hidden border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg h-64 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
      >
        <Image
          src={program.backgroundImage}
          alt={program.title}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/80 dark:from-gray-800/90 dark:to-gray-800/80 group-hover:from-cyan-900/90 group-hover:to-cyan-900/80 transition-all duration-300 z-10"></div>
        <CardHeader className="relative z-20 p-4">
          <motion.div
            className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-2"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <program.icon className="w-6 h-6 text-cyan-400" />
          </motion.div>
          <CardTitle className="text-lg font-bold text-cyan-600 dark:text-cyan-400 group-hover:text-white transition-colors duration-300">
            {program.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="relative z-20 p-4">
          <p className="text-sm text-gray-700 dark:text-gray-200 group-hover:text-gray-100 transition-colors duration-300">
            {program.description}
          </p>
          <div className="mt-4">
            <span className="inline-flex items-center text-sm font-medium text-cyan-600 dark:text-cyan-400 group-hover:text-white transition-colors duration-300">
              View Assignments
              <svg
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </CardContent>
      </MotionCard>
    </Link>
  );
}
