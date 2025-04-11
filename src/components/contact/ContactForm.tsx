
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
      // EmailJS service configuration
      const serviceId = 'service_mqewdu1'; // This matches what's in your screenshot
      const notificationTemplateId = 'template_7yhdmys'; // From your Contact Us template ID screenshot
      const autoReplyTemplateId = 'template_9dv0q6'; // From your Auto-Reply template ID screenshot
      const publicKey = 'CrKCIv7WnXCdRp3wY';
      
      // Get current time for the template
      const now = new Date();
      const formattedTime = now.toLocaleString();
      
      console.log("Starting form submission process for:", formData.name);
      
      // Prepare template parameters for notification email (to admin)
      const notificationParams = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message,
        time: formattedTime,
        title: `New contact from ${formData.name} at ${formData.company}`,
        reply_to: formData.email,
        from_name: formData.name,
        logo_url: "https://chaasms.com/lovable-uploads/26c0451b-72e8-4bb2-9a58-202300301688.png"
      };
      
      console.log("Notification params:", notificationParams);
      console.log("Sending notification using template:", notificationTemplateId);
      
      // Prepare template parameters for auto-reply email (to user)
      const autoReplyParams = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        to_email: formData.email,
        reply_to: "jeff.turner@chaasms.com", // This is based on your screenshot
        from_name: "CHAASMS Channel Strategies", // Company name as sender
        logo_url: "https://chaasms.com/lovable-uploads/26c0451b-72e8-4bb2-9a58-202300301688.png"
      };
      
      console.log("Auto-reply params:", autoReplyParams);
      console.log("Sending auto-reply using template:", autoReplyTemplateId);
      
      // First, send the notification email to admin
      console.log("Sending notification email to admin...");
      try {
        const notificationResult = await emailjs.send(
          serviceId, 
          notificationTemplateId, 
          notificationParams, 
          publicKey
        );
        console.log("Admin notification email status:", notificationResult.status, notificationResult.text);
        
        // Then, send the auto-reply email to the user
        console.log("Sending auto-reply email to user...");
        const autoReplyResult = await emailjs.send(
          serviceId,
          autoReplyTemplateId,
          autoReplyParams,
          publicKey
        );
        console.log("Auto-reply email status:", autoReplyResult.status, autoReplyResult.text);
        
        // Success message if both emails were sent
        toast.success("Your message has been sent! We'll be in touch shortly.");
        
        // Reset form
        if (formRef.current) {
          formRef.current.reset();
        }
        setFormData({ name: "", email: "", company: "", message: "" });
        
      } catch (emailError: any) {
        console.error("Error sending email:", emailError);
        if (emailError.text) {
          console.error("EmailJS error details:", emailError.text);
        }
        throw new Error(`Failed to send email: ${emailError.message || 'Unknown error'}`);
      }
      
    } catch (error: any) {
      console.error("Form submission error:", error);
      toast.error(`Failed to send message: ${error.message}. Please try again or contact us directly.`);
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
    </div>
  );
};

export default ContactForm;
