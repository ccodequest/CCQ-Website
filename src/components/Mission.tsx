'use client';

import { FaLightbulb, FaUsers, FaChartLine, FaRocket, FaPuzzlePiece, FaGraduationCap, FaGamepad, FaTrophy, FaCertificate } from 'react-icons/fa';
import { SITE } from '@/config/siteConfig';

export default function Mission() {
    const missions = [
        {
            icon: <FaLightbulb className="w-6 h-6" />,
            title: "Foster Innovation",
            desc: "We provide a dynamic environment where groundbreaking ideas can be transformed into tangible solutions.",
            color: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400"
        },
        {
            icon: <FaUsers className="w-6 h-6" />,
            title: "Build Community",
            desc: "We connect aspiring developers, designers, and entrepreneurs to build a strong, supportive tech ecosystem.",
            color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
        },
        {
            icon: <FaChartLine className="w-6 h-6" />,
            title: "Develop Skills",
            desc: "Participants gain hands-on experience with new technologies and sharpen their problem-solving abilities.",
            color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
        }
    ];

    const features = [
        {
            icon: <FaRocket />,
            title: "Early Exposure for School Kids",
            desc: "Hands-on projects in IoT, web, AI, and robotics spark curiosity and confidence from day one."
        },
        {
            icon: <FaPuzzlePiece />,
            title: "Problem Solving & Teamwork",
            desc: "Activities close communication gaps with collaboration, demos, and peer learning."
        },
        {
            icon: <FaGraduationCap />,
            title: "Skill Bootcamps: Tech & Non‑Tech",
            desc: "From coding and cybersecurity to soft skills and personality growth."
        },
        {
            icon: <FaGamepad />,
            title: "Learn Tech Through Fun",
            desc: "Gamified lessons and challenges keep sessions exciting while building real-world skills."
        },
        {
            icon: <FaTrophy />,
            title: "Innovation Showcases",
            desc: "Regular hackathons and expos where students present their projects, bringing prestige to their schools."
        },
        {
            icon: <FaCertificate />,
            title: "Certified Growth Pathways",
            desc: "Structured curriculum with globally recognized standards, ensuring measurable progress for every student."
        }
    ];

    return (
        <section id="mission" className="py-24 bg-white dark:bg-gray-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Mission & Vision */}
                <div className="mb-20">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Mission & Vision</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Empowering the next generation through technology education</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {missions.map((item, idx) => (
                            <div key={idx} className="p-8 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${item.color}`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 md:p-12 lg:p-16">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Choose {SITE.brandName}?</h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400">Programs designed by tech education experts to make learning accessible and fun</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, idx) => (
                            <div key={idx} className="flex gap-4 items-start p-4 hover:bg-white dark:hover:bg-gray-800 rounded-xl transition-colors">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
