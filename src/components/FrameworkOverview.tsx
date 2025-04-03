
import { CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

const FrameworkOverview = () => {
  const frameworkLayers = [
    {
      number: "01",
      title: "Foundational Strategy",
      description: "Channel Philosophy & Ecosystem Orientation"
    },
    {
      number: "02",
      title: "Program Architecture",
      description: "Partner Types, Tiers & Enablement Blueprint"
    },
    {
      number: "03",
      title: "Ecosystem Strategy",
      description: "SaaS & Marketplace Playbook Matrix"
    },
    {
      number: "04",
      title: "Touchpoint & Segmentation",
      description: "Partner Journey Mapping & Lifecycle Management"
    },
    {
      number: "05",
      title: "GTM Motion",
      description: "Co-Sell, Co-Market & Marketplace Execution"
    },
    {
      number: "06",
      title: "Measurement & Scaling",
      description: "Governance, Data & Optimization"
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
    <section id="framework-overview" className="section-padding bg-white">
      <div className="chaasms-container">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-medium text-chaasms-dark mb-6">
            The CHAASMS Framework
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A structured, six-layer methodology for building successful channel programs in today's complex ecosystem landscape.
          </p>
        </div>
        
        {/* Full-width framework layers display */}
        <div className="mb-24">
          <h3 className="text-2xl font-medium text-chaasms-dark mb-10 text-center">
            The Six Layers of CHAASMS
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {frameworkLayers.map((layer, index) => (
              <div 
                key={index} 
                className="bg-white p-8 border border-chaasms-midgray/20 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="text-2xl font-light text-chaasms-blue/70 mb-4">
                  {layer.number}
                </div>
                <div>
                  <h4 className="font-medium text-chaasms-dark mb-2">{layer.title}</h4>
                  <p className="text-sm text-gray-500">{layer.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Benefits section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-medium text-chaasms-dark mb-10 text-center">
            Why You Need a Comprehensive Framework
          </h3>
          
          <div className="space-y-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-blue-50">
                  <CheckCircle className="text-chaasms-blue" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-chaasms-dark mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
            
            <div className="pt-8 flex justify-center">
              <Button className="bg-chaasms-blue hover:bg-blue-700 rounded-md px-6 py-6 h-auto text-sm">
                Explore the Framework
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameworkOverview;
