import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { youtube } from "../data.js"
import ReactPlayer from 'react-player';
import {ChevronLeft, ChevronRight, X} from 'lucide-react';
import { useState, useEffect, useRef } from "react";


// Embla requires a minimum total slide width of at least 200% of the viewport to loop.
// Since we have 4 slides at 30% each (~120%), we duplicate the items to ensure it loops smoothly.

export default function RevCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true
  });
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [playingIndex, setPlayingIndex] = useState(null);
  const playerRefs = useRef([]);

  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedVideo(null);
      }
    };
    if (selectedVideo) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      setPlayingIndex(null);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedVideo]);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden w-full rounded-2xl py-2">
        <div ref={emblaRef} className="cursor-grab active:cursor-grabbing">
          <div className="flex gap-4 sm:gap-6 py-2 px-1">
            {youtube.map((item, index) => (
              <div
                key={index}
                className="flex-[0_0_280px] sm:flex-[0_0_360px] md:flex-[0_0_420px] transition-transform duration-300 hover:scale-[1.02] flex flex-col"
              >
                <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden bg-black/60 border border-white/10 shadow-lg relative group">
                  <ReactPlayer
                    ref={(el) => (playerRefs.current[index] = el)}
                    src={item.ytsrc}
                    controls
                    width="100%"
                    height="100%"
                    playing={playingIndex === index}
                    onPlay={() => setPlayingIndex(index)}
                    onPause={() => setPlayingIndex((prev) => (prev === index ? null : prev))}
                  />
                </div>
                <h5 className="text-white/90 text-xs sm:text-sm font-medium mt-2.5 px-1 truncate" title={item.yttitle}>
                  {item.yttitle}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Prev arrow */}
      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="hidden sm:flex absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-11 sm:h-11 items-center justify-center rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-all duration-200 hover:scale-110 shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Next arrow */}
      <button
        onClick={() => emblaApi?.scrollNext()}
        className="hidden sm:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-11 sm:h-11 items-center justify-center rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-all duration-200 hover:scale-110 shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Video Popup Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="relative bg-zinc-950/90 border border-white/10 rounded-2xl p-4 max-w-[640px] w-full aspect-video flex flex-col items-center justify-center shadow-2xl transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              className="absolute -top-12 right-0 md:top-4 md:right-4 text-white/70 hover:text-white transition-all duration-200 p-2 bg-white/10 hover:bg-white/20 rounded-full hover:scale-105"
              onClick={() => setSelectedVideo(null)}
              aria-label="Close video preview"
            >
              <X size={20} />
            </button>

            {/* Video Player */}
            <div className="w-full h-full rounded-xl overflow-hidden bg-black flex items-center justify-center">
              <ReactPlayer 
                url={selectedVideo} 
                playing={true} 
                controls={true} 
                width="100%" 
                height="100%" 
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}