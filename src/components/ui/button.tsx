"use client";

import { ReactNode, useState } from "react";

interface ButtonProps {
  children: ReactNode;
  primaryColor: string;
  hoverColor: string;
  secondaryColor: string;
}

export default function Button({
  children,
  primaryColor,
  hoverColor,
  secondaryColor,
}: ButtonProps) {
  const [currentColor, setCurrentColor] = useState(primaryColor);

  return (
    <div 
      className="group relative w-fit"
      onMouseEnter={() => setCurrentColor(hoverColor)}
      onMouseLeave={() => setCurrentColor(primaryColor)}
    >
      {/* Faux bouton (ombre) */}
      <div
        style={{ backgroundColor: secondaryColor }}
        className="absolute inset-0 cursor-pointer rounded-[2.5rem]"
      ></div>
      {/* Bouton principal */}
      <button
        style={{
          backgroundColor: currentColor,
        }}
        className={`relative flex h-[3.75rem] w-auto flex-row items-center justify-start gap-3 rounded-[2.5rem] px-8 font-inter text-base font-medium tracking-[-0.01rem] text-primary-black transition group-hover:-translate-x-2 group-hover:-translate-y-2 md:px-10`}
      >
        {children}
      </button>
    </div>
  );
}
