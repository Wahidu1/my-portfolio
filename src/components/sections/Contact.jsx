import { motion, AnimatePresence } from "framer-motion";
import SectionCard from "../ui/SectionCard";
import TerminalWindow from "../ui/TerminalWindow";
import { useState } from "react";
import { sendMessage } from "../../services/contactService";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, success: true, message: "" });
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setToast({ show: false, success: true, message: "" });

    try {
      if (!executeRecaptcha) {
        showToast(false, "reCAPTCHA not ready, try again.");
        return;
      }
      const token = await executeRecaptcha("contact_form");
      const res = await sendMessage({ ...form, token });
      if (res.success) {
        setForm({ name: "", email: "", message: "" });
        showToast(true, "Message sent! We've emailed you a confirmation.");
      } else {
        showToast(false, res.message);
      }
    } catch (err) {
      console.error(err);
      showToast(false, "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const showToast = (success, message) => {
    setToast({ show: true, success, message });
    setTimeout(() => setToast((p) => ({ ...p, show: false })), 4000);
  };

  return (
    <section className="section-padding bg-white">
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            className={`fixed top-20 left-1/2 -translate-x-1/2 px-5 py-3 z-50 font-mono text-sm border ${
              toast.success
                ? "bg-white border-[var(--color-syntax)] text-[var(--color-syntax)] shadow-lg"
                : "bg-white border-red-400 text-red-600 shadow-lg"
            }`}
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="section-container max-w-xl">
        <SectionCard heading="Get in Touch" label="// contact" subtext="Have a project in mind? Send a message." />

        <TerminalWindow title="~/contact/send_message.sh" tabLabel="bash">
          <motion.form
            className="space-y-4"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
          >
            <p className="font-mono text-xs text-[var(--color-accent)]">$ ./send_message --interactive</p>
            <div>
              <label className="block font-mono text-xs text-gray-500 mb-1">--name</label>
              <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input-field" required />
            </div>
            <div>
              <label className="block font-mono text-xs text-gray-500 mb-1">--email</label>
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="input-field" required />
            </div>
            <div>
              <label className="block font-mono text-xs text-gray-500 mb-1">--message</label>
              <textarea rows="5" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="input-field resize-none" required />
            </div>
            <button type="submit" disabled={loading} className={`btn-primary w-full justify-center ${loading ? "opacity-60 cursor-not-allowed" : ""}`}>
              {loading ? "> sending..." : "> send_message"}
            </button>
          </motion.form>
        </TerminalWindow>
      </div>
    </section>
  );
}
