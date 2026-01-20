"use client";

import { motion } from "framer-motion";

interface ExperienceCardProps {
  role: string;
  company: string;
  duration: string;
  description: string;
}

export default function ExperienceCard({
  role,
  company,
  duration,
  description,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
      className="
        relative
        bg-black/70
        border border-red-500/30
        rounded-2xl
        p-6
        shadow-lg
        hover:shadow-red-500/20
        transition-all
      "
    >
      <h3 className="text-lg font-semibold text-white">{role}</h3>
      <p className="text-red-500 font-medium">{company} • {duration}</p>
      <p className="text-gray-400 mt-2 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
