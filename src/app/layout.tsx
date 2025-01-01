import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import { Toaster } from '@/components/ui/toaster';
import JsonLd from '@/components/JSON-LD';
import { EnquiryButtonWrapper } from '@/components/book-enquiry-button-wrapper';

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
};

export const metadata: Metadata = {
  metadataBase: new URL('https://media-nexus.vercel.app'),
  title: {
    default: 'Media Nexus - Professional Media Studies Certification',
    template: '%s | Media Nexus',
  },
  description:
    'Media Nexus offers industry-leading Certificate Programs in Media Studies, Journalism, and Digital Media. Join our expert-led courses for hands-on experience in modern media production.',
  keywords: [
    'Media Studies Certificate',
    'Digital Media Training',
    'Journalism Course',
    'Media Production Program',
    'Content Creation Course',
    'Communication Studies',
    'Media Education India',
    'Professional Media Training',
    'Digital Content Strategy',
    'Media Industry Certification',
  ],
  authors: [{ name: 'Media Nexus Team' }],
  creator: 'Media Nexus',
  publisher: 'Media Nexus',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://media-nexus.vercel.app',
    title: 'Media Nexus - Professional Media Studies Certification',
    description:
      'Transform your media career with our professional certification programs.',
    siteName: 'Media Nexus',
    images: [
      {
        url: '/Final Logo.png',
        width: 1200,
        height: 630,
        alt: 'Media Nexus - Professional Media Education',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Media Nexus - Professional Media Studies Certification',
    description:
      'Transform your media career with our professional certification programs.',
    images: ['/twitter-image.jpg'],
    creator: '@MediaNexus',
    site: '@MediaNexus',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://media-nexus.vercel.app',
    languages: {
      'en-US': 'https://media-nexus.vercel.app/en-US',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Media Nexus",
    "url": "https://media-nexus.vercel.app",
    "logo": "https://media-nexus.vercel.app/Final Logo.png",
    "description": "Professional Media Studies Certification Programs",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "offers": {
      "@type": "Offer",
      "category": "Media Studies Certification"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Media Studies Programs",
      "itemListElement": [
        {
          "@type": "Course",
          "name": "Digital Media Production",
          "description": "Comprehensive course in digital media production"
        },
        {
          "@type": "Course",
          "name": "Modern Journalism",
          "description": "Professional journalism training program"
        }
      ]
    }
  };


  return (
    <html lang="en">
      <head>
        <JsonLd data={schemaData} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <EnquiryButtonWrapper />
        <Toaster />
      </body>
    </html>
  );
}
