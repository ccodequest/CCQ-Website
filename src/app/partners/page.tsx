import Navbar from '@/components/Navbar';
import Partners from '@/components/Partners';
import Footer from '@/components/Footer';
import { SITE } from '@/config/siteConfig';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: `Our Partners | ${SITE.name}`,
    description: `${SITE.name} partners with schools, colleges, and organizations to deliver meaningful EdTech programs and software solutions.`,
};

export default function PartnersPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-gray-950">
            <Navbar />
            <div className="pt-20">
                <Partners />
            </div>
            <Footer />
        </main>
    );
}
