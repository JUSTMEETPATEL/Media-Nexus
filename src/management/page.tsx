'use client';

import LeadershipCard from '';
import Link from 'next/link';

export default function DirectorMessage() {
  const [isMounted, setIsMounted] = useState(false);

function LeadershipCard({
  imageSrc,
  name,
  designation,
}: {
  imageSrc: string;
  name: string;
  designation: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-64 h-64 mb-4">
        <Image
          src={imageSrc || '/placeholder.svg'}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <h3 className="text-2xl font-semibold text-black mt-4">{name}</h3>
      <p className="text-gray-900 text-lg">{designation}</p>
    </div>
  );
}



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
    'use client';


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
    <section className="max-w-5xl mx-auto mt-20 p-4 md:p-6">
        <h2 className="text-4xl font-bold text-black mb-16 text-center">
          Our Leadership
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-24">
          
            <Link href="/team/chairman-message">
              <LeadershipCard
                imageSrc="/chairman.png"
                name="Dr. R. Shivakumar"
                designation="Chairman"
              />
              <p className="text-center text-cyan-400 mt-2 hover:underline">Read Chairman&apos;s Message</p>
            </Link>
          
            
          <Link href="/team/co-chairman-message">
            <LeadershipCard
              imageSrc="/Co-chairman.png"
              name="Mr. S. Niranjan"
              designation="Co-chairman"
            />
            <p className="text-center text-cyan-400 mt-2 hover:underline">Read Co-Chairman&apos;s Message</p>
          </Link>
          
        </div>
      </section>
  );})

