
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FrameworkOverview from '@/components/FrameworkOverview';
import ChallengeSection from '@/components/ChallengeSection';
import Implementation from '@/components/Implementation';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FrameworkOverview />
        <ChallengeSection />
        <Implementation />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
