'use client';

import React, { useEffect, useState } from 'react';
import { useSession } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Film,
  Camera,
  Video,
  Share2,
  CuboidIcon as Cube,
  User,
} from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Loader } from '@/components/ui/loader';

type Enquiry = {
  courseId: number;
  slotId: number;
};

const programsMap = {
  1: {
    title: '3D Animation',
    icon: Cube,
    description:
      'Master 3D animation, modeling, and motion graphics to create professional-quality content for film and gaming.',
    backgroundImage: '/3d-animation.jpeg?height=400&width=600',
  },
  2: {
    title: 'Short Film Making',
    icon: Film,
    description:
      'This course will train you practically in the art of storytelling, cinematography, directing and basic editing from a concept to the final cut.',
    backgroundImage: '/film.jpeg?height=400&width=600',
  },
  3: {
    title: 'Digital Photography',
    icon: Camera,
    description:
      'Through real-world applications and expert guidance, you will sharpen your skills in digital photography and editing techniques.',
    backgroundImage: '/digital-photography.jpeg?height=400&width=600',
  },
  4: {
    title: 'Editing Technique',
    icon: Video,
    description:
      'This certificate course will explore film editing techniques and collaboration with industry-trained experts, offering insights into the creative process.',
    backgroundImage: '/editing.jpg?height=400&width=600',
  },
  5: {
    title: 'Social Media Design',
    icon: Share2,
    description:
      'Learn to create impactful, visually appealing content through graphic design, branding, and hands-on projects for various social media platforms.',
    backgroundImage: '/social-media.png?height=400&width=600',
  },
};

const MotionCard = motion(Card);

const Page = () => {
  const session = useSession();
  const router = useRouter();
  const [enquiries, setEnquiries] = useState<Enquiry | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!session.data) {
      setIsLoading(false);
      return;
    }

    const checkUserRole = async () => {
      try {
        const response = await fetch('/api/check-role', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: session.data?.user.email }),
        });

        if (!response.ok) {
          console.error('Error:', response.status, response.statusText);
          setIsLoading(false);
          return;
        }

        const { role } = await response.json();

        if (role === 'admin') {
          router.push('/admin');
        } else if (role === 'faculty') {
          router.push('/faculty');
        } else if (role === 'user') {
          await fetchEnquiries();
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching role:', error);
        setIsLoading(false);
      }
    };

    const fetchEnquiries = async () => {
      try {
        const email = session.data?.user.email;

        const response = await fetch('/api/get-course', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: email }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          setError(errorData.error);
          return;
        }

        const data = await response.json();
        setEnquiries(data);
      } catch (err) {
        console.error('Error fetching enquiries:', err);
        setError('Failed to fetch enquiries.');
      }
    };

    checkUserRole();
  }, [session.data, router]);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (!session.data) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-2xl text-black font-bold">Unauthorized...</h1>
      </div>
    );
  }

  return (
    <motion.div
      key="dashboard-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-16"
    >
      <div className="container mx-auto px-4 md:px-6 py-4 md:py-8">
        <div className="flex justify-end items-center mb-8 pt-4">
          <div className="flex items-center space-x-2">
            <User className="w-6 h-6 text-cyan-500" />
            <span className="text-base md:text-lg font-medium text-gray-600 dark:text-gray-300">
              Welcome, {session.data?.user.email}
            </span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
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
              YOUR
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

        <div className="w-full max-w-4xl mx-auto">
          {error && <div className="text-red-500 mb-4">Error: {error}</div>}
          {!enquiries ? (
            <div className="flex justify-center items-center min-h-[200px]">
              <Loader />
            </div>
          ) : (
            <div>
              {programsMap[enquiries.courseId as keyof typeof programsMap] && (
                <Link
                  href={`/dashboard/${enquiries.courseId}/${enquiries.slotId}`}
                  passHref
                >
                  <MotionCard
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.8,
                      ease: 'easeOut',
                    }}
                    className="group relative overflow-hidden border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] cursor-pointer"
                  >
                    <Image
                      src={
                        programsMap[
                          enquiries.courseId as keyof typeof programsMap
                        ].backgroundImage
                      }
                      alt={
                        programsMap[
                          enquiries.courseId as keyof typeof programsMap
                        ].title
                      }
                      layout="fill"
                      objectFit="cover"
                      className="absolute inset-0 z-0 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/80 dark:from-gray-800/90 dark:to-gray-800/80 group-hover:from-cyan-900/90 group-hover:to-cyan-900/80 transition-all duration-300 z-10"></div>
                    <CardHeader className="relative z-20 p-6">
                      <CardTitle className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 group-hover:text-white transition-colors duration-300 flex items-center">
                        {React.createElement(
                          programsMap[
                            enquiries.courseId as keyof typeof programsMap
                          ].icon,
                          { className: 'w-8 h-8 mr-3' }
                        )}
                        {
                          programsMap[
                            enquiries.courseId as keyof typeof programsMap
                          ].title
                        }
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-20 p-6">
                      <p className="text-gray-700 dark:text-gray-200 group-hover:text-gray-100 transition-colors duration-300 mb-4">
                        {
                          programsMap[
                            enquiries.courseId as keyof typeof programsMap
                          ].description
                        }
                      </p>
                      <p className="font-semibold text-cyan-600 dark:text-cyan-400 group-hover:text-white transition-colors duration-300">
                        Slot:{' '}
                        {enquiries.slotId === 1
                          ? 'Morning'
                          : enquiries.slotId === 2
                            ? 'Evening'
                            : 'Unknown'}
                      </p>
                    </CardContent>
                  </MotionCard>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Page;
