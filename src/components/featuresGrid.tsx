"use client";

import React from "react";
import { motion } from "motion/react"

export interface FeatureGridInterface {
  id: string;
  title: string;
  description: string;
}

interface FeaturesGridProps {
  idColor: string;
  backgroundColor: string;
  hoverColor: string;
  features: FeatureGridInterface[];
}

export default function FeatureGrid({
  idColor,
  backgroundColor,
  hoverColor,
  features,
}: FeaturesGridProps) {
  return (
    <motion.div
      className="flex justify-center px-8 py-24 lg:px-16 xl:px-24"
      style={{ backgroundColor }}
      initial={{ y: 70, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 50, damping: 10, duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex w-full flex-col rounded-lg p-12 transition-all md:w-[27rem]"
            style={{
              backgroundColor: backgroundColor,
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = hoverColor;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = backgroundColor;
            }}
          >
            <div className="mb-4">
              <div
                className="mb-2 text-sm font-medium uppercase"
                style={{ color: idColor }}
              >
                {feature.id}
              </div>
              <h2 className="mb-2 font-circular-pro-book text-[2.5rem] leading-[1.2] tracking-tight">
                {feature.title}
              </h2>
              <p className="font-inter text-[1.125rem] text-[#6C6C89]">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
