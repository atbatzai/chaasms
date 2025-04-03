
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
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
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
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

  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  // Custom styles for navigation menu items
  const navItemClasses = "px-5 py-2 text-sm font-medium transition-colors";
  const activeNavItemClasses = "text-chaasms-blue";
  const inactiveNavItemClasses = "text-chaasms-dark hover:text-chaasms-blue";

  return (
    <header 
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        ${scrolled ? 'bg-white shadow-sm backdrop-blur-sm py-3' : 'bg-white py-5'}`}
    >
      <div className="chaasms-container">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-normal text-chaasms-blue">
            CHAASMS
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            <NavigationMenu>
              <NavigationMenuList className="space-x-8">
                <NavigationMenuItem>
                  <Link 
                    to="/" 
                    className={cn(navItemClasses, isActive('/') ? activeNavItemClasses : inactiveNavItemClasses)}
                  >
                    Home
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={cn(
                      "text-sm font-medium bg-transparent hover:bg-transparent focus:bg-transparent px-5", 
                      isActive('/challenges') || isActive('/framework') || isActive('/implementation')
                        ? "text-chaasms-blue" 
                        : "text-chaasms-dark hover:text-chaasms-blue"
                    )}
                  >
                    Framework
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[500px] p-6 bg-white shadow-lg">
                      <div className="grid gap-6 md:grid-cols-2">
                        <Link
                          to="/challenges"
                          className="block select-none space-y-1 p-4 leading-none no-underline outline-none transition-colors hover:bg-chaasms-lightgray"
                        >
                          <div className="text-sm font-medium text-chaasms-blue mb-1">
                            The Channel Challenge
                          </div>
                          <p className="text-sm leading-snug text-chaasms-text">
                            Understanding today's complex ecosystem landscape
                          </p>
                        </Link>
                        <Link
                          to="/framework"
                          className="block select-none space-y-1 p-4 leading-none no-underline outline-none transition-colors hover:bg-chaasms-lightgray"
                        >
                          <div className="text-sm font-medium text-chaasms-blue mb-1">
                            Framework Overview
                          </div>
                          <p className="text-sm leading-snug text-chaasms-text">
                            Explore our six-layer comprehensive methodology
                          </p>
                        </Link>
                        <Link
                          to="/implementation"
                          className="block select-none space-y-1 p-4 leading-none no-underline outline-none transition-colors hover:bg-chaasms-lightgray"
                        >
                          <div className="text-sm font-medium text-chaasms-blue mb-1">
                            Implementation
                          </div>
                          <p className="text-sm leading-snug text-chaasms-text">
                            Our four-phase implementation approach
                          </p>
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link 
                    to="/services" 
                    className={cn(navItemClasses, isActive('/services') ? activeNavItemClasses : inactiveNavItemClasses)}
                  >
                    Services
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link 
                    to="/about" 
                    className={cn(navItemClasses, isActive('/about') ? activeNavItemClasses : inactiveNavItemClasses)}
                  >
                    About
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link 
                    to="/resources" 
                    className={cn(navItemClasses, isActive('/resources') ? activeNavItemClasses : inactiveNavItemClasses)}
                  >
                    Resources
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link 
                    to="/contact" 
                    className={cn(navItemClasses, isActive('/contact') ? activeNavItemClasses : inactiveNavItemClasses)}
                  >
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Button className="btn-primary">
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
                className={`px-4 py-3 ${
                  isActive('/') 
                    ? 'text-chaasms-blue' 
                    : 'text-chaasms-dark hover:text-chaasms-blue'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              <div className="px-4 py-3 flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-chaasms-dark">Framework</span>
                  <ChevronDown size={16} className="text-gray-400" />
                </div>
                <div className="pl-4 mt-3 space-y-2 border-l border-chaasms-lightgray">
                  <Link 
                    to="/challenges" 
                    className={`block py-2 ${
                      isActive('/challenges') 
                        ? 'text-chaasms-blue' 
                        : 'text-chaasms-dark hover:text-chaasms-blue'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    The Channel Challenge
                  </Link>
                  <Link 
                    to="/framework" 
                    className={`block py-2 ${
                      isActive('/framework') 
                        ? 'text-chaasms-blue' 
                        : 'text-chaasms-dark hover:text-chaasms-blue'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Framework Overview
                  </Link>
                  <Link 
                    to="/implementation" 
                    className={`block py-2 ${
                      isActive('/implementation') 
                        ? 'text-chaasms-blue' 
                        : 'text-chaasms-dark hover:text-chaasms-blue'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Implementation
                  </Link>
                </div>
              </div>
              
              <Link 
                to="/services" 
                className={`px-4 py-3 ${
                  isActive('/services') 
                    ? 'text-chaasms-blue' 
                    : 'text-chaasms-dark hover:text-chaasms-blue'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              
              <Link 
                to="/about" 
                className={`px-4 py-3 ${
                  isActive('/about') 
                    ? 'text-chaasms-blue' 
                    : 'text-chaasms-dark hover:text-chaasms-blue'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              
              <Link 
                to="/resources" 
                className={`px-4 py-3 ${
                  isActive('/resources') 
                    ? 'text-chaasms-blue' 
                    : 'text-chaasms-dark hover:text-chaasms-blue'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Resources
              </Link>
              
              <Link 
                to="/contact" 
                className={`px-4 py-3 ${
                  isActive('/contact') 
                    ? 'text-chaasms-blue' 
                    : 'text-chaasms-dark hover:text-chaasms-blue'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              
              <div className="px-4 pt-4 pb-2">
                <Button 
                  className="w-full btn-primary"
                  onClick={() => setMobileMenuOpen(false)}
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
