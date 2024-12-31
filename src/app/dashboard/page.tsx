'use client';

import { useSession } from '@/lib/auth-client';

const Page = () => {
  const session = useSession();
  console.log(session);
  if (session.data === null) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-2xl text-black font-bold">Unauthorize.....</h1>
      </div>
    );
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-2xl text-black font-bold ">
        {session.data?.user.email}
      </h1>
    </div>
  );
};

export default Page;
