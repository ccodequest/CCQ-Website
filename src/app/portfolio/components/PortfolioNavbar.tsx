'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaWhatsapp, FaArrowLeft, FaRocket } from 'react-icons/fa';
import WebDevEnquiryModal from '@/app/portfolio/components/WebDevEnquiryModal';
import { SITE } from '@/config/siteConfig';

export default function PortfolioNavbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrolled(window.scrollY > 50);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        {
            name: 'Back',
            icon: <FaArrowLeft />,
            action: () => window.location.href = '/', // Force reload to ensure clean home state or just router push
            isLink: true,
            href: '/',
            color: 'text-gray-400 hover:text-white'
        },
        {
            name: 'WhatsApp',
            icon: <FaWhatsapp className="text-xl" />,
            action: () => window.open(SITE.whatsappUrl, '_blank'),
            isLink: false,
            color: 'text-green-400 hover:text-green-300'
        },
        {
            name: 'Start Project',
            icon: <FaRocket />,
            action: () => setIsModalOpen(true),
            isLink: false,
            color: 'text-blue-400 hover:text-blue-300'
        }
    ];

    return (
        <>
            {/* DESKTOP TOP HEADER */}
            <nav className={`fixed top-4 left-0 right-0 z-50 max-w-7xl mx-auto w-[95%] md:w-[90%] rounded-2xl transition-all duration-300 border border-transparent ${scrolled ? 'bg-white/5 dark:bg-gray-900/80 backdrop-blur-md shadow-2xl border-white/10 dark:border-gray-700 py-3' : 'bg-transparent py-3'}`}>
                <div className="px-6 md:px-8">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-600 group-hover:border-blue-400 transition-colors">
                                <img src="/logo.png" alt="CCQ Logo" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-xl font-bold tracking-tight transition-colors text-white">
                                {SITE.brandName.toUpperCase()} DEV
                            </span>
                        </Link>

                        {/* Desktop Menu Actions */}
                        <div className="hidden md:flex items-center gap-6">
                            <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                                <FaArrowLeft /> Back to Home
                            </Link>

                            <a
                                href={SITE.whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-medium text-green-400 hover:text-green-300 transition-colors flex items-center gap-2"
                            >
                                <FaWhatsapp size={18} /> WhatsApp
                            </a>

                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="px-5 py-2.5 rounded-full bg-blue-600 text-white text-sm font-semibold shadow-lg hover:bg-blue-500 transform hover:-translate-y-0.5 transition-all flex items-center gap-2"
                            >
                                <FaRocket /> Start Project
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* MOBILE BOTTOM NAVBAR */}
            <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm bg-gray-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-2 flex justify-between items-center px-6">
                {navItems.map((item, idx) => {
                    if (item.isLink) {
                        return (
                            <Link
                                key={idx}
                                href={item.href || '#'}
                                className="flex flex-col items-center gap-1 p-2 active:scale-95 transition-transform"
                            >
                                <span className={`text-xl ${item.color}`}>{item.icon}</span>
                                <span className="text-[10px] font-medium text-gray-300">{item.name}</span>
                            </Link>
                        );
                    } else {
                        return (
                            <button
                                key={idx}
                                onClick={item.action}
                                className="flex flex-col items-center gap-1 p-2 active:scale-95 transition-transform"
                            >
                                <span className={`text-xl ${item.color}`}>{item.icon}</span>
                                <span className="text-[10px] font-medium text-gray-300">{item.name}</span>
                            </button>
                        );
                    }
                })}
            </div>

            <WebDevEnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
