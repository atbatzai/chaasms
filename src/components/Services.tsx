
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
  <div className="bg-white p-8 rounded-xl border border-gray-100 transition-all duration-300 hover:shadow-sm hover:border-gray-200 h-full group">
    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-blue-50 group-hover:bg-blue-100 transition-colors">
      <Icon className="text-chaasms-blue" size={22} />
    </div>
    <h3 className="text-xl font-medium text-chaasms-dark mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
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
    <section id="services" className="section-padding bg-gray-50">
      <div className="chaasms-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-chaasms-dark mb-6">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
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
