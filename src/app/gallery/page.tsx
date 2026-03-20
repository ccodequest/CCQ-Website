import { Metadata } from 'next';
import GalleryContent from '@/components/GalleryContent';
import { SITE } from '@/config/siteConfig';

export const metadata: Metadata = {
    title: `Gallery | ${SITE.name}`,
    description: `Explore moments of innovation, learning, and collaboration with ${SITE.name} programs, events, and workshops.`,
    alternates: {
        canonical: '/gallery',
    },
};

export default function GalleryPage() {
    return <GalleryContent />;
}
