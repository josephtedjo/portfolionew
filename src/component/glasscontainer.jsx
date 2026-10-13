import React from "react";

export default function GlassContainer({children, className = ""}) {
    return (
        <div className={`mb-6 sm:mb-8 mx-3 sm:mx-6 md:mx-8 lg:mx-10 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-lg ${className}`}>
            {children}
        </div>
    )
}