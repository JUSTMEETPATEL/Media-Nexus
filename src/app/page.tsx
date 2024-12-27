import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Infrastructure } from '@/components/infrastructure';
import { Loader } from '@/components/loader';
import { ProgramOffered } from '@/components/program-offered';
import { BookOpen, Camera, ChevronRight, CurlyBraces, Film, Pencil } from 'lucide-react';
import { Button } from '@/components/ui/button';

const mediaNexus = {
  vision: "To empower aspiring media professionals with cutting-edge skills and creative expertise, fostering innovation and excellence in the ever-evolving digital landscape.",
  mission: [
    "To deliver industry-focused, hands-on training in media studies through innovative teaching methods and real-world projects.",
    "To nurture creativity, technical proficiency, and storytelling abilities in students for successful media careers.",
    "To provide a dynamic learning environment that bridges the gap between education and industry demands.",
    "To inspire a passion for continuous learning and adaptability in the rapidly changing media industry."
  ],
  about: "The Media Nexus, a new venture of SRMIST-Ramapuram, is set to revolutionize learning opportunities for non-media students with the introduction of dynamic certificate courses. Recognizing the increasing interest in creative and technical media skills, these programs aim to provide hands-on training and foundational knowledge in diverse media arts disciplines. Designed specifically for students of Eeswari Engineering College, the courses also extend an invitation to other interested learners, subject to availability.",
  courses: [
    {
      title: "Short Film Making",
      description: "This course introduces students to the art of crafting compelling narratives and mastering visual storytelling. From scripting to filming and post-production, participants will gain a holistic understanding of short film creation."
    },
    {
      title: "Photography",
      description: "Designed for those passionate about capturing moments, this course delves into both the technical and artistic aspects of photography. Students will learn to use cameras effectively, understand lighting, and develop their unique creative vision."
    },
    {
      title: "Editing Techniques",
      description: "This course focuses on video editing, teaching students how to assemble footage, apply effects, and create seamless transitions to produce professional-quality videos."
    },
    {
      title: "Social Media Design",
      description: "In today's digital age, the ability to create engaging content for social platforms is invaluable. This course covers the essentials of graphic design, content strategy, and platform-specific techniques to help students excel in the realm of social media."
    },
    {
      title: "3D Animation",
      description: "For those interested in bringing ideas to life, this course introduces the fundamentals of 3D animation, including modeling, texturing, and rendering."
    }
  ],
  structure: {
    duration: "15 weeks",
    batches: [
      { name: "Batch 1", time: "9:00 AM – 12:00 NOON" },
      { name: "Batch 2", time: "1:00 PM – 4:00 PM" }
    ],
    practicalSessions: 80,
    theoreticalSessions: 20,
    totalCapacity: 300
  },
  facultyAndInfrastructure: {
    facilities: [
      "Classes will be conducted in well-equipped labs and classrooms, featuring all the necessary software and tools for media production.",
      "Students are encouraged to bring their own laptops and cameras for a more personalized learning experience.",
      "The infrastructure is designed to foster creativity and collaboration, enabling students to explore their potential in a supportive and resource-rich environment."
    ]
  },
  evaluationAndCertification: {
    evaluationMethods: [
      "Attendance",
      "Practical assignments",
      "Final project submissions"
    ],
    certificationRequirement: "A minimum attendance of 75% is mandatory to qualify for certification.",
    certificationOutcome: "Upon successful completion of the course, students will receive a certificate that recognizes their achievement and demonstrates their newly acquired skills."
  },
  infrastructureAndSupport: {
    facilities: [
      "Classes will be conducted in state-of-the-art labs and classrooms equipped with essential software and tools to support media production.",
      "Students are encouraged to bring their own laptops and cameras for a personalized learning experience.",
      "The institution ensures a seamless learning process by providing technical support and access to necessary resources.",
      "Workstations are designed to accommodate collaborative and individual projects effectively.",
      "Specialized software for editing, design, and animation will be available for hands-on training.",
      "The infrastructure fosters creativity, enabling students to explore and apply their skills in a professional environment.",
      "This supportive setup ensures students can focus on learning without technical hindrances."
    ]
  },
  financialAspects: {
    courseFee: "₹10,000",
    description: "Each course is priced at ₹10,000, offering affordable access to high-quality media training. This fee ensures value for students through expert instruction and practical learning."
  },
  empowerment: {
    description: "The certificate courses by Media Nexus represent a significant step forward in democratizing media education. By providing non-media students with access to professional training, the program opens up new avenues for creativity and career exploration. Whether students aspire to work in the media industry, enhance their skill set, or simply pursue a creative passion, these courses offer the perfect starting point. With a versatile curriculum, expert faculty, and state-of-the-art infrastructure, Media Nexus is committed to nurturing the next generation of media professionals and enthusiasts."
  }
};

