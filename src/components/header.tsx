"use client";

import Image from "next/image";
import headerTablet from "../../public/header-tablet.jpg";
import academyLogo from "../../public/academy-logo.png";
import landifyLogo from "../../public/landify-logo.png";
import typeheistLogo from "../../public/typeheist-logo.png";
import Button from "./ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react"

export default function Header() {
  return (
       <header className="relative flex flex-col items-start justify-center gap-8 overflow-hidden bg-[#5423e7] pt-24 lg:px-24">
      <div className="relative flex w-full flex-col md:flex-row">
        <div className="relative z-10 flex flex-col items-start justify-center gap-8 px-8 md:w-1/2">
          <motion.h1
            className="w-80 font-circular-pro-book text-[2.75rem] font-light leading-none text-white md:w-[27.5rem] md:text-5xl lg:w-[35rem] lg:text-[5rem]"
            initial={{ y: 70, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, damping: 10, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Payments, tax & subscriptions for software companies
          </motion.h1>
          <motion.p
            className="w-80 font-inter text-[#fff9] md:w-full"
            initial={{ y: 70, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, damping: 10, duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            As your merchant of record, we handle the tax compliance burden so
            you can focus on more revenue and less headache.
          </motion.p>
          <motion.div
            initial={{ y: 70, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50, damping: 10, duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button
              primaryColor="#FFFFFF"
              hoverColor="#FFC233"
              secondaryColor="#FFD266"
            >
              Get started for free
              <ArrowRight
                className="transition-transform group-hover:translate-x-2"
                size={16}
              />
            </Button>
          </motion.div>
        </div>
        <motion.div
          className="relative h-[300px] w-full md:h-auto md:w-full"
          initial={{ x: 70, y: 70, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, damping: 10, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src={headerTablet}
            alt="header image"
            fill
            className="overflow-visible object-cover"
          />
        </motion.div>
      </div>
      <div className="relative z-10 flex flex-col items-start justify-center gap-8 px-8 pb-16">
        <motion.h2
          className="font-inter uppercase tracking-[0.125rem] text-[#fff9]"
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, damping: 10, duration: 1.0, delay: 0.2 }}
          viewport={{ once: true }}
        >
          trusted by thousands of companies globally
        </motion.h2>
        <motion.ul
          className="flex flex-row items-center justify-center gap-4"
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, damping: 10, duration: 1.0, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <li>
            <Image src={typeheistLogo} alt="typeheist logo" width={118} />
          </li>
          <li>
            <Image src={landifyLogo} alt="landify logo" width={118} />
          </li>
          <li>
            <Image src={academyLogo} alt="academy logo" width={118} />
          </li>
        </motion.ul>
      </div>
    </header>
  );
}
