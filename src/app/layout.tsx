import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: 'Media Nexus',
  description:
    'Welcome to MEDIA NEXUS, where we offer specialized Certificate Programs in Media Studies designed to empower the next generation of media professionals. Our courses are tailored to provide a deep understanding of key areas such as journalism, digital media, content creation, media production, and communication strategies. With a focus on practical learning, we ensure that our students gain hands-on experience and develop the necessary skills to excel in the fast-paced media industry.',
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
  viewport: 'width=device-width, initial-scale=1.0',
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
  // verification: {
  //   google: 'your-google-site-verification',
  // },
  alternates: {
    canonical: 'https://media-nexus.vercel.app',
  },
};

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
