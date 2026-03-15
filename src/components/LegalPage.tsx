import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { SITE } from '@/config/siteConfig';

interface LegalSection {
    readonly title: string;
    readonly paragraphs: readonly string[];
    readonly bullets?: readonly string[];
}

interface LegalPageProps {
    eyebrow: string;
    title: string;
    intro: string;
    path: string;
    description: string;
    sections: readonly LegalSection[];
}

export default function LegalPage({ eyebrow, title, intro, path, description, sections }: LegalPageProps) {
    const pageUrl = `${SITE.siteUrl}${path}`;
    const structuredData = [
        {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: `${title} | ${SITE.name}`,
            description,
            url: pageUrl,
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
                    name: title,
                    item: pageUrl,
                },
            ],
        },
    ];

    return (
        <main className="min-h-screen bg-gray-50 dark:bg-gray-950">
            <Navbar />
            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
                        <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-8 md:px-12 py-12 text-white">
                            <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-[0.22em] uppercase text-blue-100">
                                {eyebrow}
                            </span>
                            <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">{title}</h1>
                            <p className="mt-4 max-w-3xl text-sm md:text-base text-blue-100/85 leading-relaxed">{intro}</p>
                            <div className="mt-6 flex flex-wrap gap-3 text-xs text-blue-100/80">
                                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">Effective {SITE.legal.effectiveDate}</span>
                                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">Jurisdiction: {SITE.legal.jurisdiction}</span>
                            </div>
                        </div>

                        <div className="px-8 md:px-12 py-10 space-y-8">
                            {sections.map((section) => (
                                <section key={section.title} className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-950/50 p-6 md:p-8">
                                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">{section.title}</h2>
                                    <div className="mt-4 space-y-3 text-sm md:text-base leading-relaxed text-gray-600 dark:text-gray-300">
                                        {section.paragraphs.map((paragraph) => (
                                            <p key={paragraph}>{paragraph}</p>
                                        ))}
                                    </div>
                                    {section.bullets && (
                                        <ul className="mt-4 space-y-2 text-sm md:text-base text-gray-700 dark:text-gray-200 list-disc pl-5">
                                            {section.bullets.map((bullet) => (
                                                <li key={bullet}>{bullet}</li>
                                            ))}
                                        </ul>
                                    )}
                                </section>
                            ))}

                            <section className="rounded-2xl border border-blue-100 dark:border-blue-900/40 bg-blue-50 dark:bg-blue-950/30 p-6 md:p-8">
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Questions or requests</h2>
                                <p className="mt-3 text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300">
                                    For any questions about these policies, contact us at <a href={`mailto:${SITE.emails.primary}`} className="font-semibold text-blue-700 dark:text-blue-300 hover:underline">{SITE.emails.primary}</a>.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <JsonLd data={structuredData} />
            <Footer />
        </main>
    );
}