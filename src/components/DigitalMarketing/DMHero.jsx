import React from "react";

export default function DMHero() {
  return (
    <section className=" bg-green-50 pt-20 pb-13">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8 mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center leading-tight text-gray-900">
            Your Strategic Partner: Digital Marketing Expert <br /> in Abu Dhabi, UAE
          </h1>

          <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
            Skip the search & Save the time. Grow now with a reliable{" "}
            <strong>digital marketing expert in Abu Dhabi. </strong>
            Adaptive plans, metrics-based outcomes and genuine impact.
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
