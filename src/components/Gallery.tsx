import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const cars = [
  "/images/mustang-before.png",
  "/images/gallery-mustang-red.png",
  "/images/mustang-after.png",
  "/images/mustang-after.png",
  "/images/engine-detail.png",
  "/images/mustang-frame.png",
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-2">
            The Showroom
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-black text-foreground mb-6">
            BUILT TO DRIVE
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            A collection of our recent builds. Each one a unique masterpiece, restored to better-than-factory specifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((src, idx) => (
            <div
              key={idx}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-border/5 bg-card"
            >
              <img
                src={src}
                alt={`Classic Car ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                 <h3 className="text-foreground font-display text-2xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                   Build #{240 + idx}
                 </h3>
                 <p className="text-primary text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                   View Project Details
                 </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                View All Projects
            </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
