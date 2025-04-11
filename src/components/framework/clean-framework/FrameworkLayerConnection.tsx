
import React from 'react';

interface FrameworkLayerConnectionProps {
  text: string;
}

const FrameworkLayerConnection: React.FC<FrameworkLayerConnectionProps> = ({ text }) => {
  return (
    <div className="absolute left-1/2 -top-12 -ml-1">
      <div className="h-12 flex flex-col items-center justify-center">
        <div className="bg-blue-50 text-chaasms-blue font-semibold px-3 py-1 rounded-full shadow-sm text-sm mb-1">
          {text}
        </div>
        <svg width="40" height="10">
          <polygon points="20,10 10,0 30,0" fill="#0066B3" />
        </svg>
      </div>
    </div>
  );
};

export default FrameworkLayerConnection;
