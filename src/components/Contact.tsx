
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-10 md:py-16 bg-white">
      <div className="chaasms-container">
        <div className="text-center mb-8">
          <h2 className="section-heading">Get Started</h2>
          <p className="section-subheading mb-8">
            Ready to transform your channel strategy? Connect with our experts.
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 md:p-8 rounded-lg max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-xl font-bold text-chaasms-dark mb-3">Contact Us</h3>
            <p className="text-gray-600 mb-6">
              For inquiries, please reach out to us directly at:
            </p>
            <a 
              href="mailto:jeff.turner@chaasms.com" 
              className="text-chaasms-blue hover:underline text-lg font-medium"
            >
              jeff.turner@chaasms.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
