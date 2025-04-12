
import React, { useRef } from "react";
import FormField from "./components/FormField";
import SubmitButton from "./components/SubmitButton";
import { useContactForm } from "./hooks/useContactForm";

type ContactFormProps = {
  onSubmitSuccess: () => void;
};

const ContactForm = ({ onSubmitSuccess }: ContactFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const { formData, isSubmitting, handleChange, handleSubmit } = useContactForm({
    onSubmitSuccess
  });

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="p-6 md:p-8 bg-white rounded-lg shadow-sm">
      <div className="space-y-4">
        <FormField
          id="name"
          label="Name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          required
        />
        
        <FormField
          id="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          required
        />
        
        <FormField
          id="company"
          label="Company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          placeholder="Your company"
          required
        />
        
        <FormField
          id="website"
          label="Website (optional)"
          type="text"
          value={formData.website}
          onChange={handleChange}
          placeholder="https://yourcompany.com"
        />
        
        <FormField
          id="message"
          label="Message"
          type="textarea"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your channel challenges"
          required
        />
      </div>
      
      <div className="mt-6">
        <SubmitButton isSubmitting={isSubmitting} />
      </div>
    </form>
  );
};

export default ContactForm;
