"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BottomCenterButton() {
    const [scrolled, setScrolled] = useState(false);
    const [bubbles, setBubbles] = useState([]);

    useEffect(() => {
        let lastState = false;

        const handleScroll = () => {
            const shouldShow = window.scrollY > 520;

            if (shouldShow !== lastState) {
                setScrolled(shouldShow);
                lastState = shouldShow;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            const id = Date.now();

            const newBubble = {
                id,
                left: Math.random() * 100,
                size: 6 + Math.random() * 8,
            };

            setBubbles((prev) => [...prev, newBubble]);

            setTimeout(() => {
                setBubbles((prev) => prev.filter((b) => b.id !== id));
            }, 2000);
        }, 300);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed bottom-10 left-0 w-full z-50 pointer-events-none">
            <div className="max-w-7xl mx-auto px-20 flex justify-center">

                <motion.div
                    initial={{ opacity: 0, y: 100, scale: 0.95 }}
                    animate={
                        scrolled
                            ? { opacity: 1, y: 0, scale: 1 }
                            : { opacity: 0, y: 100, scale: 0.95 }
                    }
                    transition={{
                        type: "spring",
                        stiffness: 120,
                        damping: 18,
                        mass: 0.6
                    }}
                    className="relative pointer-events-auto"
                >

                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        className="relative bg-[#4dbc15] hover:bg-[#3a9c10] text-white 
                       px-3 text-xs  md:text-sm md:px-6 py-3 rounded-full shadow-xl z-10  overflow-hidden"
                    >
                        Book Free Consultation
                    </motion.a>
                    {bubbles.map((b) => (
                        <motion.span
                            key={b.id}
                            initial={{ y: 0, opacity: 0.4, scale: 1 }}
                            animate={{ y: -60, opacity: 0, scale: 1.5 }}
                            transition={{ duration: 2, ease: "easeOut" }}
                            style={{
                                position: "absolute",
                                bottom: 0,
                                left: `${b.left}%`,
                                width: b.size,
                                height: b.size,
                                borderRadius: "50%",
                                background: "#4dbc15",
                                pointerEvents: "none",
                            }}
                        />
                    ))}

                </motion.div>
            </div>
        </div>
    );
}