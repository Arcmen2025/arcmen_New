"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SOLUTIONS } from "@/app/utilits/constants";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const IMAGES = [
  "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207595/modularkitchen_l4h8ah.jpg",
  "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207579/Bedroomser_hf3gcu.jpg",
  "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207595/livingser_pqap2k.jpg",
  "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207603/poojaser_arg5cb.jpg",
  "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207604/tabimg1_df8vzi.svg",
  "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207589/Dinning_d6dqvu.jpg",
  "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207589/home6_o7s2tf.jpg",
  "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207564/tabimg4_xsg3kw.svg"
];

export default function SolutionsSlider() {
  const [index, setIndex] = useState(0);
  const [isReset, setIsReset] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const total = SOLUTIONS?.length || 0;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const data = [...SOLUTIONS, ...SOLUTIONS];

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [index, isMobile, isHovered]);

  const nextSlide = () => {
    if (index >= total) {
      setIsReset(true);
      setIndex(0);
      return;
    }
    setIsReset(false);
    setIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIsReset(false);
    setIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  return (
    <section className="md:py-16 py-10 bg-[#FBFBFB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="sec-head text-black font-extrabold !text-[20px] md:text-[34px] 2xl:text-[48px] leading-tight">
            Complete Interior Solutions <br />for Modern Homes
          </h2>
        </motion.div>

        {/* Slider */}
        <div className="overflow-hidden">
          <motion.div
            style={{ pointerEvents: "auto" }}
            className={`flex ${isMobile ? "gap-0" : "gap-4"}`}
            animate={{
              // 280px card + 16px (gap-4) = 296px shift per slide on desktop
              x: isMobile ? `-${index * 100}%` : -index * 296,
            }}
            transition={
              isReset ? { duration: 0 } : { duration: 0.6, ease: "easeInOut" }
            }
            onAnimationComplete={() => {
              if (isReset) setIsReset(false);
            }}
          >
            {data.map((s, i) => {
              const img = IMAGES[i % IMAGES.length];

              return (
                <div
                  key={i}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onTouchStart={() => setIsHovered(true)} // Better mobile support
                  onTouchEnd={() => setIsHovered(false)}  // Better mobile support
                  className={`
                    ${isMobile ? "min-w-full px-2" : "min-w-[280px]"}
                    h-80 md:h-96 relative group rounded-2xl overflow-hidden
                    pointer-events-auto cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300
                  `}
                >
                  {/* Image with Zoom Effect */}
                  <img
                    src={img}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />

                  {/* Gradient Overlay (Always slightly visible at bottom, darker on hover) */}
                  <div className="absolute  inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-[5]" />

                  {/* Content Container */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5 z-[10] pointer-events-auto">
                    
                    {/* Title (Always visible, slides up slightly on hover) */}
                    <h3 className="text-white md:text-[26px] text-xl font-bold mb-1 transform transition-transform duration-500 ease-in-out group-hover:-translate-y-2">
                      {s.title}
                    </h3>

                    {/* Hidden Content (Reveals smoothly on hover using Grid trick) */}
                    <div className="grid grid-rows-[0fr]  group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                      <div className="overflow-hidden">
                        <div className="pb-2">
                          <p className="text-gray-200 text-sm mb-1">{s.desc}</p>
                          <p className="text-gray-200 text-sm mb-1">{s.secdesc}</p>
                          <p className="text-gray-200 text-sm mb-4">{s.thirddesc}</p>

                          <a
                            href="#contact"
                            className="inline-block bg-[#4dbc15] hover:bg-[#4dbc15] hover:text-black text-white font-semibold text-xs px-5 py-2.5 rounded-full transition-colors duration-300"
                          >
                            Get a Quote
                          </a>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block border text-[#000000] font-semibold border-black px-6 py-3 rounded-md text-sm hover:bg-[#4dbc15] hover:border-[#4dbc15] hover:text-white transition-colors duration-300"
          >
            TO KNOW MORE KEEP IN TOUCH!
          </a>
        </div>

        {/* Arrows */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border-0 bg-[#F2F2F2] flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300"
          >
            <FaArrowLeft />
          </button>

          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border-0 bg-[#F2F2F2] flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}