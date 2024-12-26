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
      <div className="flex items-center justify-between mx-auto max-w-4xl h-16">
        <h1 className="font-bold">Secure App</h1>
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
