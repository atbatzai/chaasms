
import React from 'react';

const Layer3Svg = () => {
  return (
    <div className="bg-blue-50 p-8 w-full h-full font-sans">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-blue-800">LAYER 3: ECOSYSTEM STRATEGY</h1>
        <p className="text-blue-600 mt-1">Platform-specific strategies, marketplace approach</p>
      </div>
      
      {/* Section Title */}
      <div className="text-center mb-4">
        <h2 className="text-xl font-semibold text-blue-700">Ecosystem-Specific Strategies</h2>
        <div className="w-40 h-1 bg-blue-600 mx-auto mt-1"></div>
      </div>
      
      {/* Main Grid for Strategy Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* ERP Ecosystem */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-blue-200">
          <div className="bg-blue-700 py-3 px-4">
            <h3 className="text-white font-bold">ERP Ecosystem Strategy</h3>
            <p className="text-blue-100 text-sm italic">NetSuite, SAP, Oracle, Dynamics</p>
          </div>
          <div className="p-4">
            <div className="flex items-start mb-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <span className="text-blue-700 font-bold">T</span>
              </div>
              <div>
                <p className="font-semibold text-blue-700">Thesis</p>
                <p className="text-gray-700">Become the integration backbone for ERP-centric enterprises</p>
              </div>
            </div>
            
            <div className="flex items-start mb-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <span className="text-blue-700 font-bold">P</span>
              </div>
              <div>
                <p className="font-semibold text-blue-700">Playbook</p>
                <p className="text-gray-700">Target top SIs, develop templates for common integrations</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <span className="text-blue-700 font-bold">G</span>
              </div>
              <div>
                <p className="font-semibold text-blue-700">GTM Motion</p>
                <p className="text-gray-700">Co-sell with implementation partners at point of deployment</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Cloud Platform Ecosystem */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-blue-200">
          <div className="bg-blue-700 py-3 px-4">
            <h3 className="text-white font-bold">Cloud Platform Ecosystem</h3>
            <p className="text-blue-100 text-sm italic">AWS, Azure, GCP</p>
          </div>
          <div className="p-4">
            <div className="flex items-start mb-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <span className="text-blue-700 font-bold">T</span>
              </div>
              <div>
                <p className="font-semibold text-blue-700">Thesis</p>
                <p className="text-gray-700">Position as the multi-cloud integration solution of choice</p>
              </div>
            </div>
            
            <div className="flex items-start mb-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <span className="text-blue-700 font-bold">P</span>
              </div>
              <div>
                <p className="font-semibold text-blue-700">Playbook</p>
                <p className="text-gray-700">Marketplace presence, MSP engagement, provider alignment</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <span className="text-blue-700 font-bold">G</span>
              </div>
              <div>
                <p className="font-semibold text-blue-700">GTM Motion</p>
                <p className="text-gray-700">Private offers, cloud provider co-sell, consumption pricing</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* CRM Ecosystem */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-blue-200">
          <div className="bg-blue-700 py-3 px-4">
            <h3 className="text-white font-bold">CRM Ecosystem Strategy</h3>
            <p className="text-blue-100 text-sm italic">Salesforce, HubSpot, Dynamics</p>
          </div>
          <div className="p-4">
            <div className="flex items-start mb-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <span className="text-blue-700 font-bold">T</span>
              </div>
              <div>
                <p className="font-semibold text-blue-700">Thesis</p>
                <p className="text-gray-700">Connect CRM with the entire customer data ecosystem</p>
              </div>
            </div>
            
            <div className="flex items-start mb-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <span className="text-blue-700 font-bold">P</span>
              </div>
              <div>
                <p className="font-semibold text-blue-700">Playbook</p>
                <p className="text-gray-700">AppExchange listing, solution consultant certification</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <span className="text-blue-700 font-bold">G</span>
              </div>
              <div>
                <p className="font-semibold text-blue-700">GTM Motion</p>
                <p className="text-gray-700">Account mapping, SI referrals, success collaboration</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* E-commerce Ecosystem */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-blue-200">
          <div className="bg-blue-700 py-3 px-4">
            <h3 className="text-white font-bold">E-commerce Ecosystem</h3>
            <p className="text-blue-100 text-sm italic">Shopify, Magento, BigCommerce</p>
          </div>
          <div className="p-4">
            <div className="flex items-start mb-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <span className="text-blue-700 font-bold">T</span>
              </div>
              <div>
                <p className="font-semibold text-blue-700">Thesis</p>
                <p className="text-gray-700">Power omnichannel retail with seamless data flow</p>
              </div>
            </div>
            
            <div className="flex items-start mb-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <span className="text-blue-700 font-bold">P</span>
              </div>
              <div>
                <p className="font-semibold text-blue-700">Playbook</p>
                <p className="text-gray-700">App store presence, agency partnerships, templates</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <span className="text-blue-700 font-bold">G</span>
              </div>
              <div>
                <p className="font-semibold text-blue-700">GTM Motion</p>
                <p className="text-gray-700">Joint webinars, case studies, solution bundles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Sections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Strategy Framework */}
        <div>
          <h3 className="text-lg font-semibold text-blue-700 mb-2">Ecosystem Strategy Framework</h3>
          <div className="w-24 h-1 bg-blue-600 mb-4"></div>
          
          <div className="space-y-3">
            <div className="bg-blue-100 rounded-md p-3 shadow-sm">
              <span className="font-semibold text-blue-700">1. Ecosystem Selection Criteria</span>
            </div>
            <div className="bg-blue-100 rounded-md p-3 shadow-sm">
              <span className="font-semibold text-blue-700">2. Ecosystem Investment Model</span>
            </div>
            <div className="bg-blue-100 rounded-md p-3 shadow-sm">
              <span className="font-semibold text-blue-700">3. Ecosystem-Specific Playbooks</span>
            </div>
          </div>
        </div>
        
        {/* Key Metrics */}
        <div>
          <h3 className="text-lg font-semibold text-blue-700 mb-2">Key Metrics</h3>
          <div className="w-16 h-1 bg-blue-600 mb-4"></div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-blue-200">
            <div className="bg-blue-700 py-2 px-4">
              <h4 className="font-semibold text-white">Ecosystem Penetration</h4>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700">Partners Per Ecosystem</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700">Ecosystem Program Status</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Marketplace Presence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Note */}
      <div className="mt-6 text-center">
        <p className="text-blue-700 italic text-sm">
          These ecosystem strategies inform partner journey mapping and segmentation in Layer 4.
        </p>
      </div>
    </div>
  );
};

export default Layer3Svg;
