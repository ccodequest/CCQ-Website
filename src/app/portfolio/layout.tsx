import { Metadata } from 'next';
import { SITE } from '@/config/siteConfig';

export const metadata: Metadata = {
    title: `Portfolio | ${SITE.name} Agency`,
    description: `We build revenue-driven web apps and scalable mobile solutions for growing businesses with ${SITE.name}.`,
    alternates: {
        canonical: '/portfolio',
    },
};

export default function PortfolioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
