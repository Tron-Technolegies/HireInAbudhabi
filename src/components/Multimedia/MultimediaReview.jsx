import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import tikkatonight from "../../assets/logos/TikkaTonight.webp";
import lebanesemill from "../../assets/logos/LebaneseMill.webp";
import { handleChatClickCustom } from "../../utils/whatsapp";

export default function MultimediaReview() {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      role: "Tikka Tonight",
      name: "AHMED R.",
      logo: tikkatonight,
      alt: "Tikka to Night restaurant logo - designed by graphic designer in Abu Dhabi",
      position: "Co-founder",
      review:
        "We hired a graphic designer through Hire in Abu Dhabi to create our social media posts. The designs are professional, engaging, and perfectly reflect our brand.",
      author: "— Ahmed R., Co-founder",
      website: "https://www.instagram.com/tikkatonightuae/",
    },
    {
      role: "Lebanese mill",
      name: "FATIMA NOOR",
      logo: lebanesemill,
      alt: "Lebanese Mill Restaurant logo - visual identity design by video editor Abu Dhabi and freelance graphic designer",
      position: "Marketing Lead",
      review:
        "With multimedia talent from Hire in Abu Dhabi, Lebanese Mill Restaurant showcased its authentic flavors through engaging visuals and videos making the brand more appealing and memorable to customers.",
      author: "— Abdullah, CMO",
      website: "https://lebanesemill.ae/",
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
                multimedia experts
              </h3>

              <p className="text-base sm:text-xl text-black leading-relaxed">
                From video editing to motion design, our multimedia freelancers
                and full-time pros are reshaping content in the UAE.
              </p>

              <button
                onClick={() =>
                  handleChatClickCustom(
                    "Hello, I'm interested in your Multimedia services.",
                  )
                }
                className="bg-black text-white px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg rounded-full font-bold hover:bg-gray-800 transition-colors duration-300"
              >
                Browse Multimedia Talent
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
