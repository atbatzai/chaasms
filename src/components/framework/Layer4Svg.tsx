
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const Layer4Svg = () => {
  // Define consistent color palette based on site theme
  const colors = {
    primary: '#0f4c81',  // Deep blue for main elements
    secondary: '#3498db', // Medium blue for secondary elements
    accent: '#e74c3c',    // Accent color for highlights
    light: '#f8fafc',     // Light background
    lightBlue: '#e6f7ff', // Light blue background
    text: {
      dark: '#2c3e50',    // Dark text
      light: '#ffffff',   // Light text
      muted: '#7f8c8d'    // Muted text
    },
    tiers: {
      platinum: '#1e5b94', // More harmonious tier colors
      gold: '#3474a5',     // Updated to be more symmetrical with other blues
      silver: '#5499c7',   // Lighter blue
      registered: '#a0aec0' // Light blue-gray
    }
  };
  
  return (
    <div className="flex flex-col w-full h-full bg-white p-6 font-sans">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-center text-chaasms-blue mb-2">
          LAYER 4: PARTNER SEGMENTATION MODEL
        </h1>
        <p className="text-sm text-chaasms-text">
          Traditional and ecosystem-based segmentation approaches
        </p>
      </div>
      
      {/* Tabs Integration using shadcn UI components */}
      <Tabs defaultValue="traditional" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="traditional">Traditional View</TabsTrigger>
          <TabsTrigger value="ecosystem">Ecosystem View</TabsTrigger>
          <TabsTrigger value="solution">Solution Areas</TabsTrigger>
        </TabsList>
        
        {/* Traditional Segmentation Tab */}
        <TabsContent value="traditional" className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-chaasms-blue mb-4">Value-Based Segmentation</h3>
          
          {/* Simplified Pyramid Visualization */}
          <div className="mb-10">
            {/* Strategic Layer */}
            <div className="flex items-center mb-4">
              <div className="w-1/2">
                <div className="h-16 bg-chaasms-blue flex items-center justify-center">
                  <span className="text-white font-medium">Strategic</span>
                </div>
              </div>
              <div className="w-1/2 pl-6">
                <h4 className="font-bold text-chaasms-dark">Strategic (5%)</h4>
                <p className="text-sm text-chaasms-text">25% of revenue</p>
              </div>
            </div>
            
            {/* Growth Layer */}
            <div className="flex items-center mb-4">
              <div className="w-3/5">
                <div className="h-16 bg-blue-600 flex items-center justify-center">
                  <span className="text-white font-medium">Growth</span>
                </div>
              </div>
              <div className="w-2/5 pl-6">
                <h4 className="font-bold text-chaasms-dark">Growth (15%)</h4>
                <p className="text-sm text-chaasms-text">65% of revenue</p>
              </div>
            </div>
            
            {/* Emerging Layer */}
            <div className="flex items-center">
              <div className="w-4/5">
                <div className="h-16 bg-blue-300 flex items-center justify-center">
                  <span className="text-blue-900 font-medium">Emerging</span>
                </div>
              </div>
              <div className="w-1/5 pl-6">
                <h4 className="font-bold text-chaasms-dark">Emerging (80%)</h4>
                <p className="text-sm text-chaasms-text">20% of revenue</p>
              </div>
            </div>
          </div>
          
          {/* Lifecycle Metrics Section */}
          <div className="mt-10 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-bold text-chaasms-blue mb-5 pb-2 border-b border-blue-200">Lifecycle Metrics</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              <div className="space-y-6">
                {/* Left Column */}
                <div>
                  <h4 className="font-medium text-chaasms-blue mb-3">Onboarding Success</h4>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Completion Rate</span>
                    <span className="font-bold text-chaasms-dark">85%+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Time to First Deal</span>
                    <span className="font-bold text-chaasms-dark">&lt;90 days</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-chaasms-blue mb-3">Growth Metrics</h4>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">YoY Revenue Growth</span>
                    <span className="font-bold text-chaasms-dark">24%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Solution Adoption</span>
                    <span className="font-bold text-chaasms-dark">3.2 products</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                {/* Right Column */}
                <div>
                  <h4 className="font-medium text-chaasms-blue mb-3">Partner Health</h4>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Satisfaction Score</span>
                    <span className="font-bold text-chaasms-dark">4.5/5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Annual Retention</span>
                    <span className="font-bold text-chaasms-dark">92%</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-chaasms-blue mb-3">Engagement</h4>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Training Completion</span>
                    <span className="font-bold text-chaasms-dark">78%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Portal Activity</span>
                    <span className="font-bold text-chaasms-dark">Weekly</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        {/* Ecosystem Segmentation Tab */}
        <TabsContent value="ecosystem" className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h3 className="text-lg font-bold text-chaasms-blue mb-2">Ecosystem-Based Segmentation</h3>
            <p className="text-chaasms-text">
              Partners perform differently across technology ecosystems. This view segments partners by their 
              expertise and impact within each major platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Microsoft Ecosystem */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="bg-chaasms-blue text-white p-3">
                <h4 className="font-bold">Microsoft Ecosystem</h4>
              </div>
              <div className="p-4">
                {/* Strategic */}
                <div className="mb-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Strategic (3%)</span>
                    <span>30% of ecosystem revenue</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-chaasms-blue h-2 rounded-full" style={{width: '30%'}}></div>
                  </div>
                </div>
                
                {/* Growth */}
                <div className="mb-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Growth (12%)</span>
                    <span>45% of ecosystem revenue</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '45%'}}></div>
                  </div>
                </div>
                
                {/* Emerging */}
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Emerging (85%)</span>
                    <span>25% of ecosystem revenue</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-300 h-2 rounded-full" style={{width: '25%'}}></div>
                  </div>
                </div>
                
                <div className="mt-4 pt-3 border-t border-blue-200">
                  <h5 className="text-sm font-bold text-chaasms-dark mb-1">Focus Areas</h5>
                  <ul className="text-xs space-y-1">
                    <li>• Azure Cloud & Power Platform</li>
                    <li>• Dynamics 365 Integration</li>
                    <li>• Technical certification emphasis</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Salesforce Ecosystem */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="bg-chaasms-blue text-white p-3">
                <h4 className="font-bold">Salesforce Ecosystem</h4>
              </div>
              <div className="p-4">
                {/* Strategic */}
                <div className="mb-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Strategic (8%)</span>
                    <span>40% of ecosystem revenue</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-chaasms-blue h-2 rounded-full" style={{width: '40%'}}></div>
                  </div>
                </div>
                
                {/* Growth */}
                <div className="mb-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Growth (22%)</span>
                    <span>35% of ecosystem revenue</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '35%'}}></div>
                  </div>
                </div>
                
                {/* Emerging */}
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Emerging (70%)</span>
                    <span>25% of ecosystem revenue</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-300 h-2 rounded-full" style={{width: '25%'}}></div>
                  </div>
                </div>
                
                <div className="mt-4 pt-3 border-t border-blue-200">
                  <h5 className="text-sm font-bold text-chaasms-dark mb-1">Focus Areas</h5>
                  <ul className="text-xs space-y-1">
                    <li>• AppExchange integrations</li>
                    <li>• Sales & Service Cloud expertise</li>
                    <li>• Industry cloud solutions</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* NetSuite Ecosystem */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="bg-chaasms-blue text-white p-3">
                <h4 className="font-bold">NetSuite Ecosystem</h4>
              </div>
              <div className="p-4">
                {/* Strategic */}
                <div className="mb-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Strategic (4%)</span>
                    <span>35% of ecosystem revenue</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-chaasms-blue h-2 rounded-full" style={{width: '35%'}}></div>
                  </div>
                </div>
                
                {/* Growth */}
                <div className="mb-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Growth (16%)</span>
                    <span>40% of ecosystem revenue</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '40%'}}></div>
                  </div>
                </div>
                
                {/* Emerging */}
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Emerging (80%)</span>
                    <span>25% of ecosystem revenue</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-300 h-2 rounded-full" style={{width: '25%'}}></div>
                  </div>
                </div>
                
                <div className="mt-4 pt-3 border-t border-blue-200">
                  <h5 className="text-sm font-bold text-chaasms-dark mb-1">Focus Areas</h5>
                  <ul className="text-xs space-y-1">
                    <li>• ERP implementation expertise</li>
                    <li>• SuiteApp development</li>
                    <li>• Financial process automation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-gray-50 p-4 rounded-lg">
            <h4 className="font-bold text-chaasms-dark mb-3">Ecosystem-Specific Metrics</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h5 className="font-medium text-chaasms-blue mb-2">Microsoft</h5>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs">Certification Rate</span>
                  <span className="font-bold text-chaasms-dark">84%</span>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs">Co-Sell Deals</span>
                  <span className="font-bold text-chaasms-dark">48</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs">Azure Consumption</span>
                  <span className="font-bold text-chaasms-dark">+32%</span>
                </div>
              </div>
              
              <div>
                <h5 className="font-medium text-chaasms-blue mb-2">Salesforce</h5>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs">Partner Dev. Organization</span>
                  <span className="font-bold text-chaasms-dark">12%</span>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs">AppExchange Apps</span>
                  <span className="font-bold text-chaasms-dark">26</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs">Expert Consultants</span>
                  <span className="font-bold text-chaasms-dark">155</span>
                </div>
              </div>
              
              <div>
                <h5 className="font-medium text-chaasms-blue mb-2">NetSuite</h5>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs">Solution Provider</span>
                  <span className="font-bold text-chaasms-dark">24%</span>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs">SuiteApp Adoption</span>
                  <span className="font-bold text-chaasms-dark">+42%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs">Implementations</span>
                  <span className="font-bold text-chaasms-dark">78</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        {/* Solution Areas Tab */}
        <TabsContent value="solution" className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h3 className="text-lg font-bold text-chaasms-blue mb-2">Solution Area Segmentation</h3>
            <p className="text-chaasms-text">
              Partners specialize in different solution areas across ecosystems. This view segments partners 
              based on their expertise and focus areas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Integration Solutions */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="bg-chaasms-blue text-white p-3">
                <h4 className="font-bold">Integration Solutions</h4>
                <p className="text-white text-xs">Data integration, API management, workflow automation</p>
              </div>
              <div className="p-4">
                <h5 className="font-medium text-chaasms-blue mb-2">Partner Distribution</h5>
                <div className="flex items-center mb-4">
                  <div className="w-1/4 text-right pr-2">
                    <span className="text-xs font-medium">By Ecosystem</span>
                  </div>
                  <div className="w-3/4 h-8 flex"> {/* Increased height from h-6 to h-8 */}
                    <div className="bg-chaasms-blue h-full text-xs text-white flex items-center justify-center px-1" style={{width: '35%'}}>
                      <span className="whitespace-nowrap overflow-hidden text-ellipsis">MS 35%</span>
                    </div>
                    <div className="bg-blue-600 h-full text-xs text-white flex items-center justify-center px-1" style={{width: '40%'}}>
                      <span className="whitespace-nowrap overflow-hidden text-ellipsis">SF 40%</span>
                    </div>
                    <div className="bg-blue-400 h-full text-xs text-white flex items-center justify-center px-1" style={{width: '25%'}}>
                      <span className="whitespace-nowrap overflow-hidden text-ellipsis">NS 25%</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-3 border-t border-blue-200">
                  <h5 className="text-sm font-bold text-chaasms-dark mb-1">Key Metrics</h5>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs">Connectors Built</span>
                      <span className="text-xs font-bold">186</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs">Avg Integration Time</span>
                      <span className="text-xs font-bold">14 days</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Data Analytics Solutions */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="bg-chaasms-blue text-white p-3">
                <h4 className="font-bold">Data Analytics Solutions</h4>
                <p className="text-white text-xs">Business intelligence, reporting, predictive analytics</p>
              </div>
              <div className="p-4">
                <h5 className="font-medium text-chaasms-blue mb-2">Partner Distribution</h5>
                <div className="flex items-center mb-4">
                  <div className="w-1/4 text-right pr-2">
                    <span className="text-xs font-medium">By Ecosystem</span>
                  </div>
                  <div className="w-3/4 h-8 flex"> {/* Increased height from h-6 to h-8 */}
                    <div className="bg-chaasms-blue h-full text-xs text-white flex items-center justify-center px-1" style={{width: '50%'}}>
                      <span className="whitespace-nowrap overflow-hidden text-ellipsis">MS 50%</span>
                    </div>
                    <div className="bg-blue-600 h-full text-xs text-white flex items-center justify-center px-1" style={{width: '30%'}}>
                      <span className="whitespace-nowrap overflow-hidden text-ellipsis">SF 30%</span>
                    </div>
                    <div className="bg-blue-400 h-full text-xs text-white flex items-center justify-center px-1" style={{width: '20%'}}>
                      <span className="whitespace-nowrap overflow-hidden text-ellipsis">NS 20%</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-3 border-t border-blue-200">
                  <h5 className="text-sm font-bold text-chaasms-dark mb-1">Key Metrics</h5>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs">Dashboards Created</span>
                      <span className="text-xs font-bold">432</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs">Client Satisfaction</span>
                      <span className="text-xs font-bold">4.8/5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Industry Distribution */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="bg-chaasms-blue text-white p-3">
                <h4 className="font-bold">Industry Vertical Solutions</h4>
                <p className="text-white text-xs">Healthcare, Financial Services, Manufacturing, Retail</p>
              </div>
              <div className="p-4">
                <h5 className="font-medium text-chaasms-blue mb-2">Partner Distribution</h5>
                <div className="flex items-center mb-4">
                  <div className="w-1/4 text-right pr-2">
                    <span className="text-xs font-medium">By Industry</span>
                  </div>
                  <div className="w-3/4 h-8 flex"> {/* Increased height from h-6 to h-8 */}
                    <div className="bg-chaasms-blue h-full text-xs text-white flex items-center justify-center px-1" style={{width: '35%'}}>
                      <span className="whitespace-nowrap overflow-hidden text-ellipsis">HC 35%</span>
                    </div>
                    <div className="bg-blue-700 h-full text-xs text-white flex items-center justify-center px-1" style={{width: '30%'}}>
                      <span className="whitespace-nowrap overflow-hidden text-ellipsis">FS 30%</span>
                    </div>
                    <div className="bg-blue-600 h-full text-xs text-white flex items-center justify-center px-1" style={{width: '20%'}}>
                      <span className="whitespace-nowrap overflow-hidden text-ellipsis">MFG 20%</span>
                    </div>
                    <div className="bg-blue-500 h-full text-xs text-white flex items-center justify-center px-1" style={{width: '15%'}}>
                      <span className="whitespace-nowrap overflow-hidden text-ellipsis">RTL 15%</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-3 border-t border-blue-200">
                  <h5 className="text-sm font-bold text-chaasms-dark mb-1">Key Metrics</h5>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs">Vertical Solutions</span>
                      <span className="text-xs font-bold">27</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs">Industry Experts</span>
                      <span className="text-xs font-bold">93</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Cloud Modernization */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="bg-chaasms-blue text-white p-3">
                <h4 className="font-bold">Cloud Modernization</h4>
                <p className="text-white text-xs">Migration, Infrastructure, DevOps, Application modernization</p>
              </div>
              <div className="p-4">
                <h5 className="font-medium text-chaasms-blue mb-2">Partner Distribution</h5>
                <div className="flex items-center mb-4">
                  <div className="w-1/4 text-right pr-2">
                    <span className="text-xs font-medium">By Ecosystem</span>
                  </div>
                  <div className="w-3/4 h-8 flex"> {/* Increased height from h-6 to h-8 */}
                    <div className="bg-chaasms-blue h-full text-xs text-white flex items-center justify-center px-1" style={{width: '60%'}}>
                      <span className="whitespace-nowrap overflow-hidden text-ellipsis">MS 60%</span>
                    </div>
                    <div className="bg-blue-600 h-full text-xs text-white flex items-center justify-center px-1" style={{width: '25%'}}>
                      <span className="whitespace-nowrap overflow-hidden text-ellipsis">SF 25%</span>
                    </div>
                    <div className="bg-blue-400 h-full text-xs text-white flex items-center justify-center px-1" style={{width: '15%'}}>
                      <span className="whitespace-nowrap overflow-hidden text-ellipsis">NS 15%</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-3 border-t border-blue-200">
                  <h5 className="text-sm font-bold text-chaasms-dark mb-1">Key Metrics</h5>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs">Migrations Completed</span>
                      <span className="text-xs font-bold">124</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs">Time Saved</span>
                      <span className="text-xs font-bold">38%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-bold text-chaasms-dark mb-2">Solution Area Success Factors</h4>
            <p className="text-sm text-chaasms-text mb-3">
              Different solution areas require specific partner enablement approaches and success metrics:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h5 className="font-medium text-chaasms-blue">Integration Success</h5>
                <ul className="list-disc ml-4 text-xs space-y-1 mt-1">
                  <li>Technical connector certifications</li>
                  <li>Solution accelerator development</li>
                  <li>Cross-ecosystem expertise</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-chaasms-blue">Analytics Success</h5>
                <ul className="list-disc ml-4 text-xs space-y-1 mt-1">
                  <li>Data governance frameworks</li>
                  <li>Industry benchmarking capabilities</li>
                  <li>AI/ML modeling competency</li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-6 text-center">
        <p className="text-sm italic text-chaasms-blue">
          This multi-dimensional segmentation approach drives GTM motion design and execution in Layer 5.
        </p>
      </div>
    </div>
  );
};

export default Layer4Svg;
