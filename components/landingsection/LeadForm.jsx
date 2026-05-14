// "use client";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { FaCheckCircle } from "react-icons/fa";
// import { createPortal } from "react-dom";
// import { motion } from "framer-motion";
// import { useRouter } from "next/navigation";

// const FIELDS = [
//   { name: "name", placeholder: "Full Name", type: "text" },
//   { name: "phone", placeholder: "Mobile Number", type: "tel" },
//   { name: "email", placeholder: "Email Id", type: "email" },
// ];

// const API_URL =
//   "https://api.arcmeninterior.com/api/v1/forms/landing-page/contact-us";

// export default function LeadForm() {
//   const router = useRouter();

//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     project: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [bubbles, setBubbles] = useState([]);

//   useEffect(() => {
//     if (loading) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }

//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [loading]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const id = Date.now();
//       const newBubble = {
//         id,
//         left: Math.random() * 100,
//         size: 6 + Math.random() * 8,
//       };

//       setBubbles((prev) => [...prev, newBubble]);

//       setTimeout(() => {
//         setBubbles((prev) => prev.filter((b) => b.id !== id));
//       }, 2000);
//     }, 300);

//     return () => clearInterval(interval);
//   }, []);

//   const onChange = (e) =>
//     setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

//   const onSubmit = async (e) => {
//     e.preventDefault();

//     if (!/^[6-9]\d{9}$/.test(form.phone)) {
//       alert("Please enter a valid 10-digit mobile number");
//       return;
//     }

//     try {
//       setLoading(true);
//       const payload = {
//         fullName: form.name,
//         mobileNumber: form.phone,
//         email: form.email,
//         projectType: form.project || "Residential Interior",
//       };

//       const response = await axios.post(API_URL, payload);

//       if (response.status === 200 || response.status === 201) {
//         // ✅ THIS LINE AUTOMATICALLY ROUTES TO THANKYOU_PAGE
//         router.push("/interior-designers-chennai/thank-you");
//       }
//     } catch (error) {
//       console.error("API Error:", error);
//       alert("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const inputClass = `
//     w-full bg-transparent 
//     border border-white/30 
//     rounded-lg px-4 py-3 md:py-0 text-sm 
//     text-white placeholder-white
//     transition-all duration-300
//     hover:bg-white hover:text-black hover:placeholder-gray-400
//     focus:bg-white focus:text-black focus:placeholder-gray-400
//     focus:outline-none focus:border-black
//   `;

//   return (
//     <>
//       {/* LOADING POPUP */}
//       {typeof window !== "undefined" &&
//         loading &&
//         createPortal(
//           <div className="fixed inset-0 z-[2147483647] flex items-center justify-center bg-black/70 backdrop-blur-sm">
//             <div className="flex items-center gap-2 bg-white text-black rounded-lg px-4 py-3 shadow-xl">
//               <div className="w-4 h-4 border-2 border-[#7aa33a] border-t-transparent rounded-full animate-spin"></div>
//               <p className="text-sm font-medium text-[#7aa33a]">
//                 Submitting your request...
//               </p>
//             </div>
//           </div>,
//           document.body
//         )}

//       {/* FORM */}
//       <motion.div
//         id="contact"
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="w-full md:w-[70%] p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(255,255,255,0.15)] text-white"
//       >
//         <form onSubmit={onSubmit} className="flex flex-col gap-4 md:gap-0">
//           {FIELDS.map((field) => (
//             <input
//               key={field.name}
//               name={field.name}
//               type={field.type}
//               placeholder={field.placeholder}
//               value={form[field.name]}
//               onChange={(e) => {
//                 if (field.name === "phone") {
//                   const value = e.target.value.replace(/\D/g, "");
//                   if (value.length <= 10) {
//                     setForm((prev) => ({ ...prev, phone: value }));
//                   }
//                 } else {
//                   onChange(e);
//                 }
//               }}
//               required
//               maxLength={field.name === "phone" ? 10 : undefined}
//               pattern={field.name === "phone" ? "[0-9]{10}" : undefined}
//               title={
//                 field.name === "phone"
//                   ? "Enter 10-digit mobile number"
//                   : undefined
//               }
//               className={inputClass}
//             />
//           ))}

