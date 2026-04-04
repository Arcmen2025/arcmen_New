"use client";
import { motion } from "framer-motion";
import LeadForm from "./LeadForm";
import StatsBar from "./StatsBar";

// import image1 from "../../assets/arcmenlogo.svg";
// import banner from "../../assets/arcmenherobanner.svg";

export default function Hero() {
  return (
    <section className="relative md:pt-[70px] min-h-screen flex flex-col">

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
        "url('https://res.cloudinary.com/da9s9vymf/image/upload/v1775207575/arcmenherobanner_emcfwj.svg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  />
  <div className="absolute inset-0 bg-black/40" />
</div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-start">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-16 pb-8">

          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Left */}
            <div>

              <motion.img
                src="https://res.cloudinary.com/da9s9vymf/image/upload/v1775207563/whitelogo_ogcb0n.svg"
                alt="Arcmen Logo"
                className="w-16 h-16 md:w-20 md:h-20 mb-4"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
              />

              <motion.p
                className="text-white  font-semibold"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: false }}
              >
                Best interior designer company in chennai
              </motion.p>

              <motion.h1
                className="text-white text-4xl mt-6 md:text-5xl lg:text-6xl leading-tight mb-6 font-normal"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: false }}
              >
                Inspired Interiors for the Way you Live
              </motion.h1>

              <motion.p
                className="text-white text-sm md:text-[16px] leading-relaxed mb-8 max-w-md"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: false }}
              >
                Experience Arcmen Interiors — where luxury feels like living.
              </motion.p>

              <motion.a
                href="#contact"
                className="bg-white px-6 py-[12px] rounded-[8px] inline-flex items-center gap-2 text-sm md:text-[20px] font-semibold text-black hover:bg-[#e0e0e0] transition-colors"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: false }}
              >
                Get My Home 3D Design
              </motion.a>

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