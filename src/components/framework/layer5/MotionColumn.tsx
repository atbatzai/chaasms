
import React from 'react';

interface MotionStep {
  title: string;
  isLast?: boolean;
}

interface MotionColumnProps {
  title: string;
  steps: MotionStep[];
}

const MotionColumn: React.FC<MotionColumnProps> = ({ title, steps }) => {
  return (
    <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md overflow-hidden border-2 border-blue-100">
      <div className="bg-chaasms-blue px-4 py-3">
        <h3 className="text-lg font-bold text-white text-center">{title}</h3>
      </div>
      <div className="p-4 flex flex-col gap-3">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-soft-blue rounded-md px-4 py-2 w-full text-center">
              <span className="font-semibold text-chaasms-blue">{step.title}</span>
            </div>
            {!step.isLast && (
              <>
                <div className="h-6 border-l-2 border-chaasms-blue"></div>
                <div className="w-0 h-0 border-l-5 border-r-5 border-t-5 border-l-transparent border-r-transparent border-t-chaasms-blue"></div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MotionColumn;
