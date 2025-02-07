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
    <div className="flex flex-col items-center text-center">
      {/* Image Container */}
      <div className="relative w-64 h-64 sm:w-64 sm:h-64 mb-4">
        <Image
          src={imageSrc || '/placeholder.svg'}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Name and Designation */}
      <h3 className="text-2xl font-bold text-black mt-4">{name}</h3>
      <p className="text-black text-lg font-semibold">{designation}</p>
    </div>
  );
}

export default function Management() {
  return (
    <section className="relative w-full min-h-screen mx-auto p-4 md:p-6">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/about.jpg"
          alt="Media Background"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/40 via-cyan-400/30 to-cyan-600/40" />
      </div>

      <h2 className="text-4xl font-bold text-white mb-16 mt-28 text-center relative z-10">
        Our Management
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-24 relative z-10">
        <Link href="/management/chairman-message">
          <div className="flex flex-col items-center">
            <LeadershipCard
              imageSrc="/chairman.jpg"
              name="Dr. R. Shivakumar"
              designation="Chairman"
            />
            <p className="text-center text-cyan-500 mt-2 hover:underline bg-black p-2 rounded font-extrabold">
              Our Hon&apos;ble Chairman&apos;s Message
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
              Our Hon&apos;ble Co-Chairman&apos;s Message
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
