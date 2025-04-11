
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, User, Building, Globe, MessageSquare, Send } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import FormConfirmationModal from "./FormConfirmationModal";

// Define the form schema with Zod
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().min(2, { message: "Company name is required" }),
  website: z.string().url({ message: "Please enter a valid URL" }).optional().or(z.literal('')),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

interface ContactFormProps {
  onSubmitSuccess?: () => void;
}

const ContactForm = ({ onSubmitSuccess }: ContactFormProps) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      website: "",
      message: ""
    }
  });
  
  const onSubmit = async (formData: ContactFormValues) => {
    try {
      // Display loading toast
      toast.loading("Sending your message...");
      
      // Create FormData object
      const data = new FormData();
      
      // Add form fields
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('company', formData.company);
      data.append('website', formData.website || 'Not provided');
      data.append('message', formData.message);
      
      // FormSubmit configuration
      data.append('_subject', `Contact from ${formData.name} at ${formData.company}`);
      data.append('_replyto', formData.email);
      data.append('_template', 'box');
      
      // New configuration for auto-response - make sure HTML is not minified
      data.append('_autoresponse', 'Thank you for contacting CHAASMS');
      data.append('_autoresponse_subject', `Thank you for reaching out, ${formData.name}`);
      data.append('_autoresponse_message', `
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2 style="color: #0066B3;">Thank you for contacting CHAASMS</h2>
              <p>Dear ${formData.name},</p>
              <p>We've received your inquiry and will get back to you within 24 hours.</p>
              <p>In the meantime, feel free to explore our framework documentation on our website.</p>
              <p>Best regards,</p>
              <p>The CHAASMS Team</p>
            </div>
          </body>
        </html>
      `);
      
      // Using new FormSubmit activation code 
      // This is a placeholder - user will need to activate a new form
      const endpoint = 'https://formsubmit.co/ajax/your-new-activation-code';
      
      // For testing purposes, we'll temporarily use a different endpoint that will generate an activation email
      const testEndpoint = 'https://formsubmit.co/ajax/jeff.turner@chaasms.com';
      
      // Send the submission
      const response = await fetch(testEndpoint, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      const result = await response.json();
      
      // Dismiss loading toast
      toast.dismiss();
      
      // Handle response
      if (result.success === "true" || result.success === true) {
        // Save the submitted name for the confirmation modal
        setSubmittedName(formData.name);
        
        // Show success toast (could be made less prominent since we have the modal)
        toast.success("Your message has been sent!");
        
        // Show confirmation modal
        setShowConfirmation(true);
        
        // Reset form after successful submission
        reset();
        
        if (onSubmitSuccess) {
          onSubmitSuccess();
        }
      } else {
        toast.error("There was a problem sending your message. Please try again or email us directly.");
      }
    } catch (error) {
      toast.dismiss();
      toast.error("Failed to send message. Please email us directly at jeff.turner@chaasms.com");
      console.error("Form submission error:", error);
    }
  };
  
  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
  };

  return (
    <>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-chaasms-dark mb-1">Name</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-4 w-4 text-gray-400" />
            </div>
            <Input
              id="name"
              className={`pl-10 w-full rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Your name"
              {...register("name")}
            />
          </div>
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-chaasms-dark mb-1">Email</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-4 w-4 text-gray-400" />
            </div>
            <Input
              id="email"
              type="email"
              className={`pl-10 w-full rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="your@email.com"
              {...register("email")}
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-chaasms-dark mb-1">Company</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Building className="h-4 w-4 text-gray-400" />
            </div>
            <Input
              id="company"
              className={`pl-10 w-full rounded-md ${errors.company ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Your company"
              {...register("company")}
            />
          </div>
          {errors.company && (
            <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="website" className="block text-sm font-medium text-chaasms-dark mb-1">Website (optional)</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Globe className="h-4 w-4 text-gray-400" />
            </div>
            <Input
              id="website"
              className={`pl-10 w-full rounded-md ${errors.website ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="https://yourcompany.com"
              {...register("website")}
            />
          </div>
          {errors.website && (
            <p className="text-red-500 text-xs mt-1">{errors.website.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-chaasms-dark mb-1">Message</label>
          <div className="relative">
            <div className="absolute top-3 left-3 flex items-start pointer-events-none">
              <MessageSquare className="h-4 w-4 text-gray-400" />
            </div>
            <Textarea
              id="message"
              rows={3}
              className={`pl-10 w-full rounded-md ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Tell us about your channel challenges"
              {...register("message")}
            />
          </div>
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
          )}
        </div>
        
        <Button 
          type="submit" 
          className="w-full"
          style={{ backgroundColor: '#0066B3', color: 'white' }}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : (
            <span className="flex items-center justify-center gap-2">
              <Send className="h-4 w-4" />
              Submit
            </span>
          )}
        </Button>
        
        <div className="mt-4 text-center text-sm text-gray-500">
          Having trouble with the form? Email us directly at{" "}
          <a 
            href="mailto:jeff.turner@chaasms.com" 
            className="text-chaasms-blue hover:underline"
          >
            jeff.turner@chaasms.com
          </a>
        </div>
      </form>

      {/* Confirmation Modal */}
      <FormConfirmationModal 
        isOpen={showConfirmation} 
        onClose={handleCloseConfirmation}
        name={submittedName} 
      />
    </>
  );
};

export default ContactForm;
