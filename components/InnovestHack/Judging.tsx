import React from "react";
import {
  Lightbulb,
  Target,
  Cog,
  TrendingUp,
  MessageSquare,
} from "lucide-react";

// Animation styles
const animationStyles = `
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

const Judging = () => {
  const criteria = [
    {
      icon: Lightbulb,
      title: "Innovation & Originality",
      description: "Uniqueness of approach and creative problem-solving",
      weight: "25%",
      color: "from-yellow-500 to-amber-500",
    },
    {
      icon: Target,
      title: "Domain Relevance",
      description: "Alignment with chosen tech domain and problem statement",
      weight: "20%",
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: Cog,
      title: "Technical Execution",
      description: "Quality of implementation and technical complexity",
      weight: "25%",
      color: "from-yellow-400 to-yellow-500",
    },
    {
      icon: TrendingUp,
      title: "Feasibility & Scalability",
      description: "Real-world applicability and potential for growth",
      weight: "20%",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: MessageSquare,
      title: "Presentation & Communication",
      description: "Clarity of pitch and demonstration effectiveness",
      weight: "10%",
      color: "from-yellow-500 to-amber-600",
    },
  ];

  return (
    <section
      id="judging"
      className="py-20 bg-gradient-to-b from-[#f0f4fa] via-[#f8f9ff] to-[#ffffff] pattern-dots relative overflow-hidden"
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">
            Judging <span className="text-[#0c0d5f]">Criteria</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Fair and comprehensive evaluation by industry experts. Your
            innovation will be assessed across multiple dimensions to ensure the
            best solutions win.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {criteria.map((criterion, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-200 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-6">
                <div
                  className={`w-14 h-14 bg-gradient-to-r ${criterion.color} rounded-xl flex items-center justify-center`}
                >
                  <criterion.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-slate-900">
                    {criterion.weight}
                  </span>
                  <p className="text-sm text-slate-500">Weight</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {criterion.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {criterion.description}
              </p>
            </div>
          ))}
        </div>

        {/* <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Meet Your Jury Panel
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Industry veterans, technical experts, and startup founders will evaluate your solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Industry Experts</h4>
              <p className="text-slate-600">Senior professionals from our partner companies</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cog className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Technical Leaders</h4>
              <p className="text-slate-600">CTOs and engineering heads from tech companies</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-2">Startup Founders</h4>
              <p className="text-slate-600">Successful entrepreneurs and venture capitalists</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Judging;
