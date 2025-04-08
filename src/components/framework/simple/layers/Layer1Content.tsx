
import React from 'react';

const Layer1Content = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-md shadow-sm">
          <h3 className="font-semibold text-center text-chaasms-blue">Partner Value Proposition</h3>
          <p className="text-sm mt-2 text-center text-gray-700">Partners as extension of your team</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-md shadow-sm">
          <h3 className="font-semibold text-center text-chaasms-blue">Ecosystem Coverage</h3>
          <p className="text-sm mt-2 text-center text-gray-700">Platform-agnostic approach</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-md shadow-sm">
          <h3 className="font-semibold text-center text-chaasms-blue">GTM Alignment</h3>
          <p className="text-sm mt-2 text-center text-gray-700">"Land with partners" philosophy</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-md border">
          <h3 className="font-semibold mb-3 text-chaasms-dark">Key Elements</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Channel Vision: Clear rules of engagement</li>
            <li>Ecosystem Mindset: Meet customers where they are</li>
            <li>Executive Alignment: Leadership buy-in</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-md border">
          <h3 className="font-semibold mb-3 text-chaasms-dark">Example KPIs</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Number of ecosystems targeted (5+)</li>
            <li>Internal readiness score</li>
            <li>Initial channel revenue targets</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Layer1Content;
