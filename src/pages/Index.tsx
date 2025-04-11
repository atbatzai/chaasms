
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FrameworkOverviewGrid from '@/components/framework/FrameworkOverviewGrid';
import ChallengeSection from '@/components/ChallengeSection';
import Implementation from '@/components/Implementation';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';
import { Toaster } from "sonner";

const Index = () => {
  // Ensure page starts at the top when navigating to this route
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Clean up any stray event listeners when component unmounts
    return () => {
      window.onnotify = null;
      window.s = null;
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="flex-grow">
        <section id="hero">
          <Hero />
        </section>
        
        {/* Framework Overview Grid section */}
        <section id="framework-overview-grid" className="py-12 md:py-16 bg-white">
          <FrameworkOverviewGrid />
        </section>
        
        <div className="relative">
          <SectionDivider position="top" color="#f7f7f7" />
          <section id="challenges">
            <ChallengeSection />
          </section>
          <SectionDivider position="bottom" color="white" />
        </div>
        
        <section id="implementation">
          <Implementation />
        </section>
        
        <div className="relative">
          <SectionDivider position="top" color="#f7f7f7" />
          <section id="services">
            <Services />
          </section>
          <SectionDivider position="bottom" color="white" />
        </div>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
};

export default Index;
