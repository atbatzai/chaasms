
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
        
        {/* Title and Subtitle - Added more spacing */}
        <text x="500" y="60" fontFamily="Arial, sans-serif" fontSize="30" fontWeight="bold" textAnchor="middle" fill="#1e40af">LAYER 1: FOUNDATIONAL STRATEGY</text>
        <text x="500" y="100" fontFamily="Arial, sans-serif" fontSize="18" textAnchor="middle" fill="#1e40af">Channel philosophy, ecosystem orientation, GTM alignment</text>
        
        {/* Three Pillars Visual - With improved spacing and padding */}
        {/* Channel Philosophy */}
        <g>
          <rect x="100" y="150" width="240" height="220" rx="5" fill="#ebf2ff" stroke="#2563eb" strokeWidth="1.5" />
          <text x="220" y="185" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" textAnchor="middle" fill="#1e3a8a">Channel Philosophy</text>
          <line x1="140" y1="200" x2="300" y2="200" stroke="#2563eb" strokeWidth="1.5" />
          
          {/* Content bullets with improved spacing and alignment */}
          <circle cx="130" cy="230" r="5" fill="#2563eb" />
          <text x="145" y="235" fontFamily="Arial, sans-serif" fontSize="15" fill="#1e3a8a">Clear rules of engagement</text>
          
          <circle cx="130" cy="265" r="5" fill="#2563eb" />
          <text x="145" y="270" fontFamily="Arial, sans-serif" fontSize="15" fill="#1e3a8a">Partner-first mindset</text>
          
          <circle cx="130" cy="300" r="5" fill="#2563eb" />
          <text x="145" y="305" fontFamily="Arial, sans-serif" fontSize="15" fill="#1e3a8a">Value exchange principles</text>
          
          <circle cx="130" cy="335" r="5" fill="#2563eb" />
          <text x="145" y="340" fontFamily="Arial, sans-serif" fontSize="15" fill="#1e3a8a">Conflict resolution</text>
        </g>
        
        {/* Ecosystem Orientation - Fixed text overrun and increased spacing */}
        <g>
          <rect x="380" y="150" width="240" height="220" rx="5" fill="#ebf2ff" stroke="#2563eb" strokeWidth="1.5" />
          <text x="500" y="185" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" textAnchor="middle" fill="#1e3a8a">Ecosystem Orientation</text>
          <line x1="420" y1="200" x2="580" y2="200" stroke="#2563eb" strokeWidth="1.5" />
          
          {/* Content bullets with improved spacing and reduced text length */}
          <circle cx="405" cy="230" r="5" fill="#2563eb" />
          <text x="425" y="235" fontFamily="Arial, sans-serif" fontSize="15" fill="#1e3a8a">Platform-agnostic mindset</text>
          
          <circle cx="405" cy="265" r="5" fill="#2563eb" />
          <text x="425" y="270" fontFamily="Arial, sans-serif" fontSize="15" fill="#1e3a8a">Meet customers where they are</text>
          
          <circle cx="405" cy="300" r="5" fill="#2563eb" />
          <text x="425" y="305" fontFamily="Arial, sans-serif" fontSize="15" fill="#1e3a8a">Multi-cloud strategy</text>
          
          <circle cx="405" cy="335" r="5" fill="#2563eb" />
          <text x="425" y="340" fontFamily="Arial, sans-serif" fontSize="15" fill="#1e3a8a">Ecosystem ROI prioritization</text>
        </g>
        
        {/* GTM Alignment - Fixed text touching border */}
        <g>
          <rect x="660" y="150" width="240" height="220" rx="5" fill="#ebf2ff" stroke="#2563eb" strokeWidth="1.5" />
          <text x="780" y="185" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" textAnchor="middle" fill="#1e3a8a">GTM Alignment</text>
          <line x1="700" y1="200" x2="860" y2="200" stroke="#2563eb" strokeWidth="1.5" />
          
          {/* Content bullets with improved spacing from borders */}
          <circle cx="685" cy="230" r="5" fill="#2563eb" />
          <text x="705" y="235" fontFamily="Arial, sans-serif" fontSize="15" fill="#1e3a8a">"Land with partners" approach</text>
          
          <circle cx="685" cy="265" r="5" fill="#2563eb" />
          <text x="705" y="270" fontFamily="Arial, sans-serif" fontSize="15" fill="#1e3a8a">Cross-functional buy-in</text>
          
          <circle cx="685" cy="300" r="5" fill="#2563eb" />
          <text x="705" y="305" fontFamily="Arial, sans-serif" fontSize="15" fill="#1e3a8a">Compensation alignment</text>
          
          <circle cx="685" cy="335" r="5" fill="#2563eb" />
          <text x="705" y="340" fontFamily="Arial, sans-serif" fontSize="15" fill="#1e3a8a">Executive sponsorship</text>
        </g>
        
        {/* Key Elements Section - Fixed spacing between header and content */}
        <g>
          <rect x="100" y="400" width="420" height="255" rx="5" fill="#f0f9ff" stroke="#2563eb" strokeWidth="1.5" />
          <text x="310" y="435" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" textAnchor="middle" fill="#1e3a8a">Key Elements</text>
          <line x1="170" y1="450" x2="450" y2="450" stroke="#2563eb" strokeWidth="1.5" />
          
          {/* Content with increased spacing between header and content */}
          <text x="130" y="490" fontFamily="Arial, sans-serif" fontSize="15" fontWeight="bold" fill="#1e3a8a">Channel Vision:</text>
          <text x="250" y="490" fontFamily="Arial, sans-serif" fontSize="15" fill="#1e3a8a">Clear articulation of why</text>
          <text x="250" y="515" fontFamily="Arial, sans-serif" fontSize="15" fill="#1e3a8a">partners are essential</text>
          
          <text x="130" y="550" fontFamily="Arial, sans-serif" fontSize="15" fontWeight="bold" fill="#1e3a8a">Executive Alignment:</text>
          <text x="250" y="550" fontFamily="Arial, sans-serif" fontSize="15" fill="#1e3a8a">C-suite commitment to</text>
          <text x="250" y="575" fontFamily="Arial, sans-serif" fontSize="15" fill="#1e3a8a">channel strategy</text>
          
          <text x="130" y="610" fontFamily="Arial, sans-serif" fontSize="15" fontWeight="bold" fill="#1e3a8a">Org Readiness:</text>
          <text x="250" y="610" fontFamily="Arial, sans-serif" fontSize="15" fill="#1e3a8a">Cross-functional readiness</text>
          <text x="250" y="635" fontFamily="Arial, sans-serif" fontSize="15" fill="#1e3a8a">for partner engagement</text>
        </g>
        
        {/* Core Metrics Section - Removed headers and improved spacing */}
        <g>
          <rect x="560" y="400" width="340" height="255" rx="5" fill="#f0f9ff" stroke="#2563eb" strokeWidth="1.5" />
          <text x="730" y="435" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" textAnchor="middle" fill="#1e3a8a">Core Metrics</text>
          <line x1="620" y1="450" x2="840" y2="450" stroke="#2563eb" strokeWidth="1.5" />
          
          {/* All metrics in one list with improved spacing, no subcategories */}
          <circle cx="590" cy="490" r="5" fill="#2563eb" />
          <text x="610" y="495" fontFamily="Arial, sans-serif" fontSize="15" fill="#1e3a8a">Executive Engagement</text>
          
          <circle cx="590" cy="525" r="5" fill="#2563eb" />
          <text x="610" y="530" fontFamily="Arial, sans-serif" fontSize="15" fill="#1e3a8a">Channel Team Size</text>
          
          <circle cx="590" cy="560" r="5" fill="#2563eb" />
          <text x="610" y="565" fontFamily="Arial, sans-serif" fontSize="15" fill="#1e3a8a">Channel Budget</text>
          
          <circle cx="590" cy="595" r="5" fill="#2563eb" />
          <text x="610" y="600" fontFamily="Arial, sans-serif" fontSize="15" fill="#1e3a8a">Ecosystems Targeted</text>
          
          <circle cx="590" cy="630" r="5" fill="#2563eb" />
          <text x="610" y="635" fontFamily="Arial, sans-serif" fontSize="15" fill="#1e3a8a">Partner Satisfaction Score</text>
        </g>
        
        {/* Critical Touchpoints - With proper spacing and alignment */}
        <g>
          <text x="500" y="690" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" textAnchor="middle" fill="#1e3a8a">Critical Touchpoints</text>
          <line x1="375" y1="705" x2="625" y2="705" stroke="#2563eb" strokeWidth="1.5" />
          
          <rect x="105" y="725" width="140" height="40" rx="20" fill="#3b82f6" />
          <text x="175" y="752" fontFamily="Arial, sans-serif" fontSize="15" textAnchor="middle" fill="white">Executive Briefings</text>
          
          <rect x="265" y="725" width="140" height="40" rx="20" fill="#3b82f6" />
          <text x="335" y="752" fontFamily="Arial, sans-serif" fontSize="15" textAnchor="middle" fill="white">All-Hands Rollout</text>
          
          <rect x="425" y="725" width="140" height="40" rx="20" fill="#3b82f6" />
          <text x="495" y="752" fontFamily="Arial, sans-serif" fontSize="15" textAnchor="middle" fill="white">Sales Enablement</text>
          
          <rect x="585" y="725" width="140" height="40" rx="20" fill="#3b82f6" />
          <text x="655" y="752" fontFamily="Arial, sans-serif" fontSize="15" textAnchor="middle" fill="white">Channel Kickoff</text>
          
          <rect x="745" y="725" width="150" height="40" rx="20" fill="#3b82f6" />
          <text x="820" y="752" fontFamily="Arial, sans-serif" fontSize="15" textAnchor="middle" fill="white">Partner Advisory</text>
        </g>
        
        {/* Note on Interlocking - Proper positioning and font sizing */}
        <text x="500" y="790" fontFamily="Arial, sans-serif" fontSize="15" fontStyle="italic" textAnchor="middle" fill="#1e3a8a">
          This foundational layer drives the Program Architecture choices and tiering structure in Layer 2.
        </text>
      </svg>
    </div>
  );
};

export default Layer1Svg;
