"use client";

import { useEffect, useState, memo, useRef } from "react";

function useInView(threshold = 0.3) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, [threshold]);

    return [ref, inView];
}

function useCountUp(end, duration = 1500, delay = 0, startTrigger = false) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!startTrigger) return;

        let startTimestamp;
        let animationFrame;

        const startAnimation = () => {
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;

                const progress = Math.min(
                    (timestamp - startTimestamp) / duration,
                    1
                );

                setCount(Math.floor(progress * end));

                if (progress < 1) {
                    animationFrame = requestAnimationFrame(step);
                }
            };

            animationFrame = requestAnimationFrame(step);
        };

        const timeout = setTimeout(startAnimation, delay);

        return () => {
            clearTimeout(timeout);
            cancelAnimationFrame(animationFrame);
        };
    }, [end, duration, delay, startTrigger]);

    return count;
}

const AnimatedNumber = memo(({ value, suffix, delay, start }) => {
    const count = useCountUp(value, 1500, delay, start);
    return (
        <span className="text-md sm:text-md md:text-xl lg:text-2xl font-bold text-[#4dbc15]">
            {count}
            {suffix}
        </span>
    );
});

export default function StatsSection() {
    const [ref, inView] = useInView(0.3);

    const statsData = [
        {
            value: 30,
            suffix: "+",
            label: "Years of Excellence",
            description: "Chennai's Trusted Interior Designers",
            icon: (
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#4dbc15]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
            )
        },
        {
            value: 2500,
            suffix: "+",
            label: "Projects Completed",
            description: "Happy Homes Across Chennai",
            icon: (
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#4dbc15]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
            )
        },
        {
            value: 35,
            suffix: " days",
            label: "Quick Delivery",
            description: "On-Time Project Completion",
            icon: (
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#4dbc15]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
            )
        },
        {
            value: 15,
            suffix: " years",
            label: "Warranty Coverage",
            description: "Quality Assurance Guaranteed",
            icon: (
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#4dbc15]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
            )
        }
    ];

    return (
        <section 
            ref={ref}
            className="py-6 sm:py-6 md:py-6 lg:py-10 bg-gradient-to-br from-gray-50 via-white to-gray-50"
        >
            <div className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
                {/* Header Section */}
                <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-10">
                    <h2 className="font-playfair !text-lg sm:!text-base md:!text-xl lg:!text-2xl font-extrabold text-[#1a1a1a] leading-tight">
                        Why Home Owners
                        <br />
                        <span className="text-[#4dbc15] relative inline-block">
                            Choose Arcmen
                            <svg className="absolute -bottom-3 left-0 w-full h-1.5 sm:h-2" viewBox="0 0 200 8" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 4 L200 4" strokeWidth="2" strokeDasharray="4 4" fill="none"/>
                            </svg>
                        </span>
                    </h2>
                </div>

                {/* Stats Grid - 2 columns on mobile, 2 on tablet, 4 on desktop */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                    {statsData.map((stat, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            {/* Decorative top border */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4dbc15] to-[#7ce04a] rounded-t-xl sm:rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                            
                            <div className="p-3 sm:p-4 md:p-5 lg:p-6 text-center">
                                {/* Icon */}
                                <div className="flex justify-center mb-2 sm:mb-3 md:mb-4">
                                    <div className="p-2 sm:p-3 bg-[#4dbc15]/10 rounded-full group-hover:bg-[#4dbc15]/20 transition-all duration-300">
                                        {stat.icon}
                                    </div>
                                </div>

                                {/* Number with Animation */}
                                <div className="mb-1 sm:mb-2">
                                    {typeof stat.value === "number" ? (
                                        <AnimatedNumber 
                                            value={stat.value} 
                                            suffix={stat.suffix} 
                                            delay={index * 200} 
                                            start={inView} 
                                        />
                                    ) : (
                                        <span className="text-md sm:text-md md:text-xl lg:text-2xl font-bold text-[#4dbc15]">
                                            {stat.value}
                                        </span>
                                    )}
                                </div>

                                {/* Label */}
                                <h3 className="text-sm sm:text-base md:text-md lg:text-md font-bold text-gray-800 mb-1">
                                    {stat.label}
                                </h3>

                                {/* Description - Hide on very small screens, show on tablet and up */}
                                <p className="hidden sm:block text-xs sm:text-sm text-gray-500 mt-1">
                                    {stat.description}
                                </p>
                            </div>

                            {/* Background pattern */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#4dbc15]/0 to-[#4dbc15]/0 group-hover:from-[#4dbc15]/5 group-hover:to-transparent rounded-xl sm:rounded-2xl transition-all duration-300 pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}