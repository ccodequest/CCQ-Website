'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PortfolioHero from './components/PortfolioHero';
import PortfolioNavbar from './components/PortfolioNavbar';
import PortfolioFooter from './components/PortfolioFooter';
import Process from '@/components/Process';
import ScrollToTop from '@/components/ScrollToTop';
import { SITE } from '@/config/siteConfig';

import ScrollingLogos from '@/components/ScrollingLogos';
import WebDevEnquiryModal from './components/WebDevEnquiryModal';
import {
    FaSchool,
    FaLaptopCode,
    FaMobileAlt,
    FaServer,
    FaDatabase,
    FaArrowRight,
    FaCheckCircle
} from 'react-icons/fa';

import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState<'all' | 'web' | 'app' | 'backend'>('all');
    const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

    const projects = [
        {
            id: 1,
            title: 'PlotIQ - Land Intelligence Platform',
            category: 'web',
            description: 'A GIS‑driven land intelligence platform for property verification, disputes insight, and better decision‑making for buyers, banks, and institutions. Currently in active development with private beta users.',
            tags: ['Next.js', 'Django', 'PostgreSQL'],
            icon: <FaSchool className="text-blue-500 size-8" />,
            url: SITE.portfolio.plotIQ,
            status: 'In Progress - Private Beta',
            statusColor: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/50'
        },
        {
            id: 2,
            title: 'Medhasya Academy',
            category: 'web',
            description: 'A fast, SEO‑optimized site for a Academy, highlighting courses, testimonials, and location details, designed to convert local traffic into admissions.',
            tags: ['React', 'Node.js', 'MongoDB'],
            icon: <FaLaptopCode className="text-purple-500 size-8" />,
            url: SITE.portfolio.medhaSya,
            status: 'Completed - Live',
            statusColor: 'bg-green-500/20 text-green-300 border-green-500/50'
        },
        {
            id: 3,
            title: 'Nisha Interio',
            category: 'web',
            description: 'A premium interior design site focused on storytelling, portfolio visuals, and consultation bookings, crafted for a boutique studio targeting high‑value residential and commercial clients.',
            tags: ['Next.js', 'Tailwind', 'Framer Motion'],
            icon: <FaMobileAlt className="text-green-500 size-8" />,
            url: SITE.portfolio.nishaInterio,
            status: 'In Progress - Private Beta',
            statusColor: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/50'
        },
        {
            id: 4,
            title: 'ProjectHelp',
            category: 'web',
            description: 'A full-stack academic project marketplace for students — offering 500+ domain-specific projects (AI/ML, Web, IoT, DBMS, and more) with complete source code, documentation, and 24/7 WhatsApp support.',
            tags: ['Next.js', 'Node.js', 'MongoDB'],
            icon: <FaDatabase className="text-orange-500 size-8" />,
            url: 'https://projecthelp.in',
            status: 'Completed - Live',
            statusColor: 'bg-green-500/20 text-green-300 border-green-500/50'
        }
    ];

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <main className="bg-black min-h-screen font-sans">
            <PortfolioNavbar />

            <PortfolioHero onContactClick={() => setIsEnquiryOpen(true)} />

            {/* Research & Sustainability Section */}
            <section className="py-16 px-6 bg-gray-900/30 border-b border-gray-800">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Research Background */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">Research-Backed Engineering</h3>
                        <p className="text-gray-400 mb-4 leading-relaxed">
                            Our core team includes developers who have published research papers and worked on complex data‑driven systems. They bring that depth into building robust, domain‑specific tools for any industry workflow.
                        </p>
                        <ul className="space-y-2 text-gray-400">
                            <li className="flex items-center gap-2"><FaCheckCircle className="text-blue-500" /> Experience in academic research & data optimization</li>
                            <li className="flex items-center gap-2"><FaCheckCircle className="text-blue-500" /> Translating complex tech for land, education, & interiors</li>
                        </ul>
                    </div>

                    {/* Sustainability & Affordability */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">Built for Sustainable Impact</h3>
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-blue-400 font-bold mb-1">Efficient Architectures</h4>
                                <p className="text-gray-400 text-sm">We prioritize code that runs lean, uses fewer resources, and stays easier to evolve over years, not months.</p>
                            </div>
                            <div>
                                <h4 className="text-blue-400 font-bold mb-1">Fair & Transparent Pricing</h4>
                                <p className="text-gray-400 text-sm">Clear scope, timelines, and no hidden costs. We keep pricing accessible for early‑stage founders and small businesses.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack Marquee */}
            <section id="tech-stack" className="py-20 bg-gray-900/50 border-y border-gray-800 relative z-20">
                <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
                    <h3 className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-2">Technologies We Master</h3>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Powering Your Success</h2>
                </div>
                <ScrollingLogos />
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 px-6 bg-black">

                {/* Filter Section - Minimalist */}
                <div className="sticky top-0 z-30 bg-black/80 backdrop-blur-xl border-b border-white/10 py-4 mb-12">
                    <div className="max-w-7xl mx-auto px-6 flex justify-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                        {['all', 'web', 'app', 'backend'].map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category as any)}
                                className={`px-5 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap relative
                                ${activeCategory === category
                                        ? 'text-black'
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {activeCategory === category && (
                                    <motion.div
                                        layoutId="activeFilter"
                                        className="absolute inset-0 bg-white rounded-full"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10 capitalize">{category === 'app' ? 'Mobile Apps' : category === 'web' ? 'Web Platforms' : category}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="max-w-7xl mx-auto px-0 pb-24 min-h-[50vh]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence mode='popLayout'>
                            {filteredProjects.map((project) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    key={project.id}
                                >
                                    <Card className="bg-gray-900 border-gray-800 overflow-hidden group hover:border-gray-700 transition-all hover:shadow-2xl hover:shadow-blue-900/20 h-full flex flex-col">

                                        <CardHeader>
                                            <div className="flex justify-between items-start mb-4">
                                                <div className="p-3 bg-gray-900 rounded-xl border border-gray-800 group-hover:border-blue-500/30 transition-colors">
                                                    {project.icon}
                                                </div>
                                                <Badge className={`${project.statusColor} backdrop-blur-md shadow-lg border`}>
                                                    {project.status}
                                                </Badge>
                                            </div>
                                            <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">{project.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="flex-grow">
                                            <CardDescription className="text-gray-400 leading-relaxed">
                                                {project.description}
                                            </CardDescription>
                                        </CardContent>
                                        <CardFooter className="pt-0 mt-auto">
                                            {project.url && (
                                                <a href={project.url} target="_blank" rel="noopener noreferrer" className="w-full">
                                                    <Button className="w-full bg-white text-black hover:bg-gray-200 font-bold group">
                                                        View Live <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                                    </Button>
                                                </a>
                                            )}
                                        </CardFooter>
                                    </Card>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            <Process />

            {/* CTA */}
            <section className="py-32 px-6 bg-black relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-blue-900/30 border border-blue-800 text-blue-400 font-bold text-sm mb-6">
                        Limited Time Offer
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
                        GET A PROJECT ESTIMATE <br />
                        <span className="text-blue-500">IN 24 HOURS</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        Stop guessing about costs. Book a quick 20-minute discovery call and get a clear roadmap for your idea.
                    </p>
                    <Button
                        size="lg"
                        onClick={() => setIsEnquiryOpen(true)}
                        className="text-lg px-10 py-6 rounded-full bg-white text-black hover:bg-blue-500 hover:text-white transition-all shadow-xl hover:shadow-blue-500/50"
                    >
                        Schedule Discovery Call
                    </Button>
                </div>
            </section>

            <WebDevEnquiryModal
                isOpen={isEnquiryOpen}
                onClose={() => setIsEnquiryOpen(false)}
            />

            <ScrollToTop />
            <PortfolioFooter />
        </main>
    );
}