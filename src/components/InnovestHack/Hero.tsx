import React, { useEffect, useState } from "react";
import {
  Calendar,
  MapPin,
  Users,
  Zap,
  Award,
  Lightbulb,
  Shield,
} from "lucide-react";
// import Head from "next/head";
// No need for Image import as we're using standard img tag

const Hero = () => {
  // State for shooting stars
  const [shootingStars, setShootingStars] = useState<
    Array<{
      id: number;
      top: string;
      left: string;
      size: number;
      duration: number;
      delay: number;
      color: string;
    }>
  >([]);

  // State for floating icons
  const [floatingIcons, setFloatingIcons] = useState<
    Array<{
      id: number;
      top: string;
      left: string;
      icon: string;
      animation: string;
      size: number;
      color: string;
    }>
  >([]);

  // Generate shooting stars
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

    // Initial stars
    setShootingStars(Array.from({ length: 15 }, generateStar));

    // Add new stars periodically
    const interval = setInterval(() => {
      setShootingStars((prev) => [...prev.slice(-20), generateStar()]);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  // Generate floating tech icons
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
  // Images array for slideshow
  const images = [
    "../../../assest/cit-1.jpg",
    "../../../assest/cit-2.jpeg",
    "../../../assest/cit-3.jpg",
    "../../../assest/cit-4.jpeg",
  ];

  // State for current image
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Image slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, []);
  // CSS for animations
  const animationStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&display=swap');
    
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
    
    @keyframes shimmer {
      0% { text-shadow: 0 0 0 rgba(255,165,0,0); }
      50% { text-shadow: 0 0 10px rgba(255,165,0,0.5); }
      100% { text-shadow: 0 0 0 rgba(255,165,0,0); }
    }
    
    @keyframes fadeIn {
      0% { opacity: 0; transform: scale(1.05); }
      100% { opacity: 1; transform: scale(1); }
    }
    
    @keyframes slideIndicator {
      0% { transform: scale(1); }
      50% { transform: scale(1.5); }
      100% { transform: scale(1); }
    }

    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    @keyframes textFocusIn {
      0% { filter: blur(12px); opacity: 0; }
      100% { filter: blur(0px); opacity: 1; }
    }
    
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
      100% { transform: translateY(0px); }
    }
    
    @keyframes shootingStar {
      0% {
        transform: translateX(0) translateY(0) rotate(45deg);
        opacity: 1;
      }
      70% {
        opacity: 1;
      }
      100% {
        transform: translateX(1000px) translateY(1000px) rotate(45deg);
        opacity: 0;
      }
    }
    
    @keyframes wave {
      0%, 100% { transform: translateY(0); }
      25% { transform: translateY(-15px); }
      75% { transform: translateY(15px); }
    }
    
    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }
    
    .pattern-grid {
      background-image: radial-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px);
      background-size: 20px 20px;
    }
    
    .pattern-dots {
      background-image: radial-gradient(rgba(0, 0, 0, 0.1) 2px, transparent 2px);
      background-size: 30px 30px;
    }
  `;

  const scrollToRegistration = () => {
    const element = document.getElementById("register");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation for floating shapes
  useEffect(() => {
    const shapes = document.querySelectorAll(".floating-shape");

    shapes.forEach((shape) => {
      const speed = 3 + Math.random() * 5;
      const rotation = Math.random() * 10;
      const startX = Math.random() * 10 - 5;
      const startY = Math.random() * 10 - 5;

      let animationFrameId: number;
      let time = 0;

      const animate = () => {
        time += 0.005;
        const element = shape as HTMLElement;

        // Create gentle floating motion
        const translateX = startX + Math.sin(time * speed) * 15;
        const translateY = startY + Math.cos(time * speed) * 15;
        const rotate = Math.sin(time) * rotation;

        element.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`;

        animationFrameId = requestAnimationFrame(animate);
      };

      animate();

      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    });
  }, []);

  return (
    <>
      {/* <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head> */}
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />
      <section
        id="hero"
        className="relative pt-24 min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#f8f9ff] via-[#f0f4fa] to-[#ffffff] pattern-dots"
      >
        {/* Enhanced background elements with animated shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
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

          {/* Animated floating shapes */}
          <div className="floating-shape absolute top-[15%] left-[10%] w-16 h-16 bg-yellow-100/50 rounded-full backdrop-blur-md border border-yellow-200"></div>
          <div className="floating-shape absolute top-[25%] right-[15%] w-24 h-24 bg-purple-100/40 rounded-full backdrop-blur-md border border-purple-200"></div>
          <div className="floating-shape absolute bottom-[30%] left-[20%] w-20 h-20 bg-yellow-100/50 rounded-md rotate-45 backdrop-blur-md border border-yellow-200"></div>
          <div className="floating-shape absolute top-[60%] right-[25%] w-12 h-12 bg-purple-100/40 rounded-md rotate-12 backdrop-blur-md border border-purple-200"></div>
          <div className="floating-shape absolute bottom-[15%] left-[40%] w-16 h-16 bg-yellow-100/50 rounded-full backdrop-blur-md border border-yellow-200"></div>
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            {/* Left: Content */}
            <div className="flex-1 max-w-2xl">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-700 px-5 py-1.5 rounded-full mb-6 shadow-sm border border-yellow-200">
                <Zap className="w-4 h-4 text-yellow-500" />
                <span className="text-xs font-semibold tracking-wide font-sans">
                  CITBIF's Innovation Challenge
                </span>
              </div>

              {/* Main Title */}
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 font-serif">
                <span style={{ display: "inline-flex", alignItems: "center" }}>
                  <span
                    className="text-[#0c0d5f]"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 900,
                      letterSpacing: "-1px",
                      animation:
                        "textFocusIn 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both, pulse 2s ease-in-out infinite",
                    }}
                  >
                    Deep
                  </span>
                  <span
                    className="text-yellow-500"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 900,
                      letterSpacing: "-1px",
                      animation:
                        "textFocusIn 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both, shimmer 3s ease-in-out infinite",
                    }}
                  >
                    Sprint
                  </span>
                </span>
                <span
                  className="block text-purple-700 text-2xl md:text-3xl font-medium mt-2 font-sans"
                  style={{
                    animation: "float 3s ease-in-out infinite",
                  }}
                >
                  2025
                </span>
              </h1>

              {/* Tagline */}
              <p className="text-lg md:text-xl text-gray-600 mb-8 font-sans">
                Innovate. Prototype. Hack. Pitch.
              </p>

              {/* Event Details */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
                <div className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-xl shadow-sm border border-gray-100">
                  <Calendar className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-700 text-sm font-medium font-sans">
                    19th July 2025
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-xl shadow-sm border border-gray-100">
                  <MapPin className="w-5 h-5 text-purple-500" />
                  <span className="text-gray-700 text-sm font-medium font-sans">
                    Chennai Institute of Technology
                  </span>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={scrollToRegistration}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-8 py-3.5 rounded-xl text-base font-semibold shadow-lg hover:shadow-yellow-200 hover:scale-105 transition-all duration-300 font-sans"
              >
                <span>Register Now</span>
                <Users className="w-5 h-5" />
              </button>
            </div>

            {/* Right: Hero Image */}
            <div className="flex-1 flex items-center justify-center">
              <div className="relative w-full max-w-md">
                {/* Main image with enhanced styling */}
                <div className="relative z-10 w-full aspect-square rounded-xl shadow-xl overflow-hidden border border-yellow-200">
                  {/* Image slideshow */}
                  <div className="absolute inset-0 w-full h-full">
                    {images.map((src, index) => (
                      <div
                        key={src}
                        className="absolute inset-0 w-full h-full"
                        style={{
                          opacity: index === currentImageIndex ? 1 : 0,
                          transition: "opacity 0.5s ease-in-out",
                          animation:
                            index === currentImageIndex
                              ? "fadeIn 0.5s ease-in-out"
                              : "none",
                        }}
                      >
                        <img
                          src={src}
                          alt="Chennai Institute of Technology"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Overlay with text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-black/10 backdrop-blur-[2px] flex items-center justify-center p-8 z-10">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-4">
                        <span
                          className="text-5xl font-bold text-white"
                          style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontWeight: 900,
                            letterSpacing: "-1px",
                            animation:
                              "textFocusIn 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both, pulse 2s ease-in-out infinite",
                          }}
                        >
                          Deep
                        </span>
                        <span
                          className="text-5xl font-bold text-yellow-500"
                          style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontWeight: 900,
                            letterSpacing: "-1px",
                            animation:
                              "textFocusIn 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both, shimmer 3s ease-in-out infinite",
                          }}
                        >
                          Sprint
                        </span>
                      </div>
                      <div
                        className="text-yellow-300 text-xl font-sans"
                        style={{
                          animation: "float 3s ease-in-out infinite",
                        }}
                      >
                        2025
                      </div>
                    </div>
                  </div>

                  {/* Image indicators */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                    {images.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex
                            ? "bg-yellow-300 w-4"
                            : "bg-white/50"
                        }`}
                        style={{
                          animation:
                            index === currentImageIndex
                              ? "slideIndicator 2s ease-in-out infinite"
                              : "none",
                        }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-100 rounded-full blur-md"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-100 rounded-full blur-md"></div>
              </div>
            </div>
          </div>

          {/* Quick Stats - Redesigned as cards */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 transition-all hover:shadow-md hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="bg-yellow-100 p-2 rounded-lg">
                  <Lightbulb className="w-5 h-5 text-yellow-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-500 font-serif">
                    9
                  </div>
                  <div className="text-gray-600 text-sm font-sans">
                    Tech Domains
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 transition-all hover:shadow-md hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="bg-gray-100 p-2 rounded-lg">
                  <Calendar className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-600 font-serif">
                    1
                  </div>
                  <div className="text-gray-600 text-sm font-sans">
                    Intensive Day
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 transition-all hover:shadow-md hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Users className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-500 font-serif">
                    7
                  </div>
                  <div className="text-gray-600 text-sm font-sans">
                    Industry Mentors
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 transition-all hover:shadow-md hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="bg-yellow-100 p-2 rounded-lg">
                  <Award className="w-5 h-5 text-yellow-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-500 font-serif">
                    ₹2.25L
                  </div>
                  <div className="text-gray-600 text-sm font-sans">Grant</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 transition-all hover:shadow-md hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Shield className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-500 font-serif">
                    10
                  </div>
                  <div className="text-gray-600 text-sm font-sans">
                    Top 10 Teams Get Incubation Support
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 transition-all hover:shadow-md hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="bg-yellow-100 p-2 rounded-lg">
                  <Users className="w-5 h-5 text-yellow-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-500 font-serif">
                    10
                  </div>
                  <div className="text-gray-600 text-sm font-sans">
                    Top 10 Teams Get Mentorship Support
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 transition-all hover:shadow-md hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Shield className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-500 font-serif">
                    10
                  </div>
                  <div className="text-gray-600 text-sm font-sans">
                    Top 10 Teams Get IP Support
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 transition-all hover:shadow-md hover:bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="bg-amber-100 p-2 rounded-lg">
                  <Award className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-500 font-serif">
                    All
                  </div>
                  <div className="text-gray-600 text-sm font-sans">
                    Teams Get Certificates
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
