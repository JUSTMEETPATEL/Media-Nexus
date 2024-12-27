'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Film, Camera, Video, Share2, CuboidIcon as Cube } from 'lucide-react'
import { motion } from "framer-motion"

const programs = [
  {
    icon: Film,
    title: "SHORT FILM MAKING",
    description:
      "This course will train the students practically in the art of storytelling, cinematography, directing and basic editing from a concept to the final cut.",
  },
  {
    icon: Camera,
    title: "DIGITAL PHOTOGRAPHY",
    description:
      "Through real-world applications and expert guidance, they will sharpen their skills in film editing, gaining practical insights into the creative process.",
  },
  {
    icon: Video,
    title: "EDITING TECHNIQUES",
    description:
      "The certificate course will explore film director's editing techniques and their collaboration with Industry trained experts, offering insights into the creative process.",
  },
  {
    icon: Share2,
    title: "SOCIAL MEDIA DESIGN",
    description:
      "Learn to create impactful, visually appealing content through graphic design, branding, and hands-on projects.",
  },
  {
    icon: Cube,
    title: "3D ANIMATION",
    description:
      "Master 3D animation, modeling, and motion graphics to create professional-quality content for film and gaming.",
  },
]

const MotionCard = motion(Card)

export default function ProgramsPage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center mb-20"
        >
          <div className="relative">
            <motion.h1 
              className="text-7xl font-bold leading-tight text-center mb-4 relative z-10"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.4 
              }}
            >
              <motion.span 
                className="text-cyan-400 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-cyan-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                PROGRAMS
              </motion.span>
              <br />
              <motion.span 
                className="text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                OFFERED
              </motion.span>
            </motion.h1>
            <motion.div 
              className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-24 bg-cyan-400/10 rounded-full blur-3xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            />
          </div>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full mt-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {programs.map((program, index) => (
            <MotionCard 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: 0.8 + index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -4,
                transition: { duration: 0.2 }
              }}
              className="group relative overflow-hidden border-0 bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <CardHeader className="relative">
                <motion.div 
                  className="w-16 h-16 rounded-2xl bg-cyan-400/10 flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <program.icon className="w-8 h-8 text-cyan-400" />
                </motion.div>
                <CardTitle className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-cyan-500">
                  {program.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {program.description}
                </p>
              </CardContent>
              <motion.div 
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-cyan-500"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </MotionCard>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

