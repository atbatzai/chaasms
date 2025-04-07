
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FrameworkLayerType } from '@/types/framework';
import { frameworkLayers, benefits } from '@/data/frameworkData';
import FrameworkSteps from './framework/FrameworkSteps';
import LayerDetailDialog from './framework/LayerDetailDialog';
import FrameworkBenefits from './framework/FrameworkBenefits';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FrameworkOverview = () => {
  const [selectedLayer, setSelectedLayer] = useState<FrameworkLayerType | null>(null);
  const navigate = useNavigate();

  const handleLayerClick = (layer: FrameworkLayerType) => {
    setSelectedLayer(layer);
  };

  // Updated navigation functions to ensure top-of-page navigation
  const navigateToFrameworkOverview = () => {
    navigate('/framework-overview');
    window.scrollTo(0, 0);
  };

  const navigateToFrameworks = () => {
    navigate('/frameworks');
    window.scrollTo(0, 0);
  };

  return (
    <section id="framework-overview" className="section-padding relative overflow-hidden bg-white pt-6">
      <div className="chaasms-container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-chaasms-blue text-sm mb-4 animate-fade-in">Our Methodology</span>
          <h2 className="text-3xl md:text-4xl font-medium text-chaasms-dark mb-4 font-playfair">
            The CHAASMS Framework
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            A structured, six-layer methodology for building successful channel programs in today's complex ecosystem landscape.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={navigateToFrameworkOverview}
              className="flex items-center gap-2"
              style={{ backgroundColor: '#0f4c81', color: 'white' }}
            >
              <span>Framework Overview</span>
              <ArrowRight size={16} />
            </Button>
            
            <Button
              onClick={navigateToFrameworks}
              className="flex items-center gap-2"
              variant="outline"
            >
              <span>Detailed Framework Layers</span>
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
        
        <FrameworkSteps 
          frameworkLayers={frameworkLayers} 
          onLayerClick={handleLayerClick} 
        />
        
        <LayerDetailDialog 
          selectedLayer={selectedLayer} 
          onOpenChange={() => setSelectedLayer(null)} 
        />
        
        <FrameworkBenefits benefits={benefits} />
        
        {/* Navigation buttons to detailed framework pages - Updated with scroll to top */}
        <div className="text-center mt-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={navigateToFrameworkOverview}
              className="flex items-center gap-2"
              style={{ backgroundColor: '#0f4c81', color: 'white' }}
            >
              <span>Explore Framework Overview</span>
              <ArrowRight size={16} />
            </Button>
            
            <Button
              onClick={navigateToFrameworks}
              className="flex items-center gap-2"
              variant="outline"
            >
              <span>View Detailed Framework</span>
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameworkOverview;
