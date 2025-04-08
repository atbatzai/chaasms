
import React from 'react';

const Layer6Content = () => {
  return (
    <div>
      <div className="p-3 bg-chaasms-blue text-white text-center font-semibold mb-6 rounded-md shadow-sm">
        Channel Program Control Tower
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="p-4 bg-blue-50 rounded-md border shadow-sm">
          <h3 className="font-semibold text-center mb-2 text-sm text-chaasms-blue">Revenue Metrics</h3>
          <div className="flex justify-between text-sm">
            <span className="text-gray-700">Channel Revenue</span>
            <span className="font-medium text-chaasms-dark">$3.2M</span>
          </div>
        </div>
        <div className="p-4 bg-blue-50 rounded-md border shadow-sm">
          <h3 className="font-semibold text-center mb-2 text-sm text-chaasms-blue">Partner Metrics</h3>
          <div className="flex justify-between text-sm">
            <span className="text-gray-700">Active Partners</span>
            <span className="font-medium text-chaasms-dark">78</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-md border">
          <h3 className="font-semibold mb-3 text-chaasms-dark">Key Elements</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Metrics Framework: Revenue, partner, program</li>
            <li>Partner Health Score: Performance tracking</li>
            <li>Governance: Steering committee, partner council</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-md border">
          <h3 className="font-semibold mb-3 text-chaasms-dark">Implementation</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Phase 1: Foundation & Architecture</li>
            <li>Phase 2: Partner Recruitment</li>
            <li>Phase 3: GTM Activation</li>
            <li>Phase 4: Measurement & Optimization</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Layer6Content;
