'use client';

import { useState } from 'react';
import { FaCheckCircle, FaSpinner } from 'react-icons/fa';

// Hardcoded Web3Forms access key – submitted client-side to avoid Cloudflare blocking server-side fetch
const WEB3FORMS_KEY = 'f12d555d-cffd-482e-b30b-68863e7207a6';

export default function EnquiryForm({ onSuccess }: { onSuccess?: () => void }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [subject, setSubject] = useState("");
    const [isCustomSubject, setIsCustomSubject] = useState(false);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleSubjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const val = e.target.value;
        setSubject(val);
        setIsCustomSubject(val === "Other");
    };

    const isPresentation = subject === "Presentation Request";

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);

        // If custom subject is used, override the 'enquiry_subject' field or append it
        if (isCustomSubject) {
            const custom = formData.get('custom_subject');
            formData.set('enquiry_subject', `Custom: ${custom}`);
        }

        // Append date/time if presentation
        if (isPresentation) {
            const requestedDate = formData.get('presentation_date');
            const requestedTime = formData.get('presentation_time');
            formData.set('message', `[Requested Presentation: ${requestedDate} at ${requestedTime}]\n\n${formData.get('message')}`);
        }

        try {
            const fd = new FormData();
            // Copy all form fields
            for (const [key, value] of formData.entries()) {
                fd.append(key, value);
            }
            fd.append('access_key', WEB3FORMS_KEY);

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: fd,
                headers: { Accept: 'application/json' },
            });

            const data = await response.json().catch(() => null);
            const success = response.ok && data?.success;

            if (success) {
                if (onSuccess) onSuccess();
                (e.target as HTMLFormElement).reset();
                setSubject("");
                setIsCustomSubject(false);
                setDate("");
                setTime("");
            } else {
                alert(data?.message || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error("Submission error", error);
            alert("Error submitting form. Please check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                    <input type="text" id="name" name="name" placeholder="John Doe" required
                        className="w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-950 focus:ring-0 text-gray-900 dark:text-white transition-all" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="john@example.com" required
                        className="w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-950 focus:ring-0 text-gray-900 dark:text-white transition-all" />
                </div>
            </div>

            <div>
                <label htmlFor="enquiry_subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Enquiry Subject</label>
                <select id="enquiry_subject" name="enquiry_subject" required value={subject} onChange={handleSubjectChange}
                    className="w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-950 focus:ring-0 text-gray-900 dark:text-white transition-all appearance-none cursor-pointer">
                    <option value="" disabled>Select Enquiry Subject...</option>

                    {/* General Categories */}
                    <option value="School Program Enquiry">School Program Enquiry</option>
                    <option value="Tech Solution Enquiry">Tech Solution Enquiry</option>

                    {/* Specific Actions */}
                    <option value="Presentation Request">Request a Presentation</option>

                    <option value="Other">Other (Custom)</option>
                </select>
            </div>

            {isCustomSubject && (
                <div className="animate-fade-in-down">
                    <label htmlFor="custom_subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Specify Subject</label>
                    <input type="text" id="custom_subject" name="custom_subject" placeholder="Enter your specific requirement..." required
                        className="w-full px-4 py-2 rounded-xl bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 focus:border-blue-500 focus:ring-0 text-gray-900 dark:text-white transition-all" />
                </div>
            )}

            {/* Conditional Date/Time for Presentation Request */}
            {isPresentation && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in-down">
                    <div>
                        <label htmlFor="presentation_date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Preferred Date</label>
                        <input type="date" id="presentation_date" name="presentation_date" required value={date} onChange={(e) => setDate(e.target.value)}
                            className="w-full px-4 py-2 rounded-xl bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 focus:border-blue-500 focus:ring-0 text-gray-900 dark:text-white transition-all" />
                    </div>
                    <div>
                        <label htmlFor="presentation_time" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Preferred Time</label>
                        <input type="time" id="presentation_time" name="presentation_time" required value={time} onChange={(e) => setTime(e.target.value)}
                            className="w-full px-4 py-2 rounded-xl bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 focus:border-blue-500 focus:ring-0 text-gray-900 dark:text-white transition-all" />
                    </div>
                </div>
            )}

            {/* Dynamic Helper Note */}
            {subject && (
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800 animate-fade-in text-sm text-blue-700 dark:text-blue-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Column 1: Subject Specifics */}
                        <div>
                            <strong className="block mb-2">💡 Message Details:</strong>
                            <ul className="list-disc list-inside opacity-90 space-y-1">
                                {subject === "School Program Enquiry" && (
                                    <>
                                        <li>Grade levels involved</li>
                                        <li>Expected number of students</li>
                                        <li>Interested programs</li>
                                    </>
                                )}
                                {subject === "Tech Solution Enquiry" && (
                                    <>
                                        <li>Type of solution</li>
                                        <li>Key features required</li>
                                        <li>Estimated timeline</li>
                                    </>
                                )}
                                {subject === "Presentation Request" && (
                                    <>
                                        <li>Audience profile</li>
                                        <li>Topics to focus on</li>
                                        <li>Expected duration</li>
                                    </>
                                )}
                                {subject === "Other" && (
                                    <li>Describe requirements in detail</li>
                                )}
                            </ul>
                        </div>

                        {/* Column 2: General Contact Info */}
                        <div>
                            <strong className="block mb-2">📞 Contact Details:</strong>
                            <ul className="list-disc list-inside opacity-90 space-y-1">
                                <li>Organization Name</li>
                                <li>Point of Contact (POC) Name</li>
                                <li>Contact Number</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea id="message" name="message" rows={4} placeholder="How can we help you?" required
                    className="w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-950 focus:ring-0 text-gray-900 dark:text-white transition-all resize-none"></textarea>
            </div>

            <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2">
                {isSubmitting ? (
                    <>
                        <FaSpinner className="animate-spin" /> Sending...
                    </>
                ) : (
                    'Submit Enquiry'
                )}
            </button>
        </form>
    );
}
