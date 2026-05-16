import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { ServicesSection } from '@/components/services-section';
import { SignalProcessingHero } from '@/components/signal-processing-hero';
import { CompanyVision } from '@/components/company-vision';
import { OurStory } from '@/components/our-story';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <SignalProcessingHero />
      <CompanyVision />
      <OurStory />
      <ContactSection />
      <Footer />
    </main>
  );
}
