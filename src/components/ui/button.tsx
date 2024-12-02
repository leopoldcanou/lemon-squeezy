import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  primaryColor: string;
  secondaryColor: string;
}

export default function Button({
  children,
  primaryColor,
  secondaryColor,
}: ButtonProps) {
  return (
    <div className="group relative w-fit">
      {/* Faux bouton (ombre) qui reste en position */}
      <div
        className={`absolute inset-0 rounded-[2.5rem] bg-[${secondaryColor}]`}
      ></div>
      {/* Bouton principal qui se déplace */}
      <button
        className={`relative flex h-[3.75rem] w-auto flex-row items-center justify-start gap-3 rounded-[2.5rem] bg-white px-8 font-inter text-base font-medium tracking-[-0.01rem] text-primary-black transition group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:bg-[${primaryColor}] md:px-10`}
      >
        {children}
      </button>
    </div>
  );
}
