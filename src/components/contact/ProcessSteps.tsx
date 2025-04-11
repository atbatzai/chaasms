
import React from "react";

const ProcessSteps = () => {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-chaasms-blue rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">1</span>
        </div>
        <p className="text-chaasms-dark text-sm">Discovery Call</p>
      </div>
      
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-chaasms-blue rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">2</span>
        </div>
        <p className="text-chaasms-dark text-sm">Needs Assessment</p>
      </div>
      
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-chaasms-blue rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">3</span>
        </div>
        <p className="text-chaasms-dark text-sm">Proposal & Engagement</p>
      </div>
    </div>
  );
};

export default ProcessSteps;
