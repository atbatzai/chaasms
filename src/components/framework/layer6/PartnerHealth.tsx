
import React from 'react';

interface HealthIndicatorProps {
  type: string;
  percentage: string;
  color: string;
}

const HealthIndicator: React.FC<HealthIndicatorProps> = ({ type, percentage, color }) => (
  <div>
    <div className="flex justify-between items-center mb-1">
      <span className="text-chaasms-dark">{type}</span>
      <span className="font-bold text-chaasms-blue">{percentage}</span>
    </div>
    <div className="w-full bg-slate-200 rounded-full h-2.5">
      <div className={`${color} h-2.5 rounded-full ${percentage === "92%" ? "w-11/12" : percentage === "78%" ? "w-4/5" : "w-2/3"}`}></div>
    </div>
  </div>
);

const PartnerHealth = () => {
  return (
    <div className="w-full md:w-1/2 bg-white rounded-lg shadow-md overflow-hidden border border-slate-200">
      <div className="p-4">
        <h3 className="text-lg font-bold text-chaasms-blue text-center mb-2">Partner Health Indicators</h3>
        <div className="h-1 w-48 bg-chaasms-blue rounded mx-auto mb-4"></div>
        
        <div className="space-y-5 px-4">
          <HealthIndicator type="Strategic Partners" percentage="92%" color="bg-green-500" />
          <HealthIndicator type="Growth Partners" percentage="78%" color="bg-chaasms-blue" />
          <HealthIndicator type="Emerging Partners" percentage="65%" color="bg-yellow-500" />
        </div>
      </div>
    </div>
  );
};

export default PartnerHealth;
