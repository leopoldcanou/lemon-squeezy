import { TestimonialCard } from "@/components/ui/testimonialCard";
import { StaticImageData } from "next/image";

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

export default function TestimonialsGrid(testimonials: TestimonialsGridProps) {
  return (
    <div className="bg-gray-50 md:p-24">
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {testimonials.testimonials.map(
          (testimonial: TestimonialInterface, index: number) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              isGrey={index % 2 === 0}
            />
          ),
        )}
      </div>
    </div>
  );
}
