
import React from 'react';
import PyramidVisualization from './components/PyramidVisualization';
import LifecycleMetrics from './components/LifecycleMetrics';

const TraditionalSegmentationTab = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
      <h3 className="text-lg font-bold text-chaasms-blue mb-4">Value-Based Segmentation</h3>
      
      {/* Simplified Pyramid Visualization Component */}
      <PyramidVisualization />
      
      {/* Lifecycle Metrics Component */}
      <LifecycleMetrics />
    </div>
  );
};

export default TraditionalSegmentationTab;
