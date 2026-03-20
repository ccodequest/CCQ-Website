'use client';

import { FaTimes, FaCheckCircle, FaPaperPlane, FaCode, FaRocket } from 'react-icons/fa';
import { useState } from 'react';

// Hardcoded Web3Forms access key – submitted client-side to avoid Cloudflare blocking server-side fetch
const WEB3FORMS_KEY = 'f12d555d-cffd-482e-b30b-68863e7207a6';

interface WebDevEnquiryModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function WebDevEnquiryModal({ isOpen, onClose }: WebDevEnquiryModalProps) {
    const [showSuccess, setShowSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectType: 'website',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const fd = new FormData();
            fd.append('access_key', WEB3FORMS_KEY);
            fd.append('subject', 'CCQ DEV – New Web Project Enquiry');
            fd.append('from_name', 'CCQ DEV Portfolio');
            fd.append('name', formData.name);
            fd.append('email', formData.email);
            fd.append('replyto', formData.email);
            fd.append('project_type', formData.projectType);
            fd.append('message', formData.message);

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: fd,
                headers: { Accept: 'application/json' },
            });

            const data = await response.json().catch(() => null);

            if (response.ok && data?.success) {
                setShowSuccess(true);
                setFormData({ name: '', email: '', projectType: 'website', message: '' });
            } else {
                alert(data?.message || 'Something went wrong. Please try again.');
            }
        } catch {
            alert('Network error. Please check your connection.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleClose = () => {
        setShowSuccess(false);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
            <div className="bg-[#0a0a0a] border border-gray-800 rounded-2xl w-full max-w-2xl relative overflow-hidden shadow-2xl shadow-blue-900/20 animate-scale-up">

                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px] pointer-events-none"></div>

                <div className="relative z-10 p-8 md:p-10">
                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 p-2 text-gray-500 hover:text-white transition-colors rounded-full hover:bg-white/10"
                    >
                        <FaTimes size={20} />
                    </button>

                    {!showSuccess ? (
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                            {/* Left Side: Context */}
                            <div className="md:col-span-2 space-y-6">
                                <div>
                                    <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-4 text-blue-500">
                                        <FaCode size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Start Your Project</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Ready to build something extraordinary? Fill out the form and let's discuss your vision.
                                    </p>
                                </div>

                                <div className="space-y-4 pt-4 border-t border-gray-800">
                                    <div className="flex items-center gap-3 text-sm text-gray-400">
                                        <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                                            <FaRocket size={12} />
                                        </div>
                                        <span>Fast Turnaround</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-400">
                                        <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                                            <FaCheckCircle size={12} />
                                        </div>
                                        <span>Premium Quality Code</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Form */}
                            <div className="md:col-span-3">
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Name</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Project Type</label>
                                        <select
                                            className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
                                            value={formData.projectType}
                                            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                                        >
                                            <option value="website">Custom Website</option>
                                            <option value="ecommerce">E-Commerce Store</option>
                                            <option value="webapp">Web Application (SaaS)</option>
                                            <option value="redesign">Website Redesign</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Project Details</label>
                                        <textarea
                                            required
                                            rows={3}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600 resize-none"
                                            placeholder="Tell us a bit about what you want to build..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-lg shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                                    >
                                        {isSubmitting ? 'Sending...' : (
                                            <>
                                                Send Enquiry <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    ) : (
                        <div className="py-12 flex flex-col items-center justify-center text-center">
                            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 animate-bounce-short">
                                <FaCheckCircle className="text-green-500 text-4xl" />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-2">Message Received!</h3>
                            <p className="text-gray-400 mb-8 max-w-md">
                                Thanks for reaching out. We're excited to hear about your project and will get back to you within 24 hours.
                            </p>
                            <button
                                onClick={handleClose}
                                className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-lg transition-all"
                            >
                                Back to Portfolio
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
