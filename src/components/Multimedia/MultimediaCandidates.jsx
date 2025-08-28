import React, { useState, useEffect, useMemo } from "react";
import { ChevronLeft, ChevronRight, MapPin, MessageCircle } from "lucide-react";

const multimediaCandidates = [
  { name: "Fathima Nasrin", role: "Graphic Designer", category: "Multimedia" },
  { name: "Ajmal", role: "Video Editor", category: "Multimedia" },
  { name: "Jazi", role: "Motion Designer", category: "Multimedia" },
  { name: "Nishad", role: "3D Artist", category: "Multimedia" },
  { name: "Nahil", role: "Visual Editor", category: "Multimedia" },
];

export default function MultimediaCandidates() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  const candidates = useMemo(() => {
    return multimediaCandidates.map((candidate, index) => ({
      id: index,
      ...candidate,
      experience: "1+ years",
      location: "UAE",
      image: `https://randomuser.me/api/portraits/women/${30 + index}.jpg`,
      bio: "Creative and innovative professional passionate about bringing ideas to life through visual and interactive mediums.",
      skills: candidate.role.includes("Graphic Designer")
        ? ["Adobe Photoshop", "Illustrator", "InDesign", "Branding"]
        : candidate.role.includes("Video Editor")
        ? ["Adobe Premiere Pro", "After Effects", "FCPX", "Color Grading"]
        : candidate.role.includes("Motion Designer")
        ? ["After Effects", "Cinema 4D", "Animation", "Storyboarding"]
        : candidate.role.includes("3D Artist")
        ? ["Blender", "Maya", "ZBrush", "Texturing", "Rendering"]
        : ["Visual Effects", "Compositing", "Nuke", "Davinci Resolve"],
    }));
  }, []);

  // Responsive cards per page
  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth < 640) setCardsPerPage(1);
      else if (window.innerWidth < 1024) setCardsPerPage(2);
      else setCardsPerPage(3);
    };
    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  // Autoplay
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % candidates.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [candidates.length, isHovered]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % candidates.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + candidates.length) % candidates.length);

  const selectCandidate = (candidate) => {
    setSelectedCandidate(selectedCandidate?.id === candidate.id ? null : candidate);
  };

  const whatsappMessage = (name) =>
    encodeURIComponent(
      `Hi! I'm interested in hiring ${name} for a multimedia position. Can we discuss further?`
    );

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center leading-tight text-black">
            Our Multimedia Experts
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Skilled Multimedia Experts for Captivating Visuals
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Side Navigation Buttons (hidden on mobile) */}
          <button
            onClick={prevSlide}
            className="hidden sm:block absolute left-[-50px] top-1/2 -translate-y-1/2 z-10 bg-white shadow-2xl hover:bg-gray-50 rounded-full p-3 transition-all duration-300 hover:scale-110 border"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="hidden sm:block absolute right-[-50px] top-1/2 -translate-y-1/2 z-10 bg-white shadow-2xl hover:bg-gray-50 rounded-full p-3 transition-all duration-300 hover:scale-110 border"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / cardsPerPage)}%)` }}
            >
              {candidates.map((candidate) => (
                <div
                  key={candidate.id}
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
                            src={candidate.image}
                            alt={candidate.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Profile Info */}
                      <div className="flex-1 space-y-3">
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

          {/* Mobile Navigation (bottom controls) */}
          <div className="sm:hidden flex gap-5 justify-center items-center px-4 lg:pb-4 mt-4">
            <button
              onClick={prevSlide}
              className="bg-white shadow-lg hover:bg-gray-50 rounded-full p-2 transition-all duration-300 border"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <span className="text-sm text-gray-500 font-medium">
              {currentIndex + 1} / {candidates.length}
            </span>
            <button
              onClick={nextSlide}
              className="bg-white shadow-lg hover:bg-gray-50 rounded-full p-2 transition-all duration-300 border"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          {/* Dots Indicator (desktop only) */}
          <div className="hidden sm:flex justify-center mt-10 gap-3">
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
