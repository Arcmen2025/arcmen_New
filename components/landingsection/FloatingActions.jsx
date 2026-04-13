"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";

const FloatingActions = () => {
  return (
    <div className="fixed right-4 bottom-20 z-50 flex flex-col items-center gap-3">
      <motion.a
        href="tel:+919962998008"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.10, 1] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg"
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
        className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg"
      >
        <FaWhatsapp size={24} />
      </motion.a>
    </div>
  );
};

export default FloatingActions;