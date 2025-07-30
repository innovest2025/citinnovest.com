import TiledGallery from "./GalleryToptoBot";
import React, { useEffect, useState } from "react";
import { Calendar, MapPin, Users, Zap } from "lucide-react";

const Hero = () => {
  const [shootingStars, setShootingStars] = useState<Array<{
    id: number;
    top: string;
    left: string;
    size: number;
    duration: number;
    delay: number;
    color: string;
  }>>([]);

  const [floatingIcons, setFloatingIcons] = useState<Array<{
    id: number;
    top: string;
    left: string;
    icon: string;
    animation: string;
    size: number;
    color: string;
  }>>([]);

  useEffect(() => {
    const colors = ["#FFD700", "#FFFFFF", "#FFC0CB", "#87CEFA", "#7FFFD4"];
    const generateStar = () => ({
      id: Math.random(),
      top: `${Math.random() * 50}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 2 + 1,
      delay: Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)],
    });

    setShootingStars(Array.from({ length: 15 }, generateStar));

    const interval = setInterval(() => {
      setShootingStars((prev) => [...prev.slice(-20), generateStar()]);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const icons = ["⚙️", "💻", "🚀", "🔍", "💡", "🔧", "📱", "🌐", "🤖", "📊"];
    const animations = ["wave", "bounce", "float"];
    const colors = ["#FFD700", "#9370DB", "#3498DB", "#2ECC71", "#E74C3C"];

    const generateIcon = () => ({
      id: Math.random(),
      top: `${Math.random() * 80 + 10}%`,
      left: `${Math.random() * 80 + 10}%`,
      icon: icons[Math.floor(Math.random() * icons.length)],
      animation: animations[Math.floor(Math.random() * animations.length)],
      size: Math.floor(Math.random() * 16) + 16,
      color: colors[Math.floor(Math.random() * colors.length)],
    });

    setFloatingIcons(Array.from({ length: 8 }, generateIcon));
  }, []);

  const scrollToRegistration = () => {
    const element = document.getElementById("register");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#f8f9ff] via-[#f0f4fa] to-[#ffffff] pattern-dots"
    >
      {/* Shooting stars */}
      {shootingStars.map((star) => (
        <div
          key={star.id}
          className="absolute h-[1px] w-[100px] rotate-45 overflow-hidden"
          style={{
            top: star.top,
            left: star.left,
            animation: `shootingStar ${star.duration}s linear ${star.delay}s infinite`,
          }}
        >
          <div
            className="h-[1px] w-full"
            style={{
              background: `linear-gradient(90deg, transparent, ${star.color}, transparent)`,
              boxShadow: `0 0 ${star.size}px ${star.color}`,
            }}
          ></div>
        </div>
      ))}

      {/* Glowing background elements */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-yellow-100/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl"></div>

      {/* Floating shapes */}
      <div className="floating-shape absolute top-[15%] left-[10%] w-16 h-16 bg-yellow-100/50 rounded-full backdrop-blur-md border border-yellow-200"></div>
      <div className="floating-shape absolute top-[25%] right-[15%] w-24 h-24 bg-purple-100/40 rounded-full backdrop-blur-md border border-purple-200"></div>

      {/* Main Container */}
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-8">
          {/* Left Side */}
          <div className="w-full lg:w-[45%] py-28 min-w-0">
            <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-700 px-6 py-2 rounded-full mb-8 shadow-sm border border-yellow-200">
              <Zap className="w-5 h-5 text-yellow-500" />
              <span className="text-sm font-bold tracking-wide font-sans">
                CITBIF's Innovation Challenge
              </span>
            </div>

            <img
              src="../../../assets/Deepsprint-logo.png"
              alt="DeepSprint 2025"
              className="h-auto w-full max-w-5xl mb-6 mx-auto block"
            />

            <p className="text-2xl md:text-3xl text-gray-700 mb-10 font-sans font-semibold">
              Innovate. Prototype. Hack. Pitch.
            </p>

            <div className="flex flex-row items-center gap-6 mb-10">
              <div className="flex items-center bg-white rounded-2xl shadow border border-gray-100 px-6 py-3 min-w-[250px]">
                <Calendar className="w-6 h-6 text-yellow-500 mr-3" />
                <span className="text-gray-800 text-lg font-semibold">
                  19th August 2025
                </span>
              </div>
              <div className="flex items-center bg-white rounded-2xl shadow border border-gray-100 px-6 py-3 min-w-[350px]">
                <MapPin className="w-6 h-6 text-purple-500 mr-3" />
                <span className="text-gray-800 text-lg font-semibold">
                  Chennai Institute of Technology
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
              <button
                onClick={scrollToRegistration}
                className="flex items-center justify-center px-10 py-5 text-xl rounded-2xl font-semibold text-white bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                Register Now
                <Users className="w-6 h-6 ml-3 text-white" />
              </button>
            </div>
          </div>

          {/* Right Side */}
         <div className="w-full lg:w-[45%] min-w-0 px-1 pr-12 ml-auto -translate-x-24 transition-transform duration-300">
          <TiledGallery />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
