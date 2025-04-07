
import React from 'react';
import HeaderSection from './layer5/HeaderSection';
import MotionColumn from './layer5/MotionColumn';
import ProgramComponents from './layer5/ProgramComponents';
import KeyMetrics from './layer5/KeyMetrics';
import EnablementAssets from './layer5/EnablementAssets';
import HybridExecution from './layer5/HybridExecution';
import FooterNote from './layer5/FooterNote';

const Layer5Svg = () => {
  // Define the steps for each motion column
  const coSellingSteps = [
    { title: "Lead Generation" },
    { title: "Deal Registration" },
    { title: "Joint Selling" },
    { title: "Delivery & Success", isLast: true }
  ];

  const coMarketingSteps = [
    { title: "Demand Planning" },
    { title: "Content Creation" },
    { title: "Campaign Execution" },
    { title: "Lead Management", isLast: true }
  ];

  const marketplaceSteps = [
    { title: "Listing Creation" },
    { title: "Offer Configuration" },
    { title: "Private Offers" },
    { title: "Transaction Management", isLast: true }
  ];

  return (
    <div className="flex flex-col items-center w-full h-full bg-slate-50 p-5 font-sans">
      {/* Header */}
      <HeaderSection />

      {/* Main Content - Three Columns */}
      <div className="flex flex-col md:flex-row w-full justify-between gap-6 mb-7">
        <MotionColumn title="Co-Selling Motion" steps={coSellingSteps} />
        <MotionColumn title="Co-Marketing Motion" steps={coMarketingSteps} />
        <MotionColumn title="Marketplace Motion" steps={marketplaceSteps} />
      </div>

      {/* Secondary Content - Two Columns */}
      <div className="flex flex-col md:flex-row w-full justify-between gap-6 mb-7">
        <ProgramComponents />
        <KeyMetrics />
      </div>

      {/* GTM Enablement Assets */}
      <EnablementAssets />

      {/* Hybrid GTM Execution */}
      <HybridExecution />

      {/* Footer Note */}
      <FooterNote />
    </div>
  );
};

export default Layer5Svg;
