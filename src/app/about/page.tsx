"use client"

import { Tag } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

function Feature({
  title,
  description,
  link,
}: {
  title: string
  description: string
  link: string
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-black text-xl font-bold">{title}</h2>
        <Link href={link}>
          <div
            className="bg-white rounded-full p-2 hover:bg-opacity-90 transition-colors cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Tag className="w-5 h-5 text-cyan-500" />
          </div>
        </Link>
      </div>
      {isHovered && <p className="text-black animate-fadeIn">{description}</p>}
    </div>
  )
}



export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-50">
        <Image src="/about.jpg" alt="Media Background" layout="fill" objectFit="cover" />
      </div>
      {/* pt-16 accounts for the fixed navbar height */}
      <main className="pt-16 relative z-10">
        <div className="flex flex-col md:flex-row min-h-[calc(100vh-4rem)] max-w-5xl mx-auto p-4 md:p-6 gap-10">
          {/* Left Column */}
          <div className="md:w-1/2 pr-4 md:pr-6 pt-12">
            <h1 className="text-6xl font-bold mb-6">
              <span className="text-black">ABOUT</span>
              <br />
              <span className="text-black">MEDIA</span>
              <br />
              <span className="text-black">NEXUS</span>
            </h1>

            <div className="relative mt-20">
              
              <p className="text-black font-medium leading-relaxed bg-cyan-400 bg-opacity-60 p-6 relative z-10">
              Welcome to MEDIA NEXUS, where we offer specialized Certificate Programs in Media Studies designed to
              empower the next generation of media professionals. Our courses are tailored to provide a deep
              understanding of key areas such as journalism, digital media, content creation, media production, and
              communication strategies. With a focus on practical learning, we ensure that our students gain hands-on
              experience and develop the necessary skills to excel in the fast-paced media industry.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2 relative bg-cyan-500 bg-opacity-90 p-4 md:p-6 rounded-lg overflow-hidden mt-10">
            <Image
              src="/about-bg.jpg?height=600&width=800"
              alt="Background"
              layout="fill"
              objectFit="cover"
              className="mix-blend-overlay opacity-30"
            />
            <div className="space-y-24 relative z-10">
              <Feature
                title="STATE-OF-THE-ART FACILITY"
                description="State-of-the-art facilities, modern classrooms, advanced technology, comfortable study spaces, well-equipped labs, and vibrant campus."
                link="/facility"
              />

              <Feature
                title="EXPERIENCED FACULTY MEMBERS"
                description="Expert faculty with industry experience, dedicated to providing personalized guidance, fostering creativity, and encouraging critical thinking."
                link="/team"
              />

              <Feature
                title="INDUSTRIAL EXPERT GUIDANCE"
                description="Industry experts provide valuable insights, real-world knowledge, and mentorship, bridging theory with practical applications in media."
                link="/advisory"
              />

              <Feature
                title="INDUSTRY-RELEVANT CURRICULUM"
                description="Comprehensive curriculum integrating industry trends, practical skills, creative tools, and real-world media applications."
                link="/courses"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

