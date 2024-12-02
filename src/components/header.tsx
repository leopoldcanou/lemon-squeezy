import Image from "next/image";
import headerTablet from "../../public/header-tablet.jpg";
import Button from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function Header() {
  return (
    <header className="flex flex-col items-start justify-center gap-8 bg-[#5423e7] pt-24">
      <div className="flex flex-col items-start justify-center gap-8 px-8">
        <h1 className="w-80 font-circular-pro-book text-[2.75rem] font-light leading-none text-white">
          Payments, tax & subscriptions for software companies
        </h1>
        <p className="w-80 font-inter text-[#fff9]">
          As your merchant of record, we handle the tax compliance burden so you
          can focus on more revenue and less headache.
        </p>
        <Button primaryColor="#ffc233" secondaryColor="#ffd266">
          Get started for free
          <ArrowRight
            className="transition-transform group-hover:translate-x-2"
            size={16}
          />
        </Button>
      </div>
      <div className="relative w-full overflow-hidden">
        <Image
          className="relative -left-52 w-[175%] max-w-none"
          src={headerTablet}
          alt="header image"
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-8 px-8">
        <h2 className="font-inter uppercase tracking-[0.125rem]">
          trusted by thousands of companies globally
        </h2>
      </div>
    </header>
  );
}
