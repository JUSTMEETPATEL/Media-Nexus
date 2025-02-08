"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
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
  const [isScrolled, setIsScrolled] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const session = useSession()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest("button")
      ) {
        setIsOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen)
  }

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
      href={href}
      className="relative text-gray-300 hover:text-white transition-colors duration-200 group px-3 py-2"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-500 transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
    </Link>
  )

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-lg"
          : "bg-gradient-to-b from-gray-900 to-gray-900/90"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and brand */}
          <div className="flex-shrink-0 transition-transform duration-200 hover:scale-105">
            <Link href="/" className="flex items-center">
              <Image
                src="/Final Logo.png"
                alt="Media Nexus Logo"
                width={240}
                height={80}
                className="h-16 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden xl:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-2">
              <NavLink href="/about">About Us</NavLink>
              <NavLink href="/courses">Courses</NavLink>
              <NavLink href="/facility">Facilities</NavLink>
              <NavLink href="/management">Our Management</NavLink>
              <NavLink href="/team">Our Team</NavLink>
              <NavLink href="/advisory">Advisory Board</NavLink>
              <NavLink href="/contact">Contact Us</NavLink>
            </div>
          </div>

          {/* Sign In / Sign Out Button and SRM Logo */}
          <div className="hidden xl:flex items-center space-x-6">
            {session.data?.user?.email ? (
              <Button
                onClick={handleClick}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
              >
                Sign Out
              </Button>
            ) : (
              <Link
                href="/sign-in"
                className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
              >
                Sign In
              </Link>
            )}
            
            <Link 
              href="https://srmrmp.edu.in/"
              className="transition-transform duration-200 hover:scale-105"
            >
              <Image
                src="/srm-logo-2.png"
                alt="SRM Logo"
                width={120}
                height={45}
                className="w-auto h-16 object-contain bg-transparent p-2 rounded-md"
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden">
            <Button
              variant="ghost"
              className="text-gray-300 hover:text-white"
              onClick={toggleMobileMenu}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        ref={dropdownRef}
        className={`xl:hidden absolute top-20 left-0 w-full bg-gray-900/95 backdrop-blur-md border-t border-gray-800 transform transition-all duration-300 ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="px-4 py-3 space-y-2">
          <Link
            href="/about"
            className="block px-4 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
          >
            About Us
          </Link>
          <Link
            href="/courses"
            className="block px-4 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
          >
            Courses
          </Link>
          <Link
            href="/facility"
            className="block px-4 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
          >
            Facilities
          </Link>
          <Link
            href="/management"
            className="block px-4 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
          >
            Our Management
          </Link>
          <Link
            href="/team"
            className="block px-4 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
          >
            Our Team
          </Link>
          <Link
            href="/advisory"
            className="block px-4 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
          >
            Advisory Board
          </Link>
          <Link
            href="/contact"
            className="block px-4 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
          >
            Contact Us
          </Link>
          {session.data?.user?.email ? (
            <Button
              onClick={handleClick}
              className="w-full mt-4 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
            >
              Sign Out
            </Button>
          ) : (
            <Link
              href="/sign-in"
              className="block w-full mt-4 px-4 py-2 text-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}