import React, { useState, useEffect, useMemo } from "react";
import { ChevronLeft, ChevronRight, MapPin, MessageCircle } from "lucide-react";

// Import your local images here
// Ensure these paths are correct relative to this file
import abinImage from "../../assets/Yadu.jpg";

// You can uncomment and add your other local image imports here:
// import rishadImage from "./assets/rishad.jpg";
// import jalalImage from "./assets/jalal.jpg";
// import sanjayImage from "./assets/sanjay.jpg";
// import krishnadevImage from "./assets/krishnadev.jpg";

const codingCandidates = [
  { name: "Abin Joshy", role: "Data Scientist", category: "Coding", localImage: abinImage },
  { name: "Rishad", role: "MERN Stack Developer", category: "Coding" },
  {
    name: "Jalal",
    role: "Python Full Stack Developer",
    category: "Coding",
  },
  {
    name: "Sanjay",
    role: "Python Full Stack Developer",
    category: "Coding",
  },
  {
    name: "Krishnadev",
    role: "Python Full Stack Developer",
    category: "Coding",
  },
];

export default function CodingCandidates() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  // Initialize cardsPerPage state, default to 3 for larger screens
  const [cardsPerPage, setCardsPerPage] = useState(3);

  const candidates = useMemo(() => {
    return codingCandidates.map((candidate, index) => ({
      id: index,
      ...candidate,
      experience: "1+ years",
      location: "UAE",
      // Use localImage if available, otherwise fallback to a random user image
      image: candidate.localImage || `https://randomuser.me/api/portraits/men/${20 + index}.jpg`,
      bio: "Built scalable full-stack solutions with modern technologies",
      skills: candidate.role.includes("Data")
        ? ["Machine Learning", "Python", "TensorFlow", "Data Analysis"]
        : candidate.role.includes("MERN")
        ? ["MongoDB", "Express", "React", "Node.js"]
        : ["Python", "Django", "PostgreSQL", "Docker"],
    }));
  }, []);

  // Effect to update cardsPerPage based on window width
  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth < 640) {
        // Mobile screens
        setCardsPerPage(1);
      } else if (window.innerWidth < 1024) {
        // Tablet screens
        setCardsPerPage(2);
      } else {
        // Desktop and larger screens
        setCardsPerPage(3);
      }
    };

    // Set initial value
    updateCardsPerPage();

    // Add event listener for window resize
    window.addEventListener("resize", updateCardsPerPage);

    // Clean up event listener
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []); // Run once on mount and clean up on unmount

  // Auto-play functionality - pause on hover
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      // Ensure the next index wraps around correctly based on cardsPerPage
      setCurrentIndex((prev) => (prev + 1) % candidates.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [candidates.length, isHovered]);

  const nextSlide = () => {
    // Calculate next index, ensuring it wraps around
    setCurrentIndex((prev) => (prev + 1) % candidates.length);
  };

  const prevSlide = () => {
    // Calculate previous index, ensuring it wraps around correctly (handles negative results)
    setCurrentIndex((prev) => (prev - 1 + candidates.length) % candidates.length);
  };

  const selectCandidate = (candidate) => {
    setSelectedCandidate(selectedCandidate?.id === candidate.id ? null : candidate);
  };

  const whatsappMessage = (name) =>
    encodeURIComponent(
      `Hi! I'm interested in hiring ${name} for a coding position. Can we discuss further?`
    );

  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-gray-600">Coding Experts</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From Bugs to Brilliance—Hire Coders Who Deliver
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Buttons - Adjusted for responsiveness */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-[-50px] top-1/2 -translate-y-1/2 z-10 bg-white shadow-2xl hover:bg-gray-50 rounded-full p-3 transition-all duration-300 hover:scale-110 border"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-[-50px] top-1/2 -translate-y-1/2 z-10 bg-white shadow-2xl hover:bg-gray-50 rounded-full p-3 transition-all duration-300 hover:scale-110 border"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              // Dynamically calculate translateX based on cardsPerPage
              style={{ transform: `translateX(-${currentIndex * (100 / cardsPerPage)}%)` }}
            >
              {candidates.map((candidate) => (
                <div
                  key={candidate.id}
                  // Dynamically set card width based on cardsPerPage
                  className={`flex-shrink-0 px-3 ${
                    cardsPerPage === 1 ? "w-full" : cardsPerPage === 2 ? "w-1/2" : "w-1/3"
                  }`}
                >
                  <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 h-[480px] flex flex-col">
                    <div className="flex flex-col items-center text-center space-y-4 flex-1">
                      {/* Profile Image */}
                      <div className="relative">
                        <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg ring-2 ring-white">
                          <img
                            src={candidate.image} // Now safely uses a fallback if localImage is undefined
                            alt={candidate.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Profile Info */}
                      <div className="flex-1 space-y-3">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{candidate.name}</h3>
                          <p className="text-gray-700 font-semibold text-base mb-1">
                            {candidate.role}
                          </p>
                          <div className="flex items-center justify-center text-gray-500 text-sm">
                            <MapPin className="w-3 h-3 mr-1" />
                            <span>
                              {candidate.location} • {candidate.experience}
                            </span>
                          </div>
                        </div>

                        <p className="text-gray-600 text-sm leading-relaxed">{candidate.bio}</p>

                        {/* Skills */}
                        <div>
                          <h4 className="text-xs font-semibold text-gray-700 mb-2">
                            Technical Expertise
                          </h4>
                          <div className="flex flex-wrap gap-1 justify-center">
                            {candidate.skills.map((skill, index) => (
                              <span
                                key={index}
                                className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col gap-2 w-full">
                        <button
                          onClick={() => selectCandidate(candidate)}
                          className={`w-full py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                            selectedCandidate?.id === candidate.id
                              ? "bg-gray-900 text-white shadow-lg"
                              : "bg-white text-gray-700 hover:bg-gray-50 shadow-lg border-2 border-gray-200 hover:border-gray-400"
                          }`}
                        >
                          {selectedCandidate?.id === candidate.id
                            ? "✓ Selected"
                            : "Select Candidate"}
                        </button>

                        {selectedCandidate?.id === candidate.id && (
                          <a
                            href={`https://wa.me/971568145866?text=${whatsappMessage(
                              candidate.name
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 w-full py-2 bg-green-500 text-white rounded-full font-semibold text-sm hover:bg-green-600 transition-all duration-300 shadow-lg"
                          >
                            <MessageCircle className="w-4 h-4" />
                            Hire Now
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-10 gap-3">
            {candidates.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gray-700 w-8 h-3 rounded-full"
                    : "bg-gray-300 hover:bg-gray-400 w-3 h-3 rounded-full"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
