import React, { useState, useMemo } from "react";
import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const allCandidatesRaw = [
  // Digital Marketing
  { name: "Gokul SP", role: "Performance Marketer", category: "DM" },
  { name: "Abdul Rauf", role: "SEO Specialist", category: "DM" },
  { name: "Dilna Fathima", role: "Project Manager", category: "DM" },
  { name: "Jabir Jaffer", role: "Project Manager", category: "DM" },
  { name: "Rizwan Shamsudheen", role: "Project Manager", category: "DM" },
  { name: "Muhammed Shameer", role: "SEO Specialist", category: "DM" },
  { name: "Yasim", role: "Project Manager", category: "DM" },
  { name: "Muhammed Irshad PM", role: "Project Manager", category: "DM" },
  { name: "Adarsh Dileep", role: "Project Manager", category: "DM" },

  // Coding
  { name: "Abin Joshy", role: "Data Scientist", category: "Coding" },
  { name: "Rishad", role: "MERN Stack Developer", category: "Coding" },
  { name: "Jalal", role: "Python Full Stack Developer", category: "Coding" },
  { name: "Sanjay", role: "Python Full Stack Developer", category: "Coding" },
  { name: "Krishnadev", role: "Python Full Stack Developer", category: "Coding" },

  // Multimedia
  { name: "Fathima Nasrin", role: "Graphic Designer", category: "Multimedia" },
  { name: "Ajmal", role: "Video Editor", category: "Multimedia" },
  { name: "Jazi", role: "Motion Designer", category: "Multimedia" },
  { name: "Nishad", role: "3D Artist", category: "Multimedia" },
  { name: "Nahil", role: "Visual Editor", category: "Multimedia" },
];

export default function CandidateProfiles() {
  const [showAll, setShowAll] = useState(false);
  const [selectedProfileId, setSelectedProfileId] = useState(null);

  const allCandidates = useMemo(() => {
    return allCandidatesRaw.map((candidate, index) => ({
      id: index,
      ...candidate,
      experience: "1+ years",
      location: "UAE",
      image: `https://randomuser.me/api/portraits/${
        index % 2 === 0 ? "men" : "women"
      }/${40 + index}.jpg`,
      bio:
        candidate.category === "DM"
          ? "Optimized campaigns for top-tier brands."
          : candidate.category === "Coding"
          ? "Built scalable full-stack solutions."
          : "Produced high-impact visuals and animations.",
      expertise:
        candidate.category === "DM"
          ? ["SEO", "SMM", "Content"]
          : candidate.category === "Coding"
          ? ["React", "Python", "MongoDB"]
          : ["Photoshop", "After Effects", "Premiere"],
    }));
  }, []);

  const shuffled = useMemo(() => {
    return [...allCandidates].sort(() => 0.5 - Math.random());
  }, [allCandidates]);

  const visibleCandidates = showAll ? shuffled : shuffled.slice(0, 9);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6">
            Meet Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              Talented Team
            </span>
          </h2>
          <p className="text-gray-600 mt-2">
            Experts in Digital Marketing, Coding, and Multimedia.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {visibleCandidates.map((candidate) => {
            const isSelected = selectedProfileId === candidate.id;
            const whatsappMessage = encodeURIComponent(
              `I'd like to proceed with hiring ${candidate.name}`
            );

            return (
              <article
                key={candidate.id}
                onClick={() =>
                  setSelectedProfileId(isSelected ? null : candidate.id)
                }
                className={`relative bg-white rounded-2xl shadow-md border border-gray-200 pt-20 pb-6 px-6 flex flex-col items-center text-center transition hover:shadow-lg cursor-pointer ${
                  isSelected ? "ring-2 ring-green-400" : ""
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

                {isSelected && (
                  <div className="mt-6">
                    <a
                      href={`https://wa.me/971568145866?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative inline-flex items-center justify-center gap-3 px-6 py-3 text-base font-semibold text-white bg-green-600 rounded-full transition-all duration-300 hover:bg-green-500 hover:scale-105 overflow-hidden"
                      aria-label={`Hire ${candidate.name} on WhatsApp`}
                    >
                      <div className="absolute inset-0 bg-green-400 rounded-full opacity-0 hover:opacity-50 transition-opacity duration-300 transform scale-0 hover:scale-150 origin-center"></div>
                      <FaWhatsapp className="text-lg z-10" />
                      <span className="z-10">Hire {candidate.name}</span>
                    </a>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {!showAll && allCandidates.length > 9 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-3 text-sm font-semibold text-green-600 border border-green-600 rounded-full hover:bg-green-50 transition"
            >
              See More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
