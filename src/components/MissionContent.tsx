'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Watermark from '@/components/Watermark';
import { FaHandshake, FaLightbulb, FaHeart, FaRocket } from 'react-icons/fa';
import { SITE } from '@/config/siteConfig';

const galleryImages = [
    "/Gallery/IMG_1088.jpg",
    "/Gallery/IMG_1090.jpg",
    "/Gallery/IMG_1100.jpg",
    "/Gallery/IMG_1106.jpg",
    "/Gallery/IMG_20251125_150828.jpg",
    "/Gallery/IMG_6838.jpg",
    "/Gallery/IMG_6886.jpg"
];

function GalleryCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            {galleryImages.map((src, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <img
                        src={src}
                        alt={`Life at ${SITE.brandName} - Slide ${index + 1}`}
                        className="w-full h-full object-cover"
                        onContextMenu={(e) => e.preventDefault()}
                        draggable={false}
                    />
                    <Watermark />
                </div>
            ))}

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {galleryImages.map((_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white w-6' : 'bg-white/50'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}

export default function MissionContent() {
    return (
        <main className="min-h-screen bg-white dark:bg-gray-950">
            <Navbar />

            {/* Hero Banner */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900/20">
                <div className="max-w-7xl mx-auto text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
                        Our Purpose
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Empowering the Innovators of Tomorrow
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        At {SITE.brandName}, we don't just teach code; we cultivate a mindset of curiosity, resilience, and creativity that prepares students for a future we can only imagine.
                    </p>
                </div>
            </section>

            {/* Our Story & Philosophy */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="relative">
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-200 dark:bg-yellow-900/50 rounded-full blur-2xl opacity-70"></div>
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt={`${SITE.brandName} Classroom`}
                                className="relative rounded-3xl shadow-2xl z-10 w-full object-cover h-[500px]"
                            />
                            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-blue-500 rounded-3xl z-0 hidden md:block"></div>
                        </div>
                    </div>
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Story</h2>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {SITE.brandName} began with a simple observation: technology was moving fast, but education wasn't keeping up. We saw brilliant young minds consuming technology but rarely understanding how to create it.
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
                                What started as a small weekend workshop for 10 students has grown into a movement. Today, we partner with leading schools to bring world-class tech education directly into the classroom, bridging the gap between theoretical knowledge and real-world application.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Philosophy</h2>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                We believe that <strong>every child is an inventor</strong>. Our role is simply to provide the tools and the canvas. We move beyond rote memorization to "Learning by Doing." Whether it's debugging a line of code or soldering a circuit, we celebrate the process of failure and discovery as much as the final success.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Auto-Rotating Gallery Carousel – commented out */}
            {/*
            <section className="py-12 bg-white dark:bg-gray-950 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Life at {SITE.brandName}</h2>
                </div>
                <GalleryCarousel />
            </section>
            */}

            {/* Core Values */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Core Values</h2>
                        <p className="text-gray-600 dark:text-gray-400">The principles that guide every lesson we teach.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <FaLightbulb />,
                                color: "text-yellow-500 bg-yellow-100 dark:bg-yellow-900/20",
                                title: "Curiosity First",
                                desc: "We ask 'why' and 'how' before we ask 'what'. Curiosity is the engine of learning."
                            },
                            {
                                icon: <FaHandshake />,
                                color: "text-blue-500 bg-blue-100 dark:bg-blue-900/20",
                                title: "Collaboration",
                                desc: "Great things are built together. We foster a culture of peer support and teamwork."
                            },
                            {
                                icon: <FaHeart />,
                                color: "text-red-500 bg-red-100 dark:bg-red-900/20",
                                title: "Inclusivity",
                                desc: "Tech is for everyone. We strive to make our classrooms welcoming for all backgrounds."
                            },
                            {
                                icon: <FaRocket />,
                                color: "text-purple-500 bg-purple-100 dark:bg-purple-900/20",
                                title: "Impact",
                                desc: "We build with purpose. We teach students to use tech to solve real-world problems."
                            }
                        ].map((value, idx) => (
                            <div key={idx} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100 dark:border-gray-700">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-6 ${value.color}`}>
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-16 text-center text-white overflow-hidden relative">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us on This Journey</h2>
                        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                            Whether you are a parent, a principal, or a student, there is a place for you in the {SITE.brandName} ecosystem.
                        </p>
                        <a href="/#contact" className="inline-block bg-white text-blue-600 font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-gray-50 hover:scale-105 transition-all">
                            Get in Touch
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </main >
    );
}
