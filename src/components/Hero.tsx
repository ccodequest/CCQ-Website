'use client';

import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import EventBoard from './EventBoard';
import EnquiryModal from './EnquiryModal';
import { useState } from 'react';
import { SITE } from '@/config/siteConfig';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-950 pt-48 pb-32 lg:pt-40 lg:pb-24">
      {/* Liquid Background Elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-10 w-96 h-96 bg-purple-300 dark:bg-purple-600 mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-10 w-96 h-96 bg-blue-300 dark:bg-blue-600 mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-96 h-96 bg-indigo-300 dark:bg-indigo-600 mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-white/40 dark:bg-gray-950/40"></div>
      </div>

      {/* CodeParticles removed from Main Page */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Column: Main Content */}
          <div className="space-y-8 animate-fade-in-up text-center lg:text-left">
            <h2 className="text-blue-600 dark:text-blue-400 font-bold tracking-wider uppercase text-sm md:text-base mb-4 bg-white/50 dark:bg-gray-900/50 px-4 py-2 rounded-full inline-block backdrop-blur-sm border border-blue-100 dark:border-blue-900">
              EdTech & Software Solutions
            </h2>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-gray-900 dark:text-white leading-tight">
              C/{SITE.brandName.toUpperCase()}<br />
              <span className="text-xl md:text-2xl lg:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 relative whitespace-nowrap">
                CREATE COGNIZE CONQUER
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-400 opacity-50 hidden lg:block" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7501 9.99995 89.2842 9.09915 133.003 3.99998C154.675 1.47228 174.455 -0.730337 197.994 0.999983" stroke="currentColor" strokeWidth="3"></path></svg>
              </span>
            </h1>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-2xl">
              Officially operating as {SITE.name}, we deliver student-focused learning programs and build custom software and AI solutions.
            </p>

            {/* WhatsApp removed */}

            {/* Dual Focus Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">

              {/* Education Column */}
              <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-md p-6 rounded-2xl border border-blue-100 dark:border-blue-900/50 shadow-sm hover:shadow-md transition-all">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">

                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  Join the brightest minds to tackle real-world challenges and build the future.
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full px-6 py-3 rounded-xl bg-blue-600 text-white text-sm font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-700 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
                >
                  Enquire Now <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Web Services Column */}
              <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-md p-6 rounded-2xl border border-purple-100 dark:border-purple-900/50 shadow-sm hover:shadow-md transition-all">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">

                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  Expert web development services. We build scalable, premium digital solutions.
                </p>
                <Link href="/portfolio">
                  <button className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-bold shadow-lg shadow-purple-500/20 hover:from-purple-700 hover:to-indigo-700 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group">
                    View Portfolio <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>

            </div>
          </div>

          {/* Right Column: Event Board */}
          <div className="relative animate-fade-in-up animation-delay-2000 h-full">
            <EventBoard />
          </div>
        </div>
      </div>

      {/* Enquiry Modal */}
      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
