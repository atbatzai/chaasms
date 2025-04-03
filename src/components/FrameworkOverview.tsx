
import { useState } from 'react';
import { ArrowRight, X, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

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
      color: "#3A5CD0",
      bgColor: "from-blue-100 to-blue-200",
      ringColor: "rgba(58, 92, 208, 0.15)",
      detailedDescription: "Establish the foundational principles that will guide your channel strategy. Define your partner ecosystem orientation and philosophy to create a solid base for your partner program."
    },
    {
      number: "02",
      title: "Program Architecture",
      description: "Partner Types, Tiers & Enablement Blueprint",
      color: "#2C4CAD",
      bgColor: "from-indigo-100 to-indigo-200",
      ringColor: "rgba(44, 76, 173, 0.15)",
      detailedDescription: "Design your program structure including partner types, tier criteria, and enablement frameworks that will drive consistency across your channel organization."
    },
    {
      number: "03",
      title: "Ecosystem Strategy",
      description: "SaaS & Marketplace Playbook Matrix",
      color: "#4077D9",
      bgColor: "from-blue-50 to-blue-100",
      ringColor: "rgba(64, 119, 217, 0.15)", 
      detailedDescription: "Create specific playbooks for different partner types including marketplace partners, SaaS integrations, and traditional resellers with detailed engagement models."
    },
    {
      number: "04",
      title: "Touchpoint & Segmentation",
      description: "Partner Journey Mapping & Lifecycle Management",
      color: "#5395E4",
      bgColor: "from-cyan-50 to-cyan-100",
      ringColor: "rgba(83, 149, 228, 0.15)",
      detailedDescription: "Map comprehensive partner journeys and segment partners based on value potential to ensure appropriate resource allocation and personalized experiences."
    },
    {
      number: "05",
      title: "GTM Motion",
      description: "Co-Sell, Co-Market & Marketplace Execution",
      color: "#3953A4",
      bgColor: "from-purple-100 to-purple-200",
      ringColor: "rgba(57, 83, 164, 0.15)",
      detailedDescription: "Implement go-to-market motions including co-selling, co-marketing, and marketplace-specific strategies with measurable outcomes and clear responsibilities."
    },
    {
      number: "06",
      title: "Measurement & Scaling",
      description: "Governance, Data & Optimization",
      color: "#2B418A",
      bgColor: "from-purple-200 to-purple-300",
      ringColor: "rgba(43, 65, 138, 0.15)",
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
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-chaasms-blue text-sm mb-4 animate-fade-in">Our Methodology</span>
          <h2 className="text-3xl md:text-4xl font-medium text-chaasms-dark mb-6 font-playfair">
            The CHAASMS Framework
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A structured, six-layer methodology for building successful channel programs in today's complex ecosystem landscape.
          </p>
        </div>
        
        {/* Interactive Infographic */}
        <div className="mb-20 relative flex justify-center">
          <div className="relative h-[500px] w-[500px] max-w-full">
            {frameworkLayers.map((layer, index) => {
              const size = 500 - index * 80;
              const delay = 0.1 * (frameworkLayers.length - index);
              
              return (
                <motion.div
                  key={layer.number}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay, duration: 0.5 }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center cursor-pointer shadow-sm"
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
                      <h3 className="text-gray-800 font-medium mb-1 text-xl">CHAASMS</h3>
                      <p className="text-sm text-gray-500">Click any ring</p>
                    </div>
                  )}
                </motion.div>
              );
            })}
            
            {/* Layer Labels */}
            {frameworkLayers.map((layer, index) => {
              if (index === 0) return null; // Skip the center
              
              const size = 500 - index * 80;
              const angle = (index * 60) % 360; // Position labels evenly around the circle
              const radian = angle * (Math.PI / 180);
              const radius = size / 2;
              const x = Math.cos(radian) * radius;
              const y = Math.sin(radian) * radius;
              
              return (
                <motion.div
                  key={`label-${layer.number}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + (0.1 * index), duration: 0.3 }}
                  className="absolute top-1/2 left-1/2"
                  style={{ 
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    zIndex: frameworkLayers.length + 1
                  }}
                >
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <div 
                        className="bg-white px-3 py-1.5 rounded-md shadow-md border border-gray-100 cursor-pointer transition-all hover:shadow-lg"
                        onClick={() => handleLayerClick(layer)}
                      >
                        <div className="flex items-center gap-1">
                          <span className="text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center text-white"
                                style={{ backgroundColor: layer.color }}>
                            {layer.number}
                          </span>
                          <span className="text-sm font-medium text-gray-800">{layer.title}</span>
                        </div>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-64 p-3 text-sm">
                      <h4 className="font-medium mb-1" style={{ color: layer.color }}>{layer.title}</h4>
                      <p className="text-gray-600">{layer.description}</p>
                    </HoverCardContent>
                  </HoverCard>
                </motion.div>
              );
            })}
          </div>
          
          {/* Layer Detail Modal */}
          <AnimatePresence>
            {selectedLayer && (
              <motion.div
                initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                animate={{ opacity: 1, backdropFilter: 'blur(4px)' }}
                exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/25"
                onClick={() => setSelectedLayer(null)}
              >
                <motion.div
                  initial={{ scale: 0.95, y: 10 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.95, y: 10 }}
                  className="bg-white rounded-lg shadow-xl max-w-lg w-full overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="p-6 relative">
                    <button 
                      className="absolute top-4 right-4 rounded-full p-1.5 bg-gray-100 hover:bg-gray-200 transition-colors"
                      onClick={() => setSelectedLayer(null)}
                    >
                      <X size={16} className="text-gray-500" />
                    </button>
                    
                    <div className="mb-6 pt-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span 
                          className="text-white text-xs font-semibold rounded-full w-6 h-6 flex items-center justify-center"
                          style={{ backgroundColor: selectedLayer.color }}
                        >
                          {selectedLayer.number}
                        </span>
                        <h3 className="text-xl font-medium text-gray-800">
                          {selectedLayer.title}
                        </h3>
                      </div>
                      <div className="text-gray-700 text-sm font-medium">{selectedLayer.description}</div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {selectedLayer.detailedDescription}
                      </p>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button 
                        className="rounded-md text-white flex items-center gap-2"
                        style={{ backgroundColor: selectedLayer.color }}
                      >
                        Learn More
                        <ChevronRight size={16} />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Benefits section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-medium text-chaasms-dark mb-12 text-center font-playfair">
            Why You Need a Comprehensive Framework
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-lg shadow-sm p-6 hover:shadow-md transition-all group">
                <div className="mb-5 inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-chaasms-blue">
                  <span className="font-semibold">{index + 1}</span>
                </div>
                <h4 className="font-medium text-lg text-gray-800 mb-3 group-hover:text-chaasms-blue transition-colors">{benefit.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
            
          <div className="pt-12 flex justify-center">
            <Button className="bg-chaasms-blue hover:bg-blue-700 rounded-md px-6 py-2 h-auto text-sm shadow-sm hover:shadow-md group transition-all">
              Explore the Framework
              <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameworkOverview;
