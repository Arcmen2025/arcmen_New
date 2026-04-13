"use client";
import { PROCESS_STEPS } from "@/app/utilits/constants";
import { motion } from "framer-motion";

export default function ProcessSection() {
  return (
    <section className="bg-white py-10">
      <div className=" px-6 md:px-20">
        <div className="bg-[#669c4a] rounded-[30px] p-8 md:p-14">
          <div className="grid md:grid-cols-2 gap-0 items-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <h2 className="text-white hidden md:block !text-[20px] md:text-[34px] 2xl:text-[60px] font-extrabold leading-tight mb-6">
                Our Step-by-Step Payment
                <span className="md:block"> and Work Process</span>
              </h2>
              <h2 className="text-white !text-[24px] md:hidden font-extrabold leading-tight mb-6">
                Our Step-by-Step Payment
                <span className="md:block"> and Work Process</span>
              </h2>
              <p className="text-[#ffffff] font-normal md:text-lg text-sm leading-relaxed max-w-md">
                Many interior companies collect around 100% of the total cost even before delivering material. but
                We take a different route. Our payments are tied to actual work progress, so you pay as your project
                moves forward, with clear stages and complete transparency.
              </p>
            </motion.div>
            <motion.div className="flex mt-10 md:mt-0 flex-col gap-3"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >

              {PROCESS_STEPS.map((s, i) => (
                <div key={i} className="md:flex gap-6 items-start">
                  {/* Step Badge */}
                  <span className="bg-[#7a3b1d] text-white text-xs font-semibold px-3 py-1 rounded-full w-[90px] text-center flex-shrink-0">
                    {s.step}
                  </span>
                  <div>
                    <h4 className="text-white font-extrabold md:text-[16px] text-sm mb-1">
                      {s.title}
                    </h4>

                    <p className="text-white md:text-[14px] text-xs leading-[16px] max-w-lg">
                      {s.desc}
                    </p>
                  </div>

                </div>
              ))}

            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}