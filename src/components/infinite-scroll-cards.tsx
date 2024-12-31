"use client"

import { useEffect, useState } from "react"
import { motion, useAnimationControls } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

interface Course {
  title: string
  description: string
}

interface InfiniteScrollCardsProps {
  items: Course[]
}

export function InfiniteScrollCards({ items }: InfiniteScrollCardsProps) {
  const duplicatedItems = [...items, ...items]
  const controls = useAnimationControls()
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isHovered) {
      controls.stop()
    } else {
      controls.start({
        x: "-50%",
        transition: {
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        },
      })
    }
  }, [isHovered, controls])

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex gap-6"
        initial={{ x: "0%" }}
        animate={controls}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {duplicatedItems.map((course, index) => (
          <Link 
            href="/enquiry" 
            key={`${course.title}-${index}`}
            className="no-underline"
          >
            <Card
              className="bg-white shrink-0 w-[300px] transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            >
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl mb-2">{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-gray-600">{course.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </motion.div>
    </div>
  )
}

