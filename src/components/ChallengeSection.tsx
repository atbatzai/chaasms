
import { AlertTriangle } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ChallengePoint = ({ 
  title, 
  description 
}: { 
  title: string; 
  description: string 
}) => (
  <div className="premium-card">
    <div className="icon-circle bg-amber-50">
      <AlertTriangle className="text-amber-600" size={22} />
    </div>
    <h3 className="text-xl font-normal text-chaasms-dark mb-3">{title}</h3>
    <p className="text-chaasms-text">{description}</p>
  </div>
);

const ChallengeSection = () => {
  const challenges = [
    {
      title: "Ecosystem Complexity",
      description: "Navigating multiple marketplaces, platform partners, and traditional channel models simultaneously."
    },
    {
      title: "Inconsistent Results",
      description: "Partner programs that generate unpredictable or underwhelming revenue contribution."
    },
    {
      title: "Resource Constraints",
      description: "Limited teams trying to manage growing partner ecosystems with inadequate tools."
    },
    {
      title: "Partner Enablement Gaps",
      description: "Difficulty creating effective training and resources that partners actually use."
    },
    {
      title: "GTM Execution",
      description: "Challenges in implementing co-selling and co-marketing motions that deliver results."
    },
    {
      title: "Measuring ROI",
      description: "Inability to properly track and measure channel program performance and contribution."
    }
  ];

  return (
    <section id="challenges" className="section-padding bg-white">
      <div className="chaasms-container">
        <div className="text-center mb-20">
          <h2 className="section-heading">The Channel Challenge</h2>
          <p className="text-xl text-chaasms-text max-w-3xl mx-auto">
            Today's ISVs face unprecedented complexity in building effective channel programs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {challenges.map((challenge, index) => (
            <ChallengePoint
              key={index}
              title={challenge.title}
              description={challenge.description}
            />
          ))}
        </div>
        
        <div className="premium-card">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-normal text-chaasms-dark mb-4">The Cost of Inaction</h3>
            <p className="text-chaasms-text max-w-2xl mx-auto">
              Without a structured channel framework, ISVs risk:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            <div className="p-8 bg-red-50 border-l-2 border-red-400">
              <h4 className="text-lg font-medium text-chaasms-dark mb-3">Lost Revenue Opportunities</h4>
              <p className="text-chaasms-text">Missing out on partner-influenced and partner-led revenue streams.</p>
            </div>
            
            <div className="p-8 bg-red-50 border-l-2 border-red-400">
              <h4 className="text-lg font-medium text-chaasms-dark mb-3">Competitive Disadvantage</h4>
              <p className="text-chaasms-text">Falling behind competitors with more mature partner ecosystems.</p>
            </div>
            
            <div className="p-8 bg-red-50 border-l-2 border-red-400">
              <h4 className="text-lg font-medium text-chaasms-dark mb-3">Wasted Investment</h4>
              <p className="text-chaasms-text">Resources allocated to channel activities without strategic returns.</p>
            </div>
          </div>
          
          <div className="text-center">
            <Button className="btn-primary">Solve These Challenges</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;
