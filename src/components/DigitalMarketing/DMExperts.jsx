import React from "react";

export default function DMExperts() {
  const offers = [
    "Digital Marketing Specialists",
    "SEO Specialist",
    "Performance Marketer",
    "Social Media Marketer",
    "Content creators",
    "Wordpress Experts",
  ];
  return (
    <div>
      <div className="max-w-6xl bg-white mx-auto lg:py-16 py-10 px-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold  text-center text-gray-900 mb-6">
            Your Next Marketing expert ready here
          </h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed sm:leading-relaxed">
            Offer any SEO performer in Dubai at the bang of results or a full digital
            marketing-studio team, and meet the people who can give your brand a new identity.
          </p>
        </div>

        <div className=" p-2 rounded-3xl">
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-5">
            {offers.map((item, index) => (
              <div
                key={index}
                className="group flex items-center justify-between p-4 bg-blue-50 rounded-2xl hover:bg-blue-100 cursor-pointer transition-all duration-300 hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-gray-900  group-hover:text-gray-800">
                  {item}
                </h3>
                <span className="text-gray-900 group-hover:translate-x-1 transition-transform duration-300"></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
