
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
      // Updated service ID and template IDs from screenshots
      const serviceId = 'service_mqewdu1'; 
      const templateId = 'template_7yhdmys'; // Contact Us template
      const autoReplyTemplateId = 'template_9dvv0q6'; // Auto-Reply template
      const publicKey = 'CrKCIv7WnXCdRp3wY';
      
      // Get current time for the template
      const now = new Date();
      const formattedTime = now.toLocaleString();
      
      // Email parameters
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
      
      console.log("Sending contact form to:", serviceId, templateId);
      
      // Send primary notification email (Contact Us template)
      const result = await emailjs.send(
        serviceId,
        templateId,
        emailParams,
        publicKey
      );
      
      console.log("Contact email result:", result);
      
      if (result.status === 200) {
        try {
          // Send auto-reply email to the user
          console.log("Sending auto-reply to:", serviceId, autoReplyTemplateId);
          await emailjs.send(
            serviceId,
            autoReplyTemplateId,
            emailParams,
            publicKey
          );
          console.log("Auto-reply sent successfully");
        } catch (autoReplyError) {
          // Log auto-reply error but don't show to user since primary email was sent
          console.error("Auto-reply sending failed:", autoReplyError);
        }
        
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
      
      let errorMessage = "Failed to send message. Please email us directly at jeff.turner@chaasms.com";
      
      // Provide specific error messages based on the error type
      if (error.text) {
        if (error.text.includes("template ID not found")) {
          errorMessage = "Our contact system is temporarily unavailable. Please email us directly.";
          console.error("Template ID not found error. Check if template_7yhdmys exists in your EmailJS account.");
        } else if (error.text.includes("service ID not found")) {
          errorMessage = "Our email service is temporarily unavailable. Please email us directly.";
          console.error("Service ID not found error. Check if service_mqewdu1 exists in your EmailJS account.");
        }
      }
      
      toast.error(errorMessage);
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
