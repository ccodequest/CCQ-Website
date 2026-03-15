'use client';

import { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaInstagram, FaPhoneAlt, FaCheckCircle, FaTimes } from 'react-icons/fa';
import EnquiryForm from './EnquiryForm';
import { SITE } from '@/config/siteConfig';

export default function Contact() {
    // const [isSubmitting, setIsSubmitting] = useState(false); // Removed: Handled in EnquiryForm
    const [showModal, setShowModal] = useState(false);

    // handleSubmit removed: Handled in EnquiryForm

    return (
        <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Enquire About Our Programs</h2>
                    <p className="text-gray-600 dark:text-gray-400">Have questions or want to partner with us? Reach out!</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Info Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Contact Channels</h3>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                                        <FaEnvelope />
                                    </div>
                                    <a href={`mailto:${SITE.emails.primary}`} className="text-sm font-medium">{SITE.emails.primary}</a>
                                </div>
                                <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                                        <FaEnvelope />
                                    </div>
                                    <a href={`mailto:${SITE.emails.secondary}`} className="text-sm font-medium">{SITE.emails.secondary}</a>
                                </div>
                                <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
                                        <FaPhoneAlt />
                                    </div>
                                    <div className="flex flex-col">
                                        <a href={`tel:${SITE.phones.primary}`} className="text-sm font-medium">{SITE.phones.primary.replace(/(\d{5})(\d{5})/, '$1 $2')}</a>
                                        <a href={`tel:${SITE.phones.secondary}`} className="text-sm font-medium">{SITE.phones.secondary.replace(/(\d{5})(\d{5})/, '$1 $2')}</a>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-700">
                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Follow Us</h4>
                                <div className="flex gap-4">
                                    <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-all">
                                        <FaLinkedin size={18} />
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-pink-600 hover:text-white transition-all">
                                        <FaInstagram size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700">
                            <EnquiryForm onSuccess={() => setShowModal(true)} />
                            <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">We'll get back to you within 24 hours.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Success Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
                    <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 max-w-md w-full shadow-2xl relative animate-scale-up">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                        >
                            <FaTimes size={20} />
                        </button>

                        <div className="text-center">
                            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FaCheckCircle className="text-green-500 text-4xl" />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                Enquiry Received!
                            </h3>

                            <p className="text-gray-600 dark:text-gray-300 mb-8">
                                Thank you for contacting CodeQuest. Our team will review your enquiry and get back to you shortly.
                            </p>

                            <button
                                onClick={() => setShowModal(false)}
                                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl shadow-lg transition-all"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Decorative Gradient Blob */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-[100px] pointer-events-none"></div>
        </section>
    );
}
