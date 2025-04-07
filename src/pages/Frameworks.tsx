
import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';
import Layer1Svg from '@/components/framework/Layer1Svg';
import Layer2Svg from '@/components/framework/Layer2Svg';
import Layer3Svg from '@/components/framework/Layer3Svg';
import Layer4Svg from '@/components/framework/Layer4Svg';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Define consistent color theme for the page
const colors = {
  primary: '#0f4c81',  // Deep blue for main elements
  secondary: '#3498db' // Medium blue for secondary elements
};

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

            {/* Layer Navigation - Consistent styling */}
            <div className="flex justify-center flex-wrap gap-3 mb-12">
              {[1, 2, 3, 4, 5, 6].map(layer => (
                <button
                  key={layer}
                  onClick={() => handleLayerChange(layer)}
                  className={`w-12 h-12 rounded-full text-white flex items-center justify-center font-bold transition-all ${
                    activeLayer === layer 
                      ? 'transform scale-110 shadow-md' 
                      : 'opacity-80 hover:opacity-100'
                  }`}
                  style={{ 
                    backgroundColor: activeLayer === layer ? colors.primary : colors.secondary,
                  }}
                >
                  {layer}
                </button>
              ))}
            </div>

            {/* Layer Content - Consistent container */}
            <div className="mb-16 overflow-hidden bg-white rounded-lg shadow-sm p-4">
              {activeLayer === 1 && <Layer1Svg />}
              {activeLayer === 2 && <Layer2Svg />}
              {activeLayer === 3 && <Layer3Svg />}
              {activeLayer === 4 && <Layer4Svg />}
              {activeLayer === 5 && <div className="text-center py-12 text-gray-500">Layer 5 content coming soon...</div>}
              {activeLayer === 6 && <div className="text-center py-12 text-gray-500">Layer 6 content coming soon...</div>}
            </div>

            {/* Navigation Arrows - Consistent styling */}
            <div className="flex justify-between items-center max-w-4xl mx-auto">
              <Button
                onClick={() => handleLayerChange(activeLayer > 1 ? activeLayer - 1 : 6)}
                className="flex items-center gap-2"
                style={{ 
                  backgroundColor: colors.primary,
                  color: 'white'
                }}
              >
                <ArrowLeft size={16} />
                <span>Previous Layer</span>
              </Button>

              <div className="text-center font-medium" style={{ color: colors.primary }}>
                Layer {activeLayer} of 6
              </div>

              <Button
                onClick={() => handleLayerChange(activeLayer < 6 ? activeLayer + 1 : 1)}
                className="flex items-center gap-2"
                style={{ 
                  backgroundColor: colors.primary,
                  color: 'white'
                }}
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
