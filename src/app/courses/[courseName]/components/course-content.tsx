"use client"

import { motion } from "framer-motion"
import { ChevronRight } from 'lucide-react'



type CourseContentProps = {



  courseData: {



    title: string;



    description?: string;



    points: readonly (string | {



      title: string;



      description: string;



      subpoints?: readonly string[];



    })[];



  };



};



export function CourseContent({ courseData }: CourseContentProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  }

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="rounded-xl bg-gray-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-gray-800/60"
    >
      <motion.h1
        variants={item}
        className="mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-3xl font-bold tracking-tight text-transparent"
      >
        {courseData.title}
      </motion.h1>
      {courseData.description && (
        <motion.p variants={item} className="mb-8 text-gray-300">
          {courseData.description}
        </motion.p>
      )}
      <motion.div variants={container} className="space-y-6">
        {courseData.points.map((point, index) => (
          <motion.div
            key={index}
            variants={item}
            className="group rounded-lg bg-gray-800/30 p-4 transition-all duration-300 hover:bg-gray-700/30 hover:shadow-lg"
          >
            {typeof point === "string" ? (
              <div className="flex items-start gap-2">
                <ChevronRight className="mt-1 h-5 w-5 flex-shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1" />
                <p className="text-gray-200 transition-colors duration-300 group-hover:text-white">
                  {point}
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-primary transition-colors duration-300 group-hover:text-primary/90">
                  {point.title}
                </h3>
                <p className="text-gray-300 transition-colors duration-300 group-hover:text-gray-200">
                  {point.description}
                </p>
                {point.subpoints && (
                  <ul className="space-y-2">
                    {point.subpoints.map((subpoint, subIndex) => (
                      <li
                        key={subIndex}
                        className="flex items-start gap-2 text-gray-200"
                      >
                        <ChevronRight className="mt-1 h-5 w-5 flex-shrink-0 text-primary/70 transition-transform duration-300 group-hover:translate-x-1" />
                        <span className="transition-colors duration-300 group-hover:text-white">
                          {subpoint}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

