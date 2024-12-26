import Link from 'next/link';
import { Button, buttonVariants } from './ui/button';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

const Navbar = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <div className="border-b px-4">
      <div className="flex items-center justify-between h-16 mx-auto">
        <h1 className="font-bold text-4xl">
          <span className="text-orange-600">MEDIA</span> NEXUS
        </h1>
        <div className="flex items-center space-x-4 mr-28">
          <Link href="/" className="">
            Home
          </Link>
          <Link href="/about" className="">
            About
          </Link>
          <Link href="/courses" className="">
            Courses
          </Link>
          <Link href="/contact" className="">
            Contact
          </Link>
        </div>
        <div>
          {session ? (
            <form
              action={async () => {
                'use server';

                await auth.api.signOut({
                  headers: await headers(),
                });
                redirect('/');
              }}
            >
              <Button type="submit">Sign Out</Button>
            </form>
          ) : (
            <Link href="/signin" className={buttonVariants()}>
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
