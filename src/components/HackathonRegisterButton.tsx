'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaClipboardList } from 'react-icons/fa';
import { SITE } from '@/config/siteConfig';

export default function HackathonRegisterButton() {
    const pathname = usePathname();

    // Hide button on the feedback page and portfolio section
    // We can probably keep the check for /feedback just in case, or remove it if that page is going away.
    // For now, I'll keep the exclude logic similar to avoid showing it where it shouldn't be.
    if (pathname === '/feedback' || pathname?.startsWith('/portfolio')) return null;

    return (
        <Link
            href={SITE.hackathonRegistrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed right-0 top-1/2 -translate-y-1/2 z-[90] hidden md:flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white py-4 px-4 rounded-l-2xl shadow-lg transition-all duration-300 hover:pr-6 group border-l-2 border-t-2 border-b-2 border-white/20"
        >
            <span className="writing-mode-vertical text-sm font-bold tracking-widest uppercase transform rotate-180" style={{ writingMode: 'vertical-rl' }}>
                Register Now
            </span>
            <FaClipboardList className="text-xl animate-pulse" />
        </Link>
    );
}
