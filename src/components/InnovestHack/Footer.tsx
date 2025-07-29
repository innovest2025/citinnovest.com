import React from "react";
import { Heart, Code, Zap } from "lucide-react";

// Animation styles
const animationStyles = `
  .footer-shape {
    animation: float 6s ease-in-out infinite;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  
  .footer-gradient {
    background: linear-gradient(to right, rgba(12, 13, 95, 0.05), rgba(255, 193, 7, 0.05));
  }
`;

const Footer = () => {
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Domains", href: "#domains" },
    { name: "Journey", href: "#journey" },
    { name: "Prizes", href: "#prizes" },
    { name: "Register", href: "#register" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-[#0c0d5f] to-[#070730] text-white py-16 relative overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>

        {/* Animated shapes */}
        <div className="footer-shape absolute top-[15%] left-[10%] w-16 h-16 bg-yellow-500/5 rounded-full"></div>
        <div className="footer-shape absolute top-[25%] right-[15%] w-24 h-24 bg-purple-500/5 rounded-full"></div>
        <div className="footer-shape absolute bottom-[30%] left-[20%] w-20 h-20 bg-yellow-500/5 rounded-md rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold font-serif">
                  <span className="text-white">Innovest</span>
                  <span className="text-yellow-400">Hack</span>
                </span>
                <span className="text-sm text-yellow-400 ml-1">2025</span>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6 max-w-md">
              India's premier hackathon for college students. Join us in
              building the future through innovation, collaboration, and
              cutting-edge technology.
            </p>
            <div className="flex items-center space-x-2 text-slate-400">
              <span>Organized by</span>
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg flex items-center justify-center">
                <Code className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold">
                Chennai Institute of Technology
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-300 hover:text-yellow-400 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Event Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">
              Event Info
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>📅 19th August 2025</li>
              <li>📍 Chennai, India</li>
              <li>👥 Students Only</li>
              <li>⏰ 1-Day Event</li>
              <li>🏆 2.25 lakhs Grant</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span className="text-slate-400">Made with</span>
              <Heart className="w-4 h-4 text-yellow-500" />
              <span className="text-slate-400">for innovators</span>
            </div>
            <div className="text-slate-400 text-sm">
              © 2025 InnovestHack. All rights reserved. | Chennai Institute of
              Technology
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
