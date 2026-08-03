import React, { useState, useEffect } from "react";
import {
  Bot,
  Factory,
  Brain,
  Shield,
  Rocket,
  Wifi,
  Vegan,
  Bolt,
  Briefcase as Medical,
  X,
} from "lucide-react";

const Domains = () => {
  // State for animated elements
  const [isVisible, setIsVisible] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState<number | null>(null);

  // Animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const domainsSection = document.getElementById("domains");
      if (domainsSection) {
        const rect = domainsSection.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.75;
        setIsVisible(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Domain details with extended descriptions for modal
  const domains = [
    {
      icon: Bot,
      name: "Robotics & Automation",
      description: "Autonomous systems and intelligent machines",
      color: "from-yellow-400 to-yellow-500",
      detailedDescription: "Develop cutting-edge robotic systems and automation solutions that can revolutionize industries. Focus areas include autonomous navigation, robotic manipulation, human-robot interaction, swarm robotics, and industrial automation systems that enhance efficiency and safety in various environments.",
      keyAreas: ["Autonomous Navigation", "Robotic Manipulation", "Human-Robot Interaction", "Swarm Robotics", "Industrial Automation"]
    },
    {
      icon: Factory,
      name: "Advanced Manufacturing",
      description: "CNC, additive manufacturing, Industry 4.0, smart factories",
      color: "from-purple-400 to-purple-600",
      detailedDescription: "Transform traditional manufacturing with digital technologies and smart systems. Explore additive manufacturing (3D printing), digital twins, smart factory solutions, predictive maintenance, and other Industry 4.0 technologies that are reshaping how products are designed, produced, and maintained.",
      keyAreas: ["Additive Manufacturing", "Digital Twins", "Smart Factories", "Predictive Maintenance", "Supply Chain Optimization"]
    },
    {
      icon: Brain,
      name: "Artificial Intelligence",
      description: "Intelligent edge computing and ML integration",
      color: "from-yellow-400 to-amber-500",
      detailedDescription: "Harness the power of AI to solve complex problems across industries. Focus on machine learning algorithms, computer vision, natural language processing, edge AI deployment, and AI ethics to create intelligent systems that can learn, adapt, and make decisions with minimal human intervention.",
      keyAreas: ["Machine Learning", "Computer Vision", "Natural Language Processing", "Edge AI", "AI Ethics"]
    },
    {
      icon: Shield,
      name: "Defense & Space Tech",
      description: "Security systems and tactical technologies",
      color: "from-purple-500 to-purple-700",
      detailedDescription: "Develop technologies for national security and space exploration. This domain covers cybersecurity, surveillance systems, communication networks, satellite technologies, and other innovations that enhance defense capabilities and enable space missions.",
      keyAreas: ["Cybersecurity", "Surveillance Systems", "Tactical Communications", "Satellite Technologies", "Space Exploration"]
    },
    {
      icon: Rocket,
      name: "Electronics & Embedded Systems",
      description: "Satellite systems and space-grade components",
      color: "from-yellow-500 to-amber-600",
      detailedDescription: "Design and build electronic systems that power modern devices and infrastructure. Focus on embedded programming, PCB design, FPGA development, sensor integration, and low-power electronics for applications ranging from consumer devices to industrial equipment.",
      keyAreas: ["Embedded Programming", "PCB Design", "FPGA Development", "Sensor Integration", "Low-Power Electronics"]
    },
    {
      icon: Wifi,
      name: "IoT & IIoT",
      description: "Connected devices and smart ecosystems",
      color: "from-purple-400 to-purple-600",
      detailedDescription: "Create interconnected systems that collect, analyze, and act on data from the physical world. Explore sensor networks, IoT protocols, edge computing, data analytics, and cloud integration to build smart environments for homes, cities, and industries.",
      keyAreas: ["Sensor Networks", "IoT Protocols", "Edge Computing", "Data Analytics", "Cloud Integration"]
    },
    {
      icon: Vegan,
      name: "Sustainability & Green Tech",
      description: "Renewable energy and eco-friendly innovations",
      color: "from-yellow-400 to-yellow-500",
      detailedDescription: "Develop solutions that address environmental challenges and promote sustainability. Focus on renewable energy systems, waste management, resource optimization, circular economy models, and other green technologies that reduce environmental impact and promote sustainable development.",
      keyAreas: ["Renewable Energy", "Waste Management", "Resource Optimization", "Circular Economy", "Carbon Footprint Reduction"]
    },
    {
      icon: Bolt,
      name: "VLSI & Semiconductor Tech",
      description: "Advanced chip design and fabrication",
      color: "from-purple-500 to-purple-700",
      detailedDescription: "Design and optimize integrated circuits and semiconductor technologies that power modern electronics. Explore VLSI design, chip architecture, semiconductor fabrication, power optimization, and emerging materials to push the boundaries of computing performance and efficiency.",
      keyAreas: ["VLSI Design", "Chip Architecture", "Semiconductor Fabrication", "Power Optimization", "Emerging Materials"]
    },
    {
      icon: Medical,
      name: "Biomedical & Healthcare Tech",
      description: "Wearable health tech, diagnostic systems, medtech innovation",
      color: "from-yellow-500 to-amber-600",
      detailedDescription: "Create technologies that improve healthcare delivery and patient outcomes. Focus on medical devices, diagnostic systems, health monitoring, telemedicine, and other innovations that enhance disease detection, treatment, and management while improving accessibility and affordability of healthcare.",
      keyAreas: ["Medical Devices", "Diagnostic Systems", "Health Monitoring", "Telemedicine", "Assistive Technologies"]
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
    
    @keyframes modalFadeIn {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
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
      id="domains" 
      className="py-20 bg-gradient-to-b from-[#ffffff] via-[#f8f9ff] to-[#f0f4fa] pattern-dots relative overflow-hidden"
    >
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />
      
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 right-1/4 w-72 h-72 bg-yellow-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl"></div>
        
        {/* Animated floating shapes */}
        <div className="floating-shape absolute top-[65%] left-[5%] w-16 h-16 bg-yellow-100/40 rounded-full backdrop-blur-md border border-yellow-200"></div>
        <div className="floating-shape absolute top-[15%] right-[5%] w-24 h-24 bg-purple-100/30 rounded-full backdrop-blur-md border border-purple-200"></div>
        <div className="floating-shape absolute bottom-[10%] right-[20%] w-20 h-20 bg-yellow-100/40 rounded-md rotate-45 backdrop-blur-md border border-yellow-200"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          className={`text-center mb-16 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            transition: 'all 0.8s ease-out',
            animation: isVisible ? 'scaleIn 0.8s ease-out forwards' : 'none'
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">
            Innovation <span className="text-[#0c0d5f]">Domains</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose your battlefield and build solutions that matter. Each domain
            offers unique challenges and opportunities to showcase your
            technical prowess.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((domain, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-200 hover:-translate-y-2"
              style={{ 
                animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.1}s forwards` : 'none',
                opacity: 0
              }}
              onClick={() => setSelectedDomain(index)}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${domain.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <domain.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {domain.name}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {domain.description}
              </p>
              <div className="mt-6 flex items-center text-yellow-500 font-medium group-hover:text-yellow-600 transition-colors duration-200 cursor-pointer">
                <span className="text-sm">Explore Domain</span>
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div 
          className="mt-16 text-center"
          style={{ 
            animation: isVisible ? 'fadeInUp 0.6s ease-out 0.5s forwards' : 'none',
            opacity: 0
          }}
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-6 py-3 rounded-full">
            <Brain className="w-5 h-5" />
            <span className="font-medium">
              Cross-domain collaboration encouraged
            </span>
          </div>
        </div>
      </div>

      {/* Modal for domain details */}
      {selectedDomain !== null && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div 
            className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            style={{ animation: 'modalFadeIn 0.3s ease-out forwards' }}
          >
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${domains[selectedDomain].color} rounded-lg flex items-center justify-center`}>
                    {(() => {
                      const Icon = domains[selectedDomain].icon;
                      return <Icon className="w-6 h-6 text-white" />;
                    })()}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{domains[selectedDomain].name}</h3>
                </div>
                <button 
                  onClick={() => setSelectedDomain(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-slate-800 mb-2">Overview</h4>
                <p className="text-slate-600">{domains[selectedDomain].detailedDescription}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-slate-800 mb-2">Key Focus Areas</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {domains[selectedDomain].keyAreas.map((area, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <span className="text-slate-600">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8 flex justify-end">
                <button 
                  onClick={() => setSelectedDomain(null)}
                  className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-amber-500 text-white rounded-lg hover:shadow-md transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Domains;