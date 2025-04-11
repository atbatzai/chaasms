
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

  return (
    <div className="chaasms-container max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-3 font-playfair">
          CHAASMS INTERLOCKING SYSTEM
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-6">
          How the Six Layers Build Upon Each Other to Create a Cohesive Framework
        </p>
        <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {frameworkLayers.map((layer, index) => (
          <motion.div
            key={layer.number}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            onClick={handleNavigateToFramework}
            className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer relative overflow-hidden"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg md:text-xl font-bold text-blue-700">
                Layer {layer.number}: {layer.title}
              </h3>
              <div 
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-blue-50 text-blue-600 font-bold border-2 border-blue-200"
              >
                {layer.number}
              </div>
            </div>
            
            <p className="text-sm text-gray-700 mb-4">{layer.description}</p>
            
            <div className="space-y-2">
              {/* Display bullet points from detailed description */}
              {layer.detailedDescription.split('. ').slice(0, 2).map((point, i) => (
                point.trim() && (
                  <div key={i} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-sm text-gray-600">{point.trim()}</span>
                  </div>
                )
              ))}
            </div>
            
            {/* Visual connection indicators */}
            {index < frameworkLayers.length - 1 && (
              <div className="hidden md:block absolute -bottom-5 left-1/2 transform -translate-x-1/2">
                <div className="w-0.5 h-10 bg-blue-300"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-xs text-blue-500">
                  {index === 0 ? "Drives" : 
                   index === 1 ? "Articulates" : 
                   index === 2 ? "Informs" : 
                   index === 3 ? "Guides" : 
                   "Feeds"}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
      
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h3 className="text-lg font-bold text-blue-700 mb-2">Interlocking Nature of the CHAASMS Framework</h3>
        <p className="text-sm text-gray-700">
          This foundational plan drives the Program Architecture direction and tiering structure. It's strengthened by the Ecosystem Strategy, creating clear motions for execution and creating a cohesive system for channel strategy development and optimization.
        </p>
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
