'use client';

import Link from 'next/link';
import Image from 'next/image';

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


export default function Management() {


  return (
    <section className="max-w-5xl mx-auto p-4 md:p-6">
        <h2 className="text-4xl font-bold text-black mb-16 mt-28 text-center">
          Our Leadership
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-24">
          
            <Link href="/management/chairman-message">
              <LeadershipCard
                imageSrc="/chairman.png"
                name="Dr. R. Shivakumar"
                designation="Chairman"
              />
              <p className="text-center text-cyan-700 mt-2 hover:underline">Our Chairman&apos;s Message</p>
            </Link>
          
            
          <Link href="/management/co-chairman-message">
            <LeadershipCard
              imageSrc="/Co-chairman.png"
              name="Mr. S. Niranjan"
              designation="Co-chairman"
            />
            <p className="text-center text-cyan-700 mt-2 hover:underline">Our Co-Chairman&apos;s Message</p>
          </Link>
          
        </div>
      </section>


    );
  }
