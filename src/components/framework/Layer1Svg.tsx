
import React from 'react';

const Layer1Svg = () => {
  return (
    <div className="w-full max-w-5xl mx-auto overflow-x-auto">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1000 800" 
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Background */}
        <rect width="1000" height="800" fill="#f8fafc" />
        
        {/* Title and Subtitle */}
        <text x="500" y="60" fontFamily="Arial, sans-serif" fontSize="30" fontWeight="bold" textAnchor="middle" fill="#1e40af">LAYER 1: FOUNDATIONAL STRATEGY</text>
        <text x="500" y="95" fontFamily="Arial, sans-serif" fontSize="18" textAnchor="middle" fill="#1e40af">Channel philosophy, ecosystem orientation, GTM alignment</text>
        
        {/* Three Pillars Visual - With proper spacing */}
        {/* Channel Philosophy */}
        <g>
          <rect x="100" y="140" width="240" height="220" rx="5" fill="#ebf2ff" stroke="#2563eb" strokeWidth="1.5" />
          <text x="220" y="175" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" textAnchor="middle" fill="#1e3a8a">Channel Philosophy</text>
          <line x1="140" y1="190" x2="300" y2="190" stroke="#2563eb" strokeWidth="1.5" />
          
          {/* Content bullets with improved spacing and alignment */}
          <circle cx="140" cy="220" r="5" fill="#2563eb" />
          <text x="155" y="225" fontFamily="Arial, sans-serif" fontSize="16" fill="#1e3a8a">Clear rules of engagement</text>
          
          <circle cx="140" cy="255" r="5" fill="#2563eb" />
          <text x="155" y="260" fontFamily="Arial, sans-serif" fontSize="16" fill="#1e3a8a">Partner-first mindset</text>
          
          <circle cx="140" cy="290" r="5" fill="#2563eb" />
          <text x="155" y="295" fontFamily="Arial, sans-serif" fontSize="16" fill="#1e3a8a">Value exchange principles</text>
          
          <circle cx="140" cy="325" r="5" fill="#2563eb" />
          <text x="155" y="330" fontFamily="Arial, sans-serif" fontSize="16" fill="#1e3a8a">Conflict resolution approaches</text>
        </g>
        
        {/* Ecosystem Orientation */}
        <g>
          <rect x="380" y="140" width="240" height="220" rx="5" fill="#ebf2ff" stroke="#2563eb" strokeWidth="1.5" />
          <text x="500" y="175" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" textAnchor="middle" fill="#1e3a8a">Ecosystem Orientation</text>
          <line x1="420" y1="190" x2="580" y2="190" stroke="#2563eb" strokeWidth="1.5" />
          
          {/* Content bullets with improved spacing */}
          <circle cx="420" cy="220" r="5" fill="#2563eb" />
          <text x="435" y="225" fontFamily="Arial, sans-serif" fontSize="16" fill="#1e3a8a">Platform-agnostic mindset</text>
          
          <circle cx="420" cy="255" r="5" fill="#2563eb" />
          <text x="435" y="260" fontFamily="Arial, sans-serif" fontSize="16" fill="#1e3a8a">Meet customers where they are</text>
          
          <circle cx="420" cy="290" r="5" fill="#2563eb" />
          <text x="435" y="295" fontFamily="Arial, sans-serif" fontSize="16" fill="#1e3a8a">Multi-cloud & platform strategy</text>
          
          <circle cx="420" cy="325" r="5" fill="#2563eb" />
          <text x="435" y="330" fontFamily="Arial, sans-serif" fontSize="16" fill="#1e3a8a">Ecosystem ROI prioritization</text>
        </g>
        
        {/* GTM Alignment */}
        <g>
          <rect x="660" y="140" width="240" height="220" rx="5" fill="#ebf2ff" stroke="#2563eb" strokeWidth="1.5" />
          <text x="780" y="175" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" textAnchor="middle" fill="#1e3a8a">GTM Alignment</text>
          <line x1="700" y1="190" x2="860" y2="190" stroke="#2563eb" strokeWidth="1.5" />
          
          {/* Content bullets with improved spacing */}
          <circle cx="700" cy="220" r="5" fill="#2563eb" />
          <text x="715" y="225" fontFamily="Arial, sans-serif" fontSize="16" fill="#1e3a8a">"Land with partners" philosophy</text>
          
          <circle cx="700" cy="255" r="5" fill="#2563eb" />
          <text x="715" y="260" fontFamily="Arial, sans-serif" fontSize="16" fill="#1e3a8a">Cross-functional buy-in</text>
          
          <circle cx="700" cy="290" r="5" fill="#2563eb" />
          <text x="715" y="295" fontFamily="Arial, sans-serif" fontSize="16" fill="#1e3a8a">Compensation alignment</text>
          
          <circle cx="700" cy="325" r="5" fill="#2563eb" />
          <text x="715" y="330" fontFamily="Arial, sans-serif" fontSize="16" fill="#1e3a8a">Executive sponsorship</text>
        </g>
        
        {/* Key Elements Section - Improved layout with proper spacing */}
        <g>
          <rect x="100" y="390" width="420" height="255" rx="5" fill="#f0f9ff" stroke="#2563eb" strokeWidth="1.5" />
          <text x="310" y="425" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" textAnchor="middle" fill="#1e3a8a">Key Elements</text>
          <line x1="170" y1="440" x2="450" y2="440" stroke="#2563eb" strokeWidth="1.5" />
          
          {/* Content with proper alignment and spacing */}
          <text x="140" y="475" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#1e3a8a">Channel Vision:</text>
          <text x="280" y="475" fontFamily="Arial, sans-serif" fontSize="16" fill="#1e3a8a">Clear articulation of why partners</text>
          <text x="280" y="495" fontFamily="Arial, sans-serif" fontSize="16" fill="#1e3a8a">are essential to strategy</text>
          
          <text x="140" y="530" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#1e3a8a">Executive Alignment:</text>
          <text x="280" y="530" fontFamily="Arial, sans-serif" fontSize="16" fill="#1e3a8a">C-suite commitment to channel</text>
          <text x="280" y="550" fontFamily="Arial, sans-serif" fontSize="16" fill="#1e3a8a">as strategic imperative</text>
          
          <text x="140" y="585" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#1e3a8a">Org Readiness:</text>
          <text x="280" y="585" fontFamily="Arial, sans-serif" fontSize="16" fill="#1e3a8a">Cross-functional preparedness</text>
          <text x="280" y="605" fontFamily="Arial, sans-serif" fontSize="16" fill="#1e3a8a">for partner engagement</text>
          
          <text x="140" y="640" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#1e3a8a">Resource Commitment:</text>
          <text x="280" y="640" fontFamily="Arial, sans-serif" fontSize="16" fill="#1e3a8a">Staffing, budget, and</text>
          <text x="280" y="660" fontFamily="Arial, sans-serif" fontSize="16" fill="#1e3a8a">technology investments</text>
        </g>
        
        {/* Core Metrics Section - Improved layout with proper spacing */}
        <g>
          <rect x="560" y="390" width="340" height="255" rx="5" fill="#f0f9ff" stroke="#2563eb" strokeWidth="1.5" />
          <text x="730" y="425" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" textAnchor="middle" fill="#1e3a8a">Core Metrics</text>
          <line x1="620" y1="440" x2="840" y2="440" stroke="#2563eb" strokeWidth="1.5" />
          
          {/* Commitment Metrics with proper spacing */}
          <text x="600" y="475" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="#1e3a8a">Commitment Metrics</text>
          <line x1="600" y1="485" x2="760" y2="485" stroke="#2563eb" strokeWidth="1" />
          
          <text x="600" y="515" fontFamily="Arial, sans-serif" fontSize="16" fill="#1e3a8a">Executive Engagement</text>
          <text x="860" y="515" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" textAnchor="end" fill="#1e3a8a">Monthly</text>
          
          <text x="600" y="545" fontFamily="Arial, sans-serif" fontSize="16" fill="#1e3a8a">Channel Team Size</text>
          <text x="860" y="545" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" textAnchor="end" fill="#1e3a8a">5+</text>
          
          <text x="600" y="575" fontFamily="Arial, sans-serif" fontSize="16" fill="#1e3a8a">Channel Budget</text>
          <text x="860" y="575" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" textAnchor="end" fill="#1e3a8a">10-15% Revenue</text>
          
          {/* Foundation Metrics with proper spacing */}
          <text x="600" y="615" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="#1e3a8a">Foundation Metrics</text>
          <line x1="600" y1="625" x2="760" y2="625" stroke="#2563eb" strokeWidth="1" />
          
          <text x="600" y="655" fontFamily="Arial, sans-serif" fontSize="16" fill="#1e3a8a">Ecosystems Targeted</text>
          <text x="860" y="655" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" textAnchor="end" fill="#1e3a8a">5+</text>
        </g>
        
        {/* Critical Touchpoints - With proper spacing and alignment */}
        <g>
          <text x="500" y="680" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" textAnchor="middle" fill="#1e3a8a">Critical Touchpoints</text>
          <line x1="375" y1="695" x2="625" y2="695" stroke="#2563eb" strokeWidth="1.5" />
          
          <rect x="90" y="720" width="160" height="40" rx="20" fill="#3b82f6" />
          <text x="170" y="747" fontFamily="Arial, sans-serif" fontSize="15" textAnchor="middle" fill="white">Executive Briefings</text>
          
          <rect x="270" y="720" width="160" height="40" rx="20" fill="#3b82f6" />
          <text x="350" y="747" fontFamily="Arial, sans-serif" fontSize="15" textAnchor="middle" fill="white">All-Hands Rollout</text>
          
          <rect x="450" y="720" width="160" height="40" rx="20" fill="#3b82f6" />
          <text x="530" y="747" fontFamily="Arial, sans-serif" fontSize="15" textAnchor="middle" fill="white">Sales Enablement</text>
          
          <rect x="630" y="720" width="160" height="40" rx="20" fill="#3b82f6" />
          <text x="710" y="747" fontFamily="Arial, sans-serif" fontSize="15" textAnchor="middle" fill="white">Channel Kickoff</text>
          
          <rect x="810" y="720" width="180" height="40" rx="20" fill="#3b82f6" />
          <text x="900" y="747" fontFamily="Arial, sans-serif" fontSize="15" textAnchor="middle" fill="white">Partner Advisory Board</text>
        </g>
        
        {/* Note on Interlocking - Proper positioning and font sizing */}
        <text x="500" y="780" fontFamily="Arial, sans-serif" fontSize="15" fontStyle="italic" textAnchor="middle" fill="#1e3a8a">
          This foundational layer drives the Program Architecture choices and tiering structure in Layer 2.
        </text>
      </svg>
    </div>
  );
};

export default Layer1Svg;
