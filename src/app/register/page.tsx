'use client';

import Script from 'next/script';
import Image from 'next/image';
import { motion } from 'framer-motion';
import EnquiryForm from '@/components/enquiry-form';

export default function Page() {
  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-12 md:pt-24 p-4 md:p-8"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start pt-28 px-4 md:px-8">
          {/* Left Section */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-6 mt-12 col-span-1 md:col-span-1"
          >
            <h1 className="text-5xl font-bold">
              REGISTER{' '}
              <span className="text-cyan-400 inline-block hover:scale-105 transition-transform">
                NOW!!!
              </span>
            </h1>
            <p className="text-gray-600">
              Reister now for more information on our programs, admissions, and
              opportunities to advance your career.
            </p>
          </motion.div>

          {/* Middle Section - Form */}
          <EnquiryForm />
          {/* Right Section - Image */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="relative min-w-[400px] h-[450px] hidden md:block col-span-1 md:col-span-1"
          >
            <Image
              src="/enquire.png"
              alt="Customer Service Representative"
              fill
              className="object-cover rounded-lg transition-transform duration-300 hover:scale-[1.02] shadow-xl"
              style={{ objectPosition: 'center center' }}
              priority
            />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
