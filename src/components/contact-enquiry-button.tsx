'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MessageCircle, ArrowRight } from 'lucide-react'

export function EnquiryButton() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div 
      className="fixed left-6 bottom-6 z-50 flex items-end"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <Button 
        size="icon" 
        className={`rounded-full w-14 h-14 bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg transition-all duration-300 ease-in-out ${isExpanded ? 'rotate-90' : ''}`}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
      <div className={`flex flex-col space-y-2 ml-2 transition-all duration-300 ease-in-out ${isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
        <Link href="/enquiry" passHref>
          <Button 
            variant="default" 
            className="bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg"
          >
            Enquire Now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
        <Link href="https://wa.me/919384088566" passHref target="_blank" rel="noopener noreferrer">
          <Button 
            variant="default" 
            className="bg-green-500 hover:bg-green-600 text-white shadow-lg"
          >
            WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

