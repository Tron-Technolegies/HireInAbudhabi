import React from "react";

export default function CodingHero() {
  return (
    <section className=" bg-green-50 pt-20 pb-13">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8 mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center leading-tight text-gray-900">
            Hire High-Performance Coding experts <br /> in Abu Dhabi, UAE
          </h1>

          <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
            Code Smarter. Scale Faster. Why wait months to hire when your project needs to launch
            now? No compromises. Just results. We match you with tech talent that builds, ships, and
            scales your vision.
          </p>

          <div className="flex justify-center pt-4">
            <button className="px-8 py-4 bg-green-600 text-white font-semibold text-lg rounded-full hover:bg-green-700 hover:shadow-lg transition-all duration-300">
              HIRE NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
