import React from 'react';

interface Props {
  params: Promise<{ courseId: string }>;
}

const Page = async (props: Props) => {
  const params = await props.params;
  console.log(params);
  return (
    <div className='container mx-auto px-4 py-12 sm:py-16 md:py-32 max-w-3xl'>
      <h1>{params.courseId}</h1>
    </div>
  );
};

export default Page;
