
import React from 'react';
import Layer1Content from './layers/Layer1Content';
import Layer2Content from './layers/Layer2Content';
import Layer3Content from './layers/Layer3Content';
import Layer4Content from './layers/Layer4Content';
import Layer5Content from './layers/Layer5Content';
import Layer6Content from './layers/Layer6Content';

interface LayerContentProps {
  layerIndex: number;
}

const LayerContent: React.FC<LayerContentProps> = ({ layerIndex }) => {
  switch (layerIndex) {
    case 0:
      return <Layer1Content />;
    case 1:
      return <Layer2Content />;
    case 2:
      return <Layer3Content />;
    case 3:
      return <Layer4Content />;
    case 4:
      return <Layer5Content />;
    case 5:
      return <Layer6Content />;
    default:
      return <Layer1Content />;
  }
};

export default LayerContent;
