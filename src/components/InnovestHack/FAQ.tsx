import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who can participate in TechFront 2025?",
      answer:
        "Any college student from any discipline can participate. We welcome diverse perspectives and backgrounds as innovation comes from interdisciplinary collaboration.",
    },
    {
      question: "What is the team size requirement?",
      answer:
        "Teams can have a maximum of 4 members. You can also participate as a solo participant or form smaller teams of 2-3 members.",
    },
    {
      question: "Do I need to bring my own hardware?",
      answer:
        "Yes, participants are expected to bring their own laptops and any specific hardware required for their projects. Basic development tools and internet access will be provided.",
    },
    {
      question: "Is there internet access available?",
      answer:
        "Yes, high-speed internet will be provided throughout the venue. We also have backup connectivity options to ensure uninterrupted development.",
    },
    {
      question: "What if I don't have a team?",
      answer:
        "You can register as an individual and we will help you connect with other participants during the networking session. Many successful teams are formed on the spot!",
    },
    {
      question: "Are meals provided during the hackathon?",
      answer:
        "Yes, lunch and refreshments will be provided throughout the event. We cater to various dietary requirements - just let us know during registration.",
    },
    {
      question: "Can I work on an existing project?",
      answer:
        "No, all projects must be started from scratch during the hackathon. However, you can use existing libraries, frameworks, and tools to build your solution.",
    },
    {
      question: "What happens after the hackathon?",
      answer:
        "Winners receive cash prizes and certificates. Additionally, promising projects may receive incubation support from StartupTN and our partner organizations.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Got questions? We've got answers. Find everything you need to know
            about participating in TechFront 2025.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 flex items-center justify-between hover:bg-blue-50/50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-slate-900 text-left">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-8 pb-6">
                    <p className="text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-500 to-orange-500 rounded-2xl p-8 text-white text-center">
            <HelpCircle className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-lg opacity-90 mb-6">
              Our team is here to help! Reach out to us for any additional
              information.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-slate-100 transition-colors duration-200">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
