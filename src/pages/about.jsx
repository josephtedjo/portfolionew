import React from "react";
import { useRef, useState, useEffect } from "react";

export default function About() {
    return (
        <div id="about" className="w-full py-6 sm:py-8 md:py-10">
            <h2 className="font-bold text-white text-start text-2xl sm:text-3xl md:text-4xl px-4 sm:px-8">
                Meet Joseph!
            </h2>
            <h3 className="font-light text-gray-300 px-4 sm:px-8 text-base sm:text-lg mt-1">
                Creative that enjoys making things
            </h3>

            <div className="px-4 sm:px-8 py-4 sm:py-6">
                <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed text-left">
                    Currently a video editor that is developing his skill into software development after earning his Bachelor's Degree in Computer Science in 2023. Focused on using Flutter framework for mobile app development and React JS for web development.
                </p>
            </div>
        </div>
    );
}