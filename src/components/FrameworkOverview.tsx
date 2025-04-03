
import { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface FrameworkLayerType {
  number: string;
  title: string;
  description: string;
  color: string;
  detailedDescription: string;
  bgColor: string;
  ringColor: string;
}

const FrameworkOverview = () => {
  const [selectedLayer, setSelectedLayer] = useState<FrameworkLayerType | null>(null);
  
  const frameworkLayers: FrameworkLayerType[] = [
    {
      number: "01",
      title: "Foundational Strategy",
      description: "Channel Philosophy & Ecosystem Orientation",
      color: "#4361EE",
      bgColor: "from-blue-100 to-blue-200",
      ringColor: "rgba(67, 97, 238, 0.25)",
      detailedDescription: "Establish the foundational principles that will guide your channel strategy. Define your partner ecosystem orientation and philosophy to create a solid base for your partner program."
    },
    {
      number: "02",
      title: "Program Architecture",
      description: "Partner Types, Tiers & Enablement Blueprint",
      color: "#3F37C9",
      bgColor: "from-indigo-100 to-indigo-200",
      ringColor: "rgba(63, 55, 201, 0.25)",
      detailedDescription: "Design your program structure including partner types, tier criteria, and enablement frameworks that will drive consistency across your channel organization."
    },
    {
      number: "03",
      title: "Ecosystem Strategy",
      description: "SaaS & Marketplace Playbook Matrix",
      color: "#4895EF",
      bgColor: "from-blue-50 to-blue-100",
      ringColor: "rgba(72, 149, 239, 0.25)",
      detailedDescription: "Create specific playbooks for different partner types including marketplace partners, SaaS integrations, and traditional resellers with detailed engagement models."
    },
    {
      number: "04",
      title: "Touchpoint & Segmentation",
      description: "Partner Journey Mapping & Lifecycle Management",
      color: "#4CC9F0",
      bgColor: "from-cyan-50 to-cyan-100",
      ringColor: "rgba(76, 201, 240, 0.25)",
      detailedDescription: "Map comprehensive partner journeys and segment partners based on value potential to ensure appropriate resource allocation and personalized experiences."
    },
    {
      number: "05",
      title: "GTM Motion",
      description: "Co-Sell, Co-Market & Marketplace Execution",
      color: "#7209B7",
      bgColor: "from-purple-100 to-purple-200",
      ringColor: "rgba(114, 9, 183, 0.25)",
      detailedDescription: "Implement go-to-market motions including co-selling, co-marketing, and marketplace-specific strategies with measurable outcomes and clear responsibilities."
    },
    {
      number: "06",
      title: "Measurement & Scaling",
      description: "Governance, Data & Optimization",
      color: "#560BAD",
      bgColor: "from-purple-200 to-purple-300",
      ringColor: "rgba(86, 11, 173, 0.25)",
      detailedDescription: "Establish measurement frameworks and KPIs to track partner program performance, make data-driven decisions, and continuously optimize your channel strategy."
    }
  ];

  const benefits = [
    {
      title: "Navigate Ecosystem Complexity",
      description: "Modern channel strategies require a structured approach to manage diverse partner types and ecosystem platforms."
    },
    {
      title: "Accelerate Time-to-Market",
      description: "A well-designed channel framework reduces the time needed to develop and deploy effective partnership strategies."
    },
    {
      title: "Drive Partner-Led Growth",
      description: "Strategic channel programs create scalable revenue streams through partner ecosystems."
    }
  ];

  const handleLayerClick = (layer: FrameworkLayerType) => {
    setSelectedLayer(layer);
  };

  return (
    <section id="framework-overview" className="section-padding relative overflow-hidden bg-white">
      <div className="chaasms-container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-chaasms-blue text-sm mb-4 animate-fade-in">Our Methodology</span>
          <h2 className="text-3xl md:text-4xl font-medium text-chaasms-dark mb-6 font-playfair">
            The CHAASMS Framework
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A structured, six-layer methodology for building successful channel programs in today's complex ecosystem landscape.
          </p>
        </div>
        
        {/* Interactive Infographic */}
        <div className="mb-24 relative flex justify-center">
          <div className="relative h-[500px] w-[500px] max-w-full">
            {frameworkLayers.map((layer, index) => {
              const size = 500 - index * 80;
              const delay = 0.1 * (frameworkLayers.length - index);
              
              return (
                <motion.div
                  key={layer.number}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay, duration: 0.5 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center cursor-pointer"
                  style={{ 
                    width: size, 
                    height: size, 
                    backgroundColor: layer.ringColor,
                    zIndex: frameworkLayers.length - index
                  }}
                  onClick={() => handleLayerClick(layer)}
                >
                  {index === 0 && (
                    <div className="text-center">
                      <h3 className="text-chaasms-dark font-medium mb-2 text-xl">CHAASMS</h3>
                      <p className="text-sm text-chaasms-text">Click any ring</p>
                    </div>
                  )}
                </motion.div>
              );
            })}
            
            {/* Layer Labels */}
            {frameworkLayers.map((layer, index) => {
              const size = 500 - index * 80;
              const angle = -90 + (index * 60); // Position labels at different angles
              const radian = angle * (Math.PI / 180);
              const x = Math.cos(radian) * (size / 2);
              const y = Math.sin(radian) * (size / 2);
              
              return (
                <motion.div
                  key={`label-${layer.number}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + (0.1 * index), duration: 0.3 }}
                  className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 pointer-events-none"
                  style={{ 
                    marginLeft: x,
                    marginTop: y,
                    zIndex: frameworkLayers.length + 1
                  }}
                >
                  <div 
                    className="bg-white px-2 py-1 rounded shadow-sm pointer-events-auto cursor-pointer"
                    onClick={() => handleLayerClick(layer)}
                  >
                    <div className="text-xs font-medium" style={{ color: layer.color }}>
                      {layer.title}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          {/* Layer Detail Modal */}
          <AnimatePresence>
            {selectedLayer && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
                onClick={() => setSelectedLayer(null)}
              >
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                  className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6 relative overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button 
                    className="absolute top-3 right-3 rounded-full p-1 hover:bg-gray-100 transition-colors"
                    onClick={() => setSelectedLayer(null)}
                  >
                    <X size={20} />
                  </button>
                  
                  <div className={`absolute top-0 left-0 w-full h-1`} style={{ backgroundColor: selectedLayer.color }} />
                  
                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-1">Level {selectedLayer.number}</div>
                    <h3 className="text-xl font-medium" style={{ color: selectedLayer.color }}>
                      {selectedLayer.title}
                    </h3>
                    <div className="text-gray-700 font-medium">{selectedLayer.description}</div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {selectedLayer.detailedDescription}
                  </p>
                  
                  <div className="flex justify-end">
                    <Button 
                      className="text-white rounded-md shadow-sm"
                      style={{ backgroundColor: selectedLayer.color }}
                    >
                      Learn More
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Benefits section */}
        <div className="max-w-4xl mx-auto relative">
          <h3 className="text-2xl font-medium text-chaasms-dark mb-10 text-center font-playfair">
            Why You Need a Comprehensive Framework
          </h3>
          
          <div className="space-y-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-6 group hover-card p-6 rounded-lg transition-all">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-purple-50 group-hover:from-blue-100 group-hover:to-purple-100 transition-colors">
                  <div className="w-6 h-6 rounded-full" style={{ 
                    background: `conic-gradient(${frameworkLayers.map((layer, i) => 
                      `${layer.color} ${i * (100/frameworkLayers.length)}%, ${layer.color} ${(i+1) * (100/frameworkLayers.length)}%`
                    )})` 
                  }}></div>
                </div>
                <div>
                  <h4 className="font-medium text-lg text-chaasms-dark mb-2 group-hover:text-chaasms-blue transition-colors">{benefit.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
            
            <div className="pt-10 flex justify-center">
              <Button className="bg-gradient-to-r from-chaasms-blue to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-md px-8 py-6 h-auto text-sm shadow-md hover:shadow-lg group transition-all">
                Explore the Framework
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameworkOverview;
