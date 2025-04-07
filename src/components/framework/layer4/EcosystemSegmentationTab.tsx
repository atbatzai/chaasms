
import React from 'react';
import EcosystemCard from './EcosystemCard';
import EcosystemMetrics from './EcosystemMetrics';

const EcosystemSegmentationTab = () => {
  // Microsoft ecosystem data
  const microsoftData = {
    title: "Microsoft Ecosystem",
    strategic: {
      percentage: "3%",
      revenue: "30%"
    },
    growth: {
      percentage: "12%",
      revenue: "45%"
    },
    emerging: {
      percentage: "85%",
      revenue: "25%"
    },
    focusAreas: [
      "Azure Cloud & Power Platform",
      "Dynamics 365 Integration",
      "Technical certification emphasis"
    ]
  };

  // Salesforce ecosystem data
  const salesforceData = {
    title: "Salesforce Ecosystem",
    strategic: {
      percentage: "8%",
      revenue: "40%"
    },
    growth: {
      percentage: "22%",
      revenue: "35%"
    },
    emerging: {
      percentage: "70%",
      revenue: "25%"
    },
    focusAreas: [
      "AppExchange integrations",
      "Sales & Service Cloud expertise",
      "Industry cloud solutions"
    ]
  };

  // NetSuite ecosystem data
  const netsuiteData = {
    title: "NetSuite Ecosystem",
    strategic: {
      percentage: "4%",
      revenue: "35%"
    },
    growth: {
      percentage: "16%",
      revenue: "40%"
    },
    emerging: {
      percentage: "80%",
      revenue: "25%"
    },
    focusAreas: [
      "ERP implementation expertise",
      "SuiteApp development",
      "Financial process automation"
    ]
  };

  // Ecosystem metrics
  const microsoftMetrics = [
    { label: "Certification Rate", value: "84%" },
    { label: "Co-Sell Deals", value: "48" },
    { label: "Azure Consumption", value: "+32%" }
  ];

  const salesforceMetrics = [
    { label: "Partner Dev. Organization", value: "12%" },
    { label: "AppExchange Apps", value: "26" },
    { label: "Expert Consultants", value: "155" }
  ];

  const netsuiteMetrics = [
    { label: "Solution Provider", value: "24%" },
    { label: "SuiteApp Adoption", value: "+42%" },
    { label: "Implementations", value: "78" }
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <h3 className="text-lg font-bold text-chaasms-blue mb-2">Ecosystem-Based Segmentation</h3>
        <p className="text-chaasms-text">
          Partners perform differently across technology ecosystems. This view segments partners by their 
          expertise and impact within each major platform.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Ecosystem Cards */}
        <EcosystemCard {...microsoftData} />
        <EcosystemCard {...salesforceData} />
        <EcosystemCard {...netsuiteData} />
      </div>
      
      <div className="mt-6 bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold text-chaasms-dark mb-3">Ecosystem-Specific Metrics</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <EcosystemMetrics ecosystem="Microsoft" metrics={microsoftMetrics} />
          <EcosystemMetrics ecosystem="Salesforce" metrics={salesforceMetrics} />
          <EcosystemMetrics ecosystem="NetSuite" metrics={netsuiteMetrics} />
        </div>
      </div>
    </div>
  );
};

export default EcosystemSegmentationTab;
