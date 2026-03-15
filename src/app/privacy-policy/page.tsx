import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { SITE } from '@/config/siteConfig';

export const metadata: Metadata = {
    title: `Privacy Policy | ${SITE.name}`,
    description: `Read how ${SITE.name} collects, uses, and protects personal information across our website, enquiries, events, and programs.`,
    alternates: {
        canonical: '/privacy-policy',
    },
    openGraph: {
        title: `Privacy Policy | ${SITE.name}`,
        description: `Read how ${SITE.name} collects, uses, and protects personal information across our website, enquiries, events, and programs.`,
        url: `${SITE.siteUrl}/privacy-policy`,
        type: 'article',
        images: [SITE.seo.ogImage],
    },
};

const sections = [
    {
        title: 'What information we collect',
        paragraphs: [
            `${SITE.name} collects information you choose to share with us through enquiry forms, feedback forms, school workshop interest forms, partnership discussions, event registrations, and direct communication.`,
            'This may include your name, email address, phone number, organization or school, role, and any message, requirement, or feedback you submit while interacting with our educational programs or digital services.',
        ],
        bullets: [
            'Contact details submitted through forms or email',
            'Program, event, partnership, or project discovery information you voluntarily provide',
            'Basic usage or diagnostic information generated while you use the website',
        ],
    },
    {
        title: 'How we use your information',
        paragraphs: [
            'We use the information we collect to respond to enquiries, coordinate workshops and innovation programs, evaluate partnership interest, improve the website, review feedback, and communicate updates you have requested.',
            'We do not sell your personal information. We only use it where there is a clear operational reason tied to our educational, community, event, or service-related activities.',
        ],
    },
    {
        title: 'How information may be shared',
        paragraphs: [
            'Your information may be shared internally with team members who need it to respond to you, coordinate a school or community program, plan an event, or deliver a service.',
            'We may also use third-party services such as form processors, email providers, hosting platforms, or analytics tools when necessary to operate the website responsibly, including serverless hosting and form delivery services.',
        ],
    },
    {
        title: 'Children and school-related interactions',
        paragraphs: [
            'Some of our activities involve students, schools, and parents. Where information relates to a minor, we expect submissions and consent to be handled appropriately by a parent, guardian, school representative, or other authorized adult when required.',
            'We aim to limit collection to what is reasonably necessary to communicate, coordinate, and deliver the relevant educational or event experience.',
        ],
    },
    {
        title: 'Retention and protection',
        paragraphs: [
            'We retain submitted information only for as long as it is reasonably necessary for communication, record keeping, service delivery, and improvement of our offerings.',
            'We take reasonable technical and organizational measures to protect your information, but no internet-based system can be guaranteed to be completely secure.',
        ],
    },
    {
        title: 'Your choices',
        paragraphs: [
            `You may contact us at ${SITE.emails.support} to request access, correction, or deletion of personal information you have shared, subject to any legal or operational requirements that require retention.`,
            'If you no longer want to hear from us, you can ask us to stop using your information for follow-up communication.',
        ],
    },
    {
        title: 'Updates to this policy',
        paragraphs: [
            'We may update this Privacy Policy from time to time to reflect changes in our website, services, or legal obligations.',
            `This policy was last updated on ${SITE.legal.effectiveDate}. When we make material changes, we will update the effective date shown on this page.`,
        ],
    },
] as const;

export default function PrivacyPolicyPage() {
    const description = `Read how ${SITE.name} collects, uses, and protects personal information across our website, enquiries, events, and programs.`;

    return (
        <LegalPage
            eyebrow="Privacy"
            title="Privacy Policy"
            intro={`This Privacy Policy explains how ${SITE.name} collects, uses, stores, and protects information when you interact with our website, submit forms, participate in workshops or events, explore partnerships, or communicate with our team.`}
            path="/privacy-policy"
            description={description}
            sections={[...sections]}
        />
    );
}