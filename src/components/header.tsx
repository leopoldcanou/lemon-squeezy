import Image from "next/image";
import headerTablet from "../../public/header-tablet.jpg";
import Button from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center bg-[#5423e7] pt-24">
      <h1 className="font-circular-pro-book w-80 text-[2.75rem] font-light leading-none text-white">
        Payments, tax & subscriptions for software companies
      </h1>
      <p className="w-80 text-center text-white">
        As your merchant of record, we handle the tax compliance burden so you
        can focus on more revenue and less headache.
      </p>
      <Image src={headerTablet} alt="logo" />
      <Button primaryColor="#ffc233" secondaryColor="#ffd266">
        Get started for free
        <ArrowRight
          className="transition-transform group-hover:translate-x-2"
          size={16}
        />
      </Button>
    </header>
  );
}
