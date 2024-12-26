import { Infrastructure } from '@/components/infrastructure';
import { ProgramOffered } from '@/components/program-offered';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background image/video container */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/landing.jpg"
            alt="Studio background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        {/* Content overlay */}
        <div className="relative z-10 text-white text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            WELCOME TO
            <br />
            MEDIA <span className="text-cyan-400">NEXUS</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto italic">
            A Venture of SRM Institute of Science and Technology - Ramapuram
          </p>

          {/* Optional CTA Button */}
          <div className="mt-8">
            <Link
              href="/studio"
              className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 px-8 rounded-md transition-colors"
            >
              Explore Studio
            </Link>
          </div>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-[1]"></div>
      </div>
      <Infrastructure />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-[1]"></div>
      <ProgramOffered />
    </main>
  );
}
