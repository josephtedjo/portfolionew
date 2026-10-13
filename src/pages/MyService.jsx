import React from "react";
import GlassContainer from "../component/glasscontainer";

export default function MyService() {
    return (
        <div>
            <h2 className="font-semibold text-white-700 text-start text-3xl px-8 mb-8">What I Do</h2>
            <div className="grid grid-cols-3 ">
                <GlassContainer className="py-10 px-10 hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-default">
                    <h3 className="text-xl font-semibold mb-8">Video Editing</h3>
                    <p className="text-white-600">shaping content through the careful adjustment of pace, emotion, and visual aesthetics — turning raw footage into engaging, polished stories.</p>
                </GlassContainer>
                <GlassContainer className="py-10 px-10 hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-default">
                    <h3 className="text-xl font-semibold mb-8">Mobile App Development</h3>
                    <p className="text-white-600">I'm a beginner mobile app developer with a passion for building clean and functional applications using Flutter. I'm at the early stages of my journey, but I'm committed to learning and growing with every project I build.</p>
                </GlassContainer>
                <GlassContainer className="py-10 px-10 hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-default">
                    <h3 className="text-xl font-semibold mb-8">UI/UX Design</h3>
                    <p className="text-white-600">creating clean, intuitive, and visually appealing digital experiences. I'm passionate about understanding user needs and translating them into thoughtful, functional designs.</p>

                </GlassContainer>
            </div>
        </div>
    );
}
