
import React, { useState } from 'react';

const SimpleChaasmsFramework = () => {
  const [activeLayer, setActiveLayer] = useState(0);
  
  const layers = [
    { title: "Foundational Strategy", description: "Channel philosophy, ecosystem orientation, GTM alignment" },
    { title: "Program Architecture", description: "Partner types, tiering, enablement framework" },
    { title: "Ecosystem Strategy", description: "Platform-specific strategies, marketplace approach" },
    { title: "Touchpoint & Segmentation", description: "Partner journey, segmentation model, lifecycle management" },
    { title: "GTM Motion", description: "Co-sell, co-market, marketplace execution" },
    { title: "Measurement & Scaling", description: "KPIs, governance, optimization loop" }
  ];

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="bg-chaasms-blue text-white p-6 mb-6 rounded-lg shadow-md">
        <h1 className="text-xl font-bold">CHAASMS Channel Strategy Framework</h1>
        <p className="text-sm mt-1">Six-Layer Framework for ISV Channel Program Development</p>
      </div>
      
      <div className="mb-6 flex flex-wrap gap-2">
        {layers.map((layer, index) => (
          <button
            key={index}
            onClick={() => setActiveLayer(index)}
            className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
              activeLayer === index 
                ? 'bg-chaasms-blue text-white shadow-sm' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            Layer {index + 1}: {layer.title}
          </button>
        ))}
      </div>
      
      <div className="bg-white p-6 border rounded-lg shadow-sm">
        <h2 className="text-lg font-bold mb-3 text-chaasms-blue">
          Layer {activeLayer + 1}: {layers[activeLayer].title}
        </h2>
        <p className="mb-6 text-gray-600">{layers[activeLayer].description}</p>
        
        {activeLayer === 0 && (
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
        )}
        
        {activeLayer === 1 && (
          <div>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse shadow-sm">
                <thead>
                  <tr>
                    <th className="border p-2 bg-gray-100 text-chaasms-dark"></th>
                    <th className="border p-2 bg-gray-100 text-chaasms-dark">SIs</th>
                    <th className="border p-2 bg-gray-100 text-chaasms-dark">ISVs</th>
                    <th className="border p-2 bg-gray-100 text-chaasms-dark">Resellers</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="border p-2 bg-gray-100 text-chaasms-dark">Strategic</th>
                    <td className="border p-2 bg-blue-50 text-gray-700">Full Enablement</td>
                    <td className="border p-2 bg-blue-50 text-gray-700">Co-Innovation</td>
                    <td className="border p-2 bg-blue-50 text-gray-700">Premium Incentives</td>
                  </tr>
                  <tr>
                    <th className="border p-2 bg-gray-100 text-chaasms-dark">Growth</th>
                    <td className="border p-2 bg-blue-50/70 text-gray-700">Certification</td>
                    <td className="border p-2 bg-blue-50/70 text-gray-700">Joint Roadmap</td>
                    <td className="border p-2 bg-blue-50/70 text-gray-700">Enhanced Incentives</td>
                  </tr>
                  <tr>
                    <th className="border p-2 bg-gray-100 text-chaasms-dark">Emerging</th>
                    <td className="border p-2 bg-blue-50/50 text-gray-700">Basic Training</td>
                    <td className="border p-2 bg-blue-50/50 text-gray-700">Basic Integration</td>
                    <td className="border p-2 bg-blue-50/50 text-gray-700">Standard Incentives</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-md border">
                <h3 className="font-semibold mb-3 text-chaasms-dark">Key Elements</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                  <li>Partner Types: SIs, ISVs, Resellers, Marketplaces</li>
                  <li>Segmentation Structure: Emerging, Growth, Strategic</li>
                  <li>Hybrid Approach: Scalable yet high-touch</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-md border">
                <h3 className="font-semibold mb-3 text-chaasms-dark">Example KPIs</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                  <li>Partner recruitment by type</li>
                  <li>Onboarding completion rates</li>
                  <li>Time to first deal (&lt;90 days)</li>
                </ul>
              </div>
            </div>
          </div>
        )}
        
        {activeLayer === 2 && (
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
        )}
        
        {activeLayer === 3 && (
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
        )}
        
        {activeLayer === 4 && (
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
        )}
        
        {activeLayer === 5 && (
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
        )}
      </div>
    </div>
  );
};

export default SimpleChaasmsFramework;
