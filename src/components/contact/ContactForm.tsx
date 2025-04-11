
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import FormFields from "./FormFields";
import SubmitButton from "./SubmitButton";
import DirectContact from "./DirectContact";
import { sendContactEmail, sendAutoReplyEmail, parseEmailError } from "./utils/emailService";

// Define the form schema with Zod
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  company: z.string().min(2, { message: "Company name is required" }),
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
      message: ""
    }
  });
  
  const onSubmit = async (formData: ContactFormValues) => {
    try {
      // Send primary notification email
      const result = await sendContactEmail(formData);
      
      if (result.status === 200) {
        try {
          // Send auto-reply email to the user
          await sendAutoReplyEmail(formData);
          console.log("Auto-reply sent successfully");
        } catch (autoReplyError) {
          // Log auto-reply error but don't show to user since primary email was sent
          console.error("Auto-reply sending failed:", autoReplyError);
        }
        
        toast.success("Your message has been sent! We'll be in touch shortly.");
        
        // Reset form
        reset();
      } else {
        toast.error("There was an issue sending your message. Please email us directly.");
      }
      
    } catch (error: any) {
      const errorMessage = parseEmailError(error);
      toast.error(errorMessage);
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
