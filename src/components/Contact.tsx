
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // No need to prevent default as we want the form to actually submit
    setIsSubmitting(true);
    // FormSubmit will handle the redirection back to the page
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
        
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 md:p-8 rounded-lg max-w-lg mx-auto">
          <form 
            action="https://formsubmit.co/jeff.turner@chaasms.com" 
            method="POST"
            onSubmit={handleSubmit} 
            className="space-y-6"
          >
            {/* FormSubmit configuration */}
            <input type="hidden" name="_next" value={window.location.href} />
            <input type="hidden" name="_subject" value="New contact form submission" />
            <input type="text" name="_honey" style={{ display: 'none' }} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                required
                className="w-full min-h-[120px]"
              />
            </div>
            
            <div className="text-center">
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full sm:w-auto"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
          
          <div className="mt-6 pt-6 border-t border-gray-200 text-center text-gray-600 text-sm">
            <p>Or reach us directly at:</p>
            <a 
              href="mailto:jeff.turner@chaasms.com" 
              className="text-chaasms-blue hover:underline text-base font-medium mt-1 block"
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
