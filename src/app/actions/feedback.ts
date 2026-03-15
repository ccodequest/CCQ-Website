'use server';

import { SITE } from '@/config/siteConfig';

const WEB3FORMS_ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_KEY || SITE.web3formsKey;

export interface FeedbackData {
    name: string;
    email: string;
    organization?: string;
    role: string;
    rating: number;
    message: string;
    contact_back: boolean;
    timestamp: string;
}

export async function submitFeedback(formData: FormData) {
    const rating = Number(formData.get('rating'));
    const rawData: FeedbackData = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        organization: (formData.get('organization') as string) || '',
        role: formData.get('role') as string,
        rating,
        message: formData.get('message') as string,
        contact_back: formData.get('contact_back') === 'Yes',
        timestamp: new Date().toISOString(),
    };

    if (!rawData.name || !rawData.email || !rawData.role || !rawData.message || rating < 1 || rating > 5) {
        return {
            success: false,
            message: 'Please complete all required fields.',
        };
    }

    const emailBody = [
        `New feedback submitted on ${SITE.name}`,
        '',
        `Name: ${rawData.name}`,
        `Email: ${rawData.email}`,
        `Organization: ${rawData.organization || 'Not provided'}`,
        `Role: ${rawData.role}`,
        `Rating: ${rawData.rating}/5`,
        `Contact back requested: ${rawData.contact_back ? 'Yes' : 'No'}`,
        `Submitted at: ${rawData.timestamp}`,
        '',
        'Message:',
        rawData.message,
    ].join('\n');

    const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            subject: `${SITE.name} Feedback Submission`,
            from_name: `${SITE.name} Website Feedback`,
            name: rawData.name,
            email: rawData.email,
            replyto: rawData.email,
            organization: rawData.organization || 'Not provided',
            role: rawData.role,
            rating: `${rawData.rating}/5`,
            contact_back: rawData.contact_back ? 'Yes' : 'No',
            message: emailBody,
        }),
        cache: 'no-store',
    });

    const payload = await response.json().catch(() => null);

    if (!response.ok || !payload?.success) {
        return {
            success: false,
            message: 'We could not send your feedback right now. Please try again in a moment.',
        };
    }

    return {
        success: true,
        message: 'Feedback submitted successfully.',
    };
}

export async function getFeedbackStats() {
    return null;
}

export const submitHiveFeedback = submitFeedback;
export const getHiveStats = getFeedbackStats;
