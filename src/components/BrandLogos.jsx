import React from "react";
import microsoft from "../assets/logos/Microsoft-Logo.png";
import google from "../assets/logos/google.webp";
import amazon from "../assets/logos/amazon.png";
import netflix from "../assets/logos/Netflix-logo.jpg";
import apple from "../assets/logos/apple.png";

export default function BrandLogos() {
  const topRowLogos = [
    { name: "Microsoft", img: microsoft },
    { name: "Google", img: google },
    { name: "Apple", img: apple },
    { name: "Amazon", img: amazon },
    { name: "Netflix", img: netflix },
  ];

  const bottomRowLogos = [
    { name: "Microsoft", img: microsoft },
    { name: "Google", img: google },
    { name: "Apple", img: apple },
    { name: "Amazon", img: amazon },
    { name: "Netflix", img: netflix },
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Teamed up with industry leaders</h2>
          <p className="text-lg text-gray-600">Trusted By Startups & Agencies in the UAE</p>
        </div>

        {/* Top row - moving left */}
        <div className="relative mb-8">
          <div className="flex animate-scroll-left">
            {/* First set of logos */}
            {topRowLogos.map((logo, index) => (
              <div
                key={`top-1-${index}`}
                className="flex-shrink-0 mx-8 w-32 h-20 bg-white rounded-lg shadow-lg flex items-center justify-center hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={logo.img}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain p-2"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {topRowLogos.map((logo, index) => (
              <div
                key={`top-2-${index}`}
                className="flex-shrink-0 mx-8 w-32 h-20 bg-white rounded-lg shadow-lg flex items-center justify-center hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={logo.img}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain p-2"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row - moving right */}
        <div className="relative">
          <div className="flex animate-scroll-right">
            {/* First set of logos */}
            {bottomRowLogos.map((logo, index) => (
              <div
                key={`bottom-1-${index}`}
                className="flex-shrink-0 mx-8 w-32 h-20 bg-white rounded-lg shadow-lg flex items-center justify-center hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={logo.img}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain p-2"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {bottomRowLogos.map((logo, index) => (
              <div
                key={`bottom-2-${index}`}
                className="flex-shrink-0 mx-8 w-32 h-20 bg-white rounded-lg shadow-lg flex items-center justify-center hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={logo.img}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain p-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }

        /* Pause animation on hover */
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
