
import React from 'react';
import HeaderSection from './layer6/HeaderSection';
import MetricsGrid from './layer6/MetricsGrid';
import PartnerHealth from './layer6/PartnerHealth';
import EcosystemDistribution from './layer6/EcosystemDistribution';
import MeasurementFramework from './layer6/MeasurementFramework';
import ImplementationRoadmap from './layer6/ImplementationRoadmap';
import FooterNote from './layer6/FooterNote';

const Layer6Svg = () => {
  return (
    <div className="flex flex-col items-center w-full h-full bg-slate-50 p-6 font-sans">
      <HeaderSection />
      
      {/* Metrics Grid - 3 columns */}
      <MetricsGrid />
      
      {/* Middle Section - Two Column Layout */}
      <div className="flex flex-col md:flex-row w-full gap-6 mb-6">
        {/* Partner Health Indicators */}
        <PartnerHealth />
        
        {/* Ecosystem Distribution */}
        <EcosystemDistribution />
      </div>
      
      {/* Bottom Section - Two Column Layout */}
      <div className="flex flex-col md:flex-row w-full gap-6 mb-6">
        {/* Measurement Framework */}
        <MeasurementFramework />
        
        {/* Implementation Roadmap */}
        <ImplementationRoadmap />
      </div>
      
      {/* Footer Note */}
      <FooterNote />
    </div>
  );
};

export default Layer6Svg;
