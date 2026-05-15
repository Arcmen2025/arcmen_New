"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { TESTIMONIALS } from "@/app/utilits/constants";

export default function TestimonialsSection() {
  const [expanded, setExpanded] = useState(null);
  const [active, setActive] = useState(0);
  const [videoExpanded, setVideoExpanded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1); // start from middle copy
  const [isMobile, setIsMobile] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const sliderRef = useRef(null);
  const autoPlayInterval = useRef(null);

  const videos = ["https://www.youtube.com/embed/tEgRxrM_pl4"];

  // Triple testimonials for infinite slider
  const sliderTestimonials = useMemo(() => {
    return [
      TESTIMONIALS[TESTIMONIALS.length - 1],
      ...TESTIMONIALS,
      TESTIMONIALS[0],
    ];
  }, []);

  // Mobile check
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto slide
  useEffect(() => {
    if (autoPlayInterval.current) {
      clearInterval(autoPlayInterval.current);
    }

    if (
      isMobile &&
      isAutoPlaying &&
      expanded === null &&
      !isDragging
    ) {
      autoPlayInterval.current = setInterval(() => {
        setCurrentSlide((prev) => prev + 1);
      }, 4000);
    }

    return () => {
      if (autoPlayInterval.current) {
        clearInterval(autoPlayInterval.current);
      }
    };
  }, [isMobile, isAutoPlaying, expanded, isDragging]);

  // Infinite loop fix
  useEffect(() => {
    if (currentSlide === sliderTestimonials.length - 1) {
      const timer = setTimeout(() => {
        setCurrentSlide(1);
      }, 500);

      return () => clearTimeout(timer);
    }

    if (currentSlide === 0) {
      const timer = setTimeout(() => {
        setCurrentSlide(TESTIMONIALS.length);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [currentSlide, sliderTestimonials.length]);

  const stopAutoPlay = () => {
    setIsAutoPlaying(false);

    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

  const nextSlide = () => {
    if (expanded !== null) return;

    stopAutoPlay();
    setCurrentSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (expanded !== null) return;

    stopAutoPlay();
    setCurrentSlide((prev) => prev - 1);
  };

  // Drag Start
  const handleDragStart = (e) => {
    if (!isMobile) return;

    setIsDragging(true);

    if (autoPlayInterval.current) {
      clearInterval(autoPlayInterval.current);
    }

    const clientX =
      e.type === "touchstart"
        ? e.touches[0].clientX
        : e.clientX;

    setStartX(clientX);
  };

  // Drag Move
  const handleDragMove = (e) => {
    if (!isDragging) return;

    const clientX =
      e.type === "touchmove"
        ? e.touches[0].clientX
        : e.clientX;

    setDragOffset(clientX - startX);
  };

  // Drag End
  const handleDragEnd = () => {
    if (!isDragging) return;

    const threshold = 80;

    if (dragOffset < -threshold) {
      nextSlide();
    } else if (dragOffset > threshold) {
      prevSlide();
    }

    setDragOffset(0);
    setIsDragging(false);
  };

  const toggleReadMore = (index) => {
    if (expanded !== index) {
      setIsAutoPlaying(false);

      if (autoPlayInterval.current) {
        clearInterval(autoPlayInterval.current);
      }
    } else {
      setIsAutoPlaying(true);
    }

    setExpanded(expanded === index ? null : index);
  };

  const MAX_CHARS = 140;

  const truncateText = (text, isOpen) => {
    if (isOpen || text.length <= MAX_CHARS) return text;

    const sliced = text.slice(0, MAX_CHARS);

    return sliced.slice(0, sliced.lastIndexOf(" "));
  };

  // Testimonial Card
  const TestimonialCard = ({
    testimonial,
    index,
    isActive,
  }) => {
    const realIndex =
      (index - 1 + TESTIMONIALS.length) %
      TESTIMONIALS.length;

    const isOpen = expanded === realIndex;

    const isLong =
      testimonial.text.length > MAX_CHARS;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{
          opacity: isActive ? 1 : 0.6,
          scale: isActive ? 1 : 0.96,
        }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-xl lg:rounded-2xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#4dbc15]/20 h-full"
      >
        <div className="flex gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
            <Image
              src={
                testimonial.avatar ||
                "https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2558760599.jpg"
              }
              alt={testimonial.name}
              width={48}
              height={48}
              className="w-full h-full object-cover rounded-full"
              loading="lazy"
            />
          </div>

          <div className="flex-1">
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-2 sm:mb-3">
              "{truncateText(testimonial.text, isOpen)}"

              {!isOpen && isLong && "... "}

              {isLong && (
                <button
                  onClick={() =>
                    toggleReadMore(realIndex)
                  }
                  className="text-[#4dbc15] hover:text-[#3da010] font-medium ml-1"
                >
                  {isOpen
                    ? "Read Less"
                    : "Read More"}
                </button>
              )}
            </p>

            <p className="text-xs sm:text-sm font-semibold text-gray-800">
              {testimonial.name}
            </p>

            {testimonial.location && (
              <p className="text-xs text-gray-500 mt-1">
                {testimonial.location}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    );
  };

  // Desktop Grid
  const DesktopView = () => (
    <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
      {TESTIMONIALS.map((t, i) => (
        <TestimonialCard
          key={i}
          testimonial={t}
          index={i + 1}
          isActive={true}
        />
      ))}
    </div>
  );

  // Mobile Infinite Slider
  const MobileView = () => {
    return (
      <div className="md:hidden relative">
        <div
          ref={sliderRef}
          className="overflow-hidden cursor-grab active:cursor-grabbing"
        >
          <div
            className={`flex ${
              !isDragging
                ? "transition-transform duration-500 ease-out"
                : ""
            }`}
            style={{
              transform: `translateX(calc(-${
                currentSlide * 100
              }% + ${dragOffset}px))`,
            }}
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
          >
            {sliderTestimonials.map(
              (testimonial, index) => (
                <div
                  key={index}
                  className="min-w-full px-1"
                >
                  <TestimonialCard
                    testimonial={testimonial}
                    index={index}
                    isActive={
                      index === currentSlide
                    }
                  />
                </div>
              )
            )}
          </div>
        </div>

        {expanded !== null && (
          <div className="text-center mt-4 text-xs text-gray-500">
            Press "Read Less" to continue
            browsing testimonials
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="py-6 sm:py-4 md:py-6 lg:py-6 bg-gradient-to-b from-white to-gray-50">
      <div className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-6 md:mb-6 lg:mb-8">
          <h2 className="font-playfair !text-lg sm:!text-base md:!text-xl lg:!text-2xl font-extrabold text-[#1a1a1a] leading-tight">
            Hear from our
            <span className="text-[#4dbc15] relative inline-block ml-2">
              esteemed Clients!
            </span>
          </h2>
        </div>

        {/* Video Section */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <div className="relative rounded-xl lg:rounded-2xl overflow-hidden bg-gray-900 shadow-2xl max-w-4xl mx-auto">
            <div className="aspect-video w-full">
              <motion.div
                layoutId="testimonial-video"
                onClick={() =>
                  setVideoExpanded(true)
                }
                className="w-full h-full cursor-pointer relative group"
              >
                <Image
                  src="https://img.youtube.com/vi/tEgRxrM_pl4/maxresdefault.jpg"
                  alt="Video Thumbnail"
                  fill
                  priority
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </div>

            {/* Play Button */}
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4">
              <button
                onClick={() =>
                  setVideoExpanded(true)
                }
                className="w-10 h-10 sm:w-12 sm:h-12 bg-black/80 hover:bg-black rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-white ml-0.5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <DesktopView />
        <MobileView />
      </div>

      {/* Modal */}
      <AnimatePresence>
        {videoExpanded && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[999] flex items-center justify-center p-4 sm:p-6"
            onClick={() =>
              setVideoExpanded(false)
            }
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              layoutId="testimonial-video"
              className="w-full max-w-full aspect-video bg-black rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) =>
                e.stopPropagation()
              }
            >
              <div className="relative w-full h-full">
                <button
                  onClick={() =>
                    setVideoExpanded(false)
                  }
                  className="absolute -top-10 sm:-top-12 right-0 sm:right-2 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-1 sm:p-2"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <iframe
                  src={`${videos[active]}?autoplay=1`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}