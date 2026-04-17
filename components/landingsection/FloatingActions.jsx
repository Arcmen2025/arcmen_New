"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";

const FloatingActions = () => {
  return (
    <div className="hidden  fixed right-3 bottom-10 z-50 md:flex flex-col items-center gap-4">
      <motion.a
        href="tel:+919962998008"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.10, 1] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-10 h-10  bg-[#4dbc15] rounded-full flex items-center justify-center text-white shadow-lg"
      >
        <IoMdCall size={26} />
      </motion.a>
      <motion.a
        href="https://wa.me/9962998008"
        target="_blank"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.10, 1] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-10 h-10  bg-[#4dbc15] rounded-full flex items-center justify-center text-white shadow-lg"
      >
        <FaWhatsapp size={24} />
      </motion.a>
    </div>
  );
};

export default FloatingActions;