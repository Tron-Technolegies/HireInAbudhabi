import React from "react";
import { Users, Search, Shield, Award } from "lucide-react";

export default function HowItWorksHero() {
  // Vetting process data is no longer strictly needed in this format
  // as each item is rendered individually in the grid.
  // Kept for reference if you want to re-structure later.
  const vettingProcess = [
    { step: 1, title: "Interviews", icon: Users },
    { step: 2, title: "Portfolio assessments", icon: Award },
    { step: 3, title: "Deep background checks", icon: Shield },
    { step: 4, title: "Strong referral networks", icon: Search },
  ];

  return (
    <div className="bg-white ">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-extrabold text-black mb-10 leading-tight">
            How Hire In Abu Dhabi Works
          </h1>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify">
              <p>
                Our expert selection process is thoughtfully designed to deliver the best standards
                of quality. We ourselves choose experts from India's best institutions and outside
                India as well, not only based on their school performance but also on their
                work-experience, business skills, and solution-processing abilities.
              </p>

              <p>
                Every candidate undergoes a multi-step assessment consisting of intensive skill
                tests, one-on-one interviews, and performance tests in order to sift the
                professionals to feature in our pool.
              </p>

              <p>
                By hiring through us, you get to work with pre-screened professionals who provide
                quality and reliability as nobody else does.
              </p>
            </div>
          </div>

          {/* Right Column - Vetting List */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">We Vetted via:</h2>

              {/* Vetting List in a 2x2 grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Interview Box */}
                <div className="flex items-center space-x-4 p-4 rounded-lg border border-gray-200">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <span className="text-lg font-medium text-gray-800">Interviews</span>
                </div>

                {/* Portfolio Assessments Box */}
                <div className="flex items-center space-x-4 p-4 rounded-lg border border-gray-200">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <span className="text-lg font-medium text-gray-800">Portfolio assessments</span>
                </div>

                {/* Deep Background Checks Box */}
                <div className="flex items-center space-x-4 p-4 rounded-lg border border-gray-200">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <span className="text-lg font-medium text-gray-800">Deep background checks</span>
                </div>

                {/* Strong Referral Networks Box */}
                <div className="flex items-center space-x-4 p-4 rounded-lg border border-gray-200">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                      <Search className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <span className="text-lg font-medium text-gray-800">
                    Strong referral networks
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16 p-8 bg-blue-50 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to hire quality professionals?
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Experience the difference of working with thoroughly vetted experts
          </p>
          <a href="https://wa.me/971568145866" target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Get Started Today
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
