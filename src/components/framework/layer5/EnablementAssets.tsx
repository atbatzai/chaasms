
import React from 'react';

const EnablementAssets = () => {
  const assets = [
    "Battlecards", 
    "ROI Calculator", 
    "Demo Environment", 
    "Solution Slides", 
    "Campaign Templates"
  ];
  
  return (
    <div className="w-full mb-6">
      <h3 className="text-lg font-bold text-chaasms-blue text-center mb-2">GTM Enablement Assets</h3>
      <div className="h-1 w-48 bg-chaasms-blue rounded mx-auto mb-4"></div>
      
      <div className="flex flex-wrap justify-between gap-4">
        {assets.map((asset, index) => (
          <div key={index} className="bg-soft-blue rounded-md p-3 text-center flex-1 min-w-[150px]">
            <span className="font-semibold text-chaasms-blue">{asset}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnablementAssets;
