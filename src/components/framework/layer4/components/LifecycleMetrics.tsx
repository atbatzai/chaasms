
import React from 'react';

interface MetricItemProps {
  label: string;
  value: string;
}

const MetricItem: React.FC<MetricItemProps> = ({ label, value }) => {
  return (
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm">{label}</span>
      <span className="font-bold text-chaasms-dark">{value}</span>
    </div>
  );
};

interface MetricSectionProps {
  title: string;
  metrics: Array<MetricItemProps>;
}

const MetricSection: React.FC<MetricSectionProps> = ({ title, metrics }) => {
  return (
    <div>
      <h4 className="font-medium text-chaasms-blue mb-3">{title}</h4>
      {metrics.map((metric, index) => (
        <MetricItem 
          key={`${title}-${index}`} 
          label={metric.label} 
          value={metric.value} 
        />
      ))}
    </div>
  );
};

const LifecycleMetrics: React.FC = () => {
  const metricsData = [
    {
      title: "Onboarding Success",
      metrics: [
        { label: "Completion Rate", value: "85%+" },
        { label: "Time to First Deal", value: "<90 days" }
      ]
    },
    {
      title: "Growth Metrics",
      metrics: [
        { label: "YoY Revenue Growth", value: "24%" },
        { label: "Solution Adoption", value: "3.2 products" }
      ]
    },
    {
      title: "Partner Health",
      metrics: [
        { label: "Satisfaction Score", value: "4.5/5" },
        { label: "Annual Retention", value: "92%" }
      ]
    },
    {
      title: "Engagement",
      metrics: [
        { label: "Training Completion", value: "78%" },
        { label: "Portal Activity", value: "Weekly" }
      ]
    }
  ];

  return (
    <div className="mt-10 p-4 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-bold text-chaasms-blue mb-5 pb-2 border-b border-blue-200">
        Lifecycle Metrics
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <div className="space-y-6">
          {/* Left Column */}
          {metricsData.slice(0, 2).map((section, index) => (
            <MetricSection 
              key={`left-${index}`} 
              title={section.title} 
              metrics={section.metrics} 
            />
          ))}
        </div>
        
        <div className="space-y-6">
          {/* Right Column */}
          {metricsData.slice(2, 4).map((section, index) => (
            <MetricSection 
              key={`right-${index}`} 
              title={section.title} 
              metrics={section.metrics} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LifecycleMetrics;
