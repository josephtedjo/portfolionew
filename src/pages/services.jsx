import React from "react";
import GlassContainer from "../component/glasscontainer";

export default function Services() {
    return (
        <div className="py-2">
            <h2 className="font-bold text-white text-start text-2xl sm:text-3xl md:text-4xl px-4 sm:px-8 mb-6 sm:mb-8">
                What I Do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-8">
                <div className="p-6 sm:p-8 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 rounded-2xl transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between">
                    <div>
                        <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center text-2xl mb-6">
                            🎬
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">Video Editing</h3>
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                            Turning raw footage into polished, engaging stories through deliberate pacing, visual rhythm, and dynamic color grading.
                        </p>
                    </div>
                </div>

                <div className="p-6 sm:p-8 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 rounded-2xl transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between">
                    <div>
                        <div className="w-12 h-12 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center text-2xl mb-6">
                            📱
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">Mobile App Development</h3>
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                            Building clean, functional, high-performance cross-platform mobile apps with Flutter — from architecture to interactive UI.
                        </p>
                    </div>
                </div>

                <div className="p-6 sm:p-8 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 rounded-2xl transition-all duration-300 hover:scale-[1.02] md:col-span-2 lg:col-span-1 flex flex-col justify-between">
                    <div>
                        <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-2xl mb-6">
                            🎨
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">UI/UX Design</h3>
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                            Designing intuitive digital experiences that translate user needs into thoughtful, aesthetically pleasing, and usable interfaces.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
