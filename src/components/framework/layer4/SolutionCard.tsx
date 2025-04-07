
import React from 'react';

interface SolutionCardProps {
  title: string;
  description: string;
  distribution: {
    type: string;
    items: Array<{
      name: string;
      percentage: string;
      color: string;
    }>;
  };
  metrics: Array<{
    label: string;
    value: string;
  }>;
}

const SolutionCard: React.FC<SolutionCardProps> = ({
  title,
  description,
  distribution,
  metrics
}) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="bg-chaasms-blue text-white p-3">
        <h4 className="font-bold text-white">{title}</h4>
        <p className="text-white text-xs">{description}</p>
      </div>
      <div className="p-4">
        <h5 className="font-medium text-chaasms-blue mb-2">Partner Distribution</h5>
        
        {/* Distribution bars with fixed heights to show full text */}
        <div className="mb-4">
          <div className="text-sm mb-1 font-medium">By {distribution.type}</div>
          <div className="flex h-10 rounded-md overflow-hidden">
            {distribution.items.map((item, index) => (
              <div 
                key={index}
                className={`h-full text-xs text-white flex items-center justify-center px-2`}
                style={{width: item.percentage, backgroundColor: item.color}}
              >
                {item.name} {item.percentage}
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-4 pt-3 border-t border-blue-200">
          <h5 className="text-sm font-bold text-chaasms-dark mb-1">Key Metrics</h5>
          <div className="grid grid-cols-2 gap-2">
            {metrics.map((metric, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-xs">{metric.label}</span>
                <span className="text-xs font-bold">{metric.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionCard;
