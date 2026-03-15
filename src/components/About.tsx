'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Watermark from './Watermark';
import { SITE } from '@/config/siteConfig';

export default function About() {
    const [currentImage, setCurrentImage] = useState(0);

    // Using the one valid image and placeholders for demonstration
    // Note: HEIC files are not supported in browsers. 
    // Ideally, convert IMG_1106.HEIC and IMG_6838.HEIC to JPG/PNG and add them here.
    const images = [
        "/home/IMG_20251125_150828.jpg",
        "/home/IMG_1106.jpg",
        "/home/IMG_6838.jpg"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="space-y-6">
                        <h2 className="text-sm font-semibold text-blue-600 tracking-wide uppercase">Who We Are</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                            Cultivating Innovation & <br className="hidden md:block" />Collaboration
                        </h3>

                        <div className="prose prose-lg text-gray-600 dark:text-gray-300">
                            <p>
                                CODEQUEST was founded by a group of passionate tech enthusiasts with a shared vision: to create
                                a platform where innovation thrives and collaboration is celebrated. Today, as {SITE.name}, we
                                continue that vision as an EdTech and software solutions company.
                            </p>
                            <p>
                                Since our inception, we have organized numerous events that have brought together thousands of
                                students, developers, and designers from across the country. Our mission is to empower the next
                                generation of tech leaders by providing them with the resources, mentorship, and opportunities
                                they need to succeed while also delivering custom software solutions and AI tools for selected
                                education and industry partners.
                            </p>
                            <p>
                                Our focused vision: "To design and deliver innovative school and college-focused learning programs,
                                hackathons, internships, and digital platforms for students, while also building custom software
                                solutions and AI tools for select clients across education and industry."
                            </p>
                        </div>

                        <div className="pt-4">
                            <Link href="/team">
                                <button className="px-6 py-3 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
                                    Meet Our Team
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Image Carousel */}
                    <div className="relative">
                        <div className="aspect-square md:aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gray-200 dark:bg-gray-800 relative z-10">
                            {images.map((src, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentImage === index ? 'opacity-100' : 'opacity-0'
                                        }`}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 flex items-center justify-center -z-10">
                                        <span className="text-gray-400 font-medium">Loading...</span>
                                    </div>
                                    <img
                                        src={src}
                                        alt={`Who We Are - Slide ${index + 1}`}
                                        className="w-full h-full object-cover"
                                        onContextMenu={(e) => e.preventDefault()}
                                        draggable={false}
                                    />
                                </div>
                            ))}
                        </div>
                        {/* Decorative blob */}
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -z-0"></div>

                        {/* Carousel Indicators */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImage(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${currentImage === index
                                        ? 'bg-white w-6'
                                        : 'bg-white/50 hover:bg-white/80'
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
