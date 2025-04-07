
import { motion } from "framer-motion";
import { Info } from 'lucide-react';
import { FrameworkLayerType } from '@/types/framework';

interface FrameworkStepsProps {
  frameworkLayers: FrameworkLayerType[];
  onLayerClick: (layer: FrameworkLayerType) => void;
}

const FrameworkSteps = ({ frameworkLayers, onLayerClick }: FrameworkStepsProps) => {
  return (
    <div className="relative mb-8">
      {/* Progress Line */}
      <div className="hidden md:block absolute top-10 left-0 right-0 h-1 bg-gray-200 z-0">
        <div className="absolute left-0 h-full bg-chaasms-blue" style={{ width: "100%" }}></div>
      </div>
      
      {/* Framework Steps */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 relative z-10">
        {frameworkLayers.map((layer, index) => (
          <motion.div
            key={layer.number}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="flex flex-col items-center"
          >
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center text-white mb-2 shadow-md cursor-pointer transition-transform hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: layer.color }}
              onClick={() => onLayerClick(layer)}
            >
              <div className="text-center">
                <div className="text-lg font-bold">{layer.number}</div>
              </div>
            </div>
            <h3 className="text-center font-medium text-sm mb-0.5">{layer.title}</h3>
            <p className="text-center text-xs text-gray-500 max-w-[140px]">{layer.description}</p>
            <button 
              onClick={() => onLayerClick(layer)}
              className="mt-1 text-chaasms-blue text-xs flex items-center gap-1 hover:underline"
            >
              <Info size={10} />
              <span>Learn more</span>
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FrameworkSteps;
