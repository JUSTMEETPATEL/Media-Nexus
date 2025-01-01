import React from 'react';
import AssignmentAccordion from './components/assignment-accordion';

interface Props {
  params: Promise<{ courseId: string; slotId: string }>;
}

const Page = async (props: Props) => {
  const params = await props.params;
  // console.log(params);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ORIGIN}/api/get-assignment`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        courseId: params.courseId,
        slotId: params.slotId,
      }),
    }
  );
  if (!response.ok) {
    console.error('Error:', response.status, response.statusText);
    return;
  }

  const data = await response.json();
  const assignment = data.assignment;
  console.log(assignment);
  // console.log(data); //Please check the console to see the data
  
  return (
    <div className="container mx-auto px-4 py-12 sm:py-16 md:py-32 max-w-3xl">
      <h1 className='text-6xl text-center mb-24'>Your<span className='text-cyan-400'> Assignments</span></h1>
      <AssignmentAccordion assignment={assignment} />
    </div>
  );
};

export default Page;
