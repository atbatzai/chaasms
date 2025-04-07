
import React from 'react';

interface ProgramComponentProps {
  title: string;
  description: string;
}

const ProgramComponent: React.FC<ProgramComponentProps> = ({ title, description }) => (
  <div className="bg-soft-blue rounded-md p-3 flex flex-col md:flex-row justify-between items-center">
    <span className="font-semibold text-chaasms-blue">{title}</span>
    <span className="text-chaasms-dark text-sm">{description}</span>
  </div>
);

const ProgramComponents = () => {
  return (
    <div className="w-full md:w-1/2 bg-white rounded-lg shadow-md overflow-hidden border-2 border-blue-100">
      <div className="p-4">
        <h3 className="text-lg font-bold text-chaasms-blue text-center mb-2">GTM Program Components</h3>
        <div className="h-1 w-40 bg-chaasms-blue rounded mx-auto mb-4"></div>
        
        <div className="space-y-2">
          <ProgramComponent 
            title="Deal Registration Program" 
            description="90-180 days protection" 
          />
          <ProgramComponent 
            title="Marketing Development Funds" 
            description="3-5x pipeline ROI" 
          />
          <ProgramComponent 
            title="Solution Marketplace" 
            description="Partner offerings showcase" 
          />
        </div>
      </div>
    </div>
  );
};

export default ProgramComponents;
