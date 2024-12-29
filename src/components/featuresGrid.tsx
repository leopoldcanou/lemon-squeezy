import React from "react";

export interface FeatureGridInterface {
  id: string;
  title: string;
  description: string;
}

interface FeaturesGridProps {
  idColor: string;
  features: FeatureGridInterface[];
}

export default function FeatureGrid({ idColor, features }: FeaturesGridProps) {
  return (
    <div className="flex justify-center bg-[#F7F7F8] px-8 py-24 lg:px-16 xl:px-24">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="transition-all flex w-full flex-col rounded-lg p-12 hover:bg-white md:w-[27rem]"
          >
            <div className="mb-4">
              <div
                className="mb-2 text-sm font-medium uppercase"
                style={{ color: idColor }}
              >
                {feature.id}
              </div>
              <h2 className="mb-2 font-circular-pro-book text-[2.5rem] tracking-tight">
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
