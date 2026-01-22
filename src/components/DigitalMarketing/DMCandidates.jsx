import React, { useState, useEffect, useMemo } from "react";
import { ChevronLeft, ChevronRight, MapPin, MessageCircle } from "lucide-react";
import { handleChatClickCustom } from "../../utils/whatsapp";

const dmCandidates = [
  {
    id: 1,
    name: "Muhammed Hashim",
    position: "SEO Specialist",
    skills: [
      "SEO",
      "Wordpress",
      "Social Media",
      "Performance Marketing",
      "Content writing",
    ],
    description:
      "Optimizes websites to improve visibility, rankings, and organic traffic.",
    photo: "/photos/digital-marketing/Muhammed-Hashim-Photo.webp",
    alt: "Muhammed Hashim - SEO Specialist in Abu Dhabi",
    resume: "/resumes/digital-marketing/Muhammed-Hashim-Resume.pdf",
  },
  {
    id: 2,
    name: "Muhammed Shameer",
    position: "Social Media Marketer",
    skills: [
      "Wordpress",
      "SEO",
      "Performance Marketing",
      "Social Media",
      "TikTok Ads",
    ],
    description:
      "Builds brand awareness and audience engagement across social platforms.",
    photo: "/photos/digital-marketing/Muhammed-Shameer-Photo.webp",
    alt: "Muhammed Shameer - Social Media Manager in Dubai",
    resume: "/resumes/digital-marketing/Muhammed-Shameer-Resume.pdf",
  },
  {
    id: 3,
    name: "Dheeraj M R",
    position: "Digital Marketing Executive",
    skills: ["Google Ads", "Meta Ads", "Canva", "SEO", "Social Media"],
    description:
      "Coordinates marketing initiatives that lead impactful business results.",
    photo: "/photos/digital-marketing/Dheeraj-M-R-Photo.webp",
    alt: "Dheeraj M R - Digital Marketing expert in Abu Dhabi",
    resume: "/resumes/digital-marketing/Dheeraj-M-R-Resume.pdf",
  },
  {
    id: 4,
    name: "Riyas Abubacker",
    position: "Digital Marketing Specialist",
    skills: ["Google Ads", "Meta Ads", "SEO", "Wordpress", "Canva"],
    description:
      "Develops integrated strategies to strengthen online presence and engagement",
    photo: "/photos/digital-marketing/Riyas-Abubacker-Photo.webp",
    alt: "Riyas Abubacker - Digital Marketing expert in Abudhabi",
    resume: "/resumes/digital-marketing/Riyas-Abubacker-Resume.pdf",
  },
  {
    id: 5,
    name: "Shinas AR",
    position: "Performance Marketer",
    skills: [
      "SEO",
      "Performance Marketing",
      "Content writing",
      "Wordpress",
      "Social Media",
    ],
    description:
      "Focused on scaling campaigns that achieve both reach and revenue.",
    photo: "/photos/digital-marketing/Shinas-AR-Photo.webp",
    alt: "Shinas AR - Performance marketing expert in abudhabi",
    resume: "/resumes/digital-marketing/Shinas-AR-Resume.pdf",
  },
];

export default function DMCandidates() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  const candidates = useMemo(() => {
    return dmCandidates.map((candidate, index) => ({
      id: index,
      ...candidate,
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
    setCurrentIndex(
      (prev) => (prev - 1 + candidates.length) % candidates.length,
    );
  };

  const selectCandidate = (candidate) => {
    setSelectedCandidate(
      selectedCandidate?.id === candidate.id ? null : candidate,
    );
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white lg:min-h-screen">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 ">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4">
            Our <span className="">Digital Marketing Experts</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Ignite Your Brand, Engage Your Audience Hire Marketing Mavericks
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative max-w-6xl mx-auto  "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Buttons - Hidden on mobile, visible on larger screens */}
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

          {/* Carousel Track */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerPage)}%)`,
              }}
            >
              {dmCandidates.map((candidate) => (
                <div
                  key={candidate.id}
                  className={`flex-shrink-0  px-2 sm:px-3 mb-6 sm:mb-6 ${
                    cardsPerPage === 1
                      ? "w-full"
                      : cardsPerPage === 2
                        ? "w-1/2"
                        : "w-1/3"
                  }`}
                >
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-200 h-auto flex flex-col overflow-hidden">
                    {/* Card Content */}
                    <div className="p-4 sm:p-6 flex-1 flex flex-col">
                      {/* Profile Image */}
                      <div className="flex justify-center mb-4">
                        <div className="relative">
                          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shadow-lg ring-2 ring-white">
                            <img
                              src={candidate.photo}
                              alt={candidate.alt}
                              className="w-full h-full object-center"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Profile Info */}
                      <div className="text-center flex-1 space-y-3 sm:space-y-4">
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                            {candidate.name}
                          </h3>
                          <p className="text-gray-700 font-semibold text-sm sm:text-base mb-1">
                            {candidate.position}
                          </p>
                        </div>

                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5">
                          {candidate.description}
                        </p>

                        {/* Skills */}
                        <div>
                          <h4 className="text-xs font-semibold text-gray-700 mb-3">
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
                    </div>

                    {/* Action Buttons - Now at bottom */}
                    <div className="p-4 sm:p-6 pt-0 mt-auto">
                      {/* Action Buttons */}
                      <div className="p-4 sm:p-6 pt-0 mt-auto">
                        <div className="flex flex-col gap-2 w-full">
                          <button
                            onClick={() => selectCandidate(candidate)}
                            className={`w-full py-2.5 sm:py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
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
                            <>
                              {/* WhatsApp Hire Button */}
                              <button
                                onClick={() =>
                                  handleChatClickCustom(
                                    `Hi! I'm interested in hiring ${candidate.name} for a Digital Marketing position. Can we discuss further?`,
                                  )
                                }
                                className="inline-flex items-center justify-center gap-2 w-full py-2.5 sm:py-3 bg-green-500 text-white rounded-full font-semibold text-sm hover:bg-green-600 transition-all duration-300 shadow-lg animate-in slide-in-from-bottom-2 duration-200"
                              >
                                <MessageCircle className="w-4 h-4" />
                                Hire Now
                              </button>

                              {/* Download Resume Button */}
                              <a
                                href={candidate.resume}
                                download={`${candidate.name}-Resume.pdf`}
                                className="w-full py-2.5 sm:py-3 text-center bg-blue-600 text-white rounded-full font-semibold text-sm hover:bg-blue-700 transition-all duration-300 shadow-lg"
                              >
                                Download Resume
                              </a>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Mobile Navigation Buttons - Placed at the bottom inside the card */}
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

          {/* Dots Indicator - Hidden on mobile */}
          <div className="hidden sm:flex justify-center lg:mt-10 gap-3">
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
