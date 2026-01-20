"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Portfolio Website",
    slug: "portfolio-website",
    image: "/projects/portfolio.png",
    githubLink: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Drone Detection System",
    slug: "drone-detection",
    image: "/projects/drone.png",
    githubLink: "https://github.com/yourusername/drone-detection",
  },
  {
    title: "AI Chatbot",
    slug: "ai-chatbot",
    image: "/projects/chatbot.png",
    githubLink: "https://github.com/yourusername/ai-chatbot",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-center">Projects</h1>

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </motion.div>
    </main>
  );
}
