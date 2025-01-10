'use client';

import { usePathname } from 'next/navigation';
import { EnquiryButton } from './contact-enquiry-button';

export function ContactButtonWrapper() {
  const pathname = usePathname();
  const hiddenPaths = ['/dashboard', '/faculty', '/admin'];

  if (hiddenPaths.some((path) => pathname?.startsWith(path))) {
    return null;
  }

  return <EnquiryButton />;
}
