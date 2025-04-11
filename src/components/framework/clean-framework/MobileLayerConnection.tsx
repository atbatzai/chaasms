
import React from 'react';

interface MobileLayerConnectionProps {
  text: string;
}

const MobileLayerConnection: React.FC<MobileLayerConnectionProps> = ({ text }) => {
  return (
    <>
      {/* Connector Line */}
      <div className="flex justify-center mb-1">
        <div className="w-0.5 h-6 bg-chaasms-blue"></div>
      </div>
      {/* Connector Text */}
      <div className="flex justify-center mb-3">
        <div className="px-2 py-1 rounded-full bg-blue-100 text-xs text-chaasms-blue">{text}</div>
      </div>
    </>
  );
};

export default MobileLayerConnection;
