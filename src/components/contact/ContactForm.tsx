
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// Define the form schema with Zod
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().min(2, { message: "Company name is required" }),
  website: z.string().url({ message: "Please enter a valid URL" }).optional().or(z.literal('')),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

// Define the type from our schema
type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
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
      
      // FormSubmit endpoint with activation code
      const endpoint = 'https://formsubmit.co/ajax/263a0ebbdac6852db27aea1c4cc7ef9c';
      
      // Send the submission
      const response = await fetch(endpoint, {
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
        toast.success("Your message has been sent! We'll be in touch shortly.");
        reset(); // Reset form after successful submission
      } else {
        toast.error("There was a problem sending your message. Please try again or email us directly.");
      }
    } catch (error) {
      toast.dismiss();
      toast.error("Failed to send message. Please email us directly at jeff.turner@chaasms.com");
      console.error("Form submission error:", error);
    }
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-sm">
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-chaasms-dark mb-1">Name</label>
          <Input
            id="name"
            className={`w-full rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Your name"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-chaasms-dark mb-1">Email</label>
          <Input
            id="email"
            type="email"
            className={`w-full rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="your@email.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-chaasms-dark mb-1">Company</label>
          <Input
            id="company"
            className={`w-full rounded-md ${errors.company ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Your company"
            {...register("company")}
          />
          {errors.company && (
            <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="website" className="block text-sm font-medium text-chaasms-dark mb-1">Website (optional)</label>
          <Input
            id="website"
            className={`w-full rounded-md ${errors.website ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="https://yourcompany.com"
            {...register("website")}
          />
          {errors.website && (
            <p className="text-red-500 text-xs mt-1">{errors.website.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-chaasms-dark mb-1">Message</label>
          <Textarea
            id="message"
            rows={3}
            className={`w-full rounded-md ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Tell us about your channel challenges"
            {...register("message")}
          />
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
          {isSubmitting ? "Submitting..." : "Submit"}
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
    </div>
  );
};

export default ContactForm;
