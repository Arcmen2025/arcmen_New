"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const IMAGES = [
  "https://assets.webdads2u.com/images/1777290869100-05-dinning.jpg",
  "https://assets.webdads2u.com/images/1777290897972-13-master-bedroom-fluted-cnc-2.jpeg",
  "https://assets.webdads2u.com/images/1777290929436-01.jpg",
  "https://assets.webdads2u.com/images/1777290955909-02.jpg",
  "https://assets.webdads2u.com/images/1777291043916-07-kitchen.jpg",
  "https://assets.webdads2u.com/images/1777291342075-01-kitchen-hob-sink-view_am2897_krishnakiran-xx.jpg",
  "https://assets.webdads2u.com/images/1777291448485-02-gf-bedroom-east-wall_am2897_krishna-ok.jpg",
  "https://assets.webdads2u.com/images/1777291474301-01-daughter-bedroom-study_am2897_krishna---ok.jpg",
  "https://assets.webdads2u.com/images/1777291524186-daughter-bedroom-wardrobe-rev-05_am2897_krishna-ok.jpg",
  "https://assets.webdads2u.com/images/1777291573463-01-gf-bedroom-cot-view_am2897_krishna-ok.jpg",
  "https://assets.webdads2u.com/images/1777291096435-01--arcmen-interior-designer-chennai.jpg",
  "https://assets.webdads2u.com/images/1777291221872-04--arcmen-interior-designer-chennai.jpg",
  "https://assets.webdads2u.com/images/1777291253039-06--arcmen-interior-designer-chennai.jpg",
  "https://assets.webdads2u.com/images/1777291279122-10--arcmen-interior-designer-chennai.jpg",
  "https://assets.webdads2u.com/images/1777291307466-14--arcmen-interior-designer-chennai.jpg",
  "https://assets.webdads2u.com/images/1777291622500-01-elevation.jpg",
  "https://assets.webdads2u.com/images/1777291692848-03-living.jpg",
  "https://assets.webdads2u.com/images/1777291716636-07-bedroom-cot-view-2.png",
  "https://assets.webdads2u.com/images/1777291738215-09-son-bedroom-cot-view.png",
  "https://assets.webdads2u.com/images/1777291788150-10-m--bedroom-toilet.png",
  "https://assets.webdads2u.com/images/1777291815667-01.jpg",
  "https://assets.webdads2u.com/images/1777291850150-02.jpg",
  "https://assets.webdads2u.com/images/1777291879491-03.jpg",
  "https://assets.webdads2u.com/images/1777291940269-12.jpg",
  "https://assets.webdads2u.com/images/1777291904238-10.jpg",
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

function ProjectCard({ project }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-2 items-start">
      <div className="relative rounded overflow-hidden aspect-[4/3] shadow-lg group bg-white">
        <span className="absolute top-3 left-3 z-10 bg-white text-[#1a1a1a] text-xs font-semibold px-3 rounded-full shadow p-2">
          Completed
        </span>
        <img
          src={project.mainImage}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="grid grid-cols-2 gap-2 md:gap-2.5">
        {project.thumbs.map((src, i) => (
          <img
            key={i}
            src={src}
            loading="lazy"
            className="w-full aspect-[4/3] object-cover rounded shadow-md"
          />
        ))}
      </div>

      <div className="col-span-1 md:col-span-2 flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-5 pt-1">
        <div>
          <h4 className="font-playfair text-[18px] md:text-[clamp(18px,2.4vw,24px)] font-bold text-[#1a1a1a] mb-1">
            {project.title}
          </h4>
          <div className="flex items-center gap-2 text-[12px] md:text-[13px]">
            <span>📍</span>
            <span>{project.location}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[14px] md:text-[15px]">
          <span className="bg-yellow-200 text-black px-2 py-0.5 rounded-md font-semibold">
            {project.area}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ChennaiProjects() {
  return (
    <section className="py-8 md:py-10 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4 md:px-10">
        <div className="text-center mb-8 md:mb-12">
          <p className="inline-block text-[11px] md:text-[12px] tracking-[3px] uppercase px-4 py-1.5 mb-3 rounded-full backdrop-blur-md bg-white/60 text-[#4dbc15] border border-[#4dbc15]/40 shadow-[0_0_10px_rgba(77,188,21,0.2)] font-medium">
            Our Project
          </p>
          <h2 className="font-playfair text-3xl font-extrabold text-[#1a1a1a] leading-snug">
            Every Home in Chennai We Designed <br className="hidden md:block" />
            Became a <span className="text-[#4dbc15]">Space to Love</span>
          </h2>
        </div>

        <div className="flex flex-col gap-8 md:gap-20">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <div className="flex justify-center">
          <motion.div
            animate={{ scale: [1, 1.04, 1] }}
            transition={{
              duration: 1.9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Link
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("contact");
                if (el) {
                  const yOffset = -200;
                  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

                  window.scrollTo({
                    top: y,
                    behavior: "smooth",
                  });
                }
              }}
              className="inline-flex items-center justify-center text-center mt-5 md:mt-3 gap-2 px-5 py-2 bg-yellow-300 text-black text-sm font-semibold rounded-full shadow-md"
            >
              Book a Free interior Quote
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}