import React from "react";
import CustomButton from "../component/CustomButton";

export default function Footer() {
    return (
        <footer className="w-full flex flex-col md:flex-row items-center justify-between gap-6 py-10 sm:py-12 px-6 sm:px-10 mt-12 border-t border-white/10 text-center md:text-left">
            <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                    Joseph Christian Tedjorahardjo
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mt-1">
                    Creative • Developer • Designer
                </p>
            </div>

            <div className="flex items-center gap-3">
                <CustomButton className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white hover:text-white text-sm sm:text-base px-6 py-2.5 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-500/20 active:scale-95 cursor-pointer" href="mailto:josephtedjorahardjo@gmail.com">
                    📧 Mail me right away!
                </CustomButton>
            </div>
            
            <p className="text-gray-500 text-xs text-center md:text-right">
                © {new Date().getFullYear()} Joseph. All rights reserved.
            </p>
        </footer>
    );
}
