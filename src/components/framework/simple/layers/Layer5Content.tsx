
import React from 'react';

const Layer5Content = () => {
  return (
    <div>
      <div className="mb-6">
        <div className="bg-chaasms-blue p-3 text-white text-center font-semibold mb-2 rounded-t-md shadow-sm">Co-Sell Motion</div>
        <div className="flex justify-between shadow-sm">
          <div className="text-center p-3 bg-blue-50 flex-1 border-r text-gray-700">Lead Gen</div>
          <div className="text-center p-3 bg-blue-50 flex-1 border-r text-gray-700">Deal Reg</div>
          <div className="text-center p-3 bg-blue-50 flex-1 border-r text-gray-700">Selling</div>
          <div className="text-center p-3 bg-blue-50 flex-1 text-gray-700 rounded-br-md">Delivery</div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-md border">
          <h3 className="font-semibold mb-3 text-chaasms-dark">Key Elements</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Co-Sell Strategy: Deal registration, joint selling</li>
            <li>Co-Marketing: Campaigns, MDF, content</li>
            <li>Marketplace Strategy: Cloud procurement</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-md border">
          <h3 className="font-semibold mb-3 text-chaasms-dark">Example KPIs</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Partner-sourced pipeline (30%+)</li>
            <li>Deal registration approval rate</li>
            <li>Co-sell win rates</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Layer5Content;
