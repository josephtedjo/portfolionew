import React from "react";
import { webUI } from "../data.js";
import { ExternalLink } from "lucide-react";
import CustomButton from "./CustomButton.jsx";

export default function UISection() {
  return (
    <div className="w-full flex flex-col gap-y-8 sm:gap-y-12">
      {webUI.map((item, index) => (
        <div 
          key={index} 
          className="flex flex-col lg:flex-row items-stretch gap-6 sm:gap-8 p-5 sm:p-7 md:p-8 bg-white/5 hover:bg-white/[0.08] border border-white/10 hover:border-white/20 rounded-2xl sm:rounded-3xl transition-all duration-300 shadow-xl backdrop-blur-sm group"
        >
          {/* Text and Details */}
          <div className="flex flex-col justify-between w-full lg:w-1/2 order-2 lg:order-1">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {item.websitename}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base mb-3 leading-relaxed">
                {item.websiteDescription}
              </p>
              <p className="text-gray-400 text-xs sm:text-sm mb-6 leading-relaxed bg-black/20 p-3 sm:p-4 rounded-xl border border-white/5">
                {item.websiteCreation}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 mt-auto">
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-medium text-gray-400">Stack:</span>
                <div className="flex items-center gap-2">
                  {item.websiteTools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="w-8 h-8 rounded-lg bg-white/10 p-1.5 flex items-center justify-center border border-white/10">
                      <img 
                        src={tool} 
                        alt="tech icon" 
                        className="w-full h-full object-contain" 
                      />
                    </div>
                  ))}
                </div>
              </div>
              <CustomButton  
                href={item.websiteLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white hover:text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-xl transition-all duration-300 shadow-md hover:shadow-orange-500/20 hover:scale-105 active:scale-95"
              >
                Live Preview
                <ExternalLink size={15} />
              </CustomButton>

            </div>
          </div>

          {/* Project Screenshot / Mockup */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-black/40 flex items-center justify-center">
            <a 
              href={item.websiteLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full h-full block overflow-hidden"
            >
              <img 
                src={item.websiteImg} 
                alt={item.websitename} 
                className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover object-top transition-transform duration-500 group-hover:scale-105" 
              />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
