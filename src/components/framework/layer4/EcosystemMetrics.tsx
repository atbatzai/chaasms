
import React from 'react';

interface MetricItem {
  label: string;
  value: string;
}

interface EcosystemMetricsProps {
  ecosystem: string;
  metrics: MetricItem[];
}

const EcosystemMetrics: React.FC<EcosystemMetricsProps> = ({ ecosystem, metrics }) => {
  return (
    <div>
      <h5 className="font-medium text-chaasms-blue mb-2">{ecosystem}</h5>
      {metrics.map((metric, index) => (
        <div key={index} className="flex justify-between items-center mb-1">
          <span className="text-xs">{metric.label}</span>
          <span className="font-bold text-chaasms-dark">{metric.value}</span>
        </div>
      ))}
    </div>
  );
};

export default EcosystemMetrics;
