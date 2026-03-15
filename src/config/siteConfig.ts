/**
 * ============================================================
 *  SITE-WIDE CONFIGURATION — Change once, updates everywhere.
 * ============================================================
 *
 * This is the single source of truth for all contact details,
 * social links, API keys, and other configurable values used
 * across the CCQ website.
 *
 * HOW TO USE:
 *   import { SITE } from '@/config/siteConfig';
 *   then reference e.g.  SITE.emails.primary
 */

export const SITE = {

  // ── Organization ────────────────────────────────────────────
  name: 'CCQ Pvt Ltd',
  brandName: 'CCQ',
  portfolioBrandName: 'CCQ DEV Portfolio',
  tagline: 'To design and deliver innovative school and college-focused learning programs, hackathons, internships, and digital platforms for students, while also building custom software solutions and AI tools for select clients across education and industry.',
  attribution: 'Team CCQ Pvt Ltd',
  description: 'CCQ Pvt Ltd is an EdTech and software solutions company designing learning programs, hackathons, internships, student platforms, and custom software and AI tools for education and industry clients.',

  // ── Domain / URLs ────────────────────────────────────────────
  /** Production domain — used in metadata, sitemap, robots.txt */
  siteUrl: 'https://in2ccq.com',

  legal: {
    effectiveDate: 'March 15, 2026',
    jurisdiction: 'Bengaluru, Karnataka, India',
  },

  seo: {
    defaultTitle: 'CCQ Pvt Ltd | EdTech and Software Solutions',
    ogImage: '/logo.png',
    twitterHandle: '@in2ccq',
  },

  // ── Location ─────────────────────────────────────────────────
  location: 'Bengaluru, India',

  // ── Contact emails ───────────────────────────────────────────
  emails: {
    /** Primary (Zoho) — shown in Contact section & footers */
    primary: 'collab@in2ccq.com',
    /** Secondary (Gmail) — shown alongside primary */
    secondary: 'contact@in2ccq.com',
    /** Careers / hiring enquiries */
    careers: 'careers@in2ccq.com',
    /** Inbox used for feedback and legal/privacy requests */
    support: 'collab@in2ccq.com',
  },

  // ── Phone numbers ────────────────────────────────────────────
  phones: {
    /** Displayed as "98452 93201" — also used in WhatsApp links */
    primary: '9845293201',
    secondary: '9740745485',
  },

  // ── WhatsApp ─────────────────────────────────────────────────
  /** Full wa.me link using the primary phone number (with country code) */
  whatsappUrl: 'https://wa.me/919845293201',

  // ── Social media ─────────────────────────────────────────────
  social: {
    linkedin: 'https://www.linkedin.com/company/codequest-official/',
    instagram: 'https://www.instagram.com/codequest2026',
    /** Set to a real URL once the channel is live */
    youtube: '' as string,
  },

  // ── API Keys ─────────────────────────────────────────────────
  /**
   * Web3Forms public access key.
   * This key is intentionally client-side (Web3Forms design).
   * Tip: move to NEXT_PUBLIC_WEB3FORMS_KEY env var for easy rotation
   * without a code deploy. If you do, update BookingModal & EnquiryForm.
   */
  web3formsKey: 'f12d555d-cffd-482e-b30b-68863e7207a6',

  // ── Events ───────────────────────────────────────────────────
  /** Google Form link for hackathon / event pre-registration */
  hackathonRegistrationUrl: 'https://forms.gle/h6X7cwtMwg8sFQNWA',

  // ── Team LinkedIn profiles ───────────────────────────────────
  team: {
    zaid:    { linkedin: 'https://www.linkedin.com/in/mohammed-zaid-hassan-8468a3389/' },
    jordan:  { linkedin: null as string | null },
    harsh:   { linkedin: 'https://www.linkedin.com/in/j-harsh-vardhan-934a00258/' },
    sulthan: { linkedin: 'https://www.linkedin.com/in/mohammed-sulthan-salahuddin-ayyubee/' },
    shreyas: { linkedin: 'https://www.linkedin.com/in/shreyas-dhalve-6a8b6727a/' },
    divya:   { linkedin: 'https://www.linkedin.com/in/mani-divya-vani-bb123469/' },
    vishal:  { linkedin: 'https://www.linkedin.com/in/vishal-gowda-9b2817322/' },
  },

  // ── Portfolio project URLs ────────────────────────────────────
  portfolio: {
    plotIQ:       'https://land-xi-ebon.vercel.app/',
    medhaSya:     'https://www.medhasyaacademy.com/',
    nishaInterio: 'https://v0-nisha-interio-website.vercel.app/',
  },
} as const;

