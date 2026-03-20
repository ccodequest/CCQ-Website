'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaCheckCircle, FaStar, FaArrowLeft } from 'react-icons/fa';
import { SITE } from '@/config/siteConfig';

// Hardcoded Web3Forms access key – submitted client-side to avoid Cloudflare blocking server-side fetch
const WEB3FORMS_KEY = 'f12d555d-cffd-482e-b30b-68863e7207a6';

export default function FeedbackForm() {
    const router = useRouter();
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [role, setRole] = useState('Student');

    // Auto-redirect effect when modal opens
    useEffect(() => {
        let timeout: NodeJS.Timeout;
        if (showModal) {
            timeout = setTimeout(() => {
                router.push('/');
            }, 3000); // Redirect after 3 seconds
        }
        return () => clearTimeout(timeout);
    }, [showModal, router]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (rating === 0) {
            alert('Please provide a rating.');
            return;
        }
        setIsSubmitting(true);

        const form = e.currentTarget;
        const rawFormData = new FormData(form);

        try {
            const fd = new FormData();
            fd.append('access_key', WEB3FORMS_KEY);
            fd.append('subject', `${SITE.name} Feedback Submission`);
            fd.append('from_name', `${SITE.name} Website Feedback`);
            fd.append('name', rawFormData.get('name') as string);
            fd.append('email', rawFormData.get('email') as string);
            fd.append('replyto', rawFormData.get('email') as string);
            fd.append('organization', (rawFormData.get('organization') as string) || 'Not provided');
            fd.append('role', rawFormData.get('role') as string);
            fd.append('rating', `${rating}/5`);
            fd.append('contact_back', rawFormData.get('contact_back') === 'Yes' ? 'Yes' : 'No');
            fd.append('message', rawFormData.get('message') as string);

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: fd,
                headers: { Accept: 'application/json' },
            });

            const data = await response.json().catch(() => null);
            const success = response.ok && data?.success;

            if (success) {
                setShowModal(true);
                form.reset();
                setRating(0);
                setRole('Student');
            } else {
                alert(data?.message || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Submission error', error);
            alert('Error submitting form. Please check your connection.');
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden">

            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500" />

            {/* Back Button */}
            <button
                onClick={() => router.back()}
                className="absolute top-4 left-4 md:top-8 md:left-8 p-2 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors bg-gray-50 dark:bg-gray-700 rounded-full"
                aria-label="Go Back"
            >
                <FaArrowLeft size={18} />
            </button>

            <div className="absolute top-4 right-4 md:top-8 md:right-8">
                <div className="bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-xl text-center border border-blue-100 dark:border-blue-800 min-w-32">
                    <div className="text-sm font-semibold text-blue-700 dark:text-blue-300">Vercel-safe delivery</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">sent to {SITE.emails.support}</div>
                </div>
            </div>

            <div className="text-center mb-10 pt-8 md:pt-4">
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4 inline-block">
                    Community Feedback
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Help Us Improve CCQ</h1>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    Share what is working, what feels unclear, and what you want to see next across our programs, events, and digital experiences.
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
                    If you request a follow-up, our team will reach out via {SITE.emails.support}.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" required
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-950 focus:ring-0 text-gray-900 dark:text-white transition-all" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                        <input type="email" id="email" name="email" placeholder="you@example.com" required
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-950 focus:ring-0 text-gray-900 dark:text-white transition-all" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="organization" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">School / Organization</label>
                        <input type="text" id="organization" name="organization" placeholder="Optional"
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-950 focus:ring-0 text-gray-900 dark:text-white transition-all" />
                    </div>
                    <div>
                        <label htmlFor="role" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Role</label>
                        <select id="role" name="role" value={role} onChange={(e) => setRole(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-950 focus:ring-0 text-gray-900 dark:text-white transition-all appearance-none cursor-pointer">
                            <option value="Student">Student</option>
                            <option value="Parent">Parent</option>
                            <option value="Teacher">Teacher</option>
                            <option value="School Leader">School Leader</option>
                            <option value="Partner">Partner</option>
                            <option value="Business">Business</option>
                        </select>
                    </div>
                </div>

                <div className="py-2">
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-4 text-center">Overall Experience</label>
                    <div className="flex justify-center gap-2">
                        {[...Array(5)].map((_, index) => {
                            const ratingValue = index + 1;
                            return (
                                <label key={index} className="cursor-pointer group">
                                    <input
                                        type="radio"
                                        value={ratingValue}
                                        onClick={() => setRating(ratingValue)}
                                        className="hidden"
                                    />
                                    <FaStar
                                        className="transition-all duration-200 group-hover:scale-110"
                                        size={36}
                                        color={ratingValue <= (hover || rating) ? "#fbbf24" : "#e5e7eb"}
                                        onMouseEnter={() => setHover(ratingValue)}
                                        onMouseLeave={() => setHover(0)}
                                    />
                                </label>
                            );
                        })}
                    </div>
                    <p className="text-center text-xs text-gray-400 mt-2">{rating > 0 ? `You selected: ${rating} Star${rating > 1 ? 's' : ''}` : 'Tap a star to rate'}</p>
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Feedback & Comments</label>
                    <textarea id="message" name="message" rows={5} placeholder="Tell us what felt valuable, what needs improvement, or what you want us to build next." required
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-950 focus:ring-0 text-gray-900 dark:text-white transition-all resize-none"></textarea>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800">
                    <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" name="contact_back" value="Yes" className="mt-1 w-5 h-5 text-blue-600 rounded focus:ring-blue-500 border-gray-300" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            I would like the CCQ team to contact me about this feedback.
                        </span>
                    </label>
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                        'Submitting...'
                    ) : (
                        'Submit Feedback'
                    )}
                </button>
            </form>

            {showModal && (
                <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl animate-fade-in">
                    <div className="text-center max-w-sm w-full">
                        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-up">
                            <FaCheckCircle className="text-green-500 text-4xl" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Thanks for the feedback</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-8">Your response has been recorded. Redirecting you to home...</p>
                        <button onClick={() => router.push('/')} className="px-8 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-xl font-bold transition-all">
                            Home
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
