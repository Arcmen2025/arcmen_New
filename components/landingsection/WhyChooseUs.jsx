"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FEATURES } from "@/app/utilits/Constant";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";


export default function WhyChooseUs() {
  const [index, setIndex] = useState(0);
  const [isResetting, setIsResetting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
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

  const itemsPerSlide = isMobile ? 1 : 4;

  const slides = [];
  for (let i = 0; i < FEATURES.length; i += itemsPerSlide) {
    slides.push(FEATURES.slice(i, i + itemsPerSlide));
  }

  const totalSlides = slides.length;
  const extendedSlides = [...slides, ...slides];

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3500);

    return () => clearInterval(interval);
  }, [index, isMobile]);

  const handleNext = () => {
    setIsResetting(false);
    setIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setIsResetting(false);
    setIndex((prev) => prev - 1);
  };

  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <div className="text-center mb-6 md:mb-14">
          <motion.h2
            className="sec-head text-black font-extrabold !text-[20px] md:text-[34px] 2xl:text-[48px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            What Makes Arcmen <br />Interiors the Right Choice
          </motion.h2>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${index * 100}%` }}
            transition={
              isResetting
                ? { duration: 0 }
                : { duration: 0.6, ease: "easeInOut" }
            }
            onAnimationComplete={() => {
              if (index >= totalSlides) {
                setIsResetting(true);
                setIndex(0);
              }

              if (index < 0) {
                setIsResetting(true);
                setIndex(totalSlides - 1);
              }
            }}
          >
            {extendedSlides.map((group, i) => (
              <div
                key={i}
                className={`min-w-full flex gap-6 ${
                  isMobile ? "justify-center" : "justify-between"
                }`}
              >
                {group.map((f, j) => (
                  <div
                    key={j}
                    className={isMobile ? "w-full text-center" : "w-1/4 text-center"}
                  >
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-5">
                      <img src={f.icon} alt={f.title} className="w-8 h-8" />
                    </div>

                    <h3 className="text-[#000000] md:text-[20px] text-sm mb-2">
                      {f.title}
                    </h3>

                    <h3 className="text-[#000000] md:text-[18px] text-xs mb-4">
                      {f.para}
                    </h3>

                    <p className="text-[#666666] md:text-[14px] text-xs leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Button */}
        {/* <motion.div
          className="text-center mt-4"
        >
          <a
            href="#contact"
            className="border border-black py-3 md:px-8 px-[10px] rounded-[8px] text-black hover:bg-[#4dbc15] hover:text-[#ffffff] transition"
          >
           Start Your Dream Home Interior
          </a>
        </motion.div> */}
        <div className="flex justify-center mt-4 md:mb-10">
  <div className="relative inline-block">

    <motion.a
  href="#contact"
  initial={{ scale: 1 }}
  animate={{ scale: [1, 1.06, 1] }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  whileTap={{ scale: 0.95 }}
  className="
    inline-block  
    transform-gpu 
    relative z-10 
    border border-black 
    bg-[#7c381a] text-white 
    md:px-10 py-2 rounded-[8px] 
    px-4
    font-medium text-sm md:text-base 
     hover:text-white transition
  "
>
 Start Your Dream Home Interior
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
          background: "#7c381a",
          pointerEvents: "none",
        }}
      />
    ))}

  </div>
</div>

        {/* Arrows */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={handlePrev}
            className="w-10 h-10 flex items-center border-0 justify-center rounded-full bg-[#F2F2F2] hover:bg-black hover:text-white transition"
          >
            <FaArrowLeftLong />
          </button>

          <button
            onClick={handleNext}
            className="w-10 h-10 flex items-center border-0 justify-center rounded-full bg-[#F2F2F2] hover:bg-black hover:text-white transition"
          >
            <FaArrowRightLong />
          </button>
        </div>

      </div>
    </section>
  );
}