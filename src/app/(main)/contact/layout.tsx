import { Metadata } from 'next';
import { SITE } from '@/config/siteConfig';

export const metadata: Metadata = {
    title: `Contact Us | ${SITE.name}`,
    description: `Get in touch with ${SITE.name} for enquiries, collaborations, or support regarding our EdTech programs and services.`,
    alternates: {
        canonical: '/contact',
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