export default function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/landing.jpg"
              alt="Studio background"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>

          <div className="relative z-10 text-white text-center px-4">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
              MEDIA <span className="text-cyan-400">NEXUS</span>
            </h1>
            <p className="text-gray-300 text-xl md:text-2xl max-w-2xl mx-auto mb-8">
              Empowering the next generation of media professionals
            </p>
            <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-400 text-black">
              <Link href="/studio">
                Explore Studio <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-[1]"></div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-gradient-to-b from-slate-100 to-white text-black">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center mb-8">About Media Nexus</h2>
            <p className="text-xl text-center max-w-4xl mx-auto leading-relaxed">
              {mediaNexus.about}
            </p>
          </div>
        </section>

        {/* Vision and Mission Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center mb-16">Our Vision & Mission</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
                <CardHeader>
                  <CardTitle className="text-3xl mb-4">Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">{mediaNexus.vision}</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-purple-500 to-pink-600 text-white">
                <CardHeader>
                  <CardTitle className="text-3xl mb-4">Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-lg">
                    {mediaNexus.mission.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-24 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center mb-16">Our Courses</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mediaNexus.courses.map((course, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl">
                      {getCourseIcon(course.title)}
                      <span className="ml-2">{course.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{course.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Course Structure Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center mb-16">Course Structure</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Duration and Batches</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl mb-4"><strong>Duration:</strong> {mediaNexus.structure.duration}</p>
                  <p className="text-xl mb-4"><strong>Total Capacity:</strong> {mediaNexus.structure.totalCapacity} students</p>
                  <div className="mt-4">
                    <strong className="text-xl">Batches:</strong>
                    <ul className="list-disc pl-5 mt-2">
                      {mediaNexus.structure.batches.map((batch, index) => (
                        <li key={index} className="text-lg">{batch.name}: {batch.time}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Session Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center items-center h-full">
                    <div className="w-64 h-64 relative">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <circle cx="50" cy="50" r="45" fill="#e0e7ff" />
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          fill="transparent"
                          stroke="#818cf8"
                          strokeWidth="10"
                          strokeDasharray={`${mediaNexus.structure.practicalSessions * 2.83} 283`}
                          transform="rotate(-90 50 50)"
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col justify-center items-center">
                        <p className="text-4xl font-bold text-indigo-600">{mediaNexus.structure.practicalSessions}%</p>
                        <p className="text-lg text-gray-600">Practical</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-center mt-4 text-lg">
                    <strong>{mediaNexus.structure.theoreticalSessions}%</strong> Theoretical Sessions
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Infrastructure Section */}
        <Infrastructure />

        {/* Evaluation and Certification Section */}
        <section className="py-24 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center mb-16">Evaluation & Certification</h2>
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Path to Success</CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Evaluation Methods</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {mediaNexus.evaluationAndCertification.evaluationMethods.map((method, index) => (
                      <li key={index} className="text-lg">{method}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Certification</h3>
                  <p className="text-lg mb-4"><strong>Requirement:</strong> {mediaNexus.evaluationAndCertification.certificationRequirement}</p>
                  <p className="text-lg">{mediaNexus.evaluationAndCertification.certificationOutcome}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Financial Aspects Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center mb-16">Investment in Your Future</h2>
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-3xl text-center">Course Fee</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-5xl font-bold text-center mb-8 text-cyan-600">{mediaNexus.financialAspects.courseFee}</p>
                <p className="text-center text-lg">{mediaNexus.financialAspects.description}</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Empowerment Section */}
        <section className="py-24 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center mb-8">Empowering the Next Generation</h2>
            <p className="text-xl text-center max-w-4xl mx-auto leading-relaxed">
              {mediaNexus.empowerment.description}
            </p>
          </div>
        </section>

        {/* Programs Offered Section */}
        <div className="mt-28">
          <ProgramOffered />
        </div>
      </main>
    </Suspense>
  );
}

function getCourseIcon(title: string) {
  switch (title) {
    case "Short Film Making":
      return <Film className="h-6 w-6" />;
    case "Photography":
      return <Camera className="h-6 w-6" />;
    case "Editing Techniques":
      return <Pencil className="h-6 w-6" />;
    case "Social Media Design":
      return <BookOpen className="h-6 w-6" />;
    case "3D Animation":
      return <CurlyBraces className="h-6 w-6" />;
    default:
      return null;
  }
}