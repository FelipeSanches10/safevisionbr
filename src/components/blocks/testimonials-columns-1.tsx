"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

interface Testimonial {
  name: string;
  source: string;
  text: string;
  image?: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  // Default avatar for testimonials without images
  const defaultAvatar = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiNGM0Y0RjYiLz4KPGNpcmNsZSBjeD0iMjAiIGN5PSIxNiIgcj0iNiIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNMzIgMzJDMzIgMjYuNDc3MiAyNy41MjI4IDIyIDIyIDIySDEyQzYuNDc3MTUgMjIgMiAyNi40NzcyIDIgMzJWMzJIMzJWMzJaIiBmaWxsPSIjOUNBM0FGIi8+Cjwvc3ZnPgo=";

  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map((testimonial, i) => (
                <div className="card bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 max-w-xs w-full" key={i}>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-white text-sm">
                      {testimonial.name}
                    </h4>
                    <div className="text-xs text-slate-500 bg-slate-700/50 px-2 py-1 rounded-full">
                      {testimonial.source}
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, starIndex) => (
                      <span 
                        key={starIndex} 
                        className="text-yellow-400 text-sm"
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="relative h-10 w-10 rounded-full overflow-hidden bg-slate-700">
                      <Image
                        src={testimonial.image || defaultAvatar}
                        alt={`${testimonial.name} avatar`}
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-full object-cover"
                        unoptimized={!testimonial.image}
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5 text-white text-sm">{testimonial.name}</div>
                      <div className="leading-5 opacity-60 tracking-tight text-slate-400 text-xs">{testimonial.source}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

;
