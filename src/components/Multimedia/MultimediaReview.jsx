import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";

export default function MultimediaReview() {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      role: "Video Editor",
      name: "AHMED R.",
      initial: "A",
      position: "Co-founder",
      review:
        "They are some of the best freelance video editors we hired using Hire in Abu Dhabi for our product release reels and social media content. Thank you for the incredibly well done editing and the creative hints which made the result even better. You just don't get this level of multimedia proficiency on the freelancers. Highly recommended!",
      author: "— Ahmed R., Co-founder",
    },
    {
      role: "Multimedia Specialist",
      name: "FATIMA NOOR",
      initial: "F",
      position: "Marketing Lead",
      review:
        "We hired a full-time multimedia professional using Hire in Abu Dhabi to take care of all of our in-house as well as client-based media content. The onboarding process was seamless and the expert has since become an integral part of our team. Their level of video production, photo editing, and motion design amounts they offer is second to none.",
      author: "— Fatima Noor, Marketing Lead",
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
                multimedia experts
              </h3>

              <p className="text-lg md:text-xl text-black leading-relaxed">
                From video editing to motion design, our multimedia freelancers and full-time pros
                are reshaping content in the UAE.
              </p>

              <button className="bg-black text-white px-8 py-4  text-lg hover:bg-gray-800 transition-colors rounded-full duration-300">
                Browse Multimedia Talent
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
