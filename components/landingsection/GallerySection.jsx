"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function GallerySection() {
  const scrollRef = useRef(null);

  const galleryItems = [
    { img: "https://res.cloudinary.com/da9s9vymf/image/upload/f_auto,q_auto,w_600/v1775307984/Factory_1_1_cuhzxv.jpg", label: "Factory" },
    { img: "https://res.cloudinary.com/da9s9vymf/image/upload/f_auto,q_auto,w_600/v1775307976/Experience_Center1_yca70b.jpg", label: "Experience center" },
    { img: "https://res.cloudinary.com/da9s9vymf/image/upload/f_auto,q_auto,w_600/v1775307980/Factory_1_2_ofxco6.jpg", label: "Factory" },
    { img: "https://res.cloudinary.com/da9s9vymf/image/upload/f_auto,q_auto,w_600/v1775307974/Experience_Center_4_ftx7gh.jpg", label: "Experience center" },
    { img: "https://res.cloudinary.com/da9s9vymf/image/upload/f_auto,q_auto,w_600/v1775307975/Factory_1_3_crdad7.jpg", label: "Factory" },
    { img: "https://res.cloudinary.com/da9s9vymf/image/upload/f_auto,q_auto,w_600/v1775307973/Experience_Center_5_us9fv2.jpg", label: "Experience center" },
    { img: "https://res.cloudinary.com/da9s9vymf/image/upload/f_auto,q_auto,w_600/v1775307971/Factory_1_4_molox8.jpg", label: "Factory" },
    { img: "https://res.cloudinary.com/da9s9vymf/image/upload/f_auto,q_auto,w_600/v1775307972/Experience_Center_2_xcx101.jpg", label: "Experience center" },
  ];

  // ✅ preload
  useEffect(() => {
    galleryItems.forEach((item) => {
      const img = new Image();
      img.src = item.img;
    });
  }, []);

  // ✅ ensure full groups (no gaps)
  const filledItems = [...galleryItems];
  while (filledItems.length % 6 !== 0) {
    filledItems.push(galleryItems[filledItems.length % galleryItems.length]);
  }

  const groupedItems = [];
  for (let i = 0; i < filledItems.length; i += 6) {
    groupedItems.push(filledItems.slice(i, i + 6));
  }

  // 🔥 PERFECT LOOP ENGINE
  useEffect(() => {
    const el = scrollRef.current;
    let frame;

    let speed = window.innerWidth < 768 ? 0.6 : 0.35; // 🔥 mobile faster

    const autoScroll = () => {
      if (!el) return;

      el.scrollLeft += speed;

      // seamless loop
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      }

      frame = requestAnimationFrame(autoScroll);
    };

    frame = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="md:py-12 overflow-hidden">
      <motion.div className="text-center mb-10">
        <h2 className="!text-2xl md:text-4xl font-bold">
          How We Build Your Home
        </h2>
      </motion.div>

      <motion.div className="overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-10 pr-[10%] overflow-x-auto will-change-transform [&::-webkit-scrollbar]:hidden"
        >
          {[...groupedItems, ...groupedItems].map((group, loop) => (
            <React.Fragment key={loop}>

              <div className="flex flex-col md:justify-end">
                <Card {...group[0]} h="h-[260px] md:h-[280px]" w="w-[300px] md:w-[460px]" />
              </div>

              <div className="flex flex-col gap-6">
                <Card {...group[1]} h="h-[140px] md:h-[160px]" w="w-[220px] md:w-[280px]" />
                <Card {...group[2]} h="h-[180px] md:h-[200px]" w="w-[220px] md:w-[340px]" />
              </div>

              <div className="flex flex-col mt-10 gap-6">
                <Card {...group[3]} h="h-[140px] md:h-[160px]" w="w-[220px] md:w-[280px]" />
                <Card {...group[4]} h="h-[160px]" w="w-[220px]" />
              </div>

              <div className="flex flex-col justify-start">
                <Card {...group[5]} h="h-[260px] md:h-[320px]" w="w-[300px] md:w-[400px]" />
              </div>

            </React.Fragment>
          ))}
        </div>
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
        loading="eager"
        className="w-full h-full object-cover"
      />

      <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full">
        {label}
      </span>
    </div>
  );
}