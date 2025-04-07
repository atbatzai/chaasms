
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
  <div className="premium-card relative">
    <div className="absolute -top-5 -left-5 w-14 h-14 flex items-center justify-center bg-chaasms-blue text-white text-xl font-light">
      {number}
    </div>
    <div className="mt-6 ml-4">
      <h3 className="text-2xl font-normal text-chaasms-dark mb-3">{title}</h3>
      <p className="text-chaasms-text mb-6">{description}</p>
      <div className="space-y-3">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start gap-3">
            <CheckCircle className="text-chaasms-blue mt-1 flex-shrink-0" size={18} />
            <p className="text-chaasms-text">{activity}</p>
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
    <section id="implementation" className="section-padding bg-chaasms-lightgray pb-8">
      <div className="chaasms-container">
        <div className="text-center mb-20">
          <h2 className="section-heading">Implementation Approach</h2>
          <p className="text-xl text-chaasms-text max-w-3xl mx-auto">
            Our proven four-phase methodology for successful channel program implementation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
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
        
        <div className="premium-card bg-gradient-to-r from-chaasms-blue/5 to-chaasms-blue/10 mb-0">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-normal text-chaasms-dark mb-4">Customized to Your Business</h3>
            <p className="text-chaasms-text max-w-2xl mx-auto">
              Each implementation is tailored to your specific business needs, industry context, and growth objectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white border-t-2 border-chaasms-blue">
              <h4 className="text-lg font-medium text-chaasms-dark mb-3">Scalable Approach</h4>
              <p className="text-chaasms-text">Flexible implementation that grows with your business needs.</p>
            </div>
            
            <div className="p-6 bg-white border-t-2 border-chaasms-blue">
              <h4 className="text-lg font-medium text-chaasms-dark mb-3">Industry-Specific Insights</h4>
              <p className="text-chaasms-text">Tailored strategies based on your vertical market and ICP.</p>
            </div>
            
            <div className="p-6 bg-white border-t-2 border-chaasms-blue">
              <h4 className="text-lg font-medium text-chaasms-dark mb-3">Technology Integration</h4>
              <p className="text-chaasms-text">Seamless connection with your existing tech stack and PRM systems.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Implementation;
