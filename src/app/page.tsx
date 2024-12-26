import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Link href="/signin" className={buttonVariants()}>
        Sign In
      </Link>
    </div>
  );
}
