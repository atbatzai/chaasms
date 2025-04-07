
import React from 'react';

interface EcosystemCardProps {
  title: string;
  strategic: {
    percentage: string;
    revenue: string;
  };
  growth: {
    percentage: string;
    revenue: string;
  };
  emerging: {
    percentage: string;
    revenue: string;
  };
  focusAreas: string[];
}

const EcosystemCard: React.FC<EcosystemCardProps> = ({
  title,
  strategic,
  growth,
  emerging,
  focusAreas
}) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="bg-chaasms-blue text-white p-3">
        <h4 className="font-bold text-white">{title}</h4>
      </div>
      <div className="p-4">
        {/* Strategic */}
        <div className="mb-3">
          <div className="flex justify-between text-sm mb-1">
            <span>Strategic ({strategic.percentage})</span>
            <span>{strategic.revenue} of ecosystem revenue</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-chaasms-blue h-2 rounded-full" 
              style={{width: strategic.revenue}}
            ></div>
          </div>
        </div>
        
        {/* Growth */}
        <div className="mb-3">
          <div className="flex justify-between text-sm mb-1">
            <span>Growth ({growth.percentage})</span>
            <span>{growth.revenue} of ecosystem revenue</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full" 
              style={{width: growth.revenue}}
            ></div>
          </div>
        </div>
        
        {/* Emerging */}
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span>Emerging ({emerging.percentage})</span>
            <span>{emerging.revenue} of ecosystem revenue</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-300 h-2 rounded-full" 
              style={{width: emerging.revenue}}
            ></div>
          </div>
        </div>
        
        <div className="mt-4 pt-3 border-t border-blue-200">
          <h5 className="text-sm font-bold text-chaasms-dark mb-1">Focus Areas</h5>
          <ul className="text-xs space-y-1">
            {focusAreas.map((area, index) => (
              <li key={index}>• {area}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EcosystemCard;
