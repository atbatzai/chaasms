
import { CheckCircle } from 'lucide-react';

const ImplementationPhase = ({ 
  number, 
  title, 
  description, 
  activities 
}: { 
  number: string;
  title: string; 
  description: string;
  activities: string[];
}) => (
  <div className="relative bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <div className="absolute -top-4 -left-4 w-12 h-12 bg-chaasms-blue rounded-full flex items-center justify-center text-white font-bold">
      {number}
    </div>
    <div className="mt-2 ml-2">
      <h3 className="text-xl font-semibold text-chaasms-dark mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="space-y-2">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start gap-2">
            <CheckCircle className="text-chaasms-blue mt-1 flex-shrink-0" size={16} />
            <p className="text-gray-600 text-sm">{activity}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Implementation = () => {
  const phases = [
    {
      number: "1",
      title: "Foundation & Architecture",
      description: "Establish the strategic foundation and program structure.",
      activities: [
        "Channel philosophy definition",
        "Partner type identification",
        "Program tiering structure",
        "Enablement blueprint creation"
      ]
    },
    {
      number: "2",
      title: "Partner Recruitment & Enablement",
      description: "Build the partner ecosystem and enablement infrastructure.",
      activities: [
        "Partner profile development",
        "Recruitment strategy execution",
        "Training & certification rollout",
        "Partner portal implementation"
      ]
    },
    {
      number: "3",
      title: "GTM Activation & Refinement",
      description: "Launch and optimize go-to-market motions with partners.",
      activities: [
        "Co-marketing strategy development",
        "Co-selling motion implementation",
        "Marketplace listing optimization",
        "Partner campaign execution"
      ]
    },
    {
      number: "4",
      title: "Measurement & Optimization",
      description: "Measure results and continuously refine the program.",
      activities: [
        "KPI dashboard implementation",
        "Partner performance tracking",
        "Incentive structure refinement",
        "Program governance establishment"
      ]
    }
  ];

  return (
    <section id="implementation" className="py-16 md:py-24 bg-white">
      <div className="chaasms-container">
        <div className="text-center mb-12">
          <h2 className="section-heading">Implementation Approach</h2>
          <p className="section-subheading">
            Our proven four-phase methodology for successful channel program implementation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {phases.map((phase, index) => (
            <ImplementationPhase
              key={index}
              number={phase.number}
              title={phase.title}
              description={phase.description}
              activities={phase.activities}
            />
          ))}
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-chaasms-dark mb-2">Customized to Your Business</h3>
            <p className="text-gray-600">
              Each implementation is tailored to your specific business needs, industry context, and growth objectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded shadow-sm">
              <h4 className="font-semibold text-chaasms-dark mb-2">Scalable Approach</h4>
              <p className="text-sm text-gray-600">Flexible implementation that grows with your business needs.</p>
            </div>
            
            <div className="bg-white p-4 rounded shadow-sm">
              <h4 className="font-semibold text-chaasms-dark mb-2">Industry-Specific Insights</h4>
              <p className="text-sm text-gray-600">Tailored strategies based on your vertical market and ICP.</p>
            </div>
            
            <div className="bg-white p-4 rounded shadow-sm">
              <h4 className="font-semibold text-chaasms-dark mb-2">Technology Integration</h4>
              <p className="text-sm text-gray-600">Seamless connection with your existing tech stack and PRM systems.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Implementation;
