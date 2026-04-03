"use client";

import { useState } from "react";
import axios from "axios";
import { FaCheckCircle } from "react-icons/fa";

const FIELDS = [
  { name: "name", placeholder: "Full Name", type: "text" },
  { name: "phone", placeholder: "Mobile Number", type: "tel" },
  { name: "email", placeholder: "Email Id", type: "email" },
  { name: "city", placeholder: "City", type: "text" },
];

const API_URL =
  "https://api-arcmeninterior.webdadsprojects.com/api/v1/forms/landing-page/contact-us";

export default function LeadForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    project: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const onChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const payload = {
        fullName: form.name,
        mobileNumber: form.phone,
        email: form.email,
        city: form.city,
        projectType: form.project || "Residential Interior",
        message: form.message,
      };

      const response = await axios.post(API_URL, payload);

      if (response.status === 200 || response.status === 201) {
        setSuccess(true);

        setForm({
          name: "",
          phone: "",
          email: "",
          city: "",
          project: "",
          message: "",
        });

        setTimeout(() => setSuccess(false), 2500);
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
    rounded-lg px-4 py-3 text-sm 
    text-white placeholder-white
    transition-all duration-300
    hover:bg-white hover:text-black hover:placeholder-gray-400
    focus:bg-white focus:text-black focus:placeholder-gray-400
    focus:outline-none focus:border-black
  `;

  return (
    <>
      {/* 🔄 LOADING */}
      {loading && (
        <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/70">
          <div className="flex flex-col items-center gap-4 bg-white text-black rounded-2xl px-8 py-6 shadow-xl">
            <div className="w-10 h-10 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
            <p className="text-sm font-medium">Submitting your request...</p>
          </div>
        </div>
      )}

      {/* ✅ SUCCESS */}
      {success && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70">
          <div className="flex flex-col items-center text-center gap-3 bg-white text-black px-10 py-8 rounded-2xl shadow-2xl">
            <FaCheckCircle className="text-green-500 text-5xl" />
            <h3 className="text-lg font-semibold">Thank You!</h3>
            <p className="text-sm text-gray-600">
              We will contact you shortly.
            </p>
          </div>
        </div>
      )}

      {/* FORM */}
      <div
        id="contact"
        className="
          w-full md:w-[70%] p-6 md:p-8 rounded-3xl
          bg-white/6
          border border-white/20
          shadow-[0_20px_60px_rgba(0,0,0,0.5)]
          text-white
        "
      >
        <h3 className="text-xl md:text-2xl font-semibold mb-6">
          Get Your Interior Quote
        </h3>

        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          {FIELDS.map((field) => (
            <input
              key={field.name}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              value={form[field.name]}
              onChange={onChange}
              required
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

          <textarea
            name="message"
            placeholder="Message"
            rows={3}
            value={form.message}
            onChange={onChange}
            className={inputClass}
          />

          <div className="text-center mt-12 md:mb-14">
            <button
              type="submit"
              disabled={loading}
              className="
                inline-block
                w-full sm:w-auto
                px-6 sm:px-10
                bg-white text-black font-semibold
                py-3 rounded-lg
                hover:bg-white/90 transition duration-300 text-sm
                disabled:opacity-50
              "
            >
              Book a Free Consultation
            </button>
          </div>
        </form>
      </div>
    </>
  );
}