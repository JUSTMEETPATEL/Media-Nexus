"use client";

import { useSession } from "@/lib/auth-client";
import { redirect } from "next/navigation";


const Page = () => {
    const session = useSession();
    console.log(session);
    if(session.data === null){ 
        redirect("/sign-in");
    }

  return (
    <div className="h-screen flex items-center justify-center"> 
        <h1 className="text-2xl text-black font-bold ">
        {session.data?.user.email}
        </h1>
    </div>
  )
}

export default Page
