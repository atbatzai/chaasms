
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from 'react-router-dom';
import { cn } from "@/lib/utils";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  
  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Updated navigation function to ensure top-of-page when navigating to a new route
  const navigateToRoute = (route: string) => {
    navigate(route);
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    // If we're on a different page, navigate to home first
    if (window.location.pathname !== '/') {
      navigate('/');
      // Need a small timeout to allow navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -100; // Adjust for header height
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -100; // Adjust for header height
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };
  
  // Custom styles for navigation menu items
  const navItemClasses = "px-5 py-2 text-sm font-medium transition-colors cursor-pointer";
  const activeNavItemClasses = "text-chaasms-blue";
  const inactiveNavItemClasses = "text-chaasms-dark hover:text-chaasms-blue";

  return (
    <header 
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        ${scrolled ? 'bg-white shadow-sm backdrop-blur-sm py-3' : 'bg-white py-5'}`}
    >
      <div className="chaasms-container">
        <div className="flex justify-between items-center">
          <Link 
            to="/"
            className="text-2xl font-normal text-chaasms-blue cursor-pointer"
            onClick={() => window.scrollTo(0, 0)}
          >
            CHAASMS
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            <nav className="flex items-center space-x-8">
              <Link 
                to="/"
                className={cn(navItemClasses, inactiveNavItemClasses)}
                onClick={() => window.scrollTo(0, 0)}
              >
                Home
              </Link>
              
              <span 
                onClick={() => scrollToSection('services')}
                className={cn(navItemClasses, inactiveNavItemClasses)}
              >
                Services
              </span>
              
              <span
                onClick={() => navigateToRoute('/framework-overview')}
                className={cn(navItemClasses, inactiveNavItemClasses)}
              >
                Framework Overview
              </span>
              
              <span
                onClick={() => navigateToRoute('/frameworks')}
                className={cn(navItemClasses, inactiveNavItemClasses)}
              >
                Framework Layers
              </span>
              
              <span 
                onClick={() => scrollToSection('resources')}
                className={cn(navItemClasses, inactiveNavItemClasses)}
              >
                Resources
              </span>
              
              <span 
                onClick={() => scrollToSection('contact')}
                className={cn(navItemClasses, inactiveNavItemClasses)}
              >
                Contact
              </span>
            </nav>
            
            <Button 
              className="btn-primary"
              onClick={() => scrollToSection('contact')}
            >
              Book a Consultation
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-chaasms-dark focus:outline-none" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 mt-4 bg-white shadow-md border-t border-chaasms-lightgray animate-fade-in">
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/"
                className="px-4 py-3 text-chaasms-dark hover:text-chaasms-blue cursor-pointer"
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.scrollTo(0, 0);
                }}
              >
                Home
              </Link>
              
              <span 
                onClick={() => scrollToSection('services')}
                className="px-4 py-3 text-chaasms-dark hover:text-chaasms-blue cursor-pointer"
              >
                Services
              </span>
              
              <span
                onClick={() => navigateToRoute('/framework-overview')}
                className="px-4 py-3 text-chaasms-dark hover:text-chaasms-blue cursor-pointer"
              >
                Framework Overview
              </span>
              
              <span
                onClick={() => navigateToRoute('/frameworks')}
                className="px-4 py-3 text-chaasms-dark hover:text-chaasms-blue cursor-pointer"
              >
                Framework Layers
              </span>
              
              <span 
                onClick={() => scrollToSection('resources')}
                className="px-4 py-3 text-chaasms-dark hover:text-chaasms-blue cursor-pointer"
              >
                Resources
              </span>
              
              <span 
                onClick={() => scrollToSection('contact')}
                className="px-4 py-3 text-chaasms-dark hover:text-chaasms-blue cursor-pointer"
              >
                Contact
              </span>
              
              <div className="px-4 pt-4 pb-2">
                <Button 
                  className="w-full btn-primary"
                  onClick={() => scrollToSection('contact')}
                >
                  Book a Consultation
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
