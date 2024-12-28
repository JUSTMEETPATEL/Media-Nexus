'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Film, Camera, Video, Share2, CuboidIcon as Cube } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const programs = [
  {
    icon: Film,
    title: 'SHORT FILM MAKING',
    description:
      'This course will train the students practically in the art of storytelling, cinematography, directing and basic editing from a concept to the final cut.',
    backgroundImage: '/film.jpeg?height=400&width=600',
  },
  {
    icon: Camera,
    title: 'DIGITAL PHOTOGRAPHY',
    description:
      'Through real-world applications and expert guidance, they will sharpen their skills in film editing, gaining practical insights into the creative process.',
    backgroundImage: '/digital-photography.jpeg?height=400&width=600',
  },
  {
    icon: Video,
    title: 'EDITING TECHNIQUES',
    description:
      "The certificate course will explore film director's editing techniques and their collaboration with Industry trained experts, offering insights into the creative process.",
    backgroundImage: '/editing.jpg?height=400&width=600',
  },
  {
    icon: Share2,
    title: 'SOCIAL MEDIA DESIGN',
    description:
      'Learn to create impactful, visually appealing content through graphic design, branding, and hands-on projects.',
    backgroundImage: '/social-media.png?height=400&width=600',
  },
  {
    icon: Cube,
    title: '3D ANIMATION',
    description:
      'Master 3D animation, modeling, and motion graphics to create professional-quality content for film and gaming.',
    backgroundImage: '/3d-animation.jpeg?height=400&width=600',
  },
];

const MotionCard = motion(Card);

export default function ProgramsPage() {
  return (
    <motion.div
      key="programs-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="relative">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-center mb-4 relative z-10"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 15,
                delay: 0.4,
              }}
            >
              <motion.span
                className="text-cyan-400 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-cyan-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                PROGRAMS
              </motion.span>
              <br />
              <motion.span
                className="text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                OFFERED
              </motion.span>
            </motion.h1>
            <motion.div
              className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-24 bg-cyan-400/10 rounded-full blur-3xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            />
          </div>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full mt-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {programs.map((program, index) => (
            <Link href="/enquiry" key={index} className="block">
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
                className="group relative overflow-hidden border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg h-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
              >
                <Image
                  src={program.backgroundImage}
                  alt={program.title}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 z-0 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/50 dark:from-gray-800/70 dark:to-gray-800/50 group-hover:from-cyan-900/70 group-hover:to-cyan-900/50 transition-all duration-300 z-10"></div>
                <CardHeader className="relative z-20">
                  <motion.div
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-cyan-400/10 flex items-center justify-center mb-4 sm:mb-6"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <program.icon className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
                  </motion.div>
                  <CardTitle className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-cyan-500 group-hover:text-white transition-colors duration-300">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-20">
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {program.description}
                  </p>
                </CardContent>
              </MotionCard>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

