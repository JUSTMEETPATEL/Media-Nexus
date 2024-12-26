import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { handler } from '@/app/action';
import { session } from '@/lib/session';
import MobileNavbar from './mobileNavbar';

export default async function Navbar() {
  const userSession = await session();

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-white text-xl font-bold">
                MEDIA <span className="text-cyan-400">NEXUS</span>
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link
                href="/about"
                className="text-gray-300 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </Link>
              <Button
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 bg-black hover:text-black"
                onClick={handler}
              >
                {userSession ? 'Sign Out' : 'Sign In'}
              </Button>
            </div>
          </div>
          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
}
