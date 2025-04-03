
import { AlertTriangle } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ChallengePoint = ({ 
  title, 
  description 
}: { 
  title: string; 
  description: string 
}) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mb-4">
      <AlertTriangle className="text-amber-600" size={20} />
    </div>
    <h3 className="text-lg font-semibold text-chaasms-dark mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
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
    <section id="challenges" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="chaasms-container">
        <div className="text-center mb-12">
          <h2 className="section-heading">The Channel Challenge</h2>
          <p className="section-subheading">
            Today's ISVs face unprecedented complexity in building effective channel programs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {challenges.map((challenge, index) => (
            <ChallengePoint
              key={index}
              title={challenge.title}
              description={challenge.description}
            />
          ))}
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-chaasms-dark mb-2">The Cost of Inaction</h3>
            <p className="text-gray-600">
              Without a structured channel framework, ISVs risk:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-red-50 p-4 rounded">
              <h4 className="font-semibold text-chaasms-dark mb-2">Lost Revenue Opportunities</h4>
              <p className="text-sm text-gray-600">Missing out on partner-influenced and partner-led revenue streams.</p>
            </div>
            
            <div className="bg-red-50 p-4 rounded">
              <h4 className="font-semibold text-chaasms-dark mb-2">Competitive Disadvantage</h4>
              <p className="text-sm text-gray-600">Falling behind competitors with more mature partner ecosystems.</p>
            </div>
            
            <div className="bg-red-50 p-4 rounded">
              <h4 className="font-semibold text-chaasms-dark mb-2">Wasted Investment</h4>
              <p className="text-sm text-gray-600">Resources allocated to channel activities without strategic returns.</p>
            </div>
          </div>
          
          <div className="text-center">
            <Button className="bg-chaasms-blue hover:bg-blue-700">Solve These Challenges</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;
