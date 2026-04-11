"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function GallerySection() {
  const galleryItems = [
    { img: "https://res.cloudinary.com/da9s9vymf/image/upload/f_auto,q_auto,w_600/v1775307984/Factory_1_1_cuhzxv.jpg", label: "Factory" },
    { img: "https://res.cloudinary.com/da9s9vymf/image/upload/v1775458569/arcmenec1_sx8rsq.jpg", label: "Experience center" },
    { img: "https://res.cloudinary.com/da9s9vymf/image/upload/f_auto,q_auto,w_600/v1775307980/Factory_1_2_ofxco6.jpg", label: "Factory" },
    { img: "https://res.cloudinary.com/da9s9vymf/image/upload/f_auto,q_auto,w_600/v1775307976/Experience_Center1_yca70b.jpg", label: "Experience center" },
    { img: "https://res.cloudinary.com/da9s9vymf/image/upload/f_auto,q_auto,w_600/v1775307975/Factory_1_3_crdad7.jpg", label: "Factory" },
    { img: "https://res.cloudinary.com/da9s9vymf/image/upload/v1775458569/arcmenec2_k2shxn.jpg", label: "Experience center" },
    { img: "https://res.cloudinary.com/da9s9vymf/image/upload/f_auto,q_auto,w_600/v1775307971/Factory_1_4_molox8.jpg", label: "Factory" },
    { img: "https://res.cloudinary.com/da9s9vymf/image/upload/f_auto,q_auto,w_600/v1775307972/Experience_Center_2_xcx101.jpg", label: "Experience center" },
  ];

  useEffect(() => {
    galleryItems.forEach((item) => {
      const img = new Image();
      img.src = item.img;
    });
  }, []);

  const filledItems = [...galleryItems];
  while (filledItems.length % 6 !== 0) {
    filledItems.push(galleryItems[filledItems.length % galleryItems.length]);
  }

  const groupedItems = [];
  for (let i = 0; i < filledItems.length; i += 6) {
    groupedItems.push(filledItems.slice(i, i + 6));
  }

  return (
    <section className="md:py-12 overflow-hidden">
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="!text-2xl md:text-4xl font-bold">
            Experience How Your Home Interiors Are Created
          </h2></motion.div>
        <motion.div className="text-center "
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <p className="text-[#666666] text-sm md:text-[16px] max-w-2xl mx-auto">
            Visit our experience center and see how we design and build quality home interiors in Chennai
          </p>
        </motion.div>
      </div>
      <div className="overflow-hidden">
        <div className="marquee flex gap-10">

          {[...groupedItems, ...groupedItems].map((group, loop) => (
            <div key={loop} className="flex gap-10 min-w-max">

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

            </div>
          ))}

        </div>
      </div>

      <style jsx>{`
        .marquee {
          animation: scroll 8s linear infinite;
          will-change: transform;
        }

        .marquee:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .marquee {
            animation-duration: 20s;
          }
        }
      `}</style>
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