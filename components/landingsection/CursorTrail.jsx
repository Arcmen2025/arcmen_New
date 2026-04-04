"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const CursorTrail = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const spring = { damping: 25, stiffness: 300 };

  const x = useSpring(cursorX, spring);
  const y = useSpring(cursorY, spring);

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [cursorX, cursorY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">

      {/* Dot */}
      <motion.div
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        className="fixed w-3 h-3 bg-black rounded-full"
      />

      {/* Ring */}
      <motion.div
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        className="fixed w-8 h-8 border border-black rounded-full"
      />

    </div>
  );
};

export default CursorTrail;