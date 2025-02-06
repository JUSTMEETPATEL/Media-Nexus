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
    <section className="relative w-full h-screen mx-auto p-4 md:p-6">
      <div className="absolute inset-0 z-0 opacity-50">
      <Image
        src="/about.jpg"
        alt="Media Background"
        layout="fill"
        objectFit="cover"
      />
      </div>
      <h2 className="text-4xl font-bold text-black mb-16 mt-28 text-center">
        Our Management
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-24 bg-gray-100 p-6 rounded-lg shadow-lg">
        <Link href="/management/chairman-message">
            <div className="flex flex-col items-center bg-white bg-opacity-75 p-4 rounded-lg">
          <LeadershipCard
            imageSrc="/chairman.png"
            name="Dr. R. Shivakumar"
            designation="Chairman"
          />
          <p className="text-center text-cyan-500 mt-2 hover:underline bg-black p-2 rounded font-extrabold">
            Our Chairman&apos;s Message
          </p>
            </div>
        </Link>

        <Link href="/management/co-chairman-message">
          <div className="flex flex-col items-center">
        <LeadershipCard
          imageSrc="/Co-chairman.png"
          name="Mr. S. Niranjan"
          designation="Co-chairman"
        />
        <p className="text-center text-cyan-500 mt-2 hover:underline bg-black p-2 rounded font-extrabold">
          Our Co-Chairman&apos;s Message
        </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
