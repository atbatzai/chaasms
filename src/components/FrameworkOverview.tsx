
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

  return (
    <section id="framework-overview" className="section-padding relative overflow-hidden bg-white">
      <div className="chaasms-container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-chaasms-blue text-sm mb-4 animate-fade-in">Our Methodology</span>
          <h2 className="text-3xl md:text-4xl font-medium text-chaasms-dark mb-6 font-playfair">
            The CHAASMS Framework
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A structured, six-layer methodology for building successful channel programs in today's complex ecosystem landscape.
          </p>
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
        
        {/* Add navigation button to detailed framework pages */}
        <div className="text-center mt-12">
          <Button
            onClick={() => navigate('/framework-overview')}
            className="flex items-center gap-2 mx-auto"
            style={{ backgroundColor: '#0f4c81', color: 'white' }}
          >
            <span>Explore Full Framework</span>
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FrameworkOverview;
