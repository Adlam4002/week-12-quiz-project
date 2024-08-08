"use client";
import React from "react";
import { motion } from "framer-motion";

export const AuroraHero = ({ children }) => {
  return (
    <motion.section
      animate={{
        backgroundImage: [
          "radial-gradient(90% 90% at 30% 0%, #1BFFFF 20%,  #2E3192)", 
          "radial-gradient(90% 90% at 70% 0%, #1BFFFF 50%,  #2E3192)",
        ],
      }}
      transition={{
        duration: 20,
        ease: "backInOut",
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="relative grid content-between overflow-hidden bg-gray-950 min-h-screen"
    >
      {children}
    </motion.section>
  );
};
