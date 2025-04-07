
import React from 'react';

const Layer1Svg = () => {
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
            LAYER 1: FOUNDATIONAL STRATEGY
          </h1>
          <p className="text-sm mt-2" style={{ color: colors.primary }}>
            Channel philosophy, ecosystem orientation, GTM alignment
          </p>
        </div>

        {/* Three Pillars Visual */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Channel Philosophy */}
          <div 
            className="rounded-lg shadow-md p-6"
            style={{ backgroundColor: colors.lightBlue }}
          >
            <h2 className="text-xl font-bold mb-4" style={{ color: colors.primary }}>
              Channel Philosophy
            </h2>
            <div className="border-b mb-4" style={{ borderColor: colors.secondary }}></div>
            
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: colors.secondary }}></div>
                <span style={{ color: colors.text.dark }}>Clear rules of engagement</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: colors.secondary }}></div>
                <span style={{ color: colors.text.dark }}>Partner-first mindset</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: colors.secondary }}></div>
                <span style={{ color: colors.text.dark }}>Value exchange principles</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: colors.secondary }}></div>
                <span style={{ color: colors.text.dark }}>Conflict resolution</span>
              </li>
            </ul>
          </div>
          
          {/* Ecosystem Orientation */}
          <div 
            className="rounded-lg shadow-md p-6"
            style={{ backgroundColor: colors.lightBlue }}
          >
            <h2 className="text-xl font-bold mb-4" style={{ color: colors.primary }}>
              Ecosystem Orientation
            </h2>
            <div className="border-b mb-4" style={{ borderColor: colors.secondary }}></div>
            
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: colors.secondary }}></div>
                <span style={{ color: colors.text.dark }}>Platform-agnostic mindset</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: colors.secondary }}></div>
                <span style={{ color: colors.text.dark }}>Meet customers where they are</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: colors.secondary }}></div>
                <span style={{ color: colors.text.dark }}>Multi-cloud strategy</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: colors.secondary }}></div>
                <span style={{ color: colors.text.dark }}>Ecosystem ROI prioritization</span>
              </li>
            </ul>
          </div>
          
          {/* GTM Alignment */}
          <div 
            className="rounded-lg shadow-md p-6"
            style={{ backgroundColor: colors.lightBlue }}
          >
            <h2 className="text-xl font-bold mb-4" style={{ color: colors.primary }}>
              GTM Alignment
            </h2>
            <div className="border-b mb-4" style={{ borderColor: colors.secondary }}></div>
            
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: colors.secondary }}></div>
                <span style={{ color: colors.text.dark }}>"Land with partners" approach</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: colors.secondary }}></div>
                <span style={{ color: colors.text.dark }}>Cross-functional buy-in</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: colors.secondary }}></div>
                <span style={{ color: colors.text.dark }}>Compensation alignment</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: colors.secondary }}></div>
                <span style={{ color: colors.text.dark }}>Executive sponsorship</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Key Elements Section */}
          <div 
            className="rounded-lg shadow-md p-6"
            style={{ backgroundColor: colors.lightBlue }}
          >
            <h2 className="text-xl font-bold mb-4" style={{ color: colors.primary }}>
              Key Elements
            </h2>
            <div className="border-b mb-4" style={{ borderColor: colors.secondary }}></div>
            
            <div className="space-y-4">
              <div>
                <p className="font-bold" style={{ color: colors.primary }}>Channel Vision:</p>
                <p className="ml-4" style={{ color: colors.text.dark }}>Clear articulation of why partners are essential</p>
              </div>
              
              <div>
                <p className="font-bold" style={{ color: colors.primary }}>Executive Alignment:</p>
                <p className="ml-4" style={{ color: colors.text.dark }}>C-suite commitment to channel strategy</p>
              </div>
              
              <div>
                <p className="font-bold" style={{ color: colors.primary }}>Org Readiness:</p>
                <p className="ml-4" style={{ color: colors.text.dark }}>Cross-functional readiness for partner engagement</p>
              </div>
            </div>
          </div>
          
          {/* Core Metrics Section */}
          <div 
            className="rounded-lg shadow-md p-6"
            style={{ backgroundColor: colors.lightBlue }}
          >
            <h2 className="text-xl font-bold mb-4" style={{ color: colors.primary }}>
              Core Metrics
            </h2>
            <div className="border-b mb-4" style={{ borderColor: colors.secondary }}></div>
            
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: colors.secondary }}></div>
                <span style={{ color: colors.text.dark }}>Executive Engagement</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: colors.secondary }}></div>
                <span style={{ color: colors.text.dark }}>Channel Team Size</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: colors.secondary }}></div>
                <span style={{ color: colors.text.dark }}>Channel Budget</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: colors.secondary }}></div>
                <span style={{ color: colors.text.dark }}>Ecosystems Targeted</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: colors.secondary }}></div>
                <span style={{ color: colors.text.dark }}>Partner Satisfaction Score</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Critical Touchpoints */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-center mb-4" style={{ color: colors.primary }}>
            Critical Touchpoints
          </h2>
          <div className="flex justify-center mb-4">
            <div className="border-b w-48" style={{ borderColor: colors.primary }}></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {['Executive Briefings', 'All-Hands Rollout', 'Sales Enablement', 'Channel Kickoff', 'Partner Advisory'].map((item, index) => (
              <div 
                key={index}
                className="px-4 py-2 rounded-full text-center"
                style={{ backgroundColor: colors.secondary, color: colors.text.light }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        
        {/* Footer Note */}
        <div className="text-center text-sm italic" style={{ color: colors.text.muted }}>
          This foundational layer drives the Program Architecture choices and tiering structure in Layer 2.
        </div>
      </div>
    </div>
  );
};

export default Layer1Svg;
