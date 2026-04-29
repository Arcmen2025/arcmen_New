"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaCheckCircle } from "react-icons/fa";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const FIELDS = [
  { name: "name", placeholder: "Full Name", type: "text" },
  { name: "phone", placeholder: "Mobile Number", type: "tel" },
  { name: "email", placeholder: "Email Id", type: "email" },
];

const API_URL =
  "https://api-arcmeninterior.webdadsprojects.com/api/v1/forms/landing-page/contact-us";

export default function LeadForm() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    project: "",
  });

  const [loading, setLoading] = useState(false);
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loading]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      const newBubble = {
        id,
        left: Math.random() * 100,
        size: 6 + Math.random() * 8,
      };

      setBubbles((prev) => [...prev, newBubble]);

      setTimeout(() => {
        setBubbles((prev) => prev.filter((b) => b.id !== id));
      }, 2000);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  const onChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    try {
      setLoading(true);
      const payload = {
        fullName: form.name,
        mobileNumber: form.phone,
        email: form.email,
        projectType: form.project || "Residential Interior",
      };

      const response = await axios.post(API_URL, payload);

      if (response.status === 200 || response.status === 201) {
        // ✅ THIS LINE AUTOMATICALLY ROUTES TO THANKYOU_PAGE
        router.push("/interior-designers-chennai/thank-you");
      }
    } catch (error) {
      console.error("API Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = `
    w-full bg-transparent 
    border border-white/30 
    rounded-lg px-4 py-3 md:py-0 text-sm 
    text-white placeholder-white
    transition-all duration-300
    hover:bg-white hover:text-black hover:placeholder-gray-400
    focus:bg-white focus:text-black focus:placeholder-gray-400
    focus:outline-none focus:border-black
  `;

  return (
    <>
      {/* LOADING POPUP */}
      {typeof window !== "undefined" &&
        loading &&
        createPortal(
          <div className="fixed inset-0 z-[2147483647] flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <div className="flex items-center gap-2 bg-white text-black rounded-lg px-4 py-3 shadow-xl">
              <div className="w-4 h-4 border-2 border-[#7aa33a] border-t-transparent rounded-full animate-spin"></div>
              <p className="text-sm font-medium text-[#7aa33a]">
                Submitting your request...
              </p>
            </div>
          </div>,
          document.body
        )}

      {/* FORM */}
      <motion.div
        id="contact"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full md:w-[70%] p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(255,255,255,0.15)] text-white"
      >
        <form onSubmit={onSubmit} className="flex flex-col gap-4 md:gap-0">
          {FIELDS.map((field) => (
            <input
              key={field.name}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              value={form[field.name]}
              onChange={(e) => {
                if (field.name === "phone") {
                  const value = e.target.value.replace(/\D/g, "");
                  if (value.length <= 10) {
                    setForm((prev) => ({ ...prev, phone: value }));
                  }
                } else {
                  onChange(e);
                }
              }}
              required
              maxLength={field.name === "phone" ? 10 : undefined}
              pattern={field.name === "phone" ? "[0-9]{10}" : undefined}
              title={
                field.name === "phone"
                  ? "Enter 10-digit mobile number"
                  : undefined
              }
              className={inputClass}
            />
          ))}

          <select
            name="project"
            value={form.project}
            onChange={onChange}
            className={inputClass}
          >
            <option value="" className="text-black">
              Project Type
            </option>
            <option className="text-black">2 BHK</option>
            <option className="text-black">3 BHK</option>
            <option className="text-black">4 BHK +</option>
            <option className="text-black">Villa</option>
          </select>

          <div className="flex justify-center mt-2 md:mb-2">
            <div className="relative inline-block">
              <motion.button
                type="submit"
                disabled={loading}
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                }}
                whileTap={{ scale: 0.95 }}
                className="relative z-10 inline-block w-full sm:w-auto px-6 sm:px-10 border-0 bg-[#4dbc15] text-white font-semibold py-[12px] rounded-lg transition duration-300 text-sm disabled:opacity-50"
              >
                Book a Free Consultation
              </motion.button>

              {bubbles?.map((b) => (
                <motion.span
                  key={b.id}
                  initial={{ y: 0, opacity: 0.4, scale: 1 }}
                  animate={{ y: -60, opacity: 0.4, scale: 1.4 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: `${b.left}%`,
                    width: b.size,
                    height: b.size,
                    borderRadius: "50%",
                    background: "#4dbc15",
                    pointerEvents: "none",
                  }}
                />
              ))}
            </div>
          </div>
        </form>
      </motion.div>
    </>
  );
}