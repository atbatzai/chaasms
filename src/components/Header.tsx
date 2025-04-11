
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from 'react-router-dom';
import { cn } from "@/lib/utils";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  
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

  const navigateToRoute = (route: string) => {
    navigate(route);
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -100;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -100;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  const navItemClasses = "px-5 py-2 text-sm font-medium transition-colors cursor-pointer";
  const activeNavItemClasses = "text-chaasms-blue";
  const inactiveNavItemClasses = "text-chaasms-dark hover:text-chaasms-blue";

  return (
    <header 
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        ${scrolled ? 'bg-white shadow-sm backdrop-blur-sm py-3' : 'bg-white py-3'}`}
    >
      <div className="chaasms-container">
        <div className="flex justify-between items-center">
          <Link 
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            aria-label="CHAASMS Home"
            className="inline-block"
          >
            <img 
              src="/lovable-uploads/26c0451b-72e8-4bb2-9a58-202300301688.png" 
              alt="CHAASMS Logo" 
              className="h-24 w-auto" 
              style={{ filter: 'none', pointerEvents: 'none' }}
            />
          </Link>
          
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
            </nav>
            
            <Button 
              className="btn-primary"
              style={{ backgroundColor: '#0066B3', color: 'white' }}
              onClick={() => scrollToSection('contact')}
            >
              Book a Consultation
            </Button>
          </div>
          
          <button 
            className="md:hidden text-chaasms-dark focus:outline-none" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
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
              
              <div className="px-4 pt-4 pb-2">
                <Button 
                  className="w-full btn-primary"
                  style={{ backgroundColor: '#0066B3', color: 'white' }}
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
