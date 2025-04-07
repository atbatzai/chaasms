
import React from 'react';

const Layer2Svg = () => {
  // Consistent color palette based on professional standards
  const colors = {
    primary: '#0f4c81',         // Deep blue for main elements
    secondary: '#3498db',       // Medium blue for secondary elements 
    accent: '#e74c3c',          // Accent color for highlights
    light: '#f8fafc',           // Light background
    lightBlue: '#e6f7ff',       // Light blue background
    text: {
      dark: '#2c3e50',          // Dark text
      light: '#ffffff',         // Light text
      muted: '#7f8c8d'          // Muted text
    },
    tiers: {
      platinum: '#1e5b94',      // More harmonious tier colors
      gold: '#3474a5',          // Updated to be more symmetrical with other blues
      silver: '#5499c7',        // Lighter blue
      registered: '#a0aec0'     // Light blue-gray
    }
  };

  return (
    <div className="flex flex-col w-full h-full bg-white p-8 font-sans">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-center" style={{ color: colors.primary }}>
          LAYER 2: PROGRAM ARCHITECTURE
        </h1>
        <p className="text-sm" style={{ color: colors.primary }}>
          Partner capabilities, specializations, and enablement framework
        </p>
      </div>

      {/* Partner Program Matrix - Modern Implementation */}
      <div 
        className="rounded-lg shadow-md p-6 mb-8"
        style={{ backgroundColor: colors.lightBlue }}
      >
        <h2 className="text-xl font-bold mb-4" style={{ color: colors.primary }}>
          Partner Specialization Matrix
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="p-2 w-32"></th>
                <th className="p-2 text-center" style={{ color: colors.text.light, backgroundColor: colors.primary }}>
                  Systems Integrators
                </th>
                <th className="p-2 text-center" style={{ color: colors.text.light, backgroundColor: colors.primary }}>
                  ISVs & Technology
                </th>
                <th className="p-2 text-center" style={{ color: colors.text.light, backgroundColor: colors.primary }}>
                  Resellers & Agencies
                </th>
                <th className="p-2 text-center" style={{ color: colors.text.light, backgroundColor: colors.primary }}>
                  Strategic Alliances
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Platinum Row */}
              <tr>
                <td className="p-3 font-bold" style={{ color: colors.text.light, backgroundColor: colors.tiers.platinum }}>
                  Specialization
                </td>
                <td className="p-3 border" style={{ backgroundColor: 'rgba(30, 64, 175, 0.1)' }}>
                  <div className="font-bold">Full Solution Enablement</div>
                  <div className="text-xs">+ Executive Sponsorship</div>
                </td>
                <td className="p-3 border" style={{ backgroundColor: 'rgba(30, 64, 175, 0.1)' }}>
                  <div className="font-bold">Strategic Co-Innovation</div>
                  <div className="text-xs">+ Joint R&D</div>
                </td>
                <td className="p-3 border" style={{ backgroundColor: 'rgba(30, 64, 175, 0.1)' }}>
                  <div className="font-bold">Premium Margins (30%+)</div>
                  <div className="text-xs">+ Dedicated CAM</div>
                </td>
                <td className="p-3 border" style={{ backgroundColor: 'rgba(30, 64, 175, 0.1)' }}>
                  <div className="font-bold">Joint GTM Strategy</div>
                  <div className="text-xs">+ C-Suite Alignment</div>
                </td>
              </tr>
              
              {/* Advanced Row */}
              <tr>
                <td className="p-3 font-bold" style={{ color: colors.text.light, backgroundColor: '#3474a5' }}>
                  Advanced
                </td>
                <td className="p-3 border" style={{ backgroundColor: 'rgba(52, 116, 165, 0.1)' }}>
                  <div className="font-bold">Advanced Certification</div>
                  <div className="text-xs">+ Solution Development</div>
                </td>
                <td className="p-3 border" style={{ backgroundColor: 'rgba(52, 116, 165, 0.1)' }}>
                  <div className="font-bold">Joint Roadmap Access</div>
                  <div className="text-xs">+ Integration Support</div>
                </td>
                <td className="p-3 border" style={{ backgroundColor: 'rgba(52, 116, 165, 0.1)' }}>
                  <div className="font-bold">Elevated Margins (25%)</div>
                  <div className="text-xs">+ MDF Access</div>
                </td>
                <td className="p-3 border" style={{ backgroundColor: 'rgba(52, 116, 165, 0.1)' }}>
                  <div className="font-bold">Aligned GTM Planning</div>
                  <div className="text-xs">+ Field Alignment</div>
                </td>
              </tr>
              
              {/* Silver Row */}
              <tr>
                <td className="p-3 font-bold" style={{ color: colors.text.light, backgroundColor: colors.tiers.silver }}>
                  Certified
                </td>
                <td className="p-3 border" style={{ backgroundColor: 'rgba(113, 128, 150, 0.1)' }}>
                  <div className="font-bold">Technical Certification</div>
                  <div className="text-xs">+ Partner Portal</div>
                </td>
                <td className="p-3 border" style={{ backgroundColor: 'rgba(113, 128, 150, 0.1)' }}>
                  <div className="font-bold">Basic Integration</div>
                  <div className="text-xs">+ Marketplace Access</div>
                </td>
                <td className="p-3 border" style={{ backgroundColor: 'rgba(113, 128, 150, 0.1)' }}>
                  <div className="font-bold">Standard Margins (20%)</div>
                  <div className="text-xs">+ Deal Registration</div>
                </td>
                <td className="p-3 border" style={{ backgroundColor: 'rgba(113, 128, 150, 0.1)' }}>
                  <div className="font-bold">Basic Alliance</div>
                  <div className="text-xs">+ Co-Sell Eligibility</div>
                </td>
              </tr>
              
              {/* Registered Row */}
              <tr>
                <td className="p-3 font-bold" style={{ color: colors.text.dark, backgroundColor: colors.tiers.registered }}>
                  Registered
                </td>
                <td className="p-3 border" style={{ backgroundColor: 'rgba(160, 174, 192, 0.1)' }}>
                  <div className="font-bold">Basic Training</div>
                </td>
                <td className="p-3 border" style={{ backgroundColor: 'rgba(160, 174, 192, 0.1)' }}>
                  <div className="font-bold">API Documentation</div>
                </td>
                <td className="p-3 border" style={{ backgroundColor: 'rgba(160, 174, 192, 0.1)' }}>
                  <div className="font-bold">Entry Margins (15%)</div>
                </td>
                <td className="p-3 border" style={{ backgroundColor: 'rgba(160, 174, 192, 0.1)' }}>
                  <div className="font-bold">Relationship Only</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Two Column Layout for Architecture and Metrics */}
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 mb-8">
        {/* Architecture Components Section */}
        <div 
          className="w-full md:w-1/2 rounded-lg shadow-md p-6"
          style={{ backgroundColor: colors.lightBlue }}
        >
          <h2 className="text-xl font-bold mb-4" style={{ color: colors.primary }}>
            Architecture Components
          </h2>
          
          <div className="space-y-4">
            <div className="p-3 rounded" style={{ backgroundColor: 'rgba(52, 152, 219, 0.2)' }}>
              <div className="font-bold mb-1" style={{ color: colors.primary }}>Partner Capabilities</div>
              <div>Specialized expertise by integration type</div>
            </div>
            
            <div className="p-3 rounded" style={{ backgroundColor: 'rgba(52, 152, 219, 0.2)' }}>
              <div className="font-bold mb-1" style={{ color: colors.primary }}>Specialization Model</div>
              <div>Ecosystem & marketplace focused advancement</div>
            </div>
            
            <div className="p-3 rounded" style={{ backgroundColor: 'rgba(52, 152, 219, 0.2)' }}>
              <div className="font-bold mb-1" style={{ color: colors.primary }}>Enablement Framework</div>
              <div>Training & certification by expertise</div>
            </div>
            
            <div className="p-3 rounded" style={{ backgroundColor: 'rgba(52, 152, 219, 0.2)' }}>
              <div className="font-bold mb-1" style={{ color: colors.primary }}>Incentive Model</div>
              <div>Marketplace-aligned rewards & recognition</div>
            </div>
          </div>
        </div>
        
        {/* Key Metrics Section */}
        <div 
          className="w-full md:w-1/2 rounded-lg shadow-md p-6"
          style={{ backgroundColor: colors.lightBlue }}
        >
          <h2 className="text-xl font-bold mb-4" style={{ color: colors.primary }}>
            Key Metrics
          </h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2" style={{ color: colors.primary }}>
              Recruitment Metrics
            </h3>
            <div className="border-b mb-2" style={{ borderColor: colors.primary }}></div>
            
            <div className="flex justify-between mb-2">
              <div>New Partners (Quarterly)</div>
              <div className="font-bold">20+</div>
            </div>
            
            <div className="flex justify-between mb-2">
              <div>Partner Mix Ratio</div>
              <div className="font-bold">Balanced</div>
            </div>
            
            <div className="flex justify-between mb-2">
              <div>Ecosystem Coverage</div>
              <div className="font-bold">85%+</div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-2" style={{ color: colors.primary }}>
              Enablement Metrics
            </h3>
            <div className="border-b mb-2" style={{ borderColor: colors.primary }}></div>
            
            <div className="flex justify-between mb-2">
              <div>Time to First Deal</div>
              <div className="font-bold">&lt;90 days</div>
            </div>
            
            <div className="flex justify-between mb-2">
              <div>Partner Satisfaction</div>
              <div className="font-bold">4.5/5.0</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Program Assets Section */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-center mb-2" style={{ color: colors.primary }}>
          Program Assets
        </h2>
        <div className="flex justify-center mb-2">
          <div className="border-b w-48" style={{ borderColor: colors.primary }}></div>
        </div>
        
        <div className="flex flex-wrap justify-between gap-4">
          <div 
            className="flex-1 min-w-[150px] p-4 rounded-lg text-center shadow-sm"
            style={{ backgroundColor: 'rgba(52, 152, 219, 0.2)' }}
          >
            <div className="font-bold mb-1" style={{ color: colors.primary }}>Partner Portal</div>
            <div className="text-sm">Centralized resource hub</div>
          </div>
          
          <div 
            className="flex-1 min-w-[150px] p-4 rounded-lg text-center shadow-sm"
            style={{ backgroundColor: 'rgba(52, 152, 219, 0.2)' }}
          >
            <div className="font-bold mb-1" style={{ color: colors.primary }}>Integration University</div>
            <div className="text-sm">Capability-based learning</div>
          </div>
          
          <div 
            className="flex-1 min-w-[150px] p-4 rounded-lg text-center shadow-sm"
            style={{ backgroundColor: 'rgba(52, 152, 219, 0.2)' }}
          >
            <div className="font-bold mb-1" style={{ color: colors.primary }}>Deal Registration</div>
            <div className="text-sm">Opportunity protection</div>
          </div>
          
          <div 
            className="flex-1 min-w-[150px] p-4 rounded-lg text-center shadow-sm"
            style={{ backgroundColor: 'rgba(52, 152, 219, 0.2)' }}
          >
            <div className="font-bold mb-1" style={{ color: colors.primary }}>Marketing Resources</div>
            <div className="text-sm">Co-brandable assets</div>
          </div>
          
          <div 
            className="flex-1 min-w-[150px] p-4 rounded-lg text-center shadow-sm"
            style={{ backgroundColor: 'rgba(52, 152, 219, 0.2)' }}
          >
            <div className="font-bold mb-1" style={{ color: colors.primary }}>Marketplace Catalog</div>
            <div className="text-sm">Integration showcases</div>
          </div>
        </div>
      </div>
      
      {/* Footer Note */}
      <div className="text-center text-sm italic" style={{ color: colors.text.muted }}>
        This architecture layer establishes the framework for ecosystem-specific and marketplace strategies in Layer 3.
      </div>
    </div>
  );
};

export default Layer2Svg;
