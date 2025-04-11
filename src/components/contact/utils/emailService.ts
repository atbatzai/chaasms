
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
 * Ensures all template variables are valid strings to prevent corruption
 * @param data Object containing template variables
 */
const sanitizeTemplateVariables = (data: Record<string, any>): Record<string, string> => {
  const sanitized: Record<string, string> = {};
  
  // Convert all values to strings and handle null/undefined
  Object.keys(data).forEach(key => {
    if (data[key] === null || data[key] === undefined) {
      sanitized[key] = '';
    } else {
      sanitized[key] = String(data[key]);
    }
  });
  
  return sanitized;
};

/**
 * Sends the contact email notification to the admin
 * Ensures params EXACTLY match template variables from the HTML template
 */
export const sendContactEmail = async (formData: ContactFormData) => {
  const now = new Date();
  const formattedTime = now.toLocaleString();
  
  // These parameter names MUST EXACTLY match the template variables from HTML
  // From the template: {{name}}, {{email}}, {{time}}, {{message}}, {{title}} (optional)
  const rawParams = {
    name: formData.name,
    email: formData.email,
    time: formattedTime,
    message: formData.message,
    // Include company if it's expected in the template
    company: formData.company,
    // Include title with empty string even if optional to ensure it's defined
    title: ''
  };
  
  // Sanitize all variables to prevent corruption
  const templateParams = sanitizeTemplateVariables(rawParams);
  
  console.log("📨 Sending contact email with params:", JSON.stringify(templateParams));
  console.log("📧 Service ID:", SERVICE_ID);
  console.log("📝 Template ID:", CONTACT_TEMPLATE_ID);
  
  try {
    const result = await emailjs.send(
      SERVICE_ID,
      CONTACT_TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );
    console.log("✅ Contact email sent successfully:", result.text);
    return result;
  } catch (error) {
    console.error("❌ Contact email sending failed:", error);
    throw error;
  }
};

/**
 * Sends an auto-reply email to the user
 */
export const sendAutoReplyEmail = async (formData: ContactFormData) => {
  // For auto-reply template - adjust params to match its template variables
  // Make sure these match EXACTLY what's in the template
  const rawParams = {
    name: formData.name,
    email: formData.email,
    // For auto-reply we use a standard thank you message
    message: "Thank you for contacting CHAASMS. We will get back to you shortly.",
    // Include company and time in case they're expected by the template
    company: formData.company,
    time: new Date().toLocaleString(),
    // Include title with empty string to ensure it's defined
    title: ''
  };
  
  // Sanitize all variables to prevent corruption
  const autoReplyParams = sanitizeTemplateVariables(rawParams);
  
  console.log("🔄 Sending auto-reply with params:", JSON.stringify(autoReplyParams));
  console.log("📧 Service ID:", SERVICE_ID);
  console.log("📝 Auto-reply Template ID:", AUTO_REPLY_TEMPLATE_ID);
  
  try {
    const result = await emailjs.send(
      SERVICE_ID,
      AUTO_REPLY_TEMPLATE_ID,
      autoReplyParams,
      PUBLIC_KEY
    );
    console.log("✅ Auto-reply sent successfully:", result.text);
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
      console.error("❌ Template ID not found. Verify template IDs in EmailJS account:");
      console.error(`- Contact template ID: ${CONTACT_TEMPLATE_ID}`);
      console.error(`- Auto-reply template ID: ${AUTO_REPLY_TEMPLATE_ID}`);
    } else if (error.text.includes("service ID not found")) {
      errorMessage = "Our email service is temporarily unavailable. Please email us directly.";
      console.error(`❌ Service ID not found. Verify service ID: ${SERVICE_ID}`);
    } else if (error.text.includes("dynamic variables are corrupted")) {
      errorMessage = "We're having technical issues with our contact form. Please email us directly.";
      
      // Log detailed information to help debug template variable issues
      console.error("❌ Template variables error. Expected variables from HTML template:");
      console.error("- Main template: name, email, time, message, company, (optional: title)");
      console.error("- Template variable types detected:");
      
      // Log exactly what was sent to help debug
      if (error.data) {
        Object.keys(error.data).forEach(key => {
          console.error(`  - ${key}: ${typeof error.data[key]} (${error.data[key]})`);
        });
        console.error("❌ Variables we attempted to send:", Object.keys(error.data).join(", "));
        console.error("❌ Full data object:", JSON.stringify(error.data));
      }
    }
  }
  
  console.error("❌ Full error details:", error);
  return errorMessage;
};
