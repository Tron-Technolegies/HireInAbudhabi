import React from "react";

export default function DMHero() {
  return (
    <section className="bg-green-50 pt-12 sm:pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 sm:space-y-8 mb-8 sm:mb-10">
          <h1 className="text-xl sm:text-3xl md:text-4xl font-extrabold leading-snug sm:leading-tight text-gray-900">
            Your Strategic Partner <span className="">Digital Marketing</span> Expert{" "}
            <br className="hidden sm:block" /> in Abu Dhabi, UAE
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed sm:leading-relaxed">
            Skip the search & Save the time. Grow now with a reliable digital marketing expert in
            Abu Dhabi. Adaptive plans, metrics-based outcomes and genuine impact.
          </p>

          <div className="flex justify-center pt-2">
            <button title="Contact-Now" className="flex justify-center lg:justify-start">
              <a
                href="https://wa.me/971568145866"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center gap-3 px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-white bg-green-600 rounded-full transition-all duration-300 hover:bg-green-500 hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-green-400 rounded-full opacity-0 hover:opacity-50 transition-opacity duration-300 transform scale-0 hover:scale-150 origin-center"></div>
                <span className="z-10">Hire now</span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
