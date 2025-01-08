'use client';
import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/button';
import { useState, useEffect, useRef } from 'react';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import { useSession } from '@/lib/auth-client';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest('button')
      ) {
        setIsOpen(false);
      }
    };

    const handleMenuClick = (event: MouseEvent) => {
      if ((event.target as Element).closest('button')) {
        setIsOpen((prev) => !prev);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('click', handleMenuClick);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('click', handleMenuClick);
    };
  }, []);

  const session = useSession();
  // const toggleDropdown = () => {
  //   setIsOpen((prev) => !prev);
  // };

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-black via-gray-900 to-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo and brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/Final Logo.png"
                alt="Media Nexus Logo"
                width={300}
                height={100}
                className="h-20 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              <Link
                href="/about"
                className="text-gray-300 hover:text-white transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/courses"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Courses
              </Link>
              <Link
                href="/facility"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Facilities
              </Link>
              <Link
                href="/team"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Our Team
              </Link>
              <Link
                href="/advisory"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Advisory Board
              </Link>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/enquiry"
                className={`px-4 py-2 rounded-md bg-cyan-500 text-white hover:bg-cyan-600 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25`}
              >
                Book Enquiry
              </Link>
            </div>
          </div>

          {/* Logo (Desktop) */}
          <div className="hidden md:block w-48">
            <Link href="https://srmrmp.edu.in/">
              <Image
                src="/srm-logo.png"
                alt="SRM Logo"
                width={194}
                height={56}
                className="w-48 h-14 object-contain"
              />
            </Link>
          </div>

          <div className='hidden md:flex items-center space-x-4'>
              {session.data?.user?.email ? null : (
                <Link href="/sign-in" className = {`px-4 py-2 rounded-md bg-cyan-500 text-white hover:bg-cyan-600 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25`}>
                  Sign In
                </Link>
              )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" className="text-gray-300">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div
          ref={dropdownRef}
          className="md:hidden absolute top-20 left-0 w-full bg-black/90 border-b border-gray-800"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/about"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
            >
              About Us
            </Link>
            <Link
              href="/courses"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
            >
              Courses
            </Link>
            <Link
              href="/facility"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
            >
              Facilities
            </Link>
            <Link
              href="/team"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
            >
              Our Team
            </Link>
            <Link
              href="/advisory"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
            >
              Advisory Board
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
            >
              Contact Us
            </Link>
            <Link
              href="/enquiry"
              className={`block px-3 py-2 text-base font-medium text-cyan-400 hover:text-white hover:bg-gray-700 rounded-md`}
            >
              Book Enquiry
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
