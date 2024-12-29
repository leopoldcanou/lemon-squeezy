"use client";

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
    <div className="flex flex-row">
      <div className="w-1/2">
        <Image src={leftImage} alt="left image" />
      </div>
      <div className="w-1/2">
        <Image src={rightImage} alt="right image" />
      </div>
    </div>
  );
}
