"use client";

import LeadForm from "./LeadForm";

export default function Hero() {
  return (
    <section className="relative py-10 md:py-0 min-h-screen flex flex-col justify-center">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://assets.webdads2u.com/images/1777437914021-whatsapp-image-2026-04-29-at-10-06-07-am.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 flex-1 flex items-center">
        <div className="px-10 md:px-32 w-full">
          <img
            src="https://assets.webdads2u.com/images/1777294926124-djfvkpfrfmvfizw7x6ox-1.png"
            alt="Arcmen Logo"
            className="w-[130px] h-21 md:w-22 object-cover"
          />

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-2.5 rounded-md mb-6 mt-6">
                <span className="text-sm text-white">
                  ⭐ Rated 4.7/5 by 2500+ Happy Clients
                </span>
              </div>

              <h1 className="text-2xl md:text-4xl font-semibold leading-tight mb-4 text-[#7ce04a]">
                Home Interior Designers <br />
                in Chennai for{" "}
                <span className="text-white">
                  Modern & Beautiful Homes
                </span>
              </h1>

              <div className="flex flex-col gap-2 text-sm md:mb-6">
                <div>30+ Years Experience</div>
                <div>2000+ Projects Completed</div>
                <div>35 days On-Time Delivery</div>
                <div>15 Years  Warranty</div>
              </div>
            </div>

            <div className="flex justify-center md:justify-end w-full md:max-w-2xl">
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}