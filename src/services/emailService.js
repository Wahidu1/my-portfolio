// src/services/emailService.js
import emailjs from "@emailjs/browser";

export const sendEmail = async (formRef) => {
  try {
    const result = await emailjs.sendForm(
      "YOUR_SERVICE_ID",   // Replace with your EmailJS service ID
      "YOUR_TEMPLATE_ID",  // Replace with your EmailJS template ID
      formRef.current,     // Form reference
      "YOUR_PUBLIC_KEY"    // Replace with your EmailJS public key
    );
    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    return { success: false, message: "Failed to send email", error };
  }
};
