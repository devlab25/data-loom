import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ValueProposition from '@/components/sections/ValueProposition';
import ProcessSection from '@/components/sections/ProcessSection';
import PricingCards from '@/components/sections/PricingCards';
import Testimonials from '@/components/sections/Testimonials';
import ContactCTA from '@/components/sections/ContactCTA';
import WhatsAppWidget from '@/components/common/WhatsAppWidget';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <ProcessSection />
        <PricingCards />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}