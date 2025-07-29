import React from "react";
import { Trophy, Medal, Award, Rocket, GraduationCap } from "lucide-react";

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

const Prizes = () => {
  const prizes = [
    {
      icon: Trophy,
      title: "Winner",
      description: "Grant & 1,00,000 + Trophy + Certificate",
      rank: "🥇",
    },
    {
      icon: Medal,
      title: "Runner-Up",
      description: "Grant & 75,000 + Certificate",
      rank: "🥈",
    },
    {
      icon: Medal,
      title: "2nd Runner-Up",
      description: "Grant & 50,000 + Certificate",
      rank: "🥉",
    },
    {
      icon: Award,
      title: "Best Domain Innovations",
      description: "Special recognition for each domain",
      rank: "🏅",
    },
    {
      icon: Rocket,
      title: "Incubation Support",
      description: "Mentoring from StartupTN & Partners",
      rank: "🚀",
    },
    {
      icon: GraduationCap,
      title: "Participation Certificates",
      description: "Recognition for all participants",
      rank: "🎓",
    },
  ];

  return (
    <section id="prizes" className="py-20 bg-gradient-to-b from-[#ffffff] via-[#f8f9ff] to-[#f0f4fa] pattern-dots relative overflow-hidden">
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
            Prizes & <span className="text-[#0c0d5f]">Recognition</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Outstanding solutions deserve outstanding rewards. Win cash prizes,
            trophies, and opportunities that can transform your career.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-200 hover:-translate-y-2"
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{prize.rank}</div>
                <div>
                  <prize.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3 text-center">
                {prize.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-center">
                {prize.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl p-8 md:p-12 text-white flex flex-col items-center justify-center text-center">
          <Trophy className="w-16 h-16 mb-6" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Beyond Prizes: Real Impact
          </h3>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mb-6">
            Winners gain access to exclusive networking opportunities, and
            continued mentorship from industry leaders.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full justify-items-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center hover:bg-white/30 transition-all duration-300">
              <h4 className="text-lg font-semibold mb-2 flex items-center justify-center">
                Networking
              </h4>
              <p className="text-sm opacity-90 text-center">
                Connect with industry professionals
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center hover:bg-white/30 transition-all duration-300">
              <h4 className="text-lg font-semibold mb-2 flex items-center justify-center">
                Legal Support
              </h4>
              <p className="text-sm opacity-90 text-center">
                Patent , Trademark, Copyright, and More
              </p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center hover:bg-white/30 transition-all duration-300">
              <h4 className="text-lg font-semibold mb-2 flex items-center justify-center">
                Mentorship
              </h4>
              <p className="text-sm opacity-90 text-center">
                Continued guidance from experts
              </p>
            </div>
            {/* <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-2">Opportunities</h4>
              <p className="text-sm opacity-90">Job offers and internships</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
