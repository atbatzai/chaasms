
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const FrameworkOverview = () => {
  const frameworkLayers = [
    {
      number: "01",
      title: "Foundational Strategy",
      description: "Channel Philosophy & Ecosystem Orientation",
      color: "from-blue-500/10 to-blue-500/20"
    },
    {
      number: "02",
      title: "Program Architecture",
      description: "Partner Types, Tiers & Enablement Blueprint",
      color: "from-blue-600/10 to-blue-600/20"
    },
    {
      number: "03",
      title: "Ecosystem Strategy",
      description: "SaaS & Marketplace Playbook Matrix",
      color: "from-blue-700/10 to-blue-700/20"
    },
    {
      number: "04",
      title: "Touchpoint & Segmentation",
      description: "Partner Journey Mapping & Lifecycle Management",
      color: "from-purple-500/10 to-purple-500/20"
    },
    {
      number: "05",
      title: "GTM Motion",
      description: "Co-Sell, Co-Market & Marketplace Execution",
      color: "from-purple-600/10 to-purple-600/20"
    },
    {
      number: "06",
      title: "Measurement & Scaling",
      description: "Governance, Data & Optimization",
      color: "from-purple-700/10 to-purple-700/20"
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

  return (
    <section id="framework-overview" className="section-padding relative overflow-hidden bg-white">
      {/* Decorative elements */}
      <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 opacity-60 blur-3xl"></div>
      <div className="absolute top-1/2 -right-32 w-80 h-80 rounded-full bg-gradient-to-tr from-purple-100 to-purple-200 opacity-60 blur-3xl"></div>
      
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
        
        {/* Framework layers with updated styling */}
        <div className="mb-24 relative">
          <div className="absolute -left-8 top-1/4 w-20 h-40 bg-soft-gradient opacity-40 rounded-full blur-3xl"></div>
          
          <h3 className="text-2xl font-medium text-chaasms-dark mb-10 text-center font-playfair">
            The Six Layers of CHAASMS
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {frameworkLayers.map((layer, index) => (
              <Card 
                key={index} 
                className={`bg-gradient-to-br ${layer.color} border-0 shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden`}
              >
                <CardContent className="p-8 relative">
                  <div className="absolute -right-6 -bottom-6 text-6xl font-bold text-white/10 group-hover:text-white/15 transition-all">
                    {layer.number}
                  </div>
                  <div className="text-2xl font-light text-chaasms-blue mb-4 font-playfair relative z-10">
                    {layer.number}
                  </div>
                  <div className="relative z-10">
                    <h4 className="font-medium text-chaasms-dark mb-2 group-hover:text-chaasms-blue transition-colors">{layer.title}</h4>
                    <p className="text-sm text-gray-500">{layer.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Benefits section with improved styling */}
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -right-10 -bottom-20 w-40 h-40 bg-soft-peach opacity-30 rounded-full blur-3xl"></div>
          
          <h3 className="text-2xl font-medium text-chaasms-dark mb-10 text-center font-playfair">
            Why You Need a Comprehensive Framework
          </h3>
          
          <div className="space-y-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-6 group hover-card p-6 rounded-lg transition-all">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-purple-50 group-hover:from-blue-100 group-hover:to-purple-100 transition-colors">
                  <CheckCircle className="text-chaasms-blue" size={22} />
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
