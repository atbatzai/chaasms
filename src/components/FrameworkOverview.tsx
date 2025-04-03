
import { CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

const FrameworkOverview = () => {
  return (
    <section id="framework-overview" className="py-16 md:py-24 bg-white">
      <div className="chaasms-container">
        <div className="text-center mb-12">
          <h2 className="section-heading">The CHAASMS Framework</h2>
          <p className="section-subheading">
            A structured, six-layer methodology for building successful channel programs in today's complex ecosystem landscape.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h3 className="text-2xl font-bold text-chaasms-dark mb-4">Why You Need a Comprehensive Framework</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-chaasms-blue mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-chaasms-dark">Navigate Ecosystem Complexity</h4>
                  <p className="text-gray-600">Modern channel strategies require a structured approach to manage diverse partner types and ecosystem platforms.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="text-chaasms-blue mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-chaasms-dark">Accelerate Time-to-Market</h4>
                  <p className="text-gray-600">A well-designed channel framework reduces the time needed to develop and deploy effective partnership strategies.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="text-chaasms-blue mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-chaasms-dark">Drive Partner-Led Growth</h4>
                  <p className="text-gray-600">Strategic channel programs create scalable revenue streams through partner ecosystems.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="text-chaasms-blue mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-chaasms-dark">Achieve Measurable Results</h4>
                  <p className="text-gray-600">Our framework includes built-in KPIs and measurement systems to track and optimize performance.</p>
                </div>
              </div>
              
              <div className="mt-8">
                <Button className="bg-chaasms-blue hover:bg-blue-700">Explore the Framework</Button>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-chaasms-dark mb-4 text-center">The Six Layers of CHAASMS</h3>
              
              <div className="space-y-3">
                <div className="bg-white p-4 rounded shadow-sm border-l-4 border-chaasms-blue">
                  <h4 className="font-semibold text-chaasms-dark">1. Foundational Strategy</h4>
                  <p className="text-sm text-gray-600">Channel Philosophy & Ecosystem Orientation</p>
                </div>
                
                <div className="bg-white p-4 rounded shadow-sm border-l-4 border-chaasms-blue">
                  <h4 className="font-semibold text-chaasms-dark">2. Program Architecture</h4>
                  <p className="text-sm text-gray-600">Partner Types, Tiers & Enablement Blueprint</p>
                </div>
                
                <div className="bg-white p-4 rounded shadow-sm border-l-4 border-chaasms-blue">
                  <h4 className="font-semibold text-chaasms-dark">3. Ecosystem Strategy</h4>
                  <p className="text-sm text-gray-600">SaaS & Marketplace Playbook Matrix</p>
                </div>
                
                <div className="bg-white p-4 rounded shadow-sm border-l-4 border-chaasms-blue">
                  <h4 className="font-semibold text-chaasms-dark">4. Touchpoint & Segmentation</h4>
                  <p className="text-sm text-gray-600">Partner Journey Mapping & Lifecycle Management</p>
                </div>
                
                <div className="bg-white p-4 rounded shadow-sm border-l-4 border-chaasms-blue">
                  <h4 className="font-semibold text-chaasms-dark">5. GTM Motion</h4>
                  <p className="text-sm text-gray-600">Co-Sell, Co-Market & Marketplace Execution</p>
                </div>
                
                <div className="bg-white p-4 rounded shadow-sm border-l-4 border-chaasms-blue">
                  <h4 className="font-semibold text-chaasms-dark">6. Measurement & Scaling</h4>
                  <p className="text-sm text-gray-600">Governance, Data & Optimization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameworkOverview;
