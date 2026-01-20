"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  github?: string;
  modalContent: React.ReactNode;
}

export default function ProjectCard({
  title,
  description,
  image,
  github,
  modalContent,
}: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Project Island */}
      <motion.div
        whileHover={{ y: -6 }}
        className="bg-zinc-900 border border-zinc-800 rounded-xl p-6
                   hover:border-red-500 transition cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <Image
          src={image}
          alt={title}
          width={800}
          height={400}
          className="rounded-lg mb-4 object-cover"
        />

        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>

        <div className="flex gap-3">
          <button
            onClick={() => setOpen(true)}
            className="px-4 py-2 bg-red-500 text-white rounded-lg
                       hover:bg-red-600 transition"
          >
            View Project
          </button>

          {github && (
            <a
              href={github}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              className="px-4 py-2 border border-zinc-600 rounded-lg
                         hover:border-red-500 hover:text-red-500 transition
                         flex items-center gap-2"
            >
              <Github size={16} />
              GitHub
            </a>
          )}
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm
                       flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="relative bg-zinc-950 border border-zinc-800
                         rounded-xl max-w-5xl w-full max-h-[90vh]
                         overflow-y-auto"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full
                           bg-zinc-800 hover:bg-red-500 transition"
              >
                <X size={18} />
              </button>

              {/* Modal Content */}
              <div className="p-8">{modalContent}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
