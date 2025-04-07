
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
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
            <NavigationMenu>
              <NavigationMenuList className="space-x-8">
                <NavigationMenuItem>
                  <Link 
                    to="/"
                    className={cn(navItemClasses, inactiveNavItemClasses)}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Home
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={cn(
                      "text-sm font-medium bg-transparent hover:bg-transparent focus:bg-transparent px-5",
                      "text-chaasms-dark hover:text-chaasms-blue"
                    )}
                  >
                    Framework
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[500px] p-6 bg-white shadow-lg">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div
                          onClick={() => scrollToSection('challenges')}
                          className="block select-none space-y-1 p-4 leading-none no-underline outline-none transition-colors hover:bg-chaasms-lightgray cursor-pointer"
                        >
                          <div className="text-sm font-medium text-chaasms-blue mb-1">
                            The Channel Challenge
                          </div>
                          <p className="text-sm leading-snug text-chaasms-text">
                            Understanding today's complex ecosystem landscape
                          </p>
                        </div>
                        <div
                          onClick={() => scrollToSection('framework-overview')}
                          className="block select-none space-y-1 p-4 leading-none no-underline outline-none transition-colors hover:bg-chaasms-lightgray cursor-pointer"
                        >
                          <div className="text-sm font-medium text-chaasms-blue mb-1">
                            Framework Overview
                          </div>
                          <p className="text-sm leading-snug text-chaasms-text">
                            Explore our six-layer comprehensive methodology
                          </p>
                        </div>
                        <div
                          onClick={() => navigateToRoute('/frameworks')}
                          className="block select-none space-y-1 p-4 leading-none no-underline outline-none transition-colors hover:bg-chaasms-lightgray cursor-pointer"
                        >
                          <div className="text-sm font-medium text-chaasms-blue mb-1">
                            Framework Layers
                          </div>
                          <p className="text-sm leading-snug text-chaasms-text">
                            Detailed view of each framework layer
                          </p>
                        </div>
                        <div
                          onClick={() => scrollToSection('implementation')}
                          className="block select-none space-y-1 p-4 leading-none no-underline outline-none transition-colors hover:bg-chaasms-lightgray cursor-pointer"
                        >
                          <div className="text-sm font-medium text-chaasms-blue mb-1">
                            Implementation
                          </div>
                          <p className="text-sm leading-snug text-chaasms-text">
                            Our four-phase implementation approach
                          </p>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <span 
                    onClick={() => scrollToSection('services')}
                    className={cn(navItemClasses, inactiveNavItemClasses)}
                  >
                    Services
                  </span>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <span
                    onClick={() => navigateToRoute('/frameworks')}
                    className={cn(navItemClasses, inactiveNavItemClasses)}
                  >
                    CHAASMS Framework
                  </span>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <span 
                    onClick={() => scrollToSection('resources')}
                    className={cn(navItemClasses, inactiveNavItemClasses)}
                  >
                    Resources
                  </span>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <span 
                    onClick={() => scrollToSection('contact')}
                    className={cn(navItemClasses, inactiveNavItemClasses)}
                  >
                    Contact
                  </span>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
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
              
              <div className="px-4 py-3 flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-chaasms-dark">Framework</span>
                  <ChevronDown size={16} className="text-gray-400" />
                </div>
                <div className="pl-4 mt-3 space-y-2 border-l border-chaasms-lightgray">
                  <span 
                    onClick={() => scrollToSection('challenges')}
                    className="block py-2 text-chaasms-dark hover:text-chaasms-blue cursor-pointer"
                  >
                    The Channel Challenge
                  </span>
                  <span 
                    onClick={() => scrollToSection('framework-overview')}
                    className="block py-2 text-chaasms-dark hover:text-chaasms-blue cursor-pointer"
                  >
                    Framework Overview
                  </span>
                  <span
                    onClick={() => navigateToRoute('/frameworks')}
                    className="block py-2 text-chaasms-dark hover:text-chaasms-blue cursor-pointer"
                  >
                    Framework Layers
                  </span>
                  <span 
                    onClick={() => scrollToSection('implementation')}
                    className="block py-2 text-chaasms-dark hover:text-chaasms-blue cursor-pointer"
                  >
                    Implementation
                  </span>
                </div>
              </div>
              
              <span 
                onClick={() => scrollToSection('services')}
                className="px-4 py-3 text-chaasms-dark hover:text-chaasms-blue cursor-pointer"
              >
                Services
              </span>
              
              <span
                onClick={() => navigateToRoute('/frameworks')}
                className="px-4 py-3 text-chaasms-dark hover:text-chaasms-blue cursor-pointer"
              >
                CHAASMS Framework
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
