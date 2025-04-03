
import { ShieldCheck, Zap, BarChart3, Globe } from 'lucide-react';

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string 
}) => (
  <div className="premium-card group">
    <div className="icon-circle bg-chaasms-lightgray group-hover:bg-blue-50 transition-colors">
      <Icon className="text-chaasms-blue" size={24} />
    </div>
    <h3 className="text-xl font-normal text-chaasms-dark mb-4">{title}</h3>
    <p className="text-chaasms-text leading-relaxed">{description}</p>
  </div>
);

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
          <h2 className="section-heading">
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
