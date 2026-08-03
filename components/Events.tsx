import React, { useState } from "react";
import { MapPin, User, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Types
interface EventType {
  title: string;
  venue: string;
  description: string;
  formLink: string;
  speaker?: string;
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

  const eventForms: EventFormType = {
    "Day 1": [
      {
        title: "Ideathon",
        venue: "Main Auditorium",
        description:
          "Dive into a high-energy brainstorming challenge where innovation meets creativity. Pitch your unique solutions to real-world problems and compete with the best minds!",
        formLink: "https://forms.gle/BxwC2exYEfmqQQ8v7",
      },
      {
        title: "Project Competition",
        venue: "Innovation Theater",
        description:
          "Showcase your innovative projects and prototypes in front of industry experts. Gain valuable feedback and recognition for your hard work and creativity.",
        formLink: "https://forms.gle/BxwC2exYEfmqQQ8v7",
      },
    ],
    "Day 3": [
      {
        title: "Product Showcase",
        venue: "Tech Theater",
        description:
          "Experience the latest innovations from startups and entrepreneurs. Explore groundbreaking products and services that are shaping the future of technology.",
        formLink: "https://forms.gle/p5JUZuVY3Utf3Gn77",
      },
      {
        title: "Demo day",
        venue: "Sustainability Hub",
        description:
          "Join us for an exciting Demo Day where startups showcase their innovative solutions. Experience the future of technology and entrepreneurship firsthand!",
        formLink:
          "https://docs.google.com/forms/d/e/1FAIpQLSfdLgVS_sbgX6q7MS3doSWCWV-vUGkF0rFh9nNv8totT1bICg/viewform?usp=dialog",
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
            {eventForms[day]?.map((event, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-lg text-gray-900">
                  {event.title}
                </h4>
                <p className="text-gray-600 flex items-center mt-1">
                  <MapPin className="h-4 w-4 mr-2" /> {event.venue}
                </p>
                <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                  {event.description}
                </p>
                <a
                  href={event.formLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
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
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ✅ Renamed from "Schedule" to "Events"
const Events = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState("");
  const navigate = useNavigate();

  const days = [
    {
      date: "September 1, 2026",
      day: "Day 1",
      theme: "IgniteX",
      events: [
        {
          title: "Inauguration Ceremony",
          venue: "Parthasarathy auditorium",
        },
        {
          title: "Ideathon",
          venue: "ILP Block",
        },
        {
          title: "Student Project Showcase",
          venue: "Parthasarathy auditorium",
        },
        {
          title: "Project Competition",
          venue: "Parthasarathy auditorium",
        },
        {
          title: "Final Selection",
          venue: "Parthasarathy auditorium",
        },
      ],
    },
    {
      date: "September 2, 2026",
      day: "Day 2",
      theme: "Deep Sprint 2026",
      events: [
        {
          title: "Inauguration on hackathon",
          venue: "Parthasarathy auditorium",
        },
        {
          title: "Round judgement - 1",
          venue: "Parthasarathy auditorium",
        },
        {
          title: "Round judgement - 2",
          venue: "Parthasarathy auditorium",
        },
        {
          title: "Prize Distribution",
          venue: "Parthasarathy auditorium",
        },
      ],
      note: "Registration opens: 1st August 2026 · Preliminary Shortlisting: 14th Aug  ·  Online Review: 17th–21st Aug · Final Selection: 28th Aug",
    },
    {
      date: "September 3, 2026",
      day: "Day 3",
      theme: "Demo Day",
      events: [
        {
          title: "Product Showcase",
          venue: "Parthasarathy auditorium",
        },
        {
          title: "Demo Day",
          venue: "CITAR",
        },
        {
          title: "CITIL Innovation Grant",
          venue: "Parthasarathy auditorium",
        },
        {
          title: "Validation and Closing Ceremony",
          venue: "Parthasarathy auditorium",
        },
      ],
    },
  ];

  const handleKnowMore = (day: string) => {
    if (day === "Day 2") {
      navigate("/innovesthack");
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
              </div>

              <div className="p-6 space-y-6">
                {day.events.map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className="border-l-4 border-yellow-400 pl-4 hover:bg-gray-50 transition-colors duration-300 p-2 rounded-r-lg transform hover:translate-x-2"
                  >
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {event.title}
                    </h4>
                    {eventIndex === 0 && event.speaker && (
                      <div className="flex items-center text-sm text-purple-600 mb-1">
                        <User size={16} className="mr-2" />
                        {event.speaker}
                      </div>
                    )}
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin size={16} className="mr-2" />
                      {event.venue}
                    </div>
                  </div>
                ))}
                {day.note && (
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg text-sm text-gray-700 border border-blue-200">
                    <span className="font-semibold">Key Dates:</span> {day.note}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <EventModal isOpen={modalOpen} onClose={closeModal} day={selectedDay} />
    </section>
  );
};

export default Events;   // ✅ now exports the correctly named component