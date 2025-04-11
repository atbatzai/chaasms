
import React from "react";
import ProcessSteps from "./ProcessSteps";

const ContactInfo = () => {
  return (
    <div>
      <h3 className="text-xl font-bold text-chaasms-dark mb-3">Contact Us</h3>
      <p className="text-gray-600 mb-4">
        Fill out the form to tell us about your channel challenges, and we'll get back to you within 24 hours.
      </p>
      
      <ProcessSteps />
    </div>
  );
};

export default ContactInfo;
