import React, { useState } from "react";
import { Clock, MapPin, User, X } from "lucide-react";

// Types
interface EventType {
  title: string;
  description: string;
  formLink: string;
  speaker?: string;
  time?: string;
}

type EventFormType = {
  [key: string]: EventType[];
};

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  day: string;
}

// Modal Component
const EventModal: React.FC<EventModalProps> = ({ isOpen, onClose, day }) => {
  if (!isOpen) return null;

  // Google Form links for each event
  const eventForms: EventFormType = {
    "Day 1": [
      {
        title: "Ideathon",
        description:
          "Dive into a high-energy brainstorming challenge where innovation meets creativity. Pitch your unique solutions to real-world problems and compete with the best minds!",
        formLink: "https://forms.gle/tkeKPGQ4VKH1BnjBA",
      },
      {
        title: "Project Competition",
        description:
          "Showcase your innovative projects and prototypes in front of industry experts. Gain valuable feedback and recognition for your hard work and creativity.",
        formLink: "https://forms.gle/tkeKPGQ4VKH1BnjBA",
      },
    ],
    "Day 3": [
      {
        title: "Product Showcase",
        description:
          "Experience the latest innovations from startups and entrepreneurs. Explore groundbreaking products and services that are shaping the future of technology.",
        formLink: "https://forms.gle/example3",
      },
      {
        title: "Demo day",

        description:
          "Join us for an exciting Demo Day where startups showcase their innovative solutions. Experience the future of technology and entrepreneurship firsthand!",
        formLink: "https://forms.gle/zFXDYKMSeraLkbqC8",
      },
    ],
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Register for {day} Events
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="space-y-4">
            {eventForms[day]?.map((event: EventType, index: number) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4"
              >
                <h4 className="font-semibold text-lg text-gray-900">
                  {event.title}
                </h4>
                <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                  {event.description}
                </p>
                <a
                  href={event.formLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Register for {event.title}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Schedule = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState("");
  const days = [
    {
      date: "August 18, 2025",
      day: "Day 1",
      theme: "IgniteX",
      events: [
        {
          time: "",
          title: "Inauguration Ceremony",
        },
        {
          time: "",
          title: "Ideathon",
        },

        {
          time: "",
          title: "Student Project Showcase",
        },
      ],
    },
    {
      date: "August 19, 2025",
      day: "Day 2",
      theme: "Deep Sprint 2025",
      events: [
        {
          time: "08:00 - 08:30",
          title: "Inaugration on hackathon",
        },
        {
          time: "08:30 - 11:00",
          title: "Round judgement - 1",
        },
        {
          time: "11:00 - 01:00",
          title: "Round judgement - 2",
          //speaker: "Networking Event",
        },
        {
          time: "01:00 - 03:00",
          title: "Pitching session",
        },
      ],
    },
    {
      date: "August 20, 2025",
      day: "Day 3",
      theme: "Demo Day",
      events: [
        {
          time: "",
          title: "Product Showcase",
        },
        {
          time: "",
          title: "Demo Day",
        },
        {
          time: "",
          title: "CITBIF Innovation Drive",
        },
        {
          time: "",
          title: "CITBIF Innovation Grant Challenge (Closed)",
        },
        {
          time: "",
          title: "Validation and Closing Ceremony",
        },
      ],
    },
  ];

  const handleKnowMore = (day: string) => {
    if (day === "Day 2") {
      window.location.href = "/innovesthack";
    } else if (day === "Day 1" || day === "Day 3") {
      setSelectedDay(day);
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedDay("");
  };

  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Event Schedule
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three days packed with inspiring sessions, networking opportunities,
            and innovation showcases
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {days.map((day, dayIndex) => (
            <div
              key={dayIndex}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white relative">
                <h3 className="text-2xl font-bold mb-2">{day.day}</h3>
                <p className="text-blue-100 mb-1">{day.date}</p>
                <p className="text-orange-300 font-medium">{day.theme}</p>
                {(day.day === "Day 1" ||
                  day.day === "Day 2" ||
                  day.day === "Day 3") && (
                  <button
                    onClick={() => handleKnowMore(day.day)}
                    className={`absolute top-12 right-4 px-6 py-4 rounded-lg font-medium text-sm transition-colors duration-200 shadow-sm ${
                      day.day === "Day 2"
                        ? "bg-white text-blue-600 hover:bg-blue-50"
                        : "bg-orange-500 text-white hover:bg-orange-600"
                    }`}
                  >
                    {day.day === "Day 2" ? "Know More" : "Register"}
                  </button>
                )}
              </div>

              <div className="p-6 space-y-6">
                {day.events.map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className="border-l-4 border-yellow-400 pl-4 hover:bg-gray-50 transition-colors duration-300 p-2 rounded-r-lg transform hover:translate-x-2"
                  >
                    <div className="flex items-center text-sm text-blue-600 mb-1">
                      <Clock size={16} className="mr-2" />
                      {event.time}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {event.title}
                    </h4>
                    {eventIndex === 0 && event.speaker && (
                      <div className="flex items-center text-sm text-purple-600 mb-1">
                        <User size={16} className="mr-2" />
                        {event.speaker}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Registration Modal */}
      <EventModal isOpen={modalOpen} onClose={closeModal} day={selectedDay} />
    </section>
  );
};

export default Schedule;