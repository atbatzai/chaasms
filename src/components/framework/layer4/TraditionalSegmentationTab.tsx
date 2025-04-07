
import React from 'react';

const TraditionalSegmentationTab = () => {
  const colors = {
    primary: '#0f4c81',
    secondary: '#3498db',
    text: {
      dark: '#2c3e50',
      light: '#ffffff',
      muted: '#7f8c8d'
    },
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
      <h3 className="text-lg font-bold text-chaasms-blue mb-4">Value-Based Segmentation</h3>
      
      {/* Simplified Pyramid Visualization */}
      <div className="mb-10">
        {/* Strategic Layer */}
        <div className="flex items-center mb-4">
          <div className="w-1/2">
            <div className="h-16 bg-chaasms-blue flex items-center justify-center">
              <span className="text-white font-medium">Strategic</span>
            </div>
          </div>
          <div className="w-1/2 pl-6">
            <h4 className="font-bold text-chaasms-dark">Strategic (5%)</h4>
            <p className="text-sm text-chaasms-text">25% of revenue</p>
          </div>
        </div>
        
        {/* Growth Layer */}
        <div className="flex items-center mb-4">
          <div className="w-3/5">
            <div className="h-16 bg-blue-600 flex items-center justify-center">
              <span className="text-white font-medium">Growth</span>
            </div>
          </div>
          <div className="w-2/5 pl-6">
            <h4 className="font-bold text-chaasms-dark">Growth (15%)</h4>
            <p className="text-sm text-chaasms-text">65% of revenue</p>
          </div>
        </div>
        
        {/* Emerging Layer */}
        <div className="flex items-center">
          <div className="w-4/5">
            <div className="h-16 bg-blue-300 flex items-center justify-center">
              <span className="text-blue-900 font-medium">Emerging</span>
            </div>
          </div>
          <div className="w-1/5 pl-6">
            <h4 className="font-bold text-chaasms-dark">Emerging (80%)</h4>
            <p className="text-sm text-chaasms-text">20% of revenue</p>
          </div>
        </div>
      </div>
      
      {/* Lifecycle Metrics Section */}
      <div className="mt-10 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-bold text-chaasms-blue mb-5 pb-2 border-b border-blue-200">Lifecycle Metrics</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <div className="space-y-6">
            {/* Left Column */}
            <div>
              <h4 className="font-medium text-chaasms-blue mb-3">Onboarding Success</h4>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm">Completion Rate</span>
                <span className="font-bold text-chaasms-dark">85%+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Time to First Deal</span>
                <span className="font-bold text-chaasms-dark">&lt;90 days</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-chaasms-blue mb-3">Growth Metrics</h4>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm">YoY Revenue Growth</span>
                <span className="font-bold text-chaasms-dark">24%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Solution Adoption</span>
                <span className="font-bold text-chaasms-dark">3.2 products</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            {/* Right Column */}
            <div>
              <h4 className="font-medium text-chaasms-blue mb-3">Partner Health</h4>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm">Satisfaction Score</span>
                <span className="font-bold text-chaasms-dark">4.5/5</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Annual Retention</span>
                <span className="font-bold text-chaasms-dark">92%</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-chaasms-blue mb-3">Engagement</h4>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm">Training Completion</span>
                <span className="font-bold text-chaasms-dark">78%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Portal Activity</span>
                <span className="font-bold text-chaasms-dark">Weekly</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TraditionalSegmentationTab;
