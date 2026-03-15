import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import HackathonRegisterButton from '@/components/HackathonRegisterButton';
import { SpeedInsights } from '@vercel/speed-insights/next';
import JsonLd from '@/components/JsonLd';
import { SITE } from '@/config/siteConfig';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.siteUrl),
  title: {
    default: SITE.seo.defaultTitle,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: ['CCQ', 'Coding for Kids', 'STEM Education', 'School Workshops', 'Hackathons', 'Innovation Programs', 'Web Development', 'Technology Education'],
  authors: [{ name: `${SITE.name} Team` }],
  creator: SITE.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE.siteUrl,
    title: SITE.seo.defaultTitle,
    description: SITE.description,
    siteName: SITE.name,
    images: [
      {
        url: SITE.seo.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE.name} - ${SITE.tagline}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.seo.defaultTitle,
    description: SITE.description,
    images: [SITE.seo.ogImage],
    creator: SITE.seo.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.siteUrl,
      logo: new URL(SITE.seo.ogImage, SITE.siteUrl).href,
      sameAs: [SITE.social.linkedin, SITE.social.instagram].filter(Boolean),
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          email: SITE.emails.support,
          areaServed: 'IN',
          availableLanguage: ['English'],
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE.name,
      url: SITE.siteUrl,
      description: SITE.description,
      publisher: {
        '@type': 'Organization',
        name: SITE.name,
      },
    },
  ];

  return (
    <html lang="en" className={`${poppins.variable} dark`}> 
      <body className="bg-gray-900 text-white font-poppins overflow-x-hidden">
        <JsonLd data={structuredData} />
        {children}
        <HackathonRegisterButton />
        <SpeedInsights />
      </body>
    </html>
  );
}