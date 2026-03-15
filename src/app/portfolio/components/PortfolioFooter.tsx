'use client';

import Link from 'next/link';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { SITE } from '@/config/siteConfig';

export default function PortfolioFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black border-t border-gray-900 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-600 group-hover:border-blue-400 transition-colors">
                                <img src="/logo.png" alt="CodeQuest Logo" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">
                                {SITE.portfolioBrandName}
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Engineering sustainable digital ecosystems for forward-thinking businesses.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <FaMapMarkerAlt />
                            <span>{SITE.location}</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-white mb-4">Navigation</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors">Home</Link></li>
                            <li><Link href="/portfolio" className="text-gray-400 hover:text-blue-400 transition-colors">Portfolio</Link></li>
                            <li><Link href="/#services" className="text-gray-400 hover:text-blue-400 transition-colors">Services</Link></li>
                            <li><Link href="/#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact - No Socials */}
                    <div>
                        <h3 className="font-bold text-white mb-4">Contact</h3>
                        <div className="space-y-2 text-sm">
                            <a href={`mailto:${SITE.emails.primary}`} className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                                <FaEnvelope size={14} /> {SITE.emails.primary}
                            </a>
                            <a href={`mailto:${SITE.emails.secondary}`} className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                                <FaEnvelope size={14} /> {SITE.emails.secondary}
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-sm font-medium">
                        &copy; {currentYear} {SITE.name} Agency. All rights reserved.
                    </p>
                    <p className="text-gray-600 text-xs">
                        Designed & Developed by {SITE.attribution}
                    </p>
                </div>
            </div>
        </footer>
    );
}
