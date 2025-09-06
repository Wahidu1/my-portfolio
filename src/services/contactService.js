// src/services/contactService.js
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";
import emailjs from "@emailjs/browser";
import { p } from "framer-motion/client";

export const sendMessage = async (form) => {
  try {
    // 1. Save to Firestore
    await addDoc(collection(db, "contacts"), {
      name: form.name,
      email: form.email,
      message: form.message,
      recaptchaToken: form.token,
      createdAt: serverTimestamp(),
    });

    // 2. Build a fake form element for EmailJS
    const formElement = document.createElement("form");
    Object.entries(form).forEach(([key, value]) => {
      const input = document.createElement("input");
      input.setAttribute("name", key);
      input.setAttribute("value", value);
      formElement.appendChild(input);
    });

    // 3. Send email to YOU (admin)
    await emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID , // your EmailJS service ID
      import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID, // template that emails YOU
      formElement,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY // your EmailJS public key
    );

    // 4. Send confirmation email to USER
    await emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, // your EmailJS service ID
      import.meta.env.VITE_EMAILJS_USER_TEMPLATE_ID, // template that thanks the USER
      formElement,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY // your EmailJS public key
    );

    return { success: true, message: "Message saved & emails sent successfully!" };
  } catch (err) {
    console.error(err);
    return { success: false, message: "Failed to send message." };
  }
};
