
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FrameworkOverview from '@/components/FrameworkOverview';
import ChallengeSection from '@/components/ChallengeSection';
import Implementation from '@/components/Implementation';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';
import SimpleChaasmsFramework from '@/components/SimpleChaasmsFramework';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="flex-grow">
        <section id="hero">
          <Hero />
        </section>
        
        <div className="relative">
          <SectionDivider position="top" color="#f7f7f7" />
          <section id="challenges">
            <ChallengeSection />
          </section>
          <SectionDivider position="bottom" color="white" />
        </div>
        
        <div className="relative">
          <SectionDivider position="top" color="#f7f7f7" />
          <section id="framework-overview">
            <FrameworkOverview />
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
        
        <div className="relative">
          <SectionDivider position="top" color="#f7f7f7" />
          <section id="chaasms-framework" className="section-padding bg-white">
            <div className="chaasms-container">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-chaasms-blue text-sm mb-4 animate-fade-in">Interactive Tool</span>
                <h2 className="text-3xl md:text-4xl font-medium text-chaasms-dark mb-6 font-playfair">
                  Explore the CHAASMS Framework
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  A hands-on look at our six-layer methodology for building channel programs that drive growth.
                </p>
              </div>
              
              <SimpleChaasmsFramework />
            </div>
          </section>
          <SectionDivider position="bottom" color="white" />
        </div>

        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
