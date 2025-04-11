
import { Calendar } from 'lucide-react';
import { useState } from "react";
import ContactItem from "./contact/ContactItem";
import ContactForm from "./contact/ContactForm";
import ContactInfo from "./contact/ContactInfo";

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
        
        <div className="max-w-xl mx-auto mb-8">
          <ContactItem
            icon={Calendar}
            title="Book a Consultation"
            content={<span className="hover:text-chaasms-blue transition-colors">Fill out the form below for a free 30-minute discovery call</span>}
          />
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 md:p-8 rounded-lg max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
