"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/app/utilits/constants";


export default function TestimonialsSection() {
  const [expanded, setExpanded] = useState(null);
  const [active, setActive] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoExpanded, setVideoExpanded] = useState(false);

  const videoRef = useRef(null);
  const videos = ["https://res.cloudinary.com/da9s9vymf/video/upload/v1775207665/video1_kli1vl.mp4", "https://res.cloudinary.com/da9s9vymf/video/upload/v1775207636/video2_pziow2.mp4", "https://res.cloudinary.com/da9s9vymf/video/upload/v1775207608/video3_b4iuqz.mp4", "https://res.cloudinary.com/da9s9vymf/video/upload/v1775207627/video4_wqlh0k.mp4"];

  const toggleReadMore = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  
  useEffect(() => {
    if (!isPlaying && !videoExpanded) {
      const interval = setInterval(() => {
        setActive((prev) => (prev + 1) % videos.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isPlaying, videoExpanded]);


  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (!isPlaying) {
      video.currentTime = 0;
      video.muted = false;
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      video.muted = true;
      setIsPlaying(false);
    }
  };

  // Reset when slide changes
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.muted = true;
    setIsPlaying(false);
  }, [active]);

  return (
    <section className="pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <motion.div className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="sec-head text-black font-extrabold !text-[28px] !md:text-[34px] 2xl:text-[48px]">
            Hear from our<span className="md:block">{" "}esteemed Clients!</span> 
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6 items-stretch">

        
          <div className="md:col-span-2">

            <div className="relative rounded-[6px] overflow-hidden bg-stone-800 min-h-[350px] md:min-h-[350px]">

            
              <motion.div
                layoutId="testimonial-video"
                onClick={() => setVideoExpanded(true)}
                className="absolute inset-0 cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
              >
                <video
                  ref={videoRef}
                  key={active}
                  src={videos[active]}
                  muted
                  playsInline
                  className="w-full h-full rounded-[6px] object-cover"
                />
              </motion.div>

              {/* Overlay */}
              <div className="absolute inset-0 rounded-[6px] bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between pointer-events-none">

                <p className="text-white font-bold text-sm leading-snug max-w-[70%]">
                  Discover what our clients think<br />about our work.
                </p>

                {/* Play Button */}
                <button
                  // onClick={(e) => {
                  //   e.stopPropagation();
                  //   handlePlayPause();
                  // }}
                   onClick={() => setVideoExpanded(true)}
                  className="w-12 h-12 bg-black rounded-full flex items-center justify-center pointer-events-auto"
                >
                  {isPlaying ? (
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="6" y="5" width="4" height="14" />
                      <rect x="14" y="5" width="4" height="14" />
                    </svg>
                  ) : (
                    <svg className="w-8 h-8 text-white ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>

              </div>
            </div>

            {/* DOTS */}
            <div className="flex justify-center gap-2 mt-4">
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`!w-1 h-1 rounded-full ${
                    active === index ? "bg-black scale-110" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

          </div>

          {/* RIGHT */}
          <div className="md:col-span-3 flex flex-col gap-4">
            {TESTIMONIALS.map((t, i) => {
              const isOpen = expanded === i;

              return (
                <div key={i} className="bg-stone-50 flex gap-6 rounded-2xl p-2 border border-stone-100">
                  <div className="w-10 h-10 bg-stone-300 rounded-full flex items-center justify-center flex-shrink-0"> <img src={t.img} alt={t.name} className="w-full h-full object-cover rounded-full" /> </div>
                  {/* <p className={`text-sm ${!isOpen ? "line-clamp-3" : ""}`}>
                    {t.text}{" "}
                    <span
                      onClick={() => toggleReadMore(i)}
                      className="text-blue-500 cursor-pointer"
                    >
                      {isOpen ? "Read Less" : "Read More"}
                    </span>
                  </p> */}
                  <div className="flex flex-col">
  <p className={`text-sm mb-0 ${!isOpen ? "line-clamp-3" : ""}`}>
    {t.text}{" "}
    {/* <span
      onClick={() => toggleReadMore(i)}
      className="text-blue-500 cursor-pointer"
    >
      {isOpen ? "Read Less" : "Read More"}
    </span> */}
  </p>


  <p className="text-xs text-gray-500 mt-2 font-medium">
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
              className="w-[90%] md:w-[40%] lg:w-[50%] p-[6px] bg-[#7aa33a] rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              
              <div className="w-full h-full rounded-xl overflow-hidden">
                <video
                  src={videos[active]}
                  autoPlay
                  controls
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}