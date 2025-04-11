
import React from 'react';

interface MobileLayerCardProps {
  layer: number;
  title: string;
  description: string;
  listItems: string[];
  onLayerClick: (layer: number) => void;
}

const MobileLayerCard: React.FC<MobileLayerCardProps> = ({
  layer,
  title,
  description,
  listItems,
  onLayerClick
}) => {
  return (
    <div className="mb-3 border-l-4 border-chaasms-blue bg-blue-50 rounded-r-lg overflow-hidden shadow-sm">
      <div 
        className="flex items-center p-3 bg-chaasms-blue text-white cursor-pointer"
        onClick={() => onLayerClick(layer)}
      >
        <div className="w-8 h-8 rounded-full bg-white text-chaasms-blue flex items-center justify-center font-bold mr-2">{layer}</div>
        <h3 className="font-bold text-white">{title}</h3>
      </div>
      <div 
        className="p-3 cursor-pointer"
        onClick={() => onLayerClick(layer)}
      >
        <p className="text-sm text-gray-600 mb-2">{description}</p>
        <ul className="space-y-1 text-sm">
          {listItems.map((item, index) => (
            <li key={index} className="flex items-start">
              <div className="text-chaasms-blue mr-1 mt-0.5">•</div>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileLayerCard;
