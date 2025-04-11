
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
    
    // Build form data for submission
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('company', formData.company);
    data.append('website', formData.website || 'Not provided');
    data.append('message', formData.message);
    
    // Add FormSubmit specific fields
    data.append('_subject', `Contact from ${formData.name} at ${formData.company}`);
    data.append('_replyto', formData.email); // Ensures reply-to is set correctly
    data.append('_template', 'box'); // Nice HTML template
    
    // Auto-reply configuration - formatting for a proper HTML email
    // The subject line for the auto-reply email
    data.append('_autoresponse', `Thank you for contacting CHAASMS, ${formData.name}!`);
    
    // The HTML content of the auto-reply email - properly formatted
    const autoReplyMessage = `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
            .header { text-align: center; padding: 20px; }
            .content { padding: 20px; }
            .footer { padding-top: 15px; margin-top: 20px; border-top: 1px solid #eaeaea; font-size: 14px; color: #666; }
            .logo { max-width: 200px; height: auto; }
          </style>
        </head>
        <body>
          <div class="header">
            <img class="logo" src="https://chaasms.com/lovable-uploads/26c0451b-72e8-4bb2-9a58-202300301688.png" alt="CHAASMS Logo">
          </div>
          <div class="content">
            <h2>Thank you for reaching out, ${formData.name}!</h2>
            <p>We have received your inquiry regarding ${formData.company} and will review it shortly.</p>
            <p>One of our team members will be in touch with you soon.</p>
          </div>
          <div class="footer">
            <p>The CHAASMS Team</p>
          </div>
        </body>
      </html>
    `;
    data.append('_autoresponse_message', autoReplyMessage);
    
    console.log("📨 Submitting form to FormSubmit.co...");
    console.log("🔄 Auto-reply configured for: " + formData.email);
    
    // The email address to send notifications to
    // FormSubmit will send all form submissions to this address
    const response = await fetch('https://formsubmit.co/jeff.turner@chaasms.com', {
      method: 'POST',
      body: data,
      mode: 'no-cors' // Important for cross-origin requests
    });
    
    console.log("✅ Form submitted successfully");
    console.log("✉️ Auto-reply should be sent to: " + formData.email);
    return { success: true };
    
  } catch (error) {
    console.error("❌ Form submission error:", error);
    return { 
      success: false, 
      error: "Failed to send your message. Please email us directly."
    };
  }
};

/**
 * Parse error messages for user-friendly display
 */
export const parseFormError = (error: any): string => {
  console.error("❌ Form submission error details:", error);
  return "Failed to send message. Please email us directly at jeff.turner@chaasms.com";
};
