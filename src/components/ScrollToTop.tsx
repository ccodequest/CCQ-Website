'use client';

import { useState, useEffect } from 'react';
import { FaArrowUp, FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE } from '@/config/siteConfig';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="fixed bottom-24 md:bottom-8 right-6 z-40 flex flex-col gap-4 items-end pointer-events-none">

            {/* Always visible WhatsApp (Desktop only here? User said "along with it", maybe meaning always valid)
                Values: 
                - On mobile: The bottom navbar already has WhatsApp. So maybe HIDE this on mobile to avoid duplicates?
                - User said: "in the website give a button to scroll up easily ... and a whatapp button along with it"
                
                I will show both on desktop. On mobile, the bottom nav covers WhatsApp. 
                I'll hide this specific floating WhatsApp button on mobile to avoid redundancy, 
                but keep the Scroll To Top available (and positioned higher to clear the nav).
            */}

            <div className="pointer-events-auto hidden md:flex items-center justify-center w-12 h-12 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 cursor-pointer"
                onClick={() => window.open(SITE.whatsappUrl, '_blank')}>
                <FaWhatsapp className="text-white text-2xl" />
            </div>

            <AnimatePresence>
                {isVisible && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: 20 }}
                        onClick={scrollToTop}
                        className="pointer-events-auto flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full shadow-lg hover:bg-blue-500 transition-all hover:scale-110"
                    >
                        <FaArrowUp className="text-white text-xl" />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}
