
import { useNavigate } from 'react-router-dom';

const ChaasmsFrameworkSvg = () => {
  const navigate = useNavigate();
  
  const handleButtonClick = (section: string) => {
    navigate('/frameworks');
    // We can expand this later to navigate to specific sections
  };
  
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
        <g onClick={() => handleButtonClick('layer1')} style={{ cursor: 'pointer' }}>
          <rect x="150" y="500" width="500" height="70" rx="4" fill="#e6eeff" stroke="#c9d6f2" strokeWidth="1" />
          <text x="400" y="525" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" textAnchor="middle" fill="#1a4ca1">Layer 1: Foundational Strategy</text>
          <text x="400" y="545" fontFamily="Arial, sans-serif" fontSize="14" textAnchor="middle" fill="#4a5568">Channel philosophy, ecosystem orientation, GTM alignment</text>
        </g>
        
        {/* Layer 2: Program Architecture */}
        <g onClick={() => handleButtonClick('layer2')} style={{ cursor: 'pointer' }}>
          <rect x="150" y="420" width="500" height="70" rx="4" fill="#d9e6ff" stroke="#b8cff2" strokeWidth="1" />
          <text x="400" y="445" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" textAnchor="middle" fill="#1a4ca1">Layer 2: Program Architecture</text>
          <text x="400" y="465" fontFamily="Arial, sans-serif" fontSize="14" textAnchor="middle" fill="#4a5568">Partner types, tiering, enablement framework</text>
        </g>
        
        {/* Layer 3: Ecosystem Strategy */}
        <g onClick={() => handleButtonClick('layer3')} style={{ cursor: 'pointer' }}>
          <rect x="150" y="340" width="500" height="70" rx="4" fill="#c7dbff" stroke="#a6c4f2" strokeWidth="1" />
          <text x="400" y="365" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" textAnchor="middle" fill="#1a4ca1">Layer 3: Ecosystem Strategy</text>
          <text x="400" y="385" fontFamily="Arial, sans-serif" fontSize="14" textAnchor="middle" fill="#4a5568">Platform-specific strategies, marketplace approach</text>
        </g>
        
        {/* Layer 4: Touchpoint & Segmentation */}
        <g onClick={() => handleButtonClick('layer4')} style={{ cursor: 'pointer' }}>
          <rect x="150" y="260" width="500" height="70" rx="4" fill="#b1ceff" stroke="#90b8ed" strokeWidth="1" />
          <text x="400" y="285" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" textAnchor="middle" fill="#1a4ca1">Layer 4: Touchpoint & Segmentation</text>
          <text x="400" y="305" fontFamily="Arial, sans-serif" fontSize="14" textAnchor="middle" fill="#4a5568">Partner journey, segmentation model, lifecycle management</text>
        </g>
        
        {/* Layer 5: GTM Motion */}
        <g onClick={() => handleButtonClick('layer5')} style={{ cursor: 'pointer' }}>
          <rect x="150" y="180" width="500" height="70" rx="4" fill="#93b7ff" stroke="#7aa3ea" strokeWidth="1" />
          <text x="400" y="205" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" textAnchor="middle" fill="#ffffff">Layer 5: GTM Motion</text>
          <text x="400" y="225" fontFamily="Arial, sans-serif" fontSize="14" textAnchor="middle" fill="#ffffff">Co-sell, co-market, marketplace execution</text>
        </g>
        
        {/* Layer 6: Measurement & Scaling */}
        <g onClick={() => handleButtonClick('layer6')} style={{ cursor: 'pointer' }}>
          <rect x="150" y="100" width="500" height="70" rx="4" fill="#3075fa" stroke="#2760c9" strokeWidth="1" />
          <text x="400" y="125" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" textAnchor="middle" fill="#ffffff">Layer 6: Measurement & Scaling</text>
          <text x="400" y="145" fontFamily="Arial, sans-serif" fontSize="14" textAnchor="middle" fill="#ffffff">KPIs, governance, optimization loop</text>
        </g>
        
        {/* Bottom navigation buttons with improved spacing and width */}
        <g onClick={() => handleButtonClick('hybrid')} style={{ cursor: 'pointer' }}>
          <rect x="50" y="580" width="150" height="40" rx="20" fill="#3075fa" />
          <text x="125" y="605" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" textAnchor="middle" fill="#ffffff">Hybrid Approach</text>
        </g>
        
        <g onClick={() => handleButtonClick('ecosystem')} style={{ cursor: 'pointer' }}>
          <rect x="230" y="580" width="150" height="40" rx="20" fill="#3075fa" />
          <text x="305" y="605" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" textAnchor="middle" fill="#ffffff">Ecosystem Strategy</text>
        </g>
        
        <g onClick={() => handleButtonClick('metrics')} style={{ cursor: 'pointer' }}>
          <rect x="410" y="580" width="170" height="40" rx="20" fill="#3075fa" />
          <text x="495" y="605" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" textAnchor="middle" fill="#ffffff">Core Metrics</text>
        </g>
        
        <g onClick={() => handleButtonClick('implementation')} style={{ cursor: 'pointer' }}>
          <rect x="610" y="580" width="140" height="40" rx="20" fill="#3075fa" />
          <text x="680" y="605" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" textAnchor="middle" fill="#ffffff">Implementation</text>
        </g>
      </svg>
    </div>
  );
};

export default ChaasmsFrameworkSvg;
