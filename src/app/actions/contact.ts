'use server';

import { SITE } from '@/config/siteConfig';

const WEB3FORMS_ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_KEY || SITE.web3formsKey;

export async function submitContact(formData: FormData) {
  const name = String(formData.get('name') || '');
  const email = String(formData.get('email') || '');
  const message = String(formData.get('message') || '');

  if (!name || !email || !message) {
    return {
      success: false,
      message: 'Please complete all required fields.',
    };
  }

  const body = [
    `New contact enquiry from ${SITE.name}`,
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    '',
    'Message:',
    message,
  ].join('\n');

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `${SITE.name} Contact Enquiry`,
      from_name: `${SITE.name} Website Contact Form`,
      name,
      email,
      replyto: email,
      message: body,
    }),
    cache: 'no-store',
  });

  const payload = await response.json().catch(() => null);

  if (!response.ok || !payload?.success) {
    return {
      success: false,
      message: 'We could not send your message right now. Please try again shortly.',
    };
  }

  return {
    success: true,
    message: 'Thank you for reaching out! We will get back to you soon.',
  };
}
