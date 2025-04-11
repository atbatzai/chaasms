
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
 * Ensures params EXACTLY match template variables from the HTML template
 */
export const sendContactEmail = async (formData: ContactFormData) => {
  const now = new Date();
  const formattedTime = now.toLocaleString();
  
  // These parameter names MUST EXACTLY match the template variables from HTML
  // From the template: {{name}}, {{email}}, {{time}}, {{message}}, {{title}} (optional)
  const templateParams = {
    name: formData.name,
    email: formData.email,
    time: formattedTime,
    message: formData.message,
    // The template checks for title with {{#if title}}, but we don't have it in our form
    // We'll omit it entirely rather than sending undefined or null
    company: formData.company // Not used in main template but kept for reference
  };
  
  console.log("⭐ Sending contact form with exact params:", JSON.stringify(templateParams));
  console.log("⭐ Using service ID:", SERVICE_ID);
  console.log("⭐ Using template ID:", CONTACT_TEMPLATE_ID);
  
  try {
    const result = await emailjs.send(
      SERVICE_ID,
      CONTACT_TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );
    console.log("✅ Email sent successfully:", result);
    return result;
  } catch (error) {
    console.error("❌ Email sending failed:", error);
    throw error;
  }
};

/**
 * Sends an auto-reply email to the user
 */
export const sendAutoReplyEmail = async (formData: ContactFormData) => {
  // For auto-reply template - adjust if needed based on its template variables
  const autoReplyParams = {
    name: formData.name,
    email: formData.email,
    message: formData.message
    // Not sending company unless the auto-reply template specifically needs it
  };
  
  console.log("⭐ Sending auto-reply with params:", JSON.stringify(autoReplyParams));
  console.log("⭐ Using service ID:", SERVICE_ID);
  console.log("⭐ Using template ID:", AUTO_REPLY_TEMPLATE_ID);
  
  try {
    const result = await emailjs.send(
      SERVICE_ID,
      AUTO_REPLY_TEMPLATE_ID,
      autoReplyParams,
      PUBLIC_KEY
    );
    console.log("✅ Auto-reply sent successfully:", result);
    return result;
  } catch (error) {
    console.error("❌ Auto-reply sending failed:", error);
    throw error;
  }
};

/**
 * Parses error messages from EmailJS errors
 */
export const parseEmailError = (error: any): string => {
  let errorMessage = "Failed to send message. Please email us directly at jeff.turner@chaasms.com";
  
  if (error && error.text) {
    console.error("❌ EmailJS error text:", error.text);
    
    if (error.text.includes("template ID not found")) {
      errorMessage = "Our contact system is temporarily unavailable. Please email us directly.";
      console.error("❌ Template ID not found error. Check if template IDs exist in your EmailJS account.");
    } else if (error.text.includes("service ID not found")) {
      errorMessage = "Our email service is temporarily unavailable. Please email us directly.";
      console.error("❌ Service ID not found error. Check if service_mqewdu1 exists in your EmailJS account.");
    } else if (error.text.includes("dynamic variables are corrupted")) {
      errorMessage = "We're having technical issues with our contact form. Please email us directly.";
      
      // Log detailed information to help debug
      console.error("❌ Template variables error. Expected variables: name, email, time, message (optional: title)");
      
      // Log exactly what was sent to help debug
      if (error.data) {
        console.error("❌ Variables we attempted to send:", Object.keys(error.data).join(", "));
        console.error("❌ Full data object:", JSON.stringify(error.data));
      }
    }
  }
  
  console.error("❌ Full error details:", error);
  return errorMessage;
};
