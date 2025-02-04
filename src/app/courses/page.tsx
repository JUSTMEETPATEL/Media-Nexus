"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Film, Camera, Video, Share2, CuboidIcon as Cube } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

const programs = [
  {
    id: 1,
    icon: Film,
    title: "SHORT FILM MAKING",
    description:
      "This course will train the students practically in the art of storytelling, cinematography, directing and basic editing from a concept to the final cut.",
    backgroundImage: "/film.jpeg?height=400&width=600",
  },
  {
    id: 2,
    icon: Video,
    title: "EDITING TECHNIQUES",
    description:
      "The certificate course will explore film director's editing techniques and their collaboration with Industry trained experts, offering insights into the creative process.",
    backgroundImage: "/editing.jpg?height=400&width=600",
  },
  {
    id: 3,
    icon: Share2,
    title: "SOCIAL MEDIA DESIGN",
    description:
      "Learn to create impactful, visually appealing content through graphic design, branding, and hands-on projects.",
    backgroundImage: "/social-media.png?height=400&width=600",
  },
  {
    id: 4,
    icon: Camera,
    title: "DIGITAL PHOTOGRAPHY",
    description:
      "Through real-world applications and expert guidance, they will sharpen their skills in film editing, gaining practical insights into the creative process.",
    backgroundImage: "/digital-photography.jpeg?height=400&width=600",
  },
  {
    id: 5,
    icon: Cube,
    title: "3D ANIMATION",
    description:
      "Master 3D animation, modeling, and motion graphics to create professional-quality content for film and gaming.",
    backgroundImage: "/3d-animation.jpeg?height=400&width=600",
  },
]

const MotionCard = motion(Card)

export default function ProgramsPage() {
  return (
    <motion.div
      key="programs-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center pt-24"
    >
      <div className="container mx-auto px-4 md:px-6 py-4 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[calc(100vh-6rem)]">
          {/* Title and Social Media Design */}
          <div className="col-span-1 flex flex-col gap-6 md:justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 ml-4 md:ml-8 mt-6 md:mt-12"
            >
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-left mb-4 relative z-10"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: 0.4,
                }}
              >
                <motion.div
                  className="text-cyan-400 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-cyan-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  COURSES
                </motion.div>
                <motion.div
                  className="text-gray-600 dark:text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  OFFERED
                </motion.div>
              </motion.h1>
            </motion.div>
            <ProgramCard program={programs[2]} index={2} />
          </div>

          {/* Film Making and Digital Photography */}
          <div className="col-span-1 flex flex-col gap-6 md:justify-between">
            <ProgramCard program={programs[0]} index={0} />
            <ProgramCard program={programs[3]} index={3} />
          </div>

          {/* Video Editing and 3D Animation */}
          <div className="col-span-1 flex flex-col gap-6 md:justify-between">
            <ProgramCard program={programs[1]} index={1} />
            <ProgramCard program={programs[4]} index={4} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function ProgramCard({
  program,
  index,
}: {
  program: (typeof programs)[0]
  index: number
}) {
  return (
    <Link href={`/courses/${program.id}`} className="block">
      <MotionCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.8 + index * 0.1,
          ease: "easeOut",
        }}
        whileHover={{
          y: -4,
          transition: { duration: 0.2 },
        }}
        className="group relative overflow-hidden border-0 bg-transparent backdrop-blur-lg h-64 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
      >
        <Image
          src={program.backgroundImage || "/placeholder.svg"}
          alt={program.title}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 opacity-100 transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 group-hover:from-cyan-900/70 group-hover:to-cyan-900/60 transition-all duration-300 z-10"></div>
        <CardHeader className="relative z-20 p-4">
          <motion.div
            className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-2"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <program.icon className="w-6 h-6 text-cyan-400" />
          </motion.div>
          <CardTitle className="text-lg font-bold text-white transition-colors duration-300">{program.title}</CardTitle>
        </CardHeader>
        <CardContent className="relative z-20 p-4">
          <p className="text-sm text-gray-200 group-hover:text-gray-100 transition-colors duration-300">
            {program.description}
          </p>
          <div className="mt-4">
            <span className="inline-flex items-center text-sm font-medium text-cyan-300 group-hover:text-white transition-colors duration-300">
              Read More
              <svg
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </CardContent>
      </MotionCard>
    </Link>
  )
}

