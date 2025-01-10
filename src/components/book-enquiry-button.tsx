import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function BookEnquiryButton() {
  return (
    <Link href="/enquiry" passHref>
      <Button
        className="
          fixed right-4 top-1/3 -translate-y-1/3 -rotate-90 origin-right z-50
          bg-cyan-500 hover:bg-cyan-600 text-white
          text-lg font-semibold py-6 px-8
          transition-all duration-300 ease-in-out
          hover:shadow-lg hover:-translate-x-1 hover:scale-105
          focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50
        "
      >
        Register Now
      </Button>
    </Link>
  );
}
