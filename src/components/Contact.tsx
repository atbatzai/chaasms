
import React from "react";
import ContactForm from "./contact/ContactForm";
import ContactInfo from "./contact/ContactInfo";
import ContactSteps from "./contact/ContactSteps";

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
        
        <ContactInfo />
        
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 md:p-8 rounded-lg max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Info Section */}
            <div>
              <h3 className="text-xl font-bold text-chaasms-dark mb-3">Contact Us</h3>
              <p className="text-gray-600 mb-4">
                Fill out the form to tell us about your channel challenges, and we'll get back to you within 24 hours.
              </p>
              
              <ContactSteps />
            </div>
            
            {/* Contact Form Section */}
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
