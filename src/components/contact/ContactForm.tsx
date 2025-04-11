
import React, { useState, useRef } from "react";
import { toast } from "sonner";
import FormFields from "./FormFields";
import SubmitButton from "./SubmitButton";
import DirectContact from "./DirectContact";
import { ContactFormData, sendContactEmail, sendAutoReplyEmail, parseEmailError } from "./utils/emailService";

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
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
        if (formRef.current) {
          formRef.current.reset();
        }
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        toast.error("There was an issue sending your message. Please email us directly.");
      }
      
    } catch (error: any) {
      const errorMessage = parseEmailError(error);
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-5 rounded-lg shadow-sm">
      <form className="space-y-3" onSubmit={handleSubmit} ref={formRef}>
        <FormFields formData={formData} handleChange={handleChange} />
        <SubmitButton isSubmitting={isSubmitting} />
      </form>
      <DirectContact />
    </div>
  );
};

export default ContactForm;
