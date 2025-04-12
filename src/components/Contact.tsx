
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

  return (
    <section id="contact" className="py-10 md:py-16 bg-white">
      <div className="chaasms-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left side copy */}
          <div className="flex-1 max-w-md">
            <h2 className="text-3xl md:text-4xl font-light text-chaasms-dark mb-6">Contact Us</h2>
            <p className="text-lg text-chaasms-text mb-6">
              Fill out the form to tell us about your channel changes, and we'll get back to you within 24 hours.
            </p>
            
            {/* Process steps */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <span>Discovery Call</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <span>Needs Assessment</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <span>Proposal & Engagement</span>
              </div>
            </div>
          </div>

          {/* Right side form */}
          <div className="flex-1 w-full max-w-md bg-gradient-to-br from-blue-50 to-indigo-50 p-6 md:p-8 rounded-lg">
            {isSubmitted ? (
              <SubmissionSuccess onReset={handleReset} />
            ) : (
              <ContactForm onSubmitSuccess={handleSubmissionSuccess} />
            )}
          </div>
        </div>
        
        {/* Schema.org structured data */}
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify({
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
            }) 
          }} 
        />
      </div>
    </section>
  );
};

export default Contact;
