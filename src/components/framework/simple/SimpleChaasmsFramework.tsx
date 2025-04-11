
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FrameworkHeader from './FrameworkHeader';
import FrameworkNavigation from './FrameworkNavigation';
import LayerContent from './LayerContent';

const SimpleChaasmsFramework = () => {
  const [activeLayer, setActiveLayer] = useState(0);
  const navigate = useNavigate();
  
  const layers = [
    { title: "Foundational Strategy", description: "Channel philosophy, ecosystem orientation, GTM alignment" },
    { title: "Program Architecture", description: "Partner types, tiering, enablement framework" },
    { title: "Ecosystem Strategy", description: "Platform-specific strategies, marketplace approach" },
    { title: "Touchpoint & Segmentation", description: "Partner journey, segmentation model, lifecycle management" },
    { title: "GTM Motion", description: "Co-sell, co-market, marketplace execution" },
    { title: "Measurement & Scaling", description: "KPIs, governance, optimization loop" }
  ];
  
  // Handler to navigate to detailed framework layers
  const handleViewDetailedLayer = () => {
    navigate(`/frameworks?layer=${activeLayer + 1}`);
    window.scrollTo(0, 0);
  };

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
        
        <div className="mt-6 text-right">
          <button 
            onClick={handleViewDetailedLayer}
            className="px-4 py-2 bg-chaasms-blue text-white rounded-md text-sm hover:bg-blue-700 transition-colors"
          >
            View Detailed Layer
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimpleChaasmsFramework;
