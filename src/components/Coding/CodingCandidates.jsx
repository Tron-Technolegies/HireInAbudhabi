import React, { useState, useEffect, useMemo } from "react";
import { ChevronLeft, ChevronRight, MapPin, MessageCircle } from "lucide-react";

// Local images
import abinImage from "../../assets/Yadu.jpg";

const codingCandidates = [
  { name: "Abin Joshy", role: "Data Scientist", category: "Coding", localImage: abinImage },
  { name: "Rishad", role: "MERN Stack Developer", category: "Coding" },
  { name: "Jalal", role: "Python Full Stack Developer", category: "Coding" },
  { name: "Sanjay", role: "Python Full Stack Developer", category: "Coding" },
  { name: "Krishnadev", role: "Python Full Stack Developer", category: "Coding" },
];

export default function CodingCandidates() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  const candidates = useMemo(() => {
    return codingCandidates.map((candidate, index) => ({
      id: index,
      ...candidate,
      experience: "1+ years",
      location: "UAE",
      image: candidate.localImage || `https://randomuser.me/api/portraits/men/${20 + index}.jpg`,
      bio: "Built scalable full-stack solutions with modern technologies",
      skills: candidate.role.includes("Data")
        ? ["Machine Learning", "Python", "TensorFlow", "Data Analysis"]
        : candidate.role.includes("MERN")
        ? ["MongoDB", "Express", "React", "Node.js"]
        : ["Python", "Django", "PostgreSQL", "Docker"],
    }));
  }, []);

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

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % candidates.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [candidates.length, isHovered]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % candidates.length);
  };

  const prevSlide = () => {
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
    <section className="py-12 sm:py-16 bg-white ">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Our <span className="">Coding Experts</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            From Bugs to Brilliance Hire Coders Who Deliver
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Desktop navigation */}
          <button
            onClick={prevSlide}
            className="hidden sm:block absolute left-[-50px] top-1/2 -translate-y-1/2 z-10 bg-white shadow-2xl hover:bg-gray-50 rounded-full p-3 transition-all duration-300 hover:scale-110 border"
          >
            <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="hidden sm:block absolute right-[-50px] top-1/2 -translate-y-1/2 z-10 bg-white shadow-2xl hover:bg-gray-50 rounded-full p-3 transition-all duration-300 hover:scale-110 border"
          >
            <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700" />
          </button>

          {/* Track */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / cardsPerPage)}%)` }}
            >
              {candidates.map((candidate) => (
                <div
                  key={candidate.id}
                  className={`flex-shrink-0 px-2 sm:px-3 mb-6 ${
                    cardsPerPage === 1 ? "w-full" : cardsPerPage === 2 ? "w-1/2" : "w-1/3"
                  }`}
                >
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-200 h-auto flex flex-col overflow-hidden">
                    <div className="p-4 sm:p-6 flex-1 flex flex-col">
                      {/* Profile */}
                      <div className="flex justify-center mb-4">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shadow-lg ring-2 ring-white">
                          <img
                            src={candidate.image}
                            alt={candidate.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="text-center flex-1 space-y-3">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                          {candidate.name}
                        </h3>
                        <p className="text-gray-700 font-semibold text-sm sm:text-base">
                          {candidate.role}
                        </p>
                        <div className="flex items-center justify-center text-gray-500 text-xs sm:text-sm">
                          <MapPin className="w-3 h-3 mr-1" />
                          <span>
                            {candidate.location} • {candidate.experience}
                          </span>
                        </div>
                        <p className="text-gray-600 text-xs sm:text-sm">{candidate.bio}</p>
                        <div>
                          <h4 className="text-xs font-semibold text-gray-700 mb-2">
                            Technical Expertise
                          </h4>
                          <div className="flex flex-wrap gap-1 justify-center">
                            {candidate.skills.map((skill, i) => (
                              <span
                                key={i}
                                className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Actions */}
                    <div className="p-4 sm:p-6 pt-0 mt-auto">
                      <div className="flex flex-col gap-2 w-full">
                        <button
                          onClick={() => selectCandidate(candidate)}
                          className={`w-full py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
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
                            className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-green-500 text-white rounded-full font-semibold text-sm hover:bg-green-600 transition-all duration-300 shadow-lg"
                          >
                            <MessageCircle className="w-4 h-4" /> Hire Now
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile navigation */}
          <div className="sm:hidden flex gap-5 justify-center items-center px-4 lg:pb-4">
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

          {/* Dots indicator for larger screens */}
          <div className="hidden sm:flex justify-center mt-10 gap-3">
            {candidates.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`transition-all duration-300 ${
                  i === currentIndex
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
