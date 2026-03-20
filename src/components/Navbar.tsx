'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import EnquiryModal from './EnquiryModal';
import { SITE } from '@/config/siteConfig';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

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

  // Base links
  const allLinks = [
    { name: 'Home', href: '/' },
    { name: 'Web Development', href: '/portfolio' },
    { name: 'Our Mission', href: '/mission' },
    // { name: 'Partners', href: '/partners' }, // commented out – re-enable when ready
    { name: 'Our Team', href: '/team' },
    { name: 'Gallery', href: '/gallery' },
  ];

  // Filter out the link to the current page
  const navLinks = allLinks.filter(link => link.href !== pathname);

  return (
    <>
      <nav className={`fixed top-4 left-0 right-0 z-50 max-w-7xl mx-auto w-[95%] md:w-[90%] rounded-2xl transition-all duration-300 border border-transparent ${scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-2xl border-white/20 dark:border-gray-700 py-3' : 'bg-transparent py-3'}`}>
        <div className="px-6 md:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-600 group-hover:border-blue-400 transition-colors">
                <img src="/logo.png" alt="CCQ Logo" className="w-full h-full object-cover" />
              </div>
              <span className={`text-xl font-bold tracking-tight transition-colors ${scrolled ? 'text-gray-900 dark:text-white' : 'text-gray-900 dark:text-white'}`}>
                {SITE.brandName.toUpperCase()}
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium hover:text-blue-600 transition-colors ${scrolled ? 'text-gray-700 dark:text-gray-300' : 'text-gray-800 dark:text-gray-200'}`}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-indigo-700 transform hover:-translate-y-0.5 transition-all"
              >
                Enquire Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 dark:text-gray-300 focus:outline-none"
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-xl border-t border-gray-100 dark:border-gray-800 mt-2 rounded-2xl overflow-hidden">
            <div className="flex flex-col px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsModalOpen(true);
                }}
                className="w-full px-5 py-3 rounded-lg bg-blue-600 text-white font-semibold"
              >
                Enquire Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Global Enquiry Modal */}
      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
