"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";
import LeadFormMobile from "./LeadFormMobile";

const SOLUTIONS = [
  {
    title: "Wardrobes",
    img: "https://arcmen-uploads.s3.us-east-1.amazonaws.com/images/1778650035209-wardrobes.webp",
  },
  {
    title: "Bedrooms",
    img: "https://arcmen-uploads.s3.us-east-1.amazonaws.com/images/1778649860515-bedroom.webp",
  },
  {
    title: "Living Rooms",
    img: "https://arcmen-uploads.s3.us-east-1.amazonaws.com/images/1778649706005-living-room.webp",
  },
  {
    title: "Pooja Rooms",
    img: "https://arcmen-uploads.s3.us-east-1.amazonaws.com/images/1778649735991-pooja-room.webp",
  },
  {
    title: "Modular Kitchens",
    img: "https://assets.webdads2u.com/images/1777289722608-whatsapp-image-2026-04-27-at-12-06-55.jpeg",
  },
  {
    title: "Dining Rooms",
    img: "https://arcmen-uploads.s3.us-east-1.amazonaws.com/images/1778649889908-dining-room.webp",
  },
  {
    title: "Full Home Interiors",
    img: "https://arcmen-uploads.s3.us-east-1.amazonaws.com/images/1778649654225-full-home-interiors.webp",
  },
  {
    title: "Bathrooms",
    img: "https://arcmen-uploads.s3.us-east-1.amazonaws.com/images/1778649821501-bathroom.webp",
  },
  {
    title: "Kitchen",
    img: "https://arcmen-uploads.s3.us-east-1.amazonaws.com/images/1778649918175-kitchen.webp",
  },
];

