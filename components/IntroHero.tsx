"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export default function IntroHero() {
  const ref = useRef<HTMLDivElement>(null);
  const [typedText, setTypedText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = ["Computer Engineering @ McMaster University.", "Seeking Summer 2026 Internships."];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Subtle parallax for background image
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Typing and untyping effect
  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && typedText === currentPhrase) {
      // Pause at end of phrase before deleting
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && typedText === "") {
      // Move to next phrase and start typing
      setIsDeleting(false);
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    } else {
      // Type or delete one character
      const typingSpeed = isDeleting ? 50 : 100;
      timeout = setTimeout(() => {
        setTypedText((prev) => {
          if (isDeleting) {
            return prev.slice(0, -1);
          } else {
            return currentPhrase.slice(0, prev.length + 1);
          }
        });
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentPhraseIndex, phrases]);

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* BACKGROUND IMAGE */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0"
      >
        <Image
          src="/hero/sunset.png"
          alt="Sunset mountains"
          fill
          priority
          unoptimized
          className="object-cover"
        />
      </motion.div>

      {/* DARK OVERLAY FOR TEXT READABILITY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* HERO TEXT */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 flex h-full items-center justify-center px-6 text-center"
      >
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-2"
          >
            Kyle Rebello
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-2xl md:text-4xl font-semibold text-purple-950 mb-6 min-h-[3rem]"
          >
            {typedText}
            <span className="animate-pulse">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-gray-300 text-lg"
          >
            
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}