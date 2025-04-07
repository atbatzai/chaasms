
import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';
import Layer1Svg from '@/components/framework/Layer1Svg';
import Layer2Svg from '@/components/framework/Layer2Svg';
import Layer3Svg from '@/components/framework/Layer3Svg';
import Layer4Svg from '@/components/framework/Layer4Svg';
import Layer5Svg from '@/components/framework/Layer5Svg';
import Layer6Svg from '@/components/framework/Layer6Svg';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Home } from "lucide-react";

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
    // Ensure page starts at the top when navigating to this route
    window.scrollTo(0, 0);
    
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
    // Scroll back to the top of the framework content
    window.scrollTo({
      top: document.querySelector('.pt-20')?.getBoundingClientRect().top + window.pageYOffset || 0,
      behavior: 'smooth'
    });
  };

  const navigateToFrameworkOverview = () => {
    navigate('/framework-overview');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="flex-grow pt-20">
        <section className="section-padding relative bg-white pb-16">
          <div className="chaasms-container">
            <div className="flex justify-between items-center mb-6">
              {/* Navigation to Framework Overview */}
              <Button 
                onClick={navigateToFrameworkOverview}
                variant="outline"
                className="flex items-center gap-2 border-chaasms-blue text-chaasms-blue hover:bg-blue-50"
              >
                <Home size={16} />
                <span>Framework Overview</span>
              </Button>
              
              <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-chaasms-blue text-sm">
                CHAASMS Framework
              </span>
            </div>

            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-medium text-chaasms-dark mb-3 font-playfair">
                The Six-Layer Framework
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Explore our comprehensive methodology for building successful channel programs in today's complex ecosystem landscape.
              </p>
            </div>

            {/* Layer Navigation - Consistent styling */}
            <div className="flex justify-center flex-wrap gap-3 mb-8">
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
            <div className="mb-8 overflow-hidden bg-white rounded-lg shadow-sm p-4">
              {activeLayer === 1 && <Layer1Svg />}
              {activeLayer === 2 && <Layer2Svg />}
              {activeLayer === 3 && <Layer3Svg />}
              {activeLayer === 4 && <Layer4Svg />}
              {activeLayer === 5 && <Layer5Svg />}
              {activeLayer === 6 && <Layer6Svg />}
            </div>

            {/* Navigation Arrows - Consistent styling */}
            <div className="flex justify-between items-center max-w-4xl mx-auto mb-10">
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
            
            {/* Return to Framework Overview Button */}
            <div className="text-center">
              <Button 
                onClick={navigateToFrameworkOverview}
                variant="outline"
                className="border-chaasms-blue text-chaasms-blue hover:bg-blue-50"
              >
                Return to Framework Overview
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
