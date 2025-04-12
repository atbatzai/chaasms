
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "sonner";

export type FormData = {
  name: string;
  email: string;
  company: string;
  website: string;
  message: string;
};

type UseContactFormProps = {
  onSubmitSuccess: () => void;
};

export const useContactForm = ({ onSubmitSuccess }: UseContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
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
        toast("Message Sent", {
          description: "Thank you! We'll get back to you soon.",
        });
        
        setFormData({ name: "", email: "", company: "", website: "", message: "" });
        onSubmitSuccess();
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast("Error", {
        description: "Failed to send message. Please try again.",
        style: { background: 'red', color: 'white' }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    handleChange,
    handleSubmit
  };
};
