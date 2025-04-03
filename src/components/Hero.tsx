
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-40 md:pt-44 pb-24 md:pb-36 bg-white">
      <div className="chaasms-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-7 space-y-8">
            <h1 className="text-chaasms-dark leading-tight">
              The Definitive Channel Strategy Framework for Modern ISVs
            </h1>
            
            <p className="text-xl text-chaasms-text max-w-2xl leading-relaxed">
              Navigate the complex world of channel partnerships, ecosystems, and marketplace strategies with clarity and structure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 pt-8">
              <Button className="btn-primary">
                Book a Consultation
              </Button>
              
              <Button 
                variant="outline" 
                className="btn-secondary group"
              >
                Explore the Framework
                <ChevronRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-0 bg-chaasms-lightgray rounded-none transform rotate-2"></div>
              <div className="relative bg-white p-10 rounded-none shadow-sm border border-chaasms-midgray">
                <div className="space-y-6">
                  <div className="text-xl font-normal text-center text-chaasms-dark mb-8">
                    The CHAASMS Framework
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-chaasms-blue text-white py-4 px-5 text-sm font-normal">
                      Measurement & Scaling
                    </div>
                    <div className="bg-chaasms-blue/95 text-white py-4 px-5 text-sm font-normal">
                      GTM Motion
                    </div>
                    <div className="bg-chaasms-blue/90 text-white py-4 px-5 text-sm font-normal">
                      Touchpoint & Segmentation
                    </div>
                    <div className="bg-chaasms-blue/85 text-white py-4 px-5 text-sm font-normal">
                      Ecosystem Strategy
                    </div>
                    <div className="bg-chaasms-blue/80 text-white py-4 px-5 text-sm font-normal">
                      Program Architecture
                    </div>
                    <div className="bg-chaasms-blue/75 text-white py-4 px-5 text-sm font-normal">
                      Foundational Strategy
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
