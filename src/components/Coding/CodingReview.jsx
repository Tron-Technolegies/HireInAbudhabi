import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import handcar from "../../assets/logos/Handcar.webp";
import dahab from "../../assets/logos/DahabMiners.webp";
import { handleChatClickCustom } from "../../utils/whatsapp";

export default function CodingReview() {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      role: "Handcar",
      name: "ALI M.",
      logo: handcar,
      alt: "Handacar branding - professional web development in Abu Dhabi and coding experts",
      position: "Operations Manager",
      review:
        "The developers we hired through Hire in Abu Dhabi built a complete Handcar solution website and app with service, parts, and subscription. It’s accelerating our growth and customer reach.",
      author: "Rushil , Chief Executive Officer",
      website: "https://handcar.ae/",
    },
    {
      role: "Dahab Miners",
      name: "SARAH KHAN",
      logo: dahab,
      alt: "Dahab Miners logo - coding experts in Abu Dhabi and freelance web designer services.",
      position: "Program Director",
      review:
        "We hired a developer through Hire in Abu Dhabi, and the results were outstanding. They built our website and app, and the entire experience was straightforward and consistent",
      author: "Rizwan Kamarudheen, Chief Executive Officer",
      website: "https://dahabminers.com/",
    },
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="bg-green-50 py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="rounded-3xl p-6 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Section */}
            <div className="space-y-6">
              <h3 className="text-3xl sm:text-5xl font-bold text-black leading-tight">
                Client reviews about
                <br />
                coding talent
              </h3>

              <p className="text-base sm:text-xl text-black leading-relaxed">
                Whether it's backend optimization or modern frontend design,
                hear from companies that hired top-tier developers in the UAE.
              </p>

              <button
                onClick={() =>
                  handleChatClickCustom(
                    "Hello, I'm interested in your Coding services.",
                  )
                }
                className="bg-black text-white px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg rounded-full font-bold hover:bg-gray-800 transition-colors duration-300"
              >
                Browse Developers
              </button>
            </div>

            {/* Right Section - Review Card */}
            <div>
              <div className="bg-white rounded-2xl p-6 shadow-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    {/* Logo with link */}
                    <a
                      href={reviews[currentReview].website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden"
                    >
                      <img
                        src={reviews[currentReview].logo}
                        alt={reviews[currentReview].alt}
                        className="w-full h-full object-contain"
                      />
                    </a>

                    <div className="min-w-0 flex-1">
                      {/* Role / Company name with link */}
                      <a
                        href={reviews[currentReview].website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        <h4 className="text-lg sm:text-xl font-bold text-black leading-tight">
                          {reviews[currentReview].role}
                        </h4>
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-800 leading-relaxed mb-4">
                    "{reviews[currentReview].review}"
                  </p>

                  <p className="text-sm text-gray-600 font-medium">
                    {reviews[currentReview].author}
                  </p>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-end gap-4 mt-6">
                  <button
                    onClick={prevReview}
                    className="w-10 h-10 border-2 border-black rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300"
                  >
                    <MdOutlineKeyboardArrowLeft className="text-black text-lg font-bold" />
                  </button>
                  <button
                    onClick={nextReview}
                    className="w-10 h-10 border-2 border-black rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300"
                  >
                    <MdOutlineKeyboardArrowRight className="text-black text-lg font-bold" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