export default function SolutionsSlider({
  setIsMobileFormOpen,
  isMobileFormOpen,
}) {
  const pathname = usePathname();

  const isTargetPage =
    pathname === "/home-interior-designers-in-chennai";

  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [cardWidth, setCardWidth] = useState(320);
  const [enableTransition, setEnableTransition] = useState(true);

  const containerRef = useRef(null);
  const autoPlayRef = useRef(null);

  // Duplicate for seamless infinite loop
  const data = [...SOLUTIONS, ...SOLUTIONS];

  const total = SOLUTIONS.length;

  // Responsive sizing
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;

      setIsMobile(mobile);

      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }

      const width = window.innerWidth;

      if (width < 640) {
        setCardWidth(width - 32);
      } else if (width < 768) {
        setCardWidth(280);
      } else if (width < 1024) {
        setCardWidth(300);
      } else {
        setCardWidth(320);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  // Infinite autoplay
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2500);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, []);

  // Reset slider without visible jump
  useEffect(() => {
    if (index >= total) {
      const timeout = setTimeout(() => {
        setEnableTransition(false);
        setIndex(0);
      }, 500);

      return () => clearTimeout(timeout);
    } else {
      setEnableTransition(true);
    }
  }, [index, total]);

  // Restart autoplay
  const resetAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }

    autoPlayRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 4000);
  };

  // Navigation
  const nextSlide = () => {
    setIndex((prev) => prev + 1);
    resetAutoPlay();
  };

  const prevSlide = () => {
    if (index === 0) {
      setEnableTransition(false);
      setIndex(total - 1);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEnableTransition(true);
        });
      });
    } else {
      setIndex((prev) => prev - 1);
    }

    resetAutoPlay();
  };

  // Drag Start
  const handleDragStart = (e) => {
    setIsDragging(true);

    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }

    const clientX =
      e.type === "touchstart"
        ? e.touches[0].clientX
        : e.clientX;

    setStartX(clientX);
    setDragOffset(0);
  };

  // Drag Move
  const handleDragMove = (e) => {
    if (!isDragging) return;

    const clientX =
      e.type === "touchmove"
        ? e.touches[0].clientX
        : e.clientX;

    const diff = startX - clientX;

    setDragOffset(diff);
  };

  // Drag End
  const handleDragEnd = (e) => {
    if (!isDragging) return;

    setIsDragging(false);

    let clientX;

    if (e.type === "touchend") {
      clientX = e.changedTouches[0].clientX;
    } else {
      clientX = e.clientX;
    }

    const diff = startX - clientX;

    const threshold = isMobile ? 50 : 80;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    setDragOffset(0);

    resetAutoPlay();
  };

  // Translate logic
  const getTranslateX = () => {
    const slideWidth = isMobile
      ? containerWidth
      : cardWidth + 16;

    let baseX = -(index * slideWidth);

    if (isDragging) {
      const dragLimit = slideWidth;

      const limitedOffset = Math.min(
        Math.max(dragOffset, -dragLimit),
        dragLimit
      );

      baseX -= limitedOffset;
    }

    return baseX;
  };

  return (
    <section className="py-6 sm:py-6 md:py-6 lg:py-10 overflow-hidden">
      <div className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-6 md:mb-8 lg:mb-10">
          <h2 className="font-playfair !text-lg sm:!text-base md:!text-xl lg:!text-2xl font-extrabold text-[#1a1a1a] leading-tight">
            {isTargetPage ? (
              <>
                Complete Home Interior <br className="hidden sm:block" />
                <span className="text-[#4dbc15] relative inline-block">
                  Design Services in Chennai
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-1 sm:h-1.5"
                    viewBox="0 0 200 8"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 4 L200 4"
                      stroke="#4dbc15"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      fill="none"
                    />
                  </svg>
                </span>
              </>
            ) : (
              <>
                Complete Interior Design Services in <br className="hidden sm:block" />
                <span className="text-[#4dbc15] relative inline-block">
                  <span className="text-black">
                    Chennai
                  </span>{" "}
                  Homes, Apartments & Turnkey Projects

                  <svg
                    className="absolute -bottom-2 left-0 w-full h-1 sm:h-1.5"
                    viewBox="0 0 200 8"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 4 L200 4"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      fill="none"
                    />
                  </svg>
                </span>
              </>
            )}
          </h2>
        </div>

        {/* Slider */}
        <div className="relative">

          <div
            ref={containerRef}
            className="overflow-hidden w-full cursor-grab active:cursor-grabbing select-none"
          >
            <motion.div
              className="flex"
              animate={{
                x: getTranslateX(),
              }}
              transition={
                enableTransition
                  ? {
                      duration: isDragging ? 0 : 0.5,
                      ease: "easeInOut",
                    }
                  : {
                      duration: 0,
                    }
              }
              onMouseDown={handleDragStart}
              onMouseMove={handleDragMove}
              onMouseUp={handleDragEnd}
              onMouseLeave={() => {
                if (isDragging) {
                  setIsDragging(false);
                  setDragOffset(0);
                  resetAutoPlay();
                }
              }}
              onTouchStart={handleDragStart}
              onTouchMove={handleDragMove}
              onTouchEnd={handleDragEnd}
              style={{
                cursor: isDragging ? "grabbing" : "grab",
              }}
            >
              {data.map((s, i) => (
                <div
                  key={i}
                  style={
                    isMobile
                      ? {
                          minWidth: containerWidth,
                          width: containerWidth,
                        }
                      : {
                          width: cardWidth,
                          minWidth: cardWidth,
                        }
                  }
                  className="flex-shrink-0 px-0"
                >
                  <div className="relative bg-white rounded-xl lg:rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group mx-2 sm:mx-0">

                    {/* Image */}
                    <div className="relative overflow-hidden bg-gray-100 aspect-[4/4]">

                      <Image
                        src={s.img}
                        alt={s.title}
                        fill
                        sizes="(max-width:768px) 100vw, 320px"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        draggable={false}
                        priority={i < 2}
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                      {/* Title */}
                      <div className="absolute top-0 left-0 right-0 p-4 sm:p-5 md:p-6">
                        <h3 className="inline-block text-white bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-sm sm:text-sm md:text-sm font-semibold">
                          {s.title}
                        </h3>
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-4 sm:mt-6 md:mt-8">
            <button
              onClick={() => setIsMobileFormOpen(true)}
              className="relative overflow-hidden z-10 w-[250px] bg-[#4dbc15] text-white font-semibold py-2 sm:py-3 md:py-3 rounded-xl transition duration-300 text-sm tracking-wide shadow-sm hover:shadow-md hover:bg-[#3da30e] disabled:opacity-50"
            >
              <span className="relative z-10">
                Get free Quote
              </span>

              <span className="absolute inset-0 -translate-x-full animate-shine bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>
            </button>
          </div>

          {/* Mobile Form */}
          {isMobile && (
            <div className="flex items-center justify-center mt-4">
              <LeadFormMobile isMobile={true} />
            </div>
          )}

        </div>
      </div>
    </section>
  );
}