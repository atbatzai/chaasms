import emailjs from '@emailjs/browser';

// Constants for EmailJS configuration
const SERVICE_ID = 'service_mqewdu1';
const CONTACT_TEMPLATE_ID = 'template_7yhdmys';
const AUTO_REPLY_TEMPLATE_ID = 'template_9dvv0q6';
const PUBLIC_KEY = 'CrKCIv7WnXCdRp3wY';

// Interface for form data - making sure it matches the form schema
export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

/**
 * Sends the contact email notification to the admin
 */
export const sendContactEmail = async (formData: ContactFormData) => {
  const now = new Date();
  const formattedTime = now.toLocaleString();
  
  // Parameters for the main notification email
  const mainEmailParams = {
    from_name: formData.name,
    to_name: "CHAASMS Channel Strategies",
    from_email: formData.email,
    company: formData.company,
    message: formData.message,
    time: formattedTime,
    reply_to: formData.email,
  };
  
  console.log("Sending contact form to:", SERVICE_ID, CONTACT_TEMPLATE_ID);
  console.log("Main email params:", mainEmailParams);
  
  return emailjs.send(
    SERVICE_ID,
    CONTACT_TEMPLATE_ID,
    mainEmailParams,
    PUBLIC_KEY
  );
};

/**
 * Sends an auto-reply email to the user
 */
export const sendAutoReplyEmail = async (formData: ContactFormData) => {
  // Parameters for the auto-reply email
  const autoReplyParams = {
    to_name: formData.name,
    from_name: "CHAASMS Channel Strategies",
    to_email: formData.email,
    message: formData.message,
    company: formData.company,
    reply_to: "jeff.turner@chaasms.com",
  };
  
  console.log("Sending auto-reply to:", SERVICE_ID, AUTO_REPLY_TEMPLATE_ID);
  console.log("Auto-reply params:", autoReplyParams);
  
  return emailjs.send(
    SERVICE_ID,
    AUTO_REPLY_TEMPLATE_ID,
    autoReplyParams,
    PUBLIC_KEY
  );
};

/**
 * Parses error messages from EmailJS errors
 */
export const parseEmailError = (error: any): string => {
  let errorMessage = "Failed to send message. Please email us directly at jeff.turner@chaasms.com";
  
  if (error.text) {
    if (error.text.includes("template ID not found")) {
      errorMessage = "Our contact system is temporarily unavailable. Please email us directly.";
      console.error("Template ID not found error. Check if template IDs exist in your EmailJS account.");
    } else if (error.text.includes("service ID not found")) {
      errorMessage = "Our email service is temporarily unavailable. Please email us directly.";
      console.error("Service ID not found error. Check if service_mqewdu1 exists in your EmailJS account.");
    } else if (error.text.includes("dynamic variables are corrupted")) {
      errorMessage = "We're having technical issues with our contact form. Please email us directly.";
      console.error("Template variables error. Variables don't match template expectations.");
    }
  }
  
  console.error("Full error details:", error);
  return errorMessage;
};
