'use client';

import { FaTimes, FaCheckCircle } from 'react-icons/fa';
import EnquiryForm from './EnquiryForm';
import { useState } from 'react';
import { SITE } from '@/config/siteConfig';

interface EnquiryModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
    const [showSuccess, setShowSuccess] = useState(false);

    if (!isOpen) return null;

    const handleSuccess = () => {
        setShowSuccess(true);
        // Optional: Close modal after delay or keep open to show success
        // For now, we keep it open to show the success message within the modal
    };

    const handleClose = () => {
        setShowSuccess(false);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl relative animate-scale-up border border-gray-100 dark:border-gray-700 max-h-[90vh] overflow-y-auto">
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors z-10"
                >
                    <FaTimes size={20} />
                </button>

                {!showSuccess ? (
                    <>
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Let's Build Something Great</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Tell us about your project or requirement.</p>
                        </div>
                        <EnquiryForm onSuccess={handleSuccess} />
                    </>
                ) : (
                    <div className="text-center py-8">
                        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FaCheckCircle className="text-green-500 text-4xl" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            Enquiry Received!
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-8">
                            Thank you for contacting {SITE.name}. Our team will review your enquiry and get back to you shortly.
                        </p>
                        <button
                            onClick={handleClose}
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl shadow-lg transition-all"
                        >
                            Close
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
