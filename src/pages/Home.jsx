import React, { useRef, useState, useEffect } from "react";
import About from "./about";
import Results from "./result";
import Footer from "./footer";
import GlassContainer from "../component/glasscontainer";
import Skill from "./skill";
import Service from "./services";

export default function Home() {

const subtext = 'My name is Joseph, and I\'m a Creative based in Indonesia';
const [text, setText] = useState("");
const i = useRef(0);

    useEffect(() => {
      const id = setInterval(() => {
        i.current++;
        setText(subtext.slice(0, i.current));
      }, 50);
      return () => clearInterval(id);
    }, []);
    
    return (
        <div className="pt-28 sm:pt-36 md:pt-44 max-w-7xl mx-auto w-full" id="home">
            {/* Hero Section */}
            <div className="px-4 sm:px-8 md:px-12 text-center mb-20 sm:mb-28 md:mb-36">
                <h1 className="font-semibold text-white tracking-tight text-4xl sm:text-6xl md:text-7xl lg:text-8xl mb-4 sm:mb-6">
                    Hi There! 👋🏻
                </h1>
                <p className="text-gray-300 mb-8 sm:mb-12 text-base sm:text-lg md:text-xl min-h-[2.5rem] max-w-2xl mx-auto">
                    {text}
                    <span className="inline-block w-0.5 h-5 ml-1 bg-orange-400 animate-pulse align-middle"></span>
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button 
                        className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 ease-in-out hover:bg-white hover:text-blue-600 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95 cursor-pointer" 
                        onClick={() => window.open("https://www.linkedin.com/in/josephtedjorahardjo", "_blank", "noopener,noreferrer")}
                    >
                        Check my LinkedIn here
                    </button>
                    <button 
                        className="w-full sm:w-auto bg-orange-500 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 ease-in-out hover:bg-white hover:text-orange-500 hover:shadow-lg hover:shadow-orange-500/25 active:scale-95 cursor-pointer" 
                        onClick={() => document.getElementById("results")?.scrollIntoView({behavior: "smooth"})}
                    >
                        Check my work here
                    </button>
                </div>
            </div>

            {/* About and Skills Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 sm:mb-8">
                <GlassContainer className="h-full flex flex-col justify-between">
                    <About />
                </GlassContainer>
                <GlassContainer className="h-full flex flex-col justify-between">
                    <Skill />
                </GlassContainer>
            </div>

            {/* Services Section */}
            <GlassContainer className="py-6 sm:py-8">
                <Service/>
            </GlassContainer>

            {/* Results Section */}
            <GlassContainer className="py-6 sm:py-8">
                <Results />
            </GlassContainer>

            <Footer />
        </div>
    );
}