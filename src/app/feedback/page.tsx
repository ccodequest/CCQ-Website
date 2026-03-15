import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeedbackForm from '@/components/FeedbackForm';
import JsonLd from '@/components/JsonLd';
import { SITE } from '@/config/siteConfig';

// Force dynamic rendering to ensure stats are fresh
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: `Feedback | ${SITE.name}`,
    description: `Share feedback with ${SITE.name} about workshops, partnerships, digital experiences, or how we can improve.`,
    alternates: {
        canonical: '/feedback',
    },
    openGraph: {
        title: `Feedback | ${SITE.name}`,
        description: `Share feedback with ${SITE.name} about workshops, partnerships, digital experiences, or how we can improve.`,
        url: `${SITE.siteUrl}/feedback`,
        type: 'website',
        images: [SITE.seo.ogImage],
    },
};

export default function FeedbackPage() {
    const structuredData = [
        {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: `Feedback | ${SITE.name}`,
            description: `Share feedback with ${SITE.name} about workshops, partnerships, digital experiences, or how we can improve.`,
            url: `${SITE.siteUrl}/feedback`,
        },
        {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: SITE.siteUrl,
                },
                {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Feedback',
                    item: `${SITE.siteUrl}/feedback`,
                },
            ],
        },
    ];

    return (
        <main className="min-h-screen bg-gray-50 dark:bg-gray-950">
            <Navbar />
            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto mb-10 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6">
                    <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white p-8 md:p-10 shadow-2xl">
                        <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-[0.2em] uppercase text-blue-100">
                            Feedback Hub
                        </span>
                        <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
                            Better decisions come from clearer feedback.
                        </h1>
                        <p className="mt-4 text-sm md:text-base text-blue-100/85 max-w-2xl leading-relaxed">
                            Use this page to tell us what is resonating, what is confusing, and where you want {SITE.name} to improve across programs, events, partnerships, and product experiences.
                        </p>
                    </div>
                    <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 shadow-xl">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">What happens next</h2>
                        <ul className="mt-5 space-y-4 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            <li>We review recurring themes to improve our workshops, communications, and website experience.</li>
                            <li>If you request a follow-up, we will respond using the email address you provide.</li>
                            <li>Your submission is delivered to our team inbox through our form delivery service.</li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-4xl mx-auto">
                    <FeedbackForm />
                </div>
            </div>
            <JsonLd data={structuredData} />
            <Footer />
        </main>
    );
}
