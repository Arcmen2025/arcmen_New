"use client";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

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

// Added `isPriority` prop to determine if it's the first slide
function ProjectCard({ project, isPriority }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4 lg:gap-6 items-start">
      
      {/* Main Image */}
      <div className="relative rounded-lg overflow-hidden shadow-lg bg-white w-full">
        <span className="absolute top-3 left-3 bg-black/70 text-white text-[10px] sm:text-xs md:text-sm px-2 sm:px-3 py-1 sm:py-1.5 md:py-2 rounded-md z-10 font-medium shadow-md">
          {project.area}
        </span>
        <Image
          src={project.mainImage}
          alt={project.title}
          width={800}
          height={600}
          quality={75}
          // Only eager-load the first image for LCP, lazy-load the rest
          priority={isPriority}
          loading={isPriority ? undefined : "lazy"}
          // Tells Next.js to serve smaller images to mobile devices
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="w-full h-auto aspect-[4/3] object-cover cursor-pointer hover:scale-105 transition-transform duration-500 bg-gray-100"
        />
      </div>

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
        {project.thumbs.map((src, i) => (
          <div key={i} className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
            <Image
              src={src}
              alt={`${project.title} view ${i + 1}`}
              width={300}
              height={225}
              quality={60}
              loading="lazy"
              sizes="(max-width: 768px) 50vw, 25vw"
              onClick={scrollToContact}
              className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300 hover:shadow-xl"
            />
          </div>
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

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayInterval.current = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === PROJECTS_DATA.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);
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

  const stopAutoPlay = () => {
    setIsAutoPlaying(false);
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 5000);
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

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section className="py-6 sm:py-6 md:py-6 lg:py-6 overflow-hidden">
      <div className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-6 md:mb-10 lg:mb-10">
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
                    <path d="M0 4 L200 4" strokeWidth="2" strokeDasharray="4 4" fill="none" />
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
                    <path d="M0 4 L200 4" strokeWidth="2" strokeDasharray="4 4" fill="none" />
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
                {/* Notice we pass isPriority=true ONLY to the very first slide */}
                <ProjectCard project={project} isPriority={index === 0} />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-2 sm:mt-4 md:mt-6">
          <button
            onClick={() => setIsMobileFormOpen(true)}
            className="relative overflow-hidden z-10 w-[250px] bg-[#4dbc15] text-white font-semibold py-2 sm:py-3 md:py-3 rounded-xl transition duration-300 text-sm tracking-wide shadow-sm hover:shadow-md hover:bg-[#3da30e] disabled:opacity-50"
          >
            <span className="relative z-10">Book a free site visit</span>
            <span className="absolute inset-0 -translate-x-full animate-shine bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>
          </button>
        </div>
      </div>
    </section>
  );
}