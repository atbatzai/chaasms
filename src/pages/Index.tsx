
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FrameworkOverview from '@/components/FrameworkOverview';
import ChallengeSection from '@/components/ChallengeSection';
import Implementation from '@/components/Implementation';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingShapes from '@/components/FloatingShapes';
import SectionDivider from '@/components/SectionDivider';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <FloatingShapes />
      <Header />
      <main className="flex-grow">
        <Hero />
        <div className="relative">
          <SectionDivider position="top" color="#f7f7f7" />
          <FrameworkOverview />
          <SectionDivider position="bottom" color="white" />
        </div>
        <div className="relative">
          <SectionDivider position="top" color="#f7f7f7" />
          <ChallengeSection />
          <SectionDivider position="bottom" color="white" />
        </div>
        <Implementation />
        <div className="relative">
          <SectionDivider position="top" color="#f7f7f7" />
          <Services />
          <SectionDivider position="bottom" color="white" />
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
