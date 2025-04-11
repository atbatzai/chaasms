
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
    data.append('_autoresponse', `Thank you for contacting CHAASMS, ${formData.name}!`); // Auto-reply subject
    data.append('_autoresponse_message', `
      <div style="font-family: system-ui, sans-serif, Arial; font-size: 16px; line-height: 1.5; color: #333;">
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="https://chaasms.com/lovable-uploads/26c0451b-72e8-4bb2-9a58-202300301688.png" alt="CHAASMS Logo" style="max-width: 200px; height: auto;" />
        </div>
        <p>Thank you for reaching out to us! We have received your request and we'll be in touch soon.</p>
        <p style="padding-top: 16px; border-top: 1px solid #eaeaea;">The CHAASMS Team</p>
      </div>
    `);
    
    console.log("📨 Submitting form to FormSubmit.co...");
    
    // The email address to send notifications to
    // FormSubmit will send all form submissions to this address
    const response = await fetch('https://formsubmit.co/jeff.turner@chaasms.com', {
      method: 'POST',
      body: data,
      mode: 'no-cors' // Important for cross-origin requests
    });
    
    console.log("✅ Form submitted successfully");
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
