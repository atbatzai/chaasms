
import emailjs from '@emailjs/browser';

// Constants for EmailJS configuration
const SERVICE_ID = 'service_mqewdu1';
const CONTACT_TEMPLATE_ID = 'template_1s8irbc';
const AUTO_REPLY_TEMPLATE_ID = 'template_0mg1a6l'; // Updated template ID
const PUBLIC_KEY = 'CrKCIv7WnXCdRp3wY';

// Interface for form data - make this match exactly what's in our form
export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  website: string;
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
 * Maps our form fields to the template variables in EmailJS
 */
export const sendContactEmail = async (formData: ContactFormData) => {
  // Prepare template variables based on what's in the EmailJS template
  // Based on your feedback, the template uses {{name}}, {{message}}, {{time}}, {{title}}
  // But does NOT have {{email}} as a separate variable
  const now = new Date();
  const formattedTime = now.toLocaleString();
  
  // Parameters for the contact template - map our form data to the template variables
  const rawParams = {
    // These are the exact variables used in the template
    name: formData.name,          // {{name}} in the template
    message: `Email: ${formData.email}

${formData.message}
    
Company: ${formData.company}
Website: ${formData.website || 'Not provided'}`,    // {{message}} in the template with email and added details
    time: formattedTime,          // {{time}} in the template
    
    // These are required by EmailJS for sending
    from_name: formData.name,
    from_email: formData.email,
    reply_to: formData.email,
    
    // Adding a title parameter for subject line which appears to use {{title}}
    title: `Contact from ${formData.name} at ${formData.company}`
  };
  
  // Sanitize all variables to prevent corruption
  const templateParams = sanitizeTemplateVariables(rawParams);
  
  console.log("📨 Sending contact email with params:", JSON.stringify(templateParams));
  console.log("📧 Service ID:", SERVICE_ID);
  console.log("📝 Template ID:", CONTACT_TEMPLATE_ID);
  
  try {
    // Initialize EmailJS with the public key
    emailjs.init(PUBLIC_KEY);
    
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
  // For auto-reply template - the template expects {{name}} and {{title}} variables
  const rawParams = {
    // Required template variables
    name: formData.name,
    title: `Thank you for your inquiry about ${formData.company}`,
    
    // EmailJS sending requirements
    from_name: "CHAASMS Team",
    from_email: "jeff.turner@chaasms.com",
    reply_to: "jeff.turner@chaasms.com",
    to_email: formData.email
  };
  
  // Sanitize all variables to prevent corruption
  const autoReplyParams = sanitizeTemplateVariables(rawParams);
  
  console.log("🔄 Sending auto-reply with params:", JSON.stringify(autoReplyParams));
  console.log("📧 Service ID:", SERVICE_ID);
  console.log("📝 Auto-reply Template ID:", AUTO_REPLY_TEMPLATE_ID);
  
  try {
    // Initialize EmailJS with the public key
    emailjs.init(PUBLIC_KEY);
    
    const result = await emailjs.send(
      SERVICE_ID,
      AUTO_REPLY_TEMPLATE_ID,
      autoReplyParams,
      PUBLIC_KEY
    );
    console.log("✅ Auto-reply sent successfully:", result.status, result.text);
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
      console.error("❌ Template variables error. Expected variables from template:");
      console.error("- Main template variables: name, email, message, time, title");
      
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
