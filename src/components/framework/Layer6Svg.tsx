
import React from 'react';

const Layer6Svg = () => {
  return (
    <div className="flex flex-col items-center w-full h-full bg-slate-50 p-6 font-sans">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-chaasms-blue">LAYER 6: MEASUREMENT &amp; SCALING</h1>
        <p className="text-chaasms-dark mt-1">KPIs, governance, optimization loop</p>
        <div className="mt-2">
          <h2 className="text-xl font-semibold text-chaasms-blue">Channel Program Control Tower</h2>
          <div className="h-1 w-64 bg-chaasms-blue rounded mx-auto mt-2"></div>
        </div>
      </div>
      
      {/* Control Tower Banner */}
      <div className="w-full bg-chaasms-blue rounded-t-lg p-3 mb-0 text-center">
        <h3 className="text-lg font-bold text-white">Channel Program Control Tower</h3>
      </div>
      
      {/* Metrics Grid - 3 columns */}
      <div className="flex flex-col md:flex-row w-full mb-8 shadow-md">
        {/* Revenue Metrics Card */}
        <div className="w-full md:w-1/3 bg-white border-b md:border-b-0 md:border-r border-slate-200 p-5">
          <h4 className="font-semibold text-chaasms-blue text-center mb-3 pb-1 border-b border-blue-200">Revenue Metrics</h4>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-chaasms-dark">Channel Revenue</span>
                <span className="font-bold text-chaasms-blue text-lg">$3.2M</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div className="bg-chaasms-blue h-2 rounded-full w-4/5"></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-chaasms-dark">YoY Growth</span>
                <span className="font-bold text-chaasms-blue text-lg">42%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div className="bg-chaasms-blue h-2 rounded-full w-2/5"></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-chaasms-dark">Revenue % via Partners</span>
                <span className="font-bold text-chaasms-blue text-lg">35%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div className="bg-chaasms-blue h-2 rounded-full w-1/3"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Partner Metrics Card */}
        <div className="w-full md:w-1/3 bg-white border-b md:border-b-0 md:border-r border-slate-200 p-5">
          <h4 className="font-semibold text-chaasms-blue text-center mb-3 pb-1 border-b border-blue-200">Partner Metrics</h4>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-chaasms-dark">Active Partners</span>
                <span className="font-bold text-chaasms-blue text-lg">78</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div className="bg-chaasms-blue h-2 rounded-full w-3/4"></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-chaasms-dark">Certified Partners</span>
                <span className="font-bold text-chaasms-blue text-lg">62%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div className="bg-chaasms-blue h-2 rounded-full w-3/5"></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-chaasms-dark">Partner Health Score</span>
                <span className="font-bold text-chaasms-blue text-lg">73/100</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div className="bg-chaasms-blue h-2 rounded-full w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Program Metrics Card */}
        <div className="w-full md:w-1/3 bg-white p-5">
          <h4 className="font-semibold text-chaasms-blue text-center mb-3 pb-1 border-b border-blue-200">Program Metrics</h4>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-chaasms-dark">Deal Registration Rate</span>
                <span className="font-bold text-chaasms-blue text-lg">85%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div className="bg-chaasms-blue h-2 rounded-full w-4/5"></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-chaasms-dark">Partner Satisfaction</span>
                <span className="font-bold text-chaasms-blue text-lg">4.6/5</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div className="bg-chaasms-blue h-2 rounded-full w-11/12"></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-chaasms-dark">MDF ROI</span>
                <span className="font-bold text-chaasms-blue text-lg">3.2x</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div className="bg-chaasms-blue h-2 rounded-full w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Middle Section - Two Column Layout */}
      <div className="flex flex-col md:flex-row w-full gap-6 mb-6">
        {/* Partner Health Indicators */}
        <div className="w-full md:w-1/2 bg-white rounded-lg shadow-md overflow-hidden border border-slate-200">
          <div className="p-4">
            <h3 className="text-lg font-bold text-chaasms-blue text-center mb-2">Partner Health Indicators</h3>
            <div className="h-1 w-48 bg-chaasms-blue rounded mx-auto mb-4"></div>
            
            <div className="space-y-5 px-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-chaasms-dark">Strategic Partners</span>
                  <span className="font-bold text-chaasms-blue">92%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2.5">
                  <div className="bg-green-500 h-2.5 rounded-full w-11/12"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-chaasms-dark">Growth Partners</span>
                  <span className="font-bold text-chaasms-blue">78%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2.5">
                  <div className="bg-chaasms-blue h-2.5 rounded-full w-4/5"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-chaasms-dark">Emerging Partners</span>
                  <span className="font-bold text-chaasms-blue">65%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2.5">
                  <div className="bg-yellow-500 h-2.5 rounded-full w-2/3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Ecosystem Distribution */}
        <div className="w-full md:w-1/2 bg-white rounded-lg shadow-md overflow-hidden border border-slate-200">
          <div className="p-4">
            <h3 className="text-lg font-bold text-chaasms-blue text-center mb-2">Ecosystem Distribution</h3>
            <div className="h-1 w-48 bg-chaasms-blue rounded mx-auto mb-4"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 px-2">
              <div className="bg-soft-blue rounded-lg p-3 border border-blue-100 shadow-sm">
                <div className="flex justify-between">
                  <span className="font-medium text-chaasms-blue">ERP Ecosystem</span>
                  <span className="font-bold text-chaasms-blue">32%</span>
                </div>
              </div>
              
              <div className="bg-soft-blue rounded-lg p-3 border border-blue-100 shadow-sm">
                <div className="flex justify-between">
                  <span className="font-medium text-chaasms-blue">CRM Ecosystem</span>
                  <span className="font-bold text-chaasms-blue">28%</span>
                </div>
              </div>
              
              <div className="bg-soft-blue rounded-lg p-3 border border-blue-100 shadow-sm">
                <div className="flex justify-between">
                  <span className="font-medium text-chaasms-blue">Cloud Platforms</span>
                  <span className="font-bold text-chaasms-blue">24%</span>
                </div>
              </div>
              
              <div className="bg-soft-blue rounded-lg p-3 border border-blue-100 shadow-sm">
                <div className="flex justify-between">
                  <span className="font-medium text-chaasms-blue">E-commerce</span>
                  <span className="font-bold text-chaasms-blue">16%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Section - Two Column Layout */}
      <div className="flex flex-col md:flex-row w-full gap-6 mb-6">
        {/* Measurement Framework */}
        <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md overflow-hidden border border-slate-200">
          <div className="p-4">
            <h3 className="text-lg font-bold text-chaasms-blue text-center mb-2">Measurement Framework</h3>
            <div className="h-1 w-48 bg-chaasms-blue rounded mx-auto mb-4"></div>
            
            <div className="space-y-3 px-2">
              <div className="bg-soft-blue rounded-lg p-3 shadow-sm">
                <div className="flex items-center">
                  <div className="bg-chaasms-blue text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-2">1</div>
                  <span className="font-medium text-chaasms-dark">Partner Health Score Model</span>
                </div>
              </div>
              
              <div className="bg-soft-blue rounded-lg p-3 shadow-sm">
                <div className="flex items-center">
                  <div className="bg-chaasms-blue text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-2">2</div>
                  <span className="font-medium text-chaasms-dark">Program Governance Structure</span>
                </div>
              </div>
              
              <div className="bg-soft-blue rounded-lg p-3 shadow-sm">
                <div className="flex items-center">
                  <div className="bg-chaasms-blue text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-2">3</div>
                  <span className="font-medium text-chaasms-dark">Continuous Improvement Loop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Implementation Roadmap */}
        <div className="w-full md:w-2/3 bg-white rounded-lg shadow-md overflow-hidden border border-slate-200">
          <div className="p-4">
            <h3 className="text-lg font-bold text-chaasms-blue text-center mb-2">Implementation Roadmap</h3>
            <div className="h-1 w-48 bg-chaasms-blue rounded mx-auto mb-4"></div>
            
            <div className="bg-chaasms-blue text-white font-semibold text-center py-2 rounded mb-3">
              Phased Channel Program Development
            </div>
            
            <div className="space-y-3 px-4">
              <div className="flex flex-col sm:flex-row sm:items-center">
                <div className="bg-soft-blue text-chaasms-blue font-bold rounded-lg w-full sm:w-20 text-center p-1 mb-1 sm:mb-0 sm:mr-3">Phase 1</div>
                <span className="font-medium text-chaasms-dark">Foundation &amp; Architecture (Months 1-3)</span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center">
                <div className="bg-soft-blue text-chaasms-blue font-bold rounded-lg w-full sm:w-20 text-center p-1 mb-1 sm:mb-0 sm:mr-3">Phase 2</div>
                <span className="font-medium text-chaasms-dark">Partner Activation (Months 4-6)</span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center">
                <div className="bg-soft-blue text-chaasms-blue font-bold rounded-lg w-full sm:w-20 text-center p-1 mb-1 sm:mb-0 sm:mr-3">Phase 3</div>
                <span className="font-medium text-chaasms-dark">GTM Acceleration (Months 7-9)</span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center">
                <div className="bg-soft-blue text-chaasms-blue font-bold rounded-lg w-full sm:w-20 text-center p-1 mb-1 sm:mb-0 sm:mr-3">Phase 4</div>
                <span className="font-medium text-chaasms-dark">Optimization &amp; Scale (Months 10-12)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Note */}
      <div className="text-center text-chaasms-dark text-sm italic mb-2">
        Measurement insights refine the foundational strategy in Layer 1, creating a continuous improvement loop.
      </div>
    </div>
  );
};

export default Layer6Svg;
