
import React from 'react';

interface MetricItemProps {
  label: string;
  value: string;
  percentage: string;
}

const MetricItem: React.FC<MetricItemProps> = ({ label, value, percentage }) => (
  <div>
    <div className="flex justify-between items-center mb-1">
      <span className="text-chaasms-dark">{label}</span>
      <span className="font-bold text-chaasms-blue text-lg">{value}</span>
    </div>
    <div className="w-full bg-slate-200 rounded-full h-2">
      <div className={`bg-chaasms-blue h-2 rounded-full ${percentage}`}></div>
    </div>
  </div>
);

interface MetricsCardProps {
  title: string;
  metrics: MetricItemProps[];
}

const MetricsCard: React.FC<MetricsCardProps> = ({ title, metrics }) => (
  <div className="w-full md:w-1/3 bg-white border-b md:border-b-0 md:border-r border-slate-200 p-5">
    <h4 className="font-semibold text-chaasms-blue text-center mb-3 pb-1 border-b border-blue-200">{title}</h4>
    
    <div className="space-y-4">
      {metrics.map((metric, index) => (
        <MetricItem 
          key={index} 
          label={metric.label} 
          value={metric.value} 
          percentage={metric.percentage} 
        />
      ))}
    </div>
  </div>
);

const MetricsGrid = () => {
  const revenueMetrics = [
    { label: "Channel Revenue", value: "$3.2M", percentage: "w-4/5" },
    { label: "YoY Growth", value: "42%", percentage: "w-2/5" },
    { label: "Revenue % via Partners", value: "35%", percentage: "w-1/3" }
  ];
  
  const partnerMetrics = [
    { label: "Active Partners", value: "78", percentage: "w-3/4" },
    { label: "Certified Partners", value: "62%", percentage: "w-3/5" },
    { label: "Partner Health Score", value: "73/100", percentage: "w-3/4" }
  ];
  
  const programMetrics = [
    { label: "Deal Registration Rate", value: "85%", percentage: "w-4/5" },
    { label: "Partner Satisfaction", value: "4.6/5", percentage: "w-11/12" },
    { label: "MDF ROI", value: "3.2x", percentage: "w-2/3" }
  ];

  return (
    <div className="flex flex-col md:flex-row w-full mb-8 shadow-md">
      <MetricsCard title="Revenue Metrics" metrics={revenueMetrics} />
      <MetricsCard title="Partner Metrics" metrics={partnerMetrics} />
      <MetricsCard title="Program Metrics" metrics={programMetrics} />
    </div>
  );
};

export default MetricsGrid;
