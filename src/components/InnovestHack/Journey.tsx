import React from "react";
import { FileText, Filter, Video, CheckCircle, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const animationStyles = `
  .pattern-dots {
    background-image: radial-gradient(rgba(0, 0, 0, 0.1) 2px, transparent 2px);
    background-size: 30px 30px;
  }
  .floating-shape {
    animation: float 6s ease-in-out infinite;
  }
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
`;

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: (i = 1) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const phases = [
  {
    icon: FileText,
    title: "Registration Opens",
    description:
      "Submit team details along with chosen domain, problem statement, and proposed solution.",
    color: "from-blue-500 to-blue-600",
    date: "19/7/2025",
  },
  {
    icon: Filter,
    title: "Preliminary Shortlisting",
    description:
      "Top 100 entries will be selected based on identified problem, proposed solution, clarity, relevance, and innovation.",
    color: "from-purple-500 to-purple-600",
    date: "5/8/2025",
  },
  {
    icon: Video,
    title: "Online Review Round",
    description:
      "Selected ideas go through expert online screening and mentoring.",
    color: "from-green-500 to-green-600",
    date: "6/8/2025 – 11/8/2025",
  },
  {
    icon: CheckCircle,
    title: "Final Selection",
    description:
      "Around 30 top teams will be chosen for on-site hackathon participation.",
    color: "from-orange-500 to-orange-600",
    date: "12/8/2025",
  },
  {
    icon: Trophy,
    title: "Hackathon Day",
    description: "1-day onsite event at Chennai Institute of Technology.",
    color: "from-red-500 to-red-600",
    date: "19/8/2025",
  },
];

const Journey = () => {
  return (
    <section
      id="journey"
      className="py-20 bg-gradient-to-b from-[#f0f4fa] via-[#f8f9ff] to-[#ffffff] pattern-dots relative overflow-hidden"
    >
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />

      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-yellow-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">
            Hackathon <span className="text-[#0c0d5f]">Journey</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From idea to implementation — follow the complete journey to
            InnovestHack 2025. Each step is designed to refine your concept and
            prepare you for the ultimate challenge.
          </p>
        </div>

        <div className="overflow-x-scroll no-scrollbar">
          <div className="relative flex gap-12 justify-start items-start px-6 pb-6 min-w-[1000px] scroll-smooth scroll-px-6 snap-x snap-mandatory">
            <div className="absolute top-[4.3rem] left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 z-0" />

            {phases.map((phase, index) => (
              <motion.div
                key={index}
                className="relative z-10 flex flex-col items-center w-64 shrink-0 text-center snap-start"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={slideInLeft}
              >
                <div className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white font-semibold text-sm px-4 py-2 rounded-xl shadow-md border-2 border-yellow-300 animate-pulse">
                  {phase.date}
                </div>
                <div className={`w-16 h-16 mb-4 bg-gradient-to-r ${phase.color} rounded-full flex items-center justify-center shadow-lg z-10`}>
                  <phase.icon className="w-9 h-9 text-white" />
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 hover:shadow-lg hover:border-yellow-200 transition-all duration-300 mb-4">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
