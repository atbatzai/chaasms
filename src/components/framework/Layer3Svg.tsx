import React from 'react';

const Layer3Svg = () => {
  // Consistent color palette for all layers
  const colors = {
    primary: '#0f4c81',         // Deep blue for main elements
    secondary: '#3498db',       // Medium blue for secondary elements
    accent: '#e74c3c',          // Accent color for highlights
    light: '#f8fafc',           // Light background
    lightBlue: '#ebf2ff',       // Light blue background
    text: {
      dark: '#2c3e50',          // Dark text
      light: '#ffffff',         // Light text
      muted: '#7f8c8d'          // Muted text
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto overflow-x-auto">
      <div className="bg-white p-8 font-sans">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold" style={{ color: colors.primary }}>
            LAYER 3: ECOSYSTEM STRATEGY
          </h1>
          <p className="text-sm mt-2" style={{ color: colors.primary }}>
            Platform-specific strategies, marketplace approach
          </p>
        </div>
        
        {/* Section Title */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold mb-2" style={{ color: colors.primary }}>
            Ecosystem-Specific Strategies
          </h2>
          <div className="flex justify-center">
            <div className="border-b w-48" style={{ borderColor: colors.primary }}></div>
          </div>
        </div>
        
        {/* Main Grid for Strategy Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* ERP Ecosystem */}
          <div className="rounded-lg shadow-md overflow-hidden border" style={{ borderColor: colors.secondary }}>
            <div className="py-3 px-4" style={{ backgroundColor: colors.primary }}>
              <h3 className="text-base font-bold" style={{ color: colors.text.light }}>ERP Ecosystem Strategy</h3>
              <p className="text-xs italic" style={{ color: 'rgba(255,255,255,0.7)' }}>NetSuite, SAP, Oracle, Dynamics</p>
            </div>
            <div className="p-4" style={{ backgroundColor: colors.light }}>
              <div className="flex items-start mb-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-3" 
                     style={{ backgroundColor: colors.lightBlue }}>
                  <span className="font-bold" style={{ color: colors.primary }}>T</span>
                </div>
                <div>
                  <p className="font-semibold" style={{ color: colors.primary }}>Thesis</p>
                  <p style={{ color: colors.text.dark }}>Become the integration backbone for ERP-centric enterprises</p>
                </div>
              </div>
              
              <div className="flex items-start mb-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-3" 
                     style={{ backgroundColor: colors.lightBlue }}>
                  <span className="font-bold" style={{ color: colors.primary }}>P</span>
                </div>
                <div>
                  <p className="font-semibold" style={{ color: colors.primary }}>Playbook</p>
                  <p style={{ color: colors.text.dark }}>Target top SIs, develop templates for common integrations</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-3" 
                     style={{ backgroundColor: colors.lightBlue }}>
                  <span className="font-bold" style={{ color: colors.primary }}>G</span>
                </div>
                <div>
                  <p className="font-semibold" style={{ color: colors.primary }}>GTM Motion</p>
                  <p style={{ color: colors.text.dark }}>Co-sell with implementation partners at point of deployment</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Cloud Platform Ecosystem */}
          <div className="rounded-lg shadow-md overflow-hidden border" style={{ borderColor: colors.secondary }}>
            <div className="py-3 px-4" style={{ backgroundColor: colors.primary }}>
              <h3 className="text-base font-bold" style={{ color: colors.text.light }}>Cloud Platform Ecosystem</h3>
              <p className="text-xs italic" style={{ color: 'rgba(255,255,255,0.7)' }}>AWS, Azure, GCP</p>
            </div>
            <div className="p-4" style={{ backgroundColor: colors.light }}>
              <div className="flex items-start mb-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-3" 
                     style={{ backgroundColor: colors.lightBlue }}>
                  <span className="font-bold" style={{ color: colors.primary }}>T</span>
                </div>
                <div>
                  <p className="font-semibold" style={{ color: colors.primary }}>Thesis</p>
                  <p style={{ color: colors.text.dark }}>Position as the multi-cloud integration solution of choice</p>
                </div>
              </div>
              
              <div className="flex items-start mb-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-3" 
                     style={{ backgroundColor: colors.lightBlue }}>
                  <span className="font-bold" style={{ color: colors.primary }}>P</span>
                </div>
                <div>
                  <p className="font-semibold" style={{ color: colors.primary }}>Playbook</p>
                  <p style={{ color: colors.text.dark }}>Marketplace presence, MSP engagement, provider alignment</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-3" 
                     style={{ backgroundColor: colors.lightBlue }}>
                  <span className="font-bold" style={{ color: colors.primary }}>G</span>
                </div>
                <div>
                  <p className="font-semibold" style={{ color: colors.primary }}>GTM Motion</p>
                  <p style={{ color: colors.text.dark }}>Private offers, cloud provider co-sell, consumption pricing</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* CRM Ecosystem */}
          <div className="rounded-lg shadow-md overflow-hidden border" style={{ borderColor: colors.secondary }}>
            <div className="py-3 px-4" style={{ backgroundColor: colors.primary }}>
              <h3 className="text-base font-bold" style={{ color: colors.text.light }}>CRM Ecosystem Strategy</h3>
              <p className="text-xs italic" style={{ color: 'rgba(255,255,255,0.7)' }}>Salesforce, HubSpot, Dynamics</p>
            </div>
            <div className="p-4" style={{ backgroundColor: colors.light }}>
              <div className="flex items-start mb-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-3" 
                     style={{ backgroundColor: colors.lightBlue }}>
                  <span className="font-bold" style={{ color: colors.primary }}>T</span>
                </div>
                <div>
                  <p className="font-semibold" style={{ color: colors.primary }}>Thesis</p>
                  <p style={{ color: colors.text.dark }}>Connect CRM with the entire customer data ecosystem</p>
                </div>
              </div>
              
              <div className="flex items-start mb-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-3" 
                     style={{ backgroundColor: colors.lightBlue }}>
                  <span className="font-bold" style={{ color: colors.primary }}>P</span>
                </div>
                <div>
                  <p className="font-semibold" style={{ color: colors.primary }}>Playbook</p>
                  <p style={{ color: colors.text.dark }}>AppExchange listing, solution consultant certification</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-3" 
                     style={{ backgroundColor: colors.lightBlue }}>
                  <span className="font-bold" style={{ color: colors.primary }}>G</span>
                </div>
                <div>
                  <p className="font-semibold" style={{ color: colors.primary }}>GTM Motion</p>
                  <p style={{ color: colors.text.dark }}>Account mapping, SI referrals, success collaboration</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* E-commerce Ecosystem */}
          <div className="rounded-lg shadow-md overflow-hidden border" style={{ borderColor: colors.secondary }}>
            <div className="py-3 px-4" style={{ backgroundColor: colors.primary }}>
              <h3 className="text-base font-bold" style={{ color: colors.text.light }}>E-commerce Ecosystem</h3>
              <p className="text-xs italic" style={{ color: 'rgba(255,255,255,0.7)' }}>Shopify, Magento, BigCommerce</p>
            </div>
            <div className="p-4" style={{ backgroundColor: colors.light }}>
              <div className="flex items-start mb-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-3" 
                     style={{ backgroundColor: colors.lightBlue }}>
                  <span className="font-bold" style={{ color: colors.primary }}>T</span>
                </div>
                <div>
                  <p className="font-semibold" style={{ color: colors.primary }}>Thesis</p>
                  <p style={{ color: colors.text.dark }}>Power omnichannel retail with seamless data flow</p>
                </div>
              </div>
              
              <div className="flex items-start mb-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-3" 
                     style={{ backgroundColor: colors.lightBlue }}>
                  <span className="font-bold" style={{ color: colors.primary }}>P</span>
                </div>
                <div>
                  <p className="font-semibold" style={{ color: colors.primary }}>Playbook</p>
                  <p style={{ color: colors.text.dark }}>App store presence, agency partnerships, templates</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-3" 
                     style={{ backgroundColor: colors.lightBlue }}>
                  <span className="font-bold" style={{ color: colors.primary }}>G</span>
                </div>
                <div>
                  <p className="font-semibold" style={{ color: colors.primary }}>GTM Motion</p>
                  <p style={{ color: colors.text.dark }}>Joint webinars, case studies, solution bundles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Strategy Framework */}
          <div>
            <h3 className="text-lg font-bold mb-3" style={{ color: colors.primary }}>Ecosystem Strategy Framework</h3>
            <div className="border-b mb-4" style={{ borderColor: colors.secondary }}></div>
            
            <div className="space-y-3">
              <div className="p-3 rounded-md shadow-sm" style={{ backgroundColor: colors.lightBlue }}>
                <span className="font-semibold" style={{ color: colors.primary }}>1. Ecosystem Selection Criteria</span>
              </div>
              <div className="p-3 rounded-md shadow-sm" style={{ backgroundColor: colors.lightBlue }}>
                <span className="font-semibold" style={{ color: colors.primary }}>2. Ecosystem Investment Model</span>
              </div>
              <div className="p-3 rounded-md shadow-sm" style={{ backgroundColor: colors.lightBlue }}>
                <span className="font-semibold" style={{ color: colors.primary }}>3. Ecosystem-Specific Playbooks</span>
              </div>
            </div>
          </div>
          
          {/* Key Metrics */}
          <div>
            <h3 className="text-lg font-bold mb-3" style={{ color: colors.primary }}>Key Metrics</h3>
            <div className="border-b mb-4" style={{ borderColor: colors.secondary }}></div>
            
            <div className="rounded-lg shadow-md overflow-hidden border" style={{ borderColor: colors.secondary }}>
              <div className="py-2 px-4" style={{ backgroundColor: colors.primary }}>
                <h4 className="font-semibold" style={{ color: colors.text.light }}>Ecosystem Penetration</h4>
              </div>
              <div className="p-4" style={{ backgroundColor: colors.light }}>
                <div className="flex justify-between items-center mb-2">
                  <span style={{ color: colors.text.dark }}>Partners Per Ecosystem</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span style={{ color: colors.text.dark }}>Ecosystem Program Status</span>
                </div>
                <div className="flex justify-between items-center">
                  <span style={{ color: colors.text.dark }}>Marketplace Presence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Note */}
        <div className="text-center text-sm italic" style={{ color: colors.text.muted }}>
          These ecosystem strategies inform partner journey mapping and segmentation in Layer 4.
        </div>
      </div>
    </div>
  );
};

export default Layer3Svg;
