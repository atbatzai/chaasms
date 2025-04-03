
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 md:pt-40 pb-20 md:pb-28 bg-white">
      <div className="chaasms-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-chaasms-dark leading-tight">
              The Definitive Channel Strategy Framework for Modern ISVs
            </h1>
            
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              Navigate the complex world of channel partnerships, ecosystems, and marketplace strategies with clarity and structure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-chaasms-blue hover:bg-blue-700 text-white rounded-md px-6 py-6 h-auto">
                Book a Consultation
              </Button>
              
              <Button 
                variant="outline" 
                className="bg-transparent text-chaasms-blue border-chaasms-blue hover:bg-blue-50 rounded-md px-6 py-6 h-auto group"
              >
                Explore the Framework
                <ChevronRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-0 bg-gradient-to-tr from-chaasms-blue/5 to-chaasms-blue/10 rounded-xl transform rotate-2"></div>
              <div className="relative bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="space-y-6">
                  <div className="text-lg font-medium text-center text-chaasms-dark mb-4">
                    The CHAASMS Framework
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-chaasms-blue text-white py-3 px-4 rounded-md text-sm font-medium">
                      Measurement & Scaling
                    </div>
                    <div className="bg-chaasms-blue/90 text-white py-3 px-4 rounded-md text-sm font-medium">
                      GTM Motion
                    </div>
                    <div className="bg-chaasms-blue/80 text-white py-3 px-4 rounded-md text-sm font-medium">
                      Touchpoint & Segmentation
                    </div>
                    <div className="bg-chaasms-blue/70 text-white py-3 px-4 rounded-md text-sm font-medium">
                      Ecosystem Strategy
                    </div>
                    <div className="bg-chaasms-blue/60 text-white py-3 px-4 rounded-md text-sm font-medium">
                      Program Architecture
                    </div>
                    <div className="bg-chaasms-blue/50 text-white py-3 px-4 rounded-md text-sm font-medium">
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
