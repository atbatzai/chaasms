
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="w-full py-4 bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="chaasms-container">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-chaasms-blue">CHAASMS</Link>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-chaasms-dark hover:text-chaasms-blue transition-colors">Home</Link>
            <Link to="/challenges" className="text-chaasms-dark hover:text-chaasms-blue transition-colors">The Channel Challenge</Link>
            <Link to="/framework" className="text-chaasms-dark hover:text-chaasms-blue transition-colors">Framework</Link>
            <Link to="/implementation" className="text-chaasms-dark hover:text-chaasms-blue transition-colors">Implementation</Link>
            <Link to="/services" className="text-chaasms-dark hover:text-chaasms-blue transition-colors">Services</Link>
            <Link to="/about" className="text-chaasms-dark hover:text-chaasms-blue transition-colors">About</Link>
            <Link to="/resources" className="text-chaasms-dark hover:text-chaasms-blue transition-colors">Resources</Link>
            <Link to="/contact" className="text-chaasms-dark hover:text-chaasms-blue transition-colors">Contact</Link>
          </nav>
          
          <div className="hidden md:block">
            <Button className="bg-chaasms-blue hover:bg-blue-700">Book Consultation</Button>
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
          <nav className="md:hidden py-4 flex flex-col space-y-4 mt-4">
            <Link 
              to="/" 
              className="text-chaasms-dark hover:text-chaasms-blue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/challenges" 
              className="text-chaasms-dark hover:text-chaasms-blue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              The Channel Challenge
            </Link>
            <Link 
              to="/framework" 
              className="text-chaasms-dark hover:text-chaasms-blue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Framework
            </Link>
            <Link 
              to="/implementation" 
              className="text-chaasms-dark hover:text-chaasms-blue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Implementation
            </Link>
            <Link 
              to="/services" 
              className="text-chaasms-dark hover:text-chaasms-blue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="text-chaasms-dark hover:text-chaasms-blue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/resources" 
              className="text-chaasms-dark hover:text-chaasms-blue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </Link>
            <Link 
              to="/contact" 
              className="text-chaasms-dark hover:text-chaasms-blue transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button 
              className="bg-chaasms-blue hover:bg-blue-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Consultation
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
