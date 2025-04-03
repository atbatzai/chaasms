
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
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
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link to="/challenges" className="text-gray-300 hover:text-white transition-colors text-sm">The Channel Challenge</Link></li>
              <li><Link to="/framework" className="text-gray-300 hover:text-white transition-colors text-sm">Framework</Link></li>
              <li><Link to="/implementation" className="text-gray-300 hover:text-white transition-colors text-sm">Implementation</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors text-sm">Framework Implementation</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors text-sm">Channel Strategy Assessment</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors text-sm">Partner Program Design</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors text-sm">Marketplace Strategy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><Link to="/resources" className="text-gray-300 hover:text-white transition-colors text-sm">Blog</Link></li>
              <li><Link to="/resources" className="text-gray-300 hover:text-white transition-colors text-sm">Framework Overview</Link></li>
              <li><Link to="/resources" className="text-gray-300 hover:text-white transition-colors text-sm">Assessment Tool</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} CHAASMS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
