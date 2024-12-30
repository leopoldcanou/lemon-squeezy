"use client";

interface simpleTextProps {
  titleColor: string;
  title: string;
  text: string;
}

export default function SimpleText({
  titleColor,
  title,
  text,
}: simpleTextProps) {
  return (
    <div className="px-8 py-12 lg:px-40 lg:py-40">
      <h2
        style={{ color: titleColor }}
        className="font-inter text-sm font-medium uppercase tracking-[0.125rem]"
      >
        {title}
      </h2>
      <h2 className="pt-5 font-circular-pro-book text-[1.875rem] font-normal leading-10 tracking-[-0.03rem] text-black lg:text-[3.5rem] lg:leading-[1.14]">
        {text}
      </h2>
    </div>
  );
}