//           <select
//             name="project"
//             value={form.project}
//             onChange={onChange}
//             className={inputClass}
//           >
//             <option value="" className="text-black">
//               Project Type
//             </option>
//             <option className="text-black">2 BHK</option>
//             <option className="text-black">3 BHK</option>
//             <option className="text-black">4 BHK +</option>
//             <option className="text-black">Villa</option>
//           </select>

//           <div className="flex justify-center mt-2 md:mb-2">
//             <div className="relative inline-block">
//               <motion.button
//                 type="submit"
//                 disabled={loading}
//                 initial={{ scale: 1 }}
//                 animate={{ scale: [1, 1.05, 1] }}
//                 transition={{
//                   duration: 2,
//                   ease: "easeInOut",
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="relative z-10 inline-block w-full sm:w-auto px-6 sm:px-10 border-0 bg-[#4dbc15] text-white font-semibold py-[12px] rounded-lg transition duration-300 text-sm disabled:opacity-50"
//               >
//                 Book a Free Consultation
//               </motion.button>

//               {bubbles?.map((b) => (
//                 <motion.span
//                   key={b.id}
//                   initial={{ y: 0, opacity: 0.4, scale: 1 }}
//                   animate={{ y: -60, opacity: 0.4, scale: 1.4 }}
//                   transition={{ duration: 2, ease: "easeOut" }}
//                   style={{
//                     position: "absolute",
//                     bottom: 0,
//                     left: `${b.left}%`,
//                     width: b.size,
//                     height: b.size,
//                     borderRadius: "50%",
//                     background: "#4dbc15",
//                     pointerEvents: "none",
//                   }}
//                 />
//               ))}
//             </div>
//           </div>
//         </form>
//       </motion.div>
//     </>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const FIELDS =[
  { name: "name", placeholder: "Full Name", type: "text" },
  { name: "phone", placeholder: "Mobile Number", type: "tel" },
  { name: "location", placeholder: "Location", type: "text" },
];

const API_URL = "https://api.arcmeninterior.com/api/v1/forms/landing-page/contact-us";

export default function LeadForm({ isMobile = false }) {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", phone: "", location: "", project: "" });
  const [loading, setLoading] = useState(false);
  const[bubbles, setBubbles] = useState([]);

  // Handles overflow when API is loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [loading]);

  // Button bubbles animationn
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
        location: form.location,
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

  // FIXED: Removed hover:bg-white and focus:bg-white. 
  // Now inputs stay elegant, glassy, and text is permanently visible (white text on dark-glass background).
  const inputClass =
    "w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3.5 text-sm text-white placeholder-gray-400 transition-all duration-300 hover:bg-white/20 focus:bg-white/20 focus:border-[#4dbc15] focus:outline-none shadow-inner [&:-webkit-autofill]:bg-transparent [&:-webkit-autofill]:[-webkit-text-fill-color:white] [&:-webkit-autofill]:[transition:background-color_5000s_ease-in-out_0s]";

  return (
    <>
      {/* FIXED: Wrapped loading text in a proper UI overlay so it doesn't break your layout */}
      {typeof window !== "undefined" && loading && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm text-white text-lg font-medium">
          Submitting your request...
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
            : "p-8 rounded-[2rem] bg-black/60 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.5)]"
        } text-white relative`}
      >
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
                form.project === "" ? "text-gray-400" : "text-white"
              }`}
            >
              {/* FIXED: Gave options a dark background so they are visible in dropdown menus across all OS/Browsers */}
              <option value="" disabled className="bg-neutral-800 text-white">
                Project Type
              </option>
              <option value="2 BHK" className="bg-neutral-800 text-white">2 BHK</option>
              <option value="3 BHK" className="bg-neutral-800 text-white">3 BHK</option>
              <option value="4 BHK +" className="bg-neutral-800 text-white">4 BHK +</option>
              <option value="Villa" className="bg-neutral-800 text-white">Villa</option>
            </select>
            {/* Custom arrow for select since appearance-none hides standard one */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white">
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

          <div className="flex justify-center mt-4">
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
                className="relative overflow-hidden z-10 w-full bg-[#4dbc15] text-white font-bold py-3 rounded-xl transition duration-300 text-sm tracking-wide shadow-lg disabled:opacity-50"
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
                    background: "rgba(255,255,255,0.4)",
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