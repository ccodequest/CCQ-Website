import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { SITE } from '@/config/siteConfig';

export const metadata: Metadata = {
    title: `Terms of Service | ${SITE.name}`,
    description: `Review the terms that govern use of the ${SITE.name} website, enquiries, workshops, digital services, and related communications.`,
    alternates: {
        canonical: '/terms-of-service',
    },
    openGraph: {
        title: `Terms of Service | ${SITE.name}`,
        description: `Review the terms that govern use of the ${SITE.name} website, enquiries, workshops, digital services, and related communications.`,
        url: `${SITE.siteUrl}/terms-of-service`,
        type: 'article',
        images: [SITE.seo.ogImage],
    },
};

const sections = [
    {
        title: 'Acceptance of these terms',
        paragraphs: [
            `By accessing or using the ${SITE.name} website, forms, or related services, you agree to these Terms of Service. If you do not agree, you should not use the website or submit information through it.`,
        ],
    },
    {
        title: 'Permitted use',
        paragraphs: [
            'You may use this website to learn about our services, submit enquiries, request collaborations, provide feedback, and access public information about our initiatives.',
        ],
        bullets: [
            'Do not misuse forms, automated submissions, or any interactive features',
            'Do not attempt unauthorized access to the website or associated systems',
            'Do not submit false, abusive, infringing, or unlawful content',
        ],
    },
    {
        title: 'Programs, services, and project discussions',
        paragraphs: [
            'Content on this website is informational and may change without notice. Any school workshop delivery, hackathon support, project engagement, partnership, or digital service relationship may require a separate written agreement, proposal, or statement of work.',
            'Where a separate contract exists, that contract will govern the specific service relationship over these general website terms.',
        ],
    },
    {
        title: 'Event participation and registrations',
        paragraphs: [
            'Event pages, registration forms, and workshop announcements may include additional schedules, eligibility requirements, venue rules, or participation instructions.',
            'We may modify, postpone, or cancel events or sessions where operational, safety, or scheduling conditions require it.',
        ],
    },
    {
        title: 'Intellectual property',
        paragraphs: [
            `Unless otherwise stated, the website content, branding, text, graphics, and original materials are owned by or licensed to ${SITE.name}.`,
            'You may not reproduce, distribute, modify, or commercially exploit our content without prior written permission, except where the law permits limited fair use.',
        ],
    },
    {
        title: 'Disclaimers and limitation of liability',
        paragraphs: [
            'We aim to keep the website accurate and available, but we do not guarantee uninterrupted access, complete accuracy, or suitability for every purpose.',
            `To the maximum extent permitted by law, ${SITE.name} is not liable for indirect, incidental, special, or consequential losses arising from use of the website or reliance on its content.`,
        ],
    },
    {
        title: 'Governing law',
        paragraphs: [
            `These terms are governed by the laws applicable in ${SITE.legal.jurisdiction}. Any disputes will be subject to the appropriate courts or forums in that jurisdiction, unless applicable law requires otherwise.`,
        ],
    },
] as const;

export default function TermsOfServicePage() {
    const description = `Review the terms that govern use of the ${SITE.name} website, enquiries, workshops, digital services, and related communications.`;

    return (
        <LegalPage
            eyebrow="Terms"
            title="Terms of Service"
            intro={`These terms explain the rules for using the ${SITE.name} website and related digital touchpoints. They are designed to protect both your access and our ability to operate the site responsibly.`}
            path="/terms-of-service"
            description={description}
            sections={[...sections]}
        />
    );
}