'use client';

import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function DirectorMessage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  if (!isMounted) {
    return null;
  }

  return (
    <section className="flex items-center justify-center">
      <div
        className="container px-4 mx-auto flex items-center justify-center"
        suppressHydrationWarning
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card className="overflow-hidden hover:shadow-xl mt-32 transition-shadow duration-300">
            <CardContent className="p-6 md:p-10">
              <motion.div variants={itemVariants}>
                {/* Replacing the quotation icon with the Media Nexus Logo */}
                <div className="flex justify-center mb-6">
                  <Image
                    src="/Final Logo.png"
                    alt="Media Nexus Logo"
                    width={150} // Adjust the size as needed
                    height={50} // Adjust the size as needed
                    className="object-contain"
                  />
                </div>
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4"
              >
                Message from the Chairman
              </motion.h2>
              <div className="prose prose-lg">
                <div className="flex items-center justify-center mb-6">
                  {/* Increased image size */}
                  <Image
                    src="/chairman.jpg"
                    alt="Chairman"
                    width={300} // Increased size
                    height={300} // Increased size
                    className="rounded-full"
                  />
                </div>
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <p className="mb-4 text-justify">
                    It is heartening to note that Media Nexus, a new venture of
                    SRM Group, Ramapuram, Chennai is being established. Media
                    Nexus is embarking on providing innovative certificate
                    courses related to media studies. SRM Ramapuram is committed
                    to providing advanced and comprehensive education that will
                    catapult you to a leader in the media domain.
                  </p>
                  <p className="mb-4 text-justify">
                    Today&apos;s students are diverse, collaborative and
                    breaking stereotypes. A sizeable majority of millennial
                    engineering students have a passion for media studies.
                    Multi-skilling and multi-tasking are their forte. Moreover,
                    in this technology-infused environment, producing
                    high-quality media content is crucial and a game-changer.
                    Hence, it is pertinent to be equipped with appropriate niche
                    skills for this.
                  </p>
                  <p className="mb-4 text-justify">
                    Media Nexus has envisaged certificate courses in Short Film
                    Making, Photography, Editing Techniques, Social Media Design
                    and 3D Animation to cater to this growing interest in
                    creative and technical media skills among non-media
                    students. It will help learners to produce high quality
                    media content regardless of their primary field of study.
                    Furthermore, they can contribute towards shaping societies,
                    cultures, and global conversations. Also, stalwarts from the
                    media will share their expertise as well as mentor the
                    students.
                  </p>
                  <p className="text-justify">Best wishes to Media Nexus on the pioneering endeavour.</p>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
