"use client";

import { motion } from "framer-motion";

interface TimelineExperienceCardProps {
  role: string;
  company: string;
  duration: string;
  description: string;
  logo?: string; // optional company logo
}

export default function TimelineExperienceCard({
  role,
  company,
  duration,
  description,
  logo,
}: TimelineExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative flex mb-10 last:mb-0"
    >
      {/* Timeline Dot */}
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 bg-red-500 rounded-full z-10"></div>
        <div className="w-1 bg-red-500 flex-1"></div>
      </div>

      {/* Card */}
      <div className="ml-6 bg-black/70 border border-red-500/30 rounded-2xl p-6 flex-1 shadow-lg hover:shadow-red-500/20 transition-all">
        <div className="flex items-center mb-2 space-x-3">
          {logo && (
            <img
              src={logo}
              alt={company}
              className="w-8 h-8 rounded-full object-cover"
            />
          )}
          <div>
            <h3 className="text-lg font-semibold text-white">{role}</h3>
            <p className="text-red-500 font-medium text-sm">
              {company} • {duration}
            </p>
          </div>
        </div>
        <ul className="list-disc list-inside text-gray-400 text-sm leading-relaxed">
          {description.split("\n").map((line, idx) => (
            <li key={idx}>{line}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
