import React, { useState, useEffect, useMemo } from "react";
import { ChevronLeft, ChevronRight, MapPin, MessageCircle } from "lucide-react";

// Import your local images here.
// Make sure these paths are correct relative to this file.
// import gokulImage from "./assets/gokul.jpg";
// import abdulRaufImage from "./assets/abdul_rauf.jpg";
// import dilnaFathimaImage from "./assets/dilna_fathima.jpg";
// import jabirJafferImage from "./assets/jabir_jaffer.jpg";
// import rizwanShamsudheenImage from "./assets/rizwan_shamsudheen.jpg";
// import muhammedShameerImage from "./assets/muhammed_shameer.jpg";
// import yasimImage from "./assets/yasim.jpg";
// import muhammedIrshadImage from "./assets/muhammed_irshad.jpg";
// import adarshDileepImage from "./assets/adarsh_dileep.jpg";

const dmCandidates = [
  { name: "Gokul SP", role: "Performance Marketer", category: "DM" },
  { name: "Abdul Rauf", role: "SEO Specialist", category: "DM" },
  { name: "Dilna Fathima", role: "Project Manager", category: "DM" },
  { name: "Jabir Jaffer", role: "Project Manager", category: "DM" },
  {
    name: "Rizwan Shamsudheen",
    role: "Project Manager",
    category: "DM",
  },
  {
    name: "Muhammed Shameer",
    role: "SEO Specialist",
    category: "DM",
  },
  { name: "Yasim", role: "Project Manager", category: "DM" },
  {
    name: "Muhammed Irshad PM",
    role: "Project Manager",
    category: "DM",
  },
  { name: "Adarsh Dileep", role: "Project Manager", category: "DM" },
];

export default function DMCandidates() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [cardsPerPage, setCardsPerPage] = useState(3); // Default to 3 cards per page

  const candidates = useMemo(() => {
    return dmCandidates.map((candidate, index) => ({
      id: index,
      ...candidate,
      experience: "1+ years",
      location: "UAE",
      // image: candidate.localImage, // Use the imported local image - COMMENTED OUT
      // Fallback for demonstration when local images are not used
      image: `https://randomuser.me/api/portraits/men/${20 + index}.jpg`,
      bio: "A highly motivated and results-driven individual passionate about digital marketing strategies and project execution.",
      // Updated skills based on roles for DM candidates
      skills: candidate.role.includes("Performance Marketer")
        ? ["Google Ads", "Facebook Ads", "Analytics", "SEM"]
        : candidate.role.includes("SEO Specialist")
        ? ["SEO", "Keyword Research", "Content Strategy", "Link Building"]
        : ["Project Management", "Agile", "Scrum", "Communication", "Team Leadership"],
    }));
  }, []);

  // Effect to update cardsPerPage based on window width
  useEffect(() => {
    const updateCardsPerPage = () => {
      if (window.innerWidth < 640) {
        // Small screens (e.g., mobile)
        setCardsPerPage(1);
      } else if (window.innerWidth < 1024) {
        // Medium screens (e.g., tablets)
        setCardsPerPage(2);
      } else {
        // Large screens (e.g., desktops)
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

  // Adjusted WhatsApp message for DM candidates
  const whatsappMessage = (name) =>
    encodeURIComponent(
      `Hi! I'm interested in hiring ${name} for a Digital Marketing position. Can we discuss further?`
    );

  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Our <span className="">Digital Marketing Experts</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ignite Your Brand, Engage Your Audience Hire Marketing Mavericks
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Buttons (Outside the card section, adjusted position for responsiveness) */}
          <button
            onClick={prevSlide}
            className="absolute left-0 sm:left-[-50px] top-1/2 -translate-y-1/2 z-10 bg-white shadow-2xl hover:bg-gray-50 rounded-full p-3 transition-all duration-300 hover:scale-110 border"
            // For smaller screens, left-0 will keep it visible. For sm and above, it goes to -50px.
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 sm:right-[-50px] top-1/2 -translate-y-1/2 z-10 bg-white shadow-2xl hover:bg-gray-50 rounded-full p-3 transition-all duration-300 hover:scale-110 border"
            // For smaller screens, right-0 will keep it visible. For sm and above, it goes to -50px.
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
                            // src={candidate.image} // This line is now commented out
                            src={candidate.image} // Using fallback random user images
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
