"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";

export default function BottomCenterButton({
  setIsMobileFormOpen,
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [bubbles, setBubbles] = useState([]);

  // Prevent SSR hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll visibility
  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 700);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mounted]);

  // Bubble animation
  useEffect(() => {
    if (!mounted) return;

    const interval = setInterval(() => {
      const id = Date.now();

      const newBubble = {
        id,
        left: Math.random() * 100,
        size: 6 + Math.random() * 8,
      };

      setBubbles((prev) => [...prev, newBubble]);

      setTimeout(() => {
        setBubbles((prev) =>
          prev.filter((b) => b.id !== id)
        );
      }, 2000);
    }, 300);

    return () => clearInterval(interval);
  }, [mounted]);

  // Avoid SSR mismatch
  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 left-0 w-full z-[999] px-4">
      <div className="max-w-7xl mx-auto flex justify-center">

        <motion.div
          initial={{
            opacity: 0,
            y: 100,
            scale: 0.95,
          }}
          animate={
            scrolled
              ? {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }
              : {
                  opacity: 0,
                  y: 100,
                  scale: 0.95,
                }
          }
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 18,
            mass: 0.6,
          }}
          className="relative"
        >

          {/* Desktop Button */}
          <a
            href="#contact"
            className="hidden md:block text-md font-medium whitespace-nowrap text-white bg-[#4dbc15] rounded-full py-2 px-5 shadow-lg"
          >
            Book Free Consultation
          </a>

          {/* Mobile Buttons */}
          <div
            className="
              md:hidden
              relative
              rounded-full
              p-[2px]
              bg-[linear-gradient(270deg,#4dbc15,#00c6ff,#4dbc15)]
            "
          >
            <div
              className="
                bg-white
                border
                border-gray-700
                py-3
                px-2
                rounded-full
                shadow-xl
                flex
                items-center
                gap-2
                overflow-hidden
              "
            >

              {/* Open Form */}
              <button
                type="button"
                onClick={() =>
                  setIsMobileFormOpen(true)
                }
                className="
                  text-sm
                  font-medium
                  whitespace-nowrap
                  text-white
                  bg-[#4dbc15]
                  rounded-full
                  py-2
                  px-3
                  active:scale-95
                  transition-transform
                "
              >
                Book Free Consultation
              </button>

              {/* Call */}
              <a
                href="tel:+919962998008"
                className="
                  flex
                  items-center
                  justify-center
                  text-white
                  bg-black
                  rounded-full
                  p-2
                "
              >
                <IoMdCall size={24} />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919962998008"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  justify-center
                  bg-green-600
                  p-2
                  rounded-full
                  text-white
                "
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>

          {/* Bubble Effects */}
          {bubbles.map((b) => (
            <motion.span
              key={b.id}
              initial={{
                y: 0,
                opacity: 0.4,
                scale: 1,
              }}
              animate={{
                y: -60,
                opacity: 0,
                scale: 1.5,
              }}
              transition={{
                duration: 2,
                ease: "easeOut",
              }}
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
        </motion.div>
      </div>
    </div>
  );
}