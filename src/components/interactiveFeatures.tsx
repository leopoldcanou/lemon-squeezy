"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";

export interface Feature {
  id: string;
  title: string;
  description: string;
  imageSrc: StaticImageData;
}

interface InteractiveFeaturesProps {
  features: Feature[];
}

export default function InteractiveFeatures({
  features,
}: InteractiveFeaturesProps) {
  const [selectedFeature, setSelectedFeature] = useState<Feature>(features[0]);
  const [openFeatureId, setOpenFeatureId] = useState<string | null>(null);

  const handleFeatureClick = (feature: Feature) => {
    if (selectedFeature.id !== feature.id) {
      setSelectedFeature(feature);
      setOpenFeatureId(feature.id);
    }
  };

  return (
    <div className="mx-auto w-full">
      <div className="grid gap-12 md:grid-cols-2">
        <div className="pl-8 lg:pl-36">
          <div>
            {features.map((feature) => (
              <div
                key={feature.id}
                className="rounded-t-lg border-b-[1px] border-[#D1D1DB] hover:bg-[#F7F7F8]"
              >
                <button
                  onClick={() => handleFeatureClick(feature)}
                  className="group w-full rounded-lg px-4 py-8 text-left transition-colors"
                >
                  <div className="flex justify-between gap-4">
                    <div className="flex gap-4">
                      <span className="self-end font-inter text-sm text-[#7047EB]">
                        {feature.id}
                      </span>
                      <h3 className="self-end font-circular-pro-book text-[1.625rem]">
                        {feature.title}
                      </h3>
                    </div>
                    {openFeatureId === feature.id &&
                      selectedFeature.id === feature.id && (
                        <ArrowRight className="h-4 self-center text-[#7047EB]" />
                      )}
                  </div>
                </button>
                {openFeatureId === feature.id &&
                  selectedFeature.id === feature.id && (
                    <div className="text-muted-foreground animate-fadeIn mt-2 pb-4 pl-10 pr-4">
                      <p className="font-inter text-[1.125rem] text-[#6C6C89]">
                        {feature.description}
                      </p>
                    </div>
                  )}
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-[900px]">
          <div className="sticky top-6 h-full">
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src={selectedFeature.imageSrc}
                alt={selectedFeature.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-opacity duration-300 ease-in-out"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
