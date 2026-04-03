"use client";
import { useState } from "react";
import { FAQS } from "@/app/utilits/constants";

function Item({ faq, open, onToggle }) {
  return (
    <div className="border-0 border-t border-gray-300 first:border-t-0">
      <button
        onClick={onToggle}
        className="w-full flex items-start border-0 border-b bg-[transparent] border-gray-300 gap-4 py-4 text-left"
      >

        <span className="mt-1 w-5 h-5 flex items-center justify-center border border-black rounded-sm flex-shrink-0">
          <svg
            className={`w-3 h-3 transition-transform duration-300 ${
              open ? "text-black" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeWidth={2} d="M12 5v14M5 12h14" />
          </svg>
        </span>

        {/* Question */}
        <span className="text-[#000000] md:text-[18px] 2xl:text-[24px] text-sm font-medium leading-relaxed">
          {faq.q}
        </span>
      </button>

      {/* Answer */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 opacity-100 pb-14 pl-9" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-[#707070] md:text-[16px] 2xl:text-[16px] text-sm leading-relaxed">
          {faq.a}
        </p>
      </div>
    </div>
  );
}

export default function FAQAccordion() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-16 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          <div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              Have questions?<br />Find answers.
            </h2>

            <p className="text-gray-500 md:text-[20px] text-sm leading-relaxed">
              Got more questions? Reach out to our <span className="md:block"> team at{" "}
                <a
                  href="mailto:production@arcmen.com"
                  className="text-blue-600 underline"
                >
                  production@arcmen.com
                </a>
              </span>
            </p>
          </div>

          <div className="flex flex-col">
            {FAQS.map((faq, i) => (
              <Item
                key={i}
                faq={faq}
                open={openIdx === i}
                onToggle={() =>
                  setOpenIdx(openIdx === i ? null : i)
                }
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}