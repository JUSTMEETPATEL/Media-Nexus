import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

const Page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    return redirect('/');
  }
  const user = session?.user;
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
