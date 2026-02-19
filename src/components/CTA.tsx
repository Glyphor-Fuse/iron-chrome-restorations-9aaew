import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section id="cta" className="relative py-32 overflow-hidden flex items-center justify-center">
      {/* Background Gradient & Effects */}
      <div className="absolute inset-0 bg-primary/10">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="font-display text-5xl md:text-7xl font-black text-foreground mb-8">
          READY TO START YOUR BUILD?
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12">
          Slots are limited for the 2025 season. Secure your consultation today and let's bring your vision to life.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
           <Button size="lg" className="h-16 px-10 text-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_40px_-10px_rgba(20,184,166,0.6)] hover:shadow-[0_0_60px_-10px_rgba(20,184,166,0.8)] transition-all duration-300">
              Book Your Consultation
              <ArrowRight className="ml-2 h-6 w-6" />
           </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
