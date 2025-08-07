import React from "react";
import AboutUsHeroImage from "../../assets/Aboutus-hero.jpg";

export default function AboutHero() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Section */}
            <div className="text-center lg:text-left">
              <p className="text-green-600 text-lg sm:text-xl font-semibold mb-4">
                What Sets Us Apart
              </p>
              <h1 className="text-4xl md:text-4xl font-bold leading-tight mb-4 w-fit text-white">
                Your Reliable Partner for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                  Outsourcing & Remote Staffing Solutions
                </span>{" "}
                in Abu Dhabi, UAE
              </h1>
              <p className="text-base sm:text-lg lg:text-xlleading-relaxed mb-10  max-w-2xl mx-auto lg:mx-0">
                Hire In Abu Dhabi is a flexible talent sourcing platform in the UAE. We're here to
                facilitate companies, startups, and solo entrepreneurs to connect with thoroughly
                screened digital marketing, coding, and multimedia experts.{" "}
                <br className="hidden sm:inline" />
                We're not a conventional BPO. We provide more intelligent, flexible hiring
                freelance, part-time, or full-time.
              </p>
              <button className="px-10 py-4 bg-green-600 text-white font-bold text-lg rounded-full hover:bg-gray-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                Hire Now
              </button>
            </div>

            {/* Image Section (Cleaned Up) */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={AboutUsHeroImage}
                alt="Team collaborating remotely in Abu Dhabi"
                className="rounded-2xl shadow-xl object-contain max-h-[400px] "
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
