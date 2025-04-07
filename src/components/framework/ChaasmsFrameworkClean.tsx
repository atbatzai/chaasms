
import React from 'react';

const ChaasmsFrameworkClean = () => {
  return (
    <div className="flex flex-col items-center w-full bg-white p-6 font-sans">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-chaasms-blue mb-2">CHAASMS INTERLOCKING SYSTEM</h1>
        <p className="text-gray-600 text-lg">How the Six Layers Build Upon Each Other to Create a Cohesive Framework</p>
      </div>
      
      {/* Main Framework Visualization */}
      <div className="w-full max-w-5xl relative mb-10">
        {/* Central Flow Line with blue gradient */}
        <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-blue-200 via-blue-400 to-chaasms-blue rounded-full -ml-1 z-0"></div>
        
        {/* Layer 1: Foundational Strategy */}
        <div className="flex items-center mb-24 relative">
          <div className="w-5/12 pr-10 text-right">
            <h3 className="text-2xl font-bold text-chaasms-blue mb-3">Layer 1: Foundational Strategy</h3>
            <p className="text-chaasms-text text-lg">Sets the overall channel vision, objectives, and resource allocation approach</p>
          </div>
          
          <div className="w-2/12 flex justify-center">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center border-4 border-chaasms-blue z-10 shadow-md">
              <span className="text-3xl font-bold text-chaasms-blue">1</span>
            </div>
          </div>
          
          <div className="w-5/12 pl-10">
            <div className="bg-blue-50 p-5 rounded-lg border-t-4 border-chaasms-blue shadow-sm">
              <ul className="space-y-2 text-chaasms-text text-lg">
                {/* Using blue dots similar to the website */}
                <li className="flex items-start">
                  <div className="text-chaasms-blue mr-2 mt-1.5 text-lg">•</div>
                  <span>Channel vision & priorities</span>
                </li>
                <li className="flex items-start">
                  <div className="text-chaasms-blue mr-2 mt-1.5 text-lg">•</div>
                  <span>Resource allocation model</span>
                </li>
                <li className="flex items-start">
                  <div className="text-chaasms-blue mr-2 mt-1.5 text-lg">•</div>
                  <span>Partner economic model</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Layer 2: Program Architecture */}
        <div className="flex items-center mb-24 relative">
          <div className="w-5/12 pr-10 text-right">
            <h3 className="text-2xl font-bold text-chaasms-blue mb-3">Layer 2: Program Architecture</h3>
            <p className="text-chaasms-text text-lg">Establishes the structural elements and frameworks for the channel program</p>
          </div>
          
          <div className="w-2/12 flex justify-center">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center border-4 border-chaasms-blue z-10 shadow-md">
              <span className="text-3xl font-bold text-chaasms-blue">2</span>
            </div>
          </div>
          
          <div className="w-5/12 pl-10">
            <div className="bg-blue-50 p-5 rounded-lg border-t-4 border-chaasms-blue shadow-sm">
              <ul className="space-y-2 text-chaasms-text text-lg">
                <li className="flex items-start">
                  <div className="text-chaasms-blue mr-2 mt-1.5 text-lg">•</div>
                  <span>Partner tiers & requirements</span>
                </li>
                <li className="flex items-start">
                  <div className="text-chaasms-blue mr-2 mt-1.5 text-lg">•</div>
                  <span>Benefits structure</span>
                </li>
                <li className="flex items-start">
                  <div className="text-chaasms-blue mr-2 mt-1.5 text-lg">•</div>
                  <span>Channel coverage model</span>
                </li>
              </ul>
            </div>
            
            {/* Connection arrow - From 1 to 2 */}
            <div className="absolute left-1/2 -top-12 -ml-1">
              <div className="h-12 flex flex-col items-center justify-center">
                <div className="bg-blue-50 text-chaasms-blue font-semibold px-3 py-1 rounded-full shadow-sm text-sm mb-1">
                  Drives
                </div>
                <svg width="40" height="10">
                  <polygon points="20,10 10,0 30,0" fill="#0066B3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Layer 3: Ecosystem Strategy */}
        <div className="flex items-center mb-24 relative">
          <div className="w-5/12 pr-10 text-right">
            <h3 className="text-2xl font-bold text-chaasms-blue mb-3">Layer 3: Ecosystem Strategy</h3>
            <p className="text-chaasms-text text-lg">Identifies key ecosystems and platforms to prioritize for maximum impact</p>
          </div>
          
          <div className="w-2/12 flex justify-center">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center border-4 border-chaasms-blue z-10 shadow-md">
              <span className="text-3xl font-bold text-chaasms-blue">3</span>
            </div>
          </div>
          
          <div className="w-5/12 pl-10">
            <div className="bg-blue-50 p-5 rounded-lg border-t-4 border-chaasms-blue shadow-sm">
              <ul className="space-y-2 text-chaasms-text text-lg">
                <li className="flex items-start">
                  <div className="text-chaasms-blue mr-2 mt-1.5 text-lg">•</div>
                  <span>Priority ecosystem mapping</span>
                </li>
                <li className="flex items-start">
                  <div className="text-chaasms-blue mr-2 mt-1.5 text-lg">•</div>
                  <span>Strategic alliances</span>
                </li>
                <li className="flex items-start">
                  <div className="text-chaasms-blue mr-2 mt-1.5 text-lg">•</div>
                  <span>Ecosystem-specific value props</span>
                </li>
              </ul>
            </div>
            
            {/* Connection arrow - From 2 to 3 */}
            <div className="absolute left-1/2 -top-12 -ml-1">
              <div className="h-12 flex flex-col items-center justify-center">
                <div className="bg-blue-50 text-chaasms-blue font-semibold px-3 py-1 rounded-full shadow-sm text-sm mb-1">
                  Establishes
                </div>
                <svg width="40" height="10">
                  <polygon points="20,10 10,0 30,0" fill="#0066B3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Layer 4: Touchpoint & Segmentation */}
        <div className="flex items-center mb-24 relative">
          <div className="w-5/12 pr-10 text-right">
            <h3 className="text-2xl font-bold text-chaasms-blue mb-3">Layer 4: Touchpoint & Segmentation</h3>
            <p className="text-chaasms-text text-lg">Defines partner experience journey and engagement approach by segment</p>
          </div>
          
          <div className="w-2/12 flex justify-center">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center border-4 border-chaasms-blue z-10 shadow-md">
              <span className="text-3xl font-bold text-chaasms-blue">4</span>
            </div>
          </div>
          
          <div className="w-5/12 pl-10">
            <div className="bg-blue-50 p-5 rounded-lg border-t-4 border-chaasms-blue shadow-sm">
              <ul className="space-y-2 text-chaasms-text text-lg">
                <li className="flex items-start">
                  <div className="text-chaasms-blue mr-2 mt-1.5 text-lg">•</div>
                  <span>Partner journey mapping</span>
                </li>
                <li className="flex items-start">
                  <div className="text-chaasms-blue mr-2 mt-1.5 text-lg">•</div>
                  <span>Segmentation strategy</span>
                </li>
                <li className="flex items-start">
                  <div className="text-chaasms-blue mr-2 mt-1.5 text-lg">•</div>
                  <span>Partner enablement model</span>
                </li>
              </ul>
            </div>
            
            {/* Connection arrow - From 3 to 4 */}
            <div className="absolute left-1/2 -top-12 -ml-1">
              <div className="h-12 flex flex-col items-center justify-center">
                <div className="bg-blue-50 text-chaasms-blue font-semibold px-3 py-1 rounded-full shadow-sm text-sm mb-1">
                  Informs
                </div>
                <svg width="40" height="10">
                  <polygon points="20,10 10,0 30,0" fill="#0066B3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Layer 5: GTM Motion */}
        <div className="flex items-center mb-24 relative">
          <div className="w-5/12 pr-10 text-right">
            <h3 className="text-2xl font-bold text-chaasms-blue mb-3">Layer 5: GTM Motion</h3>
            <p className="text-chaasms-text text-lg">Builds go-to-market execution framework for partners across ecosystems</p>
          </div>
          
          <div className="w-2/12 flex justify-center">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center border-4 border-chaasms-blue z-10 shadow-md">
              <span className="text-3xl font-bold text-chaasms-blue">5</span>
            </div>
          </div>
          
          <div className="w-5/12 pl-10">
            <div className="bg-blue-50 p-5 rounded-lg border-t-4 border-chaasms-blue shadow-sm">
              <ul className="space-y-2 text-chaasms-text text-lg">
                <li className="flex items-start">
                  <div className="text-chaasms-blue mr-2 mt-1.5 text-lg">•</div>
                  <span>Co-selling motion</span>
                </li>
                <li className="flex items-start">
                  <div className="text-chaasms-blue mr-2 mt-1.5 text-lg">•</div>
                  <span>Co-marketing programs</span>
                </li>
                <li className="flex items-start">
                  <div className="text-chaasms-blue mr-2 mt-1.5 text-lg">•</div>
                  <span>Marketplace strategy</span>
                </li>
              </ul>
            </div>
            
            {/* Connection arrow - From 4 to 5 */}
            <div className="absolute left-1/2 -top-12 -ml-1">
              <div className="h-12 flex flex-col items-center justify-center">
                <div className="bg-blue-50 text-chaasms-blue font-semibold px-3 py-1 rounded-full shadow-sm text-sm mb-1">
                  Drives
                </div>
                <svg width="40" height="10">
                  <polygon points="20,10 10,0 30,0" fill="#0066B3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Layer 6: Measurement & Scaling */}
        <div className="flex items-center relative">
          <div className="w-5/12 pr-10 text-right">
            <h3 className="text-2xl font-bold text-chaasms-blue mb-3">Layer 6: Measurement & Scaling</h3>
            <p className="text-chaasms-text text-lg">Creates metrics framework and governance model for optimization</p>
          </div>
          
          <div className="w-2/12 flex justify-center">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center border-4 border-chaasms-blue z-10 shadow-md">
              <span className="text-3xl font-bold text-chaasms-blue">6</span>
            </div>
          </div>
          
          <div className="w-5/12 pl-10">
            <div className="bg-blue-50 p-5 rounded-lg border-t-4 border-chaasms-blue shadow-sm">
              <ul className="space-y-2 text-chaasms-text text-lg">
                <li className="flex items-start">
                  <div className="text-chaasms-blue mr-2 mt-1.5 text-lg">•</div>
                  <span>Channel program metrics</span>
                </li>
                <li className="flex items-start">
                  <div className="text-chaasms-blue mr-2 mt-1.5 text-lg">•</div>
                  <span>Partner health indicators</span>
                </li>
                <li className="flex items-start">
                  <div className="text-chaasms-blue mr-2 mt-1.5 text-lg">•</div>
                  <span>Continuous improvement loop</span>
                </li>
              </ul>
            </div>
            
            {/* Connection arrow - From 5 to 6 */}
            <div className="absolute left-1/2 -top-12 -ml-1">
              <div className="h-12 flex flex-col items-center justify-center">
                <div className="bg-blue-50 text-chaasms-blue font-semibold px-3 py-1 rounded-full shadow-sm text-sm mb-1">
                  Feeds
                </div>
                <svg width="40" height="10">
                  <polygon points="20,10 10,0 30,0" fill="#0066B3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Legend/Description */}
      <div className="w-full max-w-3xl bg-blue-50 rounded-lg p-6 border-b-4 border-chaasms-blue shadow-sm">
        <h3 className="text-xl font-bold text-chaasms-blue text-center mb-3">Interlocking Nature of the CHAASMS Framework</h3>
        <p className="text-chaasms-text text-center text-lg leading-relaxed">
          This foundational layer drives the Program Architecture choices and tiering structure in Layer 2.
          Each layer of the CHAASMS framework builds upon the previous, creating a cohesive system 
          for channel strategy development and optimization.
        </p>
      </div>
    </div>
  );
};

export default ChaasmsFrameworkClean;
