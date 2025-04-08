
import React from 'react';

const Layer3Content = () => {
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <div className="p-4 bg-blue-50 rounded-md shadow-sm text-center">
          <h3 className="font-semibold text-chaasms-blue">ERP Ecosystems</h3>
          <p className="text-xs mt-2 text-gray-700">NetSuite, SAP</p>
        </div>
        <div className="p-4 bg-blue-50 rounded-md shadow-sm text-center">
          <h3 className="font-semibold text-chaasms-blue">CRM Ecosystems</h3>
          <p className="text-xs mt-2 text-gray-700">Salesforce, HubSpot</p>
        </div>
        <div className="p-4 bg-blue-50 rounded-md shadow-sm text-center">
          <h3 className="font-semibold text-chaasms-blue">Cloud Ecosystems</h3>
          <p className="text-xs mt-2 text-gray-700">AWS, Azure</p>
        </div>
        <div className="p-4 bg-blue-50 rounded-md shadow-sm text-center">
          <h3 className="font-semibold text-chaasms-blue">E-commerce</h3>
          <p className="text-xs mt-2 text-gray-700">Shopify, Magento</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-md border">
          <h3 className="font-semibold mb-3 text-chaasms-dark">Key Elements</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Ecosystem Thesis: Platform-specific strategies</li>
            <li>Playbooks: Custom go-to-market per ecosystem</li>
            <li>Marketplace Strategy: Listings, private offers</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-md border">
          <h3 className="font-semibold mb-3 text-chaasms-dark">Example KPIs</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            <li>Pipeline by ecosystem</li>
            <li>Partners by ecosystem</li>
            <li>Marketplace revenue</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Layer3Content;
