import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import CustomButton from "../component/CustomButton";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Results", href: "#results" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <nav className={`w-full flex items-center justify-between px-4 sm:px-8 transition-all duration-300 ease-in-out ${
                isScrolled 
                    ? "bg-[#0B1120]/80 backdrop-blur-md py-3 sm:py-4 shadow-lg border-b border-white/10" 
                    : "bg-transparent py-4 sm:py-6 text-white"
            }`}>
                <a href="#home" className="text-xl sm:text-2xl font-bold tracking-wider cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 text-gray-200 hover:text-white flex items-center gap-1">
                    <span>Portfolio</span>
                    <span className="text-xs sm:text-sm font-light text-gray-400">by</span>
                    <span className="text-sm sm:text-base font-semibold text-blue-400">Joseph</span>
                </a>
                
                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-8 lg:gap-12 font-medium text-base lg:text-lg">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a 
                                href={link.href} 
                                className="text-gray-300 hover:text-white hover:scale-105 transition-all duration-200 cursor-pointer font-normal"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Right CTA and Mobile Hamburger Button */}
                <div className="flex items-center gap-3">
                    <CustomButton className="hidden sm:inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-orange-500 text-white text-sm sm:text-base px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer font-medium" href="mailto:josephtedjorahardjo@gmail.com"> 📧 Contact Me
                    </CustomButton>

                    {/* Mobile Hamburger Toggle Button */}
                    <button 
                        className="md:hidden text-white p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-[#0B1120]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 transition-all duration-300 animate-fadeIn">
                    <ul className="flex flex-col gap-4 text-center">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a 
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block text-gray-200 hover:text-blue-400 py-2 text-lg font-medium transition-colors"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                        <li className="pt-2">
                            <CustomButton className="px-4 w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white py-2.5 rounded-lg font-medium shadow-md"> 📧 Contact Me
                            </CustomButton>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}