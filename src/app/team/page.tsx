import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaLinkedin } from 'react-icons/fa';
import { SITE } from '@/config/siteConfig';

const teamMembers = [
    {
        name: "Mohammed Zaid Hassan",
        role: "Founder & CEO",
        fullRole: "Chief Executive Officer",
        image: "/TeamImages/Zaid4x5.jpg",
        linkedin: SITE.team.zaid.linkedin
    },
     {
        name: "Jordan Emmanuel",
        role: "Co-founder & CIO",
        fullRole: "Chief Information Officer",
        image: "/TeamImages/Jordan4x5.jpg",
        linkedin: SITE.team.jordan.linkedin
    },
    {
        name: "J Harsh Vardhan",
        role: "CTO",
        fullRole: "Chief Technical Officer",
        image: "/TeamImages/harsh4x5.jpg",
        linkedin: SITE.team.harsh.linkedin
    },
     {
        name: "Mohammed Sulthan Salahuddin Ayyubee",
        role: "CFSO",
        fullRole: "Chief Finance Officer & Chief Security Officer",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Placeholder
        linkedin: SITE.team.sulthan.linkedin
    }, 
    {
        name: "Shreyas",
        role: "COO",
        fullRole: "Chief Operational Officer",
        image: "/TeamImages/Shreyas4x5.jpg",
        linkedin: SITE.team.shreyas.linkedin
    },
    {
        name: "Anlin",
        role: "CMO",
        fullRole: "Chief Marketing Officer",
        image: "/TeamImages/Anlin4x5.jpg",
       /* linkedin: "#" */
    },
    {
        name: "Divyavani",
        role: "Senior Educational Advisor",
        fullRole: "",
        image: "/TeamImages/divyavani.jpeg",
        linkedin: SITE.team.divya.linkedin
    },
    
    {
        name: "Vishal Gowda",
        role: "Tech Support",
        fullRole: "Technical Support Engineer",
        image: "/TeamImages/Vishal.jpg",
        linkedin: SITE.team.vishal.linkedin
    }
];

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Team | CodeQuest',
    description: 'Meet the passionate team behind CodeQuest. Founders, engineers, and educators dedicated to the future of tech.',
};

export default function TeamPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-gray-950">
            <Navbar />
            <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Meet Our Team</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">The passionate minds behind CodeQuest.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teamMembers.map((member, idx) => {
                        const isCEO = idx === 0;
                        return (
                            <div
                                key={idx}
                                className={`group bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-800 ${isCEO ? 'col-span-1 sm:col-span-2 lg:col-span-2 flex flex-col sm:flex-row' : 'col-span-1'}`}
                            >
                                {/* Image Container */}
                                <div className={`relative overflow-hidden ${isCEO ? 'w-full sm:w-1/2 h-80 sm:h-auto' : 'w-full aspect-[4/5]'}`}>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover grayscale duration-500 group-hover:grayscale-0"
                                    />
                                    {/* Social Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                                        {member.linkedin ? (
                                            <a href={member.linkedin} className="text-white hover:text-blue-400 transform hover:scale-110 transition-all">
                                                <FaLinkedin size={24} />
                                            </a>
                                        ) : null}
                                    </div>
                                </div>

                                {/* Content Container */}
                                <div className={`p-6 flex flex-col justify-center ${isCEO ? 'w-full sm:w-1/2 text-left' : 'text-center'}`}>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 transition-colors">
                                            {member.name}
                                        </h3>
                                        <p className="text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-wider mb-2">
                                            {member.role}
                                        </p>
                                        <p className="text-gray-500 dark:text-gray-400 text-xs italic mb-4">
                                            {member.fullRole}
                                        </p>
                                    </div>

                                    {isCEO && (
                                        <div className="mt-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                                            <p className="text-gray-600 dark:text-gray-300 text-sm italic leading-relaxed">
                                                "Empowering the next generation of innovators through code, creativity, and collaboration. We believe in a future where every student has the tools to build their dreams."
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}

                    {/* Join Us Card 
                    <div className="col-span-1 bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-center items-center text-center p-6 text-white aspect-[4/5]">
                        <div className="mb-4 bg-white/20 p-4 rounded-full backdrop-blur-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Join Our Team</h3>
                        <p className="text-blue-100 text-sm mb-6">
                            We are always looking for passionate individuals to join our mission.
                        </p>
                        <a href="mailto:careers@codequest.com" className="px-6 py-2 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors text-sm uppercase tracking-wider">
                            Apply Now
                        </a>
                    </div>*/}
                </div>
            </div>
            <Footer />
        </main>
    );
}
