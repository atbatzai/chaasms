
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
      <main className="flex-grow pt-32">
        <section className="section-padding relative bg-white pb-24">
          <div className="chaasms-container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-chaasms-blue text-sm mb-4 animate-fade-in">
                CHAASMS Framework
              </span>
              <h2 className="text-3xl md:text-4xl font-medium text-chaasms-dark mb-6 font-playfair">
                The CHAASMS Framework Overview
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                A comprehensive six-layer methodology that delivers a structured approach to building successful channel programs.
              </p>
            </div>
            
            {/* The Interlocking Framework Visualization */}
            <ChaasmsFrameworkClean />
            
            {/* Navigation to detailed framework pages */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-medium text-chaasms-dark mb-4">
                Explore Each Framework Layer
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Dive deeper into each layer of the CHAASMS framework to understand the components and implementation strategies.
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
