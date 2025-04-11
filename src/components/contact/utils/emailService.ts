
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
  
  // Parameters for the main notification email - making sure keys match exactly with EmailJS template variables
  const mainEmailParams = {
    from_name: formData.name,
    from_email: formData.email,
    company: formData.company,
    message: formData.message,
    to_name: "CHAASMS Channel Strategies",
    time: formattedTime,
    reply_to: formData.email,
  };
  
  console.log("Sending contact form to:", SERVICE_ID, CONTACT_TEMPLATE_ID);
  console.log("Main email params:", mainEmailParams);
  
  try {
    const result = await emailjs.send(
      SERVICE_ID,
      CONTACT_TEMPLATE_ID,
      mainEmailParams,
      PUBLIC_KEY
    );
    console.log("Email sent successfully:", result);
    return result;
  } catch (error) {
    console.error("Email sending failed:", error);
    throw error;
  }
};

/**
 * Sends an auto-reply email to the user
 */
export const sendAutoReplyEmail = async (formData: ContactFormData) => {
  // Parameters for the auto-reply email - making sure keys match exactly with EmailJS template variables
  const autoReplyParams = {
    to_name: formData.name,
    to_email: formData.email,
    message: formData.message,
    company: formData.company,
    from_name: "CHAASMS Channel Strategies",
    reply_to: "jeff.turner@chaasms.com",
  };
  
  console.log("Sending auto-reply to:", SERVICE_ID, AUTO_REPLY_TEMPLATE_ID);
  console.log("Auto-reply params:", autoReplyParams);
  
  try {
    const result = await emailjs.send(
      SERVICE_ID,
      AUTO_REPLY_TEMPLATE_ID,
      autoReplyParams,
      PUBLIC_KEY
    );
    console.log("Auto-reply sent successfully:", result);
    return result;
  } catch (error) {
    console.error("Auto-reply sending failed:", error);
    throw error;
  }
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
      console.error("Template variables error. Variables don't match template expectations:", error);
    }
  }
  
  console.error("Full error details:", error);
  return errorMessage;
};
