"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const SOLUTIONS = [
  {
    title: "Wardrobes",
    desc: "Modular wardrobe, internal storage sliding/hinged doors, mirrors & accessories.",
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
    desc: "Appliances, Accessories, counter tops",
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
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const total = SOLUTIONS.length;
  const data = [...SOLUTIONS, ...SOLUTIONS];

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % total);
  const prevSlide = () => setIndex((prev) => (prev === 0 ? total - 1 : prev - 1));

  return (
    <section className="md:py-16 py-10">
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
        <div className="overflow-hidden w-full" ref={containerRef}>
          <motion.div
            className="flex"
            animate={{
              x: isMobile ? -(index * containerWidth) : -index * 296,
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {data.map((s, i) => (
              <div
                key={i}
                style={isMobile ? { minWidth: containerWidth, width: containerWidth } : {}}
                className={`${isMobile ? "px-2" : "w-[280px] min-w-[280px] mr-4"} flex-shrink-0`}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md">

                  <div className="h-[260px] overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="text-[17px] font-bold mb-1">{s.title}</h3>
                    <p className="text-[13px] text-gray-600">{s.desc}</p>
                  </div>

                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-[#F2F2F2] flex items-center justify-center hover:bg-black hover:text-white"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-[#F2F2F2] flex items-center justify-center hover:bg-black hover:text-white"
          >
            <FaArrowRight />
          </button>
        </div>

      </div>
    </section>
  );
}