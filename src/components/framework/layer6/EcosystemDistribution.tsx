
import React from 'react';

interface EcosystemItemProps {
  name: string;
  percentage: string;
}

const EcosystemItem: React.FC<EcosystemItemProps> = ({ name, percentage }) => (
  <div className="bg-soft-blue rounded-lg p-3 border border-blue-100 shadow-sm">
    <div className="flex justify-between">
      <span className="font-medium text-chaasms-blue">{name}</span>
      <span className="font-bold text-chaasms-blue">{percentage}</span>
    </div>
  </div>
);

const EcosystemDistribution = () => {
  const ecosystems = [
    { name: "ERP Ecosystem", percentage: "32%" },
    { name: "CRM Ecosystem", percentage: "28%" },
    { name: "Cloud Platforms", percentage: "24%" },
    { name: "E-commerce", percentage: "16%" }
  ];
  
  return (
    <div className="w-full md:w-1/2 bg-white rounded-lg shadow-md overflow-hidden border border-slate-200">
      <div className="p-4">
        <h3 className="text-lg font-bold text-chaasms-blue text-center mb-2">Ecosystem Distribution</h3>
        <div className="h-1 w-48 bg-chaasms-blue rounded mx-auto mb-4"></div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 px-2">
          {ecosystems.map((eco, index) => (
            <EcosystemItem key={index} name={eco.name} percentage={eco.percentage} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EcosystemDistribution;
