
import React from 'react';
import SolutionCard from './SolutionCard';

const SolutionAreaTab = () => {
  // Solution area data
  const integrationData = {
    title: "Integration Solutions",
    description: "Data integration, API management, workflow automation",
    distribution: {
      type: "Ecosystem",
      items: [
        { name: "Microsoft", percentage: "35%", color: "#0f4c81" },
        { name: "Salesforce", percentage: "40%", color: "#3474a5" },
        { name: "NetSuite", percentage: "25%", color: "#5499c7" }
      ]
    },
    metrics: [
      { label: "Connectors Built", value: "186" },
      { label: "Avg Integration Time", value: "14 days" }
    ]
  };

  const analyticsData = {
    title: "Data Analytics Solutions",
    description: "Business intelligence, reporting, predictive analytics",
    distribution: {
      type: "Ecosystem",
      items: [
        { name: "Microsoft", percentage: "50%", color: "#0f4c81" },
        { name: "Salesforce", percentage: "30%", color: "#3474a5" },
        { name: "NetSuite", percentage: "20%", color: "#5499c7" }
      ]
    },
    metrics: [
      { label: "Dashboards Created", value: "432" },
      { label: "Client Satisfaction", value: "4.8/5" }
    ]
  };

  const industryData = {
    title: "Industry Vertical Solutions",
    description: "Healthcare, Financial Services, Manufacturing, Retail",
    distribution: {
      type: "Industry",
      items: [
        { name: "Healthcare", percentage: "35%", color: "#0f4c81" },
        { name: "Financial", percentage: "30%", color: "#1e5b94" },
        { name: "Manufacturing", percentage: "20%", color: "#3474a5" },
        { name: "Retail", percentage: "15%", color: "#5499c7" }
      ]
    },
    metrics: [
      { label: "Vertical Solutions", value: "27" },
      { label: "Industry Experts", value: "93" }
    ]
  };

  const cloudData = {
    title: "Cloud Modernization",
    description: "Migration, Infrastructure, DevOps, Application modernization",
    distribution: {
      type: "Ecosystem",
      items: [
        { name: "Microsoft", percentage: "60%", color: "#0f4c81" },
        { name: "Salesforce", percentage: "25%", color: "#3474a5" },
        { name: "NetSuite", percentage: "15%", color: "#5499c7" }
      ]
    },
    metrics: [
      { label: "Migrations Completed", value: "124" },
      { label: "Time Saved", value: "38%" }
    ]
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <h3 className="text-lg font-bold text-chaasms-blue mb-2">Solution Area Segmentation</h3>
        <p className="text-chaasms-text">
          Partners specialize in different solution areas across ecosystems. This view segments partners 
          based on their expertise and focus areas.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <SolutionCard {...integrationData} />
        <SolutionCard {...analyticsData} />
        <SolutionCard {...industryData} />
        <SolutionCard {...cloudData} />
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-bold text-chaasms-dark mb-2">Solution Area Success Factors</h4>
        <p className="text-sm text-chaasms-text mb-3">
          Different solution areas require specific partner enablement approaches and success metrics:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <h5 className="font-medium text-chaasms-blue">Integration Success</h5>
            <ul className="list-disc ml-4 text-xs space-y-1 mt-1">
              <li>Technical connector certifications</li>
              <li>Solution accelerator development</li>
              <li>Cross-ecosystem expertise</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-chaasms-blue">Analytics Success</h5>
            <ul className="list-disc ml-4 text-xs space-y-1 mt-1">
              <li>Data governance frameworks</li>
              <li>Industry benchmarking capabilities</li>
              <li>AI/ML modeling competency</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionAreaTab;
