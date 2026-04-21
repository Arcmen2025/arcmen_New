"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaCheckCircle, FaHome } from "react-icons/fa";
import { useEffect } from "react";

export default function Thankyou_Page() {
  const router = useRouter();

  // Prevent scrolling on body when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleDoneClick = () => {
    router.push("/interior-designers-chennai");
  };

  return (
    // Full screen overlay - covers everything
    <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center p-4">
      {/* Optional: Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
      
      {/* Modal Content - Centered */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 25
        }}
        className="relative z-10 max-w-md w-full mx-auto"
      >
        {/* Success Modal Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 text-center border border-gray-100 mt-4">
          
          {/* Success Icon with Animation */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 20,
              delay: 0.1
            }}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl animate-ping"></div>
              <FaCheckCircle className="relative text-green-500 text-7xl md:text-8xl" />
            </div>
          </motion.div>

          {/* Success Message */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Thank You!
            </h1>
            <p className="text-gray-600 text-base md:text-lg mb-4">
              Your consultation request has been successfully submitted.
            </p>
            
            {/* Success Banner */}
              <p className="text-green-600 font-semibold text-sm md:text-base">
                Our team will contact you within 24 hours 
              </p>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="my-6 h-px bg-gray-200"
          />

          {/* Done Button */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleDoneClick}
            className="w-full hover:from-green-600 hover:to-green-700 font-semibold py-2 px-6 rounded-xl duration-300 hover:shadow-xl flex items-center justify-center gap-2 group"
          >
            <FaHome className="group-hover:scale-110 transition-transform" />
            <span>Done</span>
          </motion.button>

          {/* Footer Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-center text-gray-400 text-xs mt-6"
          >
            You will receive a confirmation email shortly
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}