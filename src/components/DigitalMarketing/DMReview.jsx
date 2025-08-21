import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export default function DMReview() {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      role: "Digital Marketing Expert",
      name: "HUSSAIN A.",
      initial: "H",
      position: "CEO",
      review:
        "We've tried freelancers before, but the digital marketing expert we found here was on another level. They increased our Google Ads ROI by 3x within 45 days. Weekly reports, proper targeting, and smart budgeting—it felt like working with a seasoned agency.",
      author: "— Hussain A., CEO",
    },
    {
      role: "Social Media Expert",
      name: "REEM D.",
      initial: "R",
      position: "Owner",
      review:
        "As a small business, we struggled to create consistent content. The social media expert we hired gave us a full monthly plan, redesigned our IG feed, and even ran Meta ads that led to real sales. Best decision we made this quarter!",
      author: "— Reem D., Owner",
    },
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="bg-white py-8 lg:py-12">
      <div className="container mx-auto px-4">
        <div className="rounded-3xl p-4 md:p-8 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 lg:space-y-6">
              <h3 className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-black leading-tight">
                Client reviews about
                <br />
                digital marketers
              </h3>

              <p className="text-base sm:text-lg lg:text-lg xl:text-xl text-black leading-relaxed">
                Great results? It's who you hire, not what you use.{" "}
                <br className="hidden sm:block" />
                Forget the gimmicks meet the marketers who make real magic happen. See why our
                partners keep coming back.
              </p>

              <button className="bg-black rounded-full text-white px-6 sm:px-8 py-3 sm:py-4 font-bold text-base sm:text-lg hover:bg-gray-800 transition-colors duration-300">
                Browse for Experts
              </button>
            </div>

            {/* Right Content - Review Card */}
            <div className="relative mt-6 lg:mt-0">
              {/* Navigation Buttons - Desktop only */}
              <div className="hidden lg:flex absolute -top-12 right-0 gap-5 z-10">
                <button
                  onClick={prevReview}
                  className="w-10 h-10 bg-transparent border-2 border-black rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
                >
                  <span className="text-black text-lg font-bold">
                    <MdOutlineKeyboardArrowLeft />
                  </span>
                </button>
                <button
                  onClick={nextReview}
                  className="w-10 h-10 bg-transparent border-2 border-black rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
                >
                  <span className="text-black text-lg">
                    <MdOutlineKeyboardArrowRight />
                  </span>
                </button>
              </div>

              {/* Review Card */}
              <div className="bg-green-50 rounded-2xl p-4 sm:p-6 shadow-lg">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-base sm:text-lg">
                      {reviews[currentReview].initial}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-lg sm:text-xl font-bold text-black leading-tight">
                      {reviews[currentReview].role}
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      {reviews[currentReview].name}
                    </p>
                  </div>
                </div>

                <p className="text-gray-800 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                  {reviews[currentReview].review}
                </p>

                <p className="text-xs sm:text-sm text-gray-600 font-medium">
                  {reviews[currentReview].author}
                </p>
              </div>

              {/* Mobile Navigation - Bottom */}
              <div className="lg:hidden flex justify-center items-center gap-4 mt-4">
                <button
                  onClick={prevReview}
                  className="w-10 h-10 bg-white border-2 border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 shadow-md"
                >
                  <MdOutlineKeyboardArrowLeft className="text-lg" />
                </button>

                {/* Dots indicator */}
                <div className="flex gap-2">
                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentReview(index)}
                      className={`transition-all duration-300 ${
                        index === currentReview
                          ? "w-8 h-2 bg-black rounded-full"
                          : "w-2 h-2 bg-gray-300 rounded-full hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextReview}
                  className="w-10 h-10 bg-white border-2 border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 shadow-md"
                >
                  <MdOutlineKeyboardArrowRight className="text-lg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
