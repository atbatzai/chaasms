
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const FrameworkPreview = () => {
  // Configuration for the framework layers
  const layers = [
    { number: "01", title: "Foundational Strategy", color: "#3A5CD0" },
    { number: "02", title: "Program Architecture", color: "#2C4CAD" },
    { number: "03", title: "Ecosystem Strategy", color: "#4077D9" },
    { number: "04", title: "Touchpoint & Segmentation", color: "#5395E4" },
    { number: "05", title: "GTM Motion", color: "#3953A4" },
    { number: "06", title: "Measurement & Scaling", color: "#2B418A" }
  ];

  // Function to scroll to the framework section
  const scrollToFramework = () => {
    const frameworkSection = document.getElementById("framework-overview");
    if (frameworkSection) {
      frameworkSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="chaasms-container">
        <div className="text-center mb-6">
          <h2 className="text-xl md:text-2xl font-medium text-chaasms-dark mb-3">
            The CHAASMS Framework: Six Layers for ISV Channel Success
          </h2>
          <p className="text-chaasms-text max-w-3xl mx-auto">
            A strategy system built for modern ecosystems — marketplaces, partners, platforms, and beyond.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-6">
          {layers.map((layer, index) => (
            <motion.div
              key={layer.number}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className="flex flex-col items-center bg-white p-3 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={scrollToFramework}
            >
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center text-white mb-2"
                style={{ backgroundColor: layer.color }}
              >
                <span className="text-sm font-bold">{layer.number}</span>
              </div>
              <h3 className="text-center text-xs md:text-sm font-medium">
                {layer.title}
              </h3>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <Button 
            variant="outline" 
            size="sm"
            onClick={scrollToFramework}
            className="group"
          >
            Explore Each Layer
            <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FrameworkPreview;
