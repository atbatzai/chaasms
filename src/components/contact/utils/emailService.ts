
// Using FormSubmit.co service instead of EmailJS
// This service handles both notification emails and auto-replies without API keys

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  website: string;
  message: string;
}

/**
 * Sends a contact form submission using FormSubmit.co
 * FormSubmit handles both the main notification and auto-reply
 */
export const submitContactForm = async (formData: ContactFormData) => {
  try {
    console.log("📝 Preparing form submission with FormSubmit.co");
    console.log("📄 Form data:", formData);
    
    // Build form data for submission - using a proper HTML form approach
    const data = new FormData();
    
    // Basic contact information
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('company', formData.company);
    data.append('website', formData.website || 'Not provided');
    data.append('message', formData.message);
    
    // FormSubmit specific configuration fields
    data.append('_subject', `Contact from ${formData.name} at ${formData.company}`);
    data.append('_replyto', formData.email); // Sets the reply-to header
    data.append('_template', 'box'); // Nice HTML template
    data.append('_captcha', 'false'); // Disable CAPTCHA for better UX
    
    // Enable auto-response
    data.append('_autoresponse', 'true'); // Explicitly enable auto-response
    data.append('_autoresponse_subject', `Thank you for contacting CHAASMS, ${formData.name}!`);
    
    // The HTML content of the auto-reply email - properly formatted with explicit HTML
    const autoReplyMessage = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank you for contacting CHAASMS</title>
    <style>
      body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
      .container { max-width: 600px; margin: 0 auto; padding: 20px; }
      .header { text-align: center; padding: 20px; background-color: #f5f8fa; }
      .content { padding: 20px; background-color: #ffffff; }
      .footer { padding: 15px; margin-top: 20px; border-top: 1px solid #eaeaea; font-size: 14px; color: #666; text-align: center; }
      .logo { max-width: 200px; display: block; margin: 0 auto; }
      h2 { color: #0066B3; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <img src="https://chaasms.com/lovable-uploads/26c0451b-72e8-4bb2-9a58-202300301688.png" alt="CHAASMS Logo" width="200" height="60" class="logo">
      </div>
      <div class="content">
        <h2>Thank you for reaching out, ${formData.name}!</h2>
        <p>We have received your inquiry regarding ${formData.company} and will review it shortly.</p>
        <p>One of our team members will be in touch with you soon to discuss how we can help with your channel strategy needs.</p>
        <p>Best regards,</p>
        <p>The CHAASMS Team</p>
      </div>
      <div class="footer">
        <p>&copy; 2025 CHAASMS. All rights reserved.</p>
      </div>
    </div>
  </body>
</html>
    `;
    data.append('_autoresponse_message', autoReplyMessage);
    
    console.log("📨 Submitting form to FormSubmit.co...");
    console.log("🔄 Auto-reply configured for: " + formData.email);
    
    // FormSubmit API endpoint with activation code
    const endpoint = 'https://formsubmit.co/ajax/263a0ebbdac6852db27aea1c4cc7ef9c';
    
    // Log the full endpoint for debugging
    console.log("🔌 Using FormSubmit endpoint:", endpoint);
    
    // Send the submission with the proper content type
    const response = await fetch(endpoint, {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });
    
    // Log the raw response for debugging
    const rawResponse = await response.text();
    console.log("🔍 Raw FormSubmit response:", rawResponse);
    
    // Parse the response as JSON
    const result = JSON.parse(rawResponse);
    console.log("🔍 Parsed FormSubmit response:", result);
    
    // Check for success (FormSubmit returns "true" as a string)
    if (result.success === "true" || result.success === true) {
      console.log("✅ Form submitted successfully");
      console.log("✉️ Auto-reply should be sent to: " + formData.email);
      return { success: true };
    } else {
      console.error("❌ Form submission failed with status:", response.status);
      console.error("Error details:", result);
      
      // Check for specific FormSubmit messages
      if (result.message) {
        if (result.message.includes("Activation")) {
          return {
            success: false,
            error: "Form activation required. Please check your email for the activation link."
          };
        } else if (result.message.includes("spam")) {
          return {
            success: false,
            error: "Your message was flagged as spam. Please try with different content."
          };
        }
      }
      
      return { 
        success: false, 
        error: "Failed to send your message. Please email us directly."
      };
    }
    
  } catch (error) {
    console.error("❌ Form submission error:", error);
    return { 
      success: false, 
      error: "Technical error when sending the message. Please try again or email us directly."
    };
  }
};

/**
 * Parse error messages for user-friendly display
 */
export const parseFormError = (error: any): string => {
  console.error("❌ Form submission error details:", error);
  
  if (typeof error === 'string') {
    return error;
  }
  
  if (error?.message) {
    return `Error: ${error.message}`;
  }
  
  return "Failed to send message. Please email us directly at jeff.turner@chaasms.com";
};
