import React, { useState } from 'react'
import { cn } from "@/lib/utils";

export const WobbleCard = ({
  children,
  containerClassName,
  className,
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
}) => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = React.useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / 20;
    const y = (clientY - (rect.top + rect.height / 2)) / 20;
    setMousePosition({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      style={{
        transform: isHovering
          ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1, 1, 1)`
          : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
        transition: "transform 0.1s ease-out",
      }}
      className={cn(
        "mx-auto w-full bg-background-800 relative rounded-2xl overflow-hidden",
        containerClassName
      )}
    >
      <div
        className="relative h-full [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))]  sm:mx-0 sm:rounded-2xl overflow-hidden"
        style={{
          boxShadow:
            "0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)",
        }}
      >
        <div
          style={{
            transform: isHovering
              ? `translate3d(${-mousePosition.x}px, ${-mousePosition.y}px, 0) scale3d(1.03, 1.03, 1)`
              : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
            transition: "transform 0.1s ease-out",
          }}
          className={cn("h-full px-4 py-20 sm:px-10", className)}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
       {/* Background accent */}
       <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/10 blur-[100px] rounded-full" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            MASTER CRAFTSMANSHIP
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From frame-off rotisserie restorations to custom high-performance builds, our shop handles every detail in-house.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-card min-h-[500px] lg:min-h-[300px]"
            className=""
          >
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-foreground">
                Full Frame-Off Restoration
              </h2>
              <p className="mt-4 text-left  text-base/6 text-foreground-200">
                We strip every bolt, blast every panel, and rebuild your icon from the ground up. Our rotisserie process ensures perfection from the undercarriage to the roof.
              </p>
            </div>
            <img
              src="/images/mustang-frame.png"
              width={500}
              height={500}
              alt="Mustang Frame Restoration"
              className="absolute -right-4 lg:-right-[10%] -bottom-10 object-contain rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 w-[60%]"
            />
          </WobbleCard>
          
          <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-muted/20 backdrop-blur-sm border border-border/10">
            <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-foreground">
              Custom Paint & Body
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-foreground-200">
              Show-quality finishes. Glass-like clear coats. We mix custom period-correct hues or modern metallic blends.
            </p>
            <img
              src="/images/paint-gun.png"
              width={300}
              height={300}
              alt="Paint Gun"
              className="absolute -right-10 -bottom-10 object-contain w-[50%] opacity-80"
            />
          </WobbleCard>
          
          <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-accent/10 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
            <div className="max-w-sm">
              <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-foreground">
                Engine & Powertrain Rebuilds
              </h2>
              <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-foreground-200">
                Whether it's a numbers-matching 427 V8 or a modern Coyote swap, our engine masters tune for raw power and reliability.
              </p>
            </div>
            <img
              src="/images/engine-detail.png"
              width={500}
              height={500}
              alt="V8 Engine Detail"
              className="absolute -right-10 md:-right-[20%] lg:-right-[5%] -bottom-10 object-contain rounded-2xl w-[80%] md:w-[60%] lg:w-[40%]"
            />
          </WobbleCard>
        </div>
      </div>
    </section>
  );
};

export default WobbleCard;
