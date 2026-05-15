"use client";

import { useState, useEffect } from "react";

const API_URL =
  "https://api.arcmeninterior.com/api/v1/forms/landing-page/contact-us";

const FIELDS = [
  {
    name: "name",
    placeholder: "Full Name",
    type: "text",
  },
  {
    name: "phone",
    placeholder: "Mobile Number",
    type: "tel",
  },
  {
    name: "location",
    placeholder: "Location",
    type: "text",
  },
];

export default function LeadForm({ isMobile = false }) {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    project: "",
  });

  // Prevent body scroll while submitting
  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loading]);

  const onChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Phone validation
    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        fullName: form.name,
        mobileNumber: form.phone,
        location: form.location,
        projectType: form.project || "Residential Interior",
      };

      // Optimized fetch instead of axios
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        window.location.href =
          "/interior-designers-chennai/thank-you";
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      console.error("API Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-gray-400 outline-none focus:border-[#4dbc15]";

  return (
    <>
      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/85 text-white">
          <div className="flex flex-col items-center gap-4">
            
            {/* Loader */}
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-white/20 border-t-[#4dbc15]" />

            <p className="text-sm font-medium tracking-wide">
              Submitting your request...
            </p>
          </div>
        </div>
      )}

      {/* Form Container */}
      <div
        id="contact"
        className={`w-full max-w-sm text-white animate-[fadeIn_.4s_ease-out] ${
          isMobile
  ? "bg-black/95 p-6 rounded-[2rem] shadow-2xl"
            : "rounded-[2rem] bg-black/70 p-8 shadow-2xl"
        }`}
      >
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-4"
        >
          {/* Inputs */}
          {FIELDS.map((field) => (
            <input
              key={field.name}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              value={form[field.name]}
              required
              autoComplete="off"
              className={inputClass}
              maxLength={
                field.name === "phone" ? 10 : undefined
              }
              pattern={
                field.name === "phone"
                  ? "[0-9]{10}"
                  : undefined
              }
              title={
                field.name === "phone"
                  ? "Enter valid 10-digit mobile number"
                  : undefined
              }
              onChange={(e) => {
                if (field.name === "phone") {
                  const value = e.target.value.replace(/\D/g, "");

                  if (value.length <= 10) {
                    setForm((prev) => ({
                      ...prev,
                      phone: value,
                    }));
                  }
                } else {
                  onChange(e);
                }
              }}
            />
          ))}

          {/* Select */}
          <div className="relative">
            <select
              name="project"
              value={form.project}
              onChange={onChange}
              className={`${inputClass} appearance-none cursor-pointer  ${
                form.project === ""
                  ? "text-gray-400 "
                  : "text-white"
              }`}
            >
              <option className="bg-black/90" value="" disabled>
                Project Type
              </option>

              <option className="bg-black/90" value="2 BHK">2 BHK</option>

              <option className="bg-black/90" value="3 BHK">3 BHK</option>

              <option className="bg-black/90" value="4 BHK +">4 BHK +</option>

              <option className="bg-black/90" value="Villa">Villa</option>
            </select>

            {/* Arrow */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="mt-2 rounded-xl bg-[#4dbc15] py-3 text-sm font-bold tracking-wide text-white transition-opacity duration-200 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading
              ? "Submitting..."
              : "Book a Free Consultation"}
          </button>
        </form>
      </div>
    </>
  );
}