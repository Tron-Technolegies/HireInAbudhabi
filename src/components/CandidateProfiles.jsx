import React, { useState } from "react";
import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

export default function CandidateProfiles() {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [filter, setFilter] = useState("");

  const candidates = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Social Media Manager",
      experience: "5+ years",
      location: "Dubai, UAE",
      expertise: ["Instagram", "TikTok", "Content Strategy"],
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "Grew 3 brands to 100k+ followers in 6 months",
    },
    {
      id: 2,
      name: "Ahmed Al-Mansoori",
      role: "SEO Specialist",
      experience: "7+ years",
      location: "Abu Dhabi, UAE",
      expertise: ["Google Ranking", "Keyword Research", "Technical SEO"],
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "Boosted organic traffic by 300% for UAE firms",
    },
    {
      id: 3,
      name: "Elena Petrova",
      role: "PPC Ads Expert",
      experience: "4+ years",
      location: "Sharjah, UAE",
      expertise: ["Google Ads", "Facebook Ads", "Conversion Tracking"],
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      bio: "Reduced CAC by 40% with quality leads",
    },
    {
      id: 4,
      name: "Mohamed Farouk",
      role: "Email Marketing Expert",
      experience: "6+ years",
      location: "Dubai, UAE",
      expertise: ["Klaviyo", "Segmentation", "Automation"],
      image: "https://randomuser.me/api/portraits/men/55.jpg",
      bio: "Achieved 250% ROI on email campaigns",
    },
    {
      id: 5,
      name: "Lina Abdulrahman",
      role: "Brand Strategist",
      experience: "8+ years",
      location: "Abu Dhabi, UAE",
      expertise: ["Positioning", "Storytelling", "Identity"],
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      bio: "Built identity for 15+ Gulf startups",
    },
    {
      id: 6,
      name: "Jason Lee",
      role: "Content Marketing Expert",
      experience: "5+ years",
      location: "Dubai, UAE",
      expertise: ["Blog Strategy", "SEO Writing", "Funnels"],
      image: "https://randomuser.me/api/portraits/men/61.jpg",
      bio: "Doubled inbound leads with blogs",
    },
  ];

  const filteredCandidates = candidates.filter((c) => {
    const searchTerm = filter.toLowerCase();
    return (
      c.name.toLowerCase().includes(searchTerm) ||
      c.expertise.some((skill) => skill.toLowerCase().includes(searchTerm))
    );
  });

  const selectedCandidate = candidates.find((c) => c.id === selectedProfile);
  const whatsappMessage = selectedCandidate
    ? encodeURIComponent(
        `I'd like to proceed with hiring ${selectedCandidate.name}`
      )
    : "";

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6">
            Meet Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              Marketing Experts
            </span>
          </h2>
          <p className="text-gray-600 mt-2">
            Pre-vetted professionals ready to grow your business in Abu Dhabi
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mt-20">
          {filteredCandidates.length === 0 ? (
            <p className="text-center text-gray-500 col-span-full">
              No candidates found.
            </p>
          ) : (
            filteredCandidates.map((candidate) => (
              <article
                key={candidate.id}
                className={`relative bg-white rounded-2xl shadow-md border border-gray-200 pt-20 pb-6 px-6 flex flex-col items-center text-center transition hover:shadow-lg ${
                  selectedProfile === candidate.id
                    ? "ring-2 ring-green-400"
                    : ""
                }`}
              >
                <div className="absolute -top-14">
                  <img
                    src={candidate.image}
                    alt={candidate.name}
                    className="w-28 h-28 rounded-full object-cover border-4 border-white shadow"
                  />
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  {candidate.name}
                </h3>
                <p className="text-green-600 font-medium text-sm">
                  {candidate.role}{" "}
                  <span className="text-gray-500">
                    ({candidate.experience})
                  </span>
                </p>

                <p className="flex items-center text-gray-500 text-xs mt-1 space-x-1 justify-center">
                  <FaMapMarkerAlt />
                  <span>{candidate.location}</span>
                </p>

                <p className="text-sm text-gray-600 mt-3 mb-4 px-4">
                  {candidate.bio}
                </p>

                <div className="w-full">
                  <div className="text-xs font-semibold text-gray-500 mb-1">
                    Expertise
                  </div>
                  <div className="flex flex-wrap justify-center gap-2">
                    {candidate.expertise.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto w-full pt-6 flex justify-center">
                  <button
                    onClick={() => setSelectedProfile(candidate.id)}
                    className={`text-sm font-semibold px-6 py-3 rounded-full shadow-md focus:outline-none cursor-pointer focus:ring-green-500 transition ${
                      selectedProfile === candidate.id
                        ? "bg-green-600 text-white"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    }`}
                    title={
                      selectedProfile === candidate.id
                        ? "This candidate is selected"
                        : "Click to select this candidate"
                    }
                  >
                    {selectedProfile === candidate.id ? "Selected" : "Select"}
                  </button>
                </div>
              </article>
            ))
          )}
        </div>

        {selectedProfile && (
          <div className="mt-12 text-center">
            <a
              href={`https://wa.me/971568145866?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-3 px-6 py-3 text-base font-semibold text-white bg-green-600 rounded-full transition-all duration-300 hover:bg-green-500 hover:scale-105 overflow-hidden"
              aria-label={`Hire ${selectedCandidate.name} on WhatsApp`}
            >
              <div className="absolute inset-0 bg-green-400 rounded-full opacity-0 hover:opacity-50 transition-opacity duration-300 transform scale-0 hover:scale-150 origin-center"></div>
              <FaWhatsapp className="text-lg z-10" />
              <span className="z-10">Hire {selectedCandidate.name}</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
