import Image from "next/image";
import headerTablet from "../../public/header-tablet.jpg";
import academyLogo from "../../public/academy-logo.png";
import landifyLogo from "../../public/landify-logo.png";
import typeheistLogo from "../../public/typeheist-logo.png";
import Button from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function Header() {
  return (
    <header className="relative flex flex-col items-start justify-center gap-8 overflow-hidden bg-[#5423e7] pt-24 lg:px-24">
      <div className="relative flex w-full flex-col md:flex-row">
        <div className="relative z-10 flex flex-col items-start justify-center gap-8 px-8 md:w-1/2">
          <h1 className="w-80 font-circular-pro-book text-[2.75rem] font-light leading-none text-white md:w-[27.5rem] md:text-5xl lg:w-[35rem] lg:text-[5rem]">
            Payments, tax & subscriptions for software companies
          </h1>
          <p className="w-80 font-inter text-[#fff9] md:w-full">
            As your merchant of record, we handle the tax compliance burden so
            you can focus on more revenue and less headache.
          </p>
          <Button primaryColor="#ffc233" secondaryColor="#ffd266">
            Get started for free
            <ArrowRight
              className="transition-transform group-hover:translate-x-2"
              size={16}
            />
          </Button>
        </div>
        <div className="relative h-[300px] w-full md:h-auto md:w-full">
          <Image
            src={headerTablet}
            alt="header image"
            fill
            className="overflow-visible object-cover"
          />
        </div>
      </div>
      <div className="relative z-10 flex flex-col items-start justify-center gap-8 px-8 pb-16">
        <h2 className="font-inter uppercase tracking-[0.125rem] text-[#fff9]">
          trusted by thousands of companies globally
        </h2>
        <ul className="flex flex-row items-center justify-center gap-4">
          <li>
            <Image src={typeheistLogo} alt="typeheist logo" width={118} />
          </li>
          <li>
            <Image src={landifyLogo} alt="landify logo" width={118} />
          </li>
          <li>
            <Image src={academyLogo} alt="academy logo" width={118} />
          </li>
        </ul>
      </div>
    </header>
  );
}
