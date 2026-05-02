"use client";
import { usePathname } from "next/navigation";
import LeadForm from "./LeadForm";


export default function Hero() {
  const pathname = usePathname();

  const isTargetPage =
    pathname === "/home-interior-designers-in-chennai";
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
        <div className="px-8 md:px-32 w-full">
          <img
            src="https://assets.webdads2u.com/images/1777294926124-djfvkpfrfmvfizw7x6ox-1.png"
            alt="Arcmen Logo"
            className="w-[130px] h-21 md:w-22 object-cover"
          />

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 ">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-2.5 rounded-md mb-3 md:mb-6">
                <span className="text-xs md:text-sm text-white">
                  {isTargetPage
                    ? "⭐ Chennai's Best Home Interior Designers "
                    : "⭐ Chennai's Top Interior Designers"}
                </span>
              </div>
              <h1 className="text-2xl md:text-4xl font-semibold leading-tight mb-4 text-[#7ce04a]">
                {isTargetPage ? (

                  <>
                    Home Interior Designers in Chennai
                    <span className="md:hidden text-white"> -</span>
                    <span className="hidden text-white"> -</span>
                    <span className="text-white ps-2">
                      For  Modern, Beautiful & Affordable Home Interiors
                    </span>
                  </>
                ) : (
                  <>
                    Best Interior Designers in Chennai for Homes
                    <br />
                    <span className="text-white">
                      Apartments & Luxury Spaces
                    </span>
                  </>
                )}
              </h1>
              <div className="text-sm md:mb-6">
                <ul className="list-disc pl-4 space-y-2 marker:text-yellow-400">
                  <li>4.7/5 Rating</li>
                  <li>No Hidden Cost</li>
                  <li>35 Days Move-In Guarantee</li>
                  <li>15 Years Flat Warranty on All Interior Work</li>
                </ul>
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