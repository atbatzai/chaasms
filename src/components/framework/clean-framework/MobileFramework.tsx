
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MobileLayerCard from './MobileLayerCard';
import MobileLayerConnection from './MobileLayerConnection';
import MobileFrameworkLegend from './MobileFrameworkLegend';

const MobileFramework = () => {
  const navigate = useNavigate();
  
  const handleLayerClick = (layerNumber: number) => {
    navigate(`/frameworks?layer=${layerNumber}`);
    window.scrollTo(0, 0);
  };
  
  return (
    <div className="w-full bg-white px-2 py-6 font-sans">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-chaasms-blue mb-2">CHAASMS FRAMEWORK</h1>
        <p className="text-gray-600 text-sm">Six Layers Working Together</p>
      </div>
      
      {/* Mobile-optimized framework visualization */}
      <div className="w-full mb-6">
        {/* Layer 1 */}
        <MobileLayerCard
          layer={1}
          title="Foundational Strategy"
          description="Sets the overall channel vision"
          listItems={[
            "Channel vision & priorities",
            "Resource allocation model",
            "Partner economic model"
          ]}
          onLayerClick={handleLayerClick}
        />
        
        {/* Connection between Layer 1 and 2 */}
        <MobileLayerConnection text="Drives" />
        
        {/* Layer 2 */}
        <MobileLayerCard
          layer={2}
          title="Program Architecture"
          description="Establishes structural elements"
          listItems={[
            "Partner tiers & requirements",
            "Benefits structure",
            "Channel coverage model"
          ]}
          onLayerClick={handleLayerClick}
        />
        
        {/* Connection between Layer 2 and 3 */}
        <MobileLayerConnection text="Establishes" />
        
        {/* Layer 3 */}
        <MobileLayerCard
          layer={3}
          title="Ecosystem Strategy"
          description="Identifies key ecosystems"
          listItems={[
            "Priority ecosystem mapping",
            "Strategic alliances",
            "Ecosystem-specific value props"
          ]}
          onLayerClick={handleLayerClick}
        />
        
        {/* Connection between Layer 3 and 4 */}
        <MobileLayerConnection text="Informs" />
        
        {/* Layer 4 */}
        <MobileLayerCard
          layer={4}
          title="Touchpoint & Segmentation"
          description="Defines partner experience"
          listItems={[
            "Partner journey mapping",
            "Segmentation strategy",
            "Partner enablement model"
          ]}
          onLayerClick={handleLayerClick}
        />
        
        {/* Connection between Layer 4 and 5 */}
        <MobileLayerConnection text="Drives" />
        
        {/* Layer 5 */}
        <MobileLayerCard
          layer={5}
          title="GTM Motion"
          description="Builds go-to-market framework"
          listItems={[
            "Co-selling motion",
            "Co-marketing programs",
            "Marketplace strategy"
          ]}
          onLayerClick={handleLayerClick}
        />
        
        {/* Connection between Layer 5 and 6 */}
        <MobileLayerConnection text="Feeds" />
        
        {/* Layer 6 */}
        <MobileLayerCard
          layer={6}
          title="Measurement & Scaling"
          description="Creates metrics framework"
          listItems={[
            "Channel program metrics",
            "Partner health indicators",
            "Continuous improvement loop"
          ]}
          onLayerClick={handleLayerClick}
        />
      </div>
      
      {/* Footer */}
      <MobileFrameworkLegend />
    </div>
  );
};

export default MobileFramework;
