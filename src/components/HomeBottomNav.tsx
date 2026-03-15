'use client';

import Link from 'next/link';
import { FaEnvelope, FaImages, FaLaptopCode, FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';
import MainEnquiryModal from '@/components/MainEnquiryModal';
import { SITE } from '@/config/siteConfig';

export default function HomeBottomNav() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const navItems = [
        {
            name: 'Enquire',
            icon: <FaEnvelope />,
            action: () => setIsModalOpen(true),
            isLink: false,
            color: 'text-blue-500'
        },
        {
            name: 'Gallery',
            icon: <FaImages />,
            href: '/gallery',
            isLink: true,
            color: 'text-purple-500'
        },
        {
            name: 'Web Solution',
            icon: <FaLaptopCode />,
            href: '/portfolio',
            isLink: true,
            color: 'text-green-500'
        },
        {
            name: 'WhatsApp',
            icon: <FaWhatsapp />,
            action: () => window.open(SITE.whatsappUrl, '_blank'),
            isLink: false,
            color: 'text-green-400'
        }
    ];

    return (
        <>
            <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl p-2 flex justify-between items-center px-6 transition-all duration-300">
                {navItems.map((item, idx) => {
                    if (item.isLink) {
                        return (
                            <Link
                                key={idx}
                                href={item.href || '#'}
                                className="flex flex-col items-center gap-1 p-2 active:scale-95 transition-transform"
                            >
                                <span className={`text-xl ${item.color}`}>{item.icon}</span>
                                <span className="text-[10px] font-medium text-gray-600 dark:text-gray-300">{item.name}</span>
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
                                <span className="text-[10px] font-medium text-gray-600 dark:text-gray-300">{item.name}</span>
                            </button>
                        );
                    }
                })}
            </div>

            <MainEnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
