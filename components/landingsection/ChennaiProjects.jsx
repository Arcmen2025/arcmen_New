"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";


const IMAGES = [
  "https://assets.webdads2u.com/images/1777290869100-05-dinning.jpg",
  "https://assets.webdads2u.com/images/1777290897972-13-master-bedroom-fluted-cnc-2.jpeg",
  "https://assets.webdads2u.com/images/1777290929436-01.jpg",
  "https://assets.webdads2u.com/images/1777290955909-02.jpg",
  "https://arcmen-uploads.s3.us-east-1.amazonaws.com/images/1778652728682-bedroom-1.webp",
  "https://arcmen-uploads.s3.us-east-1.amazonaws.com/images/1778652750486-bedroom-2.webp",
  "https://arcmen-uploads.s3.us-east-1.amazonaws.com/images/1778652784660-kids-room.webp",
  "https://arcmen-uploads.s3.us-east-1.amazonaws.com/images/1778652807546-kitchen.webp",
  "https://arcmen-uploads.s3.us-east-1.amazonaws.com/images/1778652836797-living.webp",
  "https://arcmen-uploads.s3.us-east-1.amazonaws.com/images/1778652179292-image---1.webp",
  "https://arcmen-uploads.s3.us-east-1.amazonaws.com/images/1778652305788-image-2.webp",
  "https://arcmen-uploads.s3.us-east-1.amazonaws.com/images/1778652229984-image---3.webp",
  "https://arcmen-uploads.s3.us-east-1.amazonaws.com/images/1778652263427-image---4.webp",
  "https://arcmen-uploads.s3.us-east-1.amazonaws.com/images/1778652328446-image-5.webp",
  "https://arcmen-uploads.s3.us-east-1.amazonaws.com/images/1778652957711-bedroom-cot-view.webp",
  "https://arcmen-uploads.s3.us-east-1.amazonaws.com/images/1778652999745-elevation.webp",
  "https://arcmen-uploads.s3.us-east-1.amazonaws.com/images/1778653018777-foyer.webp",
  "https://arcmen-uploads.s3.us-east-1.amazonaws.com/images/1778653046304-kitchen.webp",
  "https://arcmen-uploads.s3.us-east-1.amazonaws.com/images/1778653068873-living.webp",
  "https://arcmen-uploads.s3.us-east-1.amazonaws.com/images/1778653223108-image-1.webp",
  "https://arcmen-uploads.s3.us-east-1.amazonaws.com/images/1778653251513-image-2.webp",
  "https://arcmen-uploads.s3.us-east-1.amazonaws.com/images/1778653274354-image-3.webp",
  "https://arcmen-uploads.s3.us-east-1.amazonaws.com/images/1778653294416-image-4.webp",
  "https://arcmen-uploads.s3.us-east-1.amazonaws.com/images/1778653314263-image-5.webp",
  "https://assets.webdads2u.com/images/1777291904238-10.jpg",
]

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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4 lg:gap-6 items-start">
      {/* Main Image */}
      <div className="relative rounded-lg overflow-hidden shadow-lg bg-white w-full">
        <span className="absolute top-3 left-3 bg-black/70 text-white text-[10px] sm:text-xs md:text-sm px-2 sm:px-3 py-1 sm:py-1.5 md:py-2 rounded-md z-10 font-medium shadow-md">
          {project.area}
        </span>
        <img
          src={project.mainImage}
          alt={project.title}
          onClick={scrollToContact}
          className="w-full h-auto aspect-[4/3] object-cover cursor-pointer hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
        {project.thumbs.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${project.title} view ${i + 1}`}
            onClick={scrollToContact}
            className="w-full aspect-[4/3] object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300 hover:shadow-xl"
          />
        ))}
      </div>

      {/* Project Info */}
      <div className="col-span-1 lg:col-span-2 flex flex-col sm:flex-row justify-between sm:items-center gap-2 sm:gap-0 pt-2 sm:pt-3 md:pt-4">
        <div>
          <h4 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800">
            {project.title}
          </h4>
          <div className="text-xs sm:text-sm md:text-base text-gray-600 mt-0.5 sm:mt-1">
            📍 {project.location}
          </div>
        </div>
      </div>
    </div>
  );
}

  export default function ChennaiProjects({ setIsMobileFormOpen }) {
  const pathname = usePathname();
  const isTargetPage = pathname === "/home-interior-designers-in-chennai";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayInterval = useRef(null);

  // Auto-slide functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayInterval.current = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === PROJECTS_DATA.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Change slide every 4 seconds
    } else {
      if (autoPlayInterval.current) {
        clearInterval(autoPlayInterval.current);
      }
    }

    return () => {
      if (autoPlayInterval.current) {
        clearInterval(autoPlayInterval.current);
      }
    };
  }, [isAutoPlaying]);

  // Stop auto-play when user interacts
  const stopAutoPlay = () => {
    setIsAutoPlaying(false);
    // Restart auto-play after 10 seconds of inactivity
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

  const handleDotClick = (index) => {
    stopAutoPlay();
    setCurrentIndex(index);
  };

  const handleTouchStart = (e) => {
    stopAutoPlay();
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrentIndex((prev) => Math.min(prev + 1, PROJECTS_DATA.length - 1));
      } else {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const handleMouseDown = (e) => {
    stopAutoPlay();
    setTouchStart(e.clientX);
  };

  const handleMouseUp = (e) => {
    if (!touchStart) return;
    const diff = touchStart - e.clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrentIndex((prev) => Math.min(prev + 1, PROJECTS_DATA.length - 1));
      } else {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    }
    setTouchStart(null);
  };

  // Pause auto-play on hover
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <section className="py-8 sm:py-6 md:py-6 lg:py-6 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <p className="inline-block text-[10px] sm:text-[11px] md:text-[12px] tracking-[2px] sm:tracking-[3px] uppercase px-3 sm:px-4 py-1 sm:py-1.5 mb-3 sm:mb-4 rounded-full backdrop-blur-md bg-white/60 text-[#4dbc15] border border-[#4dbc15]/40 shadow-lg font-medium">
            Our Projects
          </p>
          <h2 className="font-playfair !text-lg sm:!text-base md:!text-xl lg:!text-2xl font-semibold text-[#1a1a1a] leading-tight sm:leading-snug">
            {!isTargetPage ? (
              <>
                Every Interior Design Project in Chennai <br className="hidden sm:block" />
                We Created Became a{" "}
                <span className="text-[#4dbc15] relative inline-block">
                  Space to Love
                  <svg className="absolute -bottom-1 left-0 w-full h-1 sm:h-1.5 md:h-2" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 4 L200 4" strokeWidth="2" strokeDasharray="4 4" fill="none"/>
                  </svg>
                </span>
              </>
            ) : (
              <>
                Every Home interiors in Chennai We Designed <br className="hidden sm:block" />
                Became a{" "}
                <span className="text-[#4dbc15] relative inline-block">
                  Space to Love
                  <svg className="absolute -bottom-1 left-0 w-full h-1 sm:h-1.5 md:h-2" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 4 L200 4"  strokeWidth="2" strokeDasharray="4 4" fill="none"/>
                  </svg>
                </span>
              </>
            )}
          </h2>
        </div>

        {/* Projects Carousel */}
        <div
          className="overflow-hidden cursor-grab active:cursor-grabbing select-none touch-pan-y"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={() => {
            setTouchStart(null);
            setIsAutoPlaying(true);
          }}
          onMouseEnter={handleMouseEnter}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {PROJECTS_DATA.map((project, index) => (
              <div key={index} className="min-w-full px-0">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-2 sm:mt-4 md:mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileFormOpen(true)}
           className="inline-block bg-[#4dbc15] hover:bg-[#3da010] text-white text-sm sm:text-base md:text-lg font-semibold px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-3 rounded-full shadow-lg hover:shadow-xl"
          >
            Book a free site visit
          </motion.button>
        </div>
      </div>
    </section>
  );
}