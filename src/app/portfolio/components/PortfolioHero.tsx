import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight, FaCode, FaFlask, FaWhatsapp } from "react-icons/fa";
import CodeParticles from "@/components/CodeParticles";
import { SITE } from "@/config/siteConfig";

interface PortfolioHeroProps {
    onContactClick: () => void;
}

export default function PortfolioHero({ onContactClick }: PortfolioHeroProps) {
    return (
        <div className="relative min-h-[60vh] flex items-center justify-center bg-black overflow-hidden pt-32 pb-20">
            {/* Grid Background */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-500 opacity-20 blur-[100px]"></div>

            {/* Syntax Particles */}
            <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
                <CodeParticles />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center mb-6"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm text-blue-300 text-[10px] font-bold uppercase tracking-widest hover:bg-blue-500/20 transition-colors">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Open for new collaborations
                    </div>
                </motion.div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6 leading-tight">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        WE BUILD
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400"
                    >
                        INTELLIGENT SOLUTIONS
                    </motion.div>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-2xl mx-auto text-base md:text-lg text-gray-400 mb-8 leading-relaxed font-light"
                >
                    Scientific precision meets creative engineering. We architect <span className="text-white font-medium">sustainable digital ecosystems</span> backed by research, designed for scale, and priced for growth.
                </motion.p>

                {/* Stats / Features Grid - Condensed */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-3 md:gap-6 mb-10 text-xs md:text-sm font-medium text-gray-500"
                >
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-900/50 border border-gray-800">
                        <FaCode className="text-blue-500" /> Research-Backed Code
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-900/50 border border-gray-800">
                        <FaFlask className="text-purple-500" /> Sustainable Architecture
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button
                        onClick={onContactClick}
                        className="group relative px-6 py-3 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 w-full sm:w-auto text-sm"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            Start Your Project <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                    </button>

                    <Link
                        href="#projects"
                        className="px-6 py-3 bg-transparent border border-gray-800 text-gray-300 font-bold rounded-full hover:bg-gray-900/50 hover:text-white hover:border-gray-700 transition-all w-full sm:w-auto text-sm"
                    >
                        View Selected Work
                    </Link>

                    <a
                        href={SITE.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-green-500/10 border border-green-500/30 text-green-400 font-bold rounded-full hover:bg-green-500 hover:text-white transition-all w-full sm:w-auto text-sm flex items-center justify-center gap-2"
                    >
                        <FaWhatsapp size={18} /> WhatsApp
                    </a>
                </motion.div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
        </div>
    );
}
