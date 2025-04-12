
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { CheckCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    message: ""
  });

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
        setIsSubmitted(true);
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
          {isSubmitted ? (
            <div className="py-8">
              <Alert className="bg-green-50 border-green-200">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <AlertDescription className="text-green-800 text-lg font-medium">
                  Thank you for your submission! We'll be in touch soon.
                </AlertDescription>
              </Alert>
              <div className="flex justify-center mt-6">
                <Button 
                  onClick={() => setIsSubmitted(false)} 
                  variant="outline"
                  className="mt-4"
                >
                  Submit Another Message
                </Button>
              </div>
            </div>
          ) : (
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
          )}
          
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
