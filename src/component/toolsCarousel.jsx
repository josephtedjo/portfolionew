import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { tools } from "../data.js"


export default function ToolsCarousel() {
  const [emblaRef] = useEmblaCarousel({ 
    dragFree: true,
    containScroll: "trimSnaps"
  });

  return (
    <div className="overflow-hidden w-full py-2">
      <div ref={emblaRef} className="cursor-grab active:cursor-grabbing">
        <div className="flex gap-4 sm:gap-6 py-2">
          {tools.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-24 sm:w-28 flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 hover:scale-105 hover:-translate-y-1 group"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain mb-2 transition-transform duration-300 group-hover:scale-110" 
              />
              <h4 className="text-white font-medium text-xs sm:text-sm text-center truncate w-full">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
