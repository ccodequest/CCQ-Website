import Navbar from '@/components/Navbar';
import HomeBottomNav from '@/components/HomeBottomNav';
import ScrollToTop from '@/components/ScrollToTop';
import Hero from '@/components/Hero';
import WebDevTeaser from '@/components/WebDevTeaser';
import About from '@/components/About';
import Mission from '@/components/Mission';
import Services from '@/components/Services';
// import Partners from '@/components/Partners'; // commented out – re-enable when ready
import ExclusiveOffer from '@/components/ExclusiveOffer';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import HackathonPopup from '@/components/HackathonPopup';
import { SITE } from '@/config/siteConfig';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Home | ${SITE.name}`,
  description: SITE.description,
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* <HackathonPopup /> */}
      <Navbar />
      <Hero />
      <WebDevTeaser />
      <About />
      <Mission />
      <Services />
      {/* <Partners /> */}  {/* Educational Partners section – commented out */}
      <ExclusiveOffer />
      <Contact />
      <Footer />
      <HomeBottomNav />
      <ScrollToTop />
    </main>
  );
}
