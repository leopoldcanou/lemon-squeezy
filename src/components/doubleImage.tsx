"use client";
import { motion } from "motion/react"
import Image, { StaticImageData } from "next/image";

interface doubleImageProps {
  leftImage: StaticImageData;
  rightImage: StaticImageData;
}

export default function DoubleImage({
  leftImage,
  rightImage,
}: doubleImageProps) {
  return (
    <motion.div className="flex flex-row"
    initial={{ y: 70, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ type: "spring", stiffness: 50, damping: 10, duration: 0.8 }}
    viewport={{ once: true }}>
      <div className="w-1/2">
        <Image src={leftImage} alt="left image" />
      </div>
      <div className="w-1/2">
        <Image src={rightImage} alt="right image" />
      </div>
    </motion.div>
  );
}
