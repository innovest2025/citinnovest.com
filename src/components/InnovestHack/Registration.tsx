import React from "react";
import { Users, Calendar, CheckCircle, ExternalLink } from "lucide-react";

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

const Registration = () => {
  const requirements = [
    {
      icon: Users,
      title: "Eligibility",
      description: "College students from any discipline",
      color: "from-yellow-500 to-amber-500",
    },
    {
      icon: Users,
      title: "Team Size",
      description: "Maximum 4 members per team",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: CheckCircle,
      title: "Selection Process",
      description: "Based on innovation and feasibility",
      color: "from-yellow-400 to-yellow-500",
    },
  ];

  const handleRegister = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdtrK7hqgUEGfDnP_03PKnShTZH05C5tLzmvIJ53F3pMFhmuw/viewform",
      "_blank"
    );
  };

  return (
    <section
      id="register"
      className="py-20 bg-gradient-to-b from-[#ffffff] via-[#f8f9ff] to-[#f0f4fa] pattern-dots relative overflow-hidden"
    >
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />

      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 right-1/4 w-72 h-72 bg-yellow-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl"></div>

        {/* Animated floating shapes */}
        <div className="floating-shape absolute top-[65%] right-[5%] w-16 h-16 bg-yellow-100/40 rounded-full backdrop-blur-md border border-yellow-200"></div>
        <div className="floating-shape absolute top-[15%] left-[5%] w-24 h-24 bg-purple-100/30 rounded-full backdrop-blur-md border border-purple-200"></div>
        <div className="floating-shape absolute bottom-[10%] left-[20%] w-20 h-20 bg-yellow-100/40 rounded-md rotate-45 backdrop-blur-md border border-yellow-200"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">
            Register <span className="text-[#0c0d5f]">Now</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Secure your spot in India's most innovative hackathon. Limited seats
            available for the most ambitious tech minds.
          </p>
        </div>

        {/* Centered and organized requirements cards grid */}
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 justify-items-center items-center">
          {requirements.map((req, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-200 text-center flex flex-col items-center"
            >
              <div
                className={`w-14 h-14 bg-gradient-to-r ${req.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
              >
                <req.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {req.title}
              </h3>
              <p className="text-slate-600 text-sm">{req.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Ready to Transform Your Ideas?
              </h3>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Join fellow innovators in building solutions that matter. Your
                journey to tech excellence starts here.
              </p>
            </div>

            <button
              onClick={handleRegister}
              className="w-full bg-gradient-to-r from-yellow-500 to-amber-500 text-white py-4 px-8 rounded-xl text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 shadow-md flex items-center justify-center space-x-2"
            >
              <span>Register Your Team</span>
              <ExternalLink className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
