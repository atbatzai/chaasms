
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="chaasms-container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-chaasms-dark leading-tight mb-4">
              The Definitive Channel Strategy Framework for Modern ISVs
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              Navigate the complex world of channel partnerships, ecosystems, and marketplace strategies with clarity and structure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-chaasms-blue hover:bg-blue-700 text-white font-medium py-2 px-6">
                Book a Consultation
              </Button>
              <Button variant="outline" className="bg-white text-chaasms-blue border-chaasms-blue hover:bg-blue-50">
                Explore the Framework
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 rounded-lg transform rotate-3"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-lg">
                <div className="flex flex-col items-center">
                  <div className="w-full max-w-md">
                    <div className="pyramid-container relative mb-4">
                      {/* Simplified framework pyramid visualization */}
                      <div className="bg-chaasms-blue/90 text-white p-3 rounded-t-lg text-center text-xs sm:text-sm">
                        Measurement & Scaling
                      </div>
                      <div className="bg-chaasms-blue/80 text-white p-3 text-center text-xs sm:text-sm mt-1">
                        GTM Motion
                      </div>
                      <div className="bg-chaasms-blue/70 text-white p-3 text-center text-xs sm:text-sm mt-1">
                        Touchpoint & Segmentation
                      </div>
                      <div className="bg-chaasms-blue/60 text-white p-3 text-center text-xs sm:text-sm mt-1">
                        Ecosystem Strategy
                      </div>
                      <div className="bg-chaasms-blue/50 text-white p-3 text-center text-xs sm:text-sm mt-1">
                        Program Architecture
                      </div>
                      <div className="bg-chaasms-blue/40 text-white p-3 rounded-b-lg text-center text-xs sm:text-sm mt-1">
                        Foundational Strategy
                      </div>
                    </div>
                    <p className="text-center text-sm text-gray-600 mt-2">The CHAASMS Six-Layer Framework</p>
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
