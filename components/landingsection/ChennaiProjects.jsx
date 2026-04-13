"use client";
import { motion } from "framer-motion";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { BiCurrentLocation } from "react-icons/bi";
import { FaFileAlt } from "react-icons/fa";

const IMAGES = [
  "https://res.cloudinary.com/da9s9vymf/image/upload/v1775892669/01_ixwn9u.jpg",
  "https://res.cloudinary.com/da9s9vymf/image/upload/v1775892734/04.Dinning_Lift_Lobby_xtvmqm.jpg",
  "https://res.cloudinary.com/da9s9vymf/image/upload/v1775892736/03_z4jztu.jpg",
  "https://res.cloudinary.com/da9s9vymf/image/upload/v1775892733/02_h3j26v.jpg",
  "https://res.cloudinary.com/da9s9vymf/image/upload/v1775892949/13.Master_bedroom_fluted_cnc_2_umspcy.jpg",

  "https://res.cloudinary.com/da9s9vymf/image/upload/v1775893034/01_Kitchen_Tall_Unit_view_AM2897_Krishnakiran_vucvxq.jpg",
  "https://res.cloudinary.com/da9s9vymf/image/upload/v1775893034/01_GF_Bedroom_Cot_view_AM2897_Krishna_ok_zk70cj.jpg",
  "https://res.cloudinary.com/da9s9vymf/image/upload/v1775893035/Daughter_bedroom_wardrobe_Rev-05_AM2897_Krishna_ok_phr4zl.jpg",
  "https://res.cloudinary.com/da9s9vymf/image/upload/v1775893033/01_GF_Bedroom_Dressing_AM2897_Krishna_ok_pqsq1c.jpg",
  "https://res.cloudinary.com/da9s9vymf/image/upload/v1775893032/01_Daughter_Bedroom_Study_AM2897_Krishna_-_ok_mufsba.jpg",

  "https://res.cloudinary.com/da9s9vymf/image/upload/v1775893358/03._Arcmen_interior_designer_chennai_olro9m.jpg",
  "https://res.cloudinary.com/da9s9vymf/image/upload/v1775893355/13._Arcmen_interior_designer_chennai_u6tv88.jpg",
  "https://res.cloudinary.com/da9s9vymf/image/upload/v1775893356/06._Arcmen_interior_designer_chennai_wryw3x.jpg",
  "https://res.cloudinary.com/da9s9vymf/image/upload/v1775893353/01._Arcmen_interior_designer_chennai_gsm3vn.jpg",
  "https://res.cloudinary.com/da9s9vymf/image/upload/v1775893352/02._Arcmen_interior_designer_chennai_bbiyen.jpg",

  "https://res.cloudinary.com/da9s9vymf/image/upload/v1775893597/09.son_Bedroom_cot_view_tmqwvs.png",
  "https://res.cloudinary.com/da9s9vymf/image/upload/v1775893594/05.Livng_Tv_Wall_xnek4i.jpg",
  "https://res.cloudinary.com/da9s9vymf/image/upload/v1775893604/01.elevation_whnt2r.jpg",
  "https://res.cloudinary.com/da9s9vymf/image/upload/v1775893599/06.Kitchen_ngymow.jpg",
  "https://res.cloudinary.com/da9s9vymf/image/upload/v1775893596/08.Bedroom_cot_view_q1djzp.png",

  "https://res.cloudinary.com/da9s9vymf/image/upload/v1775893806/07_phkohc.jpg",
  "https://res.cloudinary.com/da9s9vymf/image/upload/v1775893807/11_dd4nwv.jpg",
  "https://res.cloudinary.com/da9s9vymf/image/upload/v1775893805/09_n9gtfq.jpg",
  "https://res.cloudinary.com/da9s9vymf/image/upload/v1775893806/08_aldm9h.jpg",
  "https://res.cloudinary.com/da9s9vymf/image/upload/v1775893807/12_cwurrm.jpg",
];

const PROJECTS_DATA = [
  {
    title: "Mr.Mohan - Ocean Chlorophyll Apartment",
    location: "Porur, Chennai",
    area: "1200 Sq.ft.",
    description: "A compact home crafted for functionality, aesthetics, and everyday comfort.",
    mainImage: IMAGES[0],
    thumbs: [IMAGES[1], IMAGES[2], IMAGES[3], IMAGES[4]],
  },
  {
    title: "Mr.Krishna",
    location: "Ranipet TamilNadu",
    area: "3200 Sq.ft.",
    description: "A spacious villa with timeless design, premium finishes, and elegant detailing.",
    mainImage: IMAGES[5],
    thumbs: [IMAGES[6], IMAGES[7], IMAGES[8], IMAGES[9]],
  },
  {
    title: "Mr.Arun",
    location: "Kumbakonam, Tamilnadu",
    area: "3200 Sq.ft.",
    description: "A spacious villa with timeless design, premium finishes, and elegant detailing.",
    mainImage: IMAGES[10],
    thumbs: [IMAGES[11], IMAGES[12], IMAGES[13], IMAGES[14]],
  },
  {
    title: "Mr.NBS Vijayshankar",
    location: "Panaiyur Ecr Chennai",
    area: "3200 Sq.ft.",
    description: "A spacious villa with timeless design, premium finishes, and elegant detailing.",
    mainImage: IMAGES[15],
    thumbs: [IMAGES[16], IMAGES[17], IMAGES[18], IMAGES[19]],
  },
  {
    title: "Mr.Baskar",
    location: "Kovur chennai",
    area: "3200 Sq.ft.",
    description: "A spacious villa with timeless design, premium finishes, and elegant detailing.",
    mainImage: IMAGES[20],
    thumbs: [IMAGES[21], IMAGES[22], IMAGES[23], IMAGES[24]],
  },
];

function ProjectCard({ project, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-2 items-start"
    >
      <div className="relative rounded overflow-hidden aspect-[4/3] shadow-lg group bg-white">
        <span className="absolute top-3 left-3 z-10 bg-white text-[#1a1a1a] text-[11px] font-semibold px-3 rounded-full shadow">
          Completed
        </span>
        <img
          src={project.mainImage}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="grid grid-cols-2 gap-2 md:gap-2.5">
        {project.thumbs.map((src, i) => (
          <img key={i} src={src} className="w-full aspect-[4/3] object-cover rounded shadow-md" />
        ))}
      </div>
      <div className="col-span-1 md:col-span-2 flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-5 pt-1">
        <div>
          <h4 className="font-playfair text-[18px] md:text-[clamp(18px,2.4vw,24px)] font-bold text-[#1a1a1a] mb-1">
            {project.title}
          </h4>
          <div className="flex items-center gap-2 text-[12px] md:text-[13px]">
            <BiCurrentLocation size={14} />
            <span>{project.location}</span>
          </div>
        </div>
      </div>
    </motion.div>
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
          <h2 className="font-playfair text-[22px] md:text-[clamp(28px,4vw,40px)] font-extrabold text-[#1a1a1a] leading-snug">
            Every Home in Chennai We Designed <br className="hidden md:block" />
            Became a <span className="text-[#4dbc15]">Space to Love</span>
          </h2>
          <p className="mt-2 text-[13px] md:text-[15px] max-w-xl mx-auto">
            From compact apartments to spacious villas, we design interiors that reflect your story, style, and the way you live.
          </p>
        </div>
        <div className="flex flex-col gap-8 md:gap-20">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard key={index} project={project} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
}