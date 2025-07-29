import React from "react";
import { Mail, Phone, MapPin, Globe, MessageCircle } from "lucide-react";

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

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "citbif@citchennai.net",
      color: "from-yellow-500 to-amber-500",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 99424 09311, +91 89256 50670",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Chennai Institute of Technology, Chennai",
      color: "from-yellow-400 to-yellow-500",
    },
    {
      icon: Globe,
      title: "Website",
      content: "https://www.citchennai.edu.in/",
      color: "from-purple-500 to-purple-700",
    },
  ];

  const socialLinks = [
    { name: "LinkedIn", url: "#", icon: "linkedin" },
    { name: "Twitter", url: "#", icon: "twitter" },
    { name: "Instagram", url: "#", icon: "instagram" },
    { name: "Facebook", url: "#", icon: "facebook" },
  ];

  return (
    <section
      id="contact"
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
            Get In <span className="text-[#0c0d5f]">Touch</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Have questions or need support? We're here to help you succeed in
            your innovation journey. Reach out to our team anytime.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-200 text-center"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
                >
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-slate-600 text-sm">{info.content}</p>
              </div>
            ))}
          </div>

          {/*<div className="mt-12 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl p-8 md:p-12 text-white text-center relative overflow-hidden">
            {/* Decorative elements */}
          {/* <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div> */}

          {/* <h3 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">
              Ready to Join the Innovation Revolution?
            </h3>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-6 relative z-10">
              Don't miss out on this opportunity to showcase your skills, learn
              from industry experts, and potentially launch your tech career to
              new heights.
            </p>
            <button className="inline-flex items-center space-x-2 bg-white text-yellow-500 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 relative z-10">
              <span>Register Today</span>
              <Mail className="w-5 h-5" />
            </button> */}
          {/*</div>*/}
        </div>
      </div>
    </section>
  );
};

export default Contact;
