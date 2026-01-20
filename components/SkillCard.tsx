import { motion } from "framer-motion";

interface SkillCardProps {
  name: string;
  icon: string;
}

export default function SkillCard({ name, icon }: SkillCardProps) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center bg-white border-2 border-gray-200 rounded-lg p-4 shadow-md"
      whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(126, 34, 206, 0.3)" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <img src={icon} alt={name} className="w-12 h-12 mb-2" />
      <p className="text-sm text-gray-900 font-medium">{name}</p>
    </motion.div>
  );
}