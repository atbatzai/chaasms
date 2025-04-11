
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import FormFields from "./FormFields";
import SubmitButton from "./SubmitButton";
import DirectContact from "./DirectContact";
import { sendContactEmail, sendAutoReplyEmail, parseEmailError, ContactFormData } from "./utils/emailService";

// Define the form schema with Zod - ensure it matches EmailJS template expectations
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
      console.log("-------------------------------------");
      console.log("📝 NEW FORM SUBMISSION STARTED");
      console.log("📄 Form data:", formData);
      console.log("-------------------------------------");
      
      // Ensure all required fields are present
      if (!formData.name || !formData.email || !formData.company || !formData.message) {
        toast.error("Please complete all required fields");
        console.error("❌ Missing required fields in form submission");
        return;
      }
      
      // Prepare data for EmailJS - ensure it matches the ContactFormData interface
      const contactData: ContactFormData = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        website: formData.website || '',
        message: formData.message
      };
      
      // First send the contact notification to the site owner
      console.log("📨 Step 1: Sending main contact email to admin...");
      const result = await sendContactEmail(contactData);
      
      if (result.status === 200) {
        console.log("✅ Step 1 complete: Main contact email sent successfully");
        
        // Now handle auto-reply as a separate operation
        console.log("📨 Step 2: Sending auto-reply to customer:", contactData.email);
        
        try {
          console.log("🔄 Initiating auto-reply process...");
          const autoReplyResult = await sendAutoReplyEmail(contactData);
          
          console.log("📊 Auto-reply result received:", autoReplyResult.status);
          
          if (autoReplyResult.status === 200) {
            console.log("✅ Step 2 complete: Auto-reply sent successfully");
            toast.success("Your message has been sent! We'll be in touch shortly.");
          } else {
            // This branch should rarely execute as non-200 usually throws an error
            console.warn("⚠️ Auto-reply sent but returned unexpected status:", autoReplyResult.status);
            toast.success("Your message has been sent! We'll contact you soon.");
          }
        } catch (autoReplyError: any) {
          // If auto-reply fails, log it but don't report to user since main email was sent
          console.error("❌ Step 2 failed: Auto-reply sending error");
          console.error("❌ Auto-reply recipient:", contactData.email);
          console.error("❌ Error details:", autoReplyError);
          
          // Still show success for the main submission
          toast.success("Your message has been received! We'll be in touch soon.");
        }
        
        // Reset form regardless of auto-reply status
        reset();
        console.log("✅ Form reset after successful submission");
        console.log("-------------------------------------");
      } else {
        // This branch should rarely execute as non-200 usually throws an error
        console.error("❌ Unexpected main email response status:", result.status);
        toast.error("There was an issue sending your message. Please email us directly.");
      }
      
    } catch (error: any) {
      const errorMessage = parseEmailError(error);
      toast.error(errorMessage);
      console.error("❌ Contact form submission error:", error);
      console.error("-------------------------------------");
    }
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-sm">
      <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <FormFields register={register} errors={errors} />
        <SubmitButton isSubmitting={isSubmitting} />
      </form>
      <DirectContact />
    </div>
  );
};

export default ContactForm;
