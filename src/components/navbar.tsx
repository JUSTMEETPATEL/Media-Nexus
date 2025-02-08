"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from "react"
import { Menu } from "lucide-react"
import Image from "next/image"
import { authClient, useSession } from "@/lib/auth-client"
import { redirect } from "next/navigation"

const handleClick = () => {
  authClient.signOut()
  console.log("Sign out")
  redirect("/sign-in")
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const session = useSession()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest("button")
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="fixed w-full z-50 bg-gray-900 to-black border-b border-gray-800">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="hidden xl:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-4">
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/courses" className="text-gray-300 hover:text-white transition-colors">
                Courses
              </Link>
              <Link href="/facility" className="text-gray-300 hover:text-white transition-colors">
                Facilities
              </Link>
              <Link href="/management" className="text-gray-300 hover:text-white transition-colors">
                Our Management
              </Link>
              <Link href="/team" className="text-gray-300 hover:text-white transition-colors">
                Our Team
              </Link>
              <Link href="/advisory" className="text-gray-300 hover:text-white transition-colors">
                Advisory Board
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Sign In / Sign Out Button */}
          <div className="hidden xl:flex items-center space-x-4">
            {session.data?.user?.email ? (
              <Button
                onClick={handleClick}
                className="px-4 py-2 rounded-md bg-cyan-500 text-white hover:bg-cyan-600 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
              >
                Sign Out
              </Button>
            ) : (
              <Link
                href="/sign-in"
                className="px-4 py-2 rounded-md bg-cyan-500 text-white hover:bg-cyan-600 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Logo (SRM) - Move to the right */}
          <div className="hidden xl:block w-48 ml-10"> {/* Added ml-10 for margin-left */}
            <Link href="https://srmrmp.edu.in/">
              <Image
                src="/srm-logo-2.png"
                alt="SRM Logo"
                width={150}
                height={56}
                className="w-30 h-20 object-contain bg-transparent p-2 rounded-md"
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden">
            <Button variant="ghost" className="text-gray-300" onClick={toggleMobileMenu}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div ref={dropdownRef} className="xl:hidden absolute top-24 left-0 w-full bg-black/90 border-b border-gray-800">
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
              href="/management"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
            >
              Our Management
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
            {session.data?.user?.email ? (
              <Button
                onClick={handleClick}
                className="block w-full text-left px-3 py-2 text-base font-medium text-cyan-400 hover:text-white hover:bg-gray-700 rounded-md"
              >
                Sign Out
              </Button>
            ) : (
              <Link
                href="/sign-in"
                className="block px-3 py-2 text-base font-medium text-cyan-400 hover:text-white hover:bg-gray-700 rounded-md"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
