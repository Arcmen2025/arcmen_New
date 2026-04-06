"use client";
import { motion, useAnimation } from "framer-motion";
import LeadForm from "./LeadForm";
import StatsBar from "./StatsBar";
import { useEffect, useState } from "react";

// import image1 from "../../assets/arcmenlogo.svg";
// import banner from "../../assets/arcmenherobanner.svg";

export default function Hero() {

  const [bubbles, setBubbles] = useState([]);

   useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();

      const newBubble = {
        id,
        left: Math.random() * 100,
        size: 6 + Math.random() * 8,
      };

      setBubbles((prev) => [...prev, newBubble]);

      setTimeout(() => {
        setBubbles((prev) => prev.filter((b) => b.id !== id));
      }, 2000);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative md:pt-[50px] min-h-screen flex flex-col">

      {/* Navbar */}
      {/* <Navbar /> */}

      {/* BG */}
      {/* <div className="absolute inset-0">
        <div
          className="absolute inset-0 "
          style={{
            backgroundImage: "url('https://res.cloudinary.com/da9s9vymf/image/upload/v1775207575/arcmenherobanner_emcfwj.svg')"
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 " />
      </div> */}
      <div className="absolute inset-0">
  <div
    className="absolute inset-0"
    style={{
      backgroundImage:
        "url('https://res.cloudinary.com/da9s9vymf/image/upload/v1775464728/arcmencombanner_hmyz4l.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  />
  <div className="absolute inset-0 bg-black/40" />
</div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-start">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pb-8">

          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Left */}
            <div>

              <motion.img
            src="https://res.cloudinary.com/da9s9vymf/image/upload/v1775207563/whitelogo_ogcb0n.svg"
            alt="Arcmen Logo"
            className="w-30 h-30 md:w-[140px] md:h-[100px] md:mb-4 mt-10 md:mt-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true}}
          />

              <motion.p
                className="text-white  font-semibold"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
               <span className="text-[#4dbc15]">சென்னையின்</span> Best Bespoke Interior Designer
              </motion.p>

              <motion.h1
                className="text-white text-3xl md:mt-6 mt-4  md:text-2xl lg:text-3xl leading-tight  font-normal"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Looking Premium Interior Designer? 
              </motion.h1>

               <motion.h1
                className="text-white text-3xl  md:text-2xl lg:text-3xl leading-tight mb-6 font-normal"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true}}
              >
                For Your <span className="text-[#4dbc15]">Premium Villas & Apartments</span>  
              </motion.h1>

              <motion.p
                className="text-white text-sm md:text-[16px] leading-relaxed mb-8 max-w-md"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Award Winning Firm Of Trusted Interior Brand in Chennai.
              </motion.p>

              {/* <motion.a
                href="#contact"
                className="bg-white px-6 py-[12px] rounded-[8px] inline-flex items-center gap-2 text-sm md:text-[20px] font-semibold text-black hover:bg-[#e0e0e0] transition-colors"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: false }}
              >
                Get My Home 3D Design
              </motion.a> */}
              <div className="flex  md:mb-10">
  <div className="relative inline-block">

    <motion.a
  href="#contact"
  initial={{ scale: 1 }}
  animate={{ scale: [1, 1.06, 1] }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  whileTap={{ scale: 0.95 }}
  className="
    inline-block  
    transform-gpu 
    relative z-10 
    border border-black 
    bg-[#7c381a] text-white 
    px-10 py-2 rounded-[8px] 
    font-medium text-sm md:text-base 
     hover:text-white transition
  "
>
  Get My Home 3D Design
</motion.a>

    {bubbles.map((b) => (
      <motion.span
        key={b.id}
        initial={{ y: 0, opacity: 0.4 }}
        animate={{ y: -60, opacity: 0.4 }}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{
          position: "absolute",
          bottom: 0,
          left: `${b.left}%`,
          width: b.size,
          height: b.size,
          borderRadius: "50%",
          background: "#7c381a",
          pointerEvents: "none",
        }}
      />
    ))}

  </div>
</div>

            </div>

            {/* Right */}
            <div className="flex justify-center md:justify-end">
              <LeadForm />
            </div>

          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="relative z-10">
        <StatsBar />
      </div>
    </section>
  );
}