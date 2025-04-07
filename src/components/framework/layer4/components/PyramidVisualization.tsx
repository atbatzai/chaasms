
import React from 'react';

interface PyramidLayerProps {
  name: string;
  percentage: string;
  revenue: string;
  width: string;
  bgColor: string;
  textColor?: string;
}

const PyramidLayer: React.FC<PyramidLayerProps> = ({
  name,
  percentage,
  revenue,
  width,
  bgColor,
  textColor = 'text-white'
}) => {
  return (
    <div className="flex items-center mb-4">
      <div className={width}>
        <div className={`h-16 ${bgColor} flex items-center justify-center`}>
          <span className={`font-medium ${textColor}`}>{name}</span>
        </div>
      </div>
      <div className={`${width === 'w-4/5' ? 'w-1/5' : width === 'w-3/5' ? 'w-2/5' : 'w-1/2'} pl-6`}>
        <h4 className="font-bold text-chaasms-dark">{name} ({percentage})</h4>
        <p className="text-sm text-chaasms-text">{revenue} of revenue</p>
      </div>
    </div>
  );
};

const PyramidVisualization: React.FC = () => {
  return (
    <div className="mb-10">
      <PyramidLayer 
        name="Strategic" 
        percentage="5%" 
        revenue="25%" 
        width="w-1/2" 
        bgColor="bg-chaasms-blue" 
      />
      
      <PyramidLayer 
        name="Growth" 
        percentage="15%" 
        revenue="65%" 
        width="w-3/5" 
        bgColor="bg-blue-600" 
      />
      
      <PyramidLayer 
        name="Emerging" 
        percentage="80%" 
        revenue="20%" 
        width="w-4/5" 
        bgColor="bg-blue-300" 
        textColor="text-blue-900" 
      />
    </div>
  );
};

export default PyramidVisualization;
