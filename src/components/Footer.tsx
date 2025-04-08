
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Adjust for header height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };
  
  return (
    <footer className="bg-chaasms-dark text-white pt-20 pb-10">
      <div className="chaasms-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-16">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-medium mb-6">CHAASMS</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">The definitive channel strategy framework for modern ISVs.</p>
            <div className="flex space-x-5">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <span 
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-300 hover:text-white transition-colors text-sm cursor-pointer"
                >
                  Home
                </span>
              </li>
              <li>
                <span 
                  onClick={() => scrollToSection('challenges')}
                  className="text-gray-300 hover:text-white transition-colors text-sm cursor-pointer"
                >
                  The Channel Challenge
                </span>
              </li>
              <li>
                <span 
                  onClick={() => scrollToSection('framework-overview')}
                  className="text-gray-300 hover:text-white transition-colors text-sm cursor-pointer"
                >
                  Framework
                </span>
              </li>
              <li>
                <span 
                  onClick={() => scrollToSection('implementation')}
                  className="text-gray-300 hover:text-white transition-colors text-sm cursor-pointer"
                >
                  Implementation
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <span 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors text-sm cursor-pointer"
                >
                  Framework Implementation
                </span>
              </li>
              <li>
                <span 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors text-sm cursor-pointer"
                >
                  Channel Strategy Assessment
                </span>
              </li>
              <li>
                <span 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors text-sm cursor-pointer"
                >
                  Partner Program Design
                </span>
              </li>
              <li>
                <span 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors text-sm cursor-pointer"
                >
                  Marketplace Strategy
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-6">Resources</h4>
            <ul className="space-y-3">
              <li>
                <span 
                  onClick={() => scrollToSection('chaasms-framework')}
                  className="text-gray-300 hover:text-white transition-colors text-sm cursor-pointer"
                >
                  Framework Overview
                </span>
              </li>
              <li>
                <span 
                  onClick={() => scrollToSection('framework-overview')}
                  className="text-gray-300 hover:text-white transition-colors text-sm cursor-pointer"
                >
                  Assessment Tool
                </span>
              </li>
              {/* Removed Contact link */}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} CHAASMS, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
