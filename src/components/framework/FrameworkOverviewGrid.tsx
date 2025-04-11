
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { frameworkLayers } from '@/data/frameworkData';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const FrameworkOverviewGrid = () => {
  const navigate = useNavigate();
  
  // Navigate to framework overview page and scroll to top
  const handleNavigateToFramework = () => {
    navigate('/framework-overview');
    window.scrollTo(0, 0);
  };

  // Define connection labels between layers
  const connectionLabels = [
    "Drives",
    "Establishes", 
    "Informs",
    "Guides",
    "Feeds"
  ];

  return (
    <div className="chaasms-container max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-chaasms-blue mb-3 font-playfair">
          CHAASMS FRAMEWORK
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-6">
          Six Interlocking Layers for Channel Strategy Success
        </p>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
        
        {/* Added Detailed Framework button */}
        <Button
          onClick={handleNavigateToFramework}
          className="mx-auto px-6 py-2.5"
          style={{ backgroundColor: '#0f4c81', color: 'white' }}
        >
          Detailed Framework
          <ArrowRight size={18} className="ml-2" />
        </Button>
      </div>
      
      {/* Vertical Flow Layout */}
      <div className="flex flex-col items-center gap-4 mb-12">
        {frameworkLayers.map((layer, index) => (
          <React.Fragment key={layer.number}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.4 }}
              onClick={handleNavigateToFramework}
              className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer w-full max-w-3xl relative"
              style={{ borderLeft: `4px solid ${layer.color}` }}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg md:text-xl font-bold text-chaasms-blue">
                  Layer {layer.number}: {layer.title}
                </h3>
                <div 
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: layer.color }}
                >
                  {layer.number}
                </div>
              </div>
              
              <p className="text-sm text-gray-700 mb-2">{layer.description}</p>
              <p className="text-xs text-gray-600">{layer.detailedDescription}</p>
            </motion.div>
            
            {/* Connection arrows and labels */}
            {index < frameworkLayers.length - 1 && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 + 0.1, duration: 0.3 }}
                className="flex flex-col items-center py-1"
              >
                <div className="px-4 py-1 bg-blue-100 rounded-full text-chaasms-blue text-xs font-medium mb-1">
                  {connectionLabels[index]}
                </div>
                <ArrowRight size={20} className="text-chaasms-blue transform rotate-90" />
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>
      
      <div className="text-center">
        <Button
          onClick={handleNavigateToFramework}
          className="px-6 py-3 text-base"
          style={{ backgroundColor: '#0f4c81', color: 'white' }}
        >
          Explore Each Framework Layer
          <ArrowRight size={18} className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default FrameworkOverviewGrid;
