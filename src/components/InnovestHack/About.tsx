import React, { useEffect, useState } from "react";
import { Target, Users, Lightbulb, Award, Zap, Code, Rocket } from "lucide-react";

const About = () => {
  // State for animated elements
  const [isVisible, setIsVisible] = useState(false);

  // Animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.75;
        setIsVisible(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: Target,
      title: "Real-World Challenges",
      description: "Tackle authentic problems across cutting-edge tech domains",
      color: "from-yellow-400 to-yellow-500",
      delay: 0,
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Get guidance from industry leaders and technical experts",
      color: "from-purple-400 to-purple-600",
      delay: 0.1,
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description:
        "Push boundaries with creative solutions and new technologies",
      color: "from-yellow-400 to-amber-500",
      delay: 0.2,
    },
    {
      icon: Award,
      title: "Recognition & Growth",
      description: "Pitch to industry jury and win exciting prizes",
      color: "from-purple-500 to-purple-700",
      delay: 0.3,
    },
  ];

  // Animation styles
  const animationStyles = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes scaleIn {
      from {
        opacity: 0;
        transform: scale(0.9);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    
    @keyframes borderPulse {
      0%, 100% {
        border-color: rgba(255, 255, 255, 0.2);
      }
      50% {
        border-color: rgba(255, 255, 255, 0.5);
      }
    }
    
    .pattern-dots {
      background-image: radial-gradient(rgba(0, 0, 0, 0.1) 2px, transparent 2px);
      background-size: 30px 30px;
    }
    
    .floating-shape {
      animation: float 6s ease-in-out infinite;
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
  `;

  return (
    <section 
      id="about" 
      className="py-20 bg-gradient-to-b from-[#ffffff] via-[#f8f9ff] to-[#f0f4fa] pattern-dots relative overflow-hidden"
    >
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-yellow-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl"></div>
        
        {/* Animated floating shapes */}
        <div className="floating-shape absolute top-[15%] left-[10%] w-16 h-16 bg-yellow-100/40 rounded-full backdrop-blur-md border border-yellow-200"></div>
        <div className="floating-shape absolute top-[25%] right-[15%] w-24 h-24 bg-purple-100/30 rounded-full backdrop-blur-md border border-purple-200"></div>
        <div className="floating-shape absolute bottom-[30%] left-[20%] w-20 h-20 bg-yellow-100/40 rounded-md rotate-45 backdrop-blur-md border border-yellow-200"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className={`max-w-4xl mx-auto text-center mb-16 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            transition: 'all 0.8s ease-out',
            animation: isVisible ? 'scaleIn 0.8s ease-out forwards' : 'none'
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">
            About
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            <span 
              className="bg-gradient-to-r from-[#0c0d5f] to-[#0c0d5f] bg-clip-text text-transparent"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900 }}
            >
              Deep
            </span>
            <span 
              className="bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900 }}
            >
              Sprint
            </span>
            <span className="text-purple-700"> 2025</span>
          </h1>

          <p className="text-xl text-slate-600 leading-relaxed">
            A high-intensity, 1-day innovation challenge designed for college
            students to build working solutions in futuristic tech domains.
            Experience the thrill of rapid prototyping, expert mentorship, and
            competitive pitching in one action-packed day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-200"
              style={{ 
                animation: isVisible ? `fadeInUp 0.6s ease-out ${feature.delay}s forwards` : 'none',
                opacity: 0
              }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default About;