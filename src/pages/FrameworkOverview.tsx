
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';
import ChaasmsFrameworkClean from '@/components/framework/ChaasmsFrameworkClean';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FrameworkOverview = () => {
  const navigate = useNavigate();
  
  // Ensure page starts at the top when navigating to this route
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const navigateToFrameworks = () => {
    navigate('/frameworks');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="flex-grow pt-16">
        <section className="section-padding relative bg-white pb-16">
          <div className="chaasms-container">
            <div className="max-w-3xl mx-auto text-center mb-4">
              <span className="inline-block px-3 py-0.5 rounded-full bg-blue-50 text-chaasms-blue text-xs mb-1 animate-fade-in">
                CHAASMS Framework
              </span>
              <h2 className="text-2xl md:text-3xl font-medium text-chaasms-dark mb-2 font-playfair">
                The CHAASMS Framework Overview
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                A comprehensive six-layer methodology for building successful channel programs.
              </p>
            </div>
            
            {/* The Interlocking Framework Visualization */}
            <ChaasmsFrameworkClean />
            
            {/* Navigation to detailed framework pages */}
            <div className="mt-8 text-center">
              <h3 className="text-xl font-medium text-chaasms-dark mb-2">
                Explore Each Framework Layer
              </h3>
              <p className="text-base text-gray-600 max-w-2xl mx-auto mb-4">
                Dive deeper into each layer to understand the components and implementation strategies.
              </p>
              
              <Button
                onClick={navigateToFrameworks}
                className="flex items-center gap-2 mx-auto"
                style={{ backgroundColor: '#0f4c81', color: 'white' }}
              >
                <span>Explore Framework Details</span>
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SectionDivider position="top" color="#f7f7f7" />
      <Footer />
    </div>
  );
};

export default FrameworkOverview;
