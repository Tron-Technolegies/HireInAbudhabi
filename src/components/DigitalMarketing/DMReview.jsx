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
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className=" rounded-3xl p-8 md:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                Client reviews about
                <br />
                digital marketers
              </h3>

              <p className="text-lg md:text-xl text-black leading-relaxed">
                Great results? It’s who you hire, not what you use. <br /> Forget the gimmicks meet
                the marketers who make real magic happen. See why our partners keep coming back.
              </p>

              <button className="bg-black rounded-full text-white px-8 py-4 font-bold text-lg hover:bg-gray-800 transition-colors duration-300">
                Browse for Experts
              </button>
            </div>

            {/* Right Content - Review Card */}
            <div className="relative">
              {/* Navigation Buttons */}
              <div className="absolute -top-12 right-0 flex gap-5 z-10">
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
                  className="w-10 h-10  bg-transparent border-2 border-black rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
                >
                  <span className="text-black text-lg">
                    <MdOutlineKeyboardArrowRight />
                  </span>
                </button>
              </div>

              {/* Review Card */}
              <div className="bg-green-50 rounded-2xl p-6 shadow-lg">
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
