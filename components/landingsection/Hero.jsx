"use client";
import LeadForm from "./LeadForm";
import { motion } from "framer-motion";
import { FaStar, FaClock } from "react-icons/fa";
import { MdWork, MdAccessTime } from "react-icons/md";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Hero() {
  return (
    <section className="relative  pt-10 md:pt-0 min-h-screen flex flex-col justify-center">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/da9s9vymf/image/upload/v1775912901/Luxurious_modern_living_room_design_1_jcgrnq.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="absolute inset-0 bg-black/65"></div>
      </div>

      <div className="relative z-10 flex-1 flex items-center">
        <div className="px-6 md:px-32 w-full pb-8">

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white ">
              <motion.img
                src="https://res.cloudinary.com/da9s9vymf/image/upload/v1775207563/whitelogo_ogcb0n.svg"
                alt="Arcmen Logo"
                className="w-13 md:w-20 object-contain md:hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                custom={1}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-2.5 rounded-md mb-6"
              >
                <FaStar className="text-yellow-400 text-base" />
                <span className="text-sm text-white">
                  Rated 4.7/5 by 2500+ Happy Clients
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                custom={2}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-semibold leading-tight mb-4"
              >
                Interior Designers <br />
                in Chennai for{" "}
                <span className="text-[#4dbc15]">
                  Modern & Beautiful Homes
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                custom={3}
                viewport={{ once: true }}
                className="text-gray-200 text-sm md:text-base mb-6"
              >
                Smart planning, premium designs, <br />
                and complete execution from design to delivery.
              </motion.p>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                custom={4}
                viewport={{ once: true }}
                className="flex flex-col gap-2 text-sm mb-8"
              >
                <div className="flex items-center gap-2">
                  <FaClock size={20} className="text-[#4dbc15]" />
                  30+ Years Experience
                </div>

                <div className="flex items-center gap-2">
                  <MdWork size={20} className="text-[#4dbc15]" />
                  2000+ Projects Completed
                </div>

                <div className="flex items-center gap-2">
                  <MdAccessTime size={20} className="text-[#4dbc15]" />
                  On-Time Delivery
                </div>
              </motion.div>
              <motion.a
                href="#contact"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                custom={5}
                viewport={{ once: true }}
                className="relative inline-flex items-center gap-2 
             bg-[#4dbc15]/10 
             text-[#4dbc15] font-medium text-sm 
             px-4 py-2 rounded-full 
             backdrop-blur-md overflow-hidden"
              >
                <span className="absolute inset-0 rounded-full border border-[#4dbc15]/40"></span>
                <span className="absolute inset-0 rounded-full overflow-hidden">
                  <span className="absolute -left-1/2 top-0 h-full w-1/2 
                     bg-gradient-to-r from-transparent via-[#4dbc15]/40 to-transparent 
                     animate-[shine_2s_linear_infinite]" />
                </span>
                <span className="relative z-10 text-md flex items-center gap-2">
                  <motion.span
                  className="text-lg"
                    animate={{ rotate: [0, 15, -10, 0], y: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.2 }}
                  >
                    🎉
                  </motion.span>
                  Get 20% Off on Interiors
                </span>
              </motion.a>
            </div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={2}
              viewport={{ once: true }}
              className="flex justify-center md:justify-end"
            >
              <LeadForm />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}