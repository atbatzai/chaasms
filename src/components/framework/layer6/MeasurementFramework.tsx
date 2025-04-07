
import React from 'react';

interface FrameworkStepProps {
  number: number;
  text: string;
}

const FrameworkStep: React.FC<FrameworkStepProps> = ({ number, text }) => (
  <div className="bg-soft-blue rounded-lg p-3 shadow-sm">
    <div className="flex items-center">
      <div className="bg-chaasms-blue text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-2">{number}</div>
      <span className="font-medium text-chaasms-dark">{text}</span>
    </div>
  </div>
);

const MeasurementFramework = () => {
  const steps = [
    "Partner Health Score Model",
    "Program Governance Structure",
    "Continuous Improvement Loop"
  ];

  return (
    <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md overflow-hidden border border-slate-200">
      <div className="p-4">
        <h3 className="text-lg font-bold text-chaasms-blue text-center mb-2">Measurement Framework</h3>
        <div className="h-1 w-48 bg-chaasms-blue rounded mx-auto mb-4"></div>
        
        <div className="space-y-3 px-2">
          {steps.map((step, index) => (
            <FrameworkStep key={index} number={index + 1} text={step} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeasurementFramework;
