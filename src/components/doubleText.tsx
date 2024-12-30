"use client";

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
      <h2
        style={{ color: titleColor }}
        className="font-inter text-sm font-medium uppercase tracking-[0.125rem]"
      >
        {title}
      </h2>
      <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8 lg:gap-48">
        <h2
          className="pt-5 font-circular-pro-book text-[1.875rem] font-normal leading-10 tracking-[-0.03rem] md:w-[50%] lg:text-[3.5rem] lg:leading-[1.14]"
          style={{ color: darkMode ? "#FFFFFF" : "#000000" }}
        >
          {text}
        </h2>
        <p
          className="font-inter text-[1.125rem] md:w-[50%]"
          style={{ color: darkMode ? "#FFFFFF99" : "#6C6C89" }}
        >
          {secondaryText}
        </p>
      </div>
    </div>
  );
}
