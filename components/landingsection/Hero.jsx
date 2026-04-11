"use client";
import LeadForm from "./LeadForm";
import { motion } from "framer-motion";
import { FaStar, FaFileAlt, FaClock } from "react-icons/fa";
import { MdWork, MdAccessTime } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

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
    <section className="relative md:pt-[40px] min-h-screen flex flex-col justify-center">
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
          <motion.img
            src="https://res.cloudinary.com/da9s9vymf/image/upload/v1775207563/whitelogo_ogcb0n.svg"
            alt="Arcmen Logo"
            className="w-30 h-30 md:w-[140px] md:h-[100px]  mt-10 md:mt-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white mt-10 md:mt-0">
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
                className="text-gray-300 text-sm md:text-base mb-6"
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
                className="flex flex-wrap gap-4 text-sm mb-8"
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
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                custom={5}
                viewport={{ once: true }}
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#4dbc15] hover:bg-[#3a9c10] text-white font-semibold px-10 py-2.5 rounded-lg transition mb-3"
              >
                Get  Up to  20% on Interiors
              </motion.a>




              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                custom={8}
                viewport={{ once: true }}
                className="flex items-center text-sm border-t border-white/20 px-12"
              >
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-1 "
                >
                  <IoCall className="text-yellow-600 text-2xl" />
                  <div className="flex flex-col leading-tight">
                    <span className="text-yellow-600 font-bold text-lg">
                      +91 98765 43210
                    </span>
                  </div>
                </a>
              </motion.div>
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