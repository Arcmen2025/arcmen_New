"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const SOLUTIONS = [
  {
    title: "Wardrobes",
    desc: "Modular wardrobe, internal storage sliding/hinged doors, mirrors & accessories.",
    img: "https://assets.webdads2u.com/images/1777289818363-whatsapp-image-2026-04-27-at-12-08-36.jpeg",
  },
  {
    title: "Bedrooms",
    desc: "wardrobe, Dressing unit, cot & headboards",
    img: "https://assets.webdads2u.com/images/1777289907245-whatsapp-image-2026-04-27-at-12-10-01.jpeg",
  },
  {
    title: "Living Rooms",
    desc: "Tv unit, Designer partitions, Pooja unit",
    img: "https://assets.webdads2u.com/images/1777290009459-whatsapp-image-2026-04-27-at-12-07-27.jpeg",
  },
  {
    title: "Pooja Rooms",
    desc: "Mandir unit, wall panels, storage drawers, lighting, decorative elements, partitions & finishes",
    img: "https://assets.webdads2u.com/images/1777289776112-whatsapp-image-2026-04-27-at-12-08-03.jpeg",
  },
  {
    title: "Modular Kitchens",
    desc: "Appliances, Accessories, counter tops",
    img: "https://assets.webdads2u.com/images/1777289722608-whatsapp-image-2026-04-27-at-12-06-55.jpeg",
  },
  {
    title: "Dining Rooms",
    desc: "Dining table & chairs, crockery unit, lighting, wall décor, partitions & storage solutions",
    img: "https://assets.webdads2u.com/images/1777289950456-whatsapp-image-2026-04-27-at-12-10-49.jpeg",
  },
  {
    title: "Full Home Interiors",
    desc: "Furniture, False ceiling, lightning, plumbing, sofa, Rug & curtains etc...",
    img: "https://assets.webdads2u.com/images/1777290091489-whatsapp-image-2026-04-27-at-12-09-26.jpeg",
  },
  {
    title: "Bathrooms",
    desc: "wardrobe Dressing Unit Cot & headboards.",
    img: "https://assets.webdads2u.com/images/1777290125992-whatsapp-image-2026-04-27-at-12-07-12.jpeg",
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
      <div className=" md:px-20">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="text-black font-extrabold text-3xl leading-tight">
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