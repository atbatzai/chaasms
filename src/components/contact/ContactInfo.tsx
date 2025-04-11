
import React from "react";

const ContactInfo = () => {
  return (
    <div>
      <h3 className="text-xl font-bold text-chaasms-dark mb-3">Contact Us</h3>
      <p className="text-gray-600 mb-4">
        Fill out the form to tell us about your channel challenges, and we'll get back to you within 24 hours.
      </p>
      
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-chaasms-blue rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">1</span>
          </div>
          <p className="text-chaasms-dark text-sm">Discovery Call</p>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-chaasms-blue rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">2</span>
          </div>
          <p className="text-chaasms-dark text-sm">Needs Assessment</p>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-chaasms-blue rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">3</span>
          </div>
          <p className="text-chaasms-dark text-sm">Proposal & Engagement</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
