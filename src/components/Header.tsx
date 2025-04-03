
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

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
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

  return (
    <header 
      className={`w-full py-3 fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        ${scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'}`}
    >
      <div className="chaasms-container">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-chaasms-blue">
            CHAASMS
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link 
                    to="/" 
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive('/') 
                        ? 'text-chaasms-blue' 
                        : 'text-chaasms-dark hover:text-chaasms-blue hover:bg-gray-50'
                    }`}
                  >
                    Home
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={`text-sm font-medium ${
                      isActive('/challenges') 
                        ? 'text-chaasms-blue' 
                        : 'text-chaasms-dark hover:text-chaasms-blue'
                    }`}
                  >
                    Framework
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/challenges"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 focus:bg-gray-50"
                          >
                            <div className="text-sm font-medium text-chaasms-blue">
                              The Channel Challenge
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                              Understanding today's complex ecosystem landscape
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/framework"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 focus:bg-gray-50"
                          >
                            <div className="text-sm font-medium text-chaasms-blue">
                              Framework Overview
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                              Explore our six-layer comprehensive methodology
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/implementation"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 focus:bg-gray-50"
                          >
                            <div className="text-sm font-medium text-chaasms-blue">
                              Implementation
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                              Our four-phase implementation approach
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link 
                    to="/services" 
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive('/services') 
                        ? 'text-chaasms-blue' 
                        : 'text-chaasms-dark hover:text-chaasms-blue hover:bg-gray-50'
                    }`}
                  >
                    Services
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link 
                    to="/about" 
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive('/about') 
                        ? 'text-chaasms-blue' 
                        : 'text-chaasms-dark hover:text-chaasms-blue hover:bg-gray-50'
                    }`}
                  >
                    About
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link 
                    to="/resources" 
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive('/resources') 
                        ? 'text-chaasms-blue' 
                        : 'text-chaasms-dark hover:text-chaasms-blue hover:bg-gray-50'
                    }`}
                  >
                    Resources
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link 
                    to="/contact" 
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive('/contact') 
                        ? 'text-chaasms-blue' 
                        : 'text-chaasms-dark hover:text-chaasms-blue hover:bg-gray-50'
                    }`}
                  >
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Button className="bg-chaasms-blue hover:bg-blue-700 shadow-sm">
              Book Consultation
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
          <div className="md:hidden py-4 mt-4 bg-white rounded-lg shadow-lg border border-gray-100 animate-fade-in">
            <nav className="flex flex-col space-y-1">
              <Link 
                to="/" 
                className={`px-4 py-2 ${
                  isActive('/') 
                    ? 'text-chaasms-blue bg-blue-50 font-medium' 
                    : 'text-chaasms-dark hover:text-chaasms-blue hover:bg-gray-50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              <div className="px-4 py-2 flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-chaasms-dark">Framework</span>
                  <ChevronDown size={16} className="text-gray-400" />
                </div>
                <div className="pl-4 mt-2 space-y-1 border-l border-gray-200">
                  <Link 
                    to="/challenges" 
                    className={`block py-1 ${
                      isActive('/challenges') 
                        ? 'text-chaasms-blue font-medium' 
                        : 'text-chaasms-dark hover:text-chaasms-blue'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    The Channel Challenge
                  </Link>
                  <Link 
                    to="/framework" 
                    className={`block py-1 ${
                      isActive('/framework') 
                        ? 'text-chaasms-blue font-medium' 
                        : 'text-chaasms-dark hover:text-chaasms-blue'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Framework Overview
                  </Link>
                  <Link 
                    to="/implementation" 
                    className={`block py-1 ${
                      isActive('/implementation') 
                        ? 'text-chaasms-blue font-medium' 
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
                className={`px-4 py-2 ${
                  isActive('/services') 
                    ? 'text-chaasms-blue bg-blue-50 font-medium' 
                    : 'text-chaasms-dark hover:text-chaasms-blue hover:bg-gray-50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              
              <Link 
                to="/about" 
                className={`px-4 py-2 ${
                  isActive('/about') 
                    ? 'text-chaasms-blue bg-blue-50 font-medium' 
                    : 'text-chaasms-dark hover:text-chaasms-blue hover:bg-gray-50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              
              <Link 
                to="/resources" 
                className={`px-4 py-2 ${
                  isActive('/resources') 
                    ? 'text-chaasms-blue bg-blue-50 font-medium' 
                    : 'text-chaasms-dark hover:text-chaasms-blue hover:bg-gray-50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Resources
              </Link>
              
              <Link 
                to="/contact" 
                className={`px-4 py-2 ${
                  isActive('/contact') 
                    ? 'text-chaasms-blue bg-blue-50 font-medium' 
                    : 'text-chaasms-dark hover:text-chaasms-blue hover:bg-gray-50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              
              <div className="px-4 pt-2 pb-1">
                <Button 
                  className="w-full bg-chaasms-blue hover:bg-blue-700 shadow-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book Consultation
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
