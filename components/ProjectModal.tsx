"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  image: string;
  github?: string;
  content: React.ReactNode;
}

export default function ProjectModal({
  isOpen,
  onClose,
  title,
  image,
  github,
  content,
}: ProjectModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/70 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <div
              className="relative w-full max-w-5xl max-h-[90vh]
                         bg-[#0f0f0f] rounded-2xl border border-white/10
                         overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <h3 className="text-xl font-semibold">{title}</h3>

                <div className="flex gap-3">
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      className="px-4 py-2 rounded-md bg-white text-black
                                 hover:bg-gray-200 transition"
                    >
                      GitHub
                    </a>
                  )}

                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-white text-xl"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto max-h-[calc(90vh-64px)]">
                {/* Image */}
                <div className="relative w-full h-[400px]">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-contain bg-black"
                  />
                </div>

                {/* Text Content */}
                <div className="px-8 py-6 space-y-6 text-gray-300 leading-relaxed">
                  {content}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
