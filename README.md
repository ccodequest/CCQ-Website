# CCQ Pvt Ltd — Official Website

The official website for **CCQ Pvt Ltd**, an EdTech and software solutions company delivering school and college-focused learning programs, hackathons, internships, digital platforms, and custom software and AI solutions.

> Built with [Next.js](https://nextjs.org) (App Router) · TypeScript · Tailwind CSS v4 · Deployed on [Vercel](https://vercel.com)

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, about, services, partners, contact |
| `/mission` | Company mission, story and values |
| `/team` | Meet the CCQ Pvt Ltd team |
| `/partners` | Partner schools and organizations |
| `/gallery` | Event and workshop gallery |
| `/portfolio` | CCQ Dev — web and software portfolio |
| `/contact` | Enquiry and contact form |
| `/feedback` | Community feedback form (delivered via Web3Forms) |
| `/privacy-policy` | Privacy Policy |
| `/terms-of-service` | Terms of Service |
| `/code-of-conduct` | Code of Conduct |

---

## Legal & Policy Pages

Three dedicated legal pages are included, each with full SEO metadata, Open Graph tags, and JSON-LD structured data.

### Privacy Policy — `/privacy-policy`
Explains how CCQ Pvt Ltd collects, uses, and protects personal information submitted through forms, event registrations, school programmes, and digital interactions. Covers:
- Information collected (contact details, programme interest, usage data)
- How information is used and shared
- Children and school-related interactions
- Data retention and protection measures
- User rights (access, correction, deletion) — contact `collab@in2ccq.com`
- Policy update process and effective date

### Terms of Service — `/terms-of-service`
Governs use of the CCQ Pvt Ltd website and participation in programmes, events, and digital platforms. Covers:
- Acceptance of terms
- Services offered (EdTech, hackathons, schools, web/software)
- Event participation and registrations
- Intellectual property
- Limitation of liability
- Governing law — Bengaluru, Karnataka, India

### Code of Conduct — `/code-of-conduct`
Sets expected behaviour standards for all CCQ Pvt Ltd events, programmes, and community interactions. Covers:
- Inclusive and respectful community standards
- Behaviour during hackathons, workshops, and digital spaces
- Special care in student-focused environments
- Unacceptable behaviour and reporting process
- Reporting contact: `collab@in2ccq.com`

All three pages share the `LegalPage` component (`src/components/LegalPage.tsx`) which renders consistent design, breadcrumb navigation, and per-page structured data.

---

## Getting Started

### Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Web3Forms API Key — used server-side for contact and feedback form delivery
# Get your access key from https://web3forms.com
WEB3FORMS_ACCESS_KEY=your_access_key_here
```

You can copy `.env.example` as a template:
```bash
cp .env.example .env.local
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## Project Structure

```
src/
  app/
    page.tsx                # Home page
    layout.tsx              # Root layout (metadata, JSON-LD, SpeedInsights)
    sitemap.ts              # Auto-generated sitemap
    robots.ts               # robots.txt rules
    actions/
      contact.ts            # Server action — contact form (Web3Forms)
      feedback.ts           # Server action — feedback form (Web3Forms)
    privacy-policy/         # Privacy Policy page
    terms-of-service/       # Terms of Service page
    code-of-conduct/        # Code of Conduct page
    feedback/               # Community feedback page
    portfolio/              # CCQ Dev portfolio section
  components/
    LegalPage.tsx           # Shared layout for all three legal pages
    JsonLd.tsx              # JSON-LD structured data injector
    Hero.tsx                # Homepage hero
    About.tsx               # About section
    Footer.tsx              # Site-wide footer with legal links
  config/
    siteConfig.ts           # Single source of truth for brand, contact, SEO values
```

---

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4
- **Form Delivery:** Web3Forms (server-side, Vercel-safe)
- **Analytics:** Vercel Speed Insights
- **SEO:** Per-page metadata, Open Graph, JSON-LD structured data
- **Deployment:** Vercel

---

## Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Set the `WEB3FORMS_ACCESS_KEY` environment variable in your Vercel project settings before deploying.

See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

&copy; 2026 CCQ Pvt Ltd. All rights reserved.
