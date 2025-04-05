
import { useState } from 'react';
import { FrameworkLayerType } from '@/types/framework';
import { frameworkLayers, benefits } from '@/data/frameworkData';
import FrameworkSteps from './framework/FrameworkSteps';
import LayerDetailDialog from './framework/LayerDetailDialog';
import FrameworkBenefits from './framework/FrameworkBenefits';

const FrameworkOverview = () => {
  const [selectedLayer, setSelectedLayer] = useState<FrameworkLayerType | null>(null);

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
      </div>
    </section>
  );
};

export default FrameworkOverview;
