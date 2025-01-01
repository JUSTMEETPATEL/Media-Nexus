import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import { Toaster } from '@/components/ui/toaster';
import { BookEnquiryButton } from '@/components/book-enquiry-button';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
}

export const metadata: Metadata = {
  title: 'Media Nexus',
  description: 'Welcome to MEDIA NEXUS, where we offer specialized Certificate Programs in Media Studies...',
  keywords: [
    'Media Studies',
    'Certificate Programs',
    'Journalism',
    'Digital Media',
    'Content Creation',
    'Media Production',
    'Communication Strategies',
  ],
  authors: [{ name: 'Media Nexus Team' }],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://media-nexus.vercel.app',
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        {!['/dashboard', '/faculty', '/admin'].some((path) =>
          window.location.pathname.startsWith(path)
        ) && <BookEnquiryButton />}
        <Toaster />
      </body>
    </html>
  );
}
