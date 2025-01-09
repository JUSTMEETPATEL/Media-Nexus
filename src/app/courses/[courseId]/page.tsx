import { notFound } from 'next/navigation';
import { specializations } from './data/specialization';
import { CourseContent } from './components/course-content';
import EnquiryForm from '../../../components/enquiry-form';
import { GraduationCap } from 'lucide-react';

interface CoursePageProps {
  params: Promise<{
    courseId: string;
  }>;
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { courseId: courseIdString } = await params;
  const courseId = parseInt(courseIdString);

  if (isNaN(courseId)) {
    notFound();
  }

  const specialization = specializations.find((s) => s.id === courseId);

  if (!specialization) {
    notFound();
  }

  return (
    <div className="container mx-auto py-8 pt-36 bg-white">
      <div className="text-center mb-12">
        <GraduationCap className="w-16 h-16 mx-auto mb-4 text-cyan-400" />
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          What you&apos;ll Learn?
        </h1>
        <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
      </div>
      <div className="grid lg:grid-cols-[2fr,1fr] gap-8">
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <CourseContent specialization={specialization} />
          </div>
        </div>
        <div className="lg:sticky lg:top-8 lg:self-start">
          <EnquiryForm />
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return specializations.map((specialization) => ({
    courseId: specialization.id.toString(),
  }));
}
