"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";

const IMAGES = [
  "https://assets.webdads2u.com/images/1777290869100-05-dinning.jpg",
  "https://assets.webdads2u.com/images/1777290897972-13-master-bedroom-fluted-cnc-2.jpeg",
  "https://assets.webdads2u.com/images/1777290929436-01.jpg",
  "https://assets.webdads2u.com/images/1777290955909-02.jpg",
  
  "https://assets.webdads2u.com/images/1777291043916-07-kitchen.jpg",
  "https://arcmen-uploads.s3.us-east-1.amazonaws.com/images/1778242360942-daughterbedroomwardroberev-05_am2897_krishnaok.webp",
  "https://arcmen-uploads.s3.us-east-1.amazonaws.com/images/1778242389806-02gfbedroomcotviewrev-01_am2897_krishnaok.webp",
  "https://arcmen-uploads.s3.us-east-1.amazonaws.com/images/1778242434901-01kitchenhobsinkview_am2897_krishnakiranxx.webp",
  "https://assets.webdads2u.com/images/1777291524186-daughter-bedroom-wardrobe-rev-05_am2897_krishna-ok.jpg",
  "https://assets.webdads2u.com/images/1777291573463-01-gf-bedroom-cot-view_am2897_krishna-ok.jpg",
  "https://arcmen-uploads.s3.us-east-1.amazonaws.com/images/1778239498399-01-arcmeninteriordesignerchennai.webp",
  "https://arcmen-uploads.s3.us-east-1.amazonaws.com/images/1778239696323-02-arcmeninteriordesignerchennai.webp",

  "https://arcmen-uploads.s3.us-east-1.amazonaws.com/images/1778239777719-03-arcmeninteriordesignerchennai.webp",
  "https://arcmen-uploads.s3.us-east-1.amazonaws.com/images/1778239837527-03-arcmeninteriordesignerchennai.webp",
  "https://assets.webdads2u.com/images/1777291307466-14--arcmen-interior-designer-chennai.jpg",
  "https://assets.webdads2u.com/images/1777291622500-01-elevation.jpg",
  "https://assets.webdads2u.com/images/1777291692848-03-living.jpg",
  "https://assets.webdads2u.com/images/1777291716636-07-bedroom-cot-view-2.png",
  "https://assets.webdads2u.com/images/1777291738215-09-son-bedroom-cot-view.png",
  "https://assets.webdads2u.com/images/1777291788150-10-m--bedroom-toilet.png",
  "https://arcmen-uploads.s3.us-east-1.amazonaws.com/images/1778242751415-02.webp",

  "https://arcmen-uploads.s3.us-east-1.amazonaws.com/images/1778242700098-08.webp",
  "https://arcmen-uploads.s3.us-east-1.amazonaws.com/images/1778242681090-05.webp",
  "https://arcmen-uploads.s3.us-east-1.amazonaws.com/images/1778242822973-11.webp",
  "https://arcmen-uploads.s3.us-east-1.amazonaws.com/images/1778242577474-01--1-.webp",
];

const PROJECTS_DATA = [
  {
    title: "Arun_Kumbakonam",
    location: "Tamilnadu",
    area: "2BHK Starting at ₹3.5L",
    mainImage: IMAGES[10],
    thumbs: [IMAGES[11], IMAGES[12], IMAGES[13], IMAGES[14]],
  },
  {
    title: "Krishna_Ranipet",
    location: "Ranipet TamilNadu",
    area: "3BHK Starting at ₹4.5L",
    mainImage: IMAGES[5],
    thumbs: [IMAGES[6], IMAGES[7], IMAGES[8], IMAGES[9]],
  },
  {
    title: "NBS Vijayshankar Panaiyur",
    location: "Ecr Chennai",
    area: "3BHK Starting at ₹4.5L",
    mainImage: IMAGES[15],
    thumbs: [IMAGES[16], IMAGES[17], IMAGES[18], IMAGES[19]],
  },
  {
    title: "Baskar_Kovur",
    location: "Kovur chennai",
    area: "2BHK Starting at ₹3.5L",
    mainImage: IMAGES[20],
    thumbs: [IMAGES[21], IMAGES[22], IMAGES[23], IMAGES[24]],
  },
];

