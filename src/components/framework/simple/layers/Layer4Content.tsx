
import React from 'react';

const Layer4Content = () => {
  return (
    <div>
      <div className="flex justify-between mb-8">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto rounded-full bg-chaasms-blue flex items-center justify-center text-white mb-2 shadow-md">1</div>
          <span className="text-xs text-gray-700">Recruitment</span>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 mx-auto rounded-full bg-chaasms-blue flex items-center justify-center text-white mb-2 shadow-md">2</div>
          <span className="text-xs text-gray-700">Onboarding</span>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 mx-auto rounded-full bg-chaasms-blue flex items-center justify-center text-white mb-2 shadow-md">3</div>
          <span className="text-xs text-gray-700">Enablement</span>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 mx-auto rounded-full bg-chaasms-blue flex items-center justify-center text-white mb-2 shadow-md">4</div>
          <span className="text-xs text-gray-700">Growth</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-md border">
          <h3 className="font-semibold mb-3 text-chaasms-dark">Key Elements</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Partner Journey: Recruitment to Growth</li>
            <li>Segmentation: Strategic to Volume Partners</li>
            <li>Lifecycle Management: Stage-appropriate support</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-md border">
          <h3 className="font-semibold mb-3 text-chaasms-dark">Example KPIs</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Time to first deal</li>
            <li>Partner satisfaction</li>
            <li>Partner churn rate</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Layer4Content;
