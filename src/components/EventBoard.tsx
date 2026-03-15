'use client';

import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import { SITE } from '@/config/siteConfig';

export default function EventBoard() {

    return (
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/50 dark:border-gray-700 rounded-3xl p-6 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
            {/* Decorative header */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                Ongoing & Upcoming
            </h3>

            <div className="space-y-6">
                {/* Event: Summer Boot Camp */}
                <div className="group p-4 rounded-2xl bg-orange-50 dark:bg-orange-900/20 border border-orange-100 dark:border-orange-800 hover:border-orange-300 transition-all">
                    <div className="flex justify-between items-start mb-3">
                        <span className="bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wide">
                            Boot Camp
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1 font-medium">
                            <FaCalendarAlt /> Starts Mar 20
                        </span>
                    </div>

                    <div className="mb-3">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-1 group-hover:text-orange-600 transition-colors">Summer Boot Camp</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            Batch-wise flexible timings. Happening after exams.
                        </p>
                        <p className="text-xs text-orange-600 dark:text-orange-400 font-semibold mt-1">
                            Limited seats available!
                        </p>
                    </div>

                    <Link href={SITE.hackathonRegistrationUrl} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                        <span className="text-xs font-bold uppercase tracking-wider">Pre-Register Now</span>
                        <FaArrowRight className="ml-2 text-[10px]" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
