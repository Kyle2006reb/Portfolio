"use client";

import { motion } from "framer-motion";

export default function BackgroundParticles() {
  const particles = Array.from({ length: 50 }); // 50 particles

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-red-800 rounded-full opacity-30"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: 30 + Math.random() * 30, // slow random movement
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      ))}
    </div>
  );
}
