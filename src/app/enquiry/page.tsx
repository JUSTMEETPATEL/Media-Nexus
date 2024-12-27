// pages/enquiry.tsx (or the relevant page component)
import getCourses from '@/lib/getCourses';
import EnquiryForm from './components/enquiry-form';

export default async function Page() {
  const courses = await getCourses();  // Fetch courses with the correct data structure

  return (
    <div>
      <h1>Enquiry Form</h1>
      <EnquiryForm courses={courses} />  {/* Pass the courses here */}
    </div>
  );
}
