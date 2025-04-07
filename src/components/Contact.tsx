
import { Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

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
      <Icon className="text-chaasms-blue" size={20} />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-chaasms-dark mb-1">{title}</h3>
      <div className="text-gray-600">{content}</div>
    </div>
  </div>
);

const Contact = () => {
  const [formData, useState] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Your message has been sent! We'll be in touch shortly.");
      // Reset form
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="chaasms-container">
        <div className="text-center mb-12">
          <h2 className="section-heading">Get Started</h2>
          <p className="section-subheading">
            Ready to transform your channel strategy? Connect with our experts.
          </p>
        </div>
        
        <div className="max-w-xl mx-auto mb-12">
          <ContactItem
            icon={Calendar}
            title="Book a Consultation"
            content={<span className="hover:text-chaasms-blue transition-colors">Fill out the form below for a free 30-minute discovery call</span>}
          />
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-lg max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-chaasms-dark mb-4">Contact Us</h3>
              <p className="text-gray-600 mb-6">
                Fill out the form to tell us about your channel challenges, and we'll get back to you within 24 hours.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-chaasms-blue rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <p className="text-chaasms-dark">Discovery Call</p>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-chaasms-blue rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <p className="text-chaasms-dark">Needs Assessment</p>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-chaasms-blue rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <p className="text-chaasms-dark">Proposal & Engagement</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-chaasms-dark mb-1">Name</label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-chaasms-dark focus:outline-none focus:ring-2 focus:ring-chaasms-blue"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-chaasms-dark mb-1">Email</label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-chaasms-dark focus:outline-none focus:ring-2 focus:ring-chaasms-blue"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-chaasms-dark mb-1">Company</label>
                  <Input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-chaasms-dark focus:outline-none focus:ring-2 focus:ring-chaasms-blue"
                    placeholder="Your company"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-chaasms-dark mb-1">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-chaasms-dark focus:outline-none focus:ring-2 focus:ring-chaasms-blue"
                    placeholder="Tell us about your channel challenges"
                    required
                  ></Textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-chaasms-blue hover:bg-blue-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
