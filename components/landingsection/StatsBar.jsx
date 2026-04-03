"use client";

import { useEffect, useState } from "react";
import { STATS } from "@/app/utilits/constants";

export default function StatsBar() {
  const [counts, setCounts] = useState(STATS.map(() => 0));

  useEffect(() => {
    const duration = 1500;

    const timers = STATS.map((stat, i) => {
      if (stat.value === null) return null;

      let start = 0;
      const increment = stat.value / (duration / 16);

      return setInterval(() => {
        start += increment;

        setCounts((prev) => {
          const updated = [...prev];
          updated[i] =
            start >= stat.value ? stat.value : Math.floor(start);
          return updated;
        });

        if (start >= stat.value) clearInterval(timers[i]);
      }, 16);
    });

    return () => timers.forEach((t) => t && clearInterval(t));
  }, []);

  return (
    <div className="relative z-10 py-6 md:pt-6 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          
          {STATS.map((s, i) => (
            <div
              key={i}
              className="
                min-w-[140px] md:min-w-[160px]
                px-3 py-3
                rounded-xl
                bg-black
                backdrop-blur-md
                shadow-lg
                transition-all duration-300
                hover:bg-black hover:scale-105
              "
            >
              {/* Value */}
              <div className="text-white font-semibold text-lg md:text-[26px] 2xl:text-[36px] leading-tight">
                {s.value !== null ? (
                  <>
                    {s.prefix && s.prefix}
                    {counts[i]}
                    {s.suffix}
                  </>
                ) : (
                  s.suffix
                )}
              </div>

              {/* Label */}
              <div className="text-white md:text-[15px] text-xs mt-1">
                {s.label}
              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}