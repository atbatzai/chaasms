
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
 * Ensures params exactly match template variables
 */
export const sendContactEmail = async (formData: ContactFormData) => {
  const now = new Date();
  const formattedTime = now.toLocaleString();
  
  // These parameter names MUST EXACTLY match the template variables
  const mainEmailParams = {
    name: formData.name,
    email: formData.email,
    time: formattedTime,
    message: formData.message,
    // No title in our form data, but company is available if needed elsewhere
    company: formData.company
  };
  
  console.log("Sending contact form with params:", mainEmailParams);
  console.log("Using service ID:", SERVICE_ID);
  console.log("Using template ID:", CONTACT_TEMPLATE_ID);
  
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
  // We'll use the same parameter naming convention for consistency
  const autoReplyParams = {
    name: formData.name,
    email: formData.email,
    message: formData.message,
    company: formData.company
  };
  
  console.log("Sending auto-reply with params:", autoReplyParams);
  console.log("Using service ID:", SERVICE_ID);
  console.log("Using template ID:", AUTO_REPLY_TEMPLATE_ID);
  
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
  
  if (error && error.text) {
    console.error("EmailJS error text:", error.text);
    
    if (error.text.includes("template ID not found")) {
      errorMessage = "Our contact system is temporarily unavailable. Please email us directly.";
      console.error("Template ID not found error. Check if template IDs exist in your EmailJS account.");
    } else if (error.text.includes("service ID not found")) {
      errorMessage = "Our email service is temporarily unavailable. Please email us directly.";
      console.error("Service ID not found error. Check if service_mqewdu1 exists in your EmailJS account.");
    } else if (error.text.includes("dynamic variables are corrupted")) {
      errorMessage = "We're having technical issues with our contact form. Please email us directly.";
      console.error("Template variables error. Check EmailJS template and ensure these variables exist:", error);
      // Log what we're sending to help debug
      console.log("Template expects these variables:", 
                 "name, email, time, message, and possibly title");
      console.log("We are sending these variables:", 
                 Object.keys(error?.data || {}).join(", "));
    }
  }
  
  console.error("Full error details:", error);
  return errorMessage;
};
