'use server';

import { SITE } from '@/config/siteConfig';

const WEB3FORMS_ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY || SITE.web3formsKey;

export async function submitContact(formData: FormData) {
    // Debug: Log the last 4 characters of the env key to verify loading
    if (typeof WEB3FORMS_ACCESS_KEY === 'string') {
      console.log('[DEBUG] WEB3FORMS_ACCESS_KEY loaded:', '****' + WEB3FORMS_ACCESS_KEY.slice(-4));
    } else {
      console.log('[DEBUG] WEB3FORMS_ACCESS_KEY is not set');
    }
  if (!WEB3FORMS_ACCESS_KEY) {
    console.error('[submitContact] WEB3FORMS_ACCESS_KEY is not configured');
    return {
      success: false,
      message: 'Contact form is currently unavailable. Please email us directly.',
    };
  }
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

  let response;
  try {
    response = await fetch('https://api.web3forms.com/submit', {
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
  } catch (err) {
    console.error('Network error submitting to Web3Forms:', err);
    return {
      success: false,
      message: 'Network error. Please check your connection and try again.',
    };
  }

  let payload = null;
  let rawText = '';
  try {
    const contentType = response.headers.get('content-type');
    rawText = await response.text();
    
    if (contentType && contentType.includes('application/json')) {
      payload = JSON.parse(rawText);
    } else {
      console.error('Web3Forms returned non-JSON response:', rawText);
    }
  } catch (err) {
    console.error('Error processing Web3Forms response:', err);
  }

  if (!response.ok || !payload?.success) {
    console.error('Web3Forms API error:', { 
      status: response.status, 
      payload, 
      rawText: rawText.slice(0, 200) + (rawText.length > 200 ? '...' : '') 
    });
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
