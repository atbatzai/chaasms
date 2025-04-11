
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
    <div className="chaasms-container">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-medium text-chaasms-dark mb-2 font-playfair">
          The CHAASMS Interlocking System
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
          A cohesive six-layer framework to align ISV channel strategy across ecosystems
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
        {frameworkLayers.map((layer, index) => (
          <motion.div
            key={layer.number}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            onClick={handleNavigateToFramework}
          >
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center text-white mb-4"
              style={{ backgroundColor: layer.color }}
            >
              <span className="text-lg font-bold">{layer.number}</span>
            </div>
            <h3 className="font-medium text-lg mb-2 text-chaasms-dark">{layer.title}</h3>
            <p className="text-sm text-gray-600">{layer.description.split(' & ')[0]}</p>
          </motion.div>
        ))}
      </div>
      
      <div className="text-center">
        <Button
          onClick={handleNavigateToFramework}
          className="px-6 py-2"
          style={{ backgroundColor: '#0f4c81', color: 'white' }}
        >
          Explore the Full Framework
          <ArrowRight size={16} className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default FrameworkOverviewGrid;
