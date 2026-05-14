"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import LeadForm from "./LeadForm";

export default function Hero({isMobileFormOpen,setIsMobileFormOpen},) {
  const pathname = usePathname();

  const isTargetPage =
    pathname === "/home-interior-designers-in-chennai";
  useEffect(() => {
    if (isMobileFormOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileFormOpen]);

  return (
    <>
      {/* Desktop: Keep original full height */}
      <section className="hidden md:relative md:py-0 md:min-h-screen md:flex md:flex-col md:justify-center">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url('https://arcmen-uploads.s3.us-east-1.amazonaws.com/images/1778647969383-hero-banner--1.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 flex-1 flex items-center">
          <div className="px-8 md:px-32 w-full">
            <img
              src="https://assets.webdads2u.com/images/1777294926124-djfvkpfrfmvfizw7x6ox-1.png"
              alt="Arcmen Logo"
              className="w-[130px] h-21 md:w-22 object-cover"
            />

            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <div className="text-white">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-2.5 rounded-md mb-3 md:mb-6">
                  <span className="text-xs md:text-sm text-white">
                    {isTargetPage
                      ? "⭐ Chennai's Best Home Interior Designers Company"
                      : "⭐ Chennai's Top Interior Designers Company"}
                  </span>
                </div>
                <h1 className="text-2xl md:text-4xl font-semibold leading-tight mb-4 text-[#7ce04a]">
                  {isTargetPage ? (
                    <>
                      Home Interior Designers in Chennai
                      <span className="md:hidden text-white"> -</span>
                      <span className="hidden text-white"> -</span>
                      <span className="text-white ps-2">
                        For Modern, Beautiful & Affordable Home Interiors
                      </span>
                    </>
                  ) : (
                    <>
                      Best Interior Designers in Chennai <span className="text-white">for Homes</span>
                      <br />
                      <span className="text-white">
                        Apartments & Luxury Spaces
                      </span>
                    </>
                  )}
                </h1>
                
                <div className="hidden md:block text-sm md:mb-6">
                  <ul className="list-disc pl-4 space-y-2 marker:text-yellow-400">
                    <li>4.7/5 Rating</li>
                    <li>No Hidden Cost</li>
                    <li>35 Days Move-In Guarantee</li>
                    <li>15 Years Flat Warranty on All Interior Work</li>
                  </ul>
                </div>
              </div>

              <div className="hidden md:flex justify-center md:justify-end w-full md:max-w-2xl">
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile: 70vh height section */}
      <section className="md:hidden relative py-0 min-h-[55vh] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url('https://arcmen-uploads.s3.us-east-1.amazonaws.com/images/1778648329631-hero-banner.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 flex-1 flex items-center mt-10">
          <div className="px-6 w-full relative">
            <img
              src="https://assets.webdads2u.com/images/1777294926124-djfvkpfrfmvfizw7x6ox-1.png"
              alt="Arcmen Logo"
              className="w-20 object-cover mb-2"
            />

            <div className="flex flex-col items-center">
              <div className="text-white w-full mb-0">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-2.5 py-1.5 rounded-md mb-2">
                  <span className="text-[10px] text-white whitespace-nowrap">
                    {isTargetPage
                      ? "⭐ Chennai's Best Home Interior Designers Company"
                      : "⭐ Chennai's Top Interior Designers Company"}
                  </span>
                </div>
                <h1 className="text-2xl font-semibold leading-tight text-[#7ce04a] mb-6">
                  {isTargetPage ? (
                    <>
                      Home Interior Designers in Chennai
                      <span className="text-white"> For Modern, </span>
                      <span className="text-white block">
                        Beautiful & Affordable Home Interiors
                      </span>
                    </>
                  ) : (
                    <>
                      Best Interior Designers in Chennai <span className="text-white">for Homes </span>
                      <span className="text-white">
                        Apartments & Luxury Spaces
                      </span>
                    </>
                  )}
                </h1>
              </div>

              <div className="w-full flex justify-start mb-20">
                <button
                  onClick={() => setIsMobileFormOpen(true)}
                  className="w-[250px] bg-[#4dbc15] hover:bg-[#41a211] text-white font-semibold text-xs py-2.5 px-4 rounded-xl flex items-center justify-start gap-2 border border-black/30 shadow-[0_8px_20px_rgba(0,0,0,0.4)] transition-all active:scale-[0.98]"
                >
                  Get a Free Interior quote
                  <span className="text-xl font-light leading-none pb-0.5">
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <button
        onClick={() => setIsMobileFormOpen(true)}
        className="md:hidden fixed right-0 top-[50%] -translate-y-1/2 bg-white pl-2.5 pr-1 py-2 rounded-l-full shadow-[0_4px_15px_rgba(0,0,0,0.3)] flex items-center justify-center z-[90] active:scale-95 transition-transform border border-r-0 border-gray-100"
        aria-label="Open Lead Form"
      >
        {/* Inner Green Circle (Stays still) */}
        <div className="bg-[#4dbc15] w-[40px] h-[40px] rounded-full flex items-center justify-center shadow-inner relative overflow-hidden">
          
          <motion.div 
            animate={{ x: [0, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 flex items-center justify-center"
          >
            <svg 
              className="w-6 h-6 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2.5" 
                d="M15 19l-7-7 7-7" 
              />
            </svg>
          </motion.div>
          
          {/* Soft inner ping/pulse effect */}
          <span className="absolute inset-0 rounded-full border-[1.5px] border-white/40 animate-ping"></span>
        </div>
      </button>

      {/* MOBILE FORM MODAL */}
      <AnimatePresence>
        {isMobileFormOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "tween",
              duration: 0.4,
              ease: "easeInOut",
            }}
            className="fixed inset-0 z-[100] bg-black/100 backdrop-blur-2xl flex flex-col justify-center p-6"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsMobileFormOpen(false)}
              className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors z-[110]"
            >
              <svg
                className="w-6 h-6"
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

            {/* Mobile Form */}
            <div className="w-full relative z-10 flex justify-center">
              <LeadForm isMobile={true} id="form"/>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}