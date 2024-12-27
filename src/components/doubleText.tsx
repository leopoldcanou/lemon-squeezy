interface doubleTextProps {
  titleColor: string;
  title: string;
  text: string;
}

export default function DoubleText({
  titleColor,
  title,
  text,
}: doubleTextProps) {
  return (
    <div className="px-8 py-12 lg:py-40">
      <h2
        style={{ color: titleColor }}
        className="pt-2 font-inter text-base font-medium uppercase tracking-[0.125rem]"
      >
        {title}
      </h2>
      <h2 className="pt-5 font-circular-pro-book text-[1.875rem] font-normal leading-10 tracking-[-0.03rem] text-black lg:text-[2.5rem] lg:leading-normal">
        {text}
      </h2>
    </div>
  );
}