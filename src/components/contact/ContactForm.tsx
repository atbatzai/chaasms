
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
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
    
    // Validate form data before proceeding
    if (!formData.name || !formData.email || !formData.company || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Make sure you're using valid template IDs from your EmailJS account
      const serviceId = 'service_mqewdu1'; 
      const templateId = 'template_7yhdmys'; // Using just one template for simplicity
      const publicKey = 'CrKCIv7WnXCdRp3wY';
      
      // Get current time for the template
      const now = new Date();
      const formattedTime = now.toLocaleString();
      
      // Simple email parameters - reduced complexity
      const emailParams = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message,
        time: formattedTime,
        title: `New contact from ${formData.name} at ${formData.company}`,
        reply_to: formData.email,
        from_name: formData.name,
        to_name: "CHAASMS Channel Strategies",
        logo_url: "https://chaasms.com/lovable-uploads/26c0451b-72e8-4bb2-9a58-202300301688.png"
      };
      
      console.log("Email params:", emailParams);
      console.log("Attempting to send email with template ID:", templateId);
      
      const result = await emailjs.send(
        serviceId,
        templateId,
        emailParams,
        publicKey
      );
      
      console.log("Email send result:", result);
      
      if (result.status === 200) {
        toast.success("Your message has been sent! We'll be in touch shortly.");
        
        // Reset form
        if (formRef.current) {
          formRef.current.reset();
        }
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        toast.error("There was an issue sending your message. Please email us directly.");
      }
      
    } catch (error: any) {
      console.error("Form submission error:", error);
      
      // Handle the specific template not found error
      if (error.text && error.text.includes("The template ID not found")) {
        toast.error("Our contact system is currently having issues. Please email us directly at jeff.turner@chaasms.com");
      } else {
        toast.error(`Failed to send message. Please email us directly at jeff.turner@chaasms.com`);
      }
      
      console.error("Full error details:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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
      
      <div className="mt-4 text-center text-sm text-gray-500">
        Having trouble with the form? Email us directly at{" "}
        <a 
          href="mailto:jeff.turner@chaasms.com" 
          className="text-chaasms-blue hover:underline"
        >
          jeff.turner@chaasms.com
        </a>
      </div>
    </div>
  );
};

export default ContactForm;
