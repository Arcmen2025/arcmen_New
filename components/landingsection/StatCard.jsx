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

        const timeout = setTimeout(() => {
            let start = 0;
            const stepTime = 16;
            const totalSteps = duration / stepTime;
            const increment = end / totalSteps;

            const counter = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(counter);
                } else {
                    setCount(Math.floor(start));
                }
            }, stepTime);

            return () => clearInterval(counter);
        }, delay);

        return () => clearTimeout(timeout);
    }, [end, duration, delay, startTrigger]);

    return count;
}

const AnimatedNumber = memo(({ value, suffix, delay, start }) => {
    const count = useCountUp(value, 1500, delay, start);
    return (
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1a1a1a]">
            {count}
            {suffix}
        </h2>
    );
});

function TimelineItem({ value, label, suffix = "", delay, start }) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (!start) return;

        const t = setTimeout(() => setShow(true), delay);
        return () => clearTimeout(t);
    }, [delay, start]);

    return (
        <div className="flex flex-col items-center text-center relative">
            <div
                className={`w-4 h-4 rounded-full mb-4 z-10 transition-all duration-500 ${show ? "bg-[#4dbc15] scale-100" : "bg-gray-300 scale-75"
                    }`}
            ></div>

            {typeof value === "number" ? (
                <AnimatedNumber value={value} suffix={suffix} delay={delay} start={start} />
            ) : (
                <h2 className="text-2xl md:text-3xl font-semibold text-[#1a1a1a]">
                    {value}
                </h2>
            )}
            <p className="text-gray-600 text-sm mt-1">{label}</p>
        </div>
    );
}

export default function StatsSection() {
    const [ref, inView] = useInView();
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!inView) return;

        let start = 0;
        const total = 100;
        const duration = 2500;
        const step = total / (duration / 16);

        const timer = setInterval(() => {
            start += step;
            if (start >= total) {
                setProgress(100);
                clearInterval(timer);
            } else {
                setProgress(start);
            }
        }, 16);

        return () => clearInterval(timer);
    }, [inView]);

    return (
        <section
            ref={ref}
            className="mb-3 md:py-16 px-6 md:px-12 bg-gradient-to-br "
        >
            <div className="max-w-6xl mx-auto text-center mb-5 md:mb-12">
                <p className="font-semibold text-2xl md:text-3xl leading-tight  mb-2">
                    Why Clients Choose Us
                </p>
            </div>
            <div className="relative max-w-6xl mx-auto">
                <div className="hidden md:block absolute top-2 left-0 w-full h-[2px] bg-[#4dbc15]"></div>
                <div
                    className="hidden md:block absolute top-2 left-0 h-[2px] bg-[#4dbc15] transition-all"
                    style={{ width: `${progress}%` }}
                ></div>
                <div className="grid grid-cols-2 md:grid-cols-4  md:gap-10 relative">
                    <TimelineItem value={2500} label="Happy Clients" suffix="+" delay={0} start={inView} />
                    <TimelineItem value={35} label="On-Time Delivery" suffix=" days" delay={500} start={inView} />
                    <TimelineItem value={15} label="Years  Warranty" delay={1000} start={inView} />
                    <TimelineItem value={"No"} label="Hidden Cost" suffix="" delay={1500} start={inView} />
                </div>
            </div>
        </section>
    );
}