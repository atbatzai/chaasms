
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
import { Helmet } from "react-helmet-async";

// Extend the Window interface to include our custom properties
declare global {
  interface Window {
    onnotify?: any;
    s?: any;
  }
}

const Index = () => {
  // Ensure page starts at the top when navigating to this route
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Capture and suppress uncaught promise rejections related to API calls
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      // Check if the error is related to API calls
      if (event.reason?.message?.includes('403') || 
          event.reason?.message?.includes('asynchronous response')) {
        // Prevent the error from bubbling up to the console
        event.preventDefault();
        console.debug('Suppressed API connection error:', event.reason);
      }
    };
    
    // Add the event listener
    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    
    // Clean up any stray event listeners when component unmounts
    return () => {
      if (window.onnotify) window.onnotify = null;
      if (window.s) window.s = null;
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);
  
  // JSON-LD structured data for better search engine understanding
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CHAASMS",
    "url": "https://chaasms.com",
    "logo": "https://chaasms.com/lovable-uploads/26c0451b-72e8-4bb2-9a58-202300301688.png",
    "description": "The first structured framework for ISVs to build channel programs that thrive across today's complex ecosystem landscape",
    "sameAs": [
      "https://www.linkedin.com/company/chaasms",
      "https://twitter.com/chaasms"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://chaasms.com/"
    },
    "offers": {
      "@type": "Offer",
      "name": "Channel Strategy Framework",
      "description": "End-to-end consulting to implement the CHAASMS framework for your specific business needs"
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col relative">
      <Helmet>
        <title>CHAASMS - The First Structured Multi-Ecosystem Channel Framework</title>
        <meta name="description" content="The first structured framework for ISVs to build channel programs that thrive across today's complex ecosystem landscape" />
        <meta name="keywords" content="channel strategy, partner ecosystem, ISV framework, channel program, partner enablement, marketplace strategy, CHAASMS" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://chaasms.com/" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <Header />
      <main className="flex-grow">
        <section id="hero" aria-label="Introduction to CHAASMS Framework">
          <Hero />
        </section>
        
        {/* Framework Overview Grid section */}
        <section id="framework-overview-grid" className="py-12 md:py-16 bg-white" aria-label="Framework Overview">
          <FrameworkOverviewGrid />
        </section>
        
        <div className="relative">
          <SectionDivider position="top" color="#f7f7f7" />
          <section id="challenges" aria-label="Industry Challenges">
            <ChallengeSection />
          </section>
          <SectionDivider position="bottom" color="white" />
        </div>
        
        <section id="implementation" aria-label="Framework Implementation">
          <Implementation />
        </section>
        
        <div className="relative">
          <SectionDivider position="top" color="#f7f7f7" />
          <section id="services" aria-label="Our Services">
            <Services />
          </section>
          <SectionDivider position="bottom" color="white" />
        </div>
        
        <section id="contact" aria-label="Contact Us">
          <Contact />
        </section>
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
};

export default Index;
