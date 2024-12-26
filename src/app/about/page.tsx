'use client';

<<<<<<< HEAD
import { Tag } from 'lucide-react';
import { useState } from 'react';
function Feature({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
=======
import { Tag } from 'lucide-react'
import { useState } from 'react'

function Feature({ title, description }: { title: string; description: string }) {
  const [isHovered, setIsHovered] = useState(false)
>>>>>>> 5e3f64ad0248e6b65959edf0afb23ab8794b8ecc

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-white text-xl font-bold">{title}</h2>
        <div
          className="bg-white rounded-full p-2 hover:bg-opacity-90 transition-colors cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Tag className="w-5 h-5 text-[#FF5733]" />
        </div>
      </div>
      {isHovered && (
<<<<<<< HEAD
        <p className="text-zinc-100 animate-fadeIn">{description}</p>
      )}
    </div>
  );
=======
        <p className="text-white animate-fadeIn">
          {description}
        </p>
      )}
    </div>
  )
>>>>>>> 5e3f64ad0248e6b65959edf0afb23ab8794b8ecc
}

export default function Page() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-white">
      {/* pt-16 accounts for the fixed navbar height */}
      <main className="pt-16">
        <div className="flex flex-col md:flex-row min-h-[calc(100vh-4rem)] max-w-5xl mx-auto p-4 md:p-6 gap-6">
          {/* Left Column */}
          <div className="md:w-1/2 pr-4 md:pr-6">
            <h1 className="text-6xl font-bold mb-6">
              <span className="text-zinc-800">ABOUT</span>
              <br />
              <span className="text-[#FF5733]">MEDIA</span>
              <br />
              <span className="text-zinc-800">NEXUS</span>
            </h1>

            <p className="text-zinc-600 leading-relaxed">
              Welcome to MEDIA NEXUS, where we offer specialized Certificate
              Programs in Media Studies designed to empower the next generation
              of media professionals. Our courses are tailored to provide a deep
              understanding of key areas such as journalism, digital media,
              content creation, media production, and communication strategies.
              With a focus on practical learning, we ensure that our students
              gain hands-on experience and develop the necessary skills to excel
              in the fast-paced media industry.
            </p>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2 relative bg-gradient-to-b from-[#FF5733] to-[#FF4518] p-4 md:p-6 rounded-lg">
            <div className="space-y-20">
=======
    <div className="min-h-screen bg-black">
      {/* pt-16 accounts for the fixed navbar height */}
      <main className="pt-16">
        <div className="flex flex-col md:flex-row min-h-[calc(100vh-4rem)] max-w-5xl mx-auto p-4 md:p-6 gap-10">
          {/* Left Column */}
          <div className="md:w-1/2 pr-4 md:pr-6 pt-12">
            <h1 className="text-6xl font-bold mb-6">
              <span className="text-white">ABOUT</span>
              <br />
              <span className="text-[#FF5733]">MEDIA</span>
              <br />
              <span className="text-white">NEXUS</span>
            </h1>
            
            <p className="text-gray-300 leading-relaxed">
              Welcome to MEDIA NEXUS, where we offer specialized Certificate Programs
              in Media Studies designed to empower the next generation of media professionals.
              Our courses are tailored to provide a deep understanding of key
              areas such as journalism, digital media, content creation, media production,
              and communication strategies. With a focus on practical learning, we ensure
              that our students gain hands-on experience and develop the necessary skills
              to excel in the fast-paced media industry.
            </p>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2 relative bg-[#FF5733] p-4 md:p-6 rounded-lg">
            <div className="space-y-24">
>>>>>>> 5e3f64ad0248e6b65959edf0afb23ab8794b8ecc
              <Feature
                title="STATE-OF-THE-ART FACILITY"
                description="State-of-the-art facilities, modern classrooms, advanced technology, comfortable study spaces, well-equipped labs, and vibrant campus."
              />
<<<<<<< HEAD

=======
              
>>>>>>> 5e3f64ad0248e6b65959edf0afb23ab8794b8ecc
              <Feature
                title="EXPERIENCED FACULTY MEMBERS"
                description="Expert faculty with industry experience, dedicated to providing personalized guidance, fostering creativity, and encouraging critical thinking."
              />
<<<<<<< HEAD

=======
              
>>>>>>> 5e3f64ad0248e6b65959edf0afb23ab8794b8ecc
              <Feature
                title="INDUSTRIAL EXPERT GUIDANCE"
                description="Industry experts provide valuable insights, real-world knowledge, and mentorship, bridging theory with practical applications in media."
              />
<<<<<<< HEAD

=======
              
>>>>>>> 5e3f64ad0248e6b65959edf0afb23ab8794b8ecc
              <Feature
                title="INDUSTRY-RELEVANT CURRICULUM"
                description="Comprehensive curriculum integrating industry trends, practical skills, creative tools, and real-world media applications."
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
