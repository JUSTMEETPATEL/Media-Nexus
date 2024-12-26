import { redirect } from "next/navigation";
import { session } from "@/lib/session";

const Page = async () => {
  const userSession = await session();
  if (!userSession) {
    return redirect("/");
  }
  const user = userSession?.user;
  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        <li>Name: {user.name}</li>
        <li>Email: {user.email}</li>
      </ul>
    </div>
  );
};

export default Page;
