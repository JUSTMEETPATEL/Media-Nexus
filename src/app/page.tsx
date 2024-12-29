'use client';

import { Suspense, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Infrastructure } from '@/components/infrastructure';
import { Loader } from '@/components/loader';
import { ProgramOffered } from '@/components/program-offered';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const mediaNexus = {
  vision:
    'To empower aspiring media professionals with cutting-edge skills and creative expertise, fostering innovation and excellence in the ever-evolving digital landscape.',
  mission: [
    'To deliver industry-focused, hands-on training in media studies through innovative teaching methods and real-world projects.',
    'To nurture creativity, technical proficiency, and storytelling abilities in students for successful media careers.',
    'To provide a dynamic learning environment that bridges the gap between education and industry demands.',
    'To inspire a passion for continuous learning and adaptability in the rapidly changing media industry.',
  ],
  about:
    'The Media Nexus, a new venture of SRMIST-Ramapuram, is set to revolutionize learning opportunities for non-media students with the introduction of dynamic certificate courses. Recognizing the increasing interest in creative and technical media skills, these programs aim to provide hands-on training and foundational knowledge in diverse media arts disciplines. Designed specifically for students of Eeswari Engineering College, the courses also extend an invitation to other interested learners, subject to availability.',
  courses: [
    {
      title: 'Short Film Making',
      description:
        'This course introduces students to the art of crafting compelling narratives and mastering visual storytelling. From scripting to filming and post-production, participants will gain a holistic understanding of short film creation.',
    },
    {
      title: 'Photography',
      description:
        'Designed for those passionate about capturing moments, this course delves into both the technical and artistic aspects of photography. Students will learn to use cameras effectively, understand lighting, and develop their unique creative vision.',
    },
    {
      title: 'Editing Techniques',
      description:
        'This course focuses on video editing, teaching students how to assemble footage, apply effects, and create seamless transitions to produce professional-quality videos.',
    },
    {
      title: 'Social Media Design',
      description:
        "In today's digital age, the ability to create engaging content for social platforms is invaluable. This course covers the essentials of graphic design, content strategy, and platform-specific techniques to help students excel in the realm of social media.",
    },
    {
      title: '3D Animation',
      description:
        'For those interested in bringing ideas to life, this course introduces the fundamentals of 3D animation, including modeling, texturing, and rendering.',
    },
  ],
  empowerment: {
    description:
      'The certificate courses by Media Nexus represent a significant step forward in democratizing media education. By providing non-media students with access to professional training, the program opens up new avenues for creativity and career exploration. Whether students aspire to work in the media industry, enhance their skill set, or simply pursue a creative passion, these courses offer the perfect starting point. With a versatile curriculum, expert faculty, and state-of-the-art infrastructure, Media Nexus is committed to nurturing the next generation of media professionals and enthusiasts.',
  },
};

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Suspense fallback={<Loader />}>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[90vh] sm:h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/landing.jpeg"
              alt="Studio background"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-white text-center px-4 sm:px-6"
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-3 sm:mb-4 tracking-tight">
              MEDIA <span className="text-cyan-400">NEXUS</span>
            </h1>
            <p className="text-gray-300 text-base sm:text-xl md:text-2xl max-w-2xl mx-auto mb-4 sm:mb-6 px-4 sm:px-0">
              Empowering the next generation of media professionals
            </p>
            <Button
              asChild
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-400 text-black transition-colors duration-300 text-sm sm:text-base"
            >
              <Link href="/studio">
                Explore Studio <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-[1]"></div>
        </section>

        {/* About Section */}
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-b from-slate-100 to-white text-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-2xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-8"
              data-aos="fade-up"
            >
              About Media Nexus
            </h2>
            <p
              className="text-sm sm:text-lg md:text-xl text-center max-w-4xl mx-auto leading-relaxed px-4 sm:px-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {mediaNexus.about}
            </p>
          </div>
        </section>

        {/* Vision and Mission Section */}
        <section className="py-8 sm:py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-2xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-16"
              data-aos="fade-up"
            >
              Our Vision & Mission
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
              <Card
                className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                data-aos="fade-up"
              >
                <CardHeader>
                  <CardTitle className="text-2xl sm:text-3xl mb-2 sm:mb-4">
                    Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base sm:text-lg">{mediaNexus.vision}</p>
                </CardContent>
              </Card>
              <Card
                className="bg-gradient-to-br from-purple-500 to-pink-600 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <CardHeader>
                  <CardTitle className="text-2xl sm:text-3xl mb-2 sm:mb-4">
                    Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                    {mediaNexus.mission.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Programs Offered Section */}
        <div>
          <ProgramOffered />
        </div>

        {/* Empowerment Section */}
        <section className="py-8 sm:py-16 md:py-24 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-2xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-8"
              data-aos="fade-up"
            >
              Empowering the Next Generation
            </h2>
            <p
              className="text-sm sm:text-lg md:text-xl text-center max-w-4xl mx-auto leading-relaxed px-4 sm:px-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {mediaNexus.empowerment.description}
            </p>
          </div>
        </section>

        {/* Infrastructure Section */}
        <Infrastructure />
      </main>
    </Suspense>
  );
}
