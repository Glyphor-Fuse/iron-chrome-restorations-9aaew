import React from "react";
import { cn } from "@/lib/utils";

const TeamMember = ({ name, role, image, delay }: { name: string; role: string; image: string; delay: number }) => (
  <div 
    className="relative group overflow-hidden rounded-xl bg-card border border-border/5"
  >
    <div className="aspect-[3/4] overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0" />
    </div>
    <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
        <h3 className="text-foreground font-display text-2xl font-bold uppercase">{name}</h3>
        <p className="text-primary font-medium tracking-wider text-sm">{role}</p>
    </div>
  </div>
);

export const Team = () => {
  return (
    <section id="team" className="py-24 bg-muted/10 relative">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            THE CREW
          </h2>
          <div className="w-20 h-1 bg-primary mb-6" />
          <p className="text-muted-foreground max-w-xl">
            Not just mechanics. Artists. With over 150 years of combined experience in classic restoration, metal fabrication, and engine building.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <TeamMember 
                name="Jack 'Sparky' O'Neil" 
                role="Master Fabricator" 
                image="/images/team-welder.png" 
                delay={0}
            />
             <TeamMember 
                name="Sarah Jenkins" 
                role="Paint Specialist" 
                image="/images/paint-gun.png" // reusing creative asset for budget
                delay={0.1}
            />
             <TeamMember 
                name="Marcus Thorne" 
                role="Lead Engine Builder" 
                image="/images/mustang-frame.png" 
                delay={0.2}
            />
             <TeamMember 
                name="David Rossi" 
                role="Interior Craftsman" 
                image="/images/paint-gun.png" 
                delay={0.3}
            />
        </div>
      </div>
    </section>
  );
};
