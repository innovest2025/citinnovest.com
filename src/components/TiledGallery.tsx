import React, { useState, useEffect } from "react";
import innovest0 from "../img/imgs/innovest-0.jpg";
import innovest1 from "../img/imgs/innovest-1.png";
import innovest2 from "../img/imgs/innovest-2.png";
import innovest3 from "../img/imgs/innovest-3.png";
import innovest4 from "../img/imgs/innovest-4.png";
import innovest5 from "../img/imgs/innovest-5.png";
import innovest6 from "../img/imgs/innovest-6.png";
import innovest7 from "../img/imgs/innovest-7.jpg";
import innovest8 from "../img/imgs/innovest-8.jpg";
import innovest9 from "../img/imgs/innovest-9.jpg";
import innovest10 from "../img/imgs/innovest-10.jpg";
import innovest11 from "../img/imgs/innovest-11.jpg";
import innovest12 from "../img/imgs/innovest-12.jpg";
import innovest13 from "../img/imgs/innovest-13.jpg";
import innovest14 from "../img/imgs/innovest-14.jpg";
import innovest15 from "../img/imgs/innovest-15.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: innovest0, caption: "Opening Ceremony" },
  { src: innovest1, caption: "Innovative Projects" },
  { src: innovest2, caption: "Team Collaboration" },
  { src: innovest3, caption: "Hackathon Coding" },
  { src: innovest4, caption: "AI & IoT Demos" },
  { src: innovest5, caption: "Judging Panel" },
  { src: innovest6, caption: "Networking Sessions" },
  { src: innovest7, caption: "Pitch Presentations" },
  { src: innovest8, caption: "Award Ceremony" },
  { src: innovest9, caption: "Workshops" },
  { src: innovest10, caption: "Team Strategy" },
  { src: innovest11, caption: "Prototyping" },
  { src: innovest12, caption: "Keynote Speeches" },
  { src: innovest13, caption: "Group Discussions" },
  { src: innovest14, caption: "Tech Innovations" },
  { src: innovest15, caption: "Grand Finale" },
];

const KenBurnsSlideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalTime = 4000; // 4s per slide

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section className="w-full bg-white py-12 flex flex-col items-center text-white">
      <h2 className="text-3xl font-bold mb-6">Gallery</h2>
      <div className="relative w-full max-w-6xl h-[600px] rounded-xl overflow-hidden shadow-xl">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.src}
              alt={`Slide ${index}`}
              className={`w-full h-full object-cover transform transition-transform duration-[4000ms] ${
                index === currentIndex ? "scale-110" : "scale-100"
              }`}
            />
            {/* Caption */}
            {index === currentIndex && (
              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white/50 px-6 py-3 rounded-lg text-xl font-semibold animate-slide-up">
                {image.caption}
              </div>
            )}
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full transition"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full transition"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Indicator Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translate(-50%, 20px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
        .animate-slide-up {
          animation: slideUp 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default KenBurnsSlideshow;
