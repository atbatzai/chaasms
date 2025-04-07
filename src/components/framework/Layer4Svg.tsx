
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TraditionalSegmentationTab from './layer4/TraditionalSegmentationTab';
import EcosystemSegmentationTab from './layer4/EcosystemSegmentationTab';
import SolutionAreaTab from './layer4/SolutionAreaTab';

const Layer4Svg = () => {
  return (
    <div className="flex flex-col w-full h-full bg-white p-6 font-sans">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-center text-chaasms-blue mb-2">
          LAYER 4: PARTNER SEGMENTATION MODEL
        </h1>
        <p className="text-sm text-chaasms-text">
          Traditional and ecosystem-based segmentation approaches
        </p>
      </div>
      
      {/* Tabs Integration using shadcn UI components */}
      <Tabs defaultValue="traditional" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="traditional">Traditional View</TabsTrigger>
          <TabsTrigger value="ecosystem">Ecosystem View</TabsTrigger>
          <TabsTrigger value="solution">Solution Areas</TabsTrigger>
        </TabsList>
        
        {/* Traditional Segmentation Tab */}
        <TabsContent value="traditional">
          <TraditionalSegmentationTab />
        </TabsContent>
        
        {/* Ecosystem Segmentation Tab */}
        <TabsContent value="ecosystem">
          <EcosystemSegmentationTab />
        </TabsContent>
        
        {/* Solution Areas Tab */}
        <TabsContent value="solution">
          <SolutionAreaTab />
        </TabsContent>
      </Tabs>
      
      <div className="mt-6 text-center">
        <p className="text-sm italic text-chaasms-blue">
          This multi-dimensional segmentation approach drives GTM motion design and execution in Layer 5.
        </p>
      </div>
    </div>
  );
};

export default Layer4Svg;
