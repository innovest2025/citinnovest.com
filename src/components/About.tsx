import React, { useState, useEffect, useRef } from "react";
import { Target, Lightbulb, Users, Award, Zap } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleFeatures, setVisibleFeatures] = useState<boolean[]>([]);
  const [animatedStats, setAnimatedStats] = useState({
    funding: 0,
    partnerships: 0,
  });
  const aboutRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Our Mission",
      description:
        "To create a platform where innovative ideas meet strategic investments, fostering the next generation of breakthrough technologies and sustainable solutions.",
      color: "from-blue-500 to-purple-600",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation Focus",
      description:
        "Showcasing cutting-edge technologies in AI, IoT, Blockchain, Sustainable Energy, and emerging tech sectors that will shape our future.",
      color: "from-yellow-500 to-orange-600",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Networking Hub",
      description:
        "Connect with industry leaders, successful entrepreneurs, venture capitalists, and fellow innovators in an environment designed for meaningful collaborations.",
      color: "from-green-500 to-teal-600",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Recognition Platform",
      description:
        "Celebrate and reward outstanding innovations through our prestigious awards program, recognizing excellence across multiple categories.",
      color: "from-pink-500 to-red-600",
    },
  ];

  // Animated counter for statistics
  const animateValue = (
    start: number,
    end: number,
    duration: number,
    callback: (value: number) => void,
  ) => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      callback(value);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === aboutRef.current && entry.isIntersecting) {
            setIsVisible(true);
          }
          if (entry.target === featuresRef.current && entry.isIntersecting) {
            // Show all cards at once
            const newVisible = new Array(features.length).fill(true);
            setVisibleFeatures(newVisible);
          }
          if (entry.target === statsRef.current && entry.isIntersecting) {
            // Animate statistics
            setTimeout(() => {
              animateValue(0, 20, 2000, (value) => {
                setAnimatedStats((prev) => ({ ...prev, funding: value }));
              });
            }, 500);
            setTimeout(() => {
              animateValue(0, 200, 2500, (value) => {
                setAnimatedStats((prev) => ({ ...prev, partnerships: value }));
              });
            }, 800);
          }
        });
      },
      { threshold: 0.1 },
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (featuresRef.current) observer.observe(featuresRef.current);
    if (statsRef.current) observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {/* cit chenbnai about */}
        <div ref={aboutRef} className="text-center mb-16">
          
          
          
        </div>
        {/* about citbif */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About{" "}
            <span className="text-orange-500">
              Chennai Institute of Technology
            </span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Chennai Institute of Technology was established with the objective
            of providing quality technical education with adequate industrial
            exposure than any other engineering colleges in Chennai. Apart from
            interactive classroom scenario, periodic guest lectures by experts
            from industries and academic background provides thirst to the
            students to learn and to prepare for the ready-to-serve industrial
            requirements with uncompromised professional ethics.
          </p>
        </div>

        {/* Main Content */}
        <div
          className={`grid lg:grid-cols-2 gap-16 items-center mb-20 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 animate-in slide-in-from-left duration-800 delay-500 relative">
              <span className="relative z-10">Innovest offers</span>
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-orange-500 to-red-500 transform scale-y-0 animate-in slide-in-from-top duration-1000 delay-700 origin-top"></div>
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed animate-in slide-in-from-left duration-800 delay-700 hover:text-gray-800 transition-colors duration-300">
              Since its inception, Innovest has been at the forefront of
              fostering innovation and facilitating meaningful connections
              between entrepreneurs and investors. Our summit serves as a
              catalyst for groundbreaking collaborations that drive
              technological advancement and economic growth.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed animate-in slide-in-from-left duration-800 delay-900 hover:text-gray-800 transition-colors duration-300">
              This year, we're expanding our focus to include sustainable
              technologies, digital transformation, and emerging markets,
              ensuring that innovation serves not just business interests but
              also contributes to a better, more sustainable future for all.
            </p>

            {/* Key Statistics */}
            <div ref={statsRef} className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-white to-orange- rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-in slide-in-from-bottom duration-800 delay-1100 group border border-orange-100">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2 animate-in zoom-in duration-600 delay-1200 group-hover:animate-pulse">
                  ₹{animatedStats.funding}L+
                </div>
                <div className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  Total Funding Facilitated
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105  animate-in slide-in-from-bottom duration-800 delay-1100 group border border-green-100">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600 mb-2 animate-in zoom-in duration-600 delay-1300 group-hover:animate-pulse">
                  {animatedStats.partnerships}+
                </div>
                <div className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  Successful Partnerships
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

          <div className="relative animate-in slide-in-from-right duration-1000 delay-600">
            <div className="bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 rounded-3xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden group">
              {/* Animated background elements */}
              <div className="absolute inset-0 bg-gradient-to-br   opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white opacity-5 rounded-full animate-ping group-hover:animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 opacity-10 rounded-full animate-pulse group-hover:animate-bounce"></div>

              <h4 className="text-2xl font-bold mb-6 animate-in slide-in-from-top duration-600 delay-800 relative z-10 group-hover:text-orange-200 transition-colors duration-300">
                Why Attend Innovest 2025?
                <Zap className="inline-block ml-2 h-6 w-6 text-orange-400 animate-pulse" />
              </h4>
              <ul className="space-y-4 relative z-10">
                {[
                  "Access to exclusive investor networks and funding opportunities",
                  "Learn from industry leaders and successful entrepreneurs",
                  "Showcase your innovations to a global audience",
                  "Network with like-minded innovators and thought leaders",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-3 animate-in slide-in-from-left duration-600 group/item hover:translate-x-2 transition-transform duration-300"
                    style={{ animationDelay: `${1000 + index * 200}ms` }}
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mt-2 flex-shrink-0 animate-pulse group-hover/item:animate-bounce"></div>
                    <span className="hover:text-orange-200 transition-colors duration-300 group-hover/item:font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div
          ref={featuresRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-6 shadow-md border border-gray-200 transition-all duration-300 hover:shadow-lg group relative ${
                visibleFeatures[index]
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{
                transitionDelay: "0ms",
              }}
            >
              {/* Hover overlay with #feefd2 tint */}
              <div className="absolute inset-0 bg-yellow-100 rounded-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="text-orange-500 mb-4 inline-block p-3 rounded-lg bg-orange-50 group-hover:bg-orange-200 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-700 transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(1deg); }
          50% { transform: translateY(-5px) rotate(-1deg); }
          75% { transform: translateY(-15px) rotate(0.5deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
};

export default About;
