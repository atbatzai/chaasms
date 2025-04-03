
import { Link } from 'react-router-dom';
import { Facebook, Twitter, LinkedIn } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-chaasms-dark text-white pt-12 pb-6">
      <div className="chaasms-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4">CHAASMS</h3>
            <p className="text-gray-300 mb-4">The definitive channel strategy framework for modern ISVs.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="LinkedIn">
                <LinkedIn size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/challenges" className="text-gray-300 hover:text-white transition-colors">The Channel Challenge</Link></li>
              <li><Link to="/framework" className="text-gray-300 hover:text-white transition-colors">Framework</Link></li>
              <li><Link to="/implementation" className="text-gray-300 hover:text-white transition-colors">Implementation</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Framework Implementation</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Channel Strategy Assessment</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Partner Program Design</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Marketplace Strategy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/resources" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/resources" className="text-gray-300 hover:text-white transition-colors">Framework Overview</Link></li>
              <li><Link to="/resources" className="text-gray-300 hover:text-white transition-colors">Assessment Tool</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} CHAASMS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
