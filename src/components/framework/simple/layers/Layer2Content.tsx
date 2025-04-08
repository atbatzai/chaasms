
import React from 'react';

const Layer2Content = () => {
  return (
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
  );
};

export default Layer2Content;
