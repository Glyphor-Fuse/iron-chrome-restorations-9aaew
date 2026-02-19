import { useState, useEffect, useRef, useCallback } from 'react';
import { Sparkles } from "lucide-react";

interface ReactCompareSliderProps {
  itemOne: React.ReactNode;
  itemTwo: React.ReactNode;
  position?: number;
  onPositionChange?: (position: number) => void;
  className?: string;
  onlyHandleDraggable?: boolean;
}

const ReactCompareSlider: React.FC<ReactCompareSliderProps> = ({
  itemOne,
  itemTwo,
  position = 50,
  onPositionChange,
  className = "",
  onlyHandleDraggable = true,
}) => {
  const [sliderPosition, setSliderPosition] = useState(position);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      setSliderPosition(percentage);
      if (onPositionChange) onPositionChange(percentage);
    },
    [onPositionChange]
  );

  const handleMouseDown = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    isDragging.current = true;
  }, []);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (!isDragging.current) return;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      handleMove(clientX);
    },
    [handleMove]
  );

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleMouseMove);
    document.addEventListener("touchend", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleMouseMove);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden select-none cursor-ew-resize ${className}`}
      onMouseDown={onlyHandleDraggable ? undefined : handleMouseDown}
      onTouchStart={onlyHandleDraggable ? undefined : handleMouseDown}
    >
      {/* Item Two (Underneath - The "After" or Right Side) */}
      <div className="absolute inset-0 w-full h-full object-cover">
         {itemTwo}
      </div>

      {/* Item One (Clipped - The "Before" or Left Side) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        {itemOne}
      </div>

      {/* Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-primary z-20 cursor-ew-resize shadow-[0_0_20px_rgba(20,184,166,0.5)]"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg border-2 border-border">
          <div className="flex gap-0.5">
             <div className="w-0.5 h-3 bg-background" />
             <div className="w-0.5 h-3 bg-background" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const RestorationJourney = () => {
  return (
    <section id="restoration" className="py-24 bg-card border-y border-border/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              THE TRANSFORMATION
            </h2>
            <p className="text-muted-foreground text-lg">
              Drag the slider to see the resurrection. From barn-find rust bucket to concours-ready legend.
            </p>
          </div>
          <div className="flex items-center gap-2 text-primary">
            <SparklesCore className="h-5 w-5" />
            <span className="font-mono text-sm tracking-wider">PROJECT: '69 FASTBACK</span>
          </div>
        </div>

        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden shadow-2xl border border-border/10">
          <ReactCompareSlider
            itemOne={
              <div className="relative w-full h-full">
                <img
                  src="/images/mustang-before.png"
                  alt="Mustang Before"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 left-6 bg-background/50 backdrop-blur-md px-4 py-4 rounded border border-border/10">
                   <span className="text-foreground font-bold font-display tracking-widest">BEFORE</span>
                </div>
                {/* Technical Callout Overlay - Before */}
                <div className="absolute bottom-10 left-10 md:left-20">
                   <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"/>
                        <span className="text-xs text-red-400 bg-background/80 px-2 py-0.5 rounded">Severe frame corrosion</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"/>
                        <span className="text-xs text-red-400 bg-background/80 px-2 py-0.5 rounded">Missing powertrain</span>
                      </div>
                   </div>
                </div>
              </div>
            }
            itemTwo={
               <div className="relative w-full h-full">
                <img
                  src="/images/mustang-after.png"
                  alt="Mustang After"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 right-6 bg-primary/20 backdrop-blur-md px-4 py-4 rounded border border-primary/50">
                   <span className="text-primary font-bold font-display tracking-widest">AFTER</span>
                </div>
                 {/* Technical Callout Overlay - After */}
                 <div className="absolute bottom-10 right-10 md:right-20 text-right">
                   <div className="flex flex-col gap-2 items-end">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-primary bg-background/80 px-2 py-0.5 rounded">Raven Black Gloss</span>
                        <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#14B8A6]"/>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-primary bg-background/80 px-2 py-0.5 rounded">Coyote V8 Swap</span>
                        <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#14B8A6]"/>
                      </div>
                   </div>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default RestorationJourney;
