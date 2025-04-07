
import React from 'react';

interface MetricItemProps {
  label: string;
  value: string;
}

const MetricItem: React.FC<MetricItemProps> = ({ label, value }) => (
  <div className="flex justify-between items-center py-1">
    <span className="text-chaasms-dark">{label}</span>
    <span className="font-semibold text-chaasms-blue">{value}</span>
  </div>
);

const MetricsSection: React.FC<{title: string, metrics: MetricItemProps[]}> = ({ title, metrics }) => (
  <div className="mb-3">
    <h4 className="font-semibold text-chaasms-blue border-b border-blue-300 pb-1 mb-2">{title}</h4>
    {metrics.map((metric, index) => (
      <MetricItem key={index} label={metric.label} value={metric.value} />
    ))}
  </div>
);

const KeyMetrics = () => {
  const coSellMetrics = [
    { label: "Partner-Sourced Pipeline", value: "30%+ of Total" },
    { label: "Deal Registration Approval", value: "85%+" }
  ];
  
  const marketingMetrics = [
    { label: "MDF Utilization Rate", value: "80%+" },
    { label: "Campaign Conversion", value: "2%+ to SQL" }
  ];

  return (
    <div className="w-full md:w-1/2 bg-white rounded-lg shadow-md overflow-hidden border-2 border-blue-100">
      <div className="p-4">
        <h3 className="text-lg font-bold text-chaasms-blue text-center mb-2">Key Metrics</h3>
        <div className="h-1 w-24 bg-chaasms-blue rounded mx-auto mb-4"></div>
        
        <MetricsSection title="Co-Sell Metrics" metrics={coSellMetrics} />
        <MetricsSection title="Marketing Metrics" metrics={marketingMetrics} />
      </div>
    </div>
  );
};

export default KeyMetrics;
