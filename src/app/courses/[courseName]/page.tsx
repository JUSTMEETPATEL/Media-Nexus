
import { notFound } from "next/navigation"
import { CourseContent } from "./components/course-content"
// import { BookingForm } from "@/components/booking-form" // Assuming this is where your booking form is

const specializationDetails = {
  shortFilmMaking: {
    title: "Why Specialize in Short Film Making?",
    description:
      "The Certificate Course in Short Film Making is your gateway to mastering the art of storytelling and stepping into a rewarding career in the creative industry. Here's why this program is the perfect choice for aspiring filmmakers:",
    points: [
      {
        title: "Hands-On Filmmaking Experience",
        description:
          "Learn by doing! From scripting to post-production, gain practical experience at every stage of the filmmaking process, culminating in the creation of your very own short film.",
      },
      {
        title: "Storytelling Mastery",
        description:
          "Develop the skills to craft compelling narratives and visually communicate your ideas.",
        subpoints: [
          "Write impactful scripts tailored for short films.",
          "Create engaging characters with depth and relatability.",
          "Use visual storytelling techniques to evoke emotion and captivate your audience.",
        ],
      },
      {
        title: "Industry-Relevant Skills",
        description:
          "Master the tools and techniques used by professionals, including:",
        subpoints: [
          "Cinematography: Understand lighting, camera angles, and shot composition.",
          "Directing: Lead actors and crew to bring your vision to life.",
          "Editing: Use industry-standard software to assemble, refine, and enhance your film.",
          "Sound Design: Create immersive audio experiences with clean dialogue, ambient sounds, and effects.",
        ],
      },
      {
        title: "Versatility Across Industries",
        description:
          "Beyond entertainment, short filmmaking is a valuable skill for various sectors, including:",
        subpoints: [
          "Education: Develop instructional videos and creative learning content.",
          "Corporate: Create impactful promotional or training videos.",
          "Non-Profit: Produce documentaries or awareness campaigns.",
        ],
      },
    ],
  },
  videoEditing: {
    title: "Why Specialize in Video Editing?",
    points: [
      "Essential for Storytelling: Video editing transforms raw footage into engaging narratives.",
      "High Demand Across Industries: From films to social media, video editors are needed everywhere.",
      "Versatile Career Opportunities: Opens doors to roles like film editor, content creator, and motion graphics designer.",
      "Creative and Technological Mastery: Use tools like Adobe Premiere Pro and DaVinci Resolve for professional edits.",
      "Endless Career Growth: Video editing offers a dynamic and rewarding career path.",
    ],
  },
  digitalPhotography: {
    title: "Why Specialize in Digital Photography?",
    points: [
      "Master the Art of Visual Storytelling: Capture moments and tell compelling stories through powerful imagery.",
      "High Demand Across Industries: From advertising to e-commerce, photographers are highly sought after.",
      "Diverse Career Opportunities: Roles include portrait photographer, photojournalist, and wildlife photographer.",
      "Creative and Technical Expertise: Use advanced cameras, lighting, and post-processing tools.",
      "Expand Your Career Horizons: With the rise of social media and digital marketing, digital photography offers global opportunities.",
    ],
  },
  socialMediaDesign: {
    title: "Why Specialize in Social Media Design?",
    points: [
      "Drive Engagement Through Visual Storytelling: Create visually striking content that drives interaction.",
      "High Demand Across Industries: Brands and influencers need impactful social media designs.",
      "Diverse Career Opportunities: Roles include content designer, digital marketer, and creative consultant.",
      "Master Design Tools and Trends: Gain expertise in Canva, Photoshop, Illustrator, and more.",
      "Be at the Heart of Digital Marketing: Social media design is crucial for branding and online visibility.",
    ],
  },
  threeDAnimation: {
    title: "Why Specialize in 3D Animation?",
    points: [
      "Master the Art of Storytelling Through Animation: Bring characters and worlds to life.",
      "High Demand Across Industries: Essential in gaming, films, AR/VR, and e-learning.",
      "Diverse Career Opportunities: Roles include character animator, VFX artist, and game designer.",
      "Expertise in Advanced Tools and Techniques: Use software like Maya, Blender, and Unreal Engine.",
      "Unlock Creative and Technological Potential: 3D animation offers a dynamic and innovative career path.",
    ],
  },
} as const

type CourseNames = keyof typeof specializationDetails

export default function CoursePage({ params }: { params: { courseName: string } }) {
  const courseName = params.courseName as CourseNames
  const courseData = specializationDetails[courseName]

  if (!courseData) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <CourseContent courseData={courseData} />
          <EnquiryForm />
        </div>
      </div>
    </div>
  )
}

