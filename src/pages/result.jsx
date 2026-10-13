import React from "react";
import { useEffect, useRef, useState } from "react";
import ReactPlayer from 'react-player'
import ReelCarousel from "../component/reelCarousel";
import RevCarousel from "../component/revCarousel";
import UISection from "../component/uiSection";

export default function Results() {
    return (
        <div id="results" className="w-full py-4 sm:py-6">
            <h2 className="font-bold text-white text-start text-2xl sm:text-3xl md:text-4xl px-4 sm:px-8 mb-8 sm:mb-12">
                Browse My Latest Works
            </h2>
            <div className="w-full px-2 sm:px-6 md:px-8">
                <div className="flex flex-col gap-y-16 sm:gap-y-24">
                    {/* Reels Section */}
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10">
                        <div className="w-full lg:w-[280px] xl:w-[320px] shrink-0 flex flex-col gap-2 px-2 sm:px-0">
                            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-400">Short-Form</span>
                            <h4 className="text-white text-xl sm:text-2xl font-bold">1-Minute Reels Video</h4>
                            <p className="text-sm sm:text-base text-gray-300">
                                High-impact vertical videos edited for maximum retention, pacing, and visual engagement.
                            </p>
                        </div>
                        <div className="w-full flex-1 min-w-0">
                            <ReelCarousel />
                        </div>
                    </div>

                    {/* YouTube Section */}
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10">
                        <div className="w-full lg:w-[280px] xl:w-[320px] shrink-0 flex flex-col gap-2 px-2 sm:px-0">
                            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-orange-400">Long-Form</span>
                            <h4 className="text-white text-xl sm:text-2xl font-bold">YouTube & Landscape Videos</h4>
                            <p className="text-sm sm:text-base text-gray-300">
                                Comprehensive reviews, event teasers, and cinematic trailers crafted with narrative flow.
                            </p>
                        </div>
                        <div className="w-full flex-1 min-w-0">
                            <RevCarousel />
                        </div>
                    </div>

                    {/* UI & Web Dev Section */}
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2 px-2 sm:px-0">
                            <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-cyan-400">Design & Code</span>
                            <h4 className="text-white text-xl sm:text-2xl font-bold">Web & App Development Projects</h4>
                            <p className="text-sm sm:text-base text-gray-300 max-w-2xl">
                                Real-world applications and interactive prototypes designed and developed using modern tech stacks.
                            </p>
                        </div>
                        <div className="w-full">
                            <UISection />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}