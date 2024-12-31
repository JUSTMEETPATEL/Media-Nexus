

interface Props {
  params: Promise<{ courseId: string }>;
}



const Page = async (props: Props) => {
  const params = await props.params;
  console.log(params);

  


  return (
    <div>
        <h1>
            {params.courseId}
        </h1>
    </div>
  );
};

export default Page;
