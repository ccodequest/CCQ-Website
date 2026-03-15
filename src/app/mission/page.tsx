import { Metadata } from 'next';
import MissionContent from '@/components/MissionContent';
import { SITE } from '@/config/siteConfig';

export const metadata: Metadata = {
    title: `Our Mission | ${SITE.name}`,
    description: `${SITE.name} is dedicated to empowering the next generation of innovators through EdTech programs, hackathons, internships, and digital platforms.`,
};

export default function MissionPage() {
    return <MissionContent />;
}
