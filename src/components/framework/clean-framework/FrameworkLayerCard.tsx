
import React from 'react';

interface FrameworkLayerCardProps {
  layer: number;
  title: string;
  description: string;
  listItems: string[];
  onLayerClick: (layer: number) => void;
  connectionText?: string;
}

const FrameworkLayerCard: React.FC<FrameworkLayerCardProps> = ({
  layer,
  title,
  description,
  listItems,
  onLayerClick,
  connectionText
}) => {
  return (
    <div className="flex items-center mb-24 relative">
      <div className="w-5/12 pr-10 text-right">
        <h3 
          onClick={() => onLayerClick(layer)}
          className="text-2xl font-bold text-chaasms-blue mb-3 cursor-pointer hover:underline transition-colors"
        >
          {title}
        </h3>
        <p className="text-chaasms-text text-lg">{description}</p>
      </div>
      
      <div className="w-2/12 flex justify-center">
        <div 
          onClick={() => onLayerClick(layer)}
          className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center border-4 border-chaasms-blue z-10 shadow-md cursor-pointer hover:bg-blue-100 transition-colors"
        >
          <span className="text-3xl font-bold text-chaasms-blue">{layer}</span>
        </div>
      </div>
      
      <div className="w-5/12 pl-10">
        <div 
          onClick={() => onLayerClick(layer)}
          className="bg-blue-50 p-5 rounded-lg border-t-4 border-chaasms-blue shadow-sm cursor-pointer hover:bg-blue-100 transition-colors"
        >
          <ul className="space-y-2 text-chaasms-text text-lg">
            {listItems.map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="text-chaasms-blue mr-2 mt-1.5 text-lg">•</div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Connection arrow */}
        {connectionText && layer > 1 && (
          <div className="absolute left-1/2 -top-12 -ml-1">
            <div className="h-12 flex flex-col items-center justify-center">
              <div className="bg-blue-50 text-chaasms-blue font-semibold px-3 py-1 rounded-full shadow-sm text-sm mb-1">
                {connectionText}
              </div>
              <svg width="40" height="10">
                <polygon points="20,10 10,0 30,0" fill="#0066B3" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FrameworkLayerCard;
