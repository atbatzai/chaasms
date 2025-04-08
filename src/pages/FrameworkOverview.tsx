
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';
import ChaasmsFrameworkClean from '@/components/framework/ChaasmsFrameworkClean';
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Home } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const FrameworkOverview = () => {
  const navigate = useNavigate();
  
  // Ensure page starts at the top when navigating to this route
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const navigateToFrameworks = () => {
    navigate('/frameworks');
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="flex-grow pt-16">
        <section className="section-padding relative bg-white pb-8 md:pb-16">
          <div className="chaasms-container">
            {/* Breadcrumb navigation */}
            <Breadcrumb className="mb-4 overflow-x-auto pb-2">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink onClick={navigateToHome} className="cursor-pointer">
                    <Home className="h-3.5 w-3.5" />
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Framework Overview</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            
            {/* Framework Visualization - Optimized for mobile */}
            <div className="w-full overflow-x-auto px-1 py-4">
              <div className="min-w-fit">
                <ChaasmsFrameworkClean />
              </div>
            </div>
            
            {/* Navigation to detailed framework pages - Mobile optimized */}
            <div className="mt-4 md:mt-8 text-center px-2">
              <h3 className="text-xl font-medium text-chaasms-dark mb-2">
                Explore Each Framework Layer
              </h3>
              <p className="text-base text-gray-600 max-w-2xl mx-auto mb-4">
                Dive deeper into each layer to understand the components and implementation strategies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={navigateToHome}
                  variant="outline"
                  className="flex items-center gap-2 w-full sm:w-auto"
                >
                  <ArrowLeft size={16} />
                  <span>Back to Home</span>
                </Button>
                
                <Button
                  onClick={navigateToFrameworks}
                  className="flex items-center gap-2 w-full sm:w-auto"
                  style={{ backgroundColor: '#0f4c81', color: 'white' }}
                >
                  <span>Explore Framework Details</span>
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SectionDivider position="top" color="#f7f7f7" />
      <Footer />
    </div>
  );
};

export default FrameworkOverview;
