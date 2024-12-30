import Image, { StaticImageData } from "next/image";

interface TestimonialCardProps {
  quote: string;
  author: {
    name: string;
    handle: string;
    image: string | StaticImageData;
  };
  isGrey?: boolean;
}

export function TestimonialCard({
  quote,
  author,
  isGrey = false,
}: TestimonialCardProps) {
  return (
    <div
      className={`flex flex-col justify-between p-8 md:p-12 ${isGrey ? "bg-[#F7F7F8]" : "bg-white"}`}
    >
      <blockquote className="mb-8 font-inter text-lg text-[#121217]">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3">
        <Image
          src={author.image}
          alt={author.name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <div className="font-inter text-base font-medium text-[#121217]">
            {author.name}
          </div>
          <div className="font-inter text-sm text-[#6C6C89]">
            {author.handle}
          </div>
        </div>
      </div>
    </div>
  );
}
