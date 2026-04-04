"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function GallerySection() {
  const scrollRef = useRef(null);

  const galleryItems = [
    // Factory (6)
    { img: "https://res.cloudinary.com/da9s9vymf/image/upload/v1775288890/factory1_tyvksa.jpg", label: "Factory" },
    { img: "https://res.cloudinary.com/da9s9vymf/image/upload/v1775287655/ec2_mvi04w.jpg", label: "Experience center" },

    { img: "https://res.cloudinary.com/da9s9vymf/image/upload/v1775288455/factory2_deuzka.jpg", label: "Factory" },
    { img: "https://res.cloudinary.com/da9s9vymf/image/upload/v1775287661/ec4_aoeieh.jpg", label: "Experience center" },

    { img: "https://res.cloudinary.com/da9s9vymf/image/upload/v1775288786/factory5_ht64bp.jpg", label: "Factory" },
    // { img: "https://res.cloudinary.com/da9s9vymf/image/upload/v1775288486/factory8_ht63id.jpg", label: "Factory" },
    { img: "https://res.cloudinary.com/da9s9vymf/image/upload/v1775288455/factory4_zjgyh5.jpg", label: "Factory" },

    // Experience Center (6)
    { img: "https://res.cloudinary.com/da9s9vymf/image/upload/v1775287630/ec1_qn1zot.jpg", label: "Experience center" },
    // { img: "https://res.cloudinary.com/da9s9vymf/image/upload/v1775287655/ec2_mvi04w.jpg", label: "Experience center" },
    { img: "https://res.cloudinary.com/da9s9vymf/image/upload/v1775288813/factory3_kxd7ot.jpg", label: "Factory" },
    { img: "https://res.cloudinary.com/da9s9vymf/image/upload/v1775287665/ec3_ythmex.jpg", label: "Experience center" },

    // { img: "https://res.cloudinary.com/da9s9vymf/image/upload/v1775287661/ec4_aoeieh.jpg", label: "Experience center" },
    { img: "https://res.cloudinary.com/da9s9vymf/image/upload/v1775287656/ec5_hlzkwf.jpg", label: "Experience center" },
    { img: "https://res.cloudinary.com/da9s9vymf/image/upload/v1775288486/factory8_ht63id.jpg", label: "Factory" },

    { img: "https://res.cloudinary.com/da9s9vymf/image/upload/v1775287663/ec6_cj8ojd.jpg", label: "Experience center" },
  ];


  const groupedItems = [];
  for (let i = 0; i < galleryItems.length; i += 6) {
    groupedItems.push(galleryItems.slice(i, i + 6));
  }

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

    frame = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="md:py-12 overflow-hidden">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="!text-2xl md:text-4xl font-bold">
          How We Build Your Home
        </h2>
      </motion.div>

      <motion.div className="overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-10 pr-[10%] overflow-x-auto [&::-webkit-scrollbar]:hidden"
        >
          {[...groupedItems, ...groupedItems].map((group, loop) => (
            <React.Fragment key={loop}>

              {/* SAME LAYOUT REUSED */}
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
      <img src={img} alt="" className="w-full h-full object-cover" />

      <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full">
        {label}
      </span>
    </div>
  );
}