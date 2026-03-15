'use client';

import { useState, useEffect } from 'react';
import { FaTimes, FaCalendarAlt, FaMapMarkerAlt, FaRocket } from 'react-icons/fa';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE } from '@/config/siteConfig';

export default function HackathonPopup() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Show popup on mount (refresh/visit)
        // Using a small timeout to ensure transition plays nicely after load
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const closePopup = () => {
        setIsOpen(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closePopup}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative w-full max-w-lg bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-white/20"
                    >
                        {/* Decorative Header Background */}
                        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-orange-600 to-orange-500">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={closePopup}
                            className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors backdrop-blur-md"
                        >
                            <FaTimes />
                        </button>

                        <div className="relative pt-20 px-8 pb-8 text-center">
                            {/* Icon/Badge */}
                            <div className="mx-auto w-20 h-20 bg-white dark:bg-gray-800 rounded-2xl shadow-xl flex items-center justify-center mb-6 rotate-3">
                                <FaRocket className="text-4xl text-orange-600" />
                            </div>

                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                Summer Boot Camp
                            </h2>
                            <p className="text-orange-600 dark:text-orange-400 font-semibold uppercase tracking-wider text-sm mb-6">
                                Limited Seats Available!
                            </p>

                            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-4 mb-6 space-y-3 text-left">
                                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                    <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center text-orange-600 dark:text-orange-400">
                                        <FaCalendarAlt className="text-sm" />
                                    </div>
                                    <span className="font-medium">Starts Mar 20, 2026</span>
                                </div>
                                <div className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                                    <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center text-orange-600 dark:text-orange-400">
                                        <FaRocket className="text-sm" />
                                    </div>
                                    <span className="font-medium">Batch-wise flexible timings. Happening after exams.</span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3">
                                <Link
                                    href={SITE.hackathonRegistrationUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                                >
                                    <span>Pre-Register Now</span>
                                    <FaRocket className="animate-pulse" />
                                </Link>
                                <button
                                    onClick={closePopup}
                                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-sm font-medium py-2"
                                >
                                    Perhaps Later
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
