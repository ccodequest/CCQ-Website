'use server';

/**
 * Server-side action for handling Web3Forms submissions
 * This keeps the API access key secure on the server side
 */
export async function submitToWeb3Forms(formData: FormData) {
  // Use env variable if set, otherwise fall back to hardcoded key
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY || 'f12d555d-cffd-482e-b30b-68863e7207a6';

  // Web3Forms API Key
  // WEB3FORMS_ACCESS_KEY = f12d555dcffd482eb30b68863e7207a6

  // Create a new FormData object and copy all fields from the original
  // This is necessary because FormData from client is read-only
  const serverFormData = new FormData();

  // Copy all existing fields
  for (const [key, value] of formData.entries()) {
    serverFormData.append(key, value);
  }

  // Add the access key securely on the server side
  serverFormData.append('access_key', accessKey);

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: serverFormData,
      headers: {
        'Accept': 'application/json',
      },
    });

    const contentType = response.headers.get('content-type');
    let data;

    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      const text = await response.text();
      console.error('Web3Forms non-JSON response:', text);
      return {
        success: false,
        message: 'Server returned an unexpected response. Please try again later.',
      };
    }

    if (response.ok) {
      return {
        success: true,
        message: 'Form submitted successfully!',
        data,
      };
    } else {
      console.error('Web3Forms API error:', data);
      return {
        success: false,
        message: data.message || 'Failed to submit form. Please try again.',
      };
    }
  } catch (error) {
    console.error('Error submitting to Web3Forms:', error);
    return {
      success: false,
      message: 'Network error. Please check your connection and try again.',
    };
  }
}
