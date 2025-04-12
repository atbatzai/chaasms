
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

type ContactFormProps = {
  onSubmitSuccess: () => void;
};

type FormData = {
  name: string;
  email: string;
  company: string;
  website: string;
  message: string;
};

const ContactForm = ({ onSubmitSuccess }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    website: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'website') {
      const normalizedWebsite = value
        .replace(/^(https?:\/\/)?(www\.)?/i, '')  // Remove protocol and www
        .replace(/\/.*$/, '')  // Remove paths after domain
        .trim()  // Remove leading/trailing whitespace
        .toLowerCase();  // Convert to lowercase
      
      setFormData(prev => ({ ...prev, [name]: normalizedWebsite }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      emailjs.init("CrKCIv7WnXCdRp3wY");
      
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      
      const websiteWithProtocol = formData.website 
        ? (formData.website.includes('://') ? formData.website : `https://${formData.website}`)
        : '';

      const contactResult = await emailjs.send(
        "service_qusffho",
        "template_x4sbavd",
        {
          ...formData,
          website: websiteWithProtocol,
          date: formattedDate,
          time: formattedTime
        }
      );

      const autoReplyResult = await emailjs.send(
        "service_qusffho",
        "template_yafe18g",
        {
          name: formData.name,
          email: formData.email,
          title: "Contact Form Submission",
        }
      );

      console.log("Contact result:", contactResult);
      console.log("Auto-reply result:", autoReplyResult);

      if (contactResult.text === "OK") {
        toast({
          title: "Message Sent",
          description: "Thank you! We'll get back to you soon.",
        });
        
        setFormData({ name: "", email: "", company: "", website: "", message: "" });
        formRef.current?.reset();
        onSubmitSuccess();
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
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
        <label htmlFor="company" className="block text-sm font-medium text-gray-700">
          Company
        </label>
        <Input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          placeholder="Your company name"
          required
          className="w-full"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="website" className="block text-sm font-medium text-gray-700">
          Website
        </label>
        <Input
          id="website"
          name="website"
          type="text"
          value={formData.website}
          onChange={handleChange}
          placeholder="website.com"
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
  );
};

export default ContactForm;
