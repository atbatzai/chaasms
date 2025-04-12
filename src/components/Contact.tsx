
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS with your public key
      emailjs.init("CrKCIv7WnXCdRp3wY");
      
      // Send the contact message to you
      const contactResult = await emailjs.send(
        "service_qusffho",
        "template_x4sbavd",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      );

      // Send an auto-reply to the user - modified to match template parameters
      const autoReplyResult = await emailjs.send(
        "service_qusffho",
        "template_yafe18g",
        {
          name: formData.name, // Changed from to_name to name
          email: formData.email, // Changed from to_email to email
          title: "Contact Form Submission", // Added title parameter
        }
      );

      console.log("Contact result:", contactResult);
      console.log("Auto-reply result:", autoReplyResult);

      if (contactResult.text === "OK") {
        // Show success toast regardless of auto-reply result
        toast({
          title: "Message Sent",
          description: "Thank you! We'll get back to you soon.",
        });
        
        // Reset form after successful submission
        setFormData({ name: "", email: "", message: "" });
        formRef.current?.reset();
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
    <section id="contact" className="py-10 md:py-16 bg-white">
      <div className="chaasms-container">
        <div className="text-center mb-8">
          <h2 className="section-heading">Get Started</h2>
          <p className="section-subheading mb-6">
            Ready to transform your channel strategy? Connect with our experts.
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 md:p-8 rounded-lg max-w-lg mx-auto">
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
