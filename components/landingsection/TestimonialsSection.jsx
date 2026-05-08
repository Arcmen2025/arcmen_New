"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/app/utilits/constants";

export default function TestimonialsSection() {
  const [expanded, setExpanded] = useState(null);
  const [active, setActive] = useState(0);
  const [videoExpanded, setVideoExpanded] = useState(false);

  const videos = [
    "https://www.youtube.com/embed/tEgRxrM_pl4",
  ];

  const toggleReadMore = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const MAX_CHARS = 140;

  const truncateText = (text, isOpen) => {
    if (isOpen || text.length <= MAX_CHARS) return text;

    const sliced = text.slice(0, MAX_CHARS);

    return sliced.slice(0, sliced.lastIndexOf(" "));
  };

  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="sec-head text-black font-extrabold text-3xl">
            Hear from our
            <span className="md:block"> esteemed Clients!</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-6">
            <div className="relative rounded-[6px] overflow-hidden bg-stone-800 min-h-[350px] md:min-h-[350px]">
              <motion.div
                layoutId="testimonial-video"
                onClick={() => setVideoExpanded(true)}
                className="absolute inset-0 cursor-pointer"
              >
                <iframe
                  src={videos[active]}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full rounded-[6px]"
                />
              </motion.div>

              <div className="absolute inset-0 rounded-[6px] bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-end">
                <button
                  onClick={() => setVideoExpanded(true)}
                  className="w-12 h-12 bg-black rounded-full flex items-center justify-center"
                >
                  <svg
                    className="w-8 h-8 text-white ml-0.5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex justify-center  mt-4">
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`!w-1 h-1 rounded-full ${
                    active === index
                      ? "bg-black scale-110"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="hidden md:block md:col-span-6 flex flex-col  ">
            {TESTIMONIALS.map((t, i) => {
              const isOpen = expanded === i;
              const isLong = t.text.length > MAX_CHARS;

              return (
                <div
                  key={i}
                  className="bg-stone-50 flex gap-6 rounded-2xl p-2 border border-stone-100"
                >
                  <div className="w-10 h-10 bg-stone-300 rounded-full flex items-center justify-center flex-shrink-0">
                    <img
                      src="https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2558760599.jpg"
                      alt={t.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>

                  <div className="flex flex-col">
                    <p className="text-sm mb-0">
                      {truncateText(t.text, isOpen)}

                      {!isOpen && isLong && "... "}

                      {isLong && (
                        <span
                          onClick={() => toggleReadMore(i)}
                          className="text-blue-500 cursor-pointer ml-1"
                        >
                          {isOpen ? "Read Less" : "Read More"}
                        </span>
                      )}
                    </p>

                    <p className="text-xs text-gray-500 mt-2 md:mt-0 md:mb-0 font-medium">
                      {t.name}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {videoExpanded && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-[999] flex items-center justify-center"
            onClick={() => setVideoExpanded(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              layoutId="testimonial-video"
              className="w-[90%] md:w-[70%] lg:w-[60%] aspect-video p-[6px] bg-[#7aa33a] rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full h-full rounded-xl overflow-hidden">
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