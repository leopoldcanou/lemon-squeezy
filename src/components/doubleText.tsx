"use client";
import { motion } from "motion/react"

interface doubleTextProps {
  titleColor: string;
  title: string;
  text: string;
  secondaryText: string;
  backgroundColor: string;
  darkMode?: boolean;
}

export default function DoubleText({
  titleColor,
  title,
  text,
  secondaryText,
  backgroundColor,
  darkMode,
}: doubleTextProps) {
  return (
    <div className="px-8 py-12 lg:px-40 lg:py-40" style={{ backgroundColor }}>
      <motion.h2
        style={{ color: titleColor }}
        className="font-inter text-sm font-medium uppercase tracking-[0.125rem]"
        initial={{ y: 70, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, damping: 10, duration: 0.8 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8 lg:gap-48">
        <motion.h2
          className="pt-5 font-circular-pro-book text-[1.875rem] font-normal leading-10 tracking-[-0.03rem] md:w-[50%] lg:text-[3.5rem] lg:leading-[1.14]"
          style={{ color: darkMode ? "#FFFFFF" : "#000000" }}
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, damping: 10, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {text}
        </motion.h2>
        <motion.p
          className="font-inter text-[1.125rem] md:w-[50%]"
          style={{ color: darkMode ? "#FFFFFF99" : "#6C6C89" }}
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, damping: 10, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {secondaryText}
        </motion.p>
      </div>
    </div>
  );
}
