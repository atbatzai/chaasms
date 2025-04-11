
import React from 'react';
import { Calendar, Mail } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="max-w-xl mx-auto mb-8 space-y-4">
      <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
          <Calendar className="text-chaasms-blue" size={20} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-chaasms-dark mb-1">Book a Consultation</h3>
          <div className="text-gray-600">
            <span className="hover:text-chaasms-blue transition-colors">Fill out the form below for a free 30-minute discovery call</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
          <Mail className="text-chaasms-blue" size={20} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-chaasms-dark mb-1">Email Us Directly</h3>
          <div className="text-gray-600">
            <a href="mailto:jeff.turner@chaasms.com" className="hover:text-chaasms-blue transition-colors">jeff.turner@chaasms.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
