// src/services/contactService.js
import { httpsCallable, getFunctions } from "firebase/functions";
import { functions } from "./firebase";

// Specify the region if not us-central1
export const sendMessage = async (form) => {
  try {
    const submitContact = httpsCallable(functions, "submitContact");
    const result = await submitContact(form);
    return { success: true, message: result.data.message || "Message sent successfully!" };
  } catch (err) {
    console.error("sendMessage error:", err);
    return { success: false, message: err.message || "Failed to send message." };
  }
};
