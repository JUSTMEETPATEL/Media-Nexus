import React from 'react';

interface Props {
  params: Promise<{ courseId: string; slotId: string }>;
}

const Page = async (props: Props) => {
  const params = await props.params;
  // console.log(params);
  return (
    <div className="container mx-auto px-4 py-12 sm:py-16 md:py-32 max-w-3xl">
      <h2>{params.courseId}</h2>
      <h2>{params.slotId}</h2>
    </div>
  );
};

export default Page;
