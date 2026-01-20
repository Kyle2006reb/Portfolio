"use client"

import { motion } from "framer-motion"

export const FadeUp = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode
  delay?: number
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.6,
      delay,
      ease: "easeOut",
    }}
  >
    {children}
  </motion.div>
)

export const HoverCard = ({
  children,
}: {
  children: React.ReactNode
}) => (
  <motion.div
    whileHover={{
      y: -6,
      scale: 1.02,
    }}
    transition={{
      type: "spring",
      stiffness: 300,
      damping: 20,
    }}
  >
    {children}
  </motion.div>
)
