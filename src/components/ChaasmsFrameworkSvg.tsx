
import React from 'react';

const ChaasmsFrameworkSvg = () => {
  return (
    <div className="w-full max-w-5xl mx-auto overflow-visible">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 800 620" 
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Background */}
        <rect width="800" height="620" fill="#f5f8ff" />
        
        {/* Title and Subtitle */}
        <text x="400" y="50" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="bold" textAnchor="middle" fill="#1a4ca1">CHAASMS CHANNEL STRATEGY FRAMEWORK</text>
        <text x="400" y="80" fontFamily="Arial, sans-serif" fontSize="16" textAnchor="middle" fill="#4a5568">Comprehensive Six-Layer System for Channel Program Development</text>
        
        {/* Layer boxes - stacked from bottom to top */}
        {/* Layer 1: Foundational Strategy */}
        <rect x="150" y="500" width="500" height="70" rx="4" fill="#e6eeff" stroke="#c9d6f2" strokeWidth="1" />
        <text x="400" y="525" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" textAnchor="middle" fill="#1a4ca1">Layer 1: Foundational Strategy</text>
        <text x="400" y="545" fontFamily="Arial, sans-serif" fontSize="14" textAnchor="middle" fill="#4a5568">Channel philosophy, ecosystem orientation, GTM alignment</text>
        
        {/* Layer 2: Program Architecture */}
        <rect x="150" y="420" width="500" height="70" rx="4" fill="#d9e6ff" stroke="#b8cff2" strokeWidth="1" />
        <text x="400" y="445" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" textAnchor="middle" fill="#1a4ca1">Layer 2: Program Architecture</text>
        <text x="400" y="465" fontFamily="Arial, sans-serif" fontSize="14" textAnchor="middle" fill="#4a5568">Partner types, tiering, enablement framework</text>
        
        {/* Layer 3: Ecosystem Strategy */}
        <rect x="150" y="340" width="500" height="70" rx="4" fill="#c7dbff" stroke="#a6c4f2" strokeWidth="1" />
        <text x="400" y="365" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" textAnchor="middle" fill="#1a4ca1">Layer 3: Ecosystem Strategy</text>
        <text x="400" y="385" fontFamily="Arial, sans-serif" fontSize="14" textAnchor="middle" fill="#4a5568">Platform-specific strategies, marketplace approach</text>
        
        {/* Layer 4: Touchpoint & Segmentation */}
        <rect x="150" y="260" width="500" height="70" rx="4" fill="#b1ceff" stroke="#90b8ed" strokeWidth="1" />
        <text x="400" y="285" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" textAnchor="middle" fill="#1a4ca1">Layer 4: Touchpoint & Segmentation</text>
        <text x="400" y="305" fontFamily="Arial, sans-serif" fontSize="14" textAnchor="middle" fill="#4a5568">Partner journey, segmentation model, lifecycle management</text>
        
        {/* Layer 5: GTM Motion */}
        <rect x="150" y="180" width="500" height="70" rx="4" fill="#93b7ff" stroke="#7aa3ea" strokeWidth="1" />
        <text x="400" y="205" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" textAnchor="middle" fill="#ffffff">Layer 5: GTM Motion</text>
        <text x="400" y="225" fontFamily="Arial, sans-serif" fontSize="14" textAnchor="middle" fill="#ffffff">Co-sell, co-market, marketplace execution</text>
        
        {/* Layer 6: Measurement & Scaling */}
        <rect x="150" y="100" width="500" height="70" rx="4" fill="#3075fa" stroke="#2760c9" strokeWidth="1" />
        <text x="400" y="125" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" textAnchor="middle" fill="#ffffff">Layer 6: Measurement & Scaling</text>
        <text x="400" y="145" fontFamily="Arial, sans-serif" fontSize="14" textAnchor="middle" fill="#ffffff">KPIs, governance, optimization loop</text>
        
        {/* Bottom navigation buttons - improved spacing and width for Comprehensive Metrics button */}
        <rect x="40" y="580" width="150" height="40" rx="20" fill="#3075fa" />
        <text x="115" y="605" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" textAnchor="middle" fill="#ffffff">Hybrid Approach</text>
        
        <rect x="220" y="580" width="190" height="40" rx="20" fill="#3075fa" />
        <text x="315" y="605" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" textAnchor="middle" fill="#ffffff">Ecosystem Strategies</text>
        
        <rect x="440" y="580" width="180" height="40" rx="20" fill="#3075fa" />
        <text x="530" y="605" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" textAnchor="middle" fill="#ffffff">Comprehensive Metrics</text>
        
        <rect x="650" y="580" width="140" height="40" rx="20" fill="#3075fa" />
        <text x="720" y="605" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" textAnchor="middle" fill="#ffffff">Implementation</text>
      </svg>
    </div>
  );
};

export default ChaasmsFrameworkSvg;
