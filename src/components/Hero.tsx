
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import TiltCard from "./TiltCard";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-32 md:pt-36 pb-24 md:pb-36 bg-white">
      <div className="chaasms-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-block px-4 py-2 bg-soft-blue/50 rounded-full text-chaasms-blue text-sm mb-4 animate-fade-in">
              Strategic Channel Framework
            </div>
            
            <h1 className="text-chaasms-dark leading-tight font-playfair">
              The Definitive Channel Strategy Framework for Modern ISVs
            </h1>
            
            <p className="text-xl text-chaasms-text max-w-2xl leading-relaxed">
              Navigate the complex world of channel partnerships, ecosystems, and marketplace strategies with clarity and structure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Button className="btn-primary rounded-md shadow-md hover:shadow-lg transition-all">
                Book a Consultation
              </Button>
              
              <Button 
                variant="outline" 
                className="btn-secondary group rounded-md"
                as={Link}
                to="/frameworks"
              >
                Explore the Framework
                <ChevronRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:ml-auto">
              <TiltCard className="relative bg-white p-8 rounded-lg shadow-md border border-chaasms-midgray/30">
                <div className="space-y-6">
                  <div className="text-xl font-normal text-center text-chaasms-dark mb-6 font-playfair">
                    The CHAASMS Framework
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-gradient-to-r from-chaasms-blue to-blue-700 text-white py-3 px-5 text-sm font-normal rounded-md shadow-sm">
                      Measurement & Scaling
                    </div>
                    <div className="bg-gradient-to-r from-chaasms-blue/95 to-blue-600/95 text-white py-3 px-5 text-sm font-normal rounded-md shadow-sm">
                      GTM Motion
                    </div>
                    <div className="bg-gradient-to-r from-chaasms-blue/90 to-blue-600/90 text-white py-3 px-5 text-sm font-normal rounded-md shadow-sm">
                      Touchpoint & Segmentation
                    </div>
                    <div className="bg-gradient-to-r from-chaasms-blue/85 to-blue-600/85 text-white py-3 px-5 text-sm font-normal rounded-md shadow-sm">
                      Ecosystem Strategy
                    </div>
                    <div className="bg-gradient-to-r from-chaasms-blue/80 to-blue-600/80 text-white py-3 px-5 text-sm font-normal rounded-md shadow-sm">
                      Program Architecture
                    </div>
                    <div className="bg-gradient-to-r from-chaasms-blue/75 to-blue-600/75 text-white py-3 px-5 text-sm font-normal rounded-md shadow-sm">
                      Foundational Strategy
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1920 250" className="w-full h-auto fill-current text-chaasms-lightgray">
          <path d="M1920,144.5l0,105.5l-1920,0l0,-105.5c0,0 570,-90 960,0C1340,234.5 1920,144.5 1920,144.5z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
