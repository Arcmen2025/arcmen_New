"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";

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
        <div className="fixed bottom-6 left-0 w-full z-50 pointer-events-none">
            <div className="max-w-7xl mx-auto px-4 md:px-20 flex justify-center">

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
                    <a href="#contact" className="text-md md:text-md font-medium whitespace-nowrap text-white  bg-[#4dbc15] rounded-full py-3 px-3 hidden md:block">
                        Book Free Consultation
                    </a>
                    <div className="md:hidden relative rounded-full p-[2px]
  bg-[linear-gradient(270deg,#4dbc15,#00c6ff,#4dbc15)]
  ">
                        <div className="bg-white border border-gray-700
    py-3 px-2 rounded-full shadow-xl flex items-center gap-2 overflow-hidden">

                            <a
                                href="#contact"
                                className="text-md font-medium whitespace-nowrap text-white  bg-[#4dbc15] rounded-full  py-2 px-3"
                            >
                                Book Free Consultation
                            </a>
                            <a
                                href="tel:+919962998008"
                                className="flex items-center text-white bg-black rounded-full p-2"
                            >
                                <IoMdCall size={25} />
                            </a>
                            <a
                                href="https://wa.me/9962998008"
                                target="_blank"
                                className="flex items-center bg-green-600 p-2 rounded-full text-white"
                            >
                                <FaWhatsapp size={25} />
                            </a>
                        </div>
                    </div>
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