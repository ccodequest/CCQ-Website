import { SITE } from '@/config/siteConfig';

export default function Watermark({ className = "", opacity = 1 }: { className?: string, opacity?: number }) {
    return (
        <div
            className={`absolute inset-0 flex items-center justify-center pointer-events-none z-20 overflow-hidden ${className}`}
            style={{ opacity }}
        >
            <div className="transform -rotate-12 bg-black/10 backdrop-blur-[1px] px-8 py-2 w-[120%] text-center">
                <p className="text-white/40 font-bold text-lg md:text-2xl uppercase tracking-[0.5em] select-none whitespace-nowrap">
                    •{SITE.brandName}•
                </p>
            </div>
        </div>
    );
}
