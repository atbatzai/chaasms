
import React from 'react';
import { useNavigate } from 'react-router-dom';
import FrameworkLayerCard from './FrameworkLayerCard';
import FrameworkLayerConnection from './FrameworkLayerConnection';
import FrameworkLegend from './FrameworkLegend';

const DesktopFramework = () => {
  const navigate = useNavigate();
  
  const handleLayerClick = (layerNumber: number) => {
    navigate(`/frameworks?layer=${layerNumber}`);
    window.scrollTo(0, 0);
  };
  
  return (
    <div className="flex flex-col items-center w-full bg-white p-6 font-sans">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-chaasms-blue mb-2">CHAASMS INTERLOCKING SYSTEM</h1>
        <p className="text-gray-600 text-lg">How the Six Layers Build Upon Each Other to Create a Cohesive Framework</p>
      </div>
      
      {/* Main Framework Visualization */}
      <div className="w-full max-w-5xl relative mb-10">
        {/* Central Flow Line with blue gradient */}
        <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-blue-200 via-blue-400 to-chaasms-blue rounded-full -ml-1 z-0"></div>
        
        {/* Layer 1: Foundational Strategy */}
        <FrameworkLayerCard
          layer={1}
          title="Layer 1: Foundational Strategy"
          description="Sets the overall channel vision, objectives, and resource allocation approach"
          listItems={[
            "Channel vision & priorities",
            "Resource allocation model",
            "Partner economic model"
          ]}
          onLayerClick={handleLayerClick}
        />
        
        {/* Layer 2: Program Architecture */}
        <FrameworkLayerCard
          layer={2}
          title="Layer 2: Program Architecture"
          description="Establishes the structural elements and frameworks for the channel program"
          listItems={[
            "Partner tiers & requirements",
            "Benefits structure",
            "Channel coverage model"
          ]}
          onLayerClick={handleLayerClick}
          connectionText="Drives"
        />
        
        {/* Layer 3: Ecosystem Strategy */}
        <FrameworkLayerCard
          layer={3}
          title="Layer 3: Ecosystem Strategy"
          description="Identifies key ecosystems and platforms to prioritize for maximum impact"
          listItems={[
            "Priority ecosystem mapping",
            "Strategic alliances",
            "Ecosystem-specific value props"
          ]}
          onLayerClick={handleLayerClick}
          connectionText="Establishes"
        />
        
        {/* Layer 4: Touchpoint & Segmentation */}
        <FrameworkLayerCard
          layer={4}
          title="Layer 4: Touchpoint & Segmentation"
          description="Defines partner experience journey and engagement approach by segment"
          listItems={[
            "Partner journey mapping",
            "Segmentation strategy",
            "Partner enablement model"
          ]}
          onLayerClick={handleLayerClick}
          connectionText="Informs"
        />
        
        {/* Layer 5: GTM Motion */}
        <FrameworkLayerCard
          layer={5}
          title="Layer 5: GTM Motion"
          description="Builds go-to-market execution framework for partners across ecosystems"
          listItems={[
            "Co-selling motion",
            "Co-marketing programs",
            "Marketplace strategy"
          ]}
          onLayerClick={handleLayerClick}
          connectionText="Drives"
        />
        
        {/* Layer 6: Measurement & Scaling */}
        <FrameworkLayerCard
          layer={6}
          title="Layer 6: Measurement & Scaling"
          description="Creates metrics framework and governance model for optimization"
          listItems={[
            "Channel program metrics",
            "Partner health indicators",
            "Continuous improvement loop"
          ]}
          onLayerClick={handleLayerClick}
          connectionText="Feeds"
        />
      </div>
      
      {/* Legend/Description */}
      <FrameworkLegend />
    </div>
  );
};

export default DesktopFramework;
