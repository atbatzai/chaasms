
import { useState } from 'react';
import { ArrowRight, ChevronRight, Info } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

interface FrameworkLayerType {
  number: string;
  title: string;
  description: string;
  color: string;
  detailedDescription: string;
}

const FrameworkOverview = () => {
  const [selectedLayer, setSelectedLayer] = useState<FrameworkLayerType | null>(null);
  
  const frameworkLayers: FrameworkLayerType[] = [
    {
      number: "01",
      title: "Foundational Strategy",
      description: "Channel Philosophy & Ecosystem Orientation",
      color: "#3A5CD0",
      detailedDescription: "Establish the foundational principles that will guide your channel strategy. Define your partner ecosystem orientation and philosophy to create a solid base for your partner program."
    },
    {
      number: "02",
      title: "Program Architecture",
      description: "Partner Types, Tiers & Enablement Blueprint",
      color: "#2C4CAD",
      detailedDescription: "Design your program structure including partner types, tier criteria, and enablement frameworks that will drive consistency across your channel organization."
    },
    {
      number: "03",
      title: "Ecosystem Strategy",
      description: "SaaS & Marketplace Playbook Matrix",
      color: "#4077D9",
      detailedDescription: "Create specific playbooks for different partner types including marketplace partners, SaaS integrations, and traditional resellers with detailed engagement models."
    },
    {
      number: "04",
      title: "Touchpoint & Segmentation",
      description: "Partner Journey Mapping & Lifecycle Management",
      color: "#5395E4",
      detailedDescription: "Map comprehensive partner journeys and segment partners based on value potential to ensure appropriate resource allocation and personalized experiences."
    },
    {
      number: "05",
      title: "GTM Motion",
      description: "Co-Sell, Co-Market & Marketplace Execution",
      color: "#3953A4",
      detailedDescription: "Implement go-to-market motions including co-selling, co-marketing, and marketplace-specific strategies with measurable outcomes and clear responsibilities."
    },
    {
      number: "06",
      title: "Measurement & Scaling",
      description: "Governance, Data & Optimization",
      color: "#2B418A",
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
        
        {/* Framework Visualization - Horizontal Step Process */}
        <div className="mb-20">
          <div className="relative">
            {/* Progress Line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gray-200 z-0">
              <div className="absolute left-0 h-full bg-chaasms-blue" style={{ width: "100%" }}></div>
            </div>
            
            {/* Framework Steps */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-6 relative z-10">
              {frameworkLayers.map((layer, index) => (
                <motion.div
                  key={layer.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex flex-col items-center"
                >
                  <div 
                    className="w-24 h-24 rounded-full flex items-center justify-center text-white mb-4 shadow-md cursor-pointer transition-transform hover:scale-105 hover:shadow-lg"
                    style={{ backgroundColor: layer.color }}
                    onClick={() => handleLayerClick(layer)}
                  >
                    <div className="text-center">
                      <div className="text-xl font-bold">{layer.number}</div>
                    </div>
                  </div>
                  <h3 className="text-center font-medium text-base mb-1">{layer.title}</h3>
                  <p className="text-center text-xs text-gray-500 max-w-[160px]">{layer.description}</p>
                  <button 
                    onClick={() => handleLayerClick(layer)}
                    className="mt-2 text-chaasms-blue text-xs flex items-center gap-1 hover:underline"
                  >
                    <Info size={12} />
                    <span>Learn more</span>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Layer Detail Dialog */}
        <AlertDialog open={!!selectedLayer} onOpenChange={() => setSelectedLayer(null)}>
          <AlertDialogContent className="max-w-md">
            <AlertDialogHeader>
              {selectedLayer && (
                <>
                  <AlertDialogTitle className="flex items-center gap-2">
                    <span 
                      className="text-white text-xs font-semibold rounded-full w-6 h-6 flex items-center justify-center"
                      style={{ backgroundColor: selectedLayer.color }}
                    >
                      {selectedLayer.number}
                    </span>
                    {selectedLayer.title}
                  </AlertDialogTitle>
                  <AlertDialogDescription className="font-medium text-gray-700">
                    {selectedLayer.description}
                  </AlertDialogDescription>
                </>
              )}
            </AlertDialogHeader>
            
            {selectedLayer && (
              <div className="bg-gray-50 p-4 rounded-lg my-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {selectedLayer.detailedDescription}
                </p>
              </div>
            )}
            
            <AlertDialogFooter>
              <AlertDialogAction asChild>
                <Button 
                  className="rounded-md text-white flex items-center gap-2"
                  style={{ backgroundColor: selectedLayer?.color }}
                >
                  Learn More
                  <ChevronRight size={16} />
                </Button>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        
        {/* Benefits section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-medium text-chaasms-dark mb-12 text-center font-playfair">
            Why You Need a Comprehensive Framework
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (index * 0.1), duration: 0.4 }}
                className="bg-white border border-gray-100 rounded-lg shadow-sm p-6 hover:shadow-md transition-all group"
              >
                <div className="mb-5 inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-chaasms-blue">
                  <span className="font-semibold">{index + 1}</span>
                </div>
                <h4 className="font-medium text-lg text-gray-800 mb-3 group-hover:text-chaasms-blue transition-colors">{benefit.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
              </motion.div>
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
