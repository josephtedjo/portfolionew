import React from "react";
import ToolsCarousel from "../component/toolsCarousel";
// import Caraousel from "../component/Carousel";

export default function Skill() {
    return (
        <div className="py-6 sm:py-8 md:py-10">
            <h2 className="font-bold text-white text-start text-2xl sm:text-3xl md:text-4xl px-4 sm:px-8">
                Tools that I use
            </h2>
            <h3 className="font-light text-gray-300 px-4 sm:px-8 text-base sm:text-lg mt-1 mb-4 sm:mb-6">
                Here's my preference of tools that I use
            </h3>
            <div className="overflow-x-hidden px-2 sm:px-4">
                <ToolsCarousel />
            </div>
        </div>
    );
}
