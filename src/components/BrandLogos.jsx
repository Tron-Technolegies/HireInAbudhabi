import React from "react";

import dahab from "../assets/logos/DahabMiners.webp";
import precious from "../assets/logos/Precious.webp";
import wexo from "../assets/logos/Wexo.webp";
import tronmarketing from "../assets/logos/TronMarketing.webp";
import tronacademy from "../assets/logos/TronAcademy.webp";
import konikkarajewellery from "../assets/logos/KonikkaraJewellery.webp";
import collectivetransportation from "../assets/logos/CollectiveTransportation.webp";
import lebanesemill from "../assets/logos/LebaneseMill.webp";
import tikkatonight from "../assets/logos/TikkaTonight.webp";
import goldengate from "../assets/logos/GoldenGate.webp";
import handcar from "../assets/logos/Handcar.webp";

export default function BrandLogos() {
  const topRowLogos = [
    {
      name: "Dahab",
      img: dahab,
      alt: "Dahab Miners company logo, cryptocurrency mining, blockchain mining solutions - IT outsourcing services in Dubai and Abu Dhabi",
    },
    {
      name: "Precious",
      img: precious,
      alt: "Precious Outsourcing Company Logo - BPO, IT, Staff Outsourcing in Dubai",
    },
    {
      name: "Tron Marketing",
      img: tronmarketing,
      alt: "Tron Marketing Logo | Digital Marketing, Branding, Social Media Marketing, Outsourcing & Staffing UAE",
    },

    {
      name: "Tikka Tonight",
      img: tikkatonight,
      alt: "Tikka to Night Restaurant Logo | Featured by BPO Outsourcing Companies in Dubai",
    },
    {
      name: "Golden Gate",
      img: goldengate,
      alt: "Golden Gate Hardware & Electrical Equipment Trading LLC Logo | Hardware, Tools & Electrical Supplies Dubai UAE | Supported by Outsourcing & Staffing UAE, BPO Outsourcing Companies in Dubai",
    },
  ];

  const bottomRowLogos = [
    {
      name: "Konikkarajewellery",
      img: konikkarajewellery,
      alt: "Konikkara Jewellery LLC Logo | HR Outsourcing, Contract Staffing in UAE",
    },
    {
      name: "Collective Transportation",
      img: collectivetransportation,
      alt: "Collective Transportation LLC Logo | IT Outsourcing Companies in Dubai",
    },
    {
      name: "Tron Academy",
      img: tronacademy,
      alt: "Tron Academy Logo | Digital Marketing Training, Online Courses, Skill Development, Outsourcing & Staffing UAE",
    },
    { name: "Wexo", img: wexo, alt: "Wexo Logo | Outsourcing & Staffing UAE" },

    {
      name: "Lebanese Mill",
      img: lebanesemill,
      alt: "Lebanese Mill Restaurant Logo | Outsourcing & Staffing UAE, IT Outsourcing Companies in Dubai",
    },
    {
      name: "HandCar",
      img: handcar,
      alt: "Handacar Logo | BPO Outsourcing Companies in Dubai",
    },
  ];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Partner with Industry Leading Experts
          </h2>
          <p className="text-lg text-gray-600 ">Trusted By Startups & Agencies in the UAE</p>
        </div>

        {/* Top row - moving left */}
        <div className="relative mt-5 mb-8">
          <div className="flex animate-scroll-left">
            {/* First set of logos */}
            {topRowLogos.map((logo, index) => (
              <div
                key={`top-1-${index}`}
                className="flex-shrink-0 mx-8 w-32 h-20 bg-white rounded-lg shadow-lg flex items-center justify-center hover:scale-105 transition-transform duration-300"
              >
                <img src={logo.img} alt={logo.alt} className="w-24 h-16 object-contain" />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {topRowLogos.map((logo, index) => (
              <div
                key={`top-2-${index}`}
                className="flex-shrink-0 mx-8 w-32 h-20 bg-white rounded-lg shadow-lg flex items-center justify-center hover:scale-105 transition-transform duration-300"
              >
                <img src={logo.img} alt={logo.alt} className="w-24 h-16 object-contain" />
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
                <img src={logo.img} alt={logo.alt} className="w-24 h-16 object-contain" />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {bottomRowLogos.map((logo, index) => (
              <div
                key={`bottom-2-${index}`}
                className="flex-shrink-0 mx-8 w-32 h-20 bg-white rounded-lg shadow-lg flex items-center justify-center hover:scale-105 transition-transform duration-300"
              >
                <img src={logo.img} alt={logo.alt} className="w-24 h-16 object-contain" />
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
