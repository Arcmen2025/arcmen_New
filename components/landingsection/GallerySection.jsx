"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
// import image1 from "../../assets/living13.jpg";
// import image2 from "../../assets/living14.jpg";
// import image3 from "../../assets/living15.jpg";
// import image4 from "../../assets/living16.jpg";
// import image5 from "../../assets/Blinds 1.jpg";
// import image6 from "../../assets/Blinds 2.jpg";

export default function GallerySection() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    let frame;

    const autoScroll = () => {
      if (!el) return;

      el.scrollLeft += 0.5;

      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft -= el.scrollWidth / 2;
      }

      frame = requestAnimationFrame(autoScroll);
    };

    const handleScroll = () => {
      if (!el) return;

      const half = el.scrollWidth / 2;

      if (el.scrollLeft >= half) {
        el.scrollLeft -= half;
      }

      if (el.scrollLeft <= 0) {
        el.scrollLeft += half;
      }
    };

    if (window.innerWidth >= 768) {
      frame = requestAnimationFrame(autoScroll);
    }

    el.addEventListener("scroll", handleScroll);

    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="md:py-12 overflow-hidden">
      <motion.div className="text-center mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <h2 className="!text-2xl md:text-4xl font-bold">
          How We Build<br /> Your Home
        </h2>
      </motion.div>

      {/* Carousel Wrapper */}
      <motion.div className="overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <div
          ref={scrollRef}
          className="flex gap-6 pl-0 pr-[10%] overflow-x-auto [&::-webkit-scrollbar]:hidden"
        >
          {[...Array(2)].map((_, loop) => (
            <React.Fragment key={loop}>
              
              {/* 1 - BIG (BOTTOM) */}
              <div className="flex flex-col md:justify-end">
                <Card
                  img="https://res.cloudinary.com/da9s9vymf/image/upload/v1775207593/living5_abglgx.jpg"
                  h="h-[260px] md:h-[280px]"
                  w="w-[300px] md:w-[460px]"
                  label="Factory"
                />
              </div>

              {/* 2 - STACK */}
              <div className="flex flex-col gap-6">
                <Card
                  img="https://res.cloudinary.com/da9s9vymf/image/upload/v1775207593/living14_ddpx1y.jpg"
                  h="h-[140px] md:h-[160px]"
                  w="w-[220px] md:w-[280px]"
                  label="Experience center"
                />
                <Card
                  img="https://res.cloudinary.com/da9s9vymf/image/upload/v1775207594/living15_s3kzo0.jpg"
                  h="h-[180px] md:h-[200px]"
                  w="w-[220px] md:w-[340px]"
                  label="Factory"
                />
              </div>

              {/* 2 - STACK */}
              <div className="flex flex-col mt-10 gap-6">
                <Card
                  img="https://res.cloudinary.com/da9s9vymf/image/upload/v1775207594/living16_o8bltn.jpg"
                  h="h-[140px] md:h-[160px]"
                  w="w-[220px] md:w-[280px]"
                  label="Experience center"
                />
                <Card
                  img="https://res.cloudinary.com/da9s9vymf/image/upload/v1775207582/Blinds_1_xyep9q.jpg"
                  h="h-[160px]"
                  w="w-[220px]"
                  label="Factory"
                />
              </div>

              {/* 1 - BIG (TOP) */}
              <div className="flex flex-col justify-start">
                <Card
                  img="https://res.cloudinary.com/da9s9vymf/image/upload/v1775207592/living2_dmilua.jpg"
                  h="h-[260px] md:h-[320px]"
                  w="w-[300px] md:w-[400px]"
                  label="Experience center"
                />
              </div>

            </React.Fragment>
          ))}
        </div>
      </motion.div>

      <motion.div className="text-center mt-12 md:mb-14"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      > 
        <a
          href="#contact"
          className="border border-black py-3 px-8 rounded-[8px] text-black font-semibold hover:bg-[#4dbc15] hover:text-white transition"
        >
          Get Premium Material Guidance
        </a>
      </motion.div>
    </section>
  );
}

function Card({ img, h, w, label }) {
  return (
    <div className={`relative ${w} ${h} rounded-xl overflow-hidden flex-shrink-0`}>
      <img
        src={img}
        alt=""
        className="w-full h-full object-cover"
      />

      <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full">
        {label}
      </span>
    </div>
  );
}