"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const FIELDS =[
  { name: "name", placeholder: "Full Name", type: "text" },
  { name: "phone", placeholder: "Mobile Number", type: "tel" },
  { name: "email", placeholder: "Email Id", type: "email" },
];

const API_URL = "https://api.arcmeninterior.com/api/v1/forms/landing-page/contact-us";

export default function LeadFormMobile({ isMobile = false }) {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", phone: "", email: "", project: "" });
  const [loading, setLoading] = useState(false);
  const [bubbles, setBubbles] = useState([]);

  // Handles overflow when API is loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [loading]);

  // Button bubbles animation
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
  },[]);

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
        router.push("/interior-designers-chennai/thank-you");
      }
    } catch (error) {
      console.error("API Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Cream/Light color scheme - no shadows, clean and bright
  const inputClass =
    "w-full bg-gray-50 border border-amber-100 rounded-lg px-4 py-3.5 text-sm text-gray-700 placeholder-gray-400 transition-all duration-300 hover:bg-white focus:bg-white focus:border-[#4dbc15] focus:outline-none focus:ring-2 focus:ring-[#4dbc15]/20";

  return (
    <>
      {/* Loading Overlay - Cream/Light theme */}
      {typeof window !== "undefined" && loading && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/95 backdrop-blur-sm text-gray-700 text-lg font-medium">
          <div className="bg-[#4dbc15] text-white px-6 py-3 rounded-full shadow-sm">
            Submitting your request...
          </div>
        </div>
      )}

      <motion.div
        id="contact"
        initial={!isMobile ? { opacity: 0, y: 40 } : { opacity: 1, y: 0 }}
        whileInView={!isMobile ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={`w-full max-w-sm ${
          isMobile
            ? "p-0"
            : "p-8 rounded-[2rem] bg-gray-100 shadow-sm"
        } text-gray-700 relative mt-4 bg-gray-100 p-4 rounded-xl`}
      >
        <p className="flex items-center justify-center text-[#4dbc15] text-lg sm:text-lg md:text-xl lg:text-xl font-semibold">Book 3D Design Session</p>
        <form onSubmit={onSubmit} className="flex flex-col gap-4 relative z-10">
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

          <div className="relative">
            <select
              name="project"
              value={form.project}
              onChange={onChange}
              className={`${inputClass} appearance-none cursor-pointer ${
                form.project === "" ? "text-gray-400" : "text-black"
              }`}
            >
              {/* FIXED: Gave options a dark background so they are visible in dropdown menus across all OS/Browsers */}
              <option value="" disabled className="bg-neutral-800 text-black">
                Project Type
              </option>
              <option value="2 BHK" className="bg-neutral-800 text-white">2 BHK</option>
              <option value="3 BHK" className="bg-neutral-800 text-white">3 BHK</option>
              <option value="4 BHK +" className="bg-neutral-800 text-white">4 BHK +</option>
              <option value="Villa" className="bg-neutral-800 text-white">Villa</option>
            </select>
            {/* Custom arrow */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>

          <div className="flex justify-center mt-2">
            <div className="relative w-full">
              <motion.button
                type="submit"
                disabled={loading}
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.02, 1] }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden z-10 w-full bg-[#4dbc15] text-white font-semibold py-2 sm:py-3 md:py-3 rounded-xl transition duration-300 text-sm tracking-wide shadow-sm hover:shadow-md hover:bg-[#3da30e] disabled:opacity-50"
              >
                Book a Free Consultation
              </motion.button>

              {/* Bubble Animations inside button */}
              {bubbles?.map((b) => (
                <motion.span
                  key={b.id}
                  initial={{ y: 20, opacity: 0.6, scale: 0.5 }}
                  animate={{ y: -60, opacity: 0, scale: 1.5 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  style={{
                    position: "absolute",
                    bottom: -10,
                    left: `${b.left}%`,
                    width: b.size,
                    height: b.size,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.6)",
                    pointerEvents: "none",
                    zIndex: 20,
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