
import React from 'react';

interface RoadmapPhaseProps {
  phase: string;
  description: string;
}

const RoadmapPhase: React.FC<RoadmapPhaseProps> = ({ phase, description }) => (
  <div className="flex flex-col sm:flex-row sm:items-center">
    <div className="bg-soft-blue text-chaasms-blue font-bold rounded-lg w-full sm:w-20 text-center p-1 mb-1 sm:mb-0 sm:mr-3">{phase}</div>
    <span className="font-medium text-chaasms-dark">{description}</span>
  </div>
);

const ImplementationRoadmap = () => {
  const phases = [
    { phase: "Phase 1", description: "Foundation & Architecture (Months 1-3)" },
    { phase: "Phase 2", description: "Partner Activation (Months 4-6)" },
    { phase: "Phase 3", description: "GTM Acceleration (Months 7-9)" },
    { phase: "Phase 4", description: "Optimization & Scale (Months 10-12)" }
  ];
  
  return (
    <div className="w-full md:w-2/3 bg-white rounded-lg shadow-md overflow-hidden border border-slate-200">
      <div className="p-4">
        <h3 className="text-lg font-bold text-chaasms-blue text-center mb-2">Implementation Roadmap</h3>
        <div className="h-1 w-48 bg-chaasms-blue rounded mx-auto mb-4"></div>
        
        <div className="bg-chaasms-blue text-white font-semibold text-center py-2 rounded mb-3">
          Phased Channel Program Development
        </div>
        
        <div className="space-y-3 px-4">
          {phases.map((phase, index) => (
            <RoadmapPhase key={index} phase={phase.phase} description={phase.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImplementationRoadmap;
