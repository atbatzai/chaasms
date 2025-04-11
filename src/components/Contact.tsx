import { Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useRef } from "react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const serviceId = 'service_mqewdu1';
      const templateId = 'template_chaasms';
      const publicKey = 'YOUR_PUBLIC_KEY';
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        message: formData.message,
        to_name: "Jeff & Jennifer Turner",
        to_email: "jeff.turner@chaasms.com, jennifer.turner@chaasms.com"
      };
      
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      toast.success("Your message has been sent! We'll be in touch shortly.");
      
      if (formRef.current) {
        formRef.current.reset();
      }
      setFormData({ name: "", email: "", company: "", message: "" });
      
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
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
            
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <form className="space-y-3" onSubmit={handleSubmit} ref={formRef}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-chaasms-dark mb-1">Name</label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-chaasms-dark focus:outline-none focus:ring-2 focus:ring-chaasms-blue"
                    placeholder="Your name"
                    required
                    value={formData.name}
                    onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
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
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-chaasms-dark mb-1">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-chaasms-dark focus:outline-none focus:ring-2 focus:ring-chaasms-blue"
                    placeholder="Tell us about your channel challenges"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full"
                  style={{ backgroundColor: '#0066B3', color: 'white' }}
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
