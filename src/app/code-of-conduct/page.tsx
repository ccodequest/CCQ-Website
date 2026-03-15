import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { SITE } from '@/config/siteConfig';

export const metadata: Metadata = {
    title: `Code of Conduct | ${SITE.name}`,
    description: `Read the expectations for respectful participation in ${SITE.name} programs, workshops, hackathons, events, and online interactions.`,
    alternates: {
        canonical: '/code-of-conduct',
    },
    openGraph: {
        title: `Code of Conduct | ${SITE.name}`,
        description: `Read the expectations for respectful participation in ${SITE.name} programs, workshops, hackathons, events, and online interactions.`,
        url: `${SITE.siteUrl}/code-of-conduct`,
        type: 'article',
        images: [SITE.seo.ogImage],
    },
};

const sections = [
    {
        title: 'Our standard',
        paragraphs: [
            `${SITE.name} is committed to creating a learning and collaboration environment that is respectful, inclusive, safe, and welcoming.`,
            'This Code of Conduct applies to participants, parents, students, educators, school representatives, partners, speakers, volunteers, vendors, and team members across our website, workshops, hackathons, school events, collaboration calls, and digital communities.',
        ],
    },
    {
        title: 'Expected behavior',
        paragraphs: [
            'We expect everyone in our spaces to engage with curiosity, professionalism, and respect for others.',
        ],
        bullets: [
            'Communicate respectfully and constructively',
            'Support a safe environment for learners of different ages, backgrounds, and experience levels',
            'Respect boundaries, privacy, and consent in both physical and online settings',
            'Follow reasonable instructions from organizers, mentors, and moderators',
        ],
    },
    {
        title: 'Unacceptable behavior',
        paragraphs: [
            'We do not tolerate harassment, bullying, intimidation, discrimination, hate speech, sexualized behavior, threats, doxxing, or deliberate disruption of events or online spaces.',
        ],
        bullets: [
            'Abusive, insulting, or discriminatory language',
            'Unwanted physical contact, stalking, or repeated boundary violations',
            'Sharing private information without permission',
            'Disruptive conduct that interferes with participation or safety',
        ],
    },
    {
        title: 'Reporting and response',
        paragraphs: [
            `If you experience or witness conduct that violates this Code of Conduct, report it to our team as soon as possible at ${SITE.emails.support}. We will review concerns promptly and take appropriate action based on severity and context.`,
            'Possible actions may include a warning, removal from an event or community space, restriction of access, or escalation to relevant authorities where necessary.',
        ],
    },
    {
        title: 'Special care in student-focused environments',
        paragraphs: [
            'Because many of our programs involve students and school communities, adults participating in our spaces must maintain appropriate professional boundaries and behavior at all times.',
            'Any conduct that compromises student safety, wellbeing, or dignity will be treated with heightened seriousness.',
        ],
    },
    {
        title: 'Participant responsibility',
        paragraphs: [
            'By attending or participating in our activities, you agree to help maintain a respectful environment and to cooperate with organizers if a conduct issue is being reviewed.',
        ],
    },
] as const;

export default function CodeOfConductPage() {
    const description = `Read the expectations for respectful participation in ${SITE.name} programs, workshops, hackathons, events, and online interactions.`;

    return (
        <LegalPage
            eyebrow="Conduct"
            title="Code of Conduct"
            intro={`We want every interaction with ${SITE.name} to feel safe, respectful, and productive. This Code of Conduct explains the behavior expected across our learning experiences, events, partnerships, and online spaces.`}
            path="/code-of-conduct"
            description={description}
            sections={[...sections]}
        />
    );
}