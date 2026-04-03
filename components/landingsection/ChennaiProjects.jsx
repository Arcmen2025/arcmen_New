"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import { PROJECTS } from "@/app/utilits/constants";


const LOGO =
  "https://res.cloudinary.com/da9s9vymf/image/upload/f_auto,q_auto/v1775207563/whitelogo_ogcb0n.svg";


const IMAGES = [
  "https://res.cloudinary.com/da9s9vymf/image/upload/f_auto,q_auto,w_600/v1775207587/arun_ryvtg2.jpg",
  "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207576/baskar_uskqmi.jpg",
  "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207592/krishna_jmmogo.jpg",
  "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207627/Mohan_yjeotr.jpg",
  "https://res.cloudinary.com/da9s9vymf/image/upload/v1775207596/nbs_gveazs.png",
];

export default function ChennaiProjects() {
  const controls = useAnimation();
  const xRef = useRef(0);

  const itemWidth = 300;
  const data = [...PROJECTS, ...PROJECTS];

  useEffect(() => {
    let frame;

    const animate = () => {
      xRef.current += 0.5;

      if (xRef.current >= itemWidth * PROJECTS.length) {
        xRef.current = 0;
      }

      controls.set({ x: -xRef.current });

      frame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frame);
  }, [controls]);

  const nextSlide = () => {
    xRef.current += itemWidth;
  };

  const prevSlide = () => {
    xRef.current -= itemWidth;

    if (xRef.current < 0) {
      xRef.current = itemWidth * PROJECTS.length;
    }
  };

  return (
    <section className="pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#666666] text-[14px]">
            Recent projects by Arcmen Interiors
          </p>
          <h2 className="!text-3xl md:text-4xl font-extrabold leading-tight">
            Chennai's Luxury Home <br />
            Interior Design Company
          </h2>
        </motion.div>

    
        <div className="overflow-hidden">
          <motion.div className="flex gap-4" animate={controls}>
            {data.map((p, i) => {
              const img = IMAGES[i % IMAGES.length];

              return (
                <div
                  key={i}
                  className="min-w-[280px] h-64 md:h-80 rounded-2xl overflow-hidden relative"
                >
                  <img
                    src={img}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white mb-0 text-sm font-semibold">
                      {p.title}
                    </p>
                    <p className="text-white/60 text-xs mb-0">
                      {p.area}
                    </p>
                  </div>

                 
                  <div className="absolute bottom-3 right-3">
                    <img
                      src={LOGO}
                      alt="Arcmen Interiors"
                      className="w-16 h-12 object-contain"
                    />
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Button */}
        <div className="text-center mt-10 md:mb-10">
          <a
            href="#contact"
            className="border border-black text-[#000000] px-10 py-2 rounded-[8px] font-medium text-sm md:text-base hover:bg-[#4dbc15] hover:text-white transition"
          >
            Get My Project Estimate
          </a>
        </div>

        {/* Arrows */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border-0 bg-gray-200 flex items-center justify-center"
          >
            <FaArrowLeftLong />
          </button>

          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full border-0 bg-gray-200 flex items-center justify-center"
          >
            <FaArrowRightLong />
          </button>
        </div>

      </div>
    </section>
  );
}