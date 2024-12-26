"use client"

import Link from "next/link"
import { Menu, X } from 'lucide-react'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { handler } from "@/app/action"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

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
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
                onClick={handler}
              >
                Book Studio
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-400"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-black/95`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/services"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/portfolio"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <div className="px-3 py-2">
            <Button 
              variant="outline"
              onClick={handler} 
              className="w-full border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
            >
              Book Studio
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

