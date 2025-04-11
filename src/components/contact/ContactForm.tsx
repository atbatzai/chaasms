
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import FormFields from "./FormFields";
import SubmitButton from "./SubmitButton";
import DirectContact from "./DirectContact";
import { submitContactForm, parseFormError, ContactFormData } from "./utils/emailService";

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
  const [activationNeeded, setActivationNeeded] = useState(false);
  
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
      console.log("-------------------------------------");
      console.log("📝 NEW FORM SUBMISSION STARTED");
      console.log("📄 Form data:", formData);
      console.log("-------------------------------------");
      
      // Display loading toast to indicate submission is in progress
      toast.loading("Sending your message...");
      
      // Ensure all required fields are present
      if (!formData.name || !formData.email || !formData.company || !formData.message) {
        toast.dismiss();
        toast.error("Please complete all required fields");
        console.error("❌ Missing required fields in form submission");
        return;
      }
      
      // Submit form data to FormSubmit.co service
      console.log("📨 Submitting contact form...");
      
      const contactData: ContactFormData = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        website: formData.website || '',
        message: formData.message
      };
      
      const result = await submitContactForm(contactData);
      
      // Dismiss the loading toast
      toast.dismiss();
      
      if (result.success) {
        toast.success(
          <div>
            <p>Your message has been sent! We'll be in touch shortly.</p>
            <p className="text-xs mt-1">A confirmation email has been sent to {formData.email}</p>
          </div>
        );
        reset();
        console.log("✅ Form submission completed and reset");
        console.log("✉️ Auto-reply should be sent to: " + formData.email);
        setActivationNeeded(false);
      } else if (result.needsActivation) {
        // Show activation needed message
        setActivationNeeded(true);
        toast.error(
          <div>
            <p>{result.error}</p>
            <p className="text-xs mt-1">Once activated, future submissions will work automatically.</p>
          </div>
        );
        console.log("⚠️ Form needs activation");
      } else {
        toast.error(result.error || "There was a problem sending your message. Please try again or email us directly.");
        console.error("❌ Form submission failed");
      }
      
    } catch (error: any) {
      toast.dismiss();
      const errorMessage = parseFormError(error);
      toast.error(errorMessage);
      console.error("❌ Form submission exception:", error);
    } finally {
      console.log("-------------------------------------");
    }
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-sm">
      {activationNeeded ? (
        <div className="text-center p-4 bg-amber-50 border border-amber-200 rounded-md mb-4">
          <h3 className="font-medium text-amber-800">Form Activation Required</h3>
          <p className="text-amber-700 mt-2">
            This form needs to be activated before it can send messages. Please check 
            <strong> jeff.turner@chaasms.com </strong> 
            for an activation email from FormSubmit.co.
          </p>
          <p className="text-amber-700 mt-2">
            Click the activation link in the email, then refresh this page.
          </p>
        </div>
      ) : (
        <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
          <FormFields register={register} errors={errors} />
          <SubmitButton isSubmitting={isSubmitting} />
        </form>
      )}
      <DirectContact />
    </div>
  );
};

export default ContactForm;
