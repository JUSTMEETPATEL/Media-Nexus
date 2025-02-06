'use client';

import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
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
                <Quote className="w-12 h-12 text-blue-600 mb-6 animate-pulse" />
              </motion.div>
              <motion.h2
                variants={itemVariants}
                className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
              >
                Message from the Co-Chairman
              </motion.h2>
              <div className="prose prose-lg">
                <div className="flex items-center justify-end mr-10 mb-6">
                  <Image
                    src="/Co-chairman.png"
                    alt="Chairman"
                    width={200}
                    height={200}
                    className=""
                  />
                </div>
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <p className="mb-4">
                    The ever-evolving media landscape provides professionals
                    with varied experiences in niche domains. A surge in keen
                    interest for media related subjects among non-media students
                    is perceived and they wish to delve deep into the manifold
                    creative media domain.
                  </p>
                  <p className="mb-4">
                    A paradigm shift is envisaged in the manner of media
                    consumption and hence learners need to fathom how to
                    leverage cutting edge technology. Looking ahead, the key to
                    success in the emerging media platforms is to espouse
                    innovation, stay agile and adapt to changing consumer
                    behaviours. Due to the rapidly changing media climate, it is
                    vital to weave layers of strategic content to overcome the
                    new disruptions being contemplated. This needs comprehensive
                    exposure and top-of-the-line credentials.
                  </p>
                  <p className="mb-4">
                    To develop a critical engagement with media and to equip
                    learners, Media Nexus, a new venture of SRM Group of
                    Institutions, Ramapuram, Chennai offers certificate courses
                    in Short Film Making, Photography, Editing Techniques,
                    Social Media Design and 3D Animation. Aspiring students are
                    nurtured to explore and experience the power of media. The
                    courses are crafted to make learners&rsquo; dextrous to traverse
                    the latest trends in the media industry. The top-notch
                    curriculum and mentorship by connoisseurs from the media
                    industry will guide students to contemporize with media
                    functions.
                  </p>
                  <p>Best wishes to Media Nexus and our learners!</p>
                </motion.div>
              </div>
              {/* <motion.div variants={itemVariants} className="mt-6">
                <p className="font-semibold">Anand Kannan</p>
                <p className="text-muted-foreground">
                  National Director, IFIA Bharat
                </p>
              </motion.div> */}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
