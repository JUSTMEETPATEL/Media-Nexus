'use client';

import { usePathname } from 'next/navigation';
import { BookEnquiryButton } from './book-enquiry-button';

export function EnquiryButtonWrapper() {
  const pathname = usePathname();
  const hiddenPaths = ['/dashboard', '/faculty', '/admin'];

  if (hiddenPaths.some((path) => pathname?.startsWith(path))) {
    return null;
  }

  return <BookEnquiryButton />;
}
