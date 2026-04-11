"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const SOLUTIONS = [
  {
    title: "Wardrobes",
    desc: " Modular wardrobe, internal storage sliding/hinged doors, mirrors & accessories.",
    img: "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207595/modularkitchen_l4h8ah.jpg",
  },
  {
    title: "Bedrooms",
    desc: "wardrobe, Dressing unit, cot & headboards",
    img: "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207579/Bedroomser_hf3gcu.jpg",
  },
  {
    title: "Living Rooms",
    desc: "Tv unit, Designer partitions, Pooja unit",
    img: "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207595/livingser_pqap2k.jpg",
  },
  {
    title: "Pooja Rooms",
    desc: "Mandir unit, wall panels, storage drawers, lighting, decorative elements, partitions & finishes",
    img: "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207603/poojaser_arg5cb.jpg",
  },
  {
    title: "Modular Kitchens",
    desc: "Appliances, Accessories, counter tops  ",
    img: "https://res.cloudinary.com/da9s9vymf/image/upload/v1775913286/ChatGPT_Image_Apr_11_2026_06_40_21_PM_eud13r.png",
  },
  {
    title: "Dining Rooms",
    desc: "Dining table & chairs, crockery unit, lighting, wall décor, partitions & storage solutions",
    img: "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207589/Dinning_d6dqvu.jpg",
  },
  {
    title: "Full Home Interiors",
    desc: "Furniture, False ceiling, lightning, plumbing, sofa, Rug & curtains etc...",
    img: "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207589/home6_o7s2tf.jpg",
  },
  {
    title: "Bathrooms",
    desc: "wardrobe Dressing Unit Cot & headboards.",
    img: "https://res.cloudinary.com/da9s9vymf/image/upload/v1775913098/ChatGPT_Image_Apr_11_2026_06_40_03_PM_umwqdk.png",
  },
];

export default function SolutionsSlider() {
  const [index, setIndex] = useState(0);
  const [isReset, setIsReset] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [bubbles, setBubbles] = useState([]);

  const total = SOLUTIONS.length;
  const data = [...SOLUTIONS, ...SOLUTIONS];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      setBubbles((prev) => [
        ...prev,
        { id, left: Math.random() * 100, size: 6 + Math.random() * 8 },
      ]);
      setTimeout(() => {
        setBubbles((prev) => prev.filter((b) => b.id !== id));
      }, 2000);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => nextSlide(), 3000);
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
    <section className="md:py-16 py-10 overflow-hidden">
      <div className="px-6 md:px-20">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="text-black font-extrabold text-[18px] md:text-[34px] 2xl:text-[48px] leading-tight">
            Complete Interior Solutions <br /><span className="text-[#4dbc15]">
              for Modern Homes
            </span>
          </h2>
        </motion.div>

        <div className="overflow-hidden">
          <motion.div
            style={{ pointerEvents: "auto" }}
            className={`flex ${isMobile ? "gap-2" : "gap-3"}`}
            animate={{
              x: isMobile ? `-${index * 100}%` : -index * 236,
            }}
            transition={
              isReset
                ? { duration: 0 }
                : { duration: 0.6, ease: "easeInOut" }
            }
            onAnimationComplete={() => {
              if (isReset) setIsReset(false);
            }}
          >
            {data.map((s, i) => {
              return (
                <div
                  key={i}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onTouchStart={() => setIsHovered(true)}
                  onTouchEnd={() => setIsHovered(false)}
                  className={`${isMobile ? "min-w-full" : "w-[280px]"} flex-shrink-0 bg-white/20 backdrop-blur-lg border border-white/30 rounded overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer`}
                >
                  <div className="relative overflow-hidden h-[260px] group isolate">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full h-full object-cover transform-gpu will-change-transform transition-transform duration-700 ease-in-out hover:scale-110"
                    />
                  </div>

                  <div className="px-4 pt-3 pb-2">
                    <h3 className="text-[#111] text-[17px] font-bold mb-1">
                      {s.title}
                    </h3>
                    <p className="text-[#666] text-[13px] leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        <div className="flex justify-center mt-10 md:mb-10">
          <div className="relative inline-block">
            <motion.a
              href="#contact"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              whileTap={{ scale: 0.95 }}
              className="inline-block relative z-10 bg-[#4dbc15] text-white px-4 md:px-6 py-2 rounded-[8px] font-medium text-sm md:text-base hover:text-white transition"
            >
              Get Free Interior Consultation
            </motion.a>

            {bubbles.map((b) => (
              <motion.span
                key={b.id}
                initial={{ y: 0, opacity: 0.4 }}
                animate={{ y: -60, opacity: 0 }}
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
                  zIndex: 0,
                }}
              />
            ))}
          </div>
        </div>

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