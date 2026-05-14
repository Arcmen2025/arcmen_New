"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/app/utilits/constants";

export default function TestimonialsSection() {
  const [expanded, setExpanded] = useState(null);
  const [active, setActive] = useState(0);
  const [videoExpanded, setVideoExpanded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayInterval = useRef(null);

  const videos = [
    "https://www.youtube.com/embed/tEgRxrM_pl4",
  ];

  // Check mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide functionality for mobile (only when no testimonial is expanded)
  useEffect(() => {
    // Clear any existing interval first
    if (autoPlayInterval.current) {
      clearInterval(autoPlayInterval.current);
      autoPlayInterval.current = null;
    }

    // Only start auto-play if:
    // 1. We are on mobile
    // 2. Auto-play is enabled
    // 3. There are testimonials
    // 4. NO testimonial is currently expanded (so user is not reading full text)
    if (isMobile && isAutoPlaying && TESTIMONIALS.length > 0 && expanded === null) {
      autoPlayInterval.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % TESTIMONIALS.length);
      }, 5000);
    }

    return () => {
      if (autoPlayInterval.current) {
        clearInterval(autoPlayInterval.current);
      }
    };
  }, [isMobile, isAutoPlaying, expanded]); // Fixed: Removed TESTIMONIALS.length from dependencies

  const stopAutoPlay = () => {
    setIsAutoPlaying(false);
    // Re-enable auto-play after 10 seconds of inactivity
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

  const nextSlide = () => {
    if (expanded !== null) return; // Don't allow slide change when expanded
    stopAutoPlay();
    setCurrentSlide((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    if (expanded !== null) return; // Don't allow slide change when expanded
    stopAutoPlay();
    setCurrentSlide((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const goToSlide = (index) => {
    if (expanded !== null) return; // Don't allow slide change when expanded
    stopAutoPlay();
    setCurrentSlide(index);
  };

  const toggleReadMore = (index) => {
    // If we are expanding a testimonial (not closing it)
    if (expanded !== index) {
      // Stop auto-play immediately
      setIsAutoPlaying(false);
      // Clear any auto-play interval that might be running
      if (autoPlayInterval.current) {
        clearInterval(autoPlayInterval.current);
        autoPlayInterval.current = null;
      }
    } else {
      // We are closing (reading less) - we can restart auto-play after a delay
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

  // Testimonial Card Component
  const TestimonialCard = ({ testimonial, index, isActive }) => {
    const isOpen = expanded === index;
    const isLong = testimonial.text.length > MAX_CHARS;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ 
          opacity: isActive ? 1 : 0.5,
          scale: isActive ? 1 : 0.95
        }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-xl lg:rounded-2xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#4dbc15]/20 h-full"
      >
        <div className="flex gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
            <img
              src={testimonial.avatar || "https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2558760599.jpg"}
              alt={testimonial.name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <div className="flex-1">
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-2 sm:mb-3">
              "{truncateText(testimonial.text, isOpen)}"
              {!isOpen && isLong && "... "}
              {isLong && (
                <button
                  onClick={() => toggleReadMore(index)}
                  className="text-[#4dbc15] hover:text-[#3da010] font-medium ml-1 transition-colors duration-200"
                >
                  {isOpen ? "Read Less" : "Read More"}
                </button>
              )}
            </p>
            <p className="text-xs sm:text-sm font-semibold text-gray-800">
              {testimonial.name}
            </p>
            {testimonial.location && (
              <p className="text-xs text-gray-500 mt-1">{testimonial.location}</p>
            )}
          </div>
        </div>
      </motion.div>
    );
  };

  // Desktop View (Grid 3 columns)
  const DesktopView = () => (
    <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
      {TESTIMONIALS.map((t, i) => (
        <TestimonialCard key={i} testimonial={t} index={i} isActive={true} />
      ))}
    </div>
  );

  // Mobile View (Slider) - Disable sliding when a testimonial is expanded
  const MobileView = () => {
    // When expanded is not null, we disable transition and fix the slide to the current expanded card
    const isExpandedMode = expanded !== null;

    return (
      <div className="md:hidden relative">
        {/* Slider Container */}
        <div className="overflow-hidden">
          <div 
            className={`flex ${!isExpandedMode ? 'transition-transform duration-500 ease-out' : ''}`}
            style={{ 
              transform: `translateX(-${currentSlide * 100}%)`
            }}
          >
            {TESTIMONIALS.map((testimonial, index) => (
              <div key={index} className="min-w-full px-1">
                <TestimonialCard 
                  testimonial={testimonial} 
                  index={index} 
                  isActive={index === currentSlide}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Optional hint text when expanded */}
        {isExpandedMode && (
          <div className="text-center mt-4 text-xs text-gray-500">
            Press "Read Less" to continue browsing testimonials
          </div>
        )}

      </div>
    );
  };

  return (
    <section className="py-6 sm:py-6 md:py-6 lg:py-8 bg-gradient-to-b from-white to-gray-50">
      <div className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-6 md:mb-6 lg:mb-8">
          <h2 className="font-playfair !text-lg sm:!text-base md:!text-xl lg:!text-2xl font-extrabold text-[#1a1a1a] leading-tight">
            Hear from our
            <span className="text-[#4dbc15] relative inline-block ml-2">
              esteemed Clients!
            </span>
          </h2>
        </div>

        {/* Video Section - Visible on all devices */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <div className="relative rounded-xl lg:rounded-2xl overflow-hidden bg-gray-900 shadow-2xl max-w-4xl mx-auto">
            <div className="aspect-video w-full">
              <motion.div
                layoutId="testimonial-video"
                onClick={() => setVideoExpanded(true)}
                className="w-full h-full cursor-pointer relative group"
              >
                <iframe
                  src={videos[active]}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full rounded-xl lg:rounded-2xl"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 rounded-xl lg:rounded-2xl bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            </div>

            {/* Play Button Overlay */}
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4">
              <button
                onClick={() => setVideoExpanded(true)}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-black/80 hover:bg-black rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                aria-label="Play video"
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

          {/* Video Pagination Dots */}
          <div className="flex justify-center gap-2 mt-4 sm:mt-5">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`transition-all duration-300 rounded-full ${
                  active === index
                    ? "bg-[#4dbc15] w-6 sm:w-7 h-1.5 sm:h-2"
                    : "bg-gray-300 hover:bg-gray-400 w-1.5 sm:w-2 h-1.5 sm:h-2"
                }`}
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <DesktopView />
        <MobileView />
      </div>

      {/* Expanded Video Modal */}
      <AnimatePresence>
        {videoExpanded && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[999] flex items-center justify-center p-4 sm:p-6"
            onClick={() => setVideoExpanded(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              layoutId="testimonial-video"
              className="w-full max-w-full aspect-video bg-[#7aa33a] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <button
                  onClick={() => setVideoExpanded(false)}
                  className="absolute -top-10 sm:-top-12 right-0 sm:right-2 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-1 sm:p-2"
                  aria-label="Close video"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <iframe
                  src={`${videos[active]}?autoplay=1`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
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