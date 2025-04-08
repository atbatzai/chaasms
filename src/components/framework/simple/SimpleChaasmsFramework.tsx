
import React, { useState } from 'react';
import FrameworkHeader from './FrameworkHeader';
import FrameworkNavigation from './FrameworkNavigation';
import LayerContent from './LayerContent';

const SimpleChaasmsFramework = () => {
  const [activeLayer, setActiveLayer] = useState(0);
  
  const layers = [
    { title: "Foundational Strategy", description: "Channel philosophy, ecosystem orientation, GTM alignment" },
    { title: "Program Architecture", description: "Partner types, tiering, enablement framework" },
    { title: "Ecosystem Strategy", description: "Platform-specific strategies, marketplace approach" },
    { title: "Touchpoint & Segmentation", description: "Partner journey, segmentation model, lifecycle management" },
    { title: "GTM Motion", description: "Co-sell, co-market, marketplace execution" },
    { title: "Measurement & Scaling", description: "KPIs, governance, optimization loop" }
  ];

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <FrameworkHeader />
      
      <FrameworkNavigation 
        layers={layers} 
        activeLayer={activeLayer} 
        setActiveLayer={setActiveLayer} 
      />
      
      <div className="bg-white p-6 border rounded-lg shadow-sm">
        <h2 className="text-lg font-bold mb-3 text-chaasms-blue">
          Layer {activeLayer + 1}: {layers[activeLayer].title}
        </h2>
        <p className="mb-6 text-gray-600">{layers[activeLayer].description}</p>
        
        <LayerContent layerIndex={activeLayer} />
      </div>
    </div>
  );
};

export default SimpleChaasmsFramework;
