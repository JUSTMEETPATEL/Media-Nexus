'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="text-center space-y-8">
        <Image
          src="/Final Logo.png"
          alt="Media Nexus Logo"
          width={300}
          height={100}
          className="mx-auto"
        />
        <h1 className="text-6xl font-bold text-white">404</h1>
        <h2 className="text-2xl text-gray-300">Page Not Found</h2>
        <p className="text-gray-400">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition-colors duration-200"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
