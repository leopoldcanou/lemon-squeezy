"use client";
import { motion } from "motion/react"
interface SimpleTextProps {
  titleColor: string;
  title: string;
  text: string;
}

export default function SimpleText({
  titleColor,
  title,
  text,
}: SimpleTextProps) {
  return (
    <div className="px-8 py-12 lg:px-40 lg:py-40">
      <motion.h2
        style={{ color: titleColor }}
        className="font-inter text-sm font-medium uppercase tracking-[0.125rem]"
        initial={{ y: 70, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, damping: 10, duration: 1.0 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      <motion.h2
        className="pt-5 font-circular-pro-book text-[1.875rem] font-normal leading-10 tracking-[-0.03rem] text-black lg:text-[3.5rem] lg:leading-[1.14]"
        initial={{ y: 70, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, damping: 10, duration: 1.0, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {text}
      </motion.h2>
    </div>
  );
}
