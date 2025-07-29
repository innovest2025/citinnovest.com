import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

// Import logos from assets
import CITLogoYellow from "../../../assest/CIT Logo Yellow-Autonomous(1).png";
import CITBifLogo from "../../../assest/citbif-new-logo.png";
import CITILLogo from "../../../assest/CITIL - Logo.png";
import BlackInnovestLogo from "../../../assest/Black Innovest LOGO.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "domains", label: "Domains" },
    { id: "journey", label: "Journey" },
    // { id: 'schedule', label: 'Schedule' },
    { id: "prizes", label: "Prizes" },
    { id: "register", label: "Register" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      style={{ height: "64px", minHeight: "64px", maxHeight: "64px" }}
    >
      <div className="container mx-auto px-4 py-1 h-full flex items-center">
        <div className="flex items-center w-full h-full">
          <div className="flex items-center space-x-2 max-w-full h-full">
            {/* Logos */}
            <img
              src={CITLogoYellow}
              alt="CIT Logo Yellow-Autonomous"
              className="h-16 w-auto object-contain"
              style={{ minWidth: "56px" }}
            />
            <img
              src={CITBifLogo}
              alt="CITBIF New Logo"
              className="h-20 w-auto object-contain"
              style={{ minWidth: "66px" }}
            />
            <img
              src={CITILLogo}
              alt="CITIL Logo"
              className="h-12 w-auto object-contain"
              style={{ minWidth: "46px" }}
            />
            {/* <img
              src={BlackInnovestLogo}
              alt="Black Innovest Logo"
              className="h-20 w-auto object-contain"
              style={{ minWidth: '76px' }}
            /> */}
            {/* <span className="text-lg font-bold text-slate-800 ml-3 whitespace-nowrap">
              InnovestHack 2025
            </span> */}
          </div>
          <nav className="hidden md:flex ml-auto space-x-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium text-sm px-2"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Desktop Navigation */}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 py-4 bg-white/95 backdrop-blur-md rounded-lg shadow-lg">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left px-4 py-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
