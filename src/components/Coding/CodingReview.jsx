import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";

export default function CodingReview() {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      role: "Full-Stack Developer",
      name: "ALI M.",
      initial: "A",
      position: "Operations Manager",
      review:
        "We needed a fast and responsive internal dashboard for our logistics company. The developer hired via this platform was efficient, wrote clean code, and helped optimize some backend processes. Deadlines were met without compromise on quality.",
      author: "— Ali M., Operations Manager",
    },
    {
      role: "Frontend Developer",
      name: "SARAH KHAN",
      initial: "S",
      position: "Program Director",
      review:
        "Our NGO's website was very outdated and not responsive to present-day standards. A coder should be applauded for delivering a beautifully coded site with flawless mobile optimization. Communication was smooth, and proper documentation was provided.",
      author: "— Sarah Khan, Program Director",
    },
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="bg-green-50 py-20">
      <div className="container mx-auto px-4">
        <div className="rounded-3xl p-8 md:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Section */}
            <div className="space-y-6">
              <h3 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                Client reviews about
                <br />
                coding talent
              </h3>

              <p className="text-lg md:text-xl text-black leading-relaxed">
                Whether it's backend optimization or modern frontend design,
                <br />
                hear from companies that hired top-tier developers in the UAE.
              </p>

              <button className="bg-black text-white px-8 py-4 font-bold text-lg hover:bg-gray-800 transition-colors duration-300">
                Browse Developers
              </button>
            </div>

            {/* Right Section - Review Card */}
            <div className="relative">
              {/* Navigation Buttons */}
              <div className="absolute -top-12 right-0 flex gap-5 z-10">
                <button
                  onClick={prevReview}
                  className="w-10 h-10 bg-transparent border-2 border-black rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
                >
                  <MdOutlineKeyboardArrowLeft className="text-black text-lg font-bold" />
                </button>
                <button
                  onClick={nextReview}
                  className="w-10 h-10 bg-transparent border-2 border-black rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
                >
                  <MdOutlineKeyboardArrowRight className="text-black text-lg font-bold" />
                </button>
              </div>

              {/* Review Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">
                      {reviews[currentReview].initial}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-black">{reviews[currentReview].role}</h4>
                    <p className="text-gray-600 text-sm">{reviews[currentReview].name}</p>
                  </div>
                </div>

                <p className="text-gray-800 leading-relaxed mb-4">
                  {reviews[currentReview].review}
                </p>

                <p className="text-sm text-gray-600 font-medium">{reviews[currentReview].author}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