const scrollToContact = () => {
  const el = document.getElementById("contact");
  if (el) {
    const yOffset = -200;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

function ProjectCard({ project }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-2 items-start">
      <div className="relative rounded overflow-hidden shadow-lg bg-white w-full aspect-[4/3]">
        <span className="absolute top-3 left-3 bg-yellow-500 text-xs px-3 rounded p-2 z-10">
          {project.area}
        </span>
        <img
          src={project.mainImage}
          alt="project"
          onClick={scrollToContact}
          className="w-full h-full object-cover cursor-pointer"
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        {project.thumbs.map((src, i) => (
          <img
            key={i}
            src={src}
            onClick={scrollToContact}
            className={`w-full aspect-[4/3] object-cover rounded cursor-pointer ${
              i >= 2 ? "hidden md:block" : ""
            }`}
          />
        ))}
      </div>
      <div className="col-span-1 md:col-span-2 flex flex-col md:flex-row justify-between md:items-center pt-1">
        <div>
          <h4 className="font-bold">{project.title}</h4>
          <div className="text-sm">📍 {project.location}</div>
        </div>
      </div>
    </div>
  );
}

export default function ChennaiProjects() {
  const pathname = usePathname();
  const isTargetPage = pathname === "/home-interior-designers-in-chennai";
  const [currentIndex, setCurrentIndex] = useState(0);

  const dragStartX = useRef(null);

  const handleDragStart = (clientX) => {
    dragStartX.current = clientX;
  };

  const handleDragEnd = (clientX) => {
    if (dragStartX.current === null) return;
    const diff = dragStartX.current - clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrentIndex((prev) => Math.min(prev + 1, PROJECTS_DATA.length - 1));
      } else {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    }
    dragStartX.current = null;
  };

  return (
    <section className="py-8 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <p className="inline-block text-[11px] md:text-[12px] tracking-[3px] uppercase px-4 py-1.5 mb-3 rounded-full backdrop-blur-md bg-white/60 text-[#4dbc15] border border-[#4dbc15]/40 shadow-[0_0_10px_rgba(77,188,21,0.2)] font-medium">
            Our Project
          </p>
          <h2 className="font-playfair text-3xl font-extrabold text-[#1a1a1a] leading-snug">
            {!isTargetPage ? (
              <>
                Every Interior Design Project in Chennai <br className="hidden md:block" />
                We Created Became a{" "}
                <span className="text-[#4dbc15]">Space to Love</span>
              </>
            ) : (
              <>
                Every Home interiors in Chennai We Designed <br className="hidden md:block" />
                Became a{" "}
                <span className="text-[#4dbc15]">Space to Love</span>
              </>
            )}
          </h2>
        </div>

        <div
          className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
          onMouseDown={(e) => handleDragStart(e.clientX)}
          onMouseUp={(e) => handleDragEnd(e.clientX)}
          onMouseLeave={() => { dragStartX.current = null; }}
          onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
          onTouchEnd={(e) => handleDragEnd(e.changedTouches[0].clientX)}
        >
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {PROJECTS_DATA.map((project, index) => (
              <div key={index} className="min-w-full">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-3">
          {PROJECTS_DATA.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 w-2 rounded-full transition-transform duration-300 ${
                currentIndex === i ? "bg-black scale-150" : "bg-gray-400 opacity-50"
              }`}
            />
          ))}
        </div>

        <div className="flex justify-center mt-10 md:mt-6">
          <motion.div animate={{ scale: [1, 1.05, 1] }} repeat={Infinity}>
            <Link href="#contact" className="bg-[#4dbc15] text-white px-5 py-2 rounded">
              Get a Free interior Quote
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}