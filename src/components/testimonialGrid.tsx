"use client";

import { TestimonialCard } from "@/components/ui/testimonialCard";
import { StaticImageData } from "next/image";
import { motion } from "motion/react"

export interface TestimonialInterface {
  quote: string;
  author: {
    name: string;
    handle: string;
    image: StaticImageData;
  };
}

interface TestimonialsGridProps {
  testimonials: TestimonialInterface[];
}

export default function TestimonialsGrid({ testimonials }: TestimonialsGridProps) {
  return (
    <div className="bg-gray-50 md:p-24">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial: TestimonialInterface, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 10,
              duration: 0.5,
              delay: index * 0.1, // Ajout d'un léger décalage pour chaque carte
            }}
            viewport={{ once: true }}
          >
            <TestimonialCard
              quote={testimonial.quote}
              author={testimonial.author}
              isGrey={index % 2 === 0}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
