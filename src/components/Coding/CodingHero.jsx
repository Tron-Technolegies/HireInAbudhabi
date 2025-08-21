import React from "react";

export default function CodingHero() {
  return (
    <section className="bg-green-50 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-8">
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug text-gray-900">
            Hire High-Performance <span className="">Coding</span> experts{" "}
            <br className="hidden sm:block" /> in Abu Dhabi, UAE
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed px-2">
            Code Smarter. Scale Faster. Why wait months to hire when your project needs to launch
            now? No compromises. Just results. We match you with tech talent that builds, ships, and
            scales your vision.
          </p>

          {/* Button */}
          <div className="flex justify-center pt-2">
            <a
              href="https://wa.me/971568145866"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-3 px-5 sm:px-6 py-3 text-sm sm:text-base font-semibold text-white bg-green-600 rounded-full transition-all duration-300 hover:bg-green-500 hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-green-400 rounded-full opacity-0 hover:opacity-50 transition-opacity duration-300 transform scale-0 hover:scale-150 origin-center"></div>
              <span className="z-10">Hire now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
