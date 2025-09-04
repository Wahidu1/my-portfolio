import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import SectionCard from "../ui/SectionCard";
import { useState, useEffect } from "react";
import { sendMessage } from "../../services/contactService";
import { useSettings } from "../../context/SettingsContext";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, success: true, message: "" });
  const { settings } = useSettings();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setToast({ show: false, success: true, message: "" });

    try {
      const res = await sendMessage(form);
      if (res.success) {
        setForm({ name: "", email: "", message: "" });
        showToast(true, res.message || "Message sent successfully!");
      } else {
        showToast(false, res.message || "Failed to send message.");
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
    setTimeout(() => setToast({ ...toast, show: false }), 4000); // hide after 4s
  };

  return (
    <section className="bg-gray-100 text-black py-24 px-6 md:px-20 relative">
      {/* Toast */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className={`fixed top-5 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-xl shadow-lg z-50 font-medium
              ${toast.success ? "bg-green-600 text-white" : "bg-red-600 text-white"}`}
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-4xl mx-auto text-center">
        <SectionCard
          heading={"Get in Touch"}
          subtext={"Have a project idea or just want to say hello? Let’s connect!"}
        />

        <motion.form
          className="grid grid-cols-1 gap-6 text-left mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full p-4 rounded-xl bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full p-4 rounded-xl bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full p-4 rounded-xl bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
            required
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className={`w-full font-semibold py-4 rounded-xl transition duration-300 ease-in-out
              ${loading
                ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                : "bg-gray-900 text-gray-300 hover:bg-gray-300 hover:text-gray-900 hover:scale-105"
              }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>

        {/* Alternative Contact Info */}
        <motion.div
          className="mt-12 space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <p className="text-gray-400">
            Or email me directly at{" "}
            <a href={`mailto:${settings.email}`} className="text-blue-500 underline">
              {settings.email}
            </a>
          </p>
          <div className="flex gap-6 justify-center text-xl">
            <a href={settings.github || "#"} className="hover:text-gray-300 transition">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href={settings.linkedin || "#"} className="hover:text-gray-300 transition">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href={settings.twitter || "#"} className="hover:text-gray-300 transition">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
