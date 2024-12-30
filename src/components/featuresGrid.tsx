"use client";

import React from "react";

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
    <div
      className="flex justify-center px-8 py-24 lg:px-16 xl:px-24"
      style={{ backgroundColor }}
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
    </div>
  );
}
