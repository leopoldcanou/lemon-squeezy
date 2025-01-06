"use client";

import Button from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import footerTablet from "../../public/footer-tablet.jpg";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react"

interface FooterProps {
  title: string;
  text: string;
  buttonText: string;
  titleColor: string;
  backgroundColor: string;
  buttonPrimaryColor: string;
  buttonHoverColor: string;
  buttonSecondaryColor: string;
}

export default function Footer({
  title,
  text,
  buttonText,
  titleColor,
  backgroundColor,
  buttonPrimaryColor,
  buttonHoverColor,
  buttonSecondaryColor,
}: FooterProps) {
  return (
    <>
      <div className="flex flex-col">
        <motion.div
          className="flex flex-col md:flex-row"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 50, damping: 10, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex md:w-1/2" style={{ backgroundColor }}>
            <div
              className="flex h-full flex-col justify-center p-8 md:p-24"
              style={{ backgroundColor }}
            >
              <p
                className="z-10 mb-4 font-inter text-sm font-medium"
                style={{ color: titleColor }}
              >
                {title}
              </p>
              <h2 className="z-10 font-circular-pro-book text-2xl leading-[1.22] text-white md:mb-8 md:text-6xl">
                {text}
              </h2>
            </div>
          </div>
          <div
            className="flex items-end px-4 pb-32 md:w-1/2 md:justify-center"
            style={{ backgroundColor }}
          >
            <Button
              primaryColor={buttonPrimaryColor}
              hoverColor={buttonHoverColor}
              secondaryColor={buttonSecondaryColor}
            >
              {buttonText}
              <ArrowRight
                className="transition-transform group-hover:translate-x-2"
                size={16}
              />
            </Button>
          </div>
        </motion.div>
        <motion.div
          className="relative flex h-full w-full justify-center"
          style={{ backgroundColor }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 50, damping: 10, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src={footerTablet}
            alt="header image"
            className="overflow-visible object-cover"
            height={800}
          />
        </motion.div>
      </div>
      <motion.footer
        className="bg-[#5423E7] px-4 py-16 font-inter text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 50, damping: 10, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="grid grid-cols-1 gap-12 md:grid-cols-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Resources */}
            <div className="space-y-4">
              <h2 className="mb-6 text-base font-medium">Resources</h2>
              <div className="space-y-3">
                <Link href="#" className="block text-[#FFFFFF99] transition-colors hover:text-white">
                  Help center
                </Link>
                <Link href="#" className="block text-[#FFFFFF99] transition-colors hover:text-white">
                  Help docs
                </Link>
                <Link href="#" className="block text-[#FFFFFF99] transition-colors hover:text-white">
                  Developer docs
                </Link>
                <Link href="#" className="block text-[#FFFFFF99] transition-colors hover:text-white">
                  Guide to MoR
                </Link>
                <Link href="#" className="block text-[#FFFFFF99] transition-colors hover:text-white">
                  Creator&apos;s Guide
                </Link>
                <Link href="#" className="block text-[#FFFFFF99] transition-colors hover:text-white">
                  Wedges
                </Link>
              </div>
              <h2 className="mb-6 text-base font-medium">Compare</h2>
              <div className="space-y-3">
                <Link href="#" className="block text-[#FFFFFF99] transition-colors hover:text-white">
                  Gumroad Alternative
                </Link>
                <Link href="#" className="block text-[#FFFFFF99] transition-colors hover:text-white">
                  Paddle Alternative
                </Link>
              </div>
            </div>
            <div className="space-y-4">
            <h2 className="mb-6 text-base font-medium">Features</h2>
            <div className="space-y-3">
              <Link href="#" className="block text-[#FFFFFF99] transition-colors hover:text-white">
                Affiliates
              </Link>
              <Link href="#" className="block text-[#FFFFFF99] transition-colors hover:text-white">
                PayPal Subscriptions
              </Link>
              <Link href="#" className="block text-[#FFFFFF99] transition-colors hover:text-white">
                Usage-based Billing
              </Link>
              <Link href="#" className="block text-[#FFFFFF99] transition-colors hover:text-white">
                Customer Portal
              </Link>
              <Link href="#" className="block text-[#FFFFFF99] transition-colors hover:text-white">
                Discount Codes
              </Link>
              <Link href="#" className="block text-[#FFFFFF99] transition-colors hover:text-white">
                Lead Magnets
              </Link>
              <Link href="#" className="block text-[#FFFFFF99] transition-colors hover:text-white">
                PWYW Pricing
              </Link>
              <Link href="#" className="block text-[#FFFFFF99] transition-colors hover:text-white">
                Roadmap
              </Link>
              <Link href="#" className="block text-[#FFFFFF99] transition-colors hover:text-white">
                Changelog
              </Link>
              <Link href="#" className="block text-[#FFFFFF99] transition-colors hover:text-white">
                Suggest features
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="mb-6 text-base font-medium">Platform</h2>
            <div className="space-y-3">
              <Link href="#" className="block text-[#FFFFFF99] transition-colors hover:text-white">
                Merchant of Record
              </Link>
              <Link href="#" className="block text-[#FFFFFF99] transition-colors hover:text-white">
                Subscriptions
              </Link>
              <Link href="#" className="block text-[#FFFFFF99] transition-colors hover:text-white">
                Payments
              </Link>
              <Link href="#" className="block text-[#FFFFFF99] transition-colors hover:text-white">
                Online Storefront
              </Link>
              <Link href="#" className="block text-[#FFFFFF99] transition-colors hover:text-white">
                Digital Products
              </Link>
              <Link href="#" className="block text-[#FFFFFF99] transition-colors hover:text-white">
                Checkout Overlays
              </Link>
              <Link href="#" className="block text-[#FFFFFF99] transition-colors hover:text-white">
                Hosted Checkouts
              </Link>
              <Link href="#" className="block text-[#FFFFFF99] transition-colors hover:text-white">
                Fraud Prevention
              </Link>
              <Link href="#" className="block text-[#FFFFFF99] transition-colors hover:text-white">
                Customer Management
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="mb-6 text-base font-medium">Company</h2>
            <div className="space-y-3">
              <Link href="#" className="block text-[#FFFFFF99] transition-colors hover:text-white">
                About
              </Link>
              <Link href="#" className="block text-[#FFFFFF99] transition-colors hover:text-white">
                Pricing
              </Link>
              <Link href="#" className="block text-[#FFFFFF99] transition-colors hover:text-white">
                Case Studies
              </Link>
              <Link href="#" className="block text-[#FFFFFF99] transition-colors hover:text-white">
                Wall of Love
              </Link>
              <Link href="#" className="block text-[#FFFFFF99] transition-colors hover:text-white">
                Blog
              </Link>
              <Link href="#" className="block text-[#FFFFFF99] transition-colors hover:text-white">
                Brand Assets
              </Link>
              <Link href="#" className="block text-[#FFFFFF99] transition-colors hover:text-white">
                Migration Offer
              </Link>
              <Link href="#" className="block text-[#FFFFFF99] transition-colors hover:text-white">
                @lmsqueezy
              </Link>
            </div>
          </div>

            {/* Other sections... */}
          </motion.div>
          <motion.div
            className="mt-16 space-x-4 border-t border-white/10 pt-8 text-center text-white/60"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 10, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span>© 2024 Lemon Squeezy, LLC</span>
            <span>•</span>
            <Link href="#" className="transition-colors hover:text-white">
              Privacy
            </Link>
            <span>•</span>
            <Link href="#" className="transition-colors hover:text-white">
              Terms
            </Link>
            <span>•</span>
            <Link href="#" className="transition-colors hover:text-white">
              DPA
            </Link>
          </motion.div>
        </div>
      </motion.footer>
    </>
  );
}
