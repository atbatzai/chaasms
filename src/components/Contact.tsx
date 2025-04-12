
import React, { useState, useEffect } from "react";
import ContactForm from "./contact/ContactForm";
import SubmissionSuccess from "./contact/SubmissionSuccess";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Reset the isSubmitted state after 5 seconds
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isSubmitted) {
      timeoutId = setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isSubmitted]);

  const handleSubmissionSuccess = () => {
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
  };

  // Schema.org structured data for contact page
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "CHAASMS Contact Information",
    "description": "Get in touch with CHAASMS to learn more about our channel strategy framework",
    "url": "https://chaasms.com/#contact",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "availableLanguage": ["English"]
    }
  };

  return (
    <section id="contact" className="py-10 md:py-16 bg-white">
      <div className="chaasms-container">
        <div className="text-center mb-8">
          <h2 className="section-heading">Get Started</h2>
          <p className="section-subheading mb-6">
            Ready to transform your channel strategy? Connect with our experts.
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 md:p-8 rounded-lg max-w-lg mx-auto"
             itemScope itemType="https://schema.org/ContactPage">
          {isSubmitted ? (
            <SubmissionSuccess onReset={handleReset} />
          ) : (
            <ContactForm onSubmitSuccess={handleSubmissionSuccess} />
          )}
        </div>
        
        {/* Hidden JSON-LD structured data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      </div>
    </section>
  );
};

export default Contact;
