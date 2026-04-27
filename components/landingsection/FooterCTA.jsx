"use client"
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function FooterCTA() {
  const [bubbles, setBubbles] = useState([]);
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

  return (
    <>
      <section className="relative h-[500px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(https://assets.webdads2u.com/images/1777294954753-image-40.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

          <h2 className="text-white text-3xl font-bold mb-4 leading-tight">
            Your Perfect Home Is
            <span className="block">One Click Away.</span>
          </h2>
          <div className="relative inline-block">

            <motion.a
              href="#contact"
              whileTap={{ scale: 0.95 }}
              className="
    inline-block  
    transform-gpu 
    relative z-10 
    bg-[#4dbc15] text-white 
    px-10 py-3 rounded-[8px] 
    font-medium text-sm md:text-base 
     hover:text-white transition
  "
            >
              Book Free Site Visit
            </motion.a>

            {bubbles.map((b) => (
              <motion.span
                key={b.id}
                initial={{ y: 0, opacity: 0.4 }}
                animate={{ y: -60, opacity: 0.4 }}
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
          <p className="text-white/70 text-sm md:text-base mt-6 max-w-xl">
            Let's plan your space together.
          </p>
        </div>
      </section>
      <div className="bg-black mx-auto py-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-white text-center md:text-[14px] text-xs ">
            © {new Date().getFullYear()} Arcmen kitchens and interiors. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
}