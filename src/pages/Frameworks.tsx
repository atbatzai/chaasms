
import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';
import Layer1Svg from '@/components/framework/Layer1Svg';
import Layer2Svg from '@/components/framework/Layer2Svg';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Frameworks = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [activeLayer, setActiveLayer] = useState(1);
  
  // Get layer from URL parameters if available
  useEffect(() => {
    const layerParam = searchParams.get('layer');
    if (layerParam) {
      const layerNumber = parseInt(layerParam);
      if (!isNaN(layerNumber) && layerNumber >= 1 && layerNumber <= 6) {
        setActiveLayer(layerNumber);
      }
    }
  }, [searchParams]);
  
  const handleLayerChange = (layerNumber: number) => {
    setActiveLayer(layerNumber);
    navigate(`/frameworks?layer=${layerNumber}`, { replace: true });
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
                The Six-Layer Framework
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Explore our comprehensive methodology for building successful channel programs in today's complex ecosystem landscape.
              </p>
            </div>

            {/* Layer Navigation */}
            <div className="flex justify-center gap-3 mb-12">
              {[1, 2, 3, 4, 5, 6].map(layer => (
                <button
                  key={layer}
                  onClick={() => handleLayerChange(layer)}
                  className={`w-12 h-12 rounded-full text-white flex items-center justify-center font-bold transition-all ${
                    activeLayer === layer 
                      ? 'transform scale-110 shadow-md bg-chaasms-blue' 
                      : 'bg-chaasms-blue/70 hover:bg-chaasms-blue/90'
                  }`}
                >
                  {layer}
                </button>
              ))}
            </div>

            {/* Layer Content */}
            <div className="mb-16 overflow-hidden">
              {activeLayer === 1 && <Layer1Svg />}
              {activeLayer === 2 && <Layer2Svg />}
              {activeLayer === 3 && <div className="text-center py-12 text-gray-500">Layer 3 content coming soon...</div>}
              {activeLayer === 4 && <div className="text-center py-12 text-gray-500">Layer 4 content coming soon...</div>}
              {activeLayer === 5 && <div className="text-center py-12 text-gray-500">Layer 5 content coming soon...</div>}
              {activeLayer === 6 && <div className="text-center py-12 text-gray-500">Layer 6 content coming soon...</div>}
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-between items-center max-w-4xl mx-auto">
              <Button
                variant="outline"
                onClick={() => handleLayerChange(activeLayer > 1 ? activeLayer - 1 : 6)}
                className="flex items-center gap-2"
              >
                <ArrowLeft size={16} />
                <span>Previous Layer</span>
              </Button>

              <div className="text-center text-gray-500">
                Layer {activeLayer} of 6
              </div>

              <Button
                variant="outline"
                onClick={() => handleLayerChange(activeLayer < 6 ? activeLayer + 1 : 1)}
                className="flex items-center gap-2"
              >
                <span>Next Layer</span>
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

export default Frameworks;
