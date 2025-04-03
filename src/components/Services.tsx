
import { ShieldCheck, Zap, BarChart3, Globe } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description,
  index
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
  index: number;
}) => {
  return (
    <Card className="shadow-sm border border-gray-200 bg-white h-full hover:shadow-md transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex flex-col h-full">
          <div className="p-3 rounded-full bg-gray-100 w-12 h-12 flex items-center justify-center mb-4">
            <Icon className="text-chaasms-blue" size={22} />
          </div>
          
          <h3 className="text-xl font-medium text-chaasms-dark mb-3">{title}</h3>
          <p className="text-chaasms-text text-sm">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Framework Implementation",
      description: "End-to-end consulting to implement the CHAASMS framework for your specific business needs."
    },
    {
      icon: ShieldCheck,
      title: "Channel Strategy Assessment",
      description: "Evaluate your current program against industry benchmarks and identify improvement opportunities."
    },
    {
      icon: Zap,
      title: "Partner Program Design",
      description: "Develop comprehensive partner programs with tiers, benefits, enablement, and GTM strategies."
    },
    {
      icon: BarChart3,
      title: "Marketplace Strategy",
      description: "Navigate cloud marketplace complexities and create effective marketplace GTM plans."
    }
  ];

  return (
    <section id="services" className="section-padding bg-chaasms-lightgray">
      <div className="chaasms-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-chaasms-blue text-sm mb-4">Our Expertise</span>
          <h2 className="section-heading font-playfair">
            Our Services
          </h2>
          <p className="text-xl text-chaasms-text leading-relaxed">
            Specialized consulting services to help ISVs build and optimize successful channel programs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
