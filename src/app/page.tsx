"use client"

import { Suspense, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import { Youtube } from "lucide-react"

import AOS from "aos"
import "aos/dist/aos.css"
import InfiniteScrollCards from "@/components/infinite-scroll-cards"
import { Footer } from "@/components/footer"

const mediaNexus = {
  vision:
    "To empower aspiring media professionals with cutting-edge skills and creative expertise, fostering innovation and excellence in the ever-evolving digital landscape.",
  mission: [
    "To deliver industry-focused, hands-on training in media studies through innovative teaching methods and real-world projects.",
    "To nurture creativity, technical proficiency, and storytelling abilities in students for successful media careers.",
    "To provide a dynamic learning environment that bridges the gap between education and industry demands.",
    "To inspire a passion for continuous learning and adaptability in the rapidly changing media industry.",
  ],
  about:
    "The Media Nexus, a new venture of SRMIST-Ramapuram, is set to revolutionize learning opportunities for non-media students with the introduction of dynamic certificate courses. Recognizing the increasing interest in creative and technical media skills, these programs aim to provide hands-on training and foundational knowledge in diverse media arts disciplines. Designed specifically for students of Easwari Engineering College, the courses also extend an invitation to other interested learners, subject to availability.",
  courses: [
    {
      id: 1,
      title: "Short Film Making",
      description:
        "This course introduces students to the art of crafting compelling narratives and mastering visual storytelling. From scripting to filming and post-production, participants will gain a holistic understanding of short film creation.",
      backgroundImage: "/film.jpg",
    },
    {
      id: 4,
      title: "Photography",
      description:
        "Designed for those passionate about capturing moments, this course delves into both the technical and artistic aspects of photography. Students will learn to use cameras effectively, understand lighting, and develop their unique creative vision.",
      backgroundImage: "/digital-photography.jpeg",
    },
    {
      id: 2,
      title: "Editing Techniques",
      description:
        "This course focuses on video editing, teaching students how to assemble footage, apply effects, and create seamless transitions to produce professional-quality videos.",
      backgroundImage: "/editing.jpg",
    },
    {
      id: 3,
      title: "Social Media Design",
      description:
        "In today's digital age, the ability to create engaging content for social platforms is invaluable. This course covers the essentials of graphic design, content strategy, and platform-specific techniques to help students excel in the realm of social media.",
      backgroundImage: "/social-media.png",
    },
    {
      id: 5,
      title: "3D Animation",
      description:
        "For those interested in bringing ideas to life, this course introduces the fundamentals of 3D animation, including modeling, texturing, and rendering.",
      backgroundImage: "/3d-animation.jpeg",
    },
  ],
  empowerment: {
    description:
      "The certificate courses by Media Nexus represent a significant step forward in democratizing media education. By providing non-media students with access to professional training, the program opens up new avenues for creativity and career exploration. Whether students aspire to work in the media industry, enhance their skill set, or simply pursue a creative passion, these courses offer the perfect starting point. With a versatile curriculum, expert faculty, and state-of-the-art infrastructure, Media Nexus is committed to nurturing the next generation of media professionals and enthusiasts.",
  },
}
const duplicatedItems = [...mediaNexus.courses, ...mediaNexus.courses]
export default function Home() {
  const [isClient, setIsClient] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = ["/hero-4.jpg", "/hero-1.jpg", "/hero-2.jpg", "/hero-3.jpg"]

  useEffect(() => {
    setIsClient(true)
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  if (!isClient) {
    return null
  }

  const photos = [
    { id: 1, src: "/gallery-1.jpg", alt: "Photo 1" },
    { id: 2, src: "/gallery-2.jpeg", alt: "Photo 2" },
    { id: 3, src: "/gallery-3.jpeg", alt: "Photo 3" },
    { id: 4, src: "/gallery-4.jpeg", alt: "Photo 4" },
  ]

  const videos = [
    {
      id: 1,
      youtubeId: "obRsrjUG9YY",
      title: "Profile Video | School Of Media Studies",
    },
  ]

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[90vh] sm:h-screen flex items-center justify-center overflow-hidden">
          <AnimatePresence>
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 z-0"
            >
              <Image
                src={images[currentImageIndex] || "/placeholder.svg"}
                alt={`Hero background ${currentImageIndex + 1}`}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-white text-center px-4 sm:px-6"
          >
            <motion.h1
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 1.5,
              }}
              className="text-4xl sm:text-6xl md:text-8xl font-bold mb-3 sm:mb-4 tracking-tight pt-12"
            >
              <span className="text-cyan-400"> MEDIA NEXUS</span>
            </motion.h1>
            <p className="text-gray-300 text-base sm:text-xl md:text-2xl max-w-2xl mx-auto mb-4 sm:mb-6 px-4 sm:px-0">
              Empowering the next generation of media professionals
            </p>
          </motion.div>
        </section>
        {/* About Section */}
        <section className="relative py-16 md:py-24 ">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-8" data-aos="fade-up">
              About Media Nexus
            </h2>
            <p
            className="text-sm sm:text-lg md:text-xl text-center max-w-4xl mx-auto leading-relaxed px-4 sm:px-6 text-justify"
            data-aos="fade-up"
            data-aos-delay="200"
            >{mediaNexus.about}
            </p>

          </div>
        </section>

        {/* Empowerment Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
          <div className="absolute inset-0 z-0">
            <Image src="/Infra.JPG" alt="Infra Photo" fill className="object-cover brightness-50" priority />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-8" data-aos="fade-up">
              Empowering the Next Generation
            </h2>
            <p
              className="text-sm sm:text-lg md:text-xl text-center max-w-4xl mx-auto leading-relaxed px-4 sm:px-6 text-justify"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {mediaNexus.empowerment.description}
            </p>
          </div>
        </section>

        {/* Vision and Mission Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-16" data-aos="fade-up">
              Our Vision & Mission
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
              <Card
                className="relative text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden"
                data-aos="fade-up"
              >
                <div className="absolute inset-0">
                  <Image
                    src="/vision.JPG"
                    alt="Vision Photo"
                    fill
                    className="object-cover opacity-85 brightness-50"
                    priority
                  />
                </div>
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl sm:text-3xl mb-2 sm:mb-4">Vision</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-base sm:text-lg">{mediaNexus.vision}</p>
                </CardContent>
              </Card>
              <Card
                className="relative text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="absolute inset-0">
                  <Image
                    src="/mission.JPG"
                    alt="Mission Photo"
                    fill
                    className="object-cover opacity-85 brightness-50"
                    priority
                  />
                </div>
                <CardHeader className="relative z-10">
                  <CardTitle className="text-2xl sm:text-3xl mb-2 sm:mb-4">Mission</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="list-disc pl-5 space-y-2 text-base sm:text-lg">
                    {mediaNexus.mission.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Programs Offered Section */}
        <section className="py-16 md:py-24 bg-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-16" data-aos="fade-up">
              Programs Offered
            </h2>
            <div className="w-full" data-aos="fade-up">
              <InfiniteScrollCards>
                {duplicatedItems.map((course, index) => (
                  <Link href={`/courses/${course.id}`} key={`${course.title}-${index}`} className="no-underline">
                    <Card className="relative bg-white p-0 shrink-0 w-[300px] h-[300px] transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer flex flex-col overflow-hidden">
                      <div className="absolute inset-0">
                        <Image
                          src={course.backgroundImage || "/placeholder.svg"}
                          alt={course.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                      </div>
                      <CardHeader className="relative z-10">
                        <CardTitle className="text-xl sm:text-2xl mb-2 text-white">{course.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="relative z-10 text-justify">
                        <p className="text-sm sm:text-base text-gray-200">{course.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </InfiniteScrollCards>
            </div>
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section className="relative py-16 md:py-24">
          <div className="absolute inset-0 z-0">
            <Image
              src="/home-gallery.jpg"
              alt="Gallery Background"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row items-start justify-between">
              <div className="md:w-1/3 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-4 text-white" data-aos="fade-up">
                  Photo Gallery
                </h2>
                <p className="mb-4 text-gray-200" data-aos="fade-up" data-aos-delay="100">
                  Explore our collection of inspiring photos.
                </p>
                <Link href="/photo-gallery">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    View All Photos
                  </button>
                </Link>
              </div>
              <div className="md:w-2/3 grid grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="300">
                {photos.map((photo) => (
                  <div key={photo.id} className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer">
                    <Image
                      src={photo.src || "/placeholder.svg"}
                      alt={photo.alt}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover transition duration-300 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Video Gallery Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-100 to-blue-300">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/3 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">
                  Video Gallery
                </h2>
                <p className="mb-4" data-aos="fade-up" data-aos-delay="100">
                  Watch our collection of inspiring videos.
                </p>
                <Link href="/video-gallery">
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    View All Videos
                  </button>
                </Link>
              </div>
              <div className="md:w-1/2" data-aos="fade-up" data-aos-delay="300">
                {videos.map((video) => (
                  <div key={video.id} className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer">
                    <Image
                      src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                      alt={video.title}
                      width={640}
                      height={360}
                      className="w-full h-56 object-cover transition duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-2 left-2 bg-white rounded-full p-1">
                      <Youtube className="w-6 h-6 text-red-600" />
                    </div>
                    <Link
                      href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                        <svg
                          className="w-16 h-16 text-white opacity-80"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </Link>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                      <h2 className="text-white font-semibold">{video.title}</h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Media Coverage and Tune In Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/2" data-aos="fade-up">
                <Link href="/photo-gallery">
                  <div className="relative overflow-hidden rounded-lg shadow-lg group h-80">
                    <Image
                      src="/gallery-1.jpeg"
                      alt="Media Coverage"
                      fill
                      className="object-cover transition duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <h3 className="text-white text-2xl font-bold">Media Coverage</h3>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="w-full md:w-1/2" data-aos="fade-up" data-aos-delay="100">
                <Link href="/register">
                  <div className="relative overflow-hidden rounded-lg shadow-lg group h-80">
                    <Image
                      src="/landing.jpeg"
                      alt="Tune In"
                      fill
                      className="object-cover transition duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
                      <h3 className="text-2xl font-bold mb-2">Tune In</h3>
                      <p className="text-center px-4">Stay updated with our latest news and events</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </Suspense>
  )
}

