
import { ShieldCheck, Zap, BarChart3, Globe } from 'lucide-react';

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
  const colorClasses = [
    "from-soft-blue to-soft-purple",
    "from-soft-green to-soft-yellow",
    "from-soft-peach to-soft-pink",
    "from-soft-purple to-soft-blue",
  ];
  
  return (
    <div className="premium-card group relative rounded-lg">
      <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[index % 4]} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
      
      <div className="relative">
        <div className="icon-circle bg-gradient-to-br from-white to-gray-100 shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all">
          <Icon className="text-chaasms-blue" size={24} />
        </div>
        <h3 className="text-xl font-normal text-chaasms-dark mb-4 group-hover:text-chaasms-blue transition-colors">{title}</h3>
        <p className="text-chaasms-text leading-relaxed">{description}</p>
      </div>
    </div>
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
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-chaasms-blue text-sm mb-4">Our Expertise</span>
          <h2 className="section-heading font-playfair">
            Our Services
          </h2>
          <p className="text-xl text-chaasms-text leading-relaxed">
            Specialized consulting services to help ISVs build and optimize successful channel programs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
