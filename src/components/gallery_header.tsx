import { useState, useEffect } from "react"
import {
  ArrowLeft,
  Sparkles,
  Zap,
  Trophy,
  Users,
  Lightbulb,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react"
import Header from "./Header";

const EventsGallery = () => {
  // Set active link for the header
  useEffect(() => {
    // This will ensure the header highlights the active section
    const galleryLink = document.getElementById('gallery-link');
    if (galleryLink) {
      galleryLink.classList.add('text-blue-600', 'font-semibold');
      galleryLink.classList.remove('text-gray-500', 'hover:text-gray-700');
    }

    return () => {
      if (galleryLink) {
        galleryLink.classList.remove('text-blue-600', 'font-semibold');
        galleryLink.classList.add('text-gray-500', 'hover:text-gray-700');
      }
    };
  }, []);
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)

  const events = {
    workshop: {
      title: "Workshop",
      icon: <Users className="h-8 w-8" />,
      color: "from-blue-500 to-purple-600",
      images: ["w1", "w2", "w3", "w4", "w5"],
      gradient: "bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600",
    },
    masterclass: {
      title: "Master Class",
      icon: <Lightbulb className="h-8 w-8" />,
      color: "from-yellow-500 to-orange-600",
      images: ["m1", "m2", "m3", "m4", "m5"],
      gradient: "bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500",
    },
    hackathon: {
      title: "Hackathon",
      icon: <Zap className="h-8 w-8" />,
      color: "from-green-500 to-teal-600",
      images: ["h1", "h2", "h3", "h4", "h5"],
      gradient: "bg-gradient-to-br from-green-500 via-teal-500 to-cyan-600",
    },
    inauguration: {
      title: "Inauguration",
      icon: <Trophy className="h-8 w-8" />,
      color: "from-pink-500 to-red-600",
      images: ["i1", "i2", "i3", "i4", "i5"],
      gradient: "bg-gradient-to-br from-pink-500 via-red-500 to-rose-600",
    },
  }

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (selectedEvent && isAutoPlay) {
      const currentEvent = events[selectedEvent as keyof typeof events]
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % currentEvent.images.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [selectedEvent, isAutoPlay])

  const handleEventClick = (eventKey: string) => {
    setSelectedEvent(eventKey)
    setCurrentImageIndex(0)
  }

  const goBack = () => {
    setSelectedEvent(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    const currentEvent = events[selectedEvent as keyof typeof events]
    setCurrentImageIndex((prev) => (prev + 1) % currentEvent.images.length)
  }

  const prevImage = () => {
    const currentEvent = events[selectedEvent as keyof typeof events]
    setCurrentImageIndex((prev) => (prev - 1 + currentEvent.images.length) % currentEvent.images.length)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay)
  }

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedEvent) {
        if (e.key === "ArrowRight") {
          nextImage()
          setIsAutoPlay(false)
        }
        if (e.key === "ArrowLeft") {
          prevImage()
          setIsAutoPlay(false)
        }
        if (e.key === "Escape") goBack()
        if (e.key === " ") {
          e.preventDefault()
          toggleAutoPlay()
        }
      }
    }
    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [selectedEvent])

  if (!selectedEvent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30 animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            />
          ))}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-40 blur-3xl animate-pulse"></div>
          <div
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-pink-200 to-orange-200 rounded-full opacity-40 blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-8">
          <div className={`text-center mb-16 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}>
            <h1 className="text-6xl lg:text-7xl font-bold text-gray-800 mb-6 relative">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Events Gallery
              </span>
              <Sparkles className="absolute -top-4 -right-4 h-12 w-12 text-yellow-500 animate-spin" />
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our amazing events through stunning visual galleries
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full">
            {Object.entries(events).map(([key, event], index) => (
              <div
                key={key}
                className={`group cursor-pointer transform transition-all duration-700 hover:scale-110 hover:-translate-y-4 ${
                  isLoaded ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
                onClick={() => handleEventClick(key)}
              >
                <div
                  className={`${event.gradient} p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500"></div>
                  <div className="relative z-10 text-center text-white">
                    <div className="mb-6 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 inline-block">
                      {event.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-200 transition-colors duration-300">
                      {event.title}
                    </h3>
                    <div className="text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                      Click to explore
                    </div>
                  </div>
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                        style={{
                          left: `${20 + i * 12}%`,
                          top: `${20 + (i % 3) * 20}%`,
                          animationDelay: `${i * 300}ms`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const currentEvent = events[selectedEvent as keyof typeof events]
  const currentImage = currentEvent.images[currentImageIndex]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden">
      <Header />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full opacity-40 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      <div className="relative z-10 p-6">
        <div className="flex items-center justify-between">
          <button
            onClick={goBack}
            className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors duration-300 group bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg hover:shadow-xl"
          >
            <ArrowLeft className="h-6 w-6 group-hover:-translate-x-2 transition-transform duration-300" />
            <span className="text-lg font-medium">Back to Events</span>
          </button>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-1">
              <span className={`bg-gradient-to-r ${currentEvent.color} bg-clip-text text-transparent`}>
                {currentEvent.title}
              </span>
            </h2>
            <p className="text-gray-600 text-sm">
              {currentImageIndex + 1} of {currentEvent.images.length}
            </p>
          </div>
          <button
            onClick={toggleAutoPlay}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
              isAutoPlay ? "bg-green-500 hover:bg-green-600 text-white" : "bg-gray-500 hover:bg-gray-600 text-white"
            }`}
          >
            {isAutoPlay ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            <span className="text-sm font-medium">{isAutoPlay ? "Pause" : "Play"}</span>
          </button>
        </div>
      </div>
      <div className="relative z-10 flex-1 flex items-center justify-center px-8 py-4">
        <div className="relative w-full max-w-5xl">
          <button
            onClick={() => {
              prevImage()
              setIsAutoPlay(false)
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-700 hover:text-blue-600 p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            onClick={() => {
              nextImage()
              setIsAutoPlay(false)
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-700 hover:text-blue-600 p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden group">
            <div className="aspect-[16/10] relative">
              <img
                src={`/img/${currentImage}.jpeg`}
                alt={`${currentEvent.title}`}
                className="w-full h-full object-cover transition-all duration-1000 ease-in-out transform group-hover:scale-105"
                key={currentImageIndex}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{currentEvent.title}</h3>
                  <p className="text-lg opacity-90">{currentImage.toUpperCase()}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-30 group-hover:animate-pulse transition-opacity duration-500"></div>
            </div>
          </div>
          <div className="mt-6 bg-gray-200 rounded-full h-2 overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${currentEvent.color} transition-all duration-300 rounded-full`}
              style={{
                width: `${((currentImageIndex + 1) / currentEvent.images.length) * 100}%`,
              }}
            ></div>
          </div>
          <div className="flex justify-center mt-6 space-x-3">
            {currentEvent.images.map((imageName, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentImageIndex(index)
                  setIsAutoPlay(false)
                }}
                className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                  index === currentImageIndex
                    ? "ring-4 ring-blue-500 scale-110 shadow-lg"
                    : "hover:scale-105 hover:shadow-md opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={`/img/${imageName}.jpeg`}
                  alt={`${currentEvent.title} - ${index}`}
                  className="w-16 h-12 object-cover"
                />
                {index === currentImageIndex && <div className="absolute inset-0 bg-blue-500/20"></div>}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-500 text-sm bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
        Use ← → keys, Space to play/pause, or Escape to go back
      </div>
    </div>
  )
}

export default EventsGallery
