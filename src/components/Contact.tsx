
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactItem = ({ 
  icon: Icon, 
  title, 
  content 
}: { 
  icon: React.ElementType; 
  title: string; 
  content: string | React.ReactNode;
}) => (
  <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
      <Icon className="text-blue-600" size={20} />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
      <div className="text-gray-600">{content}</div>
    </div>
  </div>
);

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions or want to learn more? We're here to help!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <ContactItem
            icon={Phone}
            title="Phone"
            content={<a href="tel:+1234567890" className="hover:text-blue-600 transition-colors">+1 (234) 567-890</a>}
          />
          
          <ContactItem
            icon={Mail}
            title="Email"
            content={<a href="mailto:contact@yourbrand.com" className="hover:text-blue-600 transition-colors">contact@yourbrand.com</a>}
          />
          
          <ContactItem
            icon={MapPin}
            title="Location"
            content="123 Business Ave, Suite 100, Your City, State 12345"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
