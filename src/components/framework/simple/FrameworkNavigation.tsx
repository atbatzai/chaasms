
import React from 'react';

interface FrameworkNavigationProps {
  layers: {
    title: string;
    description: string;
  }[];
  activeLayer: number;
  setActiveLayer: (index: number) => void;
}

const FrameworkNavigation: React.FC<FrameworkNavigationProps> = ({ layers, activeLayer, setActiveLayer }) => {
  return (
    <div className="mb-6 flex flex-wrap gap-2">
      {layers.map((layer, index) => (
        <button
          key={index}
          onClick={() => setActiveLayer(index)}
          className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
            activeLayer === index 
              ? 'bg-chaasms-blue text-white shadow-sm' 
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          Layer {index + 1}: {layer.title}
        </button>
      ))}
    </div>
  );
};

export default FrameworkNavigation;
